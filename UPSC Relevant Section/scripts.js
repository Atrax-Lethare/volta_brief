<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> UPSC Daily Brief | volta_brief </title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    
    <script src="database.js"></script>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <a href="index.html" class="top-logo">volta<span class="logo-accent">_brief</span></a>

    <!-- Highlighter Tooltip -->
    <div id="highlight-tooltip">
        <div class="color-btn" style="background: #fef08a;" onclick="applyHighlight('#fef08a')"></div>
        <div class="color-btn" style="background: #bbf7d0;" onclick="applyHighlight('#bbf7d0')"></div>
        <div class="color-btn" style="background: #bfdbfe;" onclick="applyHighlight('#bfdbfe')"></div>
        <div class="color-btn" style="background: #fbcfe8;" onclick="applyHighlight('#fbcfe8')"></div>
        <div class="color-btn remove" onclick="removeHighlight()">&times;</div>
    </div>

    <!-- Floating Notepad -->
    <div id="notepad-container">
        <div class="notepad-header">
            <span class="notepad-title">My Notes</span>
            <div class="notepad-actions">
                <button onclick="downloadNotes()" title="Download PDF">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </button>
                <button onclick="toggleNotepad()" title="Close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
        </div>
        <textarea id="notepad-area" placeholder="Type your notes here... (Saved automatically)"></textarea>
    </div>

    <!-- Floating Action Buttons -->
    <div class="fab-container">
        <div id="pdf-fab" class="fab" onclick="downloadArticlesPDF()" title="Print Articles to PDF">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
        </div>
        <div id="notepad-fab" class="fab" onclick="toggleNotepad()" title="Open Notepad">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
        </div>
    </div>

    <!-- Deep Dive Modal -->
    <div id="deepDiveModal" class="modal-overlay" onclick="closeModal(event)">
        <div class="modal-content" onclick="event.stopPropagation()">
            <div class="modal-header">
                <h2 id="modalTitle" class="modal-title">Article Title</h2>
                <button class="modal-close" onclick="closeModalDirect()">&times;</button>
            </div>
            <div id="modalBody" class="modal-body"></div>
        </div>
    </div>

    <!-- Mobile Overlay for Sidebar -->
    <div id="mobile-overlay" onclick="toggleSidebar()"></div>

    <!-- Sidebar -->
    <aside id="sidebar">
        <div class="sidebar-header">
            <button onclick="toggleSidebar()" class="btn-icon" style="display: none;">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div class="brand-text" style="margin-left: 12px;">UPSC Brief</div>
        </div>
        
        <div class="action-btn-container">
            <button onclick="goToToday()" class="action-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                Today's Summary
            </button>
        </div>
        <div class="archive-container">
            <div class="archive-label">Archives</div>
            <div id="archiveList"></div>
        </div>
    </aside>

    <!-- Main Content -->
    <main>
        <header>
            <div class="header-title">
                <button onclick="toggleSidebar()" class="btn-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5f6368" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
                <span>Daily Analysis</span>
            </div>
        </header>

        <div id="content-scroll">
            <div class="container">
                <div class="page-header">
                    <span id="displayDate" class="date-badge">Today</span>
                    <h2 id="displayHeadline" class="main-headline">Daily Summary</h2>
                </div>
                <div id="articlesContainer"></div>
                <p style="font-size:small; color:grey"><i>The model answere are just suggestions of how to write. WE PROMOTE WRITING THE ANSWERS ON YOUR OWN SO THAT YOU GRADUALLY GAIN PERFECTION IN EXPRESSING YOUR THOUGHTS ON PAPER, which is certainly necessary for the UPSC Examinations.</i></p>
                <p style="font-size:small; color:grey">
                                    <i>
                                            Sometimes the original source link might not work due to continuously changing news URL's. <br>
                                            If that is the case, click on the search button. You will be redirected to a page where you can choose a relevant news page to read further. 👍
                                    </i>
                </p>
            </div>
        </div>
    </main>

    <script src="scripts.js"></script>
</body>

</html>


