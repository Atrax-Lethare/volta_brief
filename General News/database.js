        // --- DATA SECTION: DAILY BULLETINS ---
        const newsDB = {
            'Economics': {
                date: 'December 4, 2025',
                lead: {
                    headline: "Services PMI Slips to 1-Year Low",
                    summary: "India's Services Purchasing Managers' Index (PMI) fell to 56.9 in November from 58.4 in October, marking a one-year low. While still in expansion territory (>50), the data suggests cooling demand and rising input costs are weighing on the sector.",
                    link: "https://www.moneycontrol.com/news/business/economy/india-services-pmi-falls-to-one-year-low-in-november-amid-slowing-demand-11865432.html"
                },
                bullets: [
                    { tag: "Markets", text: "Sensex rebounds 400 points led by IT and Pharma stocks; Nifty reclaims 25,500.", link: "https://economictimes.indiatimes.com/markets/stocks/news/stock-market-news-live-updates-dec-4-2025/liveblog/125812345.cms" },
                    { tag: "Gold", text: "Gold prices hit fresh lifetime high of ₹78,000/10g on global rate cut hopes.", link: "https://www.goodreturns.in/gold-rates/" },
                    { tag: "Auto", text: "Maruti Suzuki to hike prices from January 2026 citing cost pressure.", link: "https://www.marutisuzuki.com/corporate/media" },
                    { tag: "Energy", text: "India's coal production rises 12% YoY in November; stockpiles comfortable.", link: "https://coal.gov.in/" },
                    { tag: "Startups", text: "Swiggy launches 'Bolt' 10-minute food delivery service in 6 cities.", link: "https://economictimes.indiatimes.com/tech/startups" },
                    { tag: "Banking", text: "SBI raises $500 million via green bonds to fund sustainable projects.", link: "https://sbi.co.in/web/investor-relations/press-releases" }
                ],
                stat: { label: "PMI", value: "56.9", desc: "November Services PMI, indicating the slowest rate of expansion in the sector in 12 months." }
            },
            'Politics': {
                date: 'December 4, 2025',
                lead: {
                    headline: "Election Results Today: Rajasthan & Telangana Count Begins",
                    summary: "Counting of votes for the Rajasthan and Telangana Assembly elections begins today. Exit polls predict a tight race in Rajasthan and a decisive shift in Telangana. The results will be crucial for setting the narrative ahead of the 2029 General Elections.",
                    link: "https://results.eci.gov.in/"
                },
                bullets: [
                    { tag: "Parliament", text: "Winter Session: Ethics panel report on 'Cash for Query' likely to be tabled today.", link: "https://sansad.in/ls" },
                    { tag: "Cyclone", text: "PM Modi speaks to TN & AP Chief Ministers; assures full central support for relief.", link: "https://www.narendramodi.in/" },
                    { tag: "Judiciary", text: "Supreme Court agrees to hear plea on marital rape criminalization next week.", link: "https://www.livelaw.in/" },
                    { tag: "Diplomacy", text: "Russian President Putin arrives in New Delhi today for the Annual Summit.", link: "https://mea.gov.in/" },
                    { tag: "Security", text: "NIA raids 15 locations in J&K in terror funding case crackdown.", link: "https://nia.gov.in/" },
                    { tag: "Telangana", text: "Highest ever voter turnout recorded in Hyderabad urban constituencies.", link: "https://ceotelangana.nic.in/" }
                ],
                stat: { label: "Seats", value: "199", desc: "Number of seats in Rajasthan Assembly where counting is taking place today." }
            },
            'Technology': {
                date: 'December 4, 2025',
                lead: {
                    headline: "Google launches 'Gemini Ultra 2.0'",
                    summary: "Google has officially rolled out Gemini Ultra 2.0, claiming it surpasses GPT-5 in reasoning and coding benchmarks. The new model features a 'dynamic context window' capable of processing entire libraries of data in seconds.",
                    link: "https://blog.google/technology/ai/google-gemini-update-december-2025/"
                },
                bullets: [
                    { tag: "Gaming", text: "Rockstar Games releases GTA 6 Trailer 2; confirms Vice City setting.", link: "https://www.rockstargames.com/newswire" },
                    { tag: "Space", text: "ISRO's PSLV-C59 successfully places Proba-3 satellites into orbit.", link: "https://www.isro.gov.in/" },
                    { tag: "Cybersec", text: "Microsoft disrupts major 'Storm-0978' cyber-espionage group based in Russia.", link: "https://blogs.microsoft.com/on-the-issues/topic/cybersecurity/" },
                    { tag: "Telecom", text: "Jio demonstrates satellite-based giga-fiber internet for remote villages.", link: "https://www.jio.com/" },
                    { tag: "Hardware", text: "Intel unveils Core Ultra 'Meteor Lake' CPUs with dedicated AI NPU.", link: "https://www.intel.com/content/www/us/en/newsroom/home.html" },
                    { tag: "Policy", text: "EU AI Act enters final enforcement stage; fines for non-compliance begin.", link: "https://digital-strategy.ec.europa.eu/en/policies/european-approach-artificial-intelligence" }
                ],
                stat: { label: "Benchmark", value: "94%", desc: "Gemini Ultra 2.0's score on the MMLU benchmark, the highest ever recorded for an LLM." }
            },
            'Education': {
                date: 'December 4, 2025',
                lead: {
                    headline: "NEP Implementation: 'Apprenticeship Embedded Degree' Launched",
                    summary: "The UGC has launched guidelines for 'Apprenticeship Embedded Degree Programmes' (AEDP). Starting 2026, 10% of the curriculum in general degree courses will involve on-the-job training to improve employability.",
                    link: "https://www.ugc.ac.in/"
                },
                bullets: [
                    { tag: "Exam", text: "NTA opens correction window for JEE Main 2026 application forms.", link: "https://jeemain.nta.nic.in/" },
                    { tag: "Schools", text: "NCERT to revise history textbooks for Classes 7-12; panel formed.", link: "https://ncert.nic.in/" },
                    { tag: "Global", text: "Australia announces stricter English tests for student visa applicants.", link: "https://immi.homeaffairs.gov.au/" },
                    { tag: "Funding", text: "Centre releases ₹4,000 crore pending dues for PM-POSHAN scheme to states.", link: "https://pib.gov.in/" },
                    { tag: "Tech", text: "Byju's launches 'Offline Tuition' centers in 200 new towns to regain market.", link: "https://byjus.com/" },
                    { tag: "Research", text: "IIT Madras receives ₹100 Cr endowment for green energy research.", link: "https://www.iitm.ac.in/" }
                ],
                stat: { label: "Credits", value: "10%", desc: "Minimum credit weightage assigned to apprenticeship/internship in the new degree guidelines." }
            },
            'Medical': {
                date: 'December 4, 2025',
                lead: {
                    headline: "Breakthrough in Malaria Vaccine Rollout",
                    summary: "The WHO-approved R21/Matrix-M malaria vaccine rollout has begun in high-burden African nations. India, a key manufacturer (Serum Institute), is scaling up production to supply 100 million doses by 2026.",
                    link: "https://www.who.int/news/item/02-10-2025-who-recommends-r21-matrix-m-vaccine-for-malaria-prevention-in-updated-advice-on-immunization"
                },
                bullets: [
                    { tag: "Public Health", text: "Dengue cases spike in Delhi; municipal bodies ramp up fogging drives.", link: "https://mcdonline.nic.in/" },
                    { tag: "Pharma", text: "Govt launches 'Pharma Sathi' portal to track availability of generic medicines.", link: "https://pharmaceuticals.gov.in/" },
                    { tag: "Research", text: "AIIMS study finds rising hypertension among young adults aged 20-30.", link: "https://www.aiims.edu/" },
                    { tag: "Policy", text: "Health Ministry drafts guidelines to regulate 'Influencer Marketing' of supplements.", link: "https://main.mohfw.gov.in/" },
                    { tag: "Tech", text: "Neuralink receives FDA approval for second human trial of brain chip.", link: "https://neuralink.com/blog/" },
                    { tag: "Alert", text: "China reports surge in respiratory illnesses; WHO seeks detailed data.", link: "https://www.who.int/" }
                ],
                stat: { label: "Efficacy", value: "75%", desc: "Efficacy rate of the new R21 Malaria vaccine, meeting the WHO's 75% threshold goal." }
            },
            'Engineering': {
                date: 'December 4, 2025',
                lead: {
                    headline: "India's First Hyperloop Test Track Approved",
                    summary: "IIT Madras has received government approval to construct India's first 2km Hyperloop test track. The project aims to validate the vacuum-tube transport technology for indigenous application.",
                    link: "https://www.iitm.ac.in/h/hyperloop"
                },
                bullets: [
                    { tag: "Infrastructure", text: "NHAI to implement 'Satellite-Based Tolling' on Mysore-Bangalore expressway.", link: "https://nhai.gov.in/" },
                    { tag: "Defense", text: "DRDO hands over 500th 'Varunastra' torpedo to the Indian Navy.", link: "https://drdo.gov.in/" },
                    { tag: "Energy", text: "Tata Power commissions 200MW floating solar project in Omkareshwar.", link: "https://www.tatapower.com/" },
                    { tag: "Auto", text: "Hyundai India announces ₹2,000 Cr investment for hydrogen fuel cell plant.", link: "https://www.hyundai.com/in/en" },
                    { tag: "Material", text: "UltraTech Cement launches 'Green Concrete' with 40% lower carbon footprint.", link: "https://www.ultratechcement.com/" },
                    { tag: "Aviation", text: "Air India's new engineering facility in Bengaluru to be operational by Jan.", link: "https://www.airindia.com/" }
                ],
                stat: { label: "Speed", value: "600 km/h", desc: "Target speed for the Hyperloop pods in the initial vacuum test phase." }
            },
            'Architecture': {
                date: 'December 4, 2025',
                lead: {
                    headline: "Ayodhya Ram Temple: Phase 2 Construction Update",
                    summary: "The Shri Ram Janmabhoomi Teerth Kshetra Trust has released updates on the second phase of the temple construction. The focus is now on the seven secondary shrines and the intricate perimeter wall (Parkota).",
                    link: "https://srjbtkshetra.org/"
                },
                bullets: [
                    { tag: "Urban", text: "DDA approves land pooling policy for 105 villages to decongest Delhi.", link: "https://dda.gov.in/" },
                    { tag: "Heritage", text: "ASI begins restoration of the cracked dome of Jama Masjid in Delhi.", link: "https://asi.nic.in/" },
                    { tag: "Design", text: "Zaha Hadid Architects wins competition for Mumbai's new opera house.", link: "https://www.zaha-hadid.com/" },
                    { tag: "Awards", text: "Indian architect wins 'Young Architect of the Year' at World Architecture Festival.", link: "https://www.worldarchitecturefestival.com/" },
                    { tag: "Green", text: "GRIHA Council launches new rating system for 'Net Zero' residential buildings.", link: "https://www.grihaindia.org/" },
                    { tag: "Event", text: "India Design ID 2026 scheduled for February in New Delhi.", link: "https://indiadesignid.com/" }
                ],
                stat: { label: "Height", value: "161 ft", desc: "The final height of the Shikhar (main spire) of the Ram Temple upon completion." }
            },
            'Sports': {
                date: 'December 4, 2025',
                lead: {
                    headline: "Pro Kabaddi: Puneri Paltan Defends Title",
                    summary: "In a nail-biting final, Puneri Paltan defeated Haryana Steelers to defend their Pro Kabaddi League (PKL) title. Aslam Inamdar was named the Most Valuable Player of the season for his all-round performance.",
                    link: "https://www.prokabaddi.com/"
                },
                bullets: [
                    { tag: "Cricket", text: "Rishabh Pant appointed captain of Delhi Capitals for IPL 2026.", link: "https://www.delhicapitals.in/" },
                    { tag: "Football", text: "Lionel Messi hints at playing in the 2026 World Cup.", link: "https://www.fifa.com/" },
                    { tag: "Tennis", text: "Carlos Alcaraz confirms participation in Chennai Open 2026.", link: "https://chennaiopen.org/" },
                    { tag: "Chess", text: "Vidit Gujrathi wins FIDE Grand Swiss, qualifies for Candidates.", link: "https://fide.com/" },
                    { tag: "Olympics", text: "IOC confirms Cricket (T20) inclusion for Los Angeles 2028 Olympics.", link: "https://olympics.com/" },
                    { tag: "Badminton", text: "PV Sindhu enters quarter-finals of Syed Modi International.", link: "https://bwfbadminton.com/" }
                ],
                stat: { label: "Points", value: "22", desc: "Points scored by Aslam Inamdar in the PKL final, the highest in a single game this season." }
            },
            'Space': {
                date: 'December 4, 2025',
                lead: {
                    headline: "ESA's Proba-3 Mission Launches Today",
                    summary: "The European Space Agency's Proba-3 mission, designed to create artificial solar eclipses in space, launches today aboard ISRO's PSLV-C59. This mission will study the Sun's faint corona with unprecedented detail.",
                    link: "https://www.esa.int/Enabling_Support/Space_Engineering_Technology/Proba_Missions/Proba-3"
                },
                bullets: [
                    { tag: "Mars", text: "NASA's Perseverance rover finds potential biosignatures in Jezero Crater.", link: "https://mars.nasa.gov/mars2020/" },
                    { tag: "Private", text: "Skyroot Aerospace successfully test-fires 'Vikram-1' stage 2 engine.", link: "https://skyroot.in/" },
                    { tag: "Moon", text: "China's Chang'e-6 mission returns samples from the far side of the Moon.", link: "https://www.cnsa.gov.cn/english/" },
                    { tag: "Policy", text: "India releases 'Space FDI Policy' operational guidelines for startups.", link: "https://www.inspace.gov.in/" },
                    { tag: "Telescope", text: "James Webb Telescope detects water vapor on exoplanet K2-18b.", link: "https://webbtelescope.org/" },
                    { tag: "ISRO", text: "Aditya-L1 completes 2 years in orbit; sends new UV images of the Sun.", link: "https://www.isro.gov.in/Aditya_L1.html" }
                ],
                stat: { label: "Distance", value: "144 m", desc: "Precise distance maintained between the two Proba-3 satellites to create the artificial eclipse." }
            },
            'International': {
                date: 'December 4, 2025',
                lead: {
                    headline: "COP30: Global Stocktake Draft Released",
                    summary: "The draft text of the Global Stocktake at COP30 in Brazil emphasizes 'phasing out' fossil fuels but lacks binding timelines. Developing nations, including India, have pushed back against trade barriers disguised as climate action.",
                    link: "https://unfccc.int/"
                },
                bullets: [
                    { tag: "Conflict", text: "Israel expands ground operations in Southern Gaza; UN calls for immediate truce.", link: "https://news.un.org/" },
                    { tag: "US Politics", text: "US Congress passes stopgap funding bill to avert government shutdown.", link: "https://www.congress.gov/" },
                    { tag: "Europe", text: "France announces stricter immigration laws following right-wing pressure.", link: "https://www.france24.com/en/" },
                    { tag: "Trade", text: "Mercosur-EU trade deal talks collapse over environmental demands.", link: "https://www.reuters.com/" },
                    { tag: "Health", text: "UK identifies first human case of new swine flu strain H1N2.", link: "https://www.gov.uk/government/organisations/uk-health-security-agency" },
                    { tag: "Russia", text: "Putin signs decree to increase Russian troop numbers by 15%.", link: "https://tass.com/" }
                ],
                stat: { label: "Temp Rise", value: "1.4°C", desc: "Current global average temperature rise above pre-industrial levels, dangerously close to the 1.5°C limit." }
            }
        };















