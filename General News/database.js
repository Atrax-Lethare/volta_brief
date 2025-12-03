        // --- DATA SECTION: DAILY BULLETINS ---
        const newsDB = {
            'Economics': {
                date: 'December 3, 2025',
                lead: {
                    headline: "RBI MPC Meets Today: Rates Likely on Hold",
                    summary: "The RBI's Monetary Policy Committee (MPC) begins its 3-day meeting today. Despite 8.2% GDP growth, analysts expect a 'status quo' on the Repo Rate (6.5%) as the central bank remains cautious about food inflation volatility.",
                    link: "https://www.financialexpress.com/policy/economy-rbi-mpc-meet-december-2025-preview-repo-rate-inflation-growth-4065432/"
                },
                bullets: [
                    { tag: "Growth", text: "German Envoy praises India's 8.2% Q2 GDP growth as 'very impressive'.", link: "https://www.tribuneindia.com/news/world/very-impressive-german-envoy-lauds-indias-8-2pc-gdp-growth-in-2025-26-q2/" },
                    { tag: "Markets", text: "Sensex and Nifty open flat as traders await RBI's policy stance.", link: "https://www.moneycontrol.com/news/business/markets/stock-market-live-updates-sensex-nifty-dec-3-2025-11854321.html" },
                    { tag: "Exports", text: "Government approves ₹25,000 crore mission to boost exports amidst global headwinds.", link: "https://pib.gov.in" },
                    { tag: "Tax", text: "Centre plans new levies on 'sin goods' (tobacco) as GST cess expires.", link: "https://indianexpress.com/article/business/economy/gst-cess-expiry-sin-goods-levy-export-boost-mission-9078901/" },
                    { tag: "Energy", text: "Adani Energy bags project to evacuate 2.5 GW from Khavda renewable zone.", link: "https://www.mercomindia.com/adani-energy-bags-transmission-project-to-evacuate-2-5-gw-of-renewable-energy" },
                    { tag: "Telecom", text: "DoT to mandate 'SIM Binding' for financial apps to curb fraud.", link: "https://techwireasia.com/2025/12/india-requires-apple-and-other-phone-makers-to-preload-its-anti-fraud-app/" }
                ],
                stat: { label: "Repo Rate", value: "6.5%", desc: "Current policy rate; likely to remain unchanged to keep inflation aligned with the 4% target." }
            },
            'Politics': {
                date: 'December 3, 2025',
                lead: {
                    headline: "Winter Session: Govt Agrees to Discuss Colonial Laws",
                    summary: "The government has agreed to discuss the replacement of colonial-era criminal laws in the Winter Session. However, the deadlock over the Opposition's demand for a debate on Electoral Rolls (SIR) continues to disrupt proceedings.",
                    link: "https://www.thehindu.com/news/national/parliament-winter-session-lok-sabha-rajya-sabha-day-2-highlights-december-2-2025/article70348014.ece"
                },
                bullets: [
                    { tag: "Parliament", text: "Manipur GST Bill returned to Lok Sabha amid opposition walkout.", link: "https://www.thehindu.com/news/national/parliament-winter-session-lok-sabha-rajya-sabha-day-2-highlights-december-2-2025/article70348014.ece" },
                    { tag: "Maharashtra", text: "Raj Bhavan officially renamed as 'Maharashtra Lok Bhavan' to reflect people-centric focus.", link: "https://rajbhavan-maharashtra.gov.in/en/02-12-2025-maharashtra-raj-bhavan-is-now-lok-bhavan/" },
                    { tag: "Security", text: "BSF reports Pakistan rebuilding terror launchpads along Jammu frontier.", link: "https://indianexpress.com/article/education/today-news-headlines-for-school-assembly-02-december-2025-india-cat-application-costs-rose-by-31-sanchar-saathi-app-now-mandatory-and-more-10396345/" },
                    { tag: "Election", text: "ECI asserts exclusive authority to verify citizenship for electoral rolls.", link: "https://visionias.in/current-affairs/upsc-daily-news-summary" },
                    { tag: "Reform", text: "PM Modi calls for 'SMART' policing and AI adoption at DGPs conference.", link: "https://visionias.in/current-affairs/upsc-daily-news-summary" },
                    { tag: "Foreign", text: "India sends humanitarian aid to Gaza via Egypt amid ongoing conflict.", link: "https://mea.gov.in" }
                ],
                stat: { label: "Bills Listed", value: "15", desc: "Number of bills listed for passage in the current Winter Session of Parliament." }
            },
            'Technology': {
                date: 'December 3, 2025',
                lead: {
                    headline: "India Mandates Pre-load of Anti-Fraud App",
                    summary: "In a major cybersecurity move, India has ordered smartphone makers to pre-install the 'Sanchar Saathi' security framework on all new devices. This aims to curb cyber fraud but has raised privacy concerns among tech giants.",
                    link: "https://techwireasia.com/2025/12/india-requires-apple-and-other-phone-makers-to-preload-its-anti-fraud-app/"
                },
                bullets: [
                    { tag: "Android", text: "Android 17 'Cinnamon Bun' tipped for mid-2026 release with major UI overhaul.", link: "https://www.indiatoday.in/technology/news/story/google-gears-up-for-android-17-launch-expected-release-date-top-features-and-everything-to-know-2828337-2025-11-30" },
                    { tag: "AI", text: "Elon Musk predicts 'work will become optional' due to AI in talk with Nikhil Kamath.", link: "https://indianexpress.com/article/technology/tech-news-technology/elon-musk-predicts-work-will-become-optional-due-to-ai-in-talk-with-nikhil-kamath-10394817/" },
                    { tag: "Deals", text: "iPhone Air price drops significantly in India as retailers extend Black Friday sales.", link: "https://timesofindia.indiatimes.com/technology/tech-news/iphone-air-price-in-india-drops-check-discounts-on-reliance-digital-amazon-croma-and-flipkart/articleshow/125671937.cms" },
                    { tag: "Investment", text: "Nvidia invests $2 billion in Synopsys to accelerate AI chip design.", link: "https://timesofindia.indiatimes.com/technology/tech-news/nvidia-invests-2-billion-in-synopsys-for-ai-engineering-partnership/articleshow/125697172.cms" },
                    { tag: "Space", text: "ISRO finalizes timeline for NGLV 'Soorya' rocket development.", link: "https://en.wikipedia.org/wiki/Next_Generation_Launch_Vehicle" },
                    { tag: "Telecom", text: "DoT to conduct spectrum auction for satellite broadband services next year.", link: "https://dot.gov.in/" }
                ],
                stat: { label: "Fraud Loss", value: "₹7,000 Cr", desc: "Estimated annual loss to Indian citizens due to cyber fraud, prompting the new app mandate." }
            },
            'Education': {
                date: 'December 3, 2025',
                lead: {
                    headline: "HECI Bill: A Single Regulator for Higher Ed",
                    summary: "The government is set to introduce the HECI Bill to replace UGC and AICTE with a single regulator. The move aims to streamline accreditation and standards but faces opposition over centralization concerns.",
                    link: "https://indianexpress.com/article/education/parliament-winter-session-heci-bill-ugc-aicte-replacement/9056789/"
                },
                bullets: [
                    { tag: "Protest", text: "AAP teachers' wing opposes HECI Bill, terming it 'marketisation' of education.", link: "https://www.theweek.in/wire-updates/national/2025/12/01/des50-dl-heci-aadta.html" },
                    { tag: "Exam", text: "AIBE 20 held with strict 'No Notes' policy; results expected in 2 weeks.", link: "https://timesofindia.indiatimes.com/education/news/aibe-20-exam-2025-on-november-30-check-exam-day-dos-and-donts-issued-by-bci-here/articleshow/125579919.cms" },
                    { tag: "Skill", text: "Experts call for shift to skill-based education to tackle youth unemployment.", link: "https://timesofindia.indiatimes.com/city/ranchi/skill-based-education-call/articleshow/125677130.cms" },
                    { tag: "Cyclone", text: "Schools in Chennai and Tirupati closed due to Cyclone Ditwah alerts.", link: "https://m.economictimes.com/news/new-updates/chennai-school-holiday-on-december-2-schools-in-tamil-nadu-to-remain-shut-today-after-cyclone-ditwah-brings-heavy-rainfall-check-details/articleshow/125707282.cms" },
                    { tag: "Ranking", text: "IISc Bangalore tops NIRF 2025 University rankings; IIT Madras leads overall.", link: "https://engineering.careers360.com/articles/iisc-bangalore-nirf-ranking" },
                    { tag: "Festival", text: "Thiruvananthapuram district school youth festival begins today.", link: "https://timesofindia.indiatimes.com/city/thiruvananthapuram/thiruvananthapuram-revenue-district-school-youth-festival-begins-on-december-1/articleshow/125663044.cms" }
                ],
                stat: { label: "Fee Hike", value: "31%", desc: "Increase in CAT 2025 application fees, raising concerns about accessibility." }
            },
            'Medical': {
                date: 'December 3, 2025',
                lead: {
                    headline: "India Deploys 'BHISHM Cube' for Sri Lanka Aid",
                    summary: "India has deployed the 'BHISHM Cube' mobile hospital unit under the Aarogya Maitri project to aid cyclone-hit Sri Lanka. The state-of-the-art unit provided critical care to over 300 patients in flooded areas.",
                    link: "https://www.newsonair.gov.in/india-deploys-bhishm-cube-under-aarogya-maitri-project-to-aid-cyclone-hit-sri-lanka/"
                },
                bullets: [
                    { tag: "HIV/AIDS", text: "Rural India sees rise in HIV awareness, but social stigma remains a barrier.", link: "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/world-aids-day-2025-rural-india-learns-more-about-hiv-but-stigma-remains-says-expert/articleshow/125684902.cms" },
                    { tag: "Pharma", text: "Manoj Joshi appointed as new Pharma Secretary in bureaucratic reshuffle.", link: "https://vohnetwork.com/news/policy/manoj-joshi-appointed-pharma-secretary" },
                    { tag: "Quality", text: "CDSCO flags 148 drug samples as 'Not of Standard Quality' in October alert.", link: "https://medicaldialogues.in/news/industry/pharma/cdsco/state-drug-alert-148-medicine-samples-fail-cdsco-quality-tests-in-october-159564" },
                    { tag: "Global", text: "WHO warns of global measles surge; 11 million cases estimated last year.", link: "https://news.un.org/en/story/2025/11/1166471" },
                    { tag: "Tech", text: "Apollo Hospitals partners with Google Cloud for AI-driven clinical intelligence.", link: "https://cloud.google.com/blog/products/ai-machine-learning/how-apollo-247-leverages-medlm-with-rag-to-revolutionize-healthcare" },
                    { tag: "Funding", text: "Centre allocates ₹5,000 Cr for AYUSH development and National Mission.", link: "https://www.entrepreneurindia.com/blog/en/article/union-government-allocates-rs-5-000-crore-for-ayush-development.36609" }
                ],
                stat: { label: "Patients", value: "300+", desc: "Number of patients treated by India's BHISHM Cube unit in cyclone-hit Sri Lanka." }
            },
            'Engineering': {
                date: 'December 3, 2025',
                lead: {
                    headline: "JEE Main Registrations Hit Record 14.5 Lakh",
                    summary: "The JEE Main Session-1 has witnessed an unprecedented 14.5 lakh registrations, the highest ever. Experts attribute this surge to the continued demand for technical education and government skilling initiatives.",
                    link: "https://timesofindia.indiatimes.com/city/mumbai/engineering-entrance-exam-jee-main-session-1-sees-record-14-5-lakh-applications/articleshow/125622056.cms"
                },
                bullets: [
                    { tag: "AI Deal", text: "Nvidia invests $2 billion in Synopsys for AI-driven engineering solutions.", link: "https://timesofindia.indiatimes.com/technology/tech-news/nvidia-invests-2-billion-in-synopsys-for-ai-engineering-partnership/articleshow/125697172.cms" },
                    { tag: "Exports", text: "Engineering exports slumped 16.7% in October due to US tariffs.", link: "https://timesofindia.indiatimes.com/business/india-business/us-tariffs-bite-indias-engineering-exports-slump-16-7-in-october-asean-eu-and-uae-shipments-weaken/articleshow/125661032.cms" },
                    { tag: "Energy", text: "Adani Energy bags 2.5 GW transmission project for Khavda renewable zone.", link: "https://www.mercomindia.com/adani-energy-bags-transmission-project-to-evacuate-2-5-gw-of-renewable-energy" },
                    { tag: "Civil", text: "L&T secures mega contract for Bullet Train electrification.", link: "https://www.larsentoubro.com/" },
                    { tag: "Robotics", text: "Genrobotics 'Bandicoot' robots deployed for automated sewer cleaning.", link: "https://sanitation.genrobotics.com/" },
                    { tag: "Space", text: "ISRO developing NGLV 'Soorya' rocket to replace PSLV by 2034.", link: "https://en.wikipedia.org/wiki/Next_Generation_Launch_Vehicle" }
                ],
                stat: { label: "Applicants", value: "14.5 Lakh", desc: "Record number of student registrations for JEE Main Session-1 2025." }
            },
            'Architecture': {
                date: 'December 3, 2025',
                lead: {
                    headline: "Raj Sabhagruh Wins Dezeen Award 2025",
                    summary: "The Raj Sabhagruh in Gujarat, designed by Serie Architects, has won the 2025 Dezeen Award for Best Civic Project. The building is noted for its sustainable use of 8 lakh hand-laid discarded marble bricks.",
                    link: "https://www.freepressjournal.in/mumbai/raj-sabhagruh-wins-2025-dezeen-award-for-best-civic-project"
                },
                bullets: [
                    { tag: "Design", text: "Architectural Digest features BV Doshi's final project at Vitra Campus.", link: "https://www.zinio.com/in/publications/architectural-digest-india/5361" },
                    { tag: "Urban", text: "Bengaluru's ₹1.5L crore plan includes 76km of urban tunnels and elevated corridors.", link: "https://timesofindia.indiatimes.com/city/bengaluru/building-bengaluru-2-0-city-bets-whopping-rs-1-5-lakh-crore-on-its-infrastructure/articleshow/125603009.cms" },
                    { tag: "Heritage", text: "Odisha launches light & sound show at the iconic Konark Sun Temple.", link: "https://www.prameyanews.com/odisha-unveils-light-and-sound-show-at-konark-sun-temple" },
                    { tag: "Event", text: "ACETECH 2025 Expo showcases future building technologies in Mumbai.", link: "https://acetechexpo.com/" },
                    { tag: "Airport", text: "AAI to monitor Chennai Airport T3 construction live to meet 2026 deadline.", link: "https://timesofindia.indiatimes.com/city/chennai/aai-to-monitor-terminal-3-project/articleshow/124882491.cms" },
                    { tag: "Global", text: "Kéré Architecture reveals designs for sustainable library in Brazil.", link: "https://www.dezeen.com/architecture/" }
                ],
                stat: { label: "Bricks Used", value: "8 Lakh", desc: "Number of recycled marble bricks used in the award-winning Raj Sabhagruh project." }
            },
            'Sports': {
                date: 'December 3, 2025',
                lead: {
                    headline: "Kohli's 52nd Ton Powers India to Win",
                    summary: "Virat Kohli scored a masterful 135 (his 52nd ODI century) to guide India to a 17-run victory over South Africa in the 1st ODI. Kuldeep Yadav's 4-wicket haul helped defend the total in a thrilling finish.",
                    link: "https://timesofindia.indiatimes.com/sports/cricket/india-vs-south-africa/ind-vs-sa-virat-kohlis-hundred-kuldeep-yadav-four-for-power-indias-17-run-win-in-first-odi/articleshow/125676367.cms"
                },
                bullets: [
                    { tag: "Hockey", text: "India finishes runner-up at Sultan Azlan Shah Cup in Malaysia.", link: "https://www.newsonair.gov.in/category/sports/" },
                    { tag: "TT", text: "Manika Batra leads India squad at ITTF Mixed Team World Cup in China.", link: "https://www.newsonair.gov.in/category/sports/" },
                    { tag: "Football", text: "Rajasthan United FC wins 41st Governor's Gold Cup.", link: "https://www.newsonair.gov.in/category/sports/" },
                    { tag: "Women", text: "India Women's Junior Hockey team beats Namibia 13-0 in World Cup opener.", link: "https://www.newsonair.gov.in/category/sports/" },
                    { tag: "Badminton", text: "Kidambi Srikanth reaches final of Syed Modi International 2025.", link: "https://www.newsonair.gov.in/category/sports/" },
                    { tag: "Awards", text: "Archery Premier League wins 'Emerging Event of the Year' at India Sports Awards.", link: "https://www.newsonair.gov.in/category/sports/" }
                ],
                stat: { label: "ODI Tons", value: "52", desc: "Virat Kohli's record-extending number of ODI centuries, cementing his legacy." }
            },
            'Space': {
                date: 'December 3, 2025',
                lead: {
                    headline: "Gaganyaan: First Uncrewed Mission Ready for Dec Launch",
                    summary: "ISRO Chief has confirmed that the first uncrewed Gaganyaan mission (G1), carrying the humanoid robot 'Vyommitra', is set for launch this December. This critical test will pave the way for India's first manned spaceflight in 2027.",
                    link: "https://timesofindia.indiatimes.com/science/isro-gaganyaan-2025-indias-first-uncrewed-g1-mission-with-vyommitra-set-to-launch-in-december/articleshow/123450124.cms"
                },
                bullets: [
                    { tag: "Private", text: "Agnikul Cosmos raises ₹150 Cr to scale up reusable rocket technology.", link: "https://www.thehindu.com/news/national/tamil-nadu/space-startup-agnikul-raises-150-crore-to-fund-reusable-rockets/article70310628.ece" },
                    { tag: "NISAR", text: "NASA-ISRO satellite NISAR enters 'Science Phase'; beams back first images.", link: "https://www.thehindu.com/sci-tech/science/nisar-earth-observation-satellite-enters-final-science-operations-phase/article70334808.ece" },
                    { tag: "SpaceX", text: "US clears SpaceX to build Starship launch pad at Kennedy Space Center.", link: "https://www.indiatoday.in/science/story/us-clears-elon-musks-spacex-to-build-starship-launch-pad-at-nasas-kennedy-space-center-2829291-2025-12-02" },
                    { tag: "Launch", text: "SpaceX launches 60th mission of the year with Starlink satellites.", link: "https://www.space.com/space-exploration/launches-spacecraft/spacex-launches-60th-mission-of-the-year-from-california" },
                    { tag: "Outreach", text: "ISRO space exhibition in Rajasthan draws massive student crowds.", link: "https://www.livemint.com/focus/3day-isro-space-exhibition-at-rajasthan-technical-university-draws-high-student-turnout-11764648887228.html" },
                    { tag: "Future", text: "ISRO developing NGLV 'Soorya' rocket for 2034 heavy-lift missions.", link: "https://en.wikipedia.org/wiki/Next_Generation_Launch_Vehicle" }
                ],
                stat: { label: "Tests", value: "80,000", desc: "Number of tests completed by ISRO to certify systems for the Gaganyaan mission." }
            }
        };










