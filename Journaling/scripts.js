        // --- State Management ---
        let entries = [];
        let activeId = null;
        let isListening = false;
        let recognition = null;
        
        // Calendar & Filter State
        let calendarDate = new Date(); // Current viewing month in calendar
        let filterDate = null; // Currently filtered date (Date object or null)

        // --- Data ---
        const moods = {
            'happy': '😊',
            'calm': '😌',
            'neutral': '😐',
            'sad': '😢',
            'stressed': '😫'
        };

        const prompts = [
            "What made you smile today?",
            "Describe a challenge you overcame recently.",
            "What is one thing you are grateful for right now?",
            "How would you describe your current mood in three words?",
            "What is a goal you want to achieve this week?",
            "Who has positively influenced you lately?",
            "Describe your ideal peaceful morning.",
            "What is a memory that brings you comfort?",
            "If you could give advice to your younger self, what would it be?",
            "What is something you learned today?"
        ];

        // --- DOM Elements ---
        const entryListEl = document.getElementById('entryList');
        const titleInput = document.getElementById('entryTitle');
        const contentInput = document.getElementById('entryContent');
        const activeDateEl = document.getElementById('activeDate');
        const printDateEl = document.getElementById('printDate');
        const sidebar = document.getElementById('sidebar');
        const saveFeedback = document.getElementById('saveFeedback');
        const micBtn = document.getElementById('micBtn');
        const micIcon = document.getElementById('micIcon');
        const recOverlay = document.getElementById('recOverlay');
        const moodSelector = document.getElementById('moodSelector');
        const statsBar = document.getElementById('statsBar');
        const promptDisplay = document.getElementById('promptDisplay');
        const searchInput = document.getElementById('searchInput');
        const filterBanner = document.getElementById('filterBanner');
        const filterText = document.getElementById('filterText');
        const streakCountEl = document.getElementById('streakCount');
        
        // Modals & Buttons
        const calendarModal = document.getElementById('calendarModal');
        const calendarBtn = document.getElementById('calendarBtn');
        const calMonthLabel = document.getElementById('calMonthLabel');
        const calGrid = document.getElementById('calGrid');
        
        const insightsModal = document.getElementById('insightsModal');
        const insightsBtn = document.getElementById('insightsBtn');
        const totalEntriesVal = document.getElementById('totalEntriesVal');
        const moodChart = document.getElementById('moodChart');
        
        // Tag Elements
        const tagsSection = document.getElementById('tagsSection');
        const tagsList = document.getElementById('tagsList');
        const tagInput = document.getElementById('tagInput');

        // Image Elements
        const imageInput = document.getElementById('imageInput');
        const imageGallery = document.getElementById('imageGallery');

        // Import Elements
        const importInput = document.getElementById('importInput');

        // --- Initialization ---
        function init() {
            const saved = localStorage.getItem('journal_entries');
            if (saved) {
                entries = JSON.parse(saved);
                // Ensure legacy entries have tags/images array
                entries = entries.map(e => ({...e, tags: e.tags || [], images: e.images || [] }));
            } else {
                const initial = {
                    id: Date.now(),
                    title: 'Welcome to your Journal',
                    content: 'Start typing or click the microphone to speak...\n\nYour entries are saved automatically to your browser.',
                    date: new Date().toISOString(),
                    mood: 'happy',
                    tags: ['Introduction'],
                    images: []
                };
                entries.push(initial);
            }

            if (entries.length > 0) {
                loadEntry(entries[0].id);
            }
            
            calculateStreak();
            renderList();
            setupSpeechRecognition();
            
            // Close modals when clicking outside
            document.addEventListener('click', (e) => {
                // Calendar click outside
                if (!calendarModal.contains(e.target) && !calendarBtn.contains(e.target)) {
                    calendarModal.classList.remove('visible');
                    calendarBtn.classList.remove('active');
                }
                // Insights click outside
                if (!insightsModal.contains(e.target) && !insightsBtn.contains(e.target)) {
                    insightsModal.classList.remove('visible');
                    insightsBtn.classList.remove('active');
                }
            });
        }

        // --- Core Logic ---

        function createEntry() {
            const newId = Date.now();
            const newEntry = {
                id: newId,
                title: '',
                content: '',
                date: new Date().toISOString(),
                mood: null,
                tags: [],
                images: []
            };
            entries.unshift(newEntry);
            
            // Clear search and filter when making new entry
            searchInput.value = '';
            clearDateFilter(false); // don't re-render list yet
            
            loadEntry(newId);
            renderList();
            
            if (window.innerWidth < 768) {
                sidebar.classList.add('closed');
            }
        }

        function loadEntry(id) {
            activeId = id;
            const entry = entries.find(e => e.id === id);
            
            if (entry) {
                titleInput.value = entry.title;
                contentInput.value = entry.content;
                titleInput.disabled = false;
                contentInput.disabled = false;
                
                // Enable tags & images
                tagsSection.style.opacity = '1';
                tagsSection.style.pointerEvents = 'auto';
                tagInput.disabled = false;
                
                const dateStr = formatDate(entry.date);
                activeDateEl.textContent = dateStr;
                printDateEl.textContent = dateStr;

                // Reset UI
                updateMoodUI(entry.mood);
                updateStats();
                renderTags(entry.tags);
                renderImages(entry.images);
                promptDisplay.classList.remove('visible');
                promptDisplay.textContent = '';
            }

            renderList(); // Refresh active state in list
        }

        function saveEntry() {
            if (!activeId) return;

            const entryIndex = entries.findIndex(e => e.id === activeId);
            if (entryIndex > -1) {
                entries[entryIndex].title = titleInput.value || 'Untitled';
                entries[entryIndex].content = contentInput.value;
                // Tags and Images are autosaved in their handlers
                
                try {
                    localStorage.setItem('journal_entries', JSON.stringify(entries));
                    renderList();
                    calculateStreak(); // Recalculate streak on save
                    if (calendarModal.classList.contains('visible')) renderCalendar();
                    if (insightsModal.classList.contains('visible')) renderInsights();
                    
                    saveFeedback.classList.add('visible');
                    setTimeout(() => saveFeedback.classList.remove('visible'), 2000);
                } catch (e) {
                    alert("Storage full! Please delete some entries or images.");
                }
            }
        }

        function deleteEntry(id, event) {
            event.stopPropagation();
            if (confirm('Are you sure you want to delete this entry?')) {
                entries = entries.filter(e => e.id !== id);
                localStorage.setItem('journal_entries', JSON.stringify(entries));
                
                calculateStreak();
                
                if (entries.length > 0) {
                    loadEntry(entries[0].id);
                } else {
                    activeId = null;
                    titleInput.value = '';
                    contentInput.value = '';
                    titleInput.disabled = true;
                    contentInput.disabled = true;
                    
                    tagsSection.style.opacity = '0.5';
                    tagsSection.style.pointerEvents = 'none';
                    tagInput.disabled = true;
                    tagsList.innerHTML = '';
                    imageGallery.innerHTML = '';

                    activeDateEl.textContent = 'Select an entry';
                    updateMoodUI(null);
                    statsBar.textContent = '0 words · 0 min read';
                }
                renderList();
                if (calendarModal.classList.contains('visible')) renderCalendar();
                if (insightsModal.classList.contains('visible')) renderInsights();
            }
        }
        
        // --- Streak Calculation ---
        function calculateStreak() {
            if (entries.length === 0) {
                streakCountEl.textContent = "0";
                return;
            }

            // Get all unique dates (formatted as YYYY-MM-DD)
            const uniqueDates = [...new Set(entries.map(e => e.date.split('T')[0]))];
            
            // Sort dates descending
            uniqueDates.sort((a, b) => new Date(b) - new Date(a));

            const today = new Date().toISOString().split('T')[0];
            const yesterdayDate = new Date();
            yesterdayDate.setDate(yesterdayDate.getDate() - 1);
            const yesterday = yesterdayDate.toISOString().split('T')[0];

            // If most recent entry is not today or yesterday, streak is broken
            if (uniqueDates[0] !== today && uniqueDates[0] !== yesterday) {
                streakCountEl.textContent = "0";
                return;
            }

            let streak = 1;
            let currentDateStr = uniqueDates[0]; // Start checking from most recent entry

            for (let i = 1; i < uniqueDates.length; i++) {
                const prevDateStr = uniqueDates[i];
                
                const curr = new Date(currentDateStr);
                const prev = new Date(prevDateStr);
                
                // Difference in time
                const diffTime = Math.abs(curr - prev);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

                if (diffDays === 1) {
                    streak++;
                    currentDateStr = prevDateStr; // Move pointer back
                } else {
                    break; // Streak broken
                }
            }
            
            streakCountEl.textContent = streak.toString();
        }


        // --- Export Feature ---
        function exportData() {
            const dataStr = JSON.stringify(entries, null, 2);
            const blob = new Blob([dataStr], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = `journal_backup_${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }

        // --- Import Feature ---
        function triggerImport() {
            importInput.click();
        }

        function handleImport(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const importedData = JSON.parse(e.target.result);
                    if (!Array.isArray(importedData)) {
                        alert("Invalid file format. Please upload a valid journal JSON file.");
                        return;
                    }

                    let addedCount = 0;
                    let updatedCount = 0;

                    importedData.forEach(importedEntry => {
                        if (!importedEntry.id || !importedEntry.date) return;
                        
                        const entry = {
                            ...importedEntry,
                            tags: importedEntry.tags || [],
                            images: importedEntry.images || []
                        };

                        const existingIndex = entries.findIndex(curr => curr.id === entry.id);
                        
                        if (existingIndex > -1) {
                            entries[existingIndex] = entry;
                            updatedCount++;
                        } else {
                            entries.push(entry);
                            addedCount++;
                        }
                    });

                    entries.sort((a, b) => new Date(b.date) - new Date(a.date));

                    localStorage.setItem('journal_entries', JSON.stringify(entries));
                    
                    renderList();
                    if (entries.length > 0) loadEntry(entries[0].id);
                    calculateStreak();
                    if (calendarModal.classList.contains('visible')) renderCalendar();

                    alert(`Import Successful!\nAdded: ${addedCount} entries\nUpdated: ${updatedCount} entries`);

                } catch (err) {
                    console.error(err);
                    alert("Error reading file. Please make sure it is a valid JSON backup.");
                }
            };
            reader.readAsText(file);
            event.target.value = ''; 
        }

        // --- Image Handling ---

        function triggerImageUpload() {
            if (!activeId) {
                alert("Please select or create an entry first.");
                return;
            }
            imageInput.click();
        }

        function handleImageUpload(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function(e) {
                const img = new Image();
                img.onload = function() {
                    const canvas = document.createElement('canvas');
                    const MAX_WIDTH = 800;
                    const scaleSize = MAX_WIDTH / img.width;
                    const newWidth = (img.width > MAX_WIDTH) ? MAX_WIDTH : img.width;
                    const newHeight = (img.width > MAX_WIDTH) ? img.height * scaleSize : img.height;
                    
                    canvas.width = newWidth;
                    canvas.height = newHeight;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, newWidth, newHeight);
                    
                    const dataUrl = canvas.toDataURL('image/jpeg', 0.7); 
                    
                    const entry = entries.find(e => e.id === activeId);
                    if (entry) {
                        if (!entry.images) entry.images = [];
                        entry.images.push(dataUrl);
                        renderImages(entry.images);
                        saveEntry();
                    }
                }
                img.src = e.target.result;
            }
            reader.readAsDataURL(file);
            event.target.value = ''; 
        }

        function renderImages(images) {
            imageGallery.innerHTML = '';
            if (!images) return;

            images.forEach((src, index) => {
                const div = document.createElement('div');
                div.className = 'image-wrapper';
                div.innerHTML = `
                    <img src="${src}" class="entry-img">
                    <button class="btn-remove-img" onclick="deleteImage(${index})" title="Remove Image">
                        <svg class="icon icon-sm" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                `;
                imageGallery.appendChild(div);
            });
        }

        function deleteImage(index) {
            if (!activeId) return;
            const entry = entries.find(e => e.id === activeId);
            if (entry && entry.images) {
                if (confirm('Remove this image?')) {
                    entry.images.splice(index, 1);
                    renderImages(entry.images);
                    saveEntry();
                }
            }
        }


        // --- Calendar Logic ---

        function toggleCalendar() {
            // Close insights if open
            if(insightsModal.classList.contains('visible')) {
                insightsModal.classList.remove('visible');
                insightsBtn.classList.remove('active');
            }
            
            const isVisible = calendarModal.classList.contains('visible');
            if (isVisible) {
                calendarModal.classList.remove('visible');
                calendarBtn.classList.remove('active');
            } else {
                calendarModal.classList.add('visible');
                calendarBtn.classList.add('active');
                renderCalendar();
            }
        }

        function changeMonth(delta) {
            calendarDate.setMonth(calendarDate.getMonth() + delta);
            renderCalendar();
        }

        function renderCalendar() {
            const year = calendarDate.getFullYear();
            const month = calendarDate.getMonth();
            const today = new Date();
            
            calMonthLabel.textContent = new Date(year, month).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
            
            calGrid.innerHTML = '';
            
            // Day Labels
            const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
            days.forEach(d => {
                const el = document.createElement('div');
                el.className = 'cal-day-label';
                el.textContent = d;
                calGrid.appendChild(el);
            });

            const firstDay = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();

            // Empty slots
            for (let i = 0; i < firstDay; i++) {
                const el = document.createElement('div');
                el.className = 'cal-day empty';
                calGrid.appendChild(el);
            }

            // Days
            for (let d = 1; d <= daysInMonth; d++) {
                const el = document.createElement('div');
                el.className = 'cal-day';
                el.textContent = d;
                
                const currentDateStr = new Date(year, month, d).toDateString();
                
                if (today.toDateString() === currentDateStr) {
                    el.classList.add('today');
                }

                const hasEntry = entries.some(e => new Date(e.date).toDateString() === currentDateStr);
                if (hasEntry) {
                    el.classList.add('has-entry');
                }

                if (filterDate && filterDate.toDateString() === currentDateStr) {
                    el.classList.add('selected');
                }

                el.onclick = () => {
                    filterDate = new Date(year, month, d);
                    toggleCalendar();
                    renderList();
                };

                calGrid.appendChild(el);
            }
        }
        
        // --- Insights Logic ---
        
        function toggleInsights() {
            // Close calendar if open
            if(calendarModal.classList.contains('visible')) {
                calendarModal.classList.remove('visible');
                calendarBtn.classList.remove('active');
            }
            
            const isVisible = insightsModal.classList.contains('visible');
            if(isVisible) {
                insightsModal.classList.remove('visible');
                insightsBtn.classList.remove('active');
            } else {
                insightsModal.classList.add('visible');
                insightsBtn.classList.add('active');
                renderInsights();
            }
        }
        
        function renderInsights() {
            totalEntriesVal.textContent = entries.length;
            
            const moodCounts = {
                'happy': 0,
                'calm': 0,
                'neutral': 0,
                'sad': 0,
                'stressed': 0
            };
            
            entries.forEach(e => {
                if(e.mood && moodCounts.hasOwnProperty(e.mood)) {
                    moodCounts[e.mood]++;
                }
            });
            
            let maxCount = 0;
            for(let key in moodCounts) {
                if(moodCounts[key] > maxCount) maxCount = moodCounts[key];
            }
            
            moodChart.innerHTML = '';
            
            // Generate Bar Chart
            const moodKeys = Object.keys(moodCounts);
            moodKeys.forEach(key => {
                const count = moodCounts[key];
                const percentage = maxCount > 0 ? (count / maxCount) * 100 : 0;
                
                const row = document.createElement('div');
                row.className = 'chart-row';
                row.innerHTML = `
                    <div class="chart-label">${moods[key]}</div>
                    <div class="chart-bar-bg">
                        <div class="chart-bar-fill" style="width: ${percentage}%"></div>
                    </div>
                    <div class="chart-count">${count}</div>
                `;
                moodChart.appendChild(row);
            });
        }

        function clearDateFilter(shouldRender = true) {
            filterDate = null;
            if (shouldRender) renderList();
        }

        // --- Search & Tags Logic ---

        function handleSearch() {
            renderList();
        }

        function handleTagInput(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const tag = tagInput.value.trim();
                
                if (tag && activeId) {
                    const entry = entries.find(e => e.id === activeId);
                    if (entry) {
                        if (!entry.tags) entry.tags = [];
                        
                        // Prevent duplicates
                        if (!entry.tags.includes(tag)) {
                            entry.tags.push(tag);
                            renderTags(entry.tags);
                            saveEntry(); // Auto-save on tag add
                        }
                    }
                    tagInput.value = '';
                }
            }
        }

        function removeTag(tagToRemove) {
            if (!activeId) return;
            const entry = entries.find(e => e.id === activeId);
            if (entry && entry.tags) {
                entry.tags = entry.tags.filter(t => t !== tagToRemove);
                renderTags(entry.tags);
                saveEntry(); // Auto-save on tag remove
            }
        }

        function renderTags(tags) {
            tagsList.innerHTML = '';
            if (!tags) return;
            
            tags.forEach(tag => {
                const pill = document.createElement('div');
                pill.className = 'tag-pill';
                pill.innerHTML = `
                    <span>#${escapeHtml(tag)}</span>
                    <span class="tag-remove" onclick="removeTag('${escapeHtml(tag)}')">×</span>
                `;
                tagsList.appendChild(pill);
            });
        }

        // --- Mood, Prompts & Stats ---

        function setMood(moodKey) {
            if (!activeId) return;
            const entryIndex = entries.findIndex(e => e.id === activeId);
            if (entryIndex > -1) {
                entries[entryIndex].mood = moodKey;
                updateMoodUI(moodKey);
                saveEntry();
            }
        }

        function updateMoodUI(moodKey) {
            const buttons = moodSelector.querySelectorAll('.mood-btn');
            buttons.forEach(btn => {
                if (btn.dataset.mood === moodKey) {
                    btn.classList.add('selected');
                } else {
                    btn.classList.remove('selected');
                }
            });
        }

        function showRandomPrompt() {
            if(!activeId) return;
            const random = prompts[Math.floor(Math.random() * prompts.length)];
            promptDisplay.textContent = random;
            promptDisplay.classList.add('visible');
        }

        function updateStats() {
            const text = contentInput.value || '';
            const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
            const readTime = Math.ceil(wordCount / 200);
            
            const timeText = readTime < 1 ? '< 1' : readTime;
            statsBar.textContent = `${wordCount} words · ${timeText} min read`;
        }

        // --- Render UI ---

        function renderList() {
            entryListEl.innerHTML = '';
            
            // Search & Filter Logic
            const term = searchInput.value.toLowerCase();
            
            const filteredEntries = entries.filter(entry => {
                // 1. Date Filter
                if (filterDate) {
                    const entryDate = new Date(entry.date);
                    if (entryDate.toDateString() !== filterDate.toDateString()) {
                        return false;
                    }
                }

                // 2. Search Filter
                if (term) {
                    const titleMatch = (entry.title || '').toLowerCase().includes(term);
                    const contentMatch = (entry.content || '').toLowerCase().includes(term);
                    const tagMatch = entry.tags && entry.tags.some(tag => tag.toLowerCase().includes(term));
                    if (!(titleMatch || contentMatch || tagMatch)) return false;
                }
                
                return true;
            });

            // Update Filter Banner
            if (filterDate) {
                filterBanner.classList.add('visible');
                filterText.textContent = `Entries for ${filterDate.toLocaleDateString()}`;
            } else {
                filterBanner.classList.remove('visible');
            }

            filteredEntries.forEach(entry => {
                const li = document.createElement('li');
                li.className = `entry-item ${entry.id === activeId ? 'active' : ''}`;
                li.onclick = () => loadEntry(entry.id);

                const title = entry.title || 'Untitled Entry';
                const date = new Date(entry.date).toLocaleDateString();
                const preview = entry.content ? entry.content.substring(0, 40) + '...' : 'No content...';
                const moodEmoji = entry.mood ? moods[entry.mood] : '';
                
                // Tags Preview for Sidebar
                let tagsHtml = '';
                if (entry.tags && entry.tags.length > 0) {
                    tagsHtml = `<div class="entry-tags-preview">
                        ${entry.tags.map(t => `<span class="sidebar-tag">#${escapeHtml(t)}</span>`).join('')}
                    </div>`;
                }

                li.innerHTML = `
                    <div class="entry-header">
                        <div class="entry-title">${escapeHtml(title)}</div>
                        <div class="entry-mood-icon">${moodEmoji}</div>
                    </div>
                    <div class="entry-date">${date}</div>
                    <div class="entry-preview">${escapeHtml(preview)}</div>
                    ${tagsHtml}
                    <button class="btn-delete" onclick="deleteEntry(${entry.id}, event)">Delete</button>
                `;
                entryListEl.appendChild(li);
            });
            
            if (filteredEntries.length === 0) {
                 const msg = filterDate ? "No entries for this date." : (term ? "No entries found." : "No entries yet.");
                 entryListEl.innerHTML = `<li style="padding:16px; text-align:center; color:#a8a29e; font-size:0.875rem;">${msg}</li>`;
            }
        }

        function toggleSidebar() {
            sidebar.classList.toggle('closed');
        }

        // --- Speech Recognition ---

        function setupSpeechRecognition() {
            if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
                const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                recognition = new SpeechRecognition();
                recognition.continuous = true;
                recognition.interimResults = true;

                recognition.onresult = (event) => {
                    let interimTranscript = '';
                    let finalTranscript = '';

                    for (let i = event.resultIndex; i < event.results.length; ++i) {
                        if (event.results[i].isFinal) {
                            finalTranscript += event.results[i][0].transcript + ' ';
                        } else {
                            interimTranscript += event.results[i][0].transcript;
                        }
                    }

                    if (finalTranscript) {
                        const currentPos = contentInput.selectionStart || contentInput.value.length;
                        const textBefore = contentInput.value.substring(0, currentPos);
                        const textAfter = contentInput.value.substring(currentPos);
                        
                        let spacing = '';
                        if (textBefore.length > 0 && !textBefore.endsWith(' ') && !textBefore.endsWith('\n')) {
                            spacing = ' ';
                        }

                        contentInput.value = textBefore + spacing + finalTranscript + textAfter;
                        updateStats();
                    }
                };

                recognition.onerror = (event) => {
                    console.error('Speech recognition error', event.error);
                    stopDictation();
                };

                recognition.onend = () => {
                    if (isListening) {
                        try {
                            recognition.start();
                        } catch (e) {
                            stopDictation();
                        }
                    }
                };
            } else {
                console.warn('Speech recognition not supported.');
                micBtn.style.display = 'none';
            }
        }

        function toggleDictation() {
            if (!recognition) {
                alert("Voice recognition is not supported in this browser.");
                return;
            }

            if (isListening) {
                stopDictation();
            } else {
                startDictation();
            }
        }

        function startDictation() {
            try {
                recognition.start();
                isListening = true;
                micBtn.classList.add('recording');
                micBtn.querySelector('span').textContent = 'Listening...';
                micIcon.innerHTML = '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="23"></line><line x1="8" x2="16" y1="23" y2="23"></line>'; 
                recOverlay.classList.add('visible');
            } catch(e) {
                console.error(e);
            }
        }

        function stopDictation() {
            recognition.stop();
            isListening = false;
            micBtn.classList.remove('recording');
            micBtn.querySelector('span').textContent = 'Dictate';
            recOverlay.classList.remove('visible');
        }

        // --- Utilities ---

        function formatDate(isoString) {
            if (!isoString) return '';
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
            return new Date(isoString).toLocaleDateString('en-US', options);
        }

        function escapeHtml(text) {
            if (!text) return '';
            return text
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }

        // Initialize on load
        window.addEventListener('DOMContentLoaded', init);
