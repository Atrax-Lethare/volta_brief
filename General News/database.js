        // --- DATA SECTION: DAILY BULLETINS ---
        const newsDB = {
            'Economics': {
                date: 'November 30, 2025',
                lead: {
                    headline: "RBI Likely to Hold Rates Despite GDP Beat",
                    summary: "Despite the spectacular 8.2% GDP growth, analysts predict the RBI will hold the repo rate at 6.5% in the upcoming December policy meeting. The focus remains on managing food inflation volatility before signaling a pivot.",
                    link: "https://www.taxtmi.com/news?id=63153"
                },
                bullets: [
                    { tag: "Markets", text: "Economists upgrade FY26 GDP forecast to 7.4% following Q2 surprise.", link: "https://indianexpress.com/article/business/economists-upgrade-fy26-gdp-growth-forecasts-to-7-4-after-q2-data-10394838/" },
                    { tag: "Trade", text: "Engineering exports slump 16.7% in October; US & ASEAN demand weakens.", link: "https://timesofindia.indiatimes.com/business/india-business/us-tariffs-bite-indias-engineering-exports-slump-16-7-in-october-asean-eu-and-uae-shipments-weaken/articleshow/125661032.cms" },
                    { tag: "Data", text: "Government to release October IIP data on Dec 1; delay due to GDP coincidence.", link: "https://m.economictimes.com/news/economy/indicators/govt-to-release-october-industrial-output-iip-data-on-dec-1-amid-gdp-coincidence/articleshow/125636208.cms" },
                    { tag: "Auto", text: "November auto sales numbers expected tomorrow; SUVs likely to lead demand.", link: "https://www.financialexpress.com/market/analysts-eye-rbis-december-cut-fii-bets-amp-global-trends-as-key-market-triggers-4061045/" },
                    { tag: "Global", text: "Global markets 'flying blind' after CME exchange suffers 10-hour glitch.", link: "https://indianexpress.com/international/" },
                    { tag: "Energy", text: "Adani Energy bags project to evacuate 2.5 GW from Khavda renewable zone.", link: "https://www.mercomindia.com/adani-energy-bags-transmission-project-to-evacuate-2-5-gw-of-renewable-energy" }
                ],
                stat: { label: "Repo Rate", value: "6.5%", desc: "Current RBI policy rate; expected to remain unchanged in the Dec 5 meeting." }
            },
            'Politics': {
                date: 'November 30, 2025',
                lead: {
                    headline: "All-Party Meet: Opposition Demands Debate on SIR & Security",
                    summary: "Ahead of the Winter Session, the Opposition has drawn a red line, demanding debates on the Special Intensive Revision (SIR) of electoral rolls and the recent Delhi blast. The government listed 15 bills but gave no assurance on these specific debates.",
                    link: "https://www.thehindu.com/news/national/all-party-meeting-opposition-demands-debate-on-sir-national-security-in-parliament/article70341766.ece"
                },
                bullets: [
                    { tag: "Winter Session", text: "13 Bills listed for passage including Atomic Energy and HECI Bills.", link: "https://m.economictimes.com/news/politics-and-nation/parliament-winter-session-agenda-sin-goods-taxation-atomic-bill-on-table-as-oppn-gears-up-for-showdown-over-sir/articleshow/125675893.cms" },
                    { tag: "Diplomacy", text: "Russian President Vladimir Putin to visit India on Dec 4-5.", link: "https://www.thehindu.com/news/top-news-of-the-day-indian-economy-growth-82-in-q2-cyclone-ditwah-wreaks-havoc-in-sri-lanka-likely-to-reach-tn-andhra-coast-on-nov-30-and-more/article70334743.ece" },
                    { tag: "Elections", text: "Trinamool claims 40 deaths linked to electoral roll revision process in Bengal.", link: "https://www.thehindu.com/news/top-news-of-the-day-indian-economy-growth-82-in-q2-cyclone-ditwah-wreaks-havoc-in-sri-lanka-likely-to-reach-tn-andhra-coast-on-nov-30-and-more/article70334743.ece" },
                    { tag: "Aadhaar", text: "UP Govt clarifies Aadhaar cannot be used as proof of Date of Birth.", link: "https://indianexpress.com/international/" },
                    { tag: "US-India", text: "Trump announces plan to 'pause migration from Third World'; UN urges caution.", link: "https://indianexpress.com/international/" },
                    { tag: "State", text: "PM Modi unveils 77-ft Lord Ram statue in Goa.", link: "https://www.thehindu.com/news/top-news-of-the-day-indian-economy-growth-82-in-q2-cyclone-ditwah-wreaks-havoc-in-sri-lanka-likely-to-reach-tn-andhra-coast-on-nov-30-and-more/article70334743.ece" }
                ],
                stat: { label: "GDP Growth", value: "8.2%", desc: "Q2 GDP figure dominating political discourse as Govt claims economic success." }
            },
            'Technology': {
                date: 'November 30, 2025',
                lead: {
                    headline: "Elon Musk: 'Work Will Become Optional Due to AI'",
                    summary: "In a conversation with Nikhil Kamath, Elon Musk predicted a future where AI and robotics will make human labor optional within 20 years. He envisions a post-scarcity world where goods and services are abundant.",
                    link: "https://indianexpress.com/article/technology/tech-news-technology/elon-musk-predicts-work-will-become-optional-due-to-ai-in-talk-with-nikhil-kamath-10394817/"
                },
                bullets: [
                    { tag: "Android 17", text: "Leaks suggest Google's Android 17 'Cinnamon Bun' will launch in mid-2026.", link: "https://www.indiatoday.in/technology/news/story/google-gears-up-for-android-17-launch-expected-release-date-top-features-and-everything-to-know-2828337-2025-11-30" },
                    { tag: "Deals", text: "iPhone Air price drops significantly in India as Black Friday sales extend.", link: "https://timesofindia.indiatimes.com/technology/tech-news/iphone-air-price-in-india-drops-check-discounts-on-reliance-digital-amazon-croma-and-flipkart/articleshow/125671937.cms" },
                    { tag: "Sales", text: "Amazon India extends Black Friday sale till Dec 1 on electronics.", link: "https://timesofindia.indiatimes.com/technology/tech-news/amazon-black-friday-sale-avail-big-offers-on-smartphones-home-appliances-everyday-essentials-and-more/articleshow/125637724.cms" },
                    { tag: "AI", text: "PM Modi calls for a global compact on AI to prevent misuse at IBSA meet.", link: "https://www.nextias.com/ca/headlines-of-the-day/24-11-2025/headlines-of-the-day-24-november-2025" },
                    { tag: "Space", text: "ISRO's NGLV development project 'Soorya' aimed for 2034 launch.", link: "https://en.wikipedia.org/wiki/Next_Generation_Launch_Vehicle" },
                    { tag: "Innovation", text: "GCWCN 2025 in Pune showcases AI and Quantum computing breakthroughs.", link: "https://timesofindia.indiatimes.com/city/pune/gcwcn-2025-showcases-breakthrough-innovations-across-ai-quantum-computing-iot-healthcare-engineering/articleshow/125554437.cms" }
                ],
                stat: { label: "Android Ver", value: "17", desc: "Upcoming Android version codenamed 'Cinnamon Bun', expected in 2026." }
            },
            'Education': {
                date: 'November 30, 2025',
                lead: {
                    headline: "AIBE 20 Exam Today: Strict Guidelines Enforced",
                    summary: "The All India Bar Examination (AIBE) 20 is being conducted today across the country. The Bar Council of India has enforced strict rules, allowing only Bare Acts without notes inside the exam hall.",
                    link: "https://timesofindia.indiatimes.com/education/news/aibe-20-exam-2025-on-november-30-check-exam-day-dos-and-donts-issued-by-bci-here/articleshow/125579919.cms"
                },
                bullets: [
                    { tag: "Schools", text: "Schools in Chennai and Tirupati likely closed Dec 1 due to Cyclone Ditwah.", link: "https://www.jagranjosh.com/articles/school-holiday-on-1-december-2025-monday-schools-closed-in-these-states-due-to-rain-and-regional-festivals-1800005869-1" },
                    { tag: "Reform", text: "HECI Bill listed for Winter Session to replace UGC/AICTE with single regulator.", link: "https://indianexpress.com/article/education/winter-session-parliament-to-take-up-bill-replacing-ugc-aicte-ncte-with-single-regulator-10381204/" },
                    { tag: "Policy", text: "Jharkhand DG Rail calls for shift to skill-based education system.", link: "https://timesofindia.indiatimes.com/city/ranchi/skill-based-education-call/articleshow/125677130.cms" },
                    { tag: "Festival", text: "Thiruvananthapuram district school youth festival begins today.", link: "https://timesofindia.indiatimes.com/city/thiruvananthapuram/thiruvananthapuram-revenue-district-school-youth-festival-begins-on-december-1/articleshow/125663044.cms" },
                    { tag: "Exams", text: "CAT 2025 held today; IIM Kozhikode maintains standard paper structure.", link: "https://www.ndtv.com/topic/november-30" },
                    { tag: "Recruitment", text: "Indian Railways closes applications for Junior Engineer posts today.", link: "https://www.ndtv.com/topic/november-30" }
                ],
                stat: { label: "Applicants", value: "14.5 L", desc: "Record number of registrations for JEE Main Session-1 2025." }
            },
            'Engineering': {
                date: 'November 30, 2025',
                lead: {
                    headline: "Engineering Exports Slump 16.7% in October",
                    summary: "India's engineering goods exports witnessed a sharp 16.7% decline in October 2025, primarily due to US tariffs and weak demand in the EU and ASEAN regions. The sector faces headwinds from rising protectionism.",
                    link: "https://timesofindia.indiatimes.com/business/india-business/us-tariffs-bite-indias-engineering-exports-slump-16-7-in-october-asean-eu-and-uae-shipments-weaken/articleshow/125661032.cms"
                },
                bullets: [
                    { tag: "JEE Main", text: "Record 14.5 lakh students register for JEE Main Session-1.", link: "https://timesofindia.indiatimes.com/city/mumbai/engineering-entrance-exam-jee-main-session-1-sees-record-14-5-lakh-applications/articleshow/125622056.cms" },
                    { tag: "Telecom", text: "GCWCN 2025 highlights innovations in IoT and 6G engineering.", link: "https://timesofindia.indiatimes.com/city/pune/gcwcn-2025-showcases-breakthrough-innovations-across-ai-quantum-computing-iot-healthcare-engineering/articleshow/125554437.cms" },
                    { tag: "Space", text: "ISRO developing NGLV to replace PSLV/GSLV; launch expected in 2034.", link: "https://en.wikipedia.org/wiki/Next_Generation_Launch_Vehicle" },
                    { tag: "Infra", text: "Chenab Bridge (World's Highest) opens for commercial rail traffic.", link: "https://en.wikipedia.org/wiki/Chenab_Rail_Bridge" },
                    { tag: "Robotics", text: "Genrobotics deploys 'Bandicoot' robots for sewer cleaning in more cities.", link: "https://sanitation.genrobotics.com/" },
                    { tag: "Energy", text: "Adani Energy building 2.5 GW transmission system in Khavda.", link: "https://www.mercomindia.com/adani-energy-bags-transmission-project-to-evacuate-2-5-gw-of-renewable-energy" }
                ],
                stat: { label: "Decline", value: "16.7%", desc: "Year-on-year drop in India's engineering goods exports for October 2025." }
            },
            'Architecture': {
                date: 'November 30, 2025',
                lead: {
                    headline: "Raj Sabhagruh Wins 2025 Dezeen Award",
                    summary: "The Raj Sabhagruh at Dharampur, Gujarat, has won the prestigious Dezeen Award 2025 for Best Civic Project. Designed by Serie Architects, the structure is celebrated for its sustainable use of discarded white marble bricks.",
                    link: "https://www.freepressjournal.in/mumbai/raj-sabhagruh-wins-2025-dezeen-award-for-best-civic-project"
                },
                bullets: [
                    { tag: "Design", text: "Architectural Digest features BV Doshi's retreat at Vitra Campus.", link: "https://www.zinio.com/in/publications/architectural-digest-india/5361" },
                    { tag: "Urban", text: "Bengaluru's ₹1.5L cr plan includes 76km of urban tunnels and elevated corridors.", link: "https://timesofindia.indiatimes.com/city/bengaluru/building-bengaluru-2-0-city-bets-whopping-rs-1-5-lakh-crore-on-its-infrastructure/articleshow/125603009.cms" },
                    { tag: "Heritage", text: "Odisha unveils light & sound show at Konark Sun Temple.", link: "https://www.prameyanews.com/odisha-unveils-light-and-sound-show-at-konark-sun-temple" },
                    { tag: "Event", text: "ACETECH 2025 Expo showcases future building technologies in Mumbai.", link: "https://acetechexpo.com/" },
                    { tag: "Airport", text: "AAI to live-monitor Chennai Airport T3 construction to meet 2026 deadline.", link: "https://timesofindia.indiatimes.com/city/chennai/aai-to-monitor-terminal-3-project/articleshow/124882491.cms" },
                    { tag: "Global", text: "Kéré Architecture reveals first South American project in Rio.", link: "https://www.dezeen.com/architecture/" }
                ],
                stat: { label: "Bricks Used", value: "8 Lakh", desc: "Number of hand-laid discarded marble bricks used in the award-winning Raj Sabhagruh." }
            },
            'Sports': {
                date: 'November 30, 2025',
                lead: {
                    headline: "Kohli hits 52nd Ton; India wins 1st ODI",
                    summary: "Virat Kohli scored his 52nd ODI century (135 off 120 balls) to power India to a 17-run victory over South Africa in Ranchi. Kuldeep Yadav starred with the ball, taking 4 wickets to defend India's total of 349.",
                    link: "https://timesofindia.indiatimes.com/sports/cricket/india-vs-south-africa/ind-vs-sa-virat-kohlis-hundred-kuldeep-yadav-four-for-power-indias-17-run-win-in-first-odi/articleshow/125676367.cms"
                },
                bullets: [
                    { tag: "F1", text: "Max Verstappen wins Qatar GP; title race with Norris goes to final round.", link: "https://www.thehindu.com/latest-news/" },
                    { tag: "Hockey", text: "India finishes runner-up at Sultan Azlan Shah Cup in Malaysia.", link: "https://www.newsonair.gov.in/category/sports/" },
                    { tag: "TT", text: "Manika Batra leads India squad at ITTF Mixed Team World Cup in China.", link: "https://www.newsonair.gov.in/category/sports/" },
                    { tag: "Record", text: "Rohit Sharma breaks Shahid Afridi's record for most ODI sixes (352).", link: "https://timesofindia.indiatimes.com/sports/cricket/india-vs-south-africa/ind-vs-sa-virat-kohlis-hundred-kuldeep-yadav-four-for-power-indias-17-run-win-in-first-odi/articleshow/125676367.cms" },
                    { tag: "Football", text: "Rajasthan United FC wins 41st Governor's Gold Cup.", link: "https://www.newsonair.gov.in/category/sports/" },
                    { tag: "Blind Cricket", text: "President Murmu meets Women's Blind T20 World Cup champions.", link: "https://www.newsonair.gov.in/category/sports/" }
                ],
                stat: { label: "ODI Tons", value: "52", desc: "Virat Kohli's record-extending number of ODI centuries." }
            }
        };

