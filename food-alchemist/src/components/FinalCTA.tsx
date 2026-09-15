import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, Mail } from 'lucide-react';

interface FinalCTAProps {
  onOpenConsultation: () => void;
}

export default function FinalCTA({ onOpenConsultation }: FinalCTAProps) {
  return (
    <section className="py-20 lg:py-24 bg-[#000000] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FEB21A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#004B84]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
          Ready to Turn Your Food Idea Into a Product?
        </h2>
        <p className="text-sm sm:text-base text-white/70 font-body max-w-2xl mx-auto leading-relaxed">
          Speak with our senior food scientists about formulation, shelf life, or factory scale-up — no obligation, strict NDA.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={onOpenConsultation}
            className="bg-[#FEB21A] hover:bg-[#E5A400] text-[#004B84] font-heading font-bold text-sm px-7 py-4 rounded-2xl shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2.5 group"
          >
            <PhoneCall className="w-4 h-4" />
            Book a Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <Link
            to="/contact"
            className="bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-sm px-7 py-4 rounded-2xl border border-white/20 transition-all flex items-center justify-center gap-2.5"
          >
            <Mail className="w-4 h-4 text-[#FEB21A]" />
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
