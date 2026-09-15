export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 bg-[#FCFCFA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h1 className="text-3xl font-heading font-extrabold text-[#1F2937]">Privacy Policy</h1>
        <p className="text-xs text-[#6B7280]">Last updated: July 2026</p>
        
        <div className="space-y-4 text-xs sm:text-sm text-[#1F2937] leading-relaxed font-body">
          <p>
            At Food Alchemist, we respect the confidentiality of your food formulation intellectual property, trade secrets, and business contact information.
          </p>
          <h3 className="text-base font-bold text-[#004B84] font-heading">1. Formula IP & Confidentiality</h3>
          <p>
            All custom recipes, ingredients lists, process SOPs, and testing data shared or developed during our engagement remain 100% your exclusive intellectual property under our Mutual Non-Disclosure Agreement (NDA).
          </p>
          <h3 className="text-base font-bold text-[#004B84] font-heading">2. Data Collection</h3>
          <p>
            We collect contact information, company specifications, and inquiry parameters strictly for rendering food R&D feasibility analysis and consultation scheduling.
          </p>
        </div>
      </div>
    </div>
  );
}
