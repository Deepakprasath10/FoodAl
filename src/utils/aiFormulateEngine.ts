export interface FormulationInput {
  productName: string;
  category: string;
  targetClaims: string;
  targetPackaging: string;
  challenges: string;
  budget: string;
}

export interface FormulationOutput {
  productName: string;
  category: string;
  feasibilityScore: string;
  interpretation: string;
  roadmap: Array<{ phase: string; duration: string; action: string }>;
  scientificConsiderations: string[];
  recommendedServices: string[];
  estimatedTimeline: string;
}

export function generateFormulation(input: FormulationInput): FormulationOutput {
  const lowerName = input.productName.toLowerCase();
  
  const validFormats = [
    'beverage', 'drink', 'concentrate', 'powder', 'bar', 'biscuit', 'cookie', 
    'cake', 'bread', 'gummy', 'jelly', 'capsule', 'tablet', 'yogurt', 
    'frozen dessert', 'ice cream', 'sauce', 'spread', 'retort', 'meal', 
    'snack', 'extruded', 'fermented', 'milk', 'dairy', 'plant', 'botanical', 
    'probiotic', 'salad', 'extract', 'electrolyte', 'water', 'soda', 'tea', 
    'coffee', 'juice', 'nectar', 'smoothie', 'cereal', 'muesli', 'granola',
    'porridge', 'pastry', 'candy', 'toffee', 'lozenge', 'chocolate', 'chips',
    'puffs', 'curry', 'noodles', 'mayonnaise', 'dressing', 'chutney', 'pickle',
    'jam', 'marmalade', 'meat', 'poultry', 'seafood', 'egg'
  ];

  const isFormatValid = validFormats.some(format => lowerName.includes(format));

  if (!isFormatValid && input.productName.trim() !== '') {
    return {
      productName: input.productName,
      category: input.category,
      feasibilityScore: '0%',
      interpretation: 'Poorly matched / concept modification required. Hard Gate Triggered: Invalid Product Format. Concept not recognized in R&D database.',
      roadmap: [
        { phase: 'Hard Gate Failure', duration: 'N/A', action: 'The entered concept is not a recognized food/beverage format. Please specify a valid format (e.g., beverage, bar, powder, gummy, snack).' }
      ],
      scientificConsiderations: [
        'Concept rejected due to format mismatch (pg 29: Format/category mismatch).',
        'Please enter a valid format from the matrix (e.g. liquid beverage, powder, bar, biscuit, gummy, tablet, etc.).'
      ],
      recommendedServices: ['Concept Ideation', 'Market Research'],
      estimatedTimeline: 'N/A'
    };
  }

  let manufacturerScore = 20; // max 25
  let regulatoryScore = 15; // max 20
  let formulationScore = 10; // max 15
  let shelfLifeScore = 8; // max 12
  let processScore = 7; // max 10
  let packagingScore = 4; // max 5
  let sensoryScore = 4; // max 5
  let costScore = 3; // max 4
  let technicalScore = 3; // max 4

  const lowerCategory = input.category.toLowerCase();
  const lowerPackaging = input.targetPackaging.toLowerCase();
  const lowerClaims = input.targetClaims.toLowerCase();

  let roadmap = [];
  let scientificConsiderations = [];

  // 1. Process & Manufacturer Feasibility (from PDF pg 30)
  if (lowerPackaging.includes('uht') || lowerPackaging.includes('aseptic')) {
    manufacturerScore = 20; // Medium-High
    processScore = 7;
    scientificConsiderations.push('UHT/aseptic process requires appropriate validation (pg 31).');
    if (lowerPackaging.includes('carton')) {
      scientificConsiderations.push('UHT carton: Focus on preventing curdling and improving texture (pg 36).');
    }
  } else if (lowerPackaging.includes('retort')) {
    manufacturerScore = 18; // Medium
    processScore = 6;
    scientificConsiderations.push('Retort process: Monitor for texture softening and nutrient degradation (pg 20).');
  } else if (lowerPackaging.includes('pouch') || lowerPackaging.includes('wrap')) {
    packagingScore = 3;
    scientificConsiderations.push('Flexible packaging/pouch: Prevent staling and moisture migration (pg 36).');
  } else if (lowerPackaging.includes('pet')) {
    packagingScore = 4;
    scientificConsiderations.push('PET packaging: Control mineral stability, taste, and light oxidation (pg 36).');
  }

  // 2. Budget vs Technical Challenge (PDF pg 37)
  if (input.budget.includes('Under $5,000')) {
    costScore = 1;
    technicalScore = 1; // Very tight for R&D
    scientificConsiderations.push('Budget <$5k restricts extensive pilot scale and shelf-life verification.');
  } else if (input.budget.includes('$15,000')) {
    costScore = 3;
    technicalScore = 3;
  } else {
    costScore = 4;
    technicalScore = 4;
  }

  // 3. Claims & Regulatory (PDF pg 16, 23, 24)
  if (lowerClaims.includes('clean label') || lowerClaims.includes('no added sugar') || lowerClaims.includes('vegan') || lowerClaims.includes('high protein')) {
    regulatoryScore = 16;
    scientificConsiderations.push('Requires strict claim substantiation, ingredient/claim assessment (pg 17).');
  }
  if (lowerClaims.includes('probiotic') || lowerClaims.includes('gut health')) {
    formulationScore = 12;
    scientificConsiderations.push('Probiotics: Loss of viability due to heat/oxygen/time. Requires strain and viability review (pg 20, 17).');
  }

  // 4. Category-Specific Scientific Mechanisms (PDF pg 20)
  if (lowerCategory.includes('beverage')) {
    scientificConsiderations.push('Curdling/sedimentation risk: Manage protein-pH-heat-mineral stability and dispersion (pg 20).');
    roadmap.push({ phase: 'Phase 1: Emulsion & pH Stability', duration: '2 Weeks', action: 'Benchtop formulation focusing on phase separation and sedimentation control.' });
  } else if (lowerCategory.includes('bakery') || lowerCategory.includes('snack')) {
    scientificConsiderations.push('Staling & Texture hardening: Control moisture migration and starch retrogradation (pg 20).');
    roadmap.push({ phase: 'Phase 1: Matrix & Moisture Optimization', duration: '3 Weeks', action: 'Design dough/batter matrix with water activity (aw) control.' });
  } else if (lowerCategory.includes('gummies') || lowerCategory.includes('supplements')) {
    scientificConsiderations.push('Gel failure or syneresis: Optimize pH, ions, and solids for gel contraction (pg 20).');
    roadmap.push({ phase: 'Phase 1: Gel Network Formatting', duration: '2 Weeks', action: 'Tune hydrocolloid type, solids, and pH for texture (pg 22).' });
  } else {
    roadmap.push({ phase: 'Phase 1: Concept & Prototyping', duration: '2-3 Weeks', action: 'Iterative benchtop formulation addressing key sensory profiles.' });
  }

  roadmap.push({ phase: 'Phase 2: Thermal & Stability Testing', duration: '3-4 Weeks', action: 'Accelerated shelf-life testing evaluating oxidation, microbial growth, and active instability.' });
  roadmap.push({ phase: 'Phase 3: Scale-Up & Manufacturer Readiness', duration: '2 Weeks', action: 'Align with co-packer on mixing, protein handling, and process severity (pg 22).' });

  let totalScore = manufacturerScore + regulatoryScore + formulationScore + shelfLifeScore + processScore + packagingScore + sensoryScore + costScore + technicalScore;
  let finalScore = Math.min(totalScore, 100);

  // Engine Interpretation (PDF pg 38)
  let interpretation = '';
  if (finalScore >= 85) {
    interpretation = 'High feasibility; prioritize manufacturer + regulatory checks';
  } else if (finalScore >= 70) {
    interpretation = 'High potential; verify formulation, claims and packaging';
  } else if (finalScore >= 50) {
    interpretation = 'Conditional; process and culture compatibility are critical';
  } else {
    interpretation = 'Low compatibility because category and format conflict; reformulate concept';
  }

  // Add the user challenge mapping
  if (input.challenges) {
    scientificConsiderations.push(`Target Challenge: ${input.challenges} - Ensure raw material, processing, and masking variables are investigated (pg 22).`);
  }

  // Ensure unique considerations and max length
  scientificConsiderations = Array.from(new Set(scientificConsiderations)).slice(0, 5);

  return {
    productName: input.productName || 'Custom Product',
    category: input.category,
    feasibilityScore: `${finalScore}%`,
    interpretation,
    roadmap,
    scientificConsiderations,
    recommendedServices: ['Formulation R&D', 'Shelf Life Validation', 'Co-Packer Sourcing'],
    estimatedTimeline: '7-9 Weeks Total'
  };
}
