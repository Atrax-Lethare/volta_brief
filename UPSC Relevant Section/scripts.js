        // --- Core Logic ---
        function toggleSidebar() {
            const body = document.body;
            const isMobile = window.innerWidth <= 1024;
            if (isMobile) { body.classList.toggle('mobile-sidebar-open'); } 
            else { body.classList.toggle('sidebar-collapsed'); }
        }

        function goToToday() {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            const dateKey = `${year}-${month}-${day}`;
            
            if (articlesDB[dateKey]) loadContent(dateKey);
            else {
                const latestKey = Object.keys(articlesDB)[0];
                loadContent(latestKey);
            }
        }

        function loadContent(key) {
            renderArticles(key);
        }

        // --- Notepad Logic ---
        function toggleNotepad() {
            document.getElementById('notepad-container').classList.toggle('active');
        }

        // Auto-save logic
        const notepadArea = document.getElementById('notepad-area');
        notepadArea.value = localStorage.getItem('upsc_notepad') || '';
        
        notepadArea.addEventListener('input', () => {
            localStorage.setItem('upsc_notepad', notepadArea.value);
        });

        // PDF Download (Native Print Hack)
        function downloadNotes() {
            const content = notepadArea.value;
            if(!content) return alert("Notes are empty!");
            
            const printWindow = window.open('', '', 'width=800,height=600');
            printWindow.document.write(`
                <html>
                <head>
                    <title>UPSC Notes - Download</title>
                    <style>
                        body { font-family: 'Georgia', serif; padding: 40px; line-height: 1.6; }
                        h1 { border-bottom: 1px solid #ccc; padding-bottom: 10px; }
                        pre { white-space: pre-wrap; font-family: 'Georgia', serif; }
                    </style>
                </head>
                <body>
                    <h1>My UPSC Notes</h1>
                    <pre>${content}</pre>
                    <script>
                        window.onload = function() { window.print(); window.close(); }
                    <\/script>
                </body>
                </html>
            `);
            printWindow.document.close();
        }

        // --- Article PDF Download ---
        function downloadArticlesPDF() {
            const headline = document.getElementById('displayHeadline').textContent;
            const content = document.getElementById('articlesContainer').innerHTML;
            
            if(!content) return alert("No articles to download!");

            const printWindow = window.open('', '', 'width=900,height=700');
            printWindow.document.write(`
                <html>
                <head>
                    <title>${headline} - PDF</title>
                    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
                    <style>
                        body { font-family: 'Outfit', sans-serif; padding: 40px; line-height: 1.6; color: #1f1f1f; }
                        h1 { text-align: center; border-bottom: 2px solid #0b57d0; padding-bottom: 10px; margin-bottom: 30px; font-size: 28px; }
                        
                        /* Mimic Card Styles for Print */
                        .article-card { 
                            border: 1px solid #e0e3e1; 
                            border-radius: 12px; 
                            padding: 24px; 
                            margin-bottom: 24px; 
                            page-break-inside: avoid;
                        }
                        
                        /* Hide buttons in PDF */
                        .card-actions, .btn-deep-dive, .btn-outline { display: none !important; }
                        
                        .meta-row { display: flex; gap: 10px; font-size: 10px; color: #555; text-transform: uppercase; margin-bottom: 10px; font-weight: bold; }
                        .chip { background: #e0e7ff; color: #3730a3; padding: 2px 8px; border-radius: 4px; }
                        
                        h3.article-title { font-family: 'Georgia', serif; font-size: 20px; margin-top: 0; margin-bottom: 12px; color: #000; }
                        
                        .content-label { display: block; font-size: 11px; font-weight: bold; text-transform: uppercase; margin-bottom: 4px; color: #111; }
                        .content-block { margin-bottom: 16px; font-size: 13px; }
                        ul.content-list { padding-left: 20px; margin: 0; }
                        
                        .grid-2-col { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px; }
                        .info-box { padding: 12px; border-radius: 8px; font-size: 12px; }
                        .box-green { background: #ecfdf5; border: 1px solid #d1fae5; color: #065f46; }
                        .box-amber { background: #fffbeb; border: 1px solid #fef3c7; color: #92400e; }
                        .box-label { display: block; font-weight: bold; text-transform: uppercase; margin-bottom: 6px; }
                        .no-bullet-list { list-style: none; padding: 0; margin: 0; }
                        
                        .question-box { border-top: 1px solid #eee; padding-top: 10px; margin-top: 10px; }
                        .question-text { font-family: 'Georgia', serif; font-style: italic; color: #333; font-size: 14px; }
                        
                        /* Remove highlights for cleaner print */
                        .highlight-span { background-color: transparent !important; }
                    </style>
                </head>
                <body>
                    <h1>${headline}</h1>
                    ${content}
                    <script>
                        window.onload = function() { window.print(); window.close(); }
                    <\/script>
                </body>
                </html>
            `);
            printWindow.document.close();
        }

        // --- Highlighting Logic ---
        let currentSelectionRange = null;
        let activeHighlightSpan = null;
        const tooltip = document.getElementById('highlight-tooltip');

        document.addEventListener('mouseup', (e) => {
            const sel = window.getSelection();
            if (!tooltip.contains(e.target)) {
                // Check if selection is inside an article card
                let node = sel.anchorNode;
                // Handle text nodes (nodeType 3)
                if (node && node.nodeType === 3) node = node.parentNode;
                
                let insideCard = false;
                while(node) {
                    if (node.classList && node.classList.contains('article-card')) { 
                        insideCard = true; 
                        break; 
                    }
                    node = node.parentNode;
                }
                
                // Hide if clicked outside content area
                if (!insideCard && !e.target.classList.contains('highlight-span')) {
                    tooltip.classList.remove('active');
                    currentSelectionRange = null;
                    activeHighlightSpan = null;
                    return;
                }

                if (sel.toString().length > 0) {
                    // New Selection
                    const range = sel.getRangeAt(0);
                    currentSelectionRange = range;
                    activeHighlightSpan = null;
                    
                    const rect = range.getBoundingClientRect();
                    tooltip.style.left = `${rect.left + window.scrollX}px`;
                    tooltip.style.top = `${rect.top + window.scrollY - 45}px`;
                    tooltip.classList.add('active');
                } else if (e.target.classList.contains('highlight-span')) {
                    // Clicked existing highlight
                    activeHighlightSpan = e.target;
                    currentSelectionRange = null;
                    
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
            if (activeHighlightSpan) {
                // Change color of existing
                activeHighlightSpan.style.backgroundColor = color;
                activeHighlightSpan = null;
            } else if (currentSelectionRange) {
                // Create new
                const span = document.createElement('span');
                span.className = 'highlight-span';
                span.style.backgroundColor = color;
                span.textContent = currentSelectionRange.toString();
                
                currentSelectionRange.deleteContents();
                currentSelectionRange.insertNode(span);
                window.getSelection().removeAllRanges();
            }
            
            saveHighlights();
            tooltip.classList.remove('active');
        }
        
        function removeHighlight() {
            if (activeHighlightSpan) {
                const parent = activeHighlightSpan.parentNode;
                while (activeHighlightSpan.firstChild) {
                    parent.insertBefore(activeHighlightSpan.firstChild, activeHighlightSpan);
                }
                parent.removeChild(activeHighlightSpan);
                activeHighlightSpan = null;
            }
            saveHighlights();
            tooltip.classList.remove('active');
        }

        function saveHighlights() {
            const highlights = JSON.parse(localStorage.getItem('upsc_highlights') || '{}');
            const container = document.getElementById('articlesContainer');
            const dateKey = document.getElementById('displayDate').textContent; 
            
            const spans = container.querySelectorAll('.highlight-span');
            const highlightData = [];
            spans.forEach(span => {
                highlightData.push({
                    text: span.textContent,
                    color: span.style.backgroundColor
                });
            });
            
            highlights[dateKey] = highlightData;
            localStorage.setItem('upsc_highlights', JSON.stringify(highlights));
        }

        function restoreHighlights(dateKey) {
            const highlights = JSON.parse(localStorage.getItem('upsc_highlights') || '{}');
            const dayHighlights = highlights[dateKey];
            if (!dayHighlights) return;
            
            const container = document.getElementById('articlesContainer');
            dayHighlights.forEach(h => {
                const safeText = h.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regex = new RegExp(`(?<!<span class="highlight-span"[^>]*>)${safeText}(?!<\/span>)`, 'g');
                
                const paragraphs = container.querySelectorAll('p, li');
                paragraphs.forEach(p => {
                    if(p.textContent.includes(h.text) && !p.innerHTML.includes('highlight-span')) {
                         p.innerHTML = p.innerHTML.replace(h.text, `<span class="highlight-span" style="background-color:${h.color}">${h.text}</span>`);
                    }
                });
            });
        }

        // --- Render Logic ---
        function renderArticles(dataKey) {
            const container = document.getElementById('articlesContainer');
            const data = articlesDB[dataKey];
            if (!data) return;

            document.getElementById('displayDate').textContent = dataKey;
            document.getElementById('displayHeadline').textContent = `Summary: ${data.dateLabel}`;
            container.innerHTML = '';

            data.articles.forEach((article, index) => {
                const safeTitle = article.title.replace(/'/g, "\\'");
                const articleHTML = `
                    <div class="article-card">
                        <div class="meta-row">
                            <span class="chip">${article.paper}</span>
                            <span style="color:#e0e3e1">|</span>
                            <span class="meta-text">${article.source}</span>
                            <span style="color:#e0e3e1">|</span>
                            <span class="meta-text" style="font-weight:600; color:#4b5563;">${article.topic}</span>
                        </div>
                        <h3 class="article-title">${article.title}</h3>
                        <div class="content-block"><span class="content-label">The Context</span><p style="margin:0;">${article.context}</p></div>
                        <div class="content-block"><span class="content-label">Key Arguments</span><ul class="content-list">${article.keyPoints.map(pt => `<li>${pt}</li>`).join('')}</ul></div>
                        <div class="grid-2-col">
                            <div class="info-box box-green"><span class="box-label">Way Forward</span><ul class="no-bullet-list">${article.wayForward.map(pt => `<li><span class="bullet-icon">•</span><span>${pt}</span></li>`).join('')}</ul></div>
                            <div class="info-box box-amber"><span class="box-label">Mains Fodder</span><div>${Object.entries(article.fodder).map(([key, val]) => `<div class="key-val-row"><span class="key-label">${key}:</span><span>${val}</span></div>`).join('')}</div></div>
                        </div>
                        <div class="question-box"><span class="content-label" style="color:var(--accent-blue);">Practice Question</span><p class="question-text">"${article.question}"</p></div>
                        <div class="card-actions">
                            <button class="btn-deep-dive" onclick="openDeepDive('${safeTitle}', articlesDB['${dataKey}'].articles[${index}].deepDive)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Read Deep Dive
                            </button>
                            <a href="${article.wikiLink}" target="_blank" class="btn-wiki" title="Refer to this Wikipedia page to read about all the related concepts.">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Wiki
                            </a>
                            ${article.originalLink ? `<a href="${article.originalLink}" target="_blank" class="btn-outline">Original Source &nearr;</a>` : ''}
                        </div>
                    </div>`;
                container.innerHTML += articleHTML;
            });
            document.getElementById('content-scroll').scrollTop = 0;
            if(window.innerWidth <= 1024 && document.body.classList.contains('mobile-sidebar-open')) {
                toggleSidebar();
            }
            
            // Restore highlights after render
            setTimeout(() => restoreHighlights(dataKey), 100);
        }

        // --- Modal ---
        function openDeepDive(title, content) {
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalBody').innerHTML = content || "<p>No detailed analysis available for this article yet.</p>";
            document.getElementById('deepDiveModal').classList.add('active');
        }
        function closeModalDirect() { document.getElementById('deepDiveModal').classList.remove('active'); }
        function closeModal(event) { if (event.target === document.getElementById('deepDiveModal')) closeModalDirect(); }

        function renderSidebarList() {
            const list = document.getElementById('archiveList');
            const dates = Object.keys(articlesDB);
            list.innerHTML = '';
            dates.forEach(date => {
                const item = document.createElement('div');
                item.className = 'archive-item';
                item.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg><span>${articlesDB[date].dateLabel}</span>`;
                item.onclick = () => renderArticles(date);
                list.appendChild(item);
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            renderSidebarList();
            goToToday(); 
            window.addEventListener('resize', () => {
                if (!window.innerWidth <= 1024) document.body.classList.remove('mobile-sidebar-open');
            });
            document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModalDirect(); });

        });
