import { ArrowRight, Sparkles, Beaker, ShieldCheck, Award, Zap } from 'lucide-react';
import FloatingIngredients from './3DFloatingIngredients';

interface HeroProps {
  onOpenAIFormulate: () => void;
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenAIFormulate, onOpenConsultation }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#FFFDF8] overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/12 w-96 h-96 bg-[#004B84]/5 rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-10 right-1/10 w-96 h-96 bg-[#FEB21A]/10 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Trust Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004B84]/10 border border-[#004B84]/20 text-[#004B84] text-xs font-semibold font-heading shadow-sm animate-fade-in">
              <Sparkles className="w-4 h-4 text-[#FEB21A]" />
              <span>Next-Gen Food Science & Formulation R&D</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FEB21A] animate-pulse" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#1F2937] leading-[1.08] tracking-tight">
              Transforming <span className="text-[#004B84] relative inline-block">
                Food Ideas
                <svg className="absolute left-0 bottom-1 w-full h-2 text-[#FEB21A]/60 pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span> Into Successful Products.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#6B7280] font-body leading-relaxed max-w-xl">
              Food Alchemist helps startups, brands and manufacturers develop innovative food products, improve shelf life, optimize formulations and scale production.
            </p>

            {/* Call to Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenConsultation}
                className="bg-[#004B84] hover:bg-[#0D5FA3] text-white font-heading font-bold text-sm px-7 py-4 rounded-2xl border border-[#FEB21A]/50 shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2.5 group"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4 text-[#FEB21A] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="bg-white hover:bg-[#F8FAFC] text-[#1F2937] font-heading font-bold text-sm px-6 py-4 rounded-2xl border border-[#E5E7EB] shadow-sm transition-all hover:border-[#004B84] flex items-center justify-center gap-2"
              >
                Explore Services
              </a>

              <button
                onClick={onOpenAIFormulate}
                className="bg-[#F8FAFC] hover:bg-[#E5E7EB]/50 text-[#004B84] font-heading font-bold text-sm px-5 py-4 rounded-2xl border border-[#E5E7EB] transition-all flex items-center justify-center gap-2"
                title="Instant AI Feasibility Generator"
              >
                <Beaker className="w-4 h-4 text-[#FEB21A]" />
                AI Generator
              </button>
            </div>

            {/* Highlight Metric Badges */}
            <div className="pt-6 border-t border-[#E5E7EB] grid grid-cols-2 gap-8 max-w-md">
              <div>
                <span className="block text-xl sm:text-2xl font-extrabold font-number text-[#004B84]">30+</span>
                <span className="block text-[11px] font-semibold text-[#6B7280] uppercase tracking-wide">Formulas Launched</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-extrabold font-number text-[#FEB21A]">95%</span>
                <span className="block text-[11px] font-semibold text-[#6B7280] uppercase tracking-wide">Client Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Interactive 3D Floating Ingredients Canvas */}
          <div className="lg:col-span-6">
            <FloatingIngredients />
          </div>

        </div>
      </div>
    </section>
  );
}
