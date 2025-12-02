        // --- DATA SECTION: DAILY BULLETINS ---
        const newsDB = {
            'Economics': {
                date: 'December 2, 2025',
                lead: {
                    headline: "Fiscal Policy: New Levies on 'Sin Goods' Planned",
                    summary: "With the GST compensation cess set to expire, the Centre is preparing to introduce specific non-GST levies on tobacco and pan masala. This move ensures revenue continuity for public health funding without disrupting the core GST structure.",
                    link: "https://timesofindia.indiatimes.com/business/india-business/parliament-winter-sessions-economic-agenda-9-bills-listed-for-discussion-insurance-sin-goods-taxation-and-more-in-focus/articleshow/125674626.cms"
                },
                bullets: [
                    { tag: "Growth", text: "FICCI President projects India's GDP growth to exceed 7% in FY25.", link: "https://www.financialexpress.com/policy/economy-india-in-a-sweet-spot-strong-reforms-to-drive-7-gdp-growth-says-ficci-president-anant-goenka-4062959/" },
                    { tag: "FDI", text: "German Envoy calls India's 8.2% Q2 growth 'very impressive' for investors.", link: "https://www.tribuneindia.com/news/world/very-impressive-german-envoy-lauds-indias-8-2pc-gdp-growth-in-2025-26-q2/" },
                    { tag: "Policy", text: "Government to release October IIP data today due to GDP data coincidence.", link: "https://m.economictimes.com/news/economy/indicators/govt-to-release-october-industrial-output-iip-data-on-dec-1-amid-gdp-coincidence/articleshow/125636208.cms" },
                    { tag: "Markets", text: "Analysts eye RBI's December policy meeting and FII flows as key market triggers.", link: "https://www.financialexpress.com/market/analysts-eye-rbis-december-cut-fii-bets-amp-global-trends-as-key-market-triggers-4061045/" },
                    { tag: "Exports", text: "Cabinet clears ₹25,000 crore export mission to support sectors hit by US tariffs.", link: "https://timesofindia.indiatimes.com/business/india-business/us-tariffs-bite-indias-engineering-exports-slump-16-7-in-october-asean-eu-and-uae-shipments-weaken/articleshow/125661032.cms" },
                    { tag: "Telecom", text: "DoT to mandate 'SIM Binding' for financial apps to curb fraud.", link: "https://techwireasia.com/2025/12/india-requires-apple-and-other-phone-makers-to-preload-its-anti-fraud-app/" }
                ],
                stat: { label: "GDP Growth", value: "8.2%", desc: "Real GDP growth rate for Q2 FY26, confirming India as the fastest-growing major economy." }
            },
            'Politics': {
                date: 'December 2, 2025',
                lead: {
                    headline: "Winter Session: Oppn Demands Debate on Electoral Rolls",
                    summary: "Parliament's Winter Session has begun with the Opposition united in demanding a discussion on the 'Special Intensive Revision' (SIR) of electoral rolls. The government faces pressure to address allegations of voter disenfranchisement.",
                    link: "https://www.thehindu.com/news/national/all-party-meeting-opposition-demands-debate-on-sir-national-security-in-parliament/article70341766.ece"
                },
                bullets: [
                    { tag: "Parliament", text: "Manipur GST Bill returned to Lok Sabha amid Opposition walkout.", link: "https://www.thehindu.com/news/national/parliament-winter-session-lok-sabha-rajya-sabha-day-2-highlights-december-2-2025/article70348014.ece" },
                    { tag: "State", text: "Maharashtra Raj Bhavan officially renamed as 'Maharashtra Lok Bhavan'.", link: "https://rajbhavan-maharashtra.gov.in/en/02-12-2025-maharashtra-raj-bhavan-is-now-lok-bhavan/" },
                    { tag: "Security", text: "BSF reports Pakistan rebuilding terror launchpads along Jammu frontier.", link: "https://indianexpress.com/article/education/today-news-headlines-for-school-assembly-02-december-2025-india-cat-application-costs-rose-by-31-sanchar-saathi-app-now-mandatory-and-more-10396345/" },
                    { tag: "Reform", text: "PM Modi urges police to transform public perception and adopt AI.", link: "https://visionias.in/current-affairs/upsc-daily-news-summary" },
                    { tag: "Election", text: "ECI asserts exclusive authority to verify citizenship for electoral rolls.", link: "https://visionias.in/current-affairs/upsc-daily-news-summary" },
                    { tag: "Policy", text: "Assam panel recommends ST status for six communities; protests erupt.", link: "https://visionias.in/current-affairs/upsc-daily-news-summary" }
                ],
                stat: { label: "Bills Listed", value: "15", desc: "Number of bills listed for passage in the Winter Session, including key economic reforms." }
            },
            'Technology': {
                date: 'December 2, 2025',
                lead: {
                    headline: "India Mandates Pre-load of Anti-Fraud App",
                    summary: "The government has ordered smartphone makers like Apple and Samsung to pre-install the 'Sanchar Saathi' security framework on new devices to curb cyber fraud. The move has sparked a debate on user privacy versus security.",
                    link: "https://techwireasia.com/2025/12/india-requires-apple-and-other-phone-makers-to-preload-its-anti-fraud-app/"
                },
                bullets: [
                    { tag: "Android", text: "Android 17 'Cinnamon Bun' tipped for mid-2026 release with major UI overhaul.", link: "https://www.indiatoday.in/technology/news/story/google-gears-up-for-android-17-launch-expected-release-date-top-features-and-everything-to-know-2828337-2025-11-30" },
                    { tag: "AI", text: "Elon Musk predicts 'work will become optional' due to AI advancements.", link: "https://indianexpress.com/article/technology/tech-news-technology/elon-musk-predicts-work-will-become-optional-due-to-ai-in-talk-with-nikhil-kamath-10394817/" },
                    { tag: "Deals", text: "iPhone Air price drops significantly in India as Black Friday sales extend.", link: "https://timesofindia.indiatimes.com/technology/tech-news/iphone-air-price-in-india-drops-check-discounts-on-reliance-digital-amazon-croma-and-flipkart/articleshow/125671937.cms" },
                    { tag: "Investment", text: "Nvidia invests $2 billion in Synopsys to accelerate AI chip design.", link: "https://timesofindia.indiatimes.com/technology/tech-news/nvidia-invests-2-billion-in-synopsys-for-ai-engineering-partnership/articleshow/125697172.cms" },
                    { tag: "Telecom", text: "DoT to conduct spectrum auction for satellite broadband next year.", link: "https://dot.gov.in/" },
                    { tag: "Space", text: "ISRO finalizes timeline for NGLV 'Soorya' rocket development.", link: "https://en.wikipedia.org/wiki/Next_Generation_Launch_Vehicle" }
                ],
                stat: { label: "Investment", value: "$2 Bn", desc: "Value of Nvidia's investment in Synopsys to boost AI-driven chip engineering." }
            },
            'Education': {
                date: 'December 2, 2025',
                lead: {
                    headline: "Schools Closed in Chennai Due to Cyclone Ditwah",
                    summary: "Schools and colleges in Chennai, Tiruvallur, and Kanchipuram remain closed today due to heavy rainfall alerts from Cyclone Ditwah. District authorities have issued precautionary holiday orders.",
                    link: "https://m.economictimes.com/news/new-updates/chennai-school-holiday-on-december-2-schools-in-tamil-nadu-to-remain-shut-today-after-cyclone-ditwah-brings-heavy-rainfall-check-details/articleshow/125707282.cms"
                },
                bullets: [
                    { tag: "Reform", text: "AAP teachers' wing opposes HECI Bill, fearing centralization of education.", link: "https://www.theweek.in/wire-updates/national/2025/12/01/des50-dl-heci-aadta.html" },
                    { tag: "Policy", text: "Govt to table HECI Bill to replace UGC/AICTE with a single regulator.", link: "https://indianexpress.com/article/explained/everyday-explainers/what-is-the-centres-higher-education-commission-of-india-bill-2025-10382060/" },
                    { tag: "Skill", text: "Experts call for shift to skill-based education to tackle unemployment.", link: "https://timesofindia.indiatimes.com/city/ranchi/skill-based-education-call/articleshow/125677130.cms" },
                    { tag: "Festival", text: "Thiruvananthapuram school youth festival begins with 8,000 participants.", link: "https://timesofindia.indiatimes.com/city/thiruvananthapuram/thiruvananthapuram-revenue-district-school-youth-festival-begins-on-december-1/articleshow/125663044.cms" },
                    { tag: "Exam", text: "CAT 2025 application costs rose by 31%; Parliament discusses fee hike.", link: "https://indianexpress.com/article/education/today-news-headlines-for-school-assembly-02-december-2025-india-cat-application-costs-rose-by-31-sanchar-saathi-app-now-mandatory-and-more-10396345/" },
                    { tag: "Alert", text: "AIBE 20 exam held with strict 'No Notes' policy enforced by Bar Council.", link: "https://timesofindia.indiatimes.com/education/news/aibe-20-exam-2025-on-november-30-check-exam-day-dos-and-donts-issued-by-bci-here/articleshow/125579919.cms" }
                ],
                stat: { label: "Fee Hike", value: "31%", desc: "Increase in CAT 2025 application fees, raising concerns about accessibility." }
            },
            'Engineering': {
                date: 'December 2, 2025',
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
                date: 'December 2, 2025',
                lead: {
                    headline: "Raj Sabhagruh Wins Dezeen Award 2025",
                    summary: "The Raj Sabhagruh in Gujarat, designed by Serie Architects, has won the 2025 Dezeen Award for Best Civic Project. The building is noted for its sustainable use of 8 lakh hand-laid discarded marble bricks.",
                    link: "https://www.freepressjournal.in/mumbai/raj-sabhagruh-wins-2025-dezeen-award-for-best-civic-project"
                },
                bullets: [
                    { tag: "Urban", text: "Bengaluru proposes ₹1.5L crore plan for urban tunnels and elevated corridors.", link: "https://timesofindia.indiatimes.com/city/bengaluru/building-bengaluru-2-0-city-bets-whopping-rs-1-5-lakh-crore-on-its-infrastructure/articleshow/125603009.cms" },
                    { tag: "Heritage", text: "Odisha launches light & sound show at the iconic Konark Sun Temple.", link: "https://www.prameyanews.com/odisha-unveils-light-and-sound-show-at-konark-sun-temple" },
                    { tag: "Design", text: "Architectural Digest features BV Doshi's final project at Vitra Campus.", link: "https://www.zinio.com/in/publications/architectural-digest-india/5361" },
                    { tag: "Event", text: "ACETECH 2025 Expo showcases future building technologies in Mumbai.", link: "https://acetechexpo.com/" },
                    { tag: "Airport", text: "AAI to monitor Chennai Airport T3 construction live to meet 2026 deadline.", link: "https://timesofindia.indiatimes.com/city/chennai/aai-to-monitor-terminal-3-project/articleshow/124882491.cms" },
                    { tag: "Global", text: "Kéré Architecture reveals designs for sustainable library in Brazil.", link: "https://www.dezeen.com/architecture/" }
                ],
                stat: { label: "Bricks Used", value: "8 Lakh", desc: "Number of recycled marble bricks used in the award-winning Raj Sabhagruh project." }
            },
            'Sports': {
                date: 'December 2, 2025',
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
            'Medical': {
                date: 'December 2, 2025',
                lead: {
                    headline: "India Deploys 'BHISHM Cube' to Aid Sri Lanka",
                    summary: "India has deployed the 'BHISHM Cube' mobile hospital unit under the Aarogya Maitri project to aid cyclone-hit Sri Lanka. The unit provided critical care to over 300 patients in flooded areas.",
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
                stat: { label: "Patients Treated", value: "300+", desc: "Number of patients treated by India's BHISHM Cube unit in cyclone-hit Sri Lanka." }
            }
        };






