        // --- DATA SECTION: DAILY BULLETINS ---
        const newsDB = {
            'Economics': {
                date: 'December 1, 2025',
                lead: {
                    headline: "Stock Markets Eye RBI Policy After GDP Surge",
                    summary: "After the stellar 8.2% GDP print, all eyes are on the RBI's Monetary Policy Committee (MPC) meeting starting Dec 3. Markets expect a 'status quo' on rates but will look for a change in stance to 'Neutral', signaling future cuts.",
                    link: "https://www.financialexpress.com/market/analysts-eye-rbis-december-cut-fii-bets-amp-global-trends-as-key-market-triggers-4061045/"
                },
                bullets: [
                    { tag: "Data", text: "Government to release October Industrial Production (IIP) data today at 4 PM.", link: "https://m.economictimes.com/news/economy/indicators/govt-to-release-october-industrial-output-iip-data-on-dec-1-amid-gdp-coincidence/articleshow/125636208.cms" },
                    { tag: "Auto", text: "Auto majors to release November sales numbers; SUV demand expected to remain robust.", link: "https://www.financialexpress.com/market/analysts-eye-rbis-december-cut-fii-bets-amp-global-trends-as-key-market-triggers-4061045/" },
                    { tag: "Tax", text: "Winter Session to discuss bill replacing GST compensation cess with specific excises.", link: "https://timesofindia.indiatimes.com/business/india-business/parliament-winter-sessions-economic-agenda-9-bills-listed-for-discussion-insurance-sin-goods-taxation-and-more-in-focus/articleshow/125674626.cms" },
                    { tag: "Insurance", text: "Insurance Laws Amendment Bill listed; seeks to raise FDI cap to 100%.", link: "https://timesofindia.indiatimes.com/business/india-business/parliament-winter-sessions-economic-agenda-9-bills-listed-for-discussion-insurance-sin-goods-taxation-and-more-in-focus/articleshow/125674626.cms" },
                    { tag: "FII", text: "Foreign investors turn net buyers in November, pumping ₹9,000 crore into equities.", link: "https://www.financialexpress.com/market/analysts-eye-rbis-december-cut-fii-bets-amp-global-trends-as-key-market-triggers-4061045/" },
                    { tag: "Reform", text: "Securities Markets Code Bill 2025 to consolidate capital market laws introduced.", link: "https://timesofindia.indiatimes.com/business/india-business/parliament-winter-sessions-economic-agenda-9-bills-listed-for-discussion-insurance-sin-goods-taxation-and-more-in-focus/articleshow/125674626.cms" }
                ],
                stat: { label: "Forex Reserves", value: "$640 Bn", desc: "India's foreign exchange reserves remain at a comfortable 11-month high." }
            },
            'Politics': {
                date: 'December 1, 2025',
                lead: {
                    headline: "Winter Session Begins: Opposition Set to Corner Govt",
                    summary: "The Parliament Winter Session starts today. The Opposition is united in demanding debates on the Adani indictment issue, the Sambhal violence, and the Manipur situation. The government has listed 15 bills for passage, setting the stage for a stormy session.",
                    link: "https://www.thehindu.com/news/national/all-party-meeting-opposition-demands-debate-on-sir-national-security-in-parliament/article70341766.ece"
                },
                bullets: [
                    { tag: "Bills", text: "Waqf Amendment Bill and One Nation One Election report likely to be tabled.", link: "https://m.economictimes.com/news/politics-and-nation/parliament-winter-session-agenda-sin-goods-taxation-atomic-bill-on-table-as-oppn-gears-up-for-showdown-over-sir/articleshow/125675893.cms" },
                    { tag: "Security", text: "Opposition demands discussion on national security following Delhi blast.", link: "https://www.thehindu.com/news/national/all-party-meeting-opposition-demands-debate-on-sir-national-security-in-parliament/article70341766.ece" },
                    { tag: "Maharashtra", text: "Eknath Shinde likely to be Deputy CM as BJP asserts claim over CM post.", link: "https://www.thehindu.com/news/" },
                    { tag: "Cyclone", text: "Tamil Nadu CM reviews preparedness as Cyclone Ditwah brings heavy rains.", link: "https://www.thehindu.com/news/" },
                    { tag: "Foreign", text: "Bangladesh situation to be raised; India assures safety of minorities.", link: "https://www.thehindu.com/news/" },
                    { tag: "Judiciary", text: "Supreme Court questions Centre on delay in judicial appointments.", link: "https://www.thehindu.com/news/" }
                ],
                stat: { label: "Bills Listed", value: "15", desc: "Number of legislative bills the government plans to pass in this short winter session." }
            },
            'Technology': {
                date: 'December 1, 2025',
                lead: {
                    headline: "Android 17 'Cinnamon Bun': Early Leaks Surface",
                    summary: "Reports suggest Google is working on Android 17, codenamed 'Cinnamon Bun', slated for a mid-2026 release. It promises a major UI overhaul with 'Material 3' design, deeper AI integration, and enhanced privacy controls similar to iOS.",
                    link: "https://www.indiatoday.in/technology/news/story/google-gears-up-for-android-17-launch-expected-release-date-top-features-and-everything-to-know-2828337-2025-11-30"
                },
                bullets: [
                    { tag: "AI", text: "Elon Musk predicts 'work will become optional' due to AI advancements.", link: "https://indianexpress.com/article/technology/tech-news-technology/elon-musk-predicts-work-will-become-optional-due-to-ai-in-talk-with-nikhil-kamath-10394817/" },
                    { tag: "Deals", text: "Cyber Monday sales kick off; iPhone Air sees massive price drop in India.", link: "https://timesofindia.indiatimes.com/technology/tech-news/iphone-air-price-in-india-drops-check-discounts-on-reliance-digital-amazon-croma-and-flipkart/articleshow/125671937.cms" },
                    { tag: "Gaming", text: "GTA 6 trailer rumor sparks frenzy; Rockstar Games remains silent.", link: "#" },
                    { tag: "Space", text: "ISRO to launch Proba-3 mission for ESA on Dec 4 via PSLV-C59.", link: "https://www.isro.gov.in/" },
                    { tag: "Telecom", text: "DoT to conduct spectrum auction for satellite broadband services next year.", link: "https://dot.gov.in/" },
                    { tag: "App", text: "WhatsApp introduces 'View Once' for voice notes to enhance privacy.", link: "https://blog.whatsapp.com/" }
                ],
                stat: { label: "AI Funding", value: "$400 Bn", desc: "Global venture capital investment in Generative AI startups since 2023." }
            },
            'Education': {
                date: 'December 1, 2025',
                lead: {
                    headline: "Schools Closed in Chennai Due to Cyclone Alert",
                    summary: "Schools in Chennai, Tirupati, and coastal districts of Tamil Nadu and Andhra Pradesh are closed today (Dec 1) due to heavy rainfall warnings from Cyclone Ditwah. District collectors have issued orders to ensure student safety.",
                    link: "https://www.jagranjosh.com/articles/school-holiday-on-1-december-2025-monday-schools-closed-in-these-states-due-to-rain-and-regional-festivals-1800005869-1"
                },
                bullets: [
                    { tag: "Exam", text: "AIBE 20 exam held yesterday; results expected in 2 weeks.", link: "https://timesofindia.indiatimes.com/education/news/aibe-20-exam-2025-on-november-30-check-exam-day-dos-and-donts-issued-by-bci-here/articleshow/125579919.cms" },
                    { tag: "Reform", text: "HECI Bill to replace UGC/AICTE listed for Winter Session passage.", link: "https://www.indiatoday.in/education-today/news/story/ugc-aicte-set-to-be-replaced-as-single-higher-education-regulator-moves-forward-2824637-2025-11-23" },
                    { tag: "Policy", text: "Experts call for 'Skill-based education' to tackle youth unemployment.", link: "https://timesofindia.indiatimes.com/city/ranchi/skill-based-education-call/articleshow/125677130.cms" },
                    { tag: "Festival", text: "Thiruvananthapuram Revenue District School Youth Festival begins today.", link: "https://timesofindia.indiatimes.com/city/thiruvananthapuram/thiruvananthapuram-revenue-district-school-youth-festival-begins-on-december-1/articleshow/125663044.cms" },
                    { tag: "CAT", text: "CAT 2025 analysis: Quant section tougher than previous years.", link: "https://www.ndtv.com/education" },
                    { tag: "Jobs", text: "Railway Recruitment Board (RRB) announces 1.5 lakh new vacancies.", link: "https://indianrailways.gov.in/" }
                ],
                stat: { label: "Participants", value: "8,299", desc: "Number of students competing in the Thiruvananthapuram School Youth Festival." }
            },
            'Engineering': {
                date: 'December 1, 2025',
                lead: {
                    headline: "Engineering Exports Slump 16.7% in October",
                    summary: "India's engineering exports witnessed a sharp decline of 16.7% in October 2025, primarily due to rising protectionism and tariffs in the US and EU. The EEPC has called for government support to navigate the global slowdown.",
                    link: "https://timesofindia.indiatimes.com/business/india-business/us-tariffs-bite-indias-engineering-exports-slump-16-7-in-october-asean-eu-and-uae-shipments-weaken/articleshow/125661032.cms"
                },
                bullets: [
                    { tag: "JEE", text: "JEE Main registrations hit record 14.5 lakh; engineering craze continues.", link: "https://timesofindia.indiatimes.com/city/mumbai/engineering-entrance-exam-jee-main-session-1-sees-record-14-5-lakh-applications/articleshow/125622056.cms" },
                    { tag: "Innovation", text: "GCWCN 2025 showcases 'Quantum-Federated Learning' for cybersecurity.", link: "https://timesofindia.indiatimes.com/city/pune/gcwcn-2025-showcases-breakthrough-innovations-across-ai-quantum-computing-iot-healthcare-engineering/articleshow/125554437.cms" },
                    { tag: "Infrastructure", text: "L&T to execute electrification of Mumbai-Ahmedabad Bullet Train project.", link: "https://www.larsentoubro.com/" },
                    { tag: "Robotics", text: "Genrobotics 'Bandicoot' robots deployed in more cities to end manual scavenging.", link: "https://sanitation.genrobotics.com/" },
                    { tag: "Space", text: "ISRO developing NGLV 'Soorya' rocket to replace PSLV by 2034.", link: "https://en.wikipedia.org/wiki/Next_Generation_Launch_Vehicle" },
                    { tag: "Energy", text: "Adani Energy bags 2.5 GW transmission project in Khavda renewable zone.", link: "https://www.mercomindia.com/adani-energy-bags-transmission-project-to-evacuate-2-5-gw-of-renewable-energy" }
                ],
                stat: { label: "Applicants", value: "14.5 Lakh", desc: "Record number of students applying for JEE Main 2025, highlighting engineering demand." }
            },
            'Architecture': {
                date: 'December 1, 2025',
                lead: {
                    headline: "Raj Sabhagruh Wins Dezeen Award 2025",
                    summary: "The Raj Sabhagruh in Gujarat, designed by Serie Architects, has won the Dezeen Award for Best Civic Project. The structure is celebrated for its innovative use of discarded marble bricks, setting a benchmark in sustainable architecture.",
                    link: "https://www.freepressjournal.in/mumbai/raj-sabhagruh-wins-2025-dezeen-award-for-best-civic-project"
                },
                bullets: [
                    { tag: "Design", text: "BV Doshi's 'Retreat at Vitra' featured in Architectural Digest India.", link: "https://www.zinio.com/in/publications/architectural-digest-india/5361" },
                    { tag: "Urban", text: "Bengaluru's ₹1.5L crore infrastructure plan focuses on tunnels and elevated corridors.", link: "https://timesofindia.indiatimes.com/city/bengaluru/building-bengaluru-2-0-city-bets-whopping-rs-1-5-lakh-crore-on-its-infrastructure/articleshow/125603009.cms" },
                    { tag: "Heritage", text: "Odisha launches light & sound show at Konark Sun Temple to boost tourism.", link: "https://www.prameyanews.com/odisha-unveils-light-and-sound-show-at-konark-sun-temple" },
                    { tag: "Event", text: "ACETECH 2025 in Mumbai draws record crowd of architects and builders.", link: "https://acetechexpo.com/" },
                    { tag: "Airport", text: "AAI implements live monitoring for Chennai Airport Terminal 3 construction.", link: "https://timesofindia.indiatimes.com/city/chennai/aai-to-monitor-terminal-3-project/articleshow/124882491.cms" },
                    { tag: "Global", text: "Kéré Architecture unveils designs for sustainable library in Brazil.", link: "https://www.dezeen.com/architecture/" }
                ],
                stat: { label: "Bricks", value: "8 Lakh", desc: "Number of recycled marble bricks used to construct the award-winning Raj Sabhagruh." }
            },
            'Sports': {
                date: 'December 1, 2025',
                lead: {
                    headline: "Virat Kohli's 52nd Ton Seals India Win",
                    summary: "Virat Kohli's masterful 135 (his 52nd ODI century) guided India to a comfortable 17-run victory over South Africa in the 1st ODI. Kuldeep Yadav spun a web around the Proteas, taking 4 wickets to defend the total.",
                    link: "https://timesofindia.indiatimes.com/sports/cricket/india-vs-south-africa/ind-vs-sa-virat-kohlis-hundred-kuldeep-yadav-four-for-power-indias-17-run-win-in-first-odi/articleshow/125676367.cms"
                },
                bullets: [
                    { tag: "F1", text: "Max Verstappen wins Qatar GP; Norris finishing second keeps title fight alive.", link: "https://www.thehindu.com/latest-news/" },
                    { tag: "Hockey", text: "India finishes runner-up at Sultan Azlan Shah Cup, losing 0-1 to Belgium.", link: "https://www.newsonair.gov.in/category/sports/" },
                    { tag: "TT", text: "Manika Batra leads India squad at ITTF Mixed Team World Cup in China.", link: "https://www.newsonair.gov.in/category/sports/" },
                    { tag: "WRC", text: "Puligilla-Sherif become first Indian pair to finish on WRC3 podium.", link: "https://www.thehindu.com/latest-news/" },
                    { tag: "Squash", text: "Velavan Senthilkumar & Anahat Singh start as favorites in HCL Squash Tour.", link: "https://www.thehindu.com/latest-news/" },
                    { tag: "Football", text: "West Ham legend Billy Bonds passes away at 79.", link: "https://www.thehindu.com/latest-news/" }
                ],
                stat: { label: "ODI Tons", value: "52", desc: "Virat Kohli's record-extending ODI century count, surpassing Sachin Tendulkar." }
            }
        };


