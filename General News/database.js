        // --- DATA SECTION: DAILY BULLETINS ---
        const newsDB = {
            'Economics': {
                date: 'December 4, 2025',
                lead: {
                    headline: "Sensex Slips as Bank Stocks Drag",
                    summary: "Indian equity benchmarks Sensex and Nifty traded lower in early sessions amid persistent foreign fund outflows and profit-booking in banking stocks. The rupee hit a record low of 90.05 against the dollar, adding to the cautious sentiment.",
                    link: "https://www.thehindu.com/business/markets/stock-markets-trade-lower-in-early-deals-amid-relentless-foreign-fund-outflows/article70352082.ece"
                },
                bullets: [
                    { tag: "Markets", text: "Nifty slips below 26,000; Sensex sheds 250 points as technical factors weigh in.", link: "https://m.economictimes.com/markets/stocks/news/sensex-falls-over-150-pts-nifty-below-26000-as-d-street-loses-momentum-near-record-peaks/articleshow/125732946.cms" },
                    { tag: "Gold", text: "Gold prices remain range-bound as traders await US Fed cues; Silver sees volatility.", link: "https://timesofindia.indiatimes.com/business/india-business/gold-price-prediction-today-india-where-is-gold-silver-rate-headed-on-december-03-2025-mcx-gold-futures-outlook/articleshow/125732747.cms" },
                    { tag: "Rupee", text: "Indian Rupee breaches 90-mark against the Dollar; RBI intervention in focus.", link: "https://www.financialexpress.com/market/rupee-hits-a-new-low-at-90-41-per-dollar-3-reasons-why-rupee-plunged-4-in-2025-4065160/" },
                    { tag: "Policy", text: "Govt to push 9 key economic bills including Insurance FDI hike in Winter Session.", link: "https://timesofindia.indiatimes.com/business/india-business/parliament-winter-sessions-economic-agenda-9-bills-listed-for-discussion-insurance-sin-goods-taxation-and-more-in-focus/articleshow/125674626.cms" },
                    { tag: "Growth", text: "FICCI President calls India a 'sweet spot', projects 7%+ GDP growth for FY25.", link: "https://www.financialexpress.com/policy/economy-india-in-a-sweet-spot-strong-reforms-to-drive-7-gdp-growth-says-ficci-president-anant-goenka-4062959/" },
                    { tag: "Trade", text: "Engineering exports to US and ASEAN slump 16.7% in October due to tariffs.", link: "https://m.economictimes.com/small-biz/trade/exports/insights/sharp-decline-in-shipments-to-us-asean-drag-down-engineering-exports-in-october/articleshow/125668700.cms" }
                ],
                stat: { label: "Rupee Low", value: "90.05", desc: "The Indian Rupee hit a fresh record low against the US Dollar, driven by FII outflows." }
            },
            'Politics': {
                date: 'December 4, 2025',
                lead: {
                    headline: "Parliament: Deadlock Over Electoral Rolls Debate",
                    summary: "The Winter Session continues to be stormy as the Opposition demands a discussion on the 'Special Intensive Revision' (SIR) of electoral rolls, alleging mass deletions. The Rajya Sabha witnessed a walkout over the refusal to set a timeline for this debate.",
                    link: "https://www.thehindu.com/news/national/parliament-winter-session-lok-sabha-rajya-sabha-day-2-highlights-december-2-2025/article70348014.ece"
                },
                bullets: [
                    { tag: "Pollution", text: "Congress MPs move Adjournment Motion to discuss 'Health Emergency' due to air pollution.", link: "https://www.thehindu.com/news/national/parliament-winter-session-lok-sabha-rajya-sabha-day-4-highlights-december-4-2025/article70356139.ece" },
                    { tag: "Diplomacy", text: "Russian President Putin arrives in India today for the 23rd Annual Summit.", link: "https://www.thehindu.com/news/national/russia-president-putin-india-visit-pm-modi-live-updates-december-4-2025/article70356149.ece" },
                    { tag: "Law", text: "Law Commission to brief Parliamentary panel on 'One Nation, One Election' today.", link: "https://www.thehindu.com/news/national/law-commission-to-brief-joint-committee-of-parliament-on-simultaneous-polls-on-december-4/article70355206.ece" },
                    { tag: "State", text: "Maharashtra Raj Bhavan officially renamed 'Maharashtra Lok Bhavan'.", link: "https://rajbhavan-maharashtra.gov.in/en/02-12-2025-maharashtra-raj-bhavan-is-now-lok-bhavan/" },
                    { tag: "Local", text: "Mohali Sarpanchs protest against merger of 15 villages into Municipal Corporation.", link: "https://indianexpress.com/article/cities/chandigarh/dont-want-our-villages-under-mc-sarpanchs-of-several-panchayats-submit-memorandum-as-dissent-grows-10399472/" },
                    { tag: "Rights", text: "SC upholds dismissal of Army officer for refusing to enter temple, citing discipline.", link: "https://www.indiatoday.in/india/law-news/story/army-is-secular-supreme-court-upholds-christian-officers-dismissal-over-refusal-to-enter-temple-sanctum-2825546-2025-11-25" }
                ],
                stat: { label: "Bills", value: "9", desc: "Number of key economic bills, including Insurance and Banking laws, listed for the Winter Session." }
            },
            'Technology': {
                date: 'December 4, 2025',
                lead: {
                    headline: "Meta Hires Apple Design Veteran for AI Push",
                    summary: "Meta has hired Alan Dye, Apple's longtime head of human interface design, as its new Chief Design Officer. The move signals Meta's aggressive push into AI-powered consumer hardware, aiming to compete with Apple's Vision Pro and other wearables.",
                    link: "https://www.thehindu.com/sci-tech/technology/apples-longtime-design-executive-alan-dye-to-join-meta/article70356038.ece"
                },
                bullets: [
                    { tag: "Smart Glass", text: "Meta launches Ray-Ban smart glasses (Gen 2) in India with 3K video and AI features.", link: "https://indianexpress.com/article/technology/tech-news-technology/meta-brings-new-ray-ban-smart-glasses-to-india-with-3k-ultra-hd-video-and-hindi-ai-translation-10400280/" },
                    { tag: "Chip", text: "Micron to exit consumer memory business to focus on AI data center chips.", link: "https://www.thehindu.com/sci-tech/technology/micron-to-exit-consumer-memory-business-amid-global-supply-shortage/article70356043.ece" },
                    { tag: "Policy", text: "India orders smartphone makers to pre-load 'Sanchar Saathi' anti-fraud app.", link: "https://techwireasia.com/2025/12/india-requires-apple-and-other-phone-makers-to-preload-its-anti-fraud-app/" },
                    { tag: "Android", text: "Android 17 'Cinnamon Bun' leaks point to a mid-2026 release with major UI changes.", link: "https://www.indiatoday.in/technology/news/story/google-gears-up-for-android-17-launch-expected-release-date-top-features-and-everything-to-know-2828337-2025-11-30" },
                    { tag: "Launch", text: "Nothing to launch Phone 3a Lite 'Community Edition' on December 9.", link: "https://www.thehindu.com/sci-tech/technology/gadgets/nothing-to-launch-phone-3a-lite-community-edition-on-december-9/article70352336.ece" },
                    { tag: "AI Future", text: "Musk predicts 'optional work' future due to AI in conversation with Nikhil Kamath.", link: "https://indianexpress.com/article/technology/tech-news-technology/elon-musk-predicts-work-will-become-optional-due-to-ai-in-talk-with-nikhil-kamath-10394817/" }
                ],
                stat: { label: "Price", value: "₹39,900", desc: "Starting price of the newly launched Ray-Ban Meta smart glasses in India." }
            },
            'Education': {
                date: 'December 4, 2025',
                lead: {
                    headline: "CBSE Releases New SOPs for 2026 Practical Exams",
                    summary: "The CBSE has released strict Standard Operating Procedures (SOPs) for Class 10 and 12 practical exams starting January 1, 2026. The guidelines mandate same-day mark uploads and the appointment of external examiners for Class 12.",
                    link: "https://ummid.com/news/2025/december/03-12-2025/cbse-asks-schools-to-strictly-follow-new-practical-exam-sops.html"
                },
                bullets: [
                    { tag: "Closure", text: "Schools in Thiruvallur and Chennai closed due to heavy rains from Cyclone Ditwah.", link: "https://www.indiatoday.in/education-today/news/story/thiruvallur-district-schools-shut-on-december-3-amid-cyclone-ditwah-rains-2829610-2025-12-02" },
                    { tag: "Reform", text: "AAP teachers' wing opposes HECI Bill, alleging centralization of higher education.", link: "https://www.theweek.in/wire-updates/national/2025/12/01/des50-dl-heci-aadta.html" },
                    { tag: "Policy", text: "NEP advocates for mother tongue-based education, says Minister Pradhan.", link: "https://www.newsonair.gov.in/nep-is-advocating-for-mother-tongue-based-education-dharmendra-pradhan/" },
                    { tag: "Skill", text: "CBSE introduces 'Design Thinking' and 'AI' as skill subjects for classes 6-12.", link: "https://www.cbse.gov.in/cbsenew/documents/01_Circular_2025_SKILL_10012025.pdf" },
                    { tag: "AIBE", text: "AIBE 20 exam conducted with strict 'No Notes' policy; results in 2 weeks.", link: "https://timesofindia.indiatimes.com/education/news/aibe-20-exam-2025-on-november-30-check-exam-day-dos-and-donts-issued-by-bci-here/articleshow/125579919.cms" },
                    { tag: "Ranking", text: "IISc Bangalore tops NIRF 2025 University rankings; IIT Madras leads overall.", link: "https://engineering.careers360.com/articles/iisc-bangalore-nirf-ranking" }
                ],
                stat: { label: "Start Date", value: "Jan 1", desc: "Start date for CBSE Class 10 and 12 Practical Exams for the 2025-26 session." }
            },
            'Medical': {
                date: 'December 4, 2025',
                lead: {
                    headline: "New Cancer Hospital in Pune to boost Research",
                    summary: "A new cancer hospital affiliated with BJ Medical College in Pune has been approved. It will serve as a 'Level 2' comprehensive care centre, introducing dedicated oncology training and bridging the infrastructure gap in the region.",
                    link: "https://timesofindia.indiatimes.com/city/pune/upcoming-cancer-hospital-in-pune-to-be-leading-hub-for-research-and-education/articleshow/125726379.cms"
                },
                bullets: [
                    { tag: "TB", text: "India's TB mortality rate drops to 21 per lakh; Minister urges MPs to lead elimination drive.", link: "https://www.newsonair.gov.in/uhm-j-p-nadda-says-indias-tb-mortality-rate-falls-from-28-to-21-per-lakh/" },
                    { tag: "HIV/AIDS", text: "Andhra Pradesh achieves 77% of HIV control target; best in the country.", link: "https://www.thehindu.com/news/national/andhra-pradesh/andhra-pradesh-stands-first-in-controlling-hiv-cases-says-health-minister/article70342004.ece" },
                    { tag: "Quality", text: "CDSCO flags 148 drug samples as 'Not of Standard Quality' in latest alert.", link: "https://medicaldialogues.in/news/industry/pharma/cdsco/state-drug-alert-148-medicine-samples-fail-cdsco-quality-tests-in-october-159564" },
                    { tag: "Global", text: "WHO reports surge in global measles cases; 11 million infected last year.", link: "https://news.un.org/en/story/2025/11/1166471" },
                    { tag: "Tech", text: "Apollo Hospitals partners with Google Cloud to deploy AI clinical intelligence engine.", link: "https://cloud.google.com/blog/products/ai-machine-learning/how-apollo-247-leverages-medlm-with-rag-to-revolutionize-healthcare" },
                    { tag: "Appointment", text: "Manoj Joshi takes charge as the new Pharma Secretary.", link: "https://vohnetwork.com/news/policy/manoj-joshi-appointed-pharma-secretary" }
                ],
                stat: { label: "Mortality", value: "21/Lakh", desc: "Current TB mortality rate in India, a significant decline from 28 per lakh in 2015." }
            },
            'Engineering': {
                date: 'December 4, 2025',
                lead: {
                    headline: "KPI Green Energy wins 142MW Floating Solar Contract",
                    summary: "KPI Green Energy has secured a major EPC contract from Gujarat State Electricity Corporation (GSECL) to build a 142 MW floating solar project. The deal underscores the growing shift towards innovative renewable infrastructure.",
                    link: "https://m.economictimes.com/markets/stocks/news/kpi-green-energy-shares-in-focus-after-winning-142-mw-floating-solar-epc-contract-from-gsecl/articleshow/125733181.cms"
                },
                bullets: [
                    { tag: "BESS", text: "APTRANSCO awards 1 GW battery storage tender to Ecoren, Bhagwati, and others.", link: "https://indianinfrastructure.com/2025/12/03/aptransco-awards-1-gw-2-gwh-standalone-bess-auction/" },
                    { tag: "Hydro", text: "THDC achieves milestone in Vishnugad Pipalkoti Hydro Project with unit testing.", link: "https://www.psuconnect.in/psu-news/thdc-india-vishnugad-pipalkoti-hydro-project-achieves-major-milestone-with-unit-2-hydro-static-testing" },
                    { tag: "Exports", text: "Engineering exports to US and ASEAN fell 16.7% in October due to tariffs.", link: "https://m.economictimes.com/small-biz/trade/exports/insights/sharp-decline-in-shipments-to-us-asean-drag-down-engineering-exports-in-october/articleshow/125668700.cms" },
                    { tag: "AI Deal", text: "Nvidia invests $2 billion in Synopsys to accelerate AI chip engineering.", link: "https://timesofindia.indiatimes.com/technology/tech-news/nvidia-invests-2-billion-in-synopsys-for-ai-engineering-partnership/articleshow/125697172.cms" },
                    { tag: "Space", text: "ISRO developing NGLV 'Soorya' rocket to replace PSLV by 2034.", link: "https://en.wikipedia.org/wiki/Next_Generation_Launch_Vehicle" },
                    { tag: "JEE", text: "JEE Main registrations cross record 14.5 lakh, reflecting engineering demand.", link: "https://timesofindia.indiatimes.com/city/mumbai/engineering-entrance-exam-jee-main-session-1-sees-record-14-5-lakh-applications/articleshow/125622056.cms" }
                ],
                stat: { label: "Capacity", value: "142 MW", desc: "Capacity of the new floating solar project awarded to KPI Green Energy in Gujarat." }
            },
            'Architecture': {
                date: 'December 4, 2025',
                lead: {
                    headline: "Raj Sabhagruh Wins 2025 Dezeen Award",
                    summary: "The Raj Sabhagruh in Gujarat, designed by Serie Architects, has won the prestigious Dezeen Award 2025 for Best Civic Project. The structure is celebrated for its sustainable use of discarded marble bricks.",
                    link: "https://www.freepressjournal.in/mumbai/raj-sabhagruh-wins-2025-dezeen-award-for-best-civic-project"
                },
                bullets: [
                    { tag: "Award", text: "Salhaus's 'Sreed Ebisu T' wins Silver in A' Architecture Awards for timber design.", link: "https://www.einpresswire.com/article/872111036/sreed-ebisu-t-by-salhaus-wins-silver-in-a-architecture-awards" },
                    { tag: "Residential", text: "Babak Eslahjou's 'M1 and M2' wins Silver for innovative multi-residential design.", link: "https://www.einpresswire.com/article/872112145/m1-and-m2-by-babak-eslahjou-wins-silver-in-a-architecture-awards" },
                    { tag: "Profile", text: "Architect Syed Sohrab Afzal redefining Odisha's cafe and dining scene.", link: "https://www.prameyanews.com/architect-syed-sohrab-afzal-the-visionary-redefining-odishas-cafe-and-dining-scene" },
                    { tag: "Interior", text: "Chalet Hotels recognized for design excellence and sustainability leadership.", link: "https://www.hotelierindia.com/leadership/the-architects-of-chalet" },
                    { tag: "Urban", text: "Bengaluru proposes ₹1.5L crore plan for urban tunnels and elevated corridors.", link: "https://timesofindia.indiatimes.com/city/bengaluru/building-bengaluru-2-0-city-bets-whopping-rs-1-5-lakh-crore-on-its-infrastructure/articleshow/125603009.cms" },
                    { tag: "Heritage", text: "Odisha unveils light & sound show at Konark Sun Temple.", link: "https://www.prameyanews.com/odisha-unveils-light-and-sound-show-at-konark-sun-temple" }
                ],
                stat: { label: "Bricks", value: "8 Lakh", desc: "Number of recycled marble bricks used in the award-winning Raj Sabhagruh project." }
            },
            'Sports': {
                date: 'December 4, 2025',
                lead: {
                    headline: "Kohli's 52nd Ton Powers India to Win",
                    summary: "Virat Kohli scored a masterful 135 (his 52nd ODI century) to guide India to a 17-run victory over South Africa in the 1st ODI in Ranchi. Kuldeep Yadav's 4-wicket haul helped defend the total.",
                    link: "https://timesofindia.indiatimes.com/sports/cricket/india-vs-south-africa/ind-vs-sa-virat-kohlis-hundred-kuldeep-yadav-four-for-power-indias-17-run-win-in-first-odi/articleshow/125676367.cms"
                },
                bullets: [
                    { tag: "Cricket", text: "Shubman Gill recovers from injury; to vice-captain India in T20 series vs SA.", link: "https://www.thehindu.com/sport/cricket/india-vs-south-africa-t20i-fit-again-shubman-gill-to-play-series-against-sa/article70352819.ece" },
                    { tag: "Hockey", text: "India finishes runner-up at Sultan Azlan Shah Cup, losing 0-1 to Belgium.", link: "https://www.newsonair.gov.in/category/sports/" },
                    { tag: "Women", text: "India Women's Junior Hockey team starts World Cup with 13-0 win over Namibia.", link: "https://www.newsonair.gov.in/category/sports/" },
                    { tag: "Football", text: "Rajasthan United FC wins 41st Governor's Gold Cup.", link: "https://www.newsonair.gov.in/category/sports/" },
                    { tag: "TT", text: "Manika Batra leads India squad at ITTF Mixed Team World Cup in China.", link: "https://www.newsonair.gov.in/category/sports/" },
                    { tag: "Record", text: "Rohit Sharma breaks Shahid Afridi's record for most ODI sixes (352).", link: "https://timesofindia.indiatimes.com/sports/cricket/india-vs-south-africa/ind-vs-sa-virat-kohlis-hundred-kuldeep-yadav-four-for-power-indias-17-run-win-in-first-odi/articleshow/125676367.cms" }
                ],
                stat: { label: "ODI Tons", value: "52", desc: "Virat Kohli's record-extending number of ODI centuries." }
            },
            'Space': {
                date: 'December 4, 2025',
                lead: {
                    headline: "ISRO Ready for Gaganyaan 'G1' Test Flight",
                    summary: "ISRO is fully prepared for the first uncrewed Gaganyaan mission (G1) scheduled for this December. The launch will validate the Crew Module and Escape System, a critical step for India's human spaceflight program.",
                    link: "https://timesofindia.indiatimes.com/science/isro-gaganyaan-2025-indias-first-uncrewed-g1-mission-with-vyommitra-set-to-launch-in-december/articleshow/123450124.cms"
                },
                bullets: [
                    { tag: "Station", text: "Bharatiya Antariksh Station's first module (BAS-1) on track for 2028 launch.", link: "https://ianslive.in/work-on-bharatiya-antariksh-stations-module-01-on-track-to-launch-by-2028-govt--20251203144243" },
                    { tag: "Milestone", text: "ISRO achieves 200 successful missions in 2025; SPADEX docking a highlight.", link: "https://www.wionews.com/photos/major-indian-space-achievements-in-2025-spadex-shubhanshu-shukla-iss-100-mission-1764743954247" },
                    { tag: "SpaceX", text: "US clears SpaceX to build Starship launch pad at Kennedy Space Center.", link: "https://www.indiatoday.in/science/story/us-clears-elon-musks-spacex-to-build-starship-launch-pad-at-nasas-kennedy-space-center-2829291-2025-12-02" },
                    { tag: "Launch", text: "SpaceX launches 60th mission of the year with Starlink satellites.", link: "https://www.space.com/space-exploration/launches-spacecraft/spacex-launches-60th-mission-of-the-year-from-california" },
                    { tag: "Private", text: "Agnikul Cosmos raises ₹150 Cr to advance reusable rocket technology.", link: "https://www.thehindu.com/news/national/tamil-nadu/space-startup-agnikul-raises-150-crore-to-fund-reusable-rockets/article70310628.ece" },
                    { tag: "NISAR", text: "NASA-ISRO satellite NISAR enters 'Science Phase', sends first radar images.", link: "https://www.thehindu.com/sci-tech/science/nisar-earth-observation-satellite-enters-final-science-operations-phase/article70334808.ece" }
                ],
                stat: { label: "Station Launch", value: "2028", desc: "Target year for launching the first module of India's indigenous space station." }
            },
            'International': {
                date: 'December 4, 2025',
                lead: {
                    headline: "US Pauses Migration from 19 Countries",
                    summary: "The Trump administration has paused immigration applications from 19 non-European countries citing security reviews. The move has drawn criticism from the UN, while the administration defends it as a national security measure.",
                    link: "https://www.thehindu.com/news/international/"
                },
                bullets: [
                    { tag: "Disaster", text: "Sri Lanka death toll from Cyclone Ditwah rises to 474; relief efforts continue.", link: "https://www.newsonair.gov.in/category/international/" },
                    { tag: "Conflict", text: "Israel says forensic findings do not match remaining hostages in Gaza.", link: "https://www.thehindu.com/news/international/israel-says-findings-returned-from-gaza-do-not-match-remaining-hostages/article70352514.ece" },
                    { tag: "Politics", text: "Bangladesh armed forces chiefs make rare joint visit to ailing ex-PM Khaleda Zia.", link: "https://www.thehindu.com/news/international/" },
                    { tag: "Geopolitics", text: "Geopolitics and cyber risks drive liability exposure for corporate boards: Report.", link: "https://laotiantimes.com/2025/12/03/allianz-commercial-geopolitics-and-cyber-drive-risk-exposures-for-directors-and-officers-in-2026/" },
                    { tag: "Climate", text: "WMO warns of deadly floods in Asia as extreme rains batter region.", link: "https://www.newsonair.gov.in/category/international/" },
                    { tag: "Space", text: "Search for MH370 to resume on Dec 30, over a decade after disappearance.", link: "https://www.thehindu.com/news/international/" }
                ],
                stat: { label: "Death Toll", value: "474", desc: "Confirmed deaths in Sri Lanka due to the devastating impact of Cyclone Ditwah." }
            }
        };
















