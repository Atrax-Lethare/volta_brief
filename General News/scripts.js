// Global variable to hold the news data
let newsDB = {};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    fetchNewsData();
    setupNotepad(); 
});

// --- 1. FETCH DATA ---
async function fetchNewsData() {
    try {
        const response = await fetch('news_db.json');
        if (!response.ok) throw new Error("Run the Python script first!");
        
        newsDB = await response.json();
        console.log("News Data Loaded:", newsDB);

        renderSidebar();
        
        // Load first category (usually Economics)
        const firstCategory = Object.keys(newsDB)[0];
        if (firstCategory) loadCategory(firstCategory);

    } catch (error) {
        console.error("Error:", error);
        document.getElementById('displayHeadline').textContent = "Error: Run 'python generate_news_db.py'";
    }
}

// --- 2. RENDER SIDEBAR ---
function renderSidebar() {
    const categoryList = document.getElementById('categoryList');
    categoryList.innerHTML = ''; 

    Object.keys(newsDB).forEach(category => {
        const btn = document.createElement('div');
        btn.className = 'category-item';
        // Add a generic icon or specific mapping if you want
        btn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" /></svg>
            ${category}
        `;
        btn.onclick = () => loadCategory(category);
        categoryList.appendChild(btn);
    });
}

// --- 3. LOAD CONTENT (MATCHING YOUR CSS CLASSES) ---
function loadCategory(category) {
    const data = newsDB[category];
    if (!data) return;

    // A. Update Page Headers
    document.getElementById('headerCategory').textContent = category;
    document.getElementById('displayDate').textContent = data.date;
    document.getElementById('displayHeadline').textContent = data.lead.headline;

    // B. Clear Container
    const container = document.getElementById('bulletinContainer');
    container.innerHTML = ''; 

    // C. Create the Main Card Wrapper
    const card = document.createElement('div');
    card.className = 'bulletin-card';

    // --- SECTION 1: HERO (Matches .news-hero) ---
    const heroDiv = document.createElement('div');
    heroDiv.className = 'news-hero';
    heroDiv.innerHTML = `
        <h2>${data.lead.headline}</h2>
        <p>${data.lead.summary}</p>
        <a href="${data.lead.link}" target="_blank" class="source-link-btn">
            Read Full Story ↗
        </a>
    `;
    card.appendChild(heroDiv);

    // --- SECTION 2: ROUNDUP (Matches .roundup-section) ---
    const roundupDiv = document.createElement('div');
    roundupDiv.className = 'roundup-section';
    
    // Label
    const label = document.createElement('span');
    label.className = 'section-label';
    label.textContent = "In Brief";
    roundupDiv.appendChild(label);

    // Bullets (Matches .bullet-item)
    data.bullets.forEach(item => {
        const bulletItem = document.createElement('div');
        bulletItem.className = 'bullet-item';
        bulletItem.innerHTML = `
            <span class="bullet-tag">${item.tag}</span>
            <div class="bullet-text">${item.text}</div>
            <a href="${item.link}" target="_blank" class="bullet-link-icon" title="Source">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
            </a>
        `;
        roundupDiv.appendChild(bulletItem);
    });
    card.appendChild(roundupDiv);

    // --- SECTION 3: STAT BOX (Matches .stat-box) ---
    if (data.stat && data.stat.value) {
        const statBox = document.createElement('div');
        statBox.className = 'stat-box';
        statBox.innerHTML = `
            <span class="stat-val">${data.stat.value}</span>
            <span class="stat-label">${data.stat.label}</span>
            <div class="stat-overlay">
                ${data.stat.desc}
            </div>
        `;
        card.appendChild(statBox);
    }

    // Append Card to Container
    container.appendChild(card);

    // Disclaimer Footer
    const footer = document.createElement('div');
    footer.className = 'disclaimer';
    footer.textContent = "Generated via Python • Sources: The Hindu, Indian Express, BBC, NYT";
    container.appendChild(footer);

    // Highlight Active Sidebar
    updateActiveSidebar(category);
}

function updateActiveSidebar(activeCategory) {
    document.querySelectorAll('.category-item').forEach(item => {
        // Remove icon to check text content clean
        if(item.textContent.trim() === activeCategory) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Mobile: Close sidebar on selection
    if (window.innerWidth <= 1024) {
        document.body.classList.remove('mobile-sidebar-open');
    }
}

// --- 4. UI INTERACTIONS ---

function toggleSidebar() {
    if (window.innerWidth > 1024) {
        document.body.classList.toggle('sidebar-collapsed');
    } else {
        document.body.classList.toggle('mobile-sidebar-open');
    }
}

function toggleNotepad() {
    document.getElementById('notepad-container').classList.toggle('active');
}

// Notepad Auto-save
function setupNotepad() {
    const area = document.getElementById('notepad-area');
    if(!area) return;
    area.value = localStorage.getItem('notes') || "";
    area.addEventListener('input', (e) => localStorage.setItem('notes', e.target.value));
}

function downloadNotes() {
    const text = document.getElementById('notepad-area').value;
    const blob = new Blob([text], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'my_notes.txt';
    a.click();
}

// Placeholder functions for FABs if not using a library
function downloadBulletinPDF() {
    // 1. Get the current content
    const category = document.getElementById('headerCategory').textContent;
    const date = document.getElementById('displayDate').textContent;
    const headline = document.getElementById('displayHeadline').textContent;
    const content = document.getElementById('bulletinContainer').innerHTML;

    // 2. Open a temporary window
    const printWindow = window.open('', '', 'height=800,width=900');

    // 3. Write the HTML structure for the PDF
    printWindow.document.write(`
        <html>
        <head>
            <title>${category} Briefing - ${date}</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&family=Roboto:wght@300;400&display=swap');
                
                body { 
                    font-family: 'Roboto', sans-serif; 
                    padding: 40px 60px; 
                    color: #1f2937;
                    max-width: 100%;
                }

                /* Header Section */
                .print-header {
                    border-bottom: 2px solid #111827;
                    padding-bottom: 20px;
                    margin-bottom: 30px;
                }
                .print-meta {
                    font-family: 'Outfit', sans-serif;
                    text-transform: uppercase;
                    font-size: 12px;
                    color: #6b7280;
                    letter-spacing: 1px;
                    font-weight: 600;
                }
                h1 {
                    font-family: 'Outfit', sans-serif;
                    font-size: 32px;
                    margin: 10px 0;
                    line-height: 1.2;
                }

                /* Content Styling (Matching your UI) */
                .bulletin-card {
                    margin-bottom: 30px;
                }
                
                /* Lead Story */
                .news-hero h2 { font-size: 24px; margin-bottom: 10px; }
                .news-hero p { font-size: 16px; line-height: 1.6; color: #374151; }
                .source-link-btn { display: none; } /* Hide buttons in PDF */

                /* Bullet Points */
                .roundup-section { margin-top: 30px; }
                .section-label { 
                    display: block; 
                    font-size: 12px; 
                    text-transform: uppercase; 
                    color: #9ca3af; 
                    margin-bottom: 15px; 
                    font-weight: 700;
                }
                .bullet-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 15px;
                    margin-bottom: 15px;
                    page-break-inside: avoid; /* Prevent splitting bullets across pages */
                }
                .bullet-tag {
                    font-family: 'Outfit', sans-serif;
                    font-weight: 700;
                    font-size: 11px;
                    text-transform: uppercase;
                    background: #e0f2fe; /* Light blue bg */
                    color: #0369a1;
                    padding: 4px 8px;
                    border-radius: 4px;
                    min-width: 80px;
                    text-align: center;
                    -webkit-print-color-adjust: exact; /* Force color printing */
                    print-color-adjust: exact;
                }
                .bullet-text { font-size: 14px; line-height: 1.5; flex: 1; }
                .bullet-link-icon { display: none; } /* Hide link icons */

                /* Stat Box */
                .stat-box {
                    background: #f3f4f6;
                    border: 1px solid #e5e7eb;
                    border-radius: 12px;
                    padding: 20px;
                    text-align: center;
                    margin-top: 30px;
                    page-break-inside: avoid;
                    -webkit-print-color-adjust: exact;
                }
                .stat-val { display: block; font-size: 36px; font-weight: 700; font-family: 'Outfit', sans-serif; }
                .stat-label { display: block; font-size: 12px; text-transform: uppercase; margin-bottom: 5px; }
                .stat-overlay { display: block !important; position: static; opacity: 1; background: none; color: #555; font-size: 13px; margin-top: 10px; }

                /* Footer */
                .print-footer {
                    margin-top: 50px;
                    font-size: 10px;
                    text-align: center;
                    color: #9ca3af;
                    border-top: 1px solid #e5e7eb;
                    padding-top: 20px;
                }
            </style>
        </head>
        <body>
            <div class="print-header">
                <div class="print-meta">${category} • ${date}</div>
                <h1>${headline}</h1>
            </div>

            ${content}

            <div class="print-footer">
                Generated by Volta_Brief • ${new Date().toLocaleString()}
            </div>

            <script>
                // Automatically trigger print when loaded
                window.onload = function() {
                    window.print();
                    window.close();
                }
            </script>
        </body>
        </html>
    `);

    printWindow.document.close(); // Important for some browsers to stop loading
}
function applyHighlight(color) {
    // Highlighting logic requires complex DOM handling or `document.execCommand` (deprecated but works)
    // For now, this is a placeholder.
    alert("Highlighting requires a text selection.");
}
function removeHighlight() { }

