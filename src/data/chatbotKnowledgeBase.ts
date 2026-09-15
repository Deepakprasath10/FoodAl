export interface QAItem {
  id: string;
  category: string;
  keywords: string[];
  question: string;
  answer: string;
  showCTA?: boolean;
}

export const MOCK_QA_DATABASE: QAItem[] = [
  {
    id: 'protein_bar',
    category: 'Product Development',
    keywords: ['protein bar', 'launch a protein bar', 'snack bar', 'protein', 'bar formulation'],
    question: 'I want to launch a protein bar',
    answer: `Launching a successful **Protein Bar** requires balancing **protein quality, texture stability, polyol binding, and shelf life**:

1. **Protein Matrix Selection:** Combining whey isolate, pea protein, or calcium caseinate to achieve a smooth mouthfeel without hardening over time.
2. **Water Activity ($a_w$) & Texture Control:** Utilizing glycerine, fiber syrups (IMO/FOS), or erythritol to keep water activity below 0.60, preventing both moisture migration and microbial growth.
3. **Flavor & Coating:** Formulating zero-added-sugar chocolate coatings with thermal stability for warm-weather distribution.
4. **Scale-Up:** Designing dough viscosity for cold-extrusion manufacturing lines.

Would you like to review our protein bar formulation specs or schedule an R&D consultation with our team?`,
    showCTA: true
  },
  {
    id: 'shelf_life',
    category: 'Shelf Life',
    keywords: ['improve shelf life', 'shelf life', 'expiration date', 'spoilage', 'rancidity', 'mold', 'preservatives'],
    question: 'Can you improve shelf life?',
    answer: `Yes! We specialize in **Clean-Label Shelf Life Extension** without relying on harsh artificial chemicals:

- **Hurdle Technology:** Combining water activity ($a_w$) depression, pH adjustment ($< 4.6$), and controlled thermal processing.
- **Lipid Oxidation Control:** Natural rosemary extracts (carnosic acid) and mixed tocopherols to prevent rancidity in high-fat foods.
- **Natural Antimicrobials:** Fermented cane sugar, cultured dextrose, and botanical extracts to inhibit mold and yeast.
- **Accelerated Testing (ASLT):** Incubating samples at 40°C / 75% RH to project 6–12 month ambient shelf stability in weeks.`,
    showCTA: true
  },
  {
    id: 'services',
    category: 'Services',
    keywords: ['services', 'what services', 'what do you do', 'offerings', 'capabilities', 'r&d services'],
    question: 'What services do you provide?',
    answer: `**Food Alchemist** provides end-to-end food scientific R&D services:

🧪 **1. Custom Food Formulation:** Benchtop recipe engineering across beverages, snacks, bakery, plant-based, and functional foods.
⏱️ **2. Shelf Life Optimization:** Hurdle technology, water activity tuning, and accelerated storage testing.
🏭 **3. Process & Factory Scale-Up:** Standard Operating Procedures (SOPs), pilot trials, and co-packer matchmaking.
📋 **4. FSSAI & FDA Compliance:** Nutritional labeling, claim verification, and ingredient limit validation.
👅 **5. Sensory & Texture Profiling:** Hedonic sensory panels and instrumental texture profiling.`,
    showCTA: true
  },
  {
    id: 'process',
    category: 'Product Development',
    keywords: ['how does product development work', 'process', 'workflow', 'steps', 'how it works', 'timeline'],
    question: 'How does product development work?',
    answer: `Our product development process follows **4 structured phases**:

1. **Phase 1: Discovery & Feasibility (Week 1–2):** Benchmark analysis, target cost per unit, ingredient selection, and regulatory check.
2. **Phase 2: Benchtop R&D (Week 2–4):** Developing baseline gold-standard lab samples and iterative client tasting rounds.
3. **Phase 3: Shelf Life & Pilot Trial (Week 4–6):** Water activity optimization, microbial challenge testing, and factory process mapping.
4. **Phase 4: Commercialization & SOPs (Week 6–8):** Commercial spec sheets, co-packer trial execution, and final launch handoff.`,
    showCTA: false
  },
  {
    id: 'startups',
    category: 'Startups',
    keywords: ['startups', 'do you help startups', 'small business', 'new brand', 'entrepreneurs'],
    question: 'Do you help startups?',
    answer: `**Absolutely!** We love empowering food tech entrepreneurs and early-stage brands.

We offer:
- **Flexible R&D Tiers:** Tailored packages designed for startup budgets.
- **Co-Packer Matchmaking:** Connecting you with low-MOQ (Minimum Order Quantity) contract manufacturers.
- **Investor-Ready Spec Sheets:** Professional formulation, ingredient decks, and cost-of-goods breakdown.
- **Regulatory Handholding:** Guidance through FSSAI/FDA licensing and packaging declarations.`,
    showCTA: true
  },
  {
    id: 'consultation',
    category: 'Consultation',
    keywords: ['book a consultation', 'consultation', 'talk to expert', 'schedule call', 'meeting', 'book call'],
    question: 'How can I book a consultation?',
    answer: `Booking a consultation is quick and easy!

You can click **"Book Consultation"** below or submit your project details via our contact section. 

Our senior Food Alchemists will review your product category, target claims, and budget before scheduling a 1-on-1 strategy session with you.`,
    showCTA: true
  },
  {
    id: 'pricing',
    category: 'Pricing',
    keywords: ['pricing', 'cost', 'how much', 'fee', 'charge', 'budget'],
    question: 'How much does food formulation cost?',
    answer: `Project pricing depends on your **product complexity, regulatory requirements, and target timeline**:

- **Benchtop Formulation:** Fixed transparent milestones starting from early feasibility to lab gold-standard.
- **Turnkey R&D Packages:** Covers benchtop formulation + accelerated shelf life + pilot plant SOPs.

We provide a detailed itemized proposal after an initial discovery call to ensure full cost clarity.`,
    showCTA: true
  },
  {
    id: 'packaging',
    category: 'Packaging',
    keywords: ['packaging', 'barrier packaging', 'pouch', 'retort', 'sustainable packaging', 'shelf life packaging'],
    question: 'What packaging guidance do you offer?',
    answer: `Packaging is directly linked to food stability! We assist with:

- **Barrier Property Selection:** Determining required Oxygen Transmission Rates (OTR) and Moisture Vapor Transmission Rates (MVTR).
- **Format Compatibility:** Retort pouches, MAP (Modified Atmosphere Packaging), vacuum sealing, and hot-fill bottles.
- **Sustainable Materials:** Testing biodegradable, recyclable, and bio-based barrier films without compromising shelf life.`,
    showCTA: false
  },
  {
    id: 'manufacturing',
    category: 'Manufacturing',
    keywords: ['manufacturing', 'co-packer', 'contract manufacturer', 'factory', 'scale up', 'copacker'],
    question: 'Do you have manufacturing partners?',
    answer: `Yes! We maintain an extensive network of **audited co-manufacturers and co-packers** across beverages, baked goods, dairy, snacks, and nutraceuticals.

We assist with line audits, factory trial supervision, order-of-addition SOPs, and troubleshooting quality deviations during commercial runs.`,
    showCTA: true
  },
  {
    id: 'fssai_fda',
    category: 'FSSAI',
    keywords: ['fssai', 'fda', 'regulations', 'compliance', 'labeling', 'claims', 'permitted limits'],
    question: 'Do you handle food regulatory compliance?',
    answer: `Yes! Regulatory compliance is baked into every step of our formulation process:

- **Ingredient Limits:** Verification against FSSAI Appendix A & US FDA 21 CFR standards.
- **Nutritional Claims:** Validation for claims like *High Protein*, *Zero Added Sugar*, *Gluten-Free*, or *Keto*.
- **Labeling Audits:** Reviewing ingredient declarations, allergen warnings, RDA calculations, and panel formatting.`,
    showCTA: false
  },
  {
    id: 'beverages',
    category: 'Industries',
    keywords: ['beverage', 'rtd', 'drink', 'juice', 'protein shake', 'kombucha', 'iced tea'],
    question: 'Can you formulate functional beverages?',
    answer: `Yes! We specialize in **RTD (Ready-to-Drink) beverages**:

- Functional & electrolyte waters, plant-based protein shakes, botanical elixirs, and sparkling teas.
- **Key Focus:** Preventing sedimentation/phase separation using pectin and hydrocolloids, heat treatment (UHT/HTST/Hot Fill), and flavor masking.`,
    showCTA: true
  },
  {
    id: 'clean_label',
    category: 'Product Development',
    keywords: ['clean label', 'natural ingredients', 'no preservatives', 'organic', 'artificial colors'],
    question: 'How do I make my product Clean Label?',
    answer: `Clean Label transformation involves replacing synthetic additives with functional natural ingredients:

- Replacing synthetic emulsifiers with **sunflower lecithin** or **citrus fiber**.
- Replacing artificial preservatives with **fermented plant sugars**, **citric acid**, and **rosemary extracts**.
- Replacing synthetic colors with **curcumin**, **beetroot red**, or **spirulina blue**.`,
    showCTA: false
  },
  {
    id: 'plant_based',
    category: 'Industries',
    keywords: ['plant based', 'vegan', 'dairy free', 'meat analog', 'oat milk', 'vegan cheese'],
    question: 'Do you formulate plant-based products?',
    answer: `Yes! We have extensive expertise in **plant-based & dairy alternative R&D**:

- **Dairy Alternatives:** Oat milk, almond milk, vegan cheeses, and non-dairy ice creams.
- **Meat Analogs:** High-moisture extrusion (HMEC) for pea and soy protein matrices.
- **Texture Stabilization:** Hydrocolloid systems that recreate dairy mouthfeel and melting characteristics.`,
    showCTA: true
  },
  {
    id: 'sensory',
    category: 'Testing',
    keywords: ['sensory', 'taste testing', 'flavor', 'texture testing', 'panel'],
    question: 'Do you perform taste and texture testing?',
    answer: `Yes! We perform both **hedonic sensory testing** with target consumer demographics and **instrumental texture analysis (TPA)** measuring hardness, springiness, cohesiveness, and chewiness to ensure gold-standard consumer satisfaction.`,
    showCTA: false
  },
  {
    id: 'turnaround_ip',
    category: 'Company',
    keywords: ['ip', 'recipe ownership', 'formula ownership', 'intellectual property', 'who owns recipe'],
    question: 'Who owns the final recipe and IP?',
    answer: `**You retain 100% full ownership of all intellectual property, recipes, manufacturing SOPs, and trade secrets.** Upon final project milestone completion, all technical documentation and formula proportions are fully transferred to your company.`,
    showCTA: true
  },
  {
    id: 'case_studies',
    category: 'Case Studies',
    keywords: ['case studies', 'success stories', 'past projects', 'clients', 'track record'],
    question: 'What products have you successfully created?',
    answer: `We have helped commercialize over **150+ products**, including:
- Extended-shelf-life soft-baked protein cookies (12-month ambient stability).
- Clean-label RTD plant-based iced teas with zero artificial preservatives.
- High-protein zero-sugar chocolate spreads with zero oil separation.
- Functional electrolyte hydration powders with natural fruit extracts.`,
    showCTA: true
  },
  {
    id: 'sugar_reduction',
    category: 'Product Development',
    keywords: ['reduce sugar', 'sugar reduction', 'stevia', 'monk fruit', 'erythritol', 'allulose', 'zero sugar'],
    question: 'Can you reduce sugar without losing bulk or taste?',
    answer: `Yes! Sugar provides both sweetness and structural bulking. We replace sugar using a dual system:
- **Sweetness:** High-purity Stevia Reb M, Monk Fruit, or Allulose to eliminate bitter metallic aftertastes.
- **Bulking & Mouthfeel:** Soluble corn fiber, inulin, or erythritol to maintain viscosity, crystallization control, and mouthfeel.`,
    showCTA: false
  },
  {
    id: 'contact_us',
    category: 'Consultation',
    keywords: ['contact', 'email', 'phone', 'location', 'reach out', 'talk to sales'],
    question: 'How do I contact Food Alchemist?',
    answer: `You can reach out to us directly:
- ✉️ **Email:** foodalchemist269@gmail.com
- 📞 **Phone / Mobile:** +91 63830 42701
- 📍 **Location:** Tambaram, Chennai, Tamil Nadu, India
- 💬 **WhatsApp:** Click the WhatsApp button below or message +91 63830 42701
- 📅 **Consultation:** Click "Book Consultation" to schedule a strategy call!`,
    showCTA: true
  }
];

export function getMockBotResponse(userQuery: string): { answer: string; showCTA: boolean; category?: string } {
  const query = userQuery.toLowerCase().trim();

  // Search through keywords in database
  let bestMatch: QAItem | null = null;
  let maxMatchCount = 0;

  for (const item of MOCK_QA_DATABASE) {
    let matches = 0;
    for (const kw of item.keywords) {
      if (query.includes(kw.toLowerCase())) {
        matches += kw.length; // weight longer phrase matches higher
      }
    }
    if (matches > maxMatchCount) {
      maxMatchCount = matches;
      bestMatch = item;
    }
  }

  if (bestMatch && maxMatchCount > 0) {
    return {
      answer: bestMatch.answer,
      showCTA: !!bestMatch.showCTA,
      category: bestMatch.category
    };
  }

  // Fallback response specified by user requirement
  return {
    answer: "I'm here to help with Food Alchemist's services and food product development. For detailed guidance, our experts would be happy to assist you.",
    showCTA: true
  };
}
