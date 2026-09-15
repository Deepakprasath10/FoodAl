import {
  ServiceItem,
  IndustryItem,
  StatItem,
  ProcessStep,
  ProductCategory,
  CaseStudy,
  Testimonial,
  TimelineMilestone,
  FAQItem,
  BlogPost
} from '../types';
import newProductImg from '../assets/new product.jpeg';

export const TRUSTED_BRANDS = [
  { name: "Fiber Feast 5G", logo: "Fiber Feast 5G" },
  { name: "Roviwel", logo: "Roviwel" },
  { name: "Eddies", logo: "Eddies" },
  { name: "Nomu", logo: "Nomu" },
  { name: "Fiber Feast 5G", logo: "Fiber Feast 5G" },
  { name: "Roviwel", logo: "Roviwel" },
  { name: "Eddies", logo: "Eddies" },
  { name: "Nomu", logo: "Nomu" }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "new-product-development",
    title: "New Product Development",
    shortDesc: "Turn raw food concepts into shelf-ready, scalable, and commercially successful food products.",
    fullDesc: "Complete end-to-end NPD pipeline from initial market gap discovery and benchtop formulation to factory trial runs, sensory evaluation, and retail launch validation.",
    iconName: "Rocket",
    badge: "Full Cycle NPD",
    deliverables: [
      "Gold Standard Benchtop Prototypes",
      "Commercial Bill of Materials (BOM) & Formula",
      "Factory Co-Packer Trial SOPs",
      "Sensory & Shelf-Life Validation Reports"
    ],
    timeframe: "4 - 8 Weeks",
    techHighlights: [
      "Bench-to-Batch Scaleup",
      "Rapid Prototype Iteration",
      "Pilot Line Optimization",
      "Yield Loss Minimization"
    ],
    processSteps: [
      { step: 1, title: "Concept Briefing", desc: "Define target taste profile, price point, packaging format, and dietary claims." },
      { step: 2, title: "Lab Formulations", desc: "Benchtop sample creation with sensory evaluation and ingredient synergy tuning." },
      { step: 3, title: "Pilot Factory Trial", desc: "Scale formulation to industrial processing equipment with continuous quality audits." },
      { step: 4, title: "Launch Readiness", desc: "Finalize manufacturing SOPs, shelf life testing, and retail packaging artwork." }
    ],
    keyBenefits: [
      "Fast-track market entry with reduced R&D trial cycles",
      "Guaranteed factory-scalable formulation without taste compromise",
      "Full ownership of intellectual property and formula specifications"
    ],
    heroImage: newProductImg
  },
  {
    id: "food-consulting",
    title: "Food Consulting",
    shortDesc: "Expert advisory on food technology, factory audits, process engineering, and quality management.",
    fullDesc: "Direct technical consultation for food startups, cloud kitchens, and industrial manufacturers. We audit production workflows, eliminate yield loss, fix batch inconsistencies, and optimize factory throughput.",
    iconName: "Briefcase",
    badge: "Technical Advisory",
    deliverables: [
      "Factory Line & Efficiency Audit",
      "Quality Assurance (QA/QC) SOP Dossier",
      "Yield Optimization & Waste Reduction Plan",
      "Raw Material Supplier Sourcing Map"
    ],
    timeframe: "1 - 3 Weeks",
    techHighlights: [
      "Root Cause Defect Analysis",
      "HACCP / HARPC System Design",
      "Thermal Process Validation",
      "Equipment Specification Review"
    ],
    processSteps: [
      { step: 1, title: "Factory Audit", desc: "On-site or remote evaluation of current production bottlenecks and quality issues." },
      { step: 2, title: "Gap Analysis", desc: "Identify process inefficiencies, yield leaks, and safety risks." },
      { step: 3, title: "Action Protocol", desc: "Deliver actionable SOPs, corrective steps, and staff training guidelines." },
      { step: 4, title: "Implementation Check", desc: "Monitor trial runs to verify target yield and quality improvements." }
    ],
    keyBenefits: [
      "Immediate reduction in production waste and batch failures",
      "HACCP & FSSAI audit-ready factory compliance",
      "Optimized equipment utilization and lower cost per unit"
    ],
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "product-ideation",
    title: "Product Ideation",
    shortDesc: "Trend forecasting, flavor profiling, and strategic product concept definition.",
    fullDesc: "Transform emerging culinary trends and consumer demand insights into high-potential food product concepts. We analyze market gaps, ingredient synergies, and flavor pairings to define winning products.",
    iconName: "Lightbulb",
    badge: "Concept & Innovation",
    deliverables: [
      "30+ Concept Matrix Briefs",
      "Flavor & Texture Trend Mapping Report",
      "Target Consumer Persona & Positioning",
      "Commercial Feasibility Ranking Matrix"
    ],
    timeframe: "1 - 2 Weeks",
    techHighlights: [
      "Market Gap Identification",
      "Clean-Label Concept Design",
      "Flavor Synergy Pairing",
      "Dietary Trend Alignment"
    ],
    processSteps: [
      { step: 1, title: "Market Research", desc: "Analyze consumer demand shifts, competitor blindspots, and dietary trends." },
      { step: 2, title: "Brainstorming Workshop", desc: "Collaborative session generating innovative flavor and format ideas." },
      { step: 3, title: "Feasibility Scoring", desc: "Filter concepts by technical viability, cost of goods, and shelf stability." },
      { step: 4, title: "Final Concept Blueprint", desc: "Selected product concept specs ready for benchtop formulation." }
    ],
    keyBenefits: [
      "Uncover blue-ocean market opportunities before competitors",
      "Data-backed product validation before investing heavy R&D capital",
      "High consumer appeal tailored to specific health & lifestyle segments"
    ],
    heroImage: "https://images.unsplash.com/photo-1507048685980-0923f9288407?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "product-formulation",
    title: "Product Formulation",
    shortDesc: "Precision molecular formulation, texture engineering, and clean-label recipe development.",
    fullDesc: "Chemical and physical optimization of recipes. We combine hydrocolloids, natural emulsifiers, sugar alternatives, and protein matrices to deliver unmatched taste, mouthfeel, and shelf stability.",
    iconName: "FlaskConical",
    badge: "Recipe Science",
    deliverables: [
      "Precision Recipe Formulas (BOM)",
      "Hydrocolloid & Emulsifier Matrix Specs",
      "Cost-of-Goods (COGS) Optimization Model",
      "Lab Bench Prototype Samples"
    ],
    timeframe: "2 - 4 Weeks",
    techHighlights: [
      "Sugar & Sodium Reduction",
      "Plant-Protein Bitter Masking",
      "Micro-Encapsulation Technology",
      "Phase Separation Prevention"
    ],
    processSteps: [
      { step: 1, title: "Raw Material Selection", desc: "Source clean-label functional ingredients and natural flavor esters." },
      { step: 2, title: "Benchtop Benchmarking", desc: "Batch preparation and objective texture profile analysis (TPA)." },
      { step: 3, title: "Sensory Optimization", desc: "Refine flavor delivery, sweetness profiles, and mouthfeel consistency." },
      { step: 4, title: "Formula Handover", desc: "Complete ingredient batch sheets and thermal processing guidelines." }
    ],
    keyBenefits: [
      "Clean-label ingredients without synthetic emulsifiers or gums",
      "Superior taste profiles with balanced sweetness and zero off-notes",
      "Repeatable batch consistency across industrial manufacturing equipment"
    ],
    heroImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "nutritional-testing",
    title: "Nutritional Testing",
    shortDesc: "NABL accredited lab analysis, macro/micronutrient assays, and shelf-life verification.",
    fullDesc: "Comprehensive laboratory testing for nutritional panel generation, heavy metals screening, microbial safety, allergen profiling, and accelerated shelf-life degradation studies.",
    iconName: "Activity",
    badge: "Lab & Safety Assay",
    deliverables: [
      "NABL Accredited Official Lab Certificate",
      "FSSAI / FDA Compliant Nutrition Label Format",
      "Microbial & Heavy Metal Screening Report",
      "Accelerated Shelf Life Stability Graph (Q10)"
    ],
    timeframe: "1 - 2 Weeks",
    techHighlights: [
      "HPLC Micronutrient Assay",
      "Caloric Bomb Calorimetry",
      "Water Activity (a_w) Tuning",
      "Microbiological Spoilage Profiling"
    ],
    processSteps: [
      { step: 1, title: "Sample Ingestion", desc: "Aseptic sample collection and registration under NABL chain-of-custody." },
      { step: 2, title: "Instrumental Testing", desc: "Chromatography, spectroscopy, and moisture activity analysis." },
      { step: 3, title: "Stability Chambering", desc: "Accelerated temperature & humidity stress testing." },
      { step: 4, title: "Certificate Issuance", desc: "Verified nutritional facts panel and regulatory safety certificate." }
    ],
    keyBenefits: [
      "NABL & ISO accredited reports trusted by global retailers and Amazon",
      "Accurate shelf-life expiration dating backed by scientific Q10 data",
      "Full protection against consumer safety recalls and allergen liabilities"
    ],
    heroImage: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "branding-marketing",
    title: "Branding & Marketing",
    shortDesc: "Food packaging design, front-of-pack claims, story-driven positioning, and launch strategy.",
    fullDesc: "Bridge the gap between food science and consumer purchasing decisions. We craft compliant front-of-pack health claims, distinct visual packaging hierarchy, and go-to-market branding.",
    iconName: "Megaphone",
    badge: "Packaging & Strategy",
    deliverables: [
      "Retail Packaging Art Direction & Dielines",
      "Verified Front-of-Pack Claims Dossier",
      "Brand Identity & Story Deck",
      "Retail Shelf Standout Strategy"
    ],
    timeframe: "2 - 4 Weeks",
    techHighlights: [
      "Regulatory Claim Verification",
      "Barrier Packaging Material Match",
      "Visual Hierarchy Optimization",
      "Consumer Unboxing UX"
    ],
    processSteps: [
      { step: 1, title: "Brand Discovery", desc: "Uncover core brand values, target audience, and retail positioning." },
      { step: 2, title: "Packaging Dieline Design", desc: "Create striking visual concepts optimized for barrier materials." },
      { step: 3, title: "Claim Validation", desc: "Ensure all health claims ('High Protein', 'Keto', 'No Added Sugar') are legally compliant." },
      { step: 4, title: "Retail Launch Collateral", desc: "Deliver print-ready dielines, sales sheets, and digital marketing assets." }
    ],
    keyBenefits: [
      "Captivating retail shelf presence that drives organic trial purchases",
      "100% compliant front-of-pack claims that protect against misleading marketing lawsuits",
      "Unified brand story connecting ingredients directly to consumer wellness goals"
    ],
    heroImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "legal-assistance",
    title: "Legal Assistance",
    shortDesc: "Regulatory compliance, FSSAI/FDA licensing support, ingredient approvals, and export dossiers.",
    fullDesc: "Protect your food business with complete regulatory clearance. We handle ingredient permission checks, novel food filings, label claim defense, and international export documentation.",
    iconName: "Scale",
    badge: "Regulatory & Compliance",
    deliverables: [
      "Regulatory Safety Dossier",
      "Label Compliance Clearance Certificate",
      "Novel Ingredient Filing Support",
      "Export Market Clearance Documentation"
    ],
    timeframe: "1 - 3 Weeks",
    techHighlights: [
      "Codex Alimentarius Alignment",
      "FSSAI & FDA Licensing Support",
      "Additives & E-Number Audit",
      "Trademark & Formula IP Defense"
    ],
    processSteps: [
      { step: 1, title: "Ingredient Legal Review", desc: "Verify all raw materials and additives against regional permitted lists." },
      { step: 2, title: "Dossier Preparation", desc: "Compile technical safety data, toxicological reports, and manufacturing specs." },
      { step: 3, title: "Regulatory Filing", desc: "Submit applications to FSSAI, FDA, or international food authorities." },
      { step: 4, title: "Clearance Sign-off", desc: "Obtain official licenses, compliance certificates, and export approvals." }
    ],
    keyBenefits: [
      "Zero risk of customs holds, retail rejections, or regulatory fines",
      "Hassle-free international export clearance to US, EU, and Gulf markets",
      "Ironclad formula ownership and trademark protection"
    ],
    heroImage: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=1200"
  }
];

export const INDUSTRIES_LIST: IndustryItem[] = [
  {
    id: "bakery",
    title: "Bakery & Confectionery",
    description: "Gluten-free structure, crumb elasticity, moisture retention, and keto-friendly baked goods.",
    iconName: "Cake",
    examples: ["Artisanal Sourdough", "Protein Doughnuts", "Low-GI Cookies", "Sugar-Free Chocolates"],
    keyChallengesSolved: ["Staling Inhibition", "Egg Replacement", "High-Protein Dough Rheology"],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "dairy",
    title: "Dairy & Plant Alternatives",
    description: "Smooth mouthfeel, thermal syneresis control, oat/almond milk stabilization, and vegan cheeses.",
    iconName: "Milk",
    examples: ["Barista Oat Milk", "High-Protein Greek Yogurt", "Vegan Cheddar Block", "Probiotic Kefir"],
    keyChallengesSolved: ["Coffee Curdling Resistance", "Off-Flavor Masking in Pea Protein", "Clean Melting"],
    image: "https://images.unsplash.com/photo-1528750997573-59b89d66f4f7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "beverages",
    title: "Functional Beverages",
    description: "Electrolyte RTDs, botanical elixirs, cold-brew coffees, kombucha, and adaptogenic sodas.",
    iconName: "Wine",
    examples: ["Nootropic Cold Brew", "Sparkling Adaptogen Tonic", "Isotonic Recovery RTD", "Fruit Hydration Shots"],
    keyChallengesSolved: ["pH Balance & Sedimentation", "Clarification", "Pasteurization Color Retention"],
    image: "https://images.unsplash.com/photo-1546171753-97d7676e4186?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "health-foods",
    title: "Health Foods & Snacks",
    description: "Extruded snacks, seed clusters, air-dried crisps, and low-calorie gourmet bites.",
    iconName: "Apple",
    examples: ["Millet Crisps", "High-Fiber Granola", "Freeze-Dried Fruit Bites", "Keto Nut Mix"],
    keyChallengesSolved: ["Oil Absorption Reduction", "Crunch Longevity", "Natural Seasoning Adhesion"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "nutraceuticals",
    title: "Nutraceuticals & Gummies",
    description: "Pectin gummies, liposomal vitamin liquids, effervescent tablets, and functional powders.",
    iconName: "Pill",
    examples: ["Ashwagandha Sleep Gummies", "Collagen Peptides Powder", "Electrolyte Hydration Mix", "Liposomal C Shots"],
    keyChallengesSolved: ["Active Ingredient Bioavailability", "Bitterness Masking", "Pectin Setting Point"],
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "ready-to-eat",
    title: "Ready to Eat (RTE) & Retort",
    description: "Ambient shelf-stable meals, retort pouch curries, pasteurized soups, and instant noodles.",
    iconName: "Utensils",
    examples: ["Retort Lentil Dahl", "Freeze-Dried Meal Kits", "Microwavable Grain Bowls", "Instant Ramen"],
    keyChallengesSolved: ["Texture Mushiness Prevention", "Syneresis in Sauces", "Flavor Degeneration"],
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "spices",
    title: "Spices, Sauces & Condiments",
    description: "Emulsified hot sauces, low-sodium spice rubs, clean-label marinades, and mayo alternatives.",
    iconName: "Sparkles",
    examples: ["Fermented Chili Sauce", "Low-Sodium Taco Seasoning", "Eggless Avocado Mayo", "Truffle Oil Dressing"],
    keyChallengesSolved: ["Phase Separation", "Viscosity Thermal Stability", "Caking Prevention"],
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "sports-nutrition",
    title: "Sports Nutrition",
    description: "Intra-workout formulas, EAAs, whey isolate blends, pre-workout shots, and energy gels.",
    iconName: "Dumbbell",
    examples: ["Hydrolyzed Whey RTD", "Isotonic Energy Gel", "Clear Whey Isolate", "Creatine Gummies"],
    keyChallengesSolved: ["Instant Solubility", "Astringency Masking", "Thermal Gelation"],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800"
  }
];

export const STATS_LIST: StatItem[] = [
  { number: 20, suffix: "+", label: "Clients Empowered", description: "From ambitious seed startups to multinational food enterprises." },
  { number: 30, suffix: "+", label: "Products Developed", description: "Formulated, tested, and commercially launched across retail channels." },
  { number: 95, suffix: "%", label: "Client Satisfaction", description: "First-attempt batch approval rate in pilot plant production trials." },
  { number: 6, suffix: "+", label: "Years Experience", description: "Dedicated food science, bio-chemistry, and process engineering mastery." }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Idea & Benchmarking",
    icon: "Lightbulb",
    summary: "Deconstructing product vision, market target, cost margin, and competitive flavor profiling.",
    details: "We analyze target consumer demographics, organoleptic benchmarks, price per unit target, and required dietary claims (e.g., Clean Label, Non-GMO, Organic).",
    deliverable: "Product Design Specification Dossier"
  },
  {
    step: 2,
    title: "Scientific Research",
    icon: "Search",
    summary: "Selecting botanical extracts, protein isolates, hydrocolloids, and natural preservation matrices.",
    details: "Matching active bio-compounds, assessing thermal stability during processing, and eliminating synthetic additives with functional natural substitutes.",
    deliverable: "Ingredient Selection Matrix & Risk Assessment"
  },
  {
    step: 3,
    title: "Lab Prototype Development",
    icon: "Beaker",
    summary: "Iterative benchtop formulation runs producing gold-standard physical samples.",
    details: "Precision formulation iterations in our R&D lab adjusting pH, brix, water activity, viscosity, and sensory notes until achieving perfection.",
    deliverable: "Gold Standard Benchtop Samples & Sensory Scorecard"
  },
  {
    step: 4,
    title: "Testing & Validation",
    icon: "FlaskConical",
    summary: "Accelerated shelf life testing, microbiological safety, and nutritional assaying.",
    details: "Environmental chamber exposure at 30°C, 40°C, 75% RH to predict real-world stability, rancidity kinetics, and micro-growth curves.",
    deliverable: "Certified Lab Testing Report & Expiry Certificate"
  },
  {
    step: 5,
    title: "Pilot Scale Optimization",
    icon: "Sliders",
    summary: "Translating benchtop grams into factory kilograms with pilot equipment trials.",
    details: "Fine-tuning shear rates, mixing order, heating/cooling thermal curves, and viscosity parameters to match high-speed packaging equipment.",
    deliverable: "Standardized Industrial Bill of Materials & SOP"
  },
  {
    step: 6,
    title: "Commercial Launch",
    icon: "Rocket",
    summary: "On-site factory trial supervision, quality assurance protocols, and packaging validation.",
    details: "Our food scientists stand on the factory floor during the first commercial run to ensure zero batch failures and seamless co-packer handover.",
    deliverable: "Commercial Production Sign-off & Quality Protocol"
  }
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "functional-foods",
    name: "Functional Foods",
    tagline: "Everyday nutrition enriched with targeted health benefits.",
    description: "Gut-friendly oat bars, protein-fortified baked bites, and immunity-boosting cereal blends designed for daily modern wellness.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800",
    tags: ["High Fiber", "Gut Health", "No Added Sugar"],
    highlights: ["Prebiotic Inulin Enrichment", "Low GI Carbohydrate Matrix", "Enhanced Mineral Absorption"]
  },
  {
    id: "sports-nutrition",
    name: "Sports Nutrition",
    tagline: "Peak athletic performance backed by biochemistry.",
    description: "Clear whey protein beverages, rapid-absorption electrolyte gels, and plant-protein shakes with zero chalky texture.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
    tags: ["High BCAA", "Fast Soluble", "Zero Chalkiness"],
    highlights: ["Enzymatic Hydrolysis for Taste", "BCAA 2:1:1 Ratio Stability", "Isotonic Osmolality"]
  },
  {
    id: "natural-ingredients",
    name: "Natural Ingredients",
    tagline: "Upcycled and pure botanical extracts for modern formulation.",
    description: "Plant-derived natural colors, rosemary-extract anti-rancidity complexes, and citrus fiber moisture-binders.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800",
    tags: ["100% Plant", "Non-GMO", "Upcycled"],
    highlights: ["Rosemary Antioxidant Preservation", "Citrus Fiber Water Binding", "Natural Beetroot & Spirulina Colors"]
  },
  {
    id: "clean-label",
    name: "Clean Label Innovations",
    tagline: "Replacing chemical E-numbers with recognizable pantry items.",
    description: "Formulations completely free from artificial preservatives, titanium dioxide, synthetic emulsifiers, or high fructose corn syrup.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800",
    tags: ["Zero E-Numbers", "Consumer Trusted", "100% Natural"],
    highlights: ["Lecithin Alternatives", "Cultured Dextrose Bio-preservative", "Fruit Concentrates"]
  },
  {
    id: "flavor-systems",
    name: "Custom Flavor Systems",
    tagline: "Sensory delight engineered for complex matrix stability.",
    description: "Heat-stable botanical flavorings, bitterness-masking top notes for functional botanicals, and authentic savory spice extracts.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
    tags: ["Heat Stable", "Bitterness Masked", "Authentic Aromatic"],
    highlights: ["Encapsulated Citrus Oils", "Astringency Neutralizers", "Thermal Bake-Proof Flavors"]
  },
  {
    id: "health-supplements",
    name: "Nutraceutical Gummies & Tonics",
    tagline: "Delightful daily compliance for health supplements.",
    description: "Gelatin-free pectin gummies, liquid collagen elixirs, and effervescent bio-active tablets engineered for high stability.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    tags: ["Vegan Pectin", "High Loading", "Zero Melting"],
    highlights: ["High Thermal Setting Point", "Vitamin C Oxidation Shield", "Natural Flavor System"]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-01-high-protein-bar",
    caseNumber: "CASE STUDY 01",
    title: "High-Protein Bar Development",
    subtitle: "Balancing Nutrition, Texture & Shelf-Life Stability",
    category: "Functional Nutrition & Bar Matrix",
    status: "Product Development / Optimization Phase",
    projectOverview: "A high-protein bar project focused on achieving strong nutritional positioning without compromising taste, chewability, structural integrity or storage stability. What seems simple on the outside is a complex matrix of ingredient interactions, reactions, and process control.",
    theChallenge: {
      overview: "The key challenge was not simply adding protein. The formulation had to control browning reactions, moisture migration, binder–protein interactions, stickiness and texture changes that could occur during shelf life.",
      items: [
        "High protein content without chalkiness",
        "Great taste & soft-chew texture",
        "Controlled browning & Maillard reactions",
        "Low stickiness during processing & shelf-life",
        "Structural integrity across temperatures",
        "Shelf-life stability over multi-month storage"
      ],
      subnote: "A bar that performs well on Day 1 must stay consistent till the last day."
    },
    rdApproach: {
      overview: "An iterative development cycle was used to evaluate formulation and process variables, followed by sensory and stability observations. Each trial was used to understand how the product matrix evolved over time rather than judging success only on Day 1.",
      cycleSteps: [
        "Formulation Design",
        "Process Trials",
        "Evaluation & Sensory Testing",
        "Shelf-Life Evaluation"
      ]
    },
    technicalFocusAreas: [
      "Protein source and inclusion level",
      "Moisture and water-activity (aw) management",
      "Texture and chewability optimization",
      "Reducing sugars and browning control",
      "Binder system and matrix structure",
      "Nut & inclusion levels balance",
      "Mixing & temperature parameters",
      "Packaging and storage performance"
    ],
    keyLearning: {
      main: "A protein bar that works once is only a prototype. Commercial readiness depends on consistent performance in taste, texture, appearance and stability throughout its intended shelf life.",
      quote: "In food product development, consistency is the real measure of success."
    },
    outcome: {
      summary: "A balanced high-protein bar concept was developed with improved control over texture, browning and structural stability, creating a stronger platform for scale-up and commercialization.",
      items: [
        "Great taste & optimized bite texture",
        "Controlled browning & moisture migration",
        "Good bite & chew over shelf life",
        "Improved structural shelf-life stability",
        "Ready for factory scale-up & commercialization"
      ]
    },
    confidentialityNote: "Specific formulation ratios, ingredient sources and proprietary processing parameters are intentionally not disclosed.",
    image: "https://images.unsplash.com/photo-1622484216298-500742f1cf8e?auto=format&fit=crop&q=80&w=1000",
    metric: "Multi-Month Soft Texture & Browning Stability",
    client: "Confidential Startup / Brand",
    results: "Balanced high-protein bar formulation with long-term chewability retention and zero hardening."
  },
  {
    id: "case-02-heat-stable-coating",
    caseNumber: "CASE STUDY 02",
    title: "Heat-Stable Chocolate-Coated Protein Bar",
    subtitle: "Stability That Withstands Heat. Indulgence That Delivers.",
    category: "Thermal Stability & Confectionery Coatings",
    status: "Commercialization Stage",
    projectOverview: "A protein bar required a chocolate-style coating capable of maintaining its appearance and integrity under elevated temperature conditions without turning into a soft melted mess during warm weather transport and retail display.",
    theChallenge: {
      overview: "The coating needed to remain stable at approximately 35–40°C while still providing an appealing bite, texture and sensory experience. Increasing heat resistance alone was not enough if the final coating became excessively hard, waxy or unpleasant.",
      items: [
        "Heat stability at 35–40°C ambient temperatures",
        "Coating integrity under heat stress & shipping",
        "Attractive gloss & bloom-free appearance",
        "Good bite & crisp texture without waxiness",
        "Great taste, rich mouthfeel & clean melt"
      ],
      subnote: "Conventional chocolate systems soften or melt under warm conditions. We had to deliver stability without sensory sacrifice."
    },
    rdApproach: {
      overview: "Multiple coating and process trials were conducted to balance heat resistance against sensory performance. The coating was evaluated as part of the complete product system rather than as an isolated component.",
      timeline: "Total R&D Timeline: ~4 Months | Coating Optimization: ~2 Months | Target: 35–40°C Stability",
      cycleSteps: [
        "Raw material screening & benchmarking",
        "Formulation trials & system optimization",
        "Prototype preparation & heat stability testing",
        "Texture, appearance & sensory evaluation",
        "Iterative refinement & scale-up validation"
      ]
    },
    technicalFocusAreas: [
      "Thermal stability at 35–40°C",
      "Melting and setting behavior kinetics",
      "Compatibility with the protein-bar core matrix",
      "Coating integrity and surface appearance",
      "Texture, bite and sensory mouthfeel experience",
      "Storage, distribution & transport stability",
      "Processing feasibility and line efficiency"
    ],
    keyLearning: {
      main: "The most difficult part of food R&D is often not making a product work once, but ensuring that it performs reliably under the real conditions of transport, storage and consumption.",
      quote: "It's not just about heat resistance; it's about creating a coating that stays stable in storage yet melts perfectly in the mouth."
    },
    outcome: {
      summary: "The extended R&D program produced a more robust coating strategy designed to improve elevated-temperature stability while preserving the expected chocolate-coated eating experience.",
      items: [
        "Improved heat stability (35–40°C threshold)",
        "Excellent appearance, gloss & finish",
        "Good bite and delightful chocolate texture",
        "Stable during warehousing, shipping & handling",
        "Consumer-acceptable sensory & melting profile"
      ]
    },
    tagline: "Months of R&D. Thousands of trials. One perfect bite.",
    confidentialityNote: "The coating composition, proprietary formulation strategy, and processing parameters remain confidential until product launch.",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=1000",
    metric: "35–40°C Heat Stability Without Waxiness",
    client: "Confidential Protein Brand",
    results: "Heat-stable chocolate coating with flawless 35-40°C integrity and smooth in-mouth melt."
  },
  {
    id: "case-03-pectin-jelly",
    caseNumber: "CASE STUDY 03",
    title: "Stable Pectin-Based Jelly Product",
    subtitle: "Great Texture. Beautiful Appearance. Consistent Every Time.",
    category: "Hydrocolloids & Fruit Gels",
    status: "Product Development / Optimization Phase",
    projectOverview: "A pectin-based jelly development project focused on producing consistent gel strength, attractive appearance, controlled stickiness and reliable storage performance. Jelly products may look simple, but achieving the right gel strength, clarity, stability and shelf life is a complex science.",
    theChallenge: {
      overview: "A jelly may contain relatively few ingredients, but small deviations in pectin level, soluble solids, pH, cooking temperature, cooling conditions or moisture can significantly alter the final texture and stability.",
      items: [
        "Weak or soft gels lacking elasticity",
        "Syneresis (water release and weeping)",
        "Stickiness on surface & packaging adhesion",
        "Mould growth & microbial vulnerability",
        "Shape deformation in transit",
        "Inconsistent batch-to-batch texture"
      ],
      subnote: "Small variations in formulation can cause big differences in quality."
    },
    rdApproach: {
      overview: "The project followed an iterative formulation–processing–cooling–demoulding–storage evaluation cycle. Each batch was used to identify how changes in critical variables influenced gel structure and consumer-relevant quality.",
      cycleSteps: [
        "Formulation Design & Pectin Screening",
        "Process Trials (°Brix & pH Tuning)",
        "Evaluation & Sensory Testing",
        "Shelf-Life & Syneresis Monitoring"
      ]
    },
    technicalFocusAreas: [
      "Pectin type and concentration",
      "Sugar solids and °Brix control",
      "pH and acidity optimization",
      "Cooking temperature and residence time",
      "Cooling rate and mould release",
      "Moisture control and syneresis prevention",
      "Colour, flavour and texture clarity",
      "Water activity (aw) & packaging protection"
    ],
    keyLearning: {
      main: "Simple ingredient lists do not mean simple product development. The objective is not one successful batch; it is reproducibility and consistent performance across production and storage.",
      quote: "Precision in formulation. Control in process. Consistency in every bite."
    },
    outcome: {
      summary: "The development pathway produced a more refined pectin-based jelly system with improved control over gel strength, texture, surface quality and storage stability.",
      items: [
        "Strong, consistent gel strength & elasticity",
        "Vibrant color, transparency & clean appearance",
        "Zero syneresis or surface tackiness",
        "Excellent bite, chew and rapid flavor release",
        "Low microbial risk & extended shelf life",
        "High consumer acceptance in sensory panels"
      ]
    },
    tagline: "Where science sets the gel. Excellence you can taste.",
    confidentialityNote: "All formulation details, ingredient sources and process parameters are proprietary and remain confidential.",
    image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&q=80&w=1000",
    metric: "Zero Syneresis & Controlled °Brix/pH Gel Network",
    client: "Confidential Confectionery Client",
    results: "Clean-label pectin jelly system with stable gel strength, vibrant clarity, and zero water weeping."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t2",
    name: "Fiber Feast 5G Team",
    role: "Client",
    company: "Fiber Feast 5G",
    avatar: "/src/assets/Fiber feast.jpeg",
    quote: "We are delighted to share our experience with Food Alchemist and their exceptional support throughout the R&D journey of our high-fibre biscuits. From the very beginning, the team supported us with their valuable knowledge, technical expertise, and continuous guidance. They took the time to understand our expectations and worked closely with us at every stage to refine and perfect the product. What truly stood out was their genuine personal interest in our project. They went beyond simply completing an R&D assignment and treated our product as if it were their own. Their dedication, patience, and commitment played a major role in helping us achieve the final outcome. The result was an exceptional product that met—and in many ways exceeded—our expectations. We are extremely satisfied with the quality of the product and the overall R&D experience. We sincerely thank the entire Food Alchemist team for their expertise, guidance, dedication, and genuine commitment. We are proud to have had them as our R&D partners and look forward to working with them again in the future. Highly recommended for their expertise, professionalism, and passion for creating great products.",
    rating: 5
  },
  {
    id: "t3",
    name: "Founder",
    role: "Founder",
    company: "Roviwel",
    avatar: "/src/assets/roviwel.jpeg",
    quote: "As the founder of Roviwel, I was initially concerned about how our drink formulation would turn out. However, the Alchemist team did a wonderful job throughout the entire process—from sourcing the right raw materials to developing and refining the formulation to match, and even exceed, our expectations. For anyone struggling to find a reliable food consultant, I would definitely recommend Agila and the Alchemist team. You can confidently hand over your requirements to them, and they will put in the effort to develop the product according to your vision. The team showed great patience, dedication, and commitment through multiple trials and all the way to the final formulation. Their efforts and attention to detail truly made a difference. I would definitely choose to work with them again for our future products and ventures.",
    rating: 5
  },
  {
    id: "t4",
    name: "Eddies",
    role: "Client",
    company: "Eddies",
    avatar: "/src/assets/Eddies.jpeg",
    quote: "I would say Food Alchemist is one of the best companies to approach if you’re planning to develop anything related to food. They genuinely treat every project as their own, are very friendly and approachable, and their pricing is quite reasonable compared with other food consultants in India.",
    rating: 5
  },
  {
    id: "t5",
    name: "Nomu",
    role: "Client",
    company: "Nomu",
    avatar: "/src/assets/nomu.jpeg",
    quote: "Working with Food Alchemist has been a great experience. What really stood out to me was the way they took ownership of our project and approached it as if it were their own product. They were very approachable, patient with our requirements, and genuinely involved throughout the development process. Their understanding of food product development, formulation, and the practical challenges involved made the entire process much smoother. I would definitely recommend Food Alchemist to anyone looking to develop a food product—they are a team that genuinely cares about getting the product right.",
    rating: 5
  }
];

export const ABOUT_TIMELINE: TimelineMilestone[] = [
  {
    year: "2014",
    stage: "Inception & Lab Genesis",
    title: "Founded by Food Chemists & Engineers",
    description: "Established a boutique food science laboratory dedicated to solving shelf-life degradation and texture challenges for artisanal food producers.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=600"
  },
  {
    year: "2017",
    stage: "Research Expansion",
    title: "State-of-the-Art Analytical Suite",
    description: "Invested in high-performance liquid chromatography (HPLC), rheometers, and environmental accelerated aging chambers.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600"
  },
  {
    year: "2020",
    stage: "Plant-Based & Clean-Label Pioneer",
    title: "Breakthrough Hydrocolloid Systems",
    description: "Pioneered proprietary botanical emulsification systems enabling 100% clean-label egg and dairy replacement in baked goods and RTDs.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600"
  },
  {
    year: "2023",
    stage: "Manufacturing Network",
    title: "Global Co-Packer Alliance",
    description: "Built a vetted network of over 40 pilot plants and high-capacity co-manufacturers across North America, Europe, and Asia.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
  },
  {
    year: "Today",
    stage: "Food Alchemist Platform",
    title: "AI-Powered Scientific R&D Engine",
    description: "Combining deep biochemical expertise with AI formulation models to accelerate food innovation from months to weeks.",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f218?auto=format&fit=crop&q=80&w=600"
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-1",
    category: "Formulation",
    question: "How long does a typical food product development project take?",
    answer: "A standard benchtop formulation project takes 3 to 6 weeks depending on product complexity. Full commercial pilot trials and accelerated 6-month shelf life verification typically add 4 to 8 weeks."
  },
  {
    id: "faq-2",
    category: "Manufacturing",
    question: "Do you manufacture the products in-house or connect us with co-packers?",
    answer: "We focus on formulation R&D, lab bench sampling, and pilot testing. Once the gold-standard recipe is locked, we connect you with audited, certified co-manufacturing facilities and supervise factory trials on-site."
  },
  {
    id: "faq-3",
    category: "IP & Ownership",
    question: "Who owns the recipe intellectual property (IP) and Bill of Materials?",
    answer: "100% of the developed formula, recipe steps, ingredient supplier specifications, and intellectual property belong exclusively to you upon project completion under our ironclad non-disclosure agreement (NDA)."
  },
  {
    id: "faq-4",
    category: "Shelf Life",
    question: "How do you achieve long shelf life without chemical preservatives?",
    answer: "We utilize multi-hurdle technology: controlling water activity (a_w), optimizing pH levels, leveraging natural botanical antioxidants (such as rosemary & green tea extracts), and selecting proper oxygen barrier packaging."
  },
  {
    id: "faq-5",
    category: "Regulatory",
    question: "Can you help ensure our product packaging complies with FSSAI or FDA rules?",
    answer: "Yes! We generate official laboratory NABL nutrition certificates, review allergen disclosures, verify ingredient legality, and format compliant nutrition fact panels for domestic or export markets."
  },
  {
    id: "faq-6",
    category: "Pricing & Budget",
    question: "What is the typical cost structure for a custom food R&D project?",
    answer: "Projects are structured on transparent flat-fee stages (Benchtop Formulation, Lab Testing, Pilot Trial Supervision). We tailor scope to early-stage bootstrapped startups through established enterprise brands."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    title: "Mastering Clean-Label Emulsification in Plant-Based RTD Beverages",
    slug: "clean-label-emulsification-plant-rtd",
    category: "Food Science & R&D",
    readTime: "6 min read",
    date: "July 18, 2026",
    excerpt: "How to replace synthetic polysorbates and CMC with acacia fiber, citrus pectin, and enzymatic modification for ultra-stable plant milk.",
    content: "Plant-based RTD beverages frequently suffer from phase separation, oil ringing, and sediment deposition. Chemical emulsifiers like polysorbate-60 or carboxymethylcellulose (CMC) provide easy stabilization, but modern consumers demand clean labels. In this deep dive, our senior food scientists explore how natural citrus hydrocolloids and enzymatic starch hydrolysis create robust steric stabilization...",
    author: {
      name: "Dr. Maya Lin",
      role: "Principal Food Bio-Chemist",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
    },
    image: "https://images.unsplash.com/photo-1528750997573-59b89d66f4f7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "b2",
    title: "Accelerated Shelf Life Testing (ASLT): Predicting 12-Month Stability in 6 Weeks",
    slug: "accelerated-shelf-life-testing-guide",
    category: "Quality Assurance",
    readTime: "8 min read",
    date: "June 29, 2026",
    excerpt: "Demystifying Q10 thermal acceleration factors, Arrhenius kinetics, and lipid rancidity testing in controlled environmental chambers.",
    content: "Bringing a retail food product to market requires definitive expiration dating. Waiting 12 full months in ambient room temperature is often impossible for fast-moving startups. By using environmental test chambers set at elevated temperature (35°C–45°C) and controlled humidity, we apply the Q10 rule and Arrhenius reaction rate kinetics to predict long-term lipid oxidation and microbial kinetics safely...",
    author: {
      name: "Marcus Vance",
      role: "Head of Analytical Chemistry",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200"
    },
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "b3",
    title: "Bitterness Masking Strategies for Botanical Adaptogens and Functional Peptides",
    slug: "bitterness-masking-botanicals-peptides",
    category: "Sensory Science",
    readTime: "5 min read",
    date: "May 14, 2026",
    excerpt: "Unlocking consumer acceptance for Ashwagandha, Collagen, and High-BCAA formulations using taste-receptor blocker technology.",
    content: "Bio-active ingredients like adaptogenic Ashwagandha, mushroom extracts, and hydrolyzed marine collagen deliver verified health benefits, but their natural taste can be unpalatably bitter or astringent. Rather than dumping high amounts of sugar, modern sensory science uses sodium-channel blockers, natural flavor esters, and cyclodextrin inclusion complexes to encapsulate bitter molecules...",
    author: {
      name: "Sophia Chen",
      role: "Lead Flavorist & Sensory Chemist",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
    },
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
  }
];
