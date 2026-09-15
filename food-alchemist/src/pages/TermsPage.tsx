export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 bg-[#FCFCFA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h1 className="text-3xl font-heading font-extrabold text-[#1F2937]">Terms of Service</h1>
        <p className="text-xs text-[#6B7280]">Last updated: July 2026</p>
        
        <div className="space-y-4 text-xs sm:text-sm text-[#1F2937] leading-relaxed font-body">
          <p>
            Welcome to Food Alchemist. By utilizing our website, AI Product Feasibility Generator, and R&D consultation booking services, you agree to these terms.
          </p>
          <h3 className="text-base font-bold text-[#004B84] font-heading">1. Consulting & R&D Scope</h3>
          <p>
            Benchtop formulations, pilot trial SOPs, and lab reports are delivered according to agreed project scope statements. Commercial batch sign-off is completed upon factory trial verification.
          </p>
          <h3 className="text-base font-bold text-[#004B84] font-heading">2. Regulatory Compliance</h3>
          <p>
            While Food Alchemist assists in aligning formulations with FSSAI, FDA, and EU standards, final packaging artwork approvals remain subject to jurisdiction-specific local regulatory filings.
          </p>
        </div>
      </div>
    </div>
  );
}
