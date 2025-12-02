        // --- DATA SECTION ---
const articlesDB = {
            '2025-12-02': {
                dateLabel: 'December 2, 2025',
                articles: [
                    {
                        title: "R&D Ecosystem: India's Innovation Deficit",
                        source: "The Hindu",
                        paper: "GS Paper 3",
                        topic: "Science & Technology",
                        originalLink: "https://www.thehindu.com/opinion/op-ed/india-needs-research-pipelines/article70341873.ece",
                        context: "To achieve high growth, India must emulate advanced economies by enhancing private R&D investment and fostering industry-academia partnerships, as current public funding is insufficient.",
                        keyPoints: [
                            "<strong>Investment Gap:</strong> India's Gross Expenditure on R&D (GERD) has remained stagnant at ~0.7% of GDP, compared to >2% in developed nations.",
                            "<strong>Private Sector Role:</strong> Unlike the West where the private sector leads innovation, in India, the government still shoulders the majority of R&D funding.",
                            "<strong>Structural Issues:</strong> Lack of 'research pipelines' connecting universities to industries results in a 'Valley of Death' for promising prototypes."
                        ],
                        wayForward: ["Operationalize the National Research Foundation (NRF) to democratize funding.", "Incentivize private sector R&D through tax breaks and matching grants."],
                        fodder: { stat: "GERD: 0.7% of GDP", body: "National Research Foundation (NRF)" },
                        question: "India's ambition to become a developed nation hinges on its ability to innovate. Analyze the structural bottlenecks in India's R&D ecosystem. (15 Marks, 250 Words)",
                        deepDive: `<p>India's R&D landscape has historically been dominated by government institutions like ISRO, DRDO, and CSIR, with limited contribution from the private sector and state universities. The Science, Technology, and Innovation Policy (STIP) 2013 aimed to double GERD to 2% of GDP, a target that remains elusive due to risk aversion in the Indian corporate sector and a lack of translational research mechanisms in academia.</p>`
                    },
                    {
                        title: "State PSC Reforms: Restoring Meritocracy",
                        source: "The Hindu / PMF IAS",
                        paper: "GS Paper 2",
                        topic: "Constitutional Bodies",
                        originalLink: "https://www.pmfias.com/current-affairs-november-30-2025/",
                        context: "Recurring scandals in State Public Service Commissions (SPSCs) have eroded public trust. Reforms are needed to ensure transparent, merit-based recruitment for state administrations.",
                        keyPoints: [
                            "<strong>Political Patronage:</strong> Appointments of SPSC members are often political, leading to compromised autonomy and corruption.",
                            "<strong>Governance Impact:</strong> Delays and litigation in recruitment cycles cause chronic vacancies in essential services like health and policing.",
                            "<strong>Constitutional Gap:</strong> While Article 316 details appointment, it lacks strict qualification criteria, leaving room for discretionary appointments."
                        ],
                        wayForward: ["Establish a 'State Personnel Ministry' for oversight.", "Codify minimum academic qualifications for SPSC members."],
                        fodder: { article: "Article 315-323", report: "Hota Committee on Civil Service Reforms" },
                        question: "State Public Service Commissions are critical for state governance but face a credibility crisis. Discuss the structural reforms needed to restore their integrity. (10 Marks, 150 Words)",
                        deepDive: `<p>The Constitution of India envisages the Public Service Commissions as the 'watchdogs of the merit system'. However, unlike the UPSC which has largely maintained its reputation, SPSCs have been plagued by allegations of nepotism and paper leaks. The Administrative Reforms Commission (ARC) has repeatedly flagged the need to insulate these bodies from political interference, suggesting that members should be appointed by a committee involving the Chief Minister, Leader of Opposition, and Chief Justice of the High Court.</p>`
                    },
                    {
                        title: "India's Cervical Cancer Battle: The HPV Vaccine Push",
                        source: "The Hindu",
                        paper: "GS Paper 2",
                        topic: "Health Sector",
                        originalLink: "https://www.pmfias.com/current-affairs-november-30-2025/",
                        context: "With South-East Asia accounting for a quarter of global cervical cancer deaths, India is ramping up efforts to introduce the indigenous HPV vaccine in the national immunization drive.",
                        keyPoints: [
                            "<strong>Preventable Burden:</strong> Cervical cancer is the second most common cancer in Indian women and is largely preventable via vaccination.",
                            "<strong>Indigenous Solution:</strong> The development of 'CERVAVAC' (Serum Institute) has made the vaccine affordable for mass deployment.",
                            "<strong>Policy Shift:</strong> The government plans to include the HPV vaccine in the Universal Immunization Programme (UIP) for girls aged 9-14."
                        ],
                        wayForward: ["Implement a school-based vaccination strategy for high coverage.", "Integrate cervical screening for women aged 30-49 in PHCs."],
                        fodder: { vaccine: "CERVAVAC", goal: "WHO 90-70-90 Target" },
                        question: "Cervical cancer is a major public health challenge in India. Discuss the significance of the indigenous HPV vaccine and the challenges in its universal rollout. (10 Marks, 150 Words)",
                        deepDive: `<p>Cervical cancer is primarily caused by the Human Papillomavirus (HPV). Globally, countries like Australia have nearly eliminated the disease through robust vaccination programs. In India, high costs and lack of awareness previously hindered uptake. The National Technical Advisory Group on Immunization (NTAGI) has recommended the vaccine's inclusion in the national program, marking a shift from curative to preventive oncology in public health policy.</p>`
                    },
                    {
                        title: "Methane Emissions: The Missing Climate Pledge",
                        source: "The Indian Express",
                        paper: "GS Paper 3",
                        topic: "Environment & Climate Change",
                        originalLink: "https://www.pmfias.com/current-affairs-november-30-2025/",
                        context: "A UNEP report identifies India as a methane hotspot, primarily from agriculture. India has consistently avoided signing the Global Methane Pledge due to food security concerns.",
                        keyPoints: [
                            "<strong>Agricultural Source:</strong> Unlike the West where fossil fuels drive methane, in India, it is enteric fermentation (livestock) and paddy cultivation.",
                            "<strong>Survival vs. Luxury:</strong> India argues that 'survival emissions' from agriculture cannot be equated with 'luxury emissions' from oil and gas.",
                            "<strong>Mitigation Options:</strong> Technologies like System of Rice Intensification (SRI) and better livestock feed can reduce emissions without cutting output."
                        ],
                        wayForward: ["Promote Direct Seeding of Rice (DSR) to reduce methanogenesis.", "Incentivize biogas production from cattle waste."],
                        fodder: { gas: "Methane (CH4)", potency: "80x more potent than CO2 (20-year GWP)" },
                        question: "India faces international pressure to curb methane emissions. Analyze the challenges in balancing climate goals with agricultural livelihood security. (15 Marks, 250 Words)",
                        deepDive: `<p>Methane is a short-lived climate pollutant (SLCP) that contributes significantly to near-term warming. The Global Methane Pledge, launched at COP26, aims to cut methane by 30% by 2030. India abstained because its methane emissions are tied to the livelihoods of small and marginal farmers. Targeting livestock methane would require changes in animal husbandry practices that are capital-intensive and culturally sensitive, making it a complex policy challenge.</p>`
                    },
                    {
                        title: "Fiscal Federalism: The Shrinking Space for States",
                        source: "The Hindu Editorial",
                        paper: "GS Paper 2",
                        topic: "Centre-State Relations",
                        originalLink: "https://vajiramandravi.com/current-affairs/daily-editorial-analysis-2-december-2025/",
                        context: "Trends show a shrinking fiscal space for states due to the Centre's increasing reliance on cesses and surcharges, which are not shared with states, eroding the divisible pool.",
                        keyPoints: [
                            "<strong>Divisible Pool Erosion:</strong> While the 14th Finance Commission raised state share to 42%, the effective share is lower due to high cesses.",
                            "<strong>Vertical Imbalance:</strong> States have higher expenditure responsibilities (health, education) but limited revenue-raising powers compared to the Centre.",
                            "<strong>High-Income States:</strong> States like Karnataka and Tamil Nadu argue they are penalized for better performance in demographic control and development."
                        ],
                        wayForward: ["Include cesses and surcharges in the divisible pool via constitutional amendment.", " rationalize CSS (Centrally Sponsored Schemes) to give states more autonomy."],
                        fodder: { article: "Article 270 & 271", term: "Fiscal Federalism" },
                        question: "The increasing use of cesses and surcharges by the Centre threatens the spirit of fiscal federalism. Discuss with reference to the 15th Finance Commission. (15 Marks, 250 Words)",
                        deepDive: `<p>Fiscal federalism in India is based on the constitutional division of financial powers. The Finance Commission (Article 280) recommends the distribution of net tax proceeds between the Centre and States. However, Article 271 allows the Centre to levy surcharges for its own purposes. Over the last decade, the share of cesses/surcharges in Gross Tax Revenue has doubled, effectively shrinking the 'Divisible Pool' available for states, leading to friction between the Union and State governments.</p>`
                    }
                ]
            },
        
            '2025-12-01': {
                dateLabel: 'December 1, 2025',
                articles: [
                    {
                        title: "Q2 GDP Growth at 8.2%: Manufacturing Leads Revival",
                        source: "The Hindu",
                        paper: "GS Paper 3",
                        topic: "Indian Economy & Growth",
                        originalLink: "https://www.thehindu.com/business/Economy/indian-economy-grows-82-in-q2-2025-26/article70334383.ece",
                        context: "India's GDP grew by 8.2% in Q2 (July-Sept 2025-26), driven by a 9.1% surge in manufacturing. While real GDP growth is high, the low GDP deflator (0.5%) raises concerns about nominal growth (8.7%) and subdued pricing power.",
                        keyPoints: [
                            "<strong>Sectoral Performance:</strong> Manufacturing grew at a six-quarter high of 9.1%, while services expanded by 9.2%. Agriculture lagged at 3.5%.",
                            "<strong>Deflator Dilemma:</strong> A low GDP deflator (inflation adjustment) boosted real growth figures, masking weaker nominal growth.",
                            "<strong>Investment Trends:</strong> Gross Fixed Capital Formation (GFCF) showed modest growth, indicating reliance on government capex over private investment."
                        ],
                        wayForward: ["Monitor inflation trends to stabilize the GDP deflator.", "Incentivize private sector capital expenditure."],
                        fodder: { stat: "8.2% Real GDP vs 8.7% Nominal GDP.", keyword: "GDP Deflator" },
                        question: "India's Q2 GDP growth surprises on the upside, but underlying indicators like the GDP deflator present a complex picture. Analyze. (10 Marks, 150 Words)",
                        deepDive: `<p>The methodology for calculating India's GDP was revised in 2015, shifting the base year to 2011-12 and moving from Factor Cost to Market Prices. The GDP Deflator is a comprehensive measure of inflation across the entire economy, unlike CPI or WPI. Historically, a low deflator (as seen during the 2015-16 oil price crash) can artificially inflate Real GDP growth figures when input costs fall faster than output prices, creating a 'statistical boost' rather than reflecting purely demand-driven growth.</p>`
                    },
                    {
                        title: "HECI Bill: Unifying Higher Education Regulation",
                        source: "The Indian Express",
                        paper: "GS Paper 2",
                        topic: "Education Sector Reforms",
                        originalLink: "https://indianexpress.com/article/explained/everyday-explainers/what-is-the-centres-higher-education-commission-of-india-bill-2025-10382060/",
                        context: "The government is set to introduce the Higher Education Commission of India (HECI) Bill to replace UGC, AICTE, and NCTE with a single regulator, aiming to streamline governance as per NEP 2020.",
                        keyPoints: [
                            "<strong>Unified Structure:</strong> Consolidates regulation, accreditation, and standards under one roof to end fragmentation.",
                            "<strong>Four Verticals:</strong> Separate independent verticals for Regulation (NHERC), Accreditation (NAC), Grants (HEGC), and Standards (GEC).",
                            "<strong>Exclusions:</strong> Medical and legal education will remain outside HECI's purview."
                        ],
                        wayForward: ["Ensure the new body fosters autonomy rather than centralization.", "Prioritize a robust accreditation framework."],
                        fodder: { policy: "NEP 2020", body: "Higher Education Commission of India (HECI)" },
                        question: "The proposed HECI seeks to replace multiple regulators with a single body. Discuss the potential benefits and challenges of this centralization. (15 Marks, 250 Words)",
                        deepDive: `<p>The regulatory landscape of Indian higher education has long been fragmented, with the University Grants Commission (UGC) established in 1956 and the All India Council for Technical Education (AICTE) in 1987 often having overlapping mandates. The Yash Pal Committee (2009) and the National Knowledge Commission first recommended subsuming these bodies into a single National Commission for Higher Education and Research (NCHER) to eliminate the 'Inspector Raj' culture and focus on learning outcomes rather than just infrastructure norms.</p>`
                    },
                    {
                        title: "Urban Pollution: The Failure of 'Safe' Air Standards",
                        source: "The Indian Express",
                        paper: "GS Paper 3",
                        topic: "Environment & Pollution",
                        originalLink: "https://indianexpress.com/article/explained/urban-indian-city-safe-air-quality-10391338/",
                        context: "A Climate Trends report reveals that no major Indian city met 'safe' air quality levels consistently from 2015-2025, with Northern cities faring significantly worse than Southern ones due to geography and policy failures.",
                        keyPoints: [
                            "<strong>North vs. South:</strong> Northern cities suffer from the 'valley effect' and winter inversion, while Southern cities benefit from coastal breezes.",
                            "<strong>Surface Roughness:</strong> Dense urban structures reduce wind speed, trapping pollutants locally.",
                            "<strong>Policy Failure:</strong> Reactive measures (GRAP) have failed to curb emissions at the source effectively."
                        ],
                        wayForward: ["Shift to 'Airshed Management' planning.", "Strict controls on construction dust in landlocked cities."],
                        fodder: { concept: "Airshed Management", report: "Climate Trends 10-Year Analysis" },
                        question: "Geography is destiny when it comes to air pollution in India. Analyze why Northern Indian cities face a more severe crisis than their Southern counterparts. (10 Marks, 150 Words)",
                        deepDive: `<p>India's systematic air quality monitoring began with the National Air Quality Index (NAQI) in 2014. The Indo-Gangetic Plain has historically acted as a pollution trap due to its unique topography—landlocked and bounded by the Himalayas—which prevents the dispersal of pollutants during winter. This 'meteorological misfortune' is compounded by the phenomenon of 'Temperature Inversion,' where a layer of cold air near the ground traps pollutants under a layer of warm air, a condition not typically faced by India's coastal peninsular cities.</p>`
                    },
                    {
                        title: "Electricity Amendment Bill: The Federal Spark",
                        source: "The Indian Express",
                        paper: "GS Paper 2 & 3",
                        topic: "Federalism & Infrastructure",
                        originalLink: "https://indianexpress.com/article/explained/everyday-explainers/inside-punjab-protests-against-centres-new-power-law-concerns-about-cherry-picking-consumers-eroding-subsidies-10389175/",
                        context: "Farmers and engineers in Punjab are protesting the Electricity Amendment Bill 2025, fearing privatization will lead to the loss of cross-subsidies and cherry-picking of profitable consumers by private players.",
                        keyPoints: [
                            "<strong>Cherry-Picking:</strong> Fear that private players will serve only profitable commercial consumers, leaving state DISCOMs with subsidized rural loads.",
                            "<strong>Cross-Subsidy Threat:</strong> State DISCOMs rely on commercial tariffs to subsidize farmers; this model is threatened by de-licensing.",
                            "<strong>Federal Encroachment:</strong> Electricity is a concurrent subject, and states feel the Centre is imposing a market model unilaterally."
                        ],
                        wayForward: ["Guarantee 'Universal Service Obligation' for private licensees.", "Direct Benefit Transfer (DBT) for subsidies."],
                        fodder: { term: "Cross-Subsidy Surcharge", list: "Concurrent List (Entry 38)" },
                        question: "Power sector reforms often face resistance due to the complex political economy of subsidies. Discuss the concerns raised by states regarding the Electricity Amendment Bill. (15 Marks, 250 Words)",
                        deepDive: `<p>The Electricity Act of 2003 was a landmark reform that de-licensed power generation and introduced the concept of Open Access. However, the distribution sector remained a state monopoly and continued to suffer from high Aggregate Technical & Commercial (AT&C) losses. The current Amendment Bill seeks to replicate the success of the telecom sector by de-licensing distribution, allowing multiple suppliers in the same area. This move challenges the decades-old political economy where state governments use free power as a key welfare tool for the agricultural sector.</p>`
                    },
                    {
                        title: "Army & Conscience: The Kamalesan Verdict",
                        source: "The Hindu",
                        paper: "GS Paper 4",
                        topic: "Ethics in Public Administration",
                        originalLink: "https://www.thehindu.com/news/national/supreme-court-dismisses-christian-army-officers-plea-against-termination-of-service-samuel-kamalesan-nov-25-2025/article70321067.ece",
                        context: "The Supreme Court upheld the dismissal of a Christian Army officer who refused to enter a temple sanctum citing religious beliefs, ruling that military discipline and secular ethos override individual 'private understanding' of religion.",
                        keyPoints: [
                            "<strong>Secular Fabric:</strong> The Army follows 'Sarva Dharma Sthal', requiring officers to participate in all religious traditions to build unit cohesion.",
                            "<strong>Discipline First:</strong> The court ruled that refusing a lawful command based on private religious interpretation constitutes gross indiscipline.",
                            "<strong>Article 33:</strong> Empowers Parliament to restrict fundamental rights of armed forces personnel to ensure duty discharge."
                        ],
                        wayForward: ["Reinforce 'Unit Ethos' training.", "Ensure command sensitivity to genuine constraints without compromising discipline."],
                        fodder: { article: "Article 33", concept: "Esprit de Corps" },
                        question: "In the armed forces, 'Duty' often supersedes 'Right'. Analyze this statement in the context of the recent Supreme Court judgment on military discipline. (10 Marks, 150 Words)",
                        deepDive: `<p>The Indian Army's secularism is distinct from the Western concept; it is not the absence of religion but the celebration of all faiths (Sarva Dharma Sambhav) within the regiment. Since the British era, Indian officers have been mandated to lead troops of diverse faiths by participating in their religious festivals to foster trust and 'Esprit de Corps'. Article 33 of the Constitution specifically allows for the restriction of Fundamental Rights for armed forces personnel, a provision courts have consistently upheld to maintain the strict chain of command essential for national security.</p>`
                    }
                ]
            },
            '2025-11-30': {
                dateLabel: 'November 30, 2025',
                articles: [
                    {
                        title: "State PSC Reforms: Addressing Governance Bottlenecks",
                        source: "The Hindu / PMF IAS",
                        paper: "GS Paper 2",
                        topic: "Constitutional Bodies",
                        originalLink: "https://www.pmfias.com/current-affairs-november-30-2025/",
                        context: "Frequent paper leaks and litigation in State Public Service Commissions (SPSCs) like Telangana and Bihar have highlighted the urgent need for institutional reform to ensure merit-based recruitment.",
                        keyPoints: [
                            "<strong>Institutional Decay:</strong> Political patronage in appointing SPSC members has eroded autonomy and quality.",
                            "<strong>Governance Deficit:</strong> Delays in recruitment lead to chronic vacancies in frontline administration (health, police).",
                            "<strong>Constitutional Gap:</strong> The 41st Amendment raised retirement age to 62, but lacks strict qualification norms for members."
                        ],
                        wayForward: ["Establish a dedicated State Personnel Ministry.", "Amend rules to fix minimum academic qualifications for SPSC members."],
                        fodder: { article: "Article 315-323", report: "2nd ARC (Administrative Reforms Commission)" },
                        question: "State Public Service Commissions are the pillars of state administration. Discuss the structural challenges they face and suggest reforms to restore their credibility.",
                        deepDive: `<h3>1. The Core Issue</h3><p>Unlike the UPSC, which has maintained relative integrity, SPSCs are often staffed by political appointees rather than eminent academicians or administrators. This leads to a cycle of corruption and litigation. <br><h3>2. The Solution</h3><p>The <strong>Hota Committee (2004)</strong> recommended that members of SPSCs should be appointed in consultation with the UPSC Chairman to ensure neutrality.</p>`
                    },
                    {
                        title: "Methane Hotspots: India's Climate Blind Spot",
                        source: "The Indian Express",
                        paper: "GS Paper 3",
                        topic: "Environment & Climate Change",
                        originalLink: "https://www.pmfias.com/current-affairs-november-30-2025/",
                        context: "A UNEP report identifies India as a major methane hotspot, yet methane reduction targets were notably absent from India's recent COP30 statement.",
                        keyPoints: [
                            "<strong>The Source:</strong> Agriculture (paddy cultivation) and livestock are the primary sources of methane in India, unlike the West where it is oil & gas.",
                            "<strong>Policy Dilemma:</strong> Reducing agricultural methane conflicts with food security goals, making it a sensitive political issue.",
                            "<strong>The Risk:</strong> Methane is 80x more potent than CO2 in the short term, accelerating immediate warming."
                        ],
                        wayForward: ["Promote 'System of Rice Intensification' (SRI) to reduce water usage.", "Incentivize biogas plants for livestock waste."],
                        fodder: { gas: "Methane (CH4)", report: "Global Methane Pledge (India is not a signatory)" },
                        question: "Why did India abstain from the Global Methane Pledge? Analyze the challenges in reducing methane emissions while maintaining food security.",
                        deepDive: `<h3>1. Why Methane Matters</h3><p>Methane has a short lifespan (12 years) but high heat-trapping potential. Cutting it gives the fastest result in slowing global warming. <br><h3>2. India's Stance</h3><p>India argues that its 'survival emissions' (agriculture) cannot be equated with the 'luxury emissions' (oil/gas leaks) of the West. Hence, it focuses on CO2 reduction instead.</p>`
                    },
                    {
                        title: "Cervical Cancer: The Silent Killer",
                        source: "The Hindu",
                        paper: "GS Paper 2",
                        topic: "Health & Social Justice",
                        originalLink: "https://www.pmfias.com/current-affairs-november-30-2025/",
                        context: "WHO and UN warnings highlight that South-East Asia accounts for 25% of global cervical cancer deaths, with India bearing a significant burden.",
                        keyPoints: [
                            "<strong>Preventable Tragedy:</strong> Cervical cancer is almost entirely preventable via the HPV vaccine, yet coverage remains low.",
                            "<strong>Indigenous Solution:</strong> India's first indigenous vaccine 'CERVAVAC' (by SII) offers a cost-effective intervention.",
                            "<strong>Policy Gap:</strong> The rollout of the HPV vaccine in the Universal Immunization Programme (UIP) has been delayed."
                        ],
                        wayForward: ["Mission-mode rollout of HPV vaccine for girls aged 9-14.", "Integrate screening into primary healthcare centers (PHCs)."],
                        fodder: { vaccine: "CERVAVAC", target: "Eliminate Cervical Cancer by 2030 (WHO Goal)" },
                        question: "Cervical cancer is a public health crisis that disproportionately affects women in lower socio-economic groups. Discuss the barriers to its elimination in India.",
                        deepDive: `<h3>1. The Strategy</h3><p>The WHO '90-70-90' target: 90% of girls vaccinated, 70% of women screened, and 90% of those with disease treated. <br><h3>2. The Challenge</h3><p>Cultural stigma around sexual health and vaccine hesitancy are major roadblocks. A schooling-based vaccination drive (like for Tetanus) is the most effective delivery mechanism.</p>`
                    },
                    {
                        title: "Draft Seeds Bill 2025: Farmer Rights vs. Corporate Control",
                        source: "The Hindu",
                        paper: "GS Paper 3",
                        topic: "Agriculture & IPR",
                        originalLink: "https://forumias.com/blog/9-pm-upsc-current-affairs-articles-29-november-2025/",
                        context: "The new Draft Seeds Bill aims to replace the 1966 Act but has sparked protests over fears it will dilute farmers' rights to save and exchange seeds.",
                        keyPoints: [
                            "<strong>Modernization:</strong> Aims to regulate seed quality, introduce traceability, and penalize spurious seeds.",
                            "<strong>The Conflict:</strong> Farmers fear it aligns with UPOV norms, prioritizing breeder rights (corporations) over farmer rights.",
                            "<strong>Centralization:</strong> The Bill proposes a central registration committee, reducing the power of state governments."
                        ],
                        wayForward: ["Explicitly protect Section 39 of PPV&FR Act (Farmer's Right).", "Decentralize seed certification to state bodies."],
                        fodder: { act: "PPV&FR Act 2001", term: "Seed Sovereignty" },
                        question: "Critically analyze the Draft Seeds Bill 2025. Does it strike the right balance between corporate innovation and farmers' seed sovereignty?",
                        deepDive: `<h3>1. The Core Fear</h3><p>Indian agriculture relies on 'informal seed systems' where farmers exchange seeds. If the new Bill mandates that only 'registered' seeds can be sold, it could criminalize traditional practices and increase input costs. <br><h3>2. International Pressure</h3><p>Global trade agreements often push for strict IPR on seeds (UPOV convention). India has resisted this to protect smallholders.</p>`
                    },
                    {
                        title: "India's Disaster Response: The Federal Faultline",
                        source: "The Hindu Editorial",
                        paper: "GS Paper 2",
                        topic: "Federalism & Disaster Management",
                        originalLink: "https://www.thehindu.com/opinion/op-ed/indias-disaster-response-a-slippery-slope-for-federalism/article70335627.ece",
                        context: "The disparity in central aid distribution (e.g., ₹260 Cr for Kerala vs. ₹2200 Cr demand) highlights the politicization of disaster relief funds (NDRF).",
                        keyPoints: [
                            "<strong>Discretionary Power:</strong> The Centre has vast discretion in declaring a 'calamity of severe nature', which triggers funding.",
                            "<strong>Fiscal Stress:</strong> States bear the immediate burden of relief but lack the fiscal space (due to GST constraints) to borrow more.",
                            "<strong>Delay as Denial:</strong> Long delays in central team visits and fund release undermine the purpose of emergency relief."
                        ],
                        wayForward: ["Institutionalize an objective formula for NDRF allocation.", "Declare 'National Calamities' based on scientific criteria, not political discretion."],
                        fodder: { fund: "NDRF / SDRF", article: "Article 280 (Finance Commission Role)" },
                        question: "The politicization of disaster relief funds threatens the federal fabric of India. Discuss with reference to recent controversies.",
                        deepDive: `<h3>1. The Mechanism</h3><p>States have the SDRF (State Disaster Response Fund). When that is exhausted, they seek NDRF funds. The Centre sends an 'Inter-Ministerial Central Team' (IMCT) to assess damage. <br><h3>2. The Problem</h3><p>There is no statutory time limit for the IMCT to submit its report or for the Home Ministry to release funds, leaving opposition-ruled states vulnerable.</p>`
                    }
                ]
            },
        
    '2025-11-29': {
                dateLabel: 'November 29, 2025',
                articles: [
                    {
                        title: "Reviving Textiles: The Tex-RAMPS Scheme",
                        source: "The Hindu",
                        paper: "GS Paper 3",
                        topic: "Economy & Infrastructure",
                        originalLink: "https://www.thehindu.com/business/Industry/govt-approves-tex-ramps-scheme/article67584932.ece",
                        context: "The Cabinet has approved the 'Tex-RAMPS' scheme with an outlay of ₹305 crore to modernize the textile sector and boost technical textiles.",
                        keyPoints: [
                            "<strong>Innovation Focus:</strong> Aimed at creating a national ecosystem for R&D in technical textiles and smart fabrics.",
                            "<strong>Data Integration:</strong> Implementation of the Integrated Textiles Statistical System (ITSS) for real-time monitoring.",
                            "<strong>Competitiveness:</strong> targeted at bridging the technology gap with competitors like China and Vietnam."
                        ],
                        wayForward: ["Accelerate adoption of high-end machinery.", "Focus on 'Farm to Fashion' value chain integration."],
                        fodder: { stat: "India is the 6th largest textile exporter.", keyword: "Technical Textiles" },
                        question: "Critically analyze the objectives and potential impact of the Tex-RAMPS scheme in addressing the structural challenges of the Indian textile sector.",
                        deepDive: `<h3>1. Why Tex-RAMPS?</h3><p>The textile sector is the second-largest employer after agriculture but suffers from obsolete technology. Tex-RAMPS moves beyond subsidies to focus on <strong>innovation and data</strong>. It aims to shift India from 'commodity textiles' (cotton yarn) to 'value-added textiles' (technical fabrics used in medical and defense).</p>`
                    },
                    {
                        title: "Regulating User Content: Free Speech vs. Harm",
                        source: "The Indian Express",
                        paper: "GS Paper 2",
                        topic: "Governance & Polity",
                        originalLink: "https://indianexpress.com/article/india/sc-calls-for-framework-on-online-content-9045621/",
                        context: "The Supreme Court has urged the government to frame a robust mechanism to regulate harmful User-Generated Content (UGC) on social media.",
                        keyPoints: [
                            "<strong>The Conflict:</strong> Balancing Article 19(1)(a) (Free Speech) with the state's duty to protect citizens from cyber-harm.",
                            "<strong>Preventive vs. Punitive:</strong> The debate is shifting from 'taking down' content to 'preventing' upload, which risks censorship.",
                            "<strong>Intermediary Liability:</strong> Platforms may lose 'Safe Harbour' protection if they fail to act on harmful content."
                        ],
                        wayForward: ["Define 'harmful content' precisely to avoid ambiguity.", "Adopt a 'Co-regulatory' model involving platforms and civil society."],
                        fodder: { case: "Shreya Singhal vs. Union of India", article: "Article 19(2) (Reasonable Restrictions)" },
                        question: "The regulation of online User-Generated Content presents a friction between constitutional free speech and the state's ethical obligation. Discuss.",
                        deepDive: `<h3>1. The 'Chilling Effect'</h3><p>Critics argue that strict preventive filtering algorithms will lead to a 'chilling effect' where legitimate speech is suppressed by automated bots to avoid liability. <br><h3>2. Global Standards</h3><p>India is looking at the EU's <strong>Digital Services Act (DSA)</strong> as a template, which imposes heavy fines on platforms for failing to police illegal content.</p>`
                    },
                    {
                        title: "Air Pollution: A Governance Failure, Not Just Science",
                        source: "The Hindu Editorial",
                        paper: "GS Paper 3",
                        topic: "Environment",
                        originalLink: "https://www.thehindu.com/opinion/editorial/clearing-the-air-governance-deficit/article67592011.ece",
                        context: "Analysis shows that India's pollution crisis is perpetuated by fragmented governance and a lack of coordination between Centre and States.",
                        keyPoints: [
                            "<strong>Fragmented Powers:</strong> Multiple bodies (CPCB, SPCBs, CAQM) often work in silos with overlapping jurisdictions.",
                            "<strong>The 'Western Trap':</strong> Copying Euro norms without adapting to local dust and biomass burning realities.",
                            "<strong>Short-termism:</strong> Reliance on 'odd-even' and 'smog towers' instead of long-term public transport overhaul."
                        ],
                        wayForward: ["Unified 'Airshed' Management Authority.", "Legal mandate for inter-state cooperation."],
                        fodder: { concept: "Airshed Management", fact: "India hosts 9 of the 10 most polluted cities." },
                        question: "The air pollution crisis in India is less a scientific problem and more a challenge of governance design. Analyze.",
                        deepDive: `<h3>1. The CAQM Failure</h3><p>The Commission for Air Quality Management (CAQM) was formed to coordinate between Delhi, Punjab, and Haryana. However, it lacks political teeth to penalize states for farm fires, rendering it a 'paper tiger'. Effective pollution control requires a <strong>federal consensus</strong> similar to the GST Council.</p>`
                    },
                    {
                        title: "Genome-Edited Crops: The Next Green Revolution?",
                        source: "The Indian Express",
                        paper: "GS Paper 3",
                        topic: "Science & Technology",
                        originalLink: "https://indianexpress.com/article/explained/genome-editing-vs-gm-crops-explained-9048123/",
                        context: "India is aggressively pushing for Genome-Edited (GE) crops (SDN 1 & 2) to ensure food security, distinguishing them from traditional GM crops.",
                        keyPoints: [
                            "<strong>GE vs. GM:</strong> GE involves 'editing' existing genes (CRISPR), whereas GM involves introducing 'foreign' genes.",
                            "<strong>Regulatory Ease:</strong> GE crops (SDN 1/2) are exempted from stringent GM regulations, allowing faster commercial release.",
                            "<strong>Climate Resilience:</strong> Focus is on developing drought-resistant and nutrient-fortified varieties."
                        ],
                        wayForward: ["Public awareness campaigns to dispel safety fears.", "Strong IPR framework to encourage private R&D."],
                        fodder: { tech: "CRISPR-Cas9", term: "Biofortification" },
                        question: "Differentiate between Genetically Modified (GM) and Genome-Edited (GE) crops. How can GE technology address climate change challenges in agriculture?",
                        deepDive: `<h3>1. Why the Shift?</h3><p>Traditional GM crops (like Bt Brinjal) faced immense public opposition and regulatory paralysis. GE crops mimic 'natural mutation' and are safer. <br><h3>2. The Opportunity</h3><p>With climate change causing erratic monsoons, India needs crops that can survive heat stress. GE technology allows scientists to 'switch on' dormant stress-tolerance genes in rice and wheat.</p>`
                    },
                    {
                        title: "The Kamalesan Case: Conscience vs. Uniform",
                        source: "Live Law",
                        paper: "GS Paper 4",
                        topic: "Ethics in Public Service",
                        originalLink: "https://www.livelaw.in/top-stories/armed-forces-discipline-religious-freedom-kamalesan-case-243561",
                        context: "A military tribunal upheld the dismissal of an officer who refused to follow dress/conduct codes citing religious conscience, sparking ethical debate.",
                        keyPoints: [
                            "<strong>The Conflict:</strong> Article 25 (Religious Freedom) vs. Military Discipline and Secular Uniformity.",
                            "<strong>Esprit de Corps:</strong> The armed forces rely on total cohesion; individualism is often seen as a threat to operational unity.",
                            "<strong>Substance over Form:</strong> Could a minor accommodation have been made without breaking the chain of command?"
                        ],
                        wayForward: ["Review dress codes for reasonable accommodation.", "Sensitivity training for command structures."],
                        fodder: { principle: "Substance over Form", value: "Organizational Integrity" },
                        question: "The need for uniformity in the Armed Forces often clashes with individual conscience. Discuss the ethical dilemma this presents.",
                        deepDive: `<h3>1. The Ethical Framework</h3><p>In public administration, <strong>Deontology</strong> (Duty) often supersedes <strong>Individual Rights</strong> when national security is involved. The soldier voluntarily accepts restrictions on rights (Article 33) when donning the uniform. However, ethical leadership requires distinguishing between 'insubordination' and a 'crisis of conscience'.</p>`
                    }
                ]
            },

    '2025-11-28': {
                dateLabel: 'November 28, 2025',
                articles: [
                    {
                        title: "The Fine Balance: Reimagining Fiscal Federalism",
                        source: "The Hindu",
                        paper: "GS Paper 2",
                        topic: "Federalism & Centre-State Relations",
                        originalLink: "https://www.thehindu.com/opinion/lead",
                        context: "Mounting financial disputes between Centre and States regarding tax devolution, cesses, and conditional funding are straining the spirit of cooperative federalism.",
                        keyPoints: [
                            "<strong>Erosion of Trust:</strong> States argue that the Centre's increasing use of cesses/surcharges bypasses the divisible pool.",
                            "<strong>Conditional Funding:</strong> Rigid templates for Centrally Sponsored Schemes (CSS) restrict state autonomy.",
                            "<strong>Horizontal Imbalance:</strong> Disparities persist between fiscally strong and weak states in per capita transfers."
                        ],
                        wayForward: [
                            "<strong>Rationalize CSS:</strong> Provide states greater flexibility and matching grants.",
                            "<strong>Institutional Dialogue:</strong> Activate the Inter-State Council as a permanent dispute resolution forum."
                        ],
                        fodder: {
                            keyword: "Fiscally Federal Compact",
                            stat: "States receive 41% share (15th FC recs)."
                        },
                        question: "Critically analyze the challenges posed by the proliferation of cesses and surcharges on the divisible pool of taxes.",
                        deepDive: `
                            <h3>1. The Core Issue: Cesses and Surcharges</h3>
                            <p>Under <strong>Article 270</strong>, taxes are shared between Centre and States. However, <strong>Article 271</strong> allows the Centre to levy 'cess' and 'surcharge' which remain exclusively with the Centre. This share has grown from ~10% of gross tax revenue to over 20% recently, effectively shrinking the pie for states.</p>
                            <h3>2. The CSS Dilemma</h3>
                            <p>Centrally Sponsored Schemes (like PM Awas Yojana) require states to contribute 40% of funds but follow 100% of Centre's rules. States argue this 'One Size Fits All' approach fails in diverse regions like Kerala vs. Bihar.</p>
                            <h3>3. Constitutional Mechanism</h3>
                            <p>The <strong>Finance Commission (Article 280)</strong> is the constitutional arbiter. The 16th FC is currently deliberating on these exact issues to restore the fiscal balance.</p>
                        `
                    },
                    {
                        title: "The Green Pivot: Financing India’s Net Zero Ambition",
                        source: "The Indian Express",
                        paper: "GS Paper 3",
                        topic: "Environment & Economy",
                        originalLink: "https://indianexpress.com/section/explained/climate",
                        context: "Achieving the 'Panchamrit' goals requires massive capital. India is looking toward Green Bonds and global climate finance to fund this transition.",
                        keyPoints: [
                            "<strong>Capital Deficit:</strong> Net Zero by 2070 requires trillions; public funds are insufficient.",
                            "<strong>Green Bonds:</strong> Sovereign Green Bonds set a benchmark but face 'greenwashing' risks.",
                            "<strong>Just Transition:</strong> Moving away from coal must not destroy livelihoods in coal-dependent states."
                        ],
                        wayForward: [
                            "<strong>Robust Taxonomy:</strong> Legally define 'green' activities to prevent misuse of funds.",
                            "<strong>Risk Mitigation:</strong> Use 'First-Loss Guarantees' to de-risk private investments in Green Hydrogen."
                        ],
                        fodder: {
                            keyword: "Greenwashing",
                            target: "50% non-fossil capacity by 2030."
                        },
                        question: "Discuss the role of sustainable finance instruments and the challenges of ensuring a 'Just Transition' in India.",
                        deepDive: `
                            <h3>1. What is Sovereign Green Bond?</h3>
                            <p>It is a debt instrument issued by the government specifically to fund climate-friendly projects (solar parks, metro rails). It usually offers a slightly lower interest rate (Greenium) because investors want to support ESG goals.</p>
                            <h3>2. The 'Just Transition' Challenge</h3>
                            <p>States like Jharkhand and Odisha rely heavily on coal mining for revenue and employment. Closing mines without a transition plan will lead to economic collapse in these regions. A 'Just Transition' fund is needed to reskill these workers.</p>
                        `
                    },
                    {
                        title: "Demographic Dividend vs. Skill Gap",
                        source: "The Hindu",
                        paper: "GS Paper 1 & 3",
                        topic: "Society & Employment",
                        originalLink: "https://www.thehindu.com/business/Economy",
                        context: "With 65% working-age population, India has a 'dividend', but low employability and low female participation threaten to turn it into a liability.",
                        keyPoints: [
                            "<strong>The Paradox:</strong> High youth unemployment exists alongside a shortage of skilled workers for Industry 4.0.",
                            "<strong>Gender Gap:</strong> Female Labour Force Participation is rising but remains low compared to global peers.",
                            "<strong>Informal Trap:</strong> Most workers lack social security, preventing productivity gains."
                        ],
                        wayForward: [
                            "<strong>Apprenticeship Model:</strong> Shift from classroom vocational training to industry-led apprenticeships.",
                            "<strong>Care Economy:</strong> Invest in child-care infrastructure to boost female employment."
                        ],
                        fodder: {
                            data: "Only ~5% of workforce is formally skilled (PLFS).",
                            keyword: "Demographic Disaster"
                        },
                        question: "India’s demographic dividend is contingent on solving the paradox of high youth unemployment alongside a crippling skill gap. Elucidate.",
                        deepDive: `
                            <h3>1. The Window of Opportunity</h3>
                            <p>India's dependency ratio is at its lowest. This 'window' will close around 2055. If the youth are not employed now, they will become an aging burden without savings later.</p>
                            <h3>2. Structural Flaws in Skilling</h3>
                            <p>The <strong>Skill India Mission</strong> has focused on short-term courses (3 months). Industry experts argue that 3 months cannot replace the deep technical training provided by the German 'Dual VET' system (classroom + factory floor).</p>
                        `
                    },
                    {
                        title: "Shielding the Digital Fortress: Cyber Security",
                        source: "The Indian Express",
                        paper: "GS Paper 3",
                        topic: "Internal Security",
                        originalLink: "https://indianexpress.com/section/technology",
                        context: "Frequent attacks on critical sectors (banking, power) highlight the need for a robust framework to protect Critical Information Infrastructure (CII).",
                        keyPoints: [
                            "<strong>Systemic Risk:</strong> A power grid failure can cascade into banking and transport failures.",
                            "<strong>Regulatory Fragmentation:</strong> Multiple bodies (CERT-In, NCIIPC) often lack unified command.",
                            "<strong>Talent Shortage:</strong> Severe lack of skilled cyber-security professionals in government."
                        ],
                        wayForward: [
                            "<strong>Unified Command:</strong> Create a dedicated agency with enforcement powers over all sectors.",
                            "<strong>Mandatory Audits:</strong> Compulsory cyber-audits for all CII operators."
                        ],
                        fodder: {
                            act: "Digital Personal Data Protection Act 2023.",
                            concept: "Zero-Trust Architecture"
                        },
                        question: "Examine India's preparedness in protecting its Critical Information Infrastructure (CII) against cyber warfare.",
                        deepDive: `
                            <h3>1. What is CII?</h3>
                            <p>Defined under the IT Act 2000, <strong>Critical Information Infrastructure</strong> refers to assets (Power, Banking, Defense) whose destruction would have a debilitating impact on national security.</p>
                            <h3>2. The Institutional Framework</h3>
                            <p><strong>NCIIPC:</strong> Created specifically to protect CII.<br><strong>CERT-In:</strong> The national nodal agency for responding to cyber incidents.<br>Critics argue that coordination between these agencies is slow during real-time attacks (e.g., the AIIMS ransomware attack).</p>
                        `
                    },
                    {
                        title: "The Moral Compass: Corporate Governance Ethics",
                        source: "Live Mint / Business Standard",
                        paper: "GS Paper 4",
                        topic: "Ethics & Corporate Governance",
                        originalLink: "https://www.livemint.com/opinion",
                        context: "High-profile lapses in corporate governance highlight the conflict between profit maximization and ethical responsibility.",
                        keyPoints: [
                            "<strong>Fiduciary vs. Stakeholder:</strong> Leaders often prioritize shareholders over employees and environment.",
                            "<strong>Board Failures:</strong> Independent directors often lack the power or will to check management overreach.",
                            "<strong>Tech Ethics:</strong> AI deployment is creating new ethical voids outpacing regulations."
                        ],
                        wayForward: [
                            "<strong>Ethics by Design:</strong> Mandate ethical impact assessments for new tech.",
                            "<strong>Whistleblower Protection:</strong> Strengthen mechanisms to encourage internal reporting."
                        ],
                        fodder: {
                            quote: "'The time is always right to do what is right' - MLK Jr.",
                            concept: "Nolan Principles"
                        },
                        question: "Corporate governance must move beyond compliance to embrace ethical leadership. Discuss with reference to recent dilemmas.",
                        deepDive: `
                            <h3>1. The Shift to Stakeholder Capitalism</h3>
                            <p>Milton Friedman's doctrine ("The business of business is business") is outdated. The new global standard is <strong>ESG (Environmental, Social, Governance)</strong>, where a company is judged on how it treats its workers and the planet, not just its profits.</p>
                            <h3>2. Role of Independent Directors</h3>
                            <p>Under the Companies Act 2013, Independent Directors are the 'conscience keepers' of the board. However, in promoter-driven Indian firms, they are often rubber stamps. Strengthening their liability and independence is crucial for ethical governance.</p>
                        `
                    }
                ]
         },        

     '2025-11-27': {
                dateLabel: 'November 27, 2025',
                articles: [
                    {
                        title: "The Federal Tussle: States vs. Central Labour Codes",
                        source: "The Indian Express",
                        paper: "GS Paper 2 & 3",
                        topic: "Federalism, Labour Reforms",
                        originalLink: "https://indianexpress.com",
                        context: "Kerala has officially announced it will not implement the new Central Labour Codes, setting up a constitutional confrontation with the Centre.",
                        keyPoints: [
                            "<strong>Uniformity vs. Autonomy:</strong> The Centre aims to replace 29 complex labour laws with 4 simplified codes.",
                            "<strong>'Hire and Fire' Fear:</strong> Trade Unions argue the Industrial Relations Code allows easier firing.",
                            "<strong>Federal Friction:</strong> Labour is in the Concurrent List, allowing State amendments."
                        ],
                        wayForward: ["Use Inter-State Council for consensus.", "Operationalize Social Security Fund for gig workers."],
                        fodder: { stat: "90% of workforce is unorganized.", keyword: "Article 254(2)" },
                        question: "Discuss the challenges in implementing the new Labour Codes in light of recent Centre-State friction.",
                        deepDive: `
                            <h3>1. Historical Background</h3>
                            <p>Labour laws in India have historically been fragmented. The 2nd National Commission on Labour (2002) recommended consolidating them. The parliament passed 4 codes in 2019-2020: Code on Wages, Industrial Relations Code, Social Security Code, and OSH Code.</p>
                            <h3>2. The Constitutional Conflict</h3>
                            <p>Labour is a subject in the <strong>Concurrent List (Entry 24)</strong>. This means both Parliament and State Assemblies can make laws. However, under <strong>Article 254(2)</strong>, if a State law contradicts a Central law, the State law can prevail <em>only if</em> it receives the President's assent.</p>
                        `
                    },
                    {
                        title: "Breaking the Dragon’s Grip: India’s Rare Earth Mission",
                        source: "The Hindu",
                        paper: "GS Paper 1 & 3",
                        topic: "Resources, Indigenization",
                        originalLink: "https://thehindu.com",
                        context: "Union Cabinet approved ₹7,280 crore scheme for Rare Earth Permanent Magnets (REPMs) to reduce China dependence.",
                        keyPoints: [
                            "<strong>Strategic Vulnerability:</strong> India imports nearly 100% of REPMs.",
                            "<strong>China's Monopoly:</strong> China controls 80% of global processing.",
                            "<strong>The 'Missing Link':</strong> India has reserves but lacks midstream processing tech."
                        ],
                        wayForward: ["Viability Gap Funding for private players.", "Accelerate Samudrayaan Mission."],
                        fodder: { keyword: "Critical Minerals", fact: "REPMs are 3x stronger than normal magnets." },
                        question: "Analyze India's vulnerabilities in the critical mineral supply chain and steps taken to address them.",
                        deepDive: `
                            <h3>1. What are Rare Earth Elements (REEs)?</h3>
                            <p>A set of 17 chemical elements in the periodic table (Lanthanides + Scandium + Yttrium). They are not actually "rare" but are difficult to extract in pure form without environmental damage.</p>
                            <h3>2. Why the Sudden Urgency?</h3>
                            <p>China recently banned the export of "Rare Earth Processing Technology." Since REEs are critical for <strong>fighter jets, missile guidance, and EV batteries</strong>, this is a direct national security threat.</p>
                        `
                    },
                    {
                        title: "Air Pollution: No Longer just a 'Winter Problem'",
                        source: "The Hindu Editorial",
                        paper: "GS Paper 3",
                        topic: "Pollution",
                        originalLink: "https://thehindu.com",
                        context: "Study reveals 60% of Indian districts breach annual PM2.5 limits, debunking the myth that pollution is limited to Delhi winter smog.",
                        keyPoints: [
                            "<strong>'Pan-India' Crisis:</strong> Hotspots shifted to Eastern India and Maharashtra.",
                            "<strong>Policy Failure:</strong> NCAP focuses on 'dust management' rather than industrial emissions.",
                            "<strong>Health Cost:</strong> Chronic exposure linked to reduced life expectancy."
                        ],
                        wayForward: ["Regional Airshed Management.", "Cap industrial emissions in NCAP 2.0."],
                        fodder: { data: "147/749 districts failed safety limits.", quote: "Pollution is a silent pandemic." },
                        question: "Critically evaluate the performance of the National Clean Air Programme (NCAP) in Tier-2 cities.",
                        deepDive: `<h3>1. Failure of NCAP</h3><p>Launched in 2019, the NCAP aimed for a 20-30% reduction in PM2.5 by 2024. However, it lacks legal backing. Most funds were spent on road dust sweepers rather than controlling thermal power plant emissions.</p>`
                    },
                    {
                        title: "Reversing Brain Drain: 'Star Faculty' Scheme",
                        source: "Indian Express",
                        paper: "GS Paper 2",
                        topic: "Education",
                        originalLink: "https://indianexpress.com",
                        context: "Centre launching scheme to repatriate Indian-origin scientists from global universities to IITs/IISERs.",
                        keyPoints: [
                            "<strong>The Problem:</strong> Low funding and red tape hinder retention.",
                            "<strong>Geopolitical Window:</strong> Western restrictions on researchers give India an opening.",
                            "<strong>The Barrier:</strong> Lack of seamless 'Lab Ecosystem' in India."
                        ],
                        wayForward: ["Lateral Entry bypassing seniority.", "Emulate China's 'Thousand Talents Plan'."],
                        fodder: { keyword: "Brain Gain", stat: "India spends only 0.65% of GDP on R&D." },
                        question: "Discuss structural bottlenecks in India’s higher education hindering talent repatriation.",
                        deepDive: `<h3>1. Push and Pull Factors</h3><p><strong>Push:</strong> Lack of autonomy, rigid salary caps (UGC norms).<br><strong>Pull:</strong> Family ties and growing Indian economy.</p>`
                    },
                    {
                        title: "The Ethics of Humor: SC on Reformative Justice",
                        source: "Live Law",
                        paper: "GS Paper 4",
                        topic: "Ethics",
                        originalLink: "https://livelaw.in",
                        context: "Supreme Court directed comedians mocking disability to host awareness shows instead of facing jail time.",
                        keyPoints: [
                            "<strong>Ethical Dilemma:</strong> Free Speech vs. Right to Dignity.",
                            "<strong>Punching Down:</strong> Humor should not mock the vulnerable.",
                            "<strong>Reformative Justice:</strong> 'Constructive Penance' over punishment."
                        ],
                        wayForward: ["Influencers have 'duty of care'.", "Need laws for hate speech against disabled."],
                        fodder: { term: "Gandhian Talisman", utility: "Case study for Emotional Intelligence." },
                        question: "Analyze the ethical responsibilities of social media influencers in shaping public attitudes.",
                        deepDive: `<h3>1. Reformative vs Retributive Justice</h3><p><strong>Retributive:</strong> Punish the offender (Jail). <br><strong>Reformative:</strong> Change the offender (Community Service).</p>`
                    }
                ]
            }
};
        






