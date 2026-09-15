import { TRUSTED_BRANDS } from '../constants/data';
import { Award, ShieldCheck, CheckCircle, Factory, Utensils } from 'lucide-react';

export default function TrustedBrands() {
  const brandIcons = [ShieldCheck, Award, Factory, Utensils, CheckCircle, Award, ShieldCheck, Factory];

  return (
    <section className="py-10 bg-[#004B84] text-white border-y border-[#FEB21A]/30 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <span className="text-[11px] font-bold font-number uppercase tracking-widest text-[#FEB21A]">
          Trusted By Industry Leaders
        </span>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden flex items-center">
        <div className="animate-marquee flex items-center gap-8 sm:gap-16 whitespace-nowrap">
          {[...TRUSTED_BRANDS, ...TRUSTED_BRANDS].map((brand, idx) => {
            const IconComponent = brandIcons[idx % brandIcons.length];
            return (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-[#FEB21A]/30 shadow-sm shrink-0 hover:bg-white/20 transition-all cursor-default"
              >
                <IconComponent className="w-5 h-5 text-[#FEB21A]" />
                <span className="font-heading font-extrabold text-xs sm:text-sm text-white tracking-wide">
                  {brand.logo}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
