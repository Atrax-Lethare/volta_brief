        // --- DATA SECTION: DAILY BULLETINS ---
        const newsDB = {
            'Economics': {
                date: 'December 3, 2025',
                lead: {
                    headline: "Gold Prices Surge as Fed Cut Hopes Rise",
                    summary: "Gold prices in India are trending higher today, driven by growing expectations of a US Federal Reserve rate cut in December. Analysts predict volatility ahead of key US economic data, advising investors to track global cues closely.",
                    link: "https://www.financialexpress.com/market/gold-pulse/gold-rate-today-on-3rd-december-2025-check-22k-24k-mcx-gold-price-today-in-delhi-mumbai-hyderabad-chennai-bangalore-dubai/4063860/"
                },
                bullets: [
                    { tag: "Stock Market", text: "Sensex and Nifty rally led by banking heavyweights; HDFC and ICICI surge.", link: "https://indianexpress.com/article/explained/explained-economics/stock-markets-bull-run-what-next-rally-heavyweights-10399524/" },
                    { tag: "Engineering", text: "Thyssenkrupp to supply ₹1,000 Cr electrolyzer plant for Numaligarh Refinery.", link: "https://www.newsonprojects.com/" },
                    { tag: "Commodities", text: "Silver prices eclipse gold in weekly gains due to supply shortage.", link: "https://timesofindia.indiatimes.com/business/india-business/gold-price-prediction-today-india-where-is-gold-silver-rate-headed-on-december-03-2025-mcx-gold-futures-outlook/articleshow/125732747.cms" },
                    { tag: "Export", text: "India-UK FTA talks face 'final lap' hurdles over visa norms.", link: "https://www.thehindu.com/business/Economy/india-uk-fta-talks-enter-final-stage-migration-rules-key/article70358901.ece" },
                    { tag: "Energy", text: "THDC India achieves major milestone in Vishnugad Pipalkoti Hydro Project.", link: "https://www.psuconnect.in/psu-news/thdc-india-vishnugad-pipalkoti-hydro-project-achieves-major-milestone-with-unit-2-hydro-static-testing" },
                    { tag: "Policy", text: "Govt prepares new levies on tobacco as GST compensation cess expires.", link: "https://indianexpress.com/article/education/today-news-headlines-for-school-assembly-02-december-2025-india-cat-application-costs-rose-by-31-sanchar-saathi-app-now-mandatory-and-more-10396345/" }
                ],
                stat: { label: "Silver Ratio", value: "73", desc: "The Gold/Silver ratio has fallen to an annual low, indicating silver is outperforming gold." }
            },
            'Politics': {
                date: 'December 3, 2025',
                lead: {
                    headline: "Parliament Winter Session: Oppn Demands Debate on SIR",
                    summary: "The Opposition bloc is united in demanding a discussion on the Special Intensive Revision (SIR) of electoral rolls and national security. The government has agreed to discuss electoral reforms next week in a rare consensus.",
                    link: "https://www.thehindu.com/news/national/all-party-meeting-opposition-demands-debate-on-sir-national-security-in-parliament/article70341766.ece"
                },
                bullets: [
                    { tag: "Security", text: "Opposition presses for debate on national security after Delhi blast incident.", link: "https://www.thehindu.com/news/national/all-party-meeting-opposition-demands-debate-on-sir-national-security-in-parliament/article70341766.ece" },
                    { tag: "Maharashtra", text: "Raj Bhavan officially renamed 'Maharashtra Lok Bhavan' by Governor.", link: "https://rajbhavan-maharashtra.gov.in/en/02-12-2025-maharashtra-raj-bhavan-is-now-lok-bhavan/" },
                    { tag: "Parliament", text: "Manipur GST Bill returned to Lok Sabha amid Opposition walkout in Rajya Sabha.", link: "https://www.thehindu.com/news/national/parliament-winter-session-lok-sabha-rajya-sabha-day-2-highlights-december-2-2025/article70348014.ece" },
                    { tag: "Local", text: "Sarpanchs in Mohali protest against merger of 15 villages into Municipal Corporation.", link: "https://indianexpress.com/article/cities/chandigarh/dont-want-our-villages-under-mc-sarpanchs-of-several-panchayats-submit-memorandum-as-dissent-grows-10399472/" },
                    { tag: "Elections", text: "ECI asserts exclusive authority to verify citizenship for electoral rolls.", link: "https://visionias.in/current-affairs/upsc-daily-news-summary" },
                    { tag: "Foreign", text: "Russian President Putin to visit India on Dec 4-5 for Annual Summit.", link: "https://www.thehindu.com/news/top-news-of-the-day-indian-economy-growth-82-in-q2-cyclone-ditwah-wreaks-havoc-in-sri-lanka-likely-to-reach-tn-andhra-coast-on-nov-30-and-more/article70334743.ece" }
                ],
                stat: { label: "Enumeration", value: "99%", desc: "Percentage of SIR forms distributed in Kerala, according to EC's statement to SC." }
            },
            'Technology': {
                date: 'December 3, 2025',
                lead: {
                    headline: "India Mandates 'Sanchar Saathi' on New Phones",
                    summary: "The government has directed smartphone makers to pre-install the 'Sanchar Saathi' security app on all new devices to curb fraud. The move has sparked debate, with critics calling it potential surveillance, while the government defends it as a safety measure.",
                    link: "https://techwireasia.com/2025/12/india-requires-apple-and-other-phone-makers-to-preload-its-anti-fraud-app/"
                },
                bullets: [
                    { tag: "Android", text: "Android 17 'Cinnamon Bun' leaks hint at mid-2026 release with major UI changes.", link: "https://www.indiatoday.in/technology/news/story/google-gears-up-for-android-17-launch-expected-release-date-top-features-and-everything-to-know-2828337-2025-11-30" },
                    { tag: "AI", text: "Elon Musk predicts 'work will become optional' due to AI in future.", link: "https://indianexpress.com/article/technology/tech-news-technology/elon-musk-predicts-work-will-become-optional-due-to-ai-in-talk-with-nikhil-kamath-10394817/" },
                    { tag: "Deals", text: "iPhone Air price drops significantly in India as Black Friday sales extend.", link: "https://timesofindia.indiatimes.com/technology/tech-news/iphone-air-price-in-india-drops-check-discounts-on-reliance-digital-amazon-croma-and-flipkart/articleshow/125671937.cms" },
                    { tag: "Investment", text: "Nvidia invests $2 billion in Synopsys to accelerate AI chip design.", link: "https://timesofindia.indiatimes.com/technology/tech-news/nvidia-invests-2-billion-in-synopsys-for-ai-engineering-partnership/articleshow/125697172.cms" },
                    { tag: "Space", text: "ISRO's uncrewed Gaganyaan 'G1' mission set for December launch.", link: "https://timesofindia.indiatimes.com/science/isro-gaganyaan-2025-indias-first-uncrewed-g1-mission-with-vyommitra-set-to-launch-in-december/articleshow/123450124.cms" },
                    { tag: "Privacy", text: "Government clarifies Sanchar Saathi app is 'not mandatory' for citizens.", link: "https://www.indiatoday.in/education-today/news/story/school-assembly-news-headlines-today-december-3-national-world-sports-business-education-news-updates-2829701-2025-12-03" }
                ],
                stat: { label: "Investment", value: "$2 Bn", desc: "Value of Nvidia's investment in Synopsys to boost AI-driven chip engineering." }
            },
            'Education': {
                date: 'December 3, 2025',
                lead: {
                    headline: "Schools Closed in Tamil Nadu Due to Heavy Rain",
                    summary: "Schools in Thiruvallur, Chennai, and Kanchipuram remain closed today due to persistent heavy rainfall from the remnants of Cyclone Ditwah. District administrations have issued holiday orders to ensure student safety.",
                    link: "https://www.indiatoday.in/education-today/news/story/thiruvallur-district-schools-shut-on-december-3-amid-cyclone-ditwah-rains-2829610-2025-12-02"
                },
                bullets: [
                    { tag: "Policy", text: "NEP advocates for mother tongue-based education: Education Minister.", link: "https://www.newsonair.gov.in/nep-is-advocating-for-mother-tongue-based-education-dharmendra-pradhan/" },
                    { tag: "Reform", text: "AAP teachers' wing opposes HECI Bill, fearing centralization.", link: "https://www.theweek.in/wire-updates/national/2025/12/01/des50-dl-heci-aadta.html" },
                    { tag: "Skill", text: "Jharkhand DG Rail calls for shift to skill-based education system.", link: "https://timesofindia.indiatimes.com/city/ranchi/skill-based-education-call/articleshow/125677130.cms" },
                    { tag: "Festival", text: "Thiruvananthapuram Revenue District School Youth Festival begins today.", link: "https://timesofindia.indiatimes.com/city/thiruvananthapuram/thiruvananthapuram-revenue-district-school-youth-festival-begins-on-december-1/articleshow/125663044.cms" },
                    { tag: "Exam", text: "AIBE 20 held with strict guidelines; results expected in 2 weeks.", link: "https://timesofindia.indiatimes.com/education/news/aibe-20-exam-2025-on-november-30-check-exam-day-dos-and-donts-issued-by-bci-here/articleshow/125579919.cms" },
                    { tag: "Assembly", text: "School assembly headlines for Dec 3 released, focusing on national updates.", link: "https://www.jagranjosh.com/articles/school-assembly-news-headlines-today-3-december-2025-parliament-passes-manipur-gst-bill-2025-nhai-collaborates-with-reliance-jio-cbse-updates-sops-and-guidelines-and-other-important-news-1800005967-1" }
                ],
                stat: { label: "Participants", value: "8,299", desc: "Number of students participating in the Thiruvananthapuram School Youth Festival." }
            },
            'Medical': {
                date: 'December 3, 2025',
                lead: {
                    headline: "World AIDS Day: India on Track for 2030 Target",
                    summary: "Health authorities highlight India's success in reducing HIV prevalence. Andhra Pradesh has emerged as a top performer, achieving nearly 77% of its control targets, while experts warn about persisting social stigma in rural areas.",
                    link: "https://www.thehindu.com/news/national/andhra-pradesh/andhra-pradesh-stands-first-in-controlling-hiv-cases-says-health-minister/article70342004.ece"
                },
                bullets: [
                    { tag: "TB", text: "India's TB mortality rate falls from 28 to 21 per lakh population.", link: "https://www.newsonair.gov.in/uhm-j-p-nadda-says-indias-tb-mortality-rate-falls-from-28-to-21-per-lakh/" },
                    { tag: "Infra", text: "New cancer hospital in Pune to become a leading hub for oncology research.", link: "https://timesofindia.indiatimes.com/city/pune/upcoming-cancer-hospital-in-pune-to-be-leading-hub-for-research-and-education/articleshow/125726379.cms" },
                    { tag: "Aid", text: "India deploys 'BHISHM Cube' mobile hospital to aid cyclone-hit Sri Lanka.", link: "https://www.newsonair.gov.in/india-deploys-bhishm-cube-under-aarogya-maitri-project-to-aid-cyclone-hit-sri-lanka/" },
                    { tag: "Global", text: "WHO warns of global measles surge with 11 million cases last year.", link: "https://news.un.org/en/story/2025/11/1166471" },
                    { tag: "Stigma", text: "Rural India sees rise in HIV awareness, but stigma remains a barrier.", link: "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/world-aids-day-2025-rural-india-learns-more-about-hiv-but-stigma-remains-says-expert/articleshow/125684902.cms" },
                    { tag: "Quality", text: "CDSCO flags 148 drug samples as 'Not of Standard Quality' in October alert.", link: "https://medicaldialogues.in/news/industry/pharma/cdsco/state-drug-alert-148-medicine-samples-fail-cdsco-quality-tests-in-october-159564" }
                ],
                stat: { label: "TB Deaths", value: "21/Lakh", desc: "Reduced TB mortality rate in India per lakh population, down from 28 in 2015." }
            },
            'Engineering': {
                date: 'December 3, 2025',
                lead: {
                    headline: "L&T Secures Mega Bullet Train Contract",
                    summary: "Engineering giant L&T has secured a major contract for the electrification of the Mumbai-Ahmedabad High-Speed Rail (MAHSR). The project involves deploying advanced Shinkansen technology tailored for Indian conditions.",
                    link: "https://www.larsentoubro.com/"
                },
                bullets: [
                    { tag: "Expo", text: "ENGIMACH 2025, Asia's largest engineering expo, kicks off in Gandhinagar.", link: "https://indianews.com.au/engimach-2025-to-unlock-business-opportunities-for-engineering-companies-gujarat-dy-cm/" },
                    { tag: "Hydro", text: "THDC India achieves major milestone in Vishnugad Pipalkoti Hydro Project.", link: "https://www.psuconnect.in/psu-news/thdc-india-vishnugad-pipalkoti-hydro-project-achieves-major-milestone-with-unit-2-hydro-static-testing" },
                    { tag: "JEE", text: "JEE Main registrations hit record 14.5 lakh; engineering demand surges.", link: "https://timesofindia.indiatimes.com/city/mumbai/engineering-entrance-exam-jee-main-session-1-sees-record-14-5-lakh-applications/articleshow/125622056.cms" },
                    { tag: "Exports", text: "Engineering exports slumped 16.7% in October due to US tariffs.", link: "https://timesofindia.indiatimes.com/business/india-business/us-tariffs-bite-indias-engineering-exports-slump-16-7-in-october-asean-eu-and-uae-shipments-weaken/articleshow/125661032.cms" },
                    { tag: "AI Deal", text: "Nvidia invests $2 billion in Synopsys for AI-driven engineering solutions.", link: "https://timesofindia.indiatimes.com/technology/tech-news/nvidia-invests-2-billion-in-synopsys-for-ai-engineering-partnership/articleshow/125697172.cms" },
                    { tag: "Space", text: "ISRO developing NGLV 'Soorya' rocket to replace PSLV by 2034.", link: "https://en.wikipedia.org/wiki/Next_Generation_Launch_Vehicle" }
                ],
                stat: { label: "Registration", value: "14.5 Lakh", desc: "Record number of student registrations for JEE Main Session-1 2025." }
            },
            'Architecture': {
                date: 'December 3, 2025',
                lead: {
                    headline: "Raj Sabhagruh Wins Dezeen Award 2025",
                    summary: "The Raj Sabhagruh in Gujarat, designed by Serie Architects, has won the 2025 Dezeen Award for Best Civic Project. The building is noted for its sustainable use of 8 lakh hand-laid discarded marble bricks.",
                    link: "https://www.freepressjournal.in/mumbai/raj-sabhagruh-wins-2025-dezeen-award-for-best-civic-project"
                },
                bullets: [
                    { tag: "Interior", text: "Architectural Digest highlights 'Chalet Hotels' leadership in design evolution.", link: "https://www.hotelierindia.com/leadership/the-architects-of-chalet" },
                    { tag: "Profile", text: "Architect Syed Sohrab Afzal redefining Odisha's cafe and dining scene.", link: "https://www.prameyanews.com/architect-syed-sohrab-afzal-the-visionary-redefining-odishas-cafe-and-dining-scene" },
                    { tag: "Urban", text: "Bengaluru proposes ₹1.5L crore plan for urban tunnels and elevated corridors.", link: "https://timesofindia.indiatimes.com/city/bengaluru/building-bengaluru-2-0-city-bets-whopping-rs-1-5-lakh-crore-on-its-infrastructure/articleshow/125603009.cms" },
                    { tag: "Design", text: "Kéré Architecture reveals designs for its first built project in South America.", link: "https://www.dezeen.com/architecture/" },
                    { tag: "Airport", text: "AAI to monitor Chennai Airport T3 construction live to meet 2026 deadline.", link: "https://timesofindia.indiatimes.com/city/chennai/aai-to-monitor-terminal-3-project/articleshow/124882491.cms" },
                    { tag: "Global", text: "Dezeen Awards 2025 Designers of the Year winners announced.", link: "https://www.dezeen.com/2025/11/25/dezeen-awards-2025-designers-of-the-year-winners-announced/" }
                ],
                stat: { label: "Bricks Used", value: "8 Lakh", desc: "Number of recycled marble bricks used in the award-winning Raj Sabhagruh project." }
            },
            'Sports': {
                date: 'December 3, 2025',
                lead: {
                    headline: "India vs South Africa: 2nd ODI Today",
                    summary: "India takes on South Africa in the 2nd ODI at Raipur today, aiming to seal the series after a 17-run victory in the opener. Virat Kohli's 52nd century and Kuldeep Yadav's bowling were the highlights of the first match.",
                    link: "https://timesofindia.indiatimes.com/sports/cricket/india-vs-south-africa/ind-vs-sa-im-37-and-need-time-for-recovery-what-virat-kohli-said-after-indias-win-over-south-africa-in-1st-odi/articleshow/125676533.cms"
                },
                bullets: [
                    { tag: "Hockey", text: "India thrash Switzerland 5-0 to enter Junior World Cup Quarterfinals.", link: "https://www.newsonair.gov.in/category/sports/" },
                    { tag: "Women", text: "India Women's Junior Hockey team starts World Cup campaign with 13-0 win.", link: "https://www.newsonair.gov.in/category/sports/" },
                    { tag: "Award", text: "Archery Premier League wins 'Emerging Event of the Year' at India Sports Awards.", link: "https://www.newsonair.gov.in/category/sports/" },
                    { tag: "Football", text: "Rajasthan United FC wins 41st Governor's Gold Cup.", link: "https://www.newsonair.gov.in/category/sports/" },
                    { tag: "TT", text: "Manika Batra leads India squad at ITTF Mixed Team World Cup in China.", link: "https://www.newsonair.gov.in/category/sports/" },
                    { tag: "Cricket", text: "Rohit Sharma breaks Shahid Afridi's record for most ODI sixes (352).", link: "https://timesofindia.indiatimes.com/sports/cricket/india-vs-south-africa/ind-vs-sa-virat-kohlis-hundred-kuldeep-yadav-four-for-power-indias-17-run-win-in-first-odi/articleshow/125676367.cms" }
                ],
                stat: { label: "ODI Tons", value: "52", desc: "Virat Kohli's record-extending number of ODI centuries." }
            },
            'Space': {
                date: 'December 3, 2025',
                lead: {
                    headline: "Gaganyaan Mission: ISRO Ready for 'G1' Test Flight",
                    summary: "ISRO Chairman has confirmed that the agency is fully prepared for the first uncrewed Gaganyaan mission (G1), scheduled for this December. The launch will validate the performance of the Crew Module and the Escape System.",
                    link: "https://timesofindia.indiatimes.com/science/isro-gaganyaan-2025-indias-first-uncrewed-g1-mission-with-vyommitra-set-to-launch-in-december/articleshow/123450124.cms"
                },
                bullets: [
                    { tag: "Launch", text: "SpaceX launches 60th mission of the year with Starlink satellites.", link: "https://www.space.com/space-exploration/launches-spacecraft/spacex-launches-60th-mission-of-the-year-from-california" },
                    { tag: "Private", text: "Agnikul Cosmos raises ₹150 Cr to scale up reusable rocket technology.", link: "https://www.thehindu.com/news/national/tamil-nadu/space-startup-agnikul-raises-150-crore-to-fund-reusable-rockets/article70310628.ece" },
                    { tag: "NISAR", text: "NASA-ISRO satellite NISAR enters 'Science Phase'; beams back first images.", link: "https://www.thehindu.com/sci-tech/science/nisar-earth-observation-satellite-enters-final-science-operations-phase/article70334808.ece" },
                    { tag: "Outreach", text: "ISRO space exhibition in Rajasthan draws massive student crowds.", link: "https://www.livemint.com/focus/3day-isro-space-exhibition-at-rajasthan-technical-university-draws-high-student-turnout-11764648887228.html" },
                    { tag: "SpaceX", text: "US Govt clears SpaceX to build Starship launch pad at Kennedy Space Center.", link: "https://www.indiatoday.in/science/story/us-clears-elon-musks-spacex-to-build-starship-launch-pad-at-nasas-kennedy-space-center-2829291-2025-12-02" },
                    { tag: "Future", text: "ISRO developing NGLV 'Soorya' rocket for 2034 heavy-lift missions.", link: "https://en.wikipedia.org/wiki/Next_Generation_Launch_Vehicle" }
                ],
                stat: { label: "Tests", value: "80,000", desc: "Number of tests completed by ISRO to certify systems for the Gaganyaan mission." }
            },
            'International': {
                date: 'December 3, 2025',
                lead: {
                    headline: "US Pauses Migration from 19 Countries",
                    summary: "The Trump administration has announced a pause on immigration applications from 19 non-European countries, citing security reviews. The move has drawn criticism from the UN and human rights groups.",
                    link: "https://www.thehindu.com/news/international/"
                },
                bullets: [
                    { tag: "Disaster", text: "Sri Lanka death toll from Cyclone Ditwah rises to 474; relief efforts underway.", link: "https://www.newsonair.gov.in/category/international/" },
                    { tag: "Conflict", text: "Israel says forensic findings do not match remaining hostages in Gaza.", link: "https://www.thehindu.com/news/international/israel-says-findings-returned-from-gaza-do-not-match-remaining-hostages/article70352514.ece" },
                    { tag: "Geopolitics", text: "Allianz report: Geopolitics and cyber risks top concerns for corporate boards in 2026.", link: "https://laotiantimes.com/2025/12/03/allianz-commercial-geopolitics-and-cyber-drive-risk-exposures-for-directors-and-officers-in-2026/" },
                    { tag: "Climate", text: "WMO warns of deadly floods in Asia due to extreme rains.", link: "https://www.newsonair.gov.in/category/international/" },
                    { tag: "Politics", text: "Bangladesh armed forces chiefs visit ailing ex-PM Khaleda Zia.", link: "https://www.thehindu.com/news/international/" },
                    { tag: "Economy", text: "UNCTAD Report: Global trade resilience fading; developing nations face finance crunch.", link: "https://unctad.org/publication/trade-and-development-report-2025" }
                ],
                stat: { label: "Death Toll", value: "474", desc: "Confirmed deaths in Sri Lanka due to the devastating impact of Cyclone Ditwah." }
            }
        };













