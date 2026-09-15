import { useState, useEffect } from 'react';
import { STATS_LIST } from '../constants/data';
import { Award, ShieldCheck, Microscope, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenConsultation: () => void;
}

export default function WhyChooseUs({ onOpenConsultation }: WhyChooseUsProps) {
  const [animatedStats, setAnimatedStats] = useState(STATS_LIST.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats(STATS_LIST.map((s) => s.number));
    }, 300);
    return () => clearTimeout(timer);
  }, [STATS_LIST]);

  return (
    <section className="py-20 lg:py-28 bg-white text-gray-900 relative overflow-hidden border-y border-[#FEB21A]/30">
      {/* Background Glow Nodes */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FEB21A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#004B84]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Laboratory & R&D Technical Illustration */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#FEB21A]/40 shadow-2xl group bg-gradient-to-br from-[#004B84] to-[#0D5FA3] p-8 sm:p-10">
              
              <div className="absolute top-4 right-4 bg-[#FEB21A] text-[#004B84] font-number font-extrabold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                Certified NABL Lab
              </div>

              {/* Central Schematic Illustration */}
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-[#FEB21A] text-[#004B84] flex items-center justify-center font-bold shadow-lg">
                  <Microscope className="w-8 h-8" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                  Precision Chemistry Meets Culinary Craftsmanship
                </h3>

                <p className="text-sm text-white leading-relaxed font-body">
                  Unlike conventional consultants, Food Alchemist operates state-of-the-art analytical equipment, HPLC testing suites, and environmental stability chambers. Every formulation is backed by verified data.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 border border-[#FEB21A]/25 text-xs font-semibold text-[#004B84]">
                    <ShieldCheck className="w-5 h-5 text-[#FEB21A] shrink-0" />
                    <span>100% IP & Bill of Materials (BOM) Ownership Granted to Client</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 border border-[#FEB21A]/25 text-xs font-semibold text-[#004B84]">
                    <Zap className="w-5 h-5 text-[#FEB21A] shrink-0" />
                    <span>Rapid Benchtop Prototyping (3-4 Weeks Turnaround)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 border border-[#FEB21A]/25 text-xs font-semibold text-[#004B84]">
                    <Award className="w-5 h-5 text-[#FEB21A] shrink-0" />
                    <span>On-Site Factory Supervision during Commercial Scaling</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Animated Numbers Stats */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 text-[#FEB21A] text-xs font-bold uppercase tracking-wider font-number mb-3 border border-[#FEB21A]/30">
                Track Record Of Excellence
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#004B84]">
                Why Leading Food Brands Choose Us
              </h2>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {STATS_LIST.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 backdrop-blur-md p-6 rounded-2xl border border-[#FEB21A]/30 shadow-lg hover:border-[#FEB21A] transition-all group"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold font-number text-[#FEB21A] tracking-tight mb-1 flex items-center">
                    <span>{animatedStats[idx]}</span>
                    <span>{stat.suffix}</span>
                  </div>

                  <h4 className="text-sm font-heading font-bold text-[#004B84] mb-1 group-hover:text-[#FEB21A] transition-colors">
                    {stat.label}
                  </h4>

                  <p className="text-xs text-black font-body leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="bg-[#FEB21A] hover:bg-[#E5A400] text-[#004B84] font-heading font-bold text-sm px-7 py-4 rounded-2xl border border-[#004B84]/20 shadow-xl transition-all flex items-center gap-2 group"
              >
                Schedule Executive R&D Session
                <ArrowRight className="w-4 h-4 text-[#004B84] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
