        // --- Navigation & Core Logic ---
        let currentCategory = 'Economics'; // Default

        // 1. Sidebar Logic
        function renderSidebar() {
            const list = document.getElementById('categoryList');
            const categories = Object.keys(newsDB);
            list.innerHTML = '';
            
            categories.forEach(cat => {
                const item = document.createElement('div');
                item.className = `category-item ${cat === currentCategory ? 'active' : ''}`;
                item.onclick = () => loadCategory(cat);
                item.innerHTML = `<span>${cat}</span>`;
                list.appendChild(item);
            });
        }

        // 2. Render Bulletin Logic
        // Updated loadCategory Function
        function loadCategory(cat) {
            currentCategory = cat;
            const data = newsDB[cat];
            
            // Update Header & Sidebar UI
            document.getElementById('headerCategory').textContent = cat;
            document.getElementById('displayHeadline').textContent = `${cat} Briefing`;
            document.getElementById('displayDate').textContent = data.date;
            renderSidebar();

            const container = document.getElementById('bulletinContainer');
            
            // Generate Search URL for Lead Story
            const leadSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(data.lead.headline + " news")}`;
            const html = `
                <div class="bulletin-card">
                    <!-- Hero Section -->
                    <div class="news-hero">
                        <span class="section-label" style="color:var(--accent-blue);">Top Story</span>
                        <h2>${data.lead.headline}</h2>
                        <p>${data.lead.summary}</p>
                        <div style="display:flex; gap:8px; align-items:center;">
                            <a href="${data.lead.link}" target="_blank" class="source-link-btn">
                                Read Full Story &nearr;
                            </a>
                            <a href="${leadSearchUrl}" target="_blank" class="bullet-link-icon" title="Search this story" style="padding: 8px; background:#f1f5f9; border-radius:50%;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </a>
                        </div>
                    </div>

                    <!-- Round Up -->
                    <div class="roundup-section">
                        <span class="section-label">The Round Up</span>
                        ${data.bullets.map(b => {
                            const bulletSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(b.text + " news")}`;
                            return `
                            <div class="bullet-item">
                                <span class="bullet-tag">${b.tag}</span>
                                <span class="bullet-text">${b.text}</span>
                                <div style="display:flex; gap:4px;">
                                    <a href="${b.link}" target="_blank" class="bullet-link-icon" title="View Source">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                                    </a>
                                    <a href="${bulletSearchUrl}" target="_blank" class="bullet-link-icon" title="Search">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    </a>
                                </div>
                            </div>`;
                        }).join('')}
                    </div>

                    <!-- The Number -->
                    <div class="stat-box">
                        <div class="stat-content">
                            <span class="stat-val">${data.stat.value}</span>
                            <span class="stat-label">${data.stat.label}</span>
                        </div>
                        <div class="stat-overlay">
                            ${data.stat.desc}
                        </div>
                    </div>

                    <p style="font-size:small; color:grey; text-align:center">----------</p>
                        <p style="font-size:small; color:grey; text-align:center">
                                <i>
                                        Sometimes the original source link might not work due to continuously changing news URL's. 
                                        If that is the case, click on this search button. You will be redirected to a page where you can select a relevant news page to read further.
                                </i>
                        </p>
                </div>
            `;
            container.innerHTML = html;
            
            setTimeout(restoreHighlights, 100);
            document.getElementById('content-scroll').scrollTop = 0;
            if(window.innerWidth <= 1024) toggleSidebar();
        }

        function toggleSave(btn, title, link, topic) {
            // 1. Get existing saved items
            let savedItems = JSON.parse(localStorage.getItem('savedArticles') || '[]');
            
            // 2. Check if already saved
            const existingIndex = savedItems.findIndex(item => item.title === title);
            
            if (existingIndex > -1) {
                // REMOVE: If found, remove it
                savedItems.splice(existingIndex, 1);
                btn.classList.remove('active');
                showToast("Article removed from Library");
            } else {
                // ADD: If not found, add it
                savedItems.push({
                    title: title,
                    link: link,
                    topic: topic,
                    date: new Date().toLocaleDateString()
                });
                btn.classList.add('active');
                showToast("Article saved to Dashboard");
            }
            
            // 3. Save back to storage
            localStorage.setItem('savedArticles', JSON.stringify(savedItems));
        }
        
        // Check if an article is saved (to set initial button state)
        function isSaved(title) {
            const savedItems = JSON.parse(localStorage.getItem('savedArticles') || '[]');
            return savedItems.some(item => item.title === title);
        }
        
        // Simple Toast Notification
        function showToast(message) {
            const toast = document.createElement('div');
            toast.textContent = message;
            toast.style.cssText = `
                position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
                background: #1f1f1f; color: white; padding: 12px 24px; border-radius: 50px;
                font-size: 14px; z-index: 1000; animation: fadeIn 0.3s, fadeOut 0.3s 2.7s forwards;
            `;
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 3000);
        }
        
        const styleSheet = document.createElement("style");
        styleSheet.innerText = `
            @keyframes fadeOut { to { opacity: 0; } }
        `;
        document.head.appendChild(styleSheet);

        function toggleSidebar() {
            const body = document.body;
            const isMobile = window.innerWidth <= 1024;
            if (isMobile) { body.classList.toggle('mobile-sidebar-open'); } 
            else { body.classList.toggle('sidebar-collapsed'); }
        }

        // --- Notepad Logic (Same as before) ---
        function toggleNotepad() { document.getElementById('notepad-container').classList.toggle('active'); }
        const notepadArea = document.getElementById('notepad-area');
        notepadArea.value = localStorage.getItem('general_notepad') || ''; // Separate storage key
        notepadArea.addEventListener('input', () => { localStorage.setItem('general_notepad', notepadArea.value); });
        
        function downloadNotes() {
            const content = notepadArea.value;
            if(!content) return alert("Notes are empty!");
            const printWindow = window.open('', '', 'width=800,height=600');
            printWindow.document.write(`<html><body><h1>My News Notes</h1><pre>${content}</pre><script>window.onload=function(){window.print();window.close();}<\/script></body></html>`);
            printWindow.document.close();
        }

        // --- Bulletin PDF Download ---
        function downloadBulletinPDF() {
            const headline = document.getElementById('displayHeadline').textContent;
            const content = document.getElementById('bulletinContainer').innerHTML;
            const printWindow = window.open('', '', 'width=900,height=700');
            printWindow.document.write(`
                <html><head><title>${headline}</title>
                <style>
                    body{font-family:sans-serif;padding:40px;color:#1f1f1f}
                    h1{border-bottom:2px solid #0b57d0;padding-bottom:10px}
                    .bulletin-card{border:1px solid #ddd;padding:20px;border-radius:10px}
                    .bullet-tag{background:#eee;padding:2px 5px;border-radius:4px;font-weight:bold;margin-right:10px}
                    .bullet-item{margin-bottom:10px}
                    .stat-box{background:#ecfdf5;padding:20px;text-align:center;border:1px solid #bbf7d0;margin-top:20px}
                    .stat-val{font-size:24px;font-weight:bold;display:block}
                    /* Hide online-only elements in PDF */
                    .source-link-btn, .bullet-link-icon, .stat-overlay { display: none !important; }
                </style>
                </head><body><h1>${headline}</h1>${content}<script>window.onload=function(){window.print();window.close();}<\/script></body></html>
            `);
            printWindow.document.close();
        }

        // --- Highlighting Logic ---
        let currentRange = null, activeSpan = null;
        const tooltip = document.getElementById('highlight-tooltip');
        
        document.addEventListener('mouseup', (e) => {
            const sel = window.getSelection();
            if (!tooltip.contains(e.target)) {
                // Determine if selection is inside content
                // We only care if it's inside the bulletin card to avoid sidebar etc.
                let node = sel.anchorNode;
                if(node && node.nodeType === 3) node = node.parentNode;
                
                let isInsideContent = false;
                while(node) {
                    if(node.classList && node.classList.contains('bulletin-card')) { isInsideContent = true; break; }
                    node = node.parentNode;
                }

                if (!isInsideContent && !e.target.classList.contains('highlight-span')) {
                    tooltip.classList.remove('active');
                    return;
                }

                if (sel.toString().length > 0) {
                    const range = sel.getRangeAt(0);
                    currentRange = range; activeSpan = null;
                    const rect = range.getBoundingClientRect();
                    tooltip.style.left = `${rect.left + window.scrollX}px`;
                    tooltip.style.top = `${rect.top + window.scrollY - 45}px`;
                    tooltip.classList.add('active');
                } else if (e.target.classList.contains('highlight-span')) {
                    activeSpan = e.target; currentRange = null;
                    const rect = e.target.getBoundingClientRect();
                    tooltip.style.left = `${rect.left + window.scrollX}px`;
                    tooltip.style.top = `${rect.top + window.scrollY - 45}px`;
                    tooltip.classList.add('active');
                } else {
                    tooltip.classList.remove('active');
                }
            }
        });

        function applyHighlight(color) {
            if (activeSpan) { activeSpan.style.backgroundColor = color; activeSpan = null; }
            else if (currentRange) {
                const span = document.createElement('span');
                span.className = 'highlight-span';
                span.style.backgroundColor = color;
                span.textContent = currentRange.toString();
                currentRange.deleteContents();
                currentRange.insertNode(span);
                window.getSelection().removeAllRanges();
            }
            saveHighlights();
            tooltip.classList.remove('active');
        }
        
        function removeHighlight() {
            if (activeSpan) {
                const parent = activeSpan.parentNode;
                while (activeSpan.firstChild) parent.insertBefore(activeSpan.firstChild, activeSpan);
                parent.removeChild(activeSpan);
                activeSpan = null;
            }
            saveHighlights();
            tooltip.classList.remove('active');
        }

        // --- Save/Restore Logic ---
        function saveHighlights() {
            const allHighlights = JSON.parse(localStorage.getItem('general_highlights') || '{}');
            const container = document.getElementById('bulletinContainer');
            
            // Get all highlighted spans in current view
            const spans = container.querySelectorAll('.highlight-span');
            const highlightData = [];
            spans.forEach(span => {
                highlightData.push({
                    text: span.textContent,
                    color: span.style.backgroundColor
                });
            });
            
            // Save keyed by CURRENT CATEGORY
            allHighlights[currentCategory] = highlightData;
            localStorage.setItem('general_highlights', JSON.stringify(allHighlights));
        }

        function restoreHighlights() {
            const allHighlights = JSON.parse(localStorage.getItem('general_highlights') || '{}');
            const catHighlights = allHighlights[currentCategory];
            if (!catHighlights) return;
            
            const container = document.getElementById('bulletinContainer');
            catHighlights.forEach(h => {
                // Escape regex chars
                const safeText = h.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                // Regex to find text ONLY if not already inside a highlight-span
                const regex = new RegExp(`(?<!<span class="highlight-span"[^>]*>)${safeText}(?!<\/span>)`, 'g');
                
                // Target paragraphs and spans within the bulletin card
                // We have to be careful not to break HTML attributes
                const elements = container.querySelectorAll('p, .bullet-text, h2');
                
                elements.forEach(el => {
                    if(el.textContent.includes(h.text) && !el.innerHTML.includes('highlight-span')) {
                         el.innerHTML = el.innerHTML.replace(h.text, `<span class="highlight-span" style="background-color:${h.color}">${h.text}</span>`);
                    }
                });
            });
        }

        // --- Initialization ---
        document.addEventListener('DOMContentLoaded', () => {
            // Check URL param for category
            const urlParams = new URLSearchParams(window.location.search);
            const catParam = urlParams.get('category');
            
            if (catParam && newsDB[catParam]) {
                loadCategory(catParam);
            } else {
                loadCategory('Economics'); // Default
            }
            
            window.addEventListener('resize', () => {
                if (!window.innerWidth <= 1024) document.body.classList.remove('mobile-sidebar-open');
            });

        });






