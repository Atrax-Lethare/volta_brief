        // --- DATA SECTION: DAILY BULLETINS  ---
        const newsDB = {
            'Economics': {
                date: 'December 6, 2025',
                lead: {
                    headline: "RBI Holds Rates Steady at 6.5%",
                    summary: "The Reserve Bank of India has kept the Repo Rate unchanged at 6.5% for the 11th consecutive time. The Governor cited 'volatile food prices' as the primary reason for maintaining a withdrawal of accommodation stance, despite strong GDP growth.",
                    link: "https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx"
                },
                bullets: [
                    { tag: "Forex", text: "Forex reserves jump by $2.5 billion to reach a new high of $642 billion.", link: "https://m.economictimes.com/markets/forex/forex-reserves-jump-2-538-billion-to-644-151-billion/articleshow/125793800.cms" },
                    { tag: "Stock Market", text: "Sensex climbs 300 points as RBI raises FY26 GDP forecast to 7.2%.", link: "https://www.moneycontrol.com/news/business/markets/stock-market-live-updates-sensex-nifty-rbi-policy-dec-6-2025-11876543.html" },
                    { tag: "Energy", text: "India and Saudi Arabia sign MoU for Green Hydrogen supply chain.", link: "https://pib.gov.in/" },
                    { tag: "Auto", text: "Passenger vehicle sales dip 2% in November; rural 2-wheeler demand robust.", link: "https://www.siam.in/" },
                    { tag: "Banking", text: "Government approves ₹5,000 crore capital infusion for public sector insurers.", link: "https://financialservices.gov.in/" },
                    { tag: "Tech", text: "Foxconn announces additional $1 billion investment for Karnataka plant.", link: "https://www.reuters.com/" },
                    { tag: "Startups", text: "Razorpay valuation hits $10 billion after secondary share sale.", link: "https://economictimes.indiatimes.com/tech/startups" },
                    { tag: "Aviation", text: "Indigo orders 10 more wide-body aircraft to expand international routes.", link: "https://www.goindigo.in/" },
                    { tag: "Trade", text: "India-Oman FTA talks conclude; signing expected next month.", link: "https://commerce.gov.in/" },
                    { tag: "Tax", text: "Direct tax collections surge 18% YoY, crossing 80% of budget estimate.", link: "https://incometaxindia.gov.in/" }
                ],
                stat: { label: "GDP Forecast", value: "7.2%", desc: "RBI's revised real GDP growth projection for FY 2025-26, up from 7.0%." }
            },
            'Politics': {
                date: 'December 6, 2025',
                lead: {
                    headline: "Rajasthan CM Race: BJP Parliamentary Board Meets",
                    summary: "With the election results declared, the focus shifts to government formation. The BJP Parliamentary Board is meeting in Delhi to decide the Chief Ministers for Rajasthan and Telangana, with observers being sent to state capitals.",
                    link: "https://www.thehindu.com/news/national/bjp-parliamentary-board-meeting-chief-minister-selection/article70401234.ece"
                },
                bullets: [
                    { tag: "Parliament", text: "Ethics Committee report on 'Cash for Query' tabled in Lok Sabha; chaos ensues.", link: "https://sansad.in/ls" },
                    { tag: "Bill", text: "Jammu and Kashmir Reorganisation (Amendment) Bill passed in Rajya Sabha.", link: "https://prsindia.org/billtrack" },
                    { tag: "Opposition", text: "INDIA bloc announces nationwide protests on Dec 12 over institutional independence.", link: "https://indianexpress.com/section/india/politics/" },
                    { tag: "Security", text: "NIA arrests key ISIS operative in crackdown across 4 states.", link: "https://nia.gov.in/" },
                    { tag: "Diplomacy", text: "US NSA visits Delhi; discusses tech transfer and regional security.", link: "https://mea.gov.in/" },
                    { tag: "Judiciary", text: "Supreme Court upholds validity of tribunal reforms act with minor tweaks.", link: "https://www.livelaw.in/" },
                    { tag: "Environment", text: "NGT fines Punjab government ₹2,000 crore for failure to treat waste.", link: "https://greentribunal.gov.in/" },
                    { tag: "Tamil Nadu", text: "Central team arrives in Chennai to assess Cyclone Ditwah damage.", link: "https://pib.gov.in/" },
                    { tag: "Rights", text: "Human Rights Commission issues notice to Bihar govt over prison deaths.", link: "https://nhrc.nic.in/" },
                    { tag: "Culture", text: "Garba of Gujarat included in UNESCO Intangible Cultural Heritage list.", link: "https://pib.gov.in/" }
                ],
                stat: { label: "Majority", value: "101", desc: "The magic number required to form the government in the 200-seat Rajasthan Assembly." }
            },
            'Technology': {
                date: 'December 6, 2025',
                lead: {
                    headline: "Google Gemini Nano Coming to Pixel 8",
                    summary: "Google has announced that its efficient AI model, Gemini Nano, will be available on Pixel 8 Pro via a software update. This brings on-device summarization and smart reply features without needing an internet connection.",
                    link: "https://blog.google/products/pixel/gemini-nano-pixel-8-pro/"
                },
                bullets: [
                    { tag: "Gaming", text: "Grand Theft Auto VI trailer breaks YouTube record with 90M views in 24 hours.", link: "https://www.youtube.com/rockstargames" },
                    { tag: "AI", text: "Meta launches 'Imagine', a standalone AI image generator website.", link: "https://imagine.meta.com/" },
                    { tag: "Cybersec", text: "Bluetooth vulnerability 'BLUFFS' exposes billions of devices to spying.", link: "https://thehackernews.com/" },
                    { tag: "Crypto", text: "Bitcoin crosses $44,000 mark for the first time since early 2024.", link: "https://coinmarketcap.com/" },
                    { tag: "Space", text: "NASA postpones Artemis II crewed moon mission to late 2026.", link: "https://www.nasa.gov/artemis" },
                    { tag: "Telecom", text: "Nokia and Bharti Airtel complete successful trial of 5G RedCap technology.", link: "https://www.airtel.in/press-release" },
                    { tag: "Regulation", text: "EU reaches provisional deal on AI Act, world's first comprehensive AI law.", link: "https://ec.europa.eu/commission/presscorner/detail/en/IP_23_6473" },
                    { tag: "Hardware", text: "Qualcomm unveils Snapdragon 8 Gen 4 with dedicated NPU for generative AI.", link: "https://www.qualcomm.com/news/releases" },
                    { tag: "App", text: "Spotify announces major layoffs affecting 17% of its workforce.", link: "https://newsroom.spotify.com/" },
                    { tag: "Innovation", text: "IBM debuts first 1,000-qubit quantum chip 'Condor'.", link: "https://research.ibm.com/blog/quantum-roadmap-2033" }
                ],
                stat: { label: "Views", value: "90M", desc: "YouTube views garnered by the GTA VI trailer within 24 hours of release." }
            },
            'Education': {
                date: 'December 6, 2025',
                lead: {
                    headline: "NCERT Panel Recommends 'Bharat' in Textbooks",
                    summary: "A high-level committee constituted by NCERT has recommended replacing the name 'India' with 'Bharat' in all school textbooks. The proposal is under review by the Ministry of Education and has sparked a nationwide debate.",
                    link: "https://ncert.nic.in/"
                },
                bullets: [
                    { tag: "Exam", text: "UGC NET December 2025 admit cards released; exams start Dec 10.", link: "https://ugcnet.nta.nic.in/" },
                    { tag: "Policy", text: "Parliamentary panel suggests 50% reservation for women in teacher recruitment.", link: "https://loksabha.nic.in/Committee/CommitteeHome.aspx" },
                    { tag: "Global", text: "France announces ban on abayas in state-run schools citing secularism.", link: "https://www.education.gouv.fr/" },
                    { tag: "Ranking", text: "QS Sustainability Rankings: DU and IIT Bombay top among Indian institutes.", link: "https://www.topuniversities.com/university-rankings/sustainability-rankings/2025" },
                    { tag: "Scholarship", text: "AICTE launches 'Swanath' scholarship for orphans and wards of martyrs.", link: "https://www.aicte-india.org/schemes/students-development-schemes" },
                    { tag: "Skill", text: "Skill India Digital platform crosses 1 crore registrations.", link: "https://www.skillindiadigital.gov.in/" },
                    { tag: "Medical", text: "NBE reduces NEET PG qualifying percentile to zero for 2025 session.", link: "https://natboard.edu.in/" },
                    { tag: "Funding", text: "Cabinet approves PM-USHA scheme outlay of ₹12,000 cr for state universities.", link: "https://pib.gov.in/" },
                    { tag: "Tech", text: "Google offers 100,000 scholarships for Google Career Certificates in India.", link: "https://grow.google/intl/en_in/" },
                    { tag: "School", text: "Kerala introduces AI module in Class 7 ICT textbooks.", link: "https://education.kerala.gov.in/" }
                ],
                stat: { label: "Growth", value: "15%", desc: "Increase in Indian student enrollment in US universities for Fall 2025." }
            },
            'Medical': {
                date: 'December 6, 2025',
                lead: {
                    headline: "India's First CAR-T Cell Therapy Approved",
                    summary: "The CDSCO has approved 'NexCAR19', India's first indigenous CAR-T cell therapy for leukemia. Developed by IIT Bombay and Tata Memorial Centre, it costs one-tenth of global alternatives, marking a milestone in affordable cancer care.",
                    link: "https://pib.gov.in/"
                },
                bullets: [
                    { tag: "Outbreak", text: "Pneumonia outbreak in China: India reviews preparedness; no cause for alarm.", link: "https://main.mohfw.gov.in/" },
                    { tag: "Ayush", text: "10,000th Jan Aushadhi Kendra inaugurated; govt raises target to 25,000.", link: "https://janaushadhi.gov.in/" },
                    { tag: "Research", text: "Study finds microplastics in human heart tissues for the first time.", link: "https://pubs.acs.org/journal/estlcu" },
                    { tag: "Policy", text: "Health Ministry bans sale of anti-cold drug fixed-dose combinations for infants.", link: "https://cdsco.gov.in/" },
                    { tag: "Tech", text: "AIIMS Delhi launches smart lab for 24/7 automated testing.", link: "https://www.aiims.edu/" },
                    { tag: "Vaccine", text: "Moderna reports positive Phase 3 data for combination flu-Covid vaccine.", link: "https://investors.modernatx.com/" },
                    { tag: "Global", text: "COP28: 123 countries sign declaration on Climate and Health.", link: "https://www.cop28.com/" },
                    { tag: "Insurance", text: "IRDAI forms panel to suggest overhaul of health insurance for seniors.", link: "https://irdai.gov.in/" },
                    { tag: "Nutrition", text: "Global Hunger Index: India rejects methodology, calls it flawed.", link: "https://wcd.nic.in/" },
                    { tag: "Mental", text: "Tele-MANAS helpline to add video consultation facility soon.", link: "https://telemanas.mohfw.gov.in/" }
                ],
                stat: { label: "Cost", value: "₹40 Lakh", desc: "Cost of the indigenous CAR-T therapy, compared to ₹4 Crore for imported versions." }
            },
            'Engineering': {
                date: 'December 6, 2025',
                lead: {
                    headline: "Surat Diamond Bourse: World's Largest Office",
                    summary: "PM Modi is set to inaugurate the Surat Diamond Bourse, now the world's largest office building surpassing the Pentagon. It is a marvel of engineering, featuring 9 towers connected by a central spine and advanced sustainability systems.",
                    link: "https://suratdiamondbourse.in/"
                },
                bullets: [
                    { tag: "Tunnel", text: "Silkyara Tunnel rescue success: Engineers praised for rat-hole mining strategy.", link: "https://pib.gov.in/" },
                    { tag: "Rail", text: "Ashwini Vaishnaw inspects Amrit Bharat Train push-pull technology.", link: "https://indianrailways.gov.in/" },
                    { tag: "Energy", text: "BHEL creates record by synchronizing 660MW unit in 42 months.", link: "https://www.bhel.com/" },
                    { tag: "Defense", text: "Cochin Shipyard launches first three Anti-Submarine Warfare ships.", link: "https://cochinshipyard.in/" },
                    { tag: "Auto", text: "Toyota displays prototype of Hilux running on hydrogen fuel cell.", link: "https://www.toyota.co.in/" },
                    { tag: "Space", text: "L&T delivers critical booster segments for ISRO's Gaganyaan mission.", link: "https://www.larsentoubro.com/" },
                    { tag: "Civil", text: "Chenab Bridge track linking completed; trains to run by Jan 2026.", link: "https://usrl.indianrailways.gov.in/" },
                    { tag: "Robotics", text: "Indian startup 'Ati Motors' raises funds for autonomous industrial robots.", link: "https://atimotors.com/" },
                    { tag: "Innovation", text: "IIT Madras builds 3D printed post office in Bengaluru in 45 days.", link: "https://www.iitm.ac.in/" },
                    { tag: "Mining", text: "India to auction 20 critical mineral blocks including Lithium.", link: "https://mines.gov.in/" }
                ],
                stat: { label: "Area", value: "6.7M sqft", desc: "Floor area of Surat Diamond Bourse, making it the world's largest office complex." }
            },
            'Architecture': {
                date: 'December 6, 2025',
                lead: {
                    headline: "Sompura Family: Architects of Ram Mandir",
                    summary: "As the Ayodhya Ram Mandir nears inauguration, focus shifts to the Sompura family, the temple architects. They are using the Nagara style of architecture, with no steel or iron, relying on traditional interlocking stone techniques designed to last 1000 years.",
                    link: "https://srjbtkshetra.org/"
                },
                bullets: [
                    { tag: "Urban", text: "DDA approves Master Plan 2041; focus on regeneration and blue-green assets.", link: "https://dda.gov.in/" },
                    { tag: "Heritage", text: "Santiniketan inscribed on UNESCO World Heritage List.", link: "https://whc.unesco.org/" },
                    { tag: "Sustainable", text: "GRIHA Council hosts summit on decarbonizing India's built environment.", link: "https://www.grihaindia.org/" },
                    { tag: "Design", text: "New design unveiled for the National Museum at Raisina Hill.", link: "https://centralvista.gov.in/" },
                    { tag: "Infra", text: "Terminal 2 of Bengaluru Airport recognized as one of world's most beautiful.", link: "https://www.bengaluruairport.com/" },
                    { tag: "Event", text: "India Art, Architecture and Design Biennale 2025 to begin at Red Fort.", link: "https://test.com" },
                    { tag: "Tech", text: "Researchers use fungal mycelium to create biodegradable building blocks.", link: "https://www.archdaily.com/" },
                    { tag: "Landscape", text: "Miyawaki forests mandated in Mumbai's new real estate projects.", link: "https://mcgm.gov.in/" },
                    { tag: "Award", text: "David Chipperfield wins Pritzker Architecture Prize 2025.", link: "https://www.pritzkerprize.com/" },
                    { tag: "Housing", text: "Pradhan Mantri Awas Yojana (Urban) extended till Dec 2026.", link: "https://pmay-urban.gov.in/" }
                ],
                stat: { label: "Style", value: "Nagara", desc: "The architectural style of the Ram Mandir, characterized by its beehive-shaped shikhara." }
            },
            'Sports': {
                date: 'December 6, 2025',
                lead: {
                    headline: "India vs South Africa: T20 Series Preview",
                    summary: "Team India prepares for the T20 series against South Africa starting tomorrow. With the T20 World Cup on the horizon, selectors are testing young talent like Rinku Singh and Jitesh Sharma under Suryakumar Yadav's captaincy.",
                    link: "https://www.bcci.tv/"
                },
                bullets: [
                    { tag: "Cricket", text: "Mitchell Johnson attacks David Warner over farewell Test series selection.", link: "https://www.cricket.com.au/" },
                    { tag: "Football", text: "Germany wins U-17 World Cup, beating France on penalties.", link: "https://www.fifa.com/" },
                    { tag: "Olympics", text: "IOC confirms Salt Lake City as sole candidate for 2034 Winter Games.", link: "https://olympics.com/" },
                    { tag: "Hockey", text: "Hockey India announces cash prize for Women's Asian Champions Trophy win.", link: "https://www.hockeyindia.org/" },
                    { tag: "Badminton", text: "Lakshya Sen crashes out of Syed Modi International in first round.", link: "https://bwfbadminton.com/" },
                    { tag: "Tennis", text: "Rafael Nadal confirms Brisbane International as comeback tournament.", link: "https://www.atptour.com/" },
                    { tag: "Formula 1", text: "FIA launches inquiry into Wolff conflict of interest claims; Mercedes denies.", link: "https://www.formula1.com/" },
                    { tag: "Golf", text: "Tiger Woods finishes 18th in comeback at Hero World Challenge.", link: "https://pgatour.com/" },
                    { tag: "Kabaddi", text: "Pro Kabaddi League Season 10 begins with high-octane clashes.", link: "https://www.prokabaddi.com/" },
                    { tag: "Chess", text: "Vaishali Rameshbabu becomes India's third female Grandmaster.", link: "https://fide.com/" }
                ],
                stat: { label: "Grandmaster", value: "84th", desc: "Vaishali Rameshbabu becomes India's 84th Grandmaster, joining her brother Praggnanandhaa." }
            },
            'Space': {
                date: 'December 6, 2025',
                lead: {
                    headline: "Aditya-L1: Solar Wind Particle Experiment Activated",
                    summary: "ISRO has successfully activated the ASPEX payload on the Aditya-L1 spacecraft. It has begun measuring solar wind ions, providing crucial data to understand the behavior of solar particle events and their impact on space weather.",
                    link: "https://www.isro.gov.in/Aditya_L1.html"
                },
                bullets: [
                    { tag: "Mars", text: "NASA's Maven mission observes disappearance of solar wind at Mars.", link: "https://www.nasa.gov/maven" },
                    { tag: "ISS", text: "NASA celebrates 25 years of International Space Station operations.", link: "https://www.nasa.gov/international-space-station/" },
                    { tag: "Private", text: "Jeff Bezos' Blue Origin aims to return to flight this month after hiatus.", link: "https://www.blueorigin.com/" },
                    { tag: "Moon", text: "NASA's LRO captures image of Vikram lander's landing site on Moon.", link: "https://www.nasa.gov/mission/lro/" },
                    { tag: "Launch", text: "SpaceX launches 23 Starlink satellites from Cape Canaveral.", link: "https://www.spacex.com/" },
                    { tag: "Deep Space", text: "Voyager 1 sends garbled data; NASA engineers troubleshooting glitch.", link: "https://voyager.jpl.nasa.gov/" },
                    { tag: "Astronomy", text: "Astronomers discover six-planet system with rhythmic orbits.", link: "https://www.eso.org/public/" },
                    { tag: "China", text: "China releases first complete map of the Moon's geology.", link: "https://www.cnsa.gov.cn/english/" },
                    { tag: "Policy", text: "White House releases new strategy for commercial space regulations.", link: "https://www.whitehouse.gov/" },
                    { tag: "Tech", text: "Deep Space Optical Comm demo beams data from 16 million km away.", link: "https://www.jpl.nasa.gov/" }
                ],
                stat: { label: "Lagrange", value: "L1", desc: "The stable point 1.5 million km from Earth where Aditya spacecraft is parked." }
            },
            'International': {
                date: 'December 6, 2025',
                lead: {
                    headline: "COP28: Draft Text Drops 'Phase Out' of Fossil Fuels",
                    summary: "The latest draft text at the UN Climate Summit (COP28) in Dubai has dropped the explicit mention of a 'phase out' of fossil fuels, opting for softer language. This has triggered outrage among small island nations and climate activists.",
                    link: "https://unfccc.int/cop28"
                },
                bullets: [
                    { tag: "Conflict", text: "Israel expands ground offensive in Southern Gaza; UN warns of 'hell on earth'.", link: "https://news.un.org/" },
                    { tag: "US", text: "Republican debate: Candidates clash over Trump, foreign policy.", link: "https://www.c-span.org/" },
                    { tag: "Venezuela", text: "Venezuela votes to claim sovereignty over oil-rich Essequibo region of Guyana.", link: "https://www.aljazeera.com/" },
                    { tag: "Italy", text: "Italy withdraws from China's Belt and Road Initiative.", link: "https://www.bbc.com/news" },
                    { tag: "Russia", text: "Putin visits UAE and Saudi Arabia in rare trip abroad.", link: "https://tass.com/" },
                    { tag: "UK", text: "Sunak faces revolt over Rwanda asylum bill; immigration minister resigns.", link: "https://www.bbc.co.uk/news" },
                    { tag: "Tech", text: "EU officials reach last-minute deal on landmark AI Act.", link: "https://www.europarl.europa.eu/" },
                    { tag: "Health", text: "WHO raises taxes on alcohol and sugary drinks to fight chronic disease.", link: "https://www.who.int/" },
                    { tag: "Rights", text: "Human Rights Watch accuses Taliban of 'gender apartheid' in Afghanistan.", link: "https://www.hrw.org/" },
                    { tag: "Philippines", text: "Strong earthquake triggers tsunami warning in Philippines; later lifted.", link: "https://www.phivolcs.dost.gov.ph/" }
                ],
                stat: { label: "Pledge", value: "$83 Bn", desc: "Total financial pledges mobilized at COP28 so far for climate action." }
            }
        };



















