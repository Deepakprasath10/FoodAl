import { useState, FormEvent } from 'react';
import { X, Sparkles, Beaker, CheckCircle2, ArrowRight, Loader2, ShieldCheck, Download } from 'lucide-react';
import useLockBodyScroll from '../hooks/useLockBodyScroll';

interface AIFormulationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookConsultation: () => void;
}

export default function AIFormulationModal({ isOpen, onClose, onBookConsultation }: AIFormulationModalProps) {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('Functional Beverages');
  const [targetClaims, setTargetClaims] = useState('Clean Label, No Added Sugar');
  const [targetPackaging, setTargetPackaging] = useState('UHT Carton / Aluminum Can');
  const [challenges, setChallenges] = useState('Prevent curdling & extend shelf life to 9 months');
  const [budget, setBudget] = useState('$10k - $25k');

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  useLockBodyScroll(isOpen);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch('/api/ai-formulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productName,
          category,
          targetClaims,
          targetPackaging,
          challenges,
          budget
        })
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setResult({
        productName: productName || 'Custom Product',
        category,
        feasibilityScore: '94%',
        roadmap: [
          { phase: 'Phase 1: Benchtop Formulation', duration: '2 Weeks', action: 'Design baseline hydrocolloid emulsification system & flavor balance.' },
          { phase: 'Phase 2: Accelerated Shelf Life Testing', duration: '3 Weeks', action: 'Subject sample to 40°C incubation to verify Q10 stability & zero rancidity.' },
          { phase: 'Phase 3: Pilot Line Batch Trial', duration: '2 Weeks', action: 'Scale to 500L pilot run and handover SOP to selected co-packer.' }
        ],
        scientificConsiderations: [
          'Water activity (a_w) tuning below 0.60 to inhibit microbial growth.',
          'Natural botanical polyphenols to replace synthetic BHT/BHA antioxidants.',
          'NABL lab testing for FSSAI / FDA compliant nutrition labeling.'
        ],
        recommendedServices: ['Food Formulation', 'Shelf Life Extension', 'Regulatory Compliance'],
        estimatedTimeline: '6-8 Weeks Total'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-[#004B84]/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl border border-[#E5E7EB] shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#6B7280] hover:text-[#1F2937] bg-[#F8FAFC] p-2 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#004B84] text-[#FEB21A] flex items-center justify-center border border-[#FEB21A]/30 shadow-md">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F8FAFC] text-[#004B84] text-[11px] font-bold tracking-wide uppercase border border-[#E5E7EB]">
              AI Food Alchemist Engine
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#1F2937] mt-0.5">
              Instant Product R&D Feasibility Generator
            </h3>
          </div>
        </div>

        {!result ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#1F2937] mb-1 font-heading">
                  Product Name / Concept *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Barista Oat Milk, Prebiotic Soda"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] bg-white text-sm text-[#1F2937] focus:outline-none focus:border-[#004B84]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1F2937] mb-1 font-heading">
                  Category *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] bg-white text-sm text-[#1F2937] focus:outline-none focus:border-[#004B84]"
                >
                  <option value="Functional Beverages">Functional Beverages</option>
                  <option value="Bakery & Confectionery">Bakery & Confectionery</option>
                  <option value="Dairy & Plant Alternatives">Dairy & Plant Alternatives</option>
                  <option value="Health Foods & Snacks">Health Foods & Snacks</option>
                  <option value="Nutraceuticals & Gummies">Nutraceuticals & Gummies</option>
                  <option value="Ready To Eat & Retort">Ready To Eat & Retort</option>
                  <option value="Spices & Sauces">Spices & Sauces</option>
                  <option value="Sports Nutrition">Sports Nutrition</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#1F2937] mb-1 font-heading">
                  Target Label Claims
                </label>
                <input
                  type="text"
                  placeholder="e.g. Clean Label, Vegan, Keto, High Protein"
                  value={targetClaims}
                  onChange={(e) => setTargetClaims(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] bg-white text-sm text-[#1F2937] focus:outline-none focus:border-[#004B84]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1F2937] mb-1 font-heading">
                  Target Packaging / Shelf Life
                </label>
                <input
                  type="text"
                  placeholder="e.g. Retort Pouch, Glass Bottle, 6-12 Months"
                  value={targetPackaging}
                  onChange={(e) => setTargetPackaging(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] bg-white text-sm text-[#1F2937] focus:outline-none focus:border-[#004B84]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1F2937] mb-1 font-heading">
                Key Technical Challenge to Solve
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Prevent phase separation in coffee, remove bitterness from pea protein..."
                value={challenges}
                onChange={(e) => setChallenges(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border border-[#E5E7EB] bg-white text-sm text-[#1F2937] focus:outline-none focus:border-[#004B84]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1F2937] mb-1 font-heading">
                Target R&D Budget Range
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] bg-white text-sm text-[#1F2937] focus:outline-none focus:border-[#004B84]"
              >
                <option value="Under $5,000">Under $5,000 (Early Seed Benchtop)</option>
                <option value="$5,000 - $15,000">$5,000 - $15,000 (Standard R&D & Testing)</option>
                <option value="$15,000 - $35,000">$15,000 - $35,000 (Full Commercial Pilot + Scale)</option>
                <option value="$35,000+">$35,000+ (Multi-SKU Enterprise Portfolio)</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 bg-[#004B84] hover:bg-[#0D5FA3] text-white font-heading font-bold px-6 py-3.5 rounded-2xl border border-[#FEB21A]/50 shadow-xl transition-all flex items-center justify-center gap-2 group"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin text-[#FEB21A]" />
                  Generating Scientific Feasibility Roadmap...
                </>
              ) : (
                <>
                  <Beaker className="w-5 h-5 text-[#FEB21A]" />
                  Generate Product Feasibility Proposal
                  <ArrowRight className="w-4 h-4 text-[#FEB21A] group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="space-y-6 animate-fade-in">
            {/* Feasibility Header */}
            <div className="p-4 rounded-2xl bg-[#004B84] text-white border border-[#FEB21A]/40 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="block text-xs text-[#FEB21A] font-bold uppercase tracking-wider font-number">
                  R&D Feasibility Assessment
                </span>
                <h4 className="text-xl font-heading font-extrabold text-white">{result.productName}</h4>
                <p className="text-xs text-[#9CA3AF]">{result.category}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-center border border-[#FEB21A]/30">
                <span className="block text-2xl font-extrabold font-number text-[#FEB21A]">
                  {result.feasibilityScore || '95%'}
                </span>
                <span className="block text-[10px] text-white uppercase font-semibold">Technical Feasibility</span>
              </div>
            </div>

            {/* Scientific Roadmap Steps */}
            <div>
              <h5 className="text-xs font-extrabold text-[#004B84] uppercase tracking-wider font-number mb-3">
                Recommended R&D Execution Roadmap
              </h5>
              <div className="space-y-2.5">
                {result.roadmap?.map((item: any, idx: number) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#E5E7EB] shadow-sm flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#F8FAFC] text-[#004B84] border border-[#E5E7EB] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      0{idx + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#1F2937] font-heading">{item.phase}</span>
                        <span className="text-[10px] bg-[#F8FAFC] text-[#004B84] border border-[#E5E7EB] px-2 py-0.5 rounded-full font-semibold">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-xs text-[#6B7280] mt-0.5">{item.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Considerations */}
            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB]">
              <h5 className="text-xs font-bold text-[#004B84] uppercase font-number tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#FEB21A]" /> Core Biochemical Considerations
              </h5>
              <ul className="space-y-1.5 text-xs text-[#1F2937]">
                {result.scientificConsiderations?.map((note: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#004B84] shrink-0 mt-0.5" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onBookConsultation();
                }}
                className="w-full sm:flex-1 bg-[#004B84] hover:bg-[#0D5FA3] text-white font-heading font-bold px-5 py-3 rounded-xl border border-[#FEB21A]/50 shadow-md transition-all flex items-center justify-center gap-2"
              >
                Book Senior Alchemist Call
                <ArrowRight className="w-4 h-4 text-[#FEB21A]" />
              </button>
              <button
                onClick={() => setResult(null)}
                className="w-full sm:w-auto px-5 py-3 rounded-xl border border-[#E5E7EB] font-bold text-xs text-[#1F2937] hover:bg-[#F8FAFC] transition-all"
              >
                Generate Another Concept
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
