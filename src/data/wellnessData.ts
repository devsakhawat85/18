import { Modality, Pillar, FAQItem } from '../types';

export const BRAND = {
  name: "18 Wellness",
  fullName: "Eighteen Wellness",
  headline: "Building the leading platform in regenerative medicine, longevity and wellness.",
  subheadline: "We invest in growing clinics, actively help them scale, and provide structured exit and retirement solutions to owners.",
  mission: "Our group is set up to invest in growing clinics, actively help them scale or provide an exit/retirement solution to owners. We invest capital to increase the number of clinic/studio locations, help reduce customer acquisition costs, improve business operations, and increase the overall experience at the clinic level.",
  email: "info@eighteenwellness.com",
  emblemSvg: "/brand-assets/emblem.svg",
  images: {
    heroSculptural: "/brand-assets/hero-sculptural.png",
    antiAging: "/brand-assets/anti-aging.png",
    wellnessOptimization: "/brand-assets/wellness-optimization.png",
    longevity: "/brand-assets/longevity.png",
    contactInterior: "/brand-assets/contact-interior.png",
    clinicInterior: "/src/assets/images/wellness_clinic_interior_1792395848635.jpg",
    diagnosticSuite: "/src/assets/images/longevity_diagnostic_suite_1792395849423.jpg",
    recoveryLounge: "/src/assets/images/hyperbaric_recovery_lounge_1792395849243.jpg",
    partnerCollaboration: "/src/assets/images/clinical_partner_collaboration_1792395849727.jpg",
  }
};

export const CORE_PILLARS: Pillar[] = [
  {
    id: 'anti-aging',
    title: 'Anti-Aging',
    subtitle: 'Aesthetic Medicine & Regenerative Tissue Architecture',
    tagline: 'Preserving youthful cellular vitality through advanced neuromodulation, collagen synthesis, and non-invasive tissue contouring.',
    description: 'Our aesthetic and anti-aging protocols combine proven dermatological precision with next-generation cellular biostimulation to deliver subtle, natural, and restorative rejuvenation.',
    image: BRAND.images.antiAging,
    clinicalSignificance: 'High patient lifetime value and repeat monthly appointments, anchored by evidence-based regenerative dermal therapies.',
    modalities: [
      'Wrinkle Relaxers',
      'Laser Treatments',
      'Microneedling',
      'Collagen Biostimulators',
      'Contouring / EMSculpting'
    ]
  },
  {
    id: 'wellness-optimization',
    title: 'Wellness Optimization',
    subtitle: 'Systemic Resilience & Cellular Recovery Therapies',
    tagline: 'Accelerating recovery, mitochondrial efficiency, and metabolic homeostasis through state-of-the-art restorative physical modalities.',
    description: 'Designed for daily recovery, peak physical readiness, and biological balance. We equip partner clinics with turnkey recovery circuits that patients look forward to weekly.',
    image: BRAND.images.wellnessOptimization,
    clinicalSignificance: 'Drives recurring membership revenue and daily clinic foot traffic with high-margin, tech-enabled wellness circuits.',
    modalities: [
      'AI Bodyscan',
      'Cryotherapy / Red Light',
      'Sauna / Cold Plunge',
      'Ozone Therapy',
      'Hyperbaric Chambers',
      'IV Vitamin Drips',
      'B12 Shots'
    ]
  },
  {
    id: 'longevity',
    title: 'Longevity',
    subtitle: 'Regenerative Diagnostics & Precision Biomarker Management',
    tagline: 'Extending healthspan through proactive metabolic analytics, peptide protocols, and targeted cellular rejuvenation therapies.',
    description: 'The foundation of modern regenerative medicine. By establishing baseline biomarkers and metabolic profiling, we enable partner clinics to offer personalized life-extension programs.',
    image: BRAND.images.longevity,
    clinicalSignificance: 'Positioned at the highest-margin tier of private health, converting reactive patients into lifelong healthspan members.',
    modalities: [
      'Full Body Diagnostics',
      'Gut Health Analysis',
      'Peptides',
      'Metabolic Testing',
      'Semaglutide / GLP-1',
      'Biomarkers Testing',
      'Hormone Therapy',
      'NAD+ Therapy'
    ]
  }
];

export const MODALITIES_CATALOG: Modality[] = [
  // Anti-Aging
  {
    id: 'wrinkle-relaxers',
    name: 'Wrinkle Relaxers',
    category: 'anti-aging',
    categoryName: 'Anti-Aging',
    shortDescription: 'Precision neurotoxin injectables to soften expression lines while maintaining natural facial animation.',
    clinicalFocus: 'Targeted relaxation of hyperdynamic facial musculature to prevent deep dermal creasing.',
    typicalCadence: 'Every 3 to 4 months for maintenance.',
    clinicValue: 'Core retention driver with high patient compliance and predictable repeat booking cadence.',
    keyBenefits: ['Smooths dynamic forehead, glabella, and crow\'s feet lines', 'Preventative micro-dosing protocols', 'Minimal downtime, immediate return to routine']
  },
  {
    id: 'laser-treatments',
    name: 'Laser Treatments',
    category: 'anti-aging',
    categoryName: 'Anti-Aging',
    shortDescription: 'Non-ablative and fractional photothermal resurfacing for pigmentation, tone, and skin texture refinement.',
    clinicalFocus: 'Photorejuvenation stimulating dermal remodeling and melanin clearance.',
    typicalCadence: 'Series of 3–5 initial sessions, followed by bi-annual maintenance.',
    clinicValue: 'High per-hour margin utilization of capital-efficient clinical devices.',
    keyBenefits: ['Evens sun damage and vascular redness', 'Refines pores and fine surface lines', 'Clinically controlled depth profiling']
  },
  {
    id: 'microneedling',
    name: 'Microneedling',
    category: 'anti-aging',
    categoryName: 'Anti-Aging',
    shortDescription: 'Controlled micro-injury induction paired with regenerative serums and exosome delivery.',
    clinicalFocus: 'Natural wound healing response triggering neo-collagenesis and elastin matrix production.',
    typicalCadence: 'Monthly courses of 3–6 sessions.',
    clinicValue: 'High-demand entry modality with excellent bundling potential with peptides and PRP.',
    keyBenefits: ['Improves scar tissue and crepey skin', 'Dramatically improves topical nutrient permeability', 'Safe across diverse skin phototypes']
  },
  {
    id: 'collagen-biostimulators',
    name: 'Collagen Biostimulators',
    category: 'anti-aging',
    categoryName: 'Anti-Aging',
    shortDescription: 'Poly-L-lactic acid and calcium hydroxylapatite microparticles that stimulate deep structural collagen regeneration.',
    clinicalFocus: 'Subdermal biostimulation addressing structural volume loss and skin laxity.',
    typicalCadence: '1–2 annual treatment sessions with results compounding over 24 months.',
    clinicValue: 'Premium average transaction value with high patient satisfaction.',
    keyBenefits: ['Gradual, natural-looking restoration', 'Long-lasting matrix rebuilding up to 2 years', 'Subtle volume without pillowy artificiality']
  },
  {
    id: 'contouring-emsculpting',
    name: 'Contouring / EMSculpting',
    category: 'anti-aging',
    categoryName: 'Anti-Aging',
    shortDescription: 'High-intensity focused electromagnetic energy inducing supramaximal muscle contractions and metabolic fat disruption.',
    clinicalFocus: 'Non-invasive core strengthening, muscle toning, and localized tissue firming.',
    typicalCadence: '4 initial sessions over 2 weeks, quarterly maintenance.',
    clinicValue: 'Hands-free operator workflow allowing simultaneous patient care in multi-room clinics.',
    keyBenefits: ['Up to 16% increase in muscle mass in clinical trials', 'Non-thermal, non-radiant body composition shifting', 'Completely non-invasive with zero recovery period']
  },

  // Wellness Optimization
  {
    id: 'ai-bodyscan',
    name: 'AI Bodyscan',
    category: 'wellness-optimization',
    categoryName: 'Wellness Optimization',
    shortDescription: 'Millimeter-accurate 3D biometric imaging that extracts body composition, visceral fat risks, and postural biomechanics.',
    clinicalFocus: 'Visualized biometric baseline and objective milestone measurement for every clinic visitor.',
    typicalCadence: 'Monthly or bi-monthly progress mapping.',
    clinicValue: 'The ultimate patient onboarding conversion tool, turning subjective intent into data-backed treatment plans.',
    keyBenefits: ['Sub-millimeter volumetric avatar mapping', 'Visceral fat and lean mass tracking', 'Visual validation of patient protocol success']
  },
  {
    id: 'cryotherapy-red-light',
    name: 'Cryotherapy / Red Light',
    category: 'wellness-optimization',
    categoryName: 'Wellness Optimization',
    shortDescription: 'Sub-zero cryo exposure paired with medical-grade 660nm/850nm photobiomodulation for systemic inflammation reduction.',
    clinicalFocus: 'Vasoconstriction followed by oxygenated reperfusion and cytochrome c oxidase stimulation.',
    typicalCadence: '2 to 3 sessions weekly as part of an active recovery membership.',
    clinicValue: 'Rapid 3-to-10 minute throughput driving high daily footfall and membership stickiness.',
    keyBenefits: ['Relieves muscular soreness and joint stiffness', 'Triggers endorphin and norepinephrine release', 'Boosts cellular ATP synthesis and collagen fibroblasts']
  },
  {
    id: 'sauna-cold-plunge',
    name: 'Sauna / Cold Plunge',
    category: 'wellness-optimization',
    categoryName: 'Wellness Optimization',
    shortDescription: 'Full-spectrum infrared and Finnish thermal contrast therapy combined with temperature-controlled immersion cold plunges.',
    clinicalFocus: 'Heat shock protein synthesis, vascular conditioning, and autonomic nervous system recalibration.',
    typicalCadence: 'Weekly or bi-weekly recovery circuits.',
    clinicValue: 'Flagship experiential draw that elevates the studio hospitality vibe.',
    keyBenefits: ['Promotes cardiovascular resilience and endothelial function', 'Dramatically improves sleep architecture and parasympathetic tone', 'Accelerates post-exertion lactic clearance']
  },
  {
    id: 'ozone-therapy',
    name: 'Ozone Therapy',
    category: 'wellness-optimization',
    categoryName: 'Wellness Optimization',
    shortDescription: 'Medical-grade oxygen-ozone gas mixtures delivering controlled oxidative preconditioning to enhance antioxidant enzymes.',
    clinicalFocus: 'Systemic oxygen utilization, immune system modulation, and microcirculation support.',
    typicalCadence: 'Series of 5–10 sessions depending on clinical protocol.',
    clinicValue: 'Specialized offering establishing clinic authority in progressive integrative health.',
    keyBenefits: ['Stimulates red blood cell glycolysis and 2,3-DPG', 'Upregulates endogenous glutathione and superoxide dismutase', 'Antimicrobial and immune balancing action']
  },
  {
    id: 'hyperbaric-chambers',
    name: 'Hyperbaric Chambers',
    category: 'wellness-optimization',
    categoryName: 'Wellness Optimization',
    shortDescription: 'Mild-to-moderate hyperbaric oxygen chambers (1.3–2.0 ATA) flooding plasma with dissolved bioavailable oxygen.',
    clinicalFocus: 'Angiogenesis, stem cell mobilization, and deep tissue ischemia alleviation.',
    typicalCadence: '45–60 minute sessions in 10 to 20 session protocols.',
    clinicValue: 'Premium restorative treatment favored by high-net-worth executives, athletes, and post-procedure clients.',
    keyBenefits: ['Up to 8x mobilization of circulating CD34+ stem cells', 'Reduces neurological brain fog and systemic neuro-inflammation', 'Accelerates wound healing and dermal remodeling']
  },
  {
    id: 'iv-vitamin-drips',
    name: 'IV Vitamin Drips',
    category: 'wellness-optimization',
    categoryName: 'Wellness Optimization',
    shortDescription: 'Intravenous infusions of electrolytes, high-dose antioxidants, amino acids, and micronutrients bypassing GI degradation.',
    clinicalFocus: '100% bioavailability for acute hydration, immune enhancement, and mitochondrial cofactors.',
    typicalCadence: 'Bi-weekly or monthly wellness infusions.',
    clinicValue: 'Highest-margin consumable service with social, relaxed lounge delivery.',
    keyBenefits: ['Immediate cellular hydration and energy replenishment', 'Customizable formulations (Immunity, Athletic, Radiance, Detox)', 'Administered by registered clinical nursing staff']
  },
  {
    id: 'b12-shots',
    name: 'B12 Shots',
    category: 'wellness-optimization',
    categoryName: 'Wellness Optimization',
    shortDescription: 'Concentrated intramuscular methylcobalamin and hydroxocobalamin for rapid metabolic and nervous system support.',
    clinicalFocus: 'Red blood cell formation, DNA methylation, and cellular energy production.',
    typicalCadence: 'Weekly or bi-weekly 5-minute injection visits.',
    clinicValue: 'Low friction add-on service that turns casual visitors into weekly regulars.',
    keyBenefits: ['Supports natural energy without caffeine crashes', 'Optimizes neurological function and cognitive clarity', 'Crucial for plant-based or metabolically stressed individuals']
  },

  // Longevity
  {
    id: 'full-body-diagnostics',
    name: 'Full Body Diagnostics',
    category: 'longevity',
    categoryName: 'Longevity & Diagnostics',
    shortDescription: 'Comprehensive multimodal body mapping assessing visceral organ density, arterial calcification, and systemic posture.',
    clinicalFocus: 'Early asymptomatic detection of structural and metabolic degeneration before clinical symptoms appear.',
    typicalCadence: 'Baseline upon clinic enrollment, followed by annual reviews.',
    clinicValue: 'Anchor of the premium longevity tier; commands substantial upfront program fees.',
    keyBenefits: ['Uncovers silent asymptomatic markers early', 'Establishes precise empirical biological baselines', 'Eliminates guesswork from individualized wellness care']
  },
  {
    id: 'gut-health-analysis',
    name: 'Gut Health Analysis',
    category: 'longevity',
    categoryName: 'Longevity & Diagnostics',
    shortDescription: 'Comprehensive stool microbiome sequencing and intestinal permeability (zonulin) profiling.',
    clinicalFocus: 'Microbiome diversity, SCFA production, systemic endotoxemia, and gut-brain axis balance.',
    typicalCadence: 'Baseline with 6-month post-intervention retesting.',
    clinicValue: 'Unlocks recurring revenue through physician-curated nutraceuticals and dietary protocols.',
    keyBenefits: ['Identifies dysbiosis, bacterial overgrowth, and inflammation triggers', 'Directly correlates with skin clarity, mood, and immunity', 'Actionable dietary and targeted probiotic recommendations']
  },
  {
    id: 'peptides',
    name: 'Peptides',
    category: 'longevity',
    categoryName: 'Longevity & Diagnostics',
    shortDescription: 'Therapeutic bio-signaling amino acid sequences (BPC-157, CJC/Ipamorelin, GHK-Cu, Thymosin Alpha-1).',
    clinicalFocus: 'Targeted biological cascades for tissue healing, growth hormone release, and immune defense.',
    typicalCadence: '8–12 week guided cycles under clinical supervision.',
    clinicValue: 'Fastest-growing category in modern longevity medicine with devoted patient adherence.',
    keyBenefits: ['Accelerates soft tissue, tendon, and ligament repair', 'Promotes deep restful sleep and lean body composition', 'Supports endogenous cellular repair signaling']
  },
  {
    id: 'metabolic-testing',
    name: 'Metabolic Testing',
    category: 'longevity',
    categoryName: 'Longevity & Diagnostics',
    shortDescription: 'Resting metabolic rate (RMR), VO2 max pulmonary assessment, and continuous glucose monitoring (CGM) analytics.',
    clinicalFocus: 'Mitochondrial substrate utilization (fat vs carbohydrate oxidation) and insulin sensitivity.',
    typicalCadence: 'Quarterly reassessments to measure adaptation.',
    clinicValue: 'Bridges aesthetic body goals with hard physiological performance data.',
    keyBenefits: ['Pinpoints precise caloric expenditure and training heart zones', 'Reveals glucose spikes and postprandial glycemic variability', 'Empowers truly personalized nutritional prescriptions']
  },
  {
    id: 'semaglutide-glp1',
    name: 'Semaglutide / GLP-1',
    category: 'longevity',
    categoryName: 'Longevity & Diagnostics',
    shortDescription: 'Medically supervised glucagon-like peptide-1 receptor agonist therapy paired with lean mass preservation protocols.',
    clinicalFocus: 'Appetite regulation, glycemic stabilization, and cardiometabolic risk reduction.',
    typicalCadence: 'Weekly titration protocol with comprehensive body composition monitoring.',
    clinicValue: 'Massive consumer demand; creates long-term recurring patient relationships with holistic clinic touchpoints.',
    keyBenefits: ['Clinically proven, sustainable body composition management', 'Improves cardiovascular biomarkers and lipid profiles', 'Administered alongside nutritional and resistance coaching']
  },
  {
    id: 'biomarkers-testing',
    name: 'Biomarkers Testing',
    category: 'longevity',
    categoryName: 'Longevity & Diagnostics',
    shortDescription: '100+ parameter comprehensive blood panel evaluating hs-CRP, ApoB, fasting insulin, homocysteine, and telomere length.',
    clinicalFocus: 'Systemic inflammation, cardiovascular risk, hormonal cascades, and biological aging score.',
    typicalCadence: 'Every 90 to 180 days to track biological age reversal.',
    clinicValue: 'The scientific compass for every longevity patient, justifying long-term clinic engagement.',
    keyBenefits: ['Exceeds standard routine annual physical metrics', 'Quantifies biological age vs chronological age', 'Real-time validation of therapy efficacy']
  },
  {
    id: 'hormone-therapy',
    name: 'Hormone Therapy',
    category: 'longevity',
    categoryName: 'Longevity & Diagnostics',
    shortDescription: 'Bioidentical hormone replacement therapy (BHRT) customized for thyroid, adrenal, testosterone, and estrogen equilibrium.',
    clinicalFocus: 'Restoring endocrine vitality, cognitive sharpness, bone density, and lean muscle synthesis.',
    typicalCadence: 'Ongoing quarterly monitoring and pellet/cream/subcutaneous adjustments.',
    clinicValue: 'Extremely high patient loyalty and lifelong recurring clinical relationship.',
    keyBenefits: ['Eliminates fatigue, hot flashes, brain fog, and low libido', 'Preserves bone mineral density and cardiovascular health', 'Bioidentical compounds closely matching human physiology']
  },
  {
    id: 'nad-therapy',
    name: 'NAD+ Therapy',
    category: 'longevity',
    categoryName: 'Longevity & Diagnostics',
    shortDescription: 'Intravenous or subcutaneous Nicotinamide Adenine Dinucleotide to supercharge cellular repair and sirtuin activation.',
    clinicalFocus: 'Mitochondrial redox balance, PARP enzyme activation, and DNA repair mechanisms.',
    typicalCadence: 'Intensive loading course followed by monthly maintenance drips or weekly subcutaneous micro-dosing.',
    clinicValue: 'High-ticket marquee service attracting longevity enthusiasts and biohackers.',
    keyBenefits: ['Re-energizes cellular mitochondria across all organ systems', 'Enhances mental clarity, executive focus, and memory', 'Supports DNA repair mechanisms against oxidative degradation']
  }
];

export const STRATEGIC_VECTORS = [
  {
    step: "01",
    title: "Strategic Growth Capital",
    description: "We provide dedicated expansion capital to scale studio square footage, open secondary and tertiary locations, and acquire state-of-the-art clinical devices.",
    metric: "Turnkey Capital",
    detail: "Direct equity & asset financing without predatory debt"
  },
  {
    step: "02",
    title: "CAC Reduction & Patient Demand",
    description: "Our centralized marketing engine, elevated brand collateral, and proven digital funnels dramatically reduce patient acquisition costs while attracting high-LTV clientele.",
    metric: "Centralized Acquisition",
    detail: "Omnichannel funnels tailored for regenerative care"
  },
  {
    step: "03",
    title: "Operational & Clinical Excellence",
    description: "We institute proven clinical SOPs, staff training academies, provider scheduling optimizations, and supply chain purchasing leverage across medical consumables.",
    metric: "Optimized Ops",
    detail: "Tier-1 vendor discounts & streamlined medical compliance"
  },
  {
    step: "04",
    title: "Exit & Succession Solutions",
    description: "For founders seeking liquidity or retirement, we provide clear, confidential valuations, structured equity buyouts, and seamless leadership transitions that honor their legacy.",
    metric: "Founder Liquidity",
    detail: "Flexible paths: active stay-on vs total retirement"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Partnership & Capital',
    question: 'What is 18 Wellness and how does the platform operate?',
    answer: '18 Wellness is an investment and operational platform focused exclusively on regenerative medicine, longevity, and wellness clinics. We partner with high-potential independent clinic owners to provide expansion capital, reduce customer acquisition costs, improve daily operations, and elevate the patient experience across every studio.'
  },
  {
    id: 'faq-2',
    category: 'Partnership & Capital',
    question: 'What types of clinics are ideal for 18 Wellness investment?',
    answer: 'We focus on established clinics and wellness studios operating in Anti-Aging (aesthetic medicine, laser, injectables), Wellness Optimization (cryotherapy, red light, contrast therapy, hyperbaric, IV drip), and Longevity (diagnostics, peptides, hormone therapy, NAD+). Ideal partners have strong local clinical reputation and an ambition to expand or modernize.'
  },
  {
    id: 'faq-3',
    category: 'Exit & Retirement',
    question: 'How does 18 Wellness help clinic owners looking for an exit or retirement?',
    answer: 'Many successful clinic founders reach a stage where they want to de-risk, capture liquid wealth, or transition into retirement without seeing their life\'s work dismantled. 18 Wellness offers structured, clean buyout terms, flexible continuity agreements (whether you want to retire immediately or transition over 1–3 years), and preserves your brand name, staff, and patient culture.'
  },
  {
    id: 'faq-4',
    category: 'Exit & Retirement',
    question: 'Can I remain involved as Medical Director or Clinical Lead after an investment?',
    answer: 'Absolutely. We offer tailored partnership structures. Some owners wish to step away from administrative headaches, payroll, and marketing to focus 100% on patient care as Medical Director. Others seek an orderly, complete handover. We customize the partnership to your life stage and goals.'
  },
  {
    id: 'faq-5',
    category: 'Clinical Operations',
    question: 'How does 18 Wellness reduce Customer Acquisition Costs (CAC)?',
    answer: 'We deploy a proprietary digital marketing and brand engine tested across multi-location clinics. By centralizing creative production, search engine authority, paid media acquisition, automated re-engagement workflows, and corporate wellness partnerships, we scale patient volume at significantly lower per-patient acquisition costs.'
  },
  {
    id: 'faq-6',
    category: 'Clinical Operations',
    question: 'Do partner clinics lose their brand identity?',
    answer: 'No. We believe local trust is paramount. Where appropriate, we preserve strong local clinic brand equity, co-branding as "An 18 Wellness Partner Clinic", while deploying our elevated design aesthetic, technology stack, and expanded longevity treatment menu behind the scenes.'
  },
  {
    id: 'faq-7',
    category: 'Client Experience',
    question: 'How does 18 Wellness enhance the client experience at the studio level?',
    answer: 'We transform clinical spaces into calming, high-touch wellness sanctuaries. From frictionless digital booking and comprehensive biomarker dashboards to spa-grade ambient design and integrated memberships spanning aesthetics and systemic longevity, clients experience an elevated standard of care.'
  },
  {
    id: 'faq-8',
    category: 'Partnership & Capital',
    question: 'How do I start a confidential conversation about my clinic?',
    answer: 'You can submit an inquiry through our confidential Clinic Evaluation form or email us directly at info@eighteenwellness.com. All initial discussions are held under strict non-disclosure, with no obligation.'
  }
];
