import { useState } from 'react';
import { INDUSTRIES_LIST } from '../constants/data';
import { Cake, Milk, Wine, Apple, Pill, Utensils, Sparkles, Dumbbell, ArrowRight, CheckCircle2, X } from 'lucide-react';
import { IndustryItem } from '../types';
import useLockBodyScroll from '../hooks/useLockBodyScroll';

interface IndustriesGridProps {
  onOpenConsultation: () => void;
}

export default function IndustriesGrid({ onOpenConsultation }: IndustriesGridProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem | null>(null);

  useLockBodyScroll(!!selectedIndustry);

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cake': return Cake;
      case 'Milk': return Milk;
      case 'Wine': return Wine;
      case 'Apple': return Apple;
      case 'Pill': return Pill;
      case 'Utensils': return Utensils;
      case 'Sparkles': return Sparkles;
      case 'Dumbbell': return Dumbbell;
      default: return Sparkles;
    }
  };

  return (
    <section id="industries" className="py-20 lg:py-28 bg-[#FFFDF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFC] text-[#004B84] text-xs font-bold uppercase tracking-wider font-number mb-3 border border-[#E5E7EB]">
            Sector Specific Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#1F2937] tracking-tight">
            Industries We Transform
          </h2>
          <p className="text-base text-[#6B7280] mt-3 font-body">
            Deep biochemical formulations tailored for retail stability, clean label claims, and organoleptic excellence across eight major food categories.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_LIST.map((ind) => {
            const IconComp = getIndustryIcon(ind.iconName);

            return (
              <div
                key={ind.id}
                onClick={() => setSelectedIndustry(ind)}
                className="group bg-white rounded-3xl p-6 border border-[#E5E7EB] shadow-sm hover:shadow-xl hover:border-[#FEB21A] transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
              >
                {/* Background Subtle Gradient Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#F8FAFC] text-[#004B84] group-hover:bg-[#004B84] group-hover:text-[#FEB21A] flex items-center justify-center transition-colors mb-4 border border-[#E5E7EB] shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-heading font-extrabold text-[#1F2937] group-hover:text-[#004B84] transition-colors mb-2">
                    {ind.title}
                  </h3>

                  <p className="text-xs text-[#6B7280] font-body leading-relaxed mb-4 line-clamp-2">
                    {ind.description}
                  </p>
                </div>

                {/* Example Product Pills */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {ind.examples.slice(0, 2).map((ex, idx) => (
                      <span key={idx} className="text-[10px] font-semibold bg-[#F8FAFC] text-[#004B84] border border-[#E5E7EB] px-2.5 py-0.5 rounded-full">
                        {ex}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-bold text-[#004B84] group-hover:text-[#E5A400]">
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal Dialog for Industry Detail */}
      {selectedIndustry && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-[#004B84]/80 backdrop-blur-md animate-fade-in overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#E5E7EB] shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedIndustry(null)}
              className="absolute top-5 right-5 text-[#6B7280] hover:text-[#1F2937] bg-[#F8FAFC] p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#004B84] text-[#FEB21A] flex items-center justify-center border border-[#FEB21A]/30 shadow-md shrink-0">
                  {(() => {
                    const IconComponent = getIndustryIcon(selectedIndustry.iconName);
                    return <IconComponent className="w-7 h-7" />;
                  })()}
                </div>
                <div>
                  <span className="text-[10px] font-bold font-number uppercase tracking-widest text-[#004B84]">
                    Industry Blueprint
                  </span>
                  <h3 className="text-2xl font-heading font-extrabold text-[#1F2937]">
                    {selectedIndustry.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-[#6B7280] leading-relaxed font-body">
                {selectedIndustry.description}
              </p>

              {/* Solved Challenges */}
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB]">
                <h4 className="text-xs font-extrabold text-[#004B84] uppercase font-number tracking-wider mb-2">
                  Key R&D Challenges We Eliminate
                </h4>
                <div className="space-y-1.5">
                  {selectedIndustry.keyChallengesSolved.map((chal, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#1F2937]">
                      <CheckCircle2 className="w-4 h-4 text-[#FEB21A] shrink-0" />
                      <span>{chal}</span>
                    </div>
                  ))}
                </div>
              </div>


              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedIndustry(null);
                    onOpenConsultation();
                  }}
                  className="flex-1 bg-[#004B84] hover:bg-[#0D5FA3] text-white font-heading font-bold text-xs sm:text-sm py-3 rounded-xl border border-[#FEB21A]/40 shadow-md flex items-center justify-center gap-2"
                >
                  Consult on {selectedIndustry.title}
                  <ArrowRight className="w-4 h-4 text-[#FEB21A]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
