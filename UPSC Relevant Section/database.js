        // --- DATA SECTION ---
const articlesDB = {
            '2025-12-01': {
                dateLabel: 'December 1, 2025',
                articles: [
                    {
                        title: "R&D Stagnation: The Need for an Innovation Ecosystem",
                        source: "The Hindu Editorial",
                        paper: "GS Paper 3",
                        topic: "Science & Technology / Economic Growth",
                        originalLink: "https://www.thehindu.com/opinion/editorial/the-need-for-an-rd-driven-ecosystem/article67923456.ece",
                        context: "India's Gross Expenditure on R&D (GERD) remains stagnant at 0.7% of GDP, threatening the 'Viksit Bharat 2047' vision. The editorial argues for a paradigm shift from government-led to private-sector-led innovation.",
                        keyPoints: [
                            "<strong>Investment Gap:</strong> While global peers like South Korea spend over 4% of GDP on R&D, India lags behind due to low private sector participation (less than 40% of total GERD).",
                            "<strong>The 'Valley of Death':</strong> Excellent academic research often fails to translate into commercial products due to a lack of translational funding and industry-academia linkage.",
                            "<strong>Brain Drain to Brain Gain:</strong> Retaining top talent requires competitive grants, modern infrastructure, and freedom from bureaucratic red tape."
                        ],
                        wayForward: ["Operationalize the National Research Foundation (NRF) with speed.", "Incentivize private R&D through tax breaks and matching grants."],
                        fodder: { data: "GERD stagnant at ~0.7% for two decades.", institution: "National Research Foundation (NRF)" },
                        question: "India's ambition to become a developed nation hinges on its ability to innovate. Analyze the structural bottlenecks in India's R&D ecosystem and suggest remedial measures.",
                        deepDive: `<h3>1. The Private Sector Challenge</h3><p>In developed economies, the private sector contributes >70% of R&D funding. In India, it is <40%. Indian corporate culture often prioritizes technology import over indigenous development due to risk aversion. <br><h3>2. The NRF Solution</h3><p>The Anusandhan National Research Foundation (ANRF) Act, 2023, aims to seed research in universities (beyond IITs) and forge partnerships with industry to democratize innovation.</p>`
                    },
                    {
                        title: "The Governor's Role: Constitutional Propriety vs. Politics",
                        source: "The Indian Express",
                        paper: "GS Paper 2",
                        topic: "Federalism & Role of Governor",
                        originalLink: "https://indianexpress.com/article/opinion/columns/governors-role-constitutional-propriety-9065432/",
                        context: "Recent friction between Governors and State Governments in Tamil Nadu and Kerala over withholding assent to Bills has reignited the debate on the discretionary powers of the Governor.",
                        keyPoints: [
                            "<strong>Discretionary Powers:</strong> Article 200 gives the Governor power to assent, withhold assent, or reserve a Bill. However, the Supreme Court has ruled that this power cannot be used to veto elected legislatures indefinitely.",
                            "<strong>Agent vs. Head:</strong> The Governor is often perceived as an 'agent of the Centre' rather than a neutral constitutional head, eroding cooperative federalism.",
                            "<strong>Supreme Court's Stance:</strong> In the Punjab case (2023), the SC clarified that Governors must act 'as soon as possible' and cannot sit on Bills to paralyze administration."
                        ],
                        wayForward: ["Implement Sarkaria Commission reforms on Governor appointment.", "Codify a timeline for assent to Bills in the Constitution."],
                        fodder: { case: "Shamsher Singh vs State of Punjab (1974)", article: "Article 200 (Assent to Bills)" },
                        question: "The office of the Governor has often been a flashpoint in Centre-State relations. Discuss the constitutional provisions regarding the Governor's legislative powers and the Supreme Court's interpretation of the same.",
                        deepDive: `<h3>1. The Constitutional Intent</h3><p>The Constituent Assembly debated an elected Governor but chose a nominated one to preserve national unity. However, it was expected that the Governor would be a 'constitutional figurehead' acting on the aid and advice of the Council of Ministers (except in rare cases). <br><h3>2. The 'Pocket Veto'</h3><p>The Constitution does not specify a time limit for the Governor to act on a Bill. This loophole is often exploited to delay state legislation, effectively acting as a 'Pocket Veto'.</p>`
                    },
                    {
                        title: "Ending AIDS by 2030: India's Progress and Gaps",
                        source: "The Hindu",
                        paper: "GS Paper 2",
                        topic: "Health & Social Issues",
                        originalLink: "https://www.thehindu.com/sci-tech/health/world-aids-day-india-progress-2030-target/article67925678.ece",
                        context: "On World AIDS Day (Dec 1), reports indicate India is on track to meet the SDG target of ending the AIDS epidemic by 2030, but stigma and uneven access remain hurdles.",
                        keyPoints: [
                            "<strong>Success Story:</strong> India's National AIDS Control Programme (NACP) has successfully reversed the epidemic trend, with a significant decline in new infections and AIDS-related deaths.",
                            "<strong>The 'Last Mile':</strong> Reaching high-risk groups (Key Populations) and ensuring adherence to Antiretroviral Therapy (ART) is critical to suppress viral loads.",
                            "<strong>Stigma:</strong> The HIV/AIDS (Prevention and Control) Act, 2017 criminalizes discrimination, yet social ostracization persists, hindering testing and treatment."
                        ],
                        wayForward: ["Community-led testing initiatives to reduce stigma.", "Focus on 'Prevention' through Pre-Exposure Prophylaxis (PrEP)."],
                        fodder: { target: "95-95-95 Strategy (UNAIDS)", act: "HIV/AIDS (Prevention and Control) Act, 2017" },
                        question: "Assess India's performance in combating HIV/AIDS. What are the remaining socio-legal challenges in achieving the 2030 elimination target?",
                        deepDive: `<h3>1. The 95-95-95 Target</h3><p>This UNAIDS goal aims for: 95% of PLHIV knowing their status, 95% of those diagnosed on ART, and 95% of those on ART achieving viral suppression. India is close but lags in the first pillar (testing). <br><h3>2. The Free ART Initiative</h3><p>India provides free Antiretroviral Therapy (ART) to all diagnosed patients. This has transformed HIV from a 'death sentence' to a manageable chronic condition.</p>`
                    },
                    {
                        title: "Institutionalizing Animal Representation in Governance",
                        source: "The Indian Express",
                        paper: "GS Paper 4 / GS Paper 2",
                        topic: "Ethics & Governance",
                        originalLink: "https://indianexpress.com/article/opinion/columns/animal-welfare-governance-representation-9068901/",
                        context: "With rising human-animal conflict (stray dogs, wildlife encroachment), experts argue for a dedicated statutory body to represent animal interests in urban planning and policy.",
                        keyPoints: [
                            "<strong>Anthropocentric Bias:</strong> Current development models prioritize human convenience over ecological balance, leading to habitat loss and conflict.",
                            "<strong>Ethical Imperative:</strong> The Constitution (Article 51A(g)) mandates compassion for living creatures. Institutionalizing this requires a body like a 'National Animal Welfare Commission'.",
                            "<strong>One Health Approach:</strong> Animal health is intrinsically linked to human health (zoonotic diseases). Neglecting animal welfare poses public health risks."
                        ],
                        wayForward: ["Establish a 'National Animal Welfare Authority' with enforcement powers.", "Mandate 'Animal Impact Assessment' for major infrastructure projects."],
                        fodder: { article: "Article 51A(g) (Fundamental Duty)", concept: "One Health" },
                        question: "Does the Indian governance structure adequately represent the interests of non-human stakeholders? Discuss the ethical and practical need for institutionalizing animal welfare.",
                        deepDive: `<h3>1. The Legal Void</h3><p>The Animal Welfare Board of India (AWBI) is an advisory body with limited teeth. Cruelty cases are often punishable by meager fines (₹50) under the old PCA Act, 1960. <br><h3>2. Urban Planning Failure</h3><p>Smart Cities often lack designated spaces for community animals, leading to conflicts. A dedicated body would ensure that urban design accommodates co-existence.</p>`
                    },
                    {
                        title: "Electoral Roll Integrity: The SIR Controversy",
                        source: "The Hindu",
                        paper: "GS Paper 2",
                        topic: "Elections & Democracy",
                        originalLink: "https://www.thehindu.com/news/national/opposition-raises-sir-concerns-all-party-meet/article67928901.ece",
                        context: "Opposition parties have demanded a debate on the Special Intensive Revision (SIR) of electoral rolls, alleging mass deletion of voters without due process.",
                        keyPoints: [
                            "<strong>Inclusion vs. Exclusion:</strong> While ECI aims to clean the rolls (remove duplicates/deceased), errors can lead to the disenfranchisement of genuine voters.",
                            "<strong>Due Process:</strong> The ECI mandates notice and verification before deletion, but ground reports suggest arbitrary deletions in some constituencies.",
                            "<strong>Technological safeguards:</strong> Use of AI/ML to identify duplicates must be backed by physical verification to prevent algorithmic bias."
                        ],
                        wayForward: ["Transparency in deletion lists (public display).", "Empower BLOs (Block Level Officers) with better training and accountability."],
                        fodder: { body: "Election Commission of India (ECI)", term: "Electoral Roll Revision" },
                        question: "The integrity of the electoral roll is the bedrock of free and fair elections. Discuss the challenges in maintaining accurate rolls in a populous democracy like India.",
                        deepDive: `<h3>1. The Magnitude</h3><p>India has over 950 million voters. Maintaining an error-free list is a massive administrative challenge. <br><h3>2. The Linkage Debate</h3><p>Linking Aadhaar with Voter ID was proposed as a solution to weed out duplicates (bogus voters), but it raises privacy concerns and fears of voter profiling. The Supreme Court is currently seizing of the matter.</p>`
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
        



