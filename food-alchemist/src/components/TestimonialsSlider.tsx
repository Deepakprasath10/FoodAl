import { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants/data';
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';

export default function TestimonialsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-[#000000] text-white relative overflow-hidden border-y border-[#FEB21A]/30">
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#FEB21A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#FEB21A] text-xs font-bold uppercase tracking-wider font-number mb-3 border border-[#FEB21A]/30">
            Client Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            What Founders & R&D Directors Say
          </h2>
        </div>

        {/* Glassmorphism Testimonial Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-[#FEB21A]/40 shadow-2xl relative text-[#1F2937] bg-white/95 backdrop-blur-xl">
          <Quote className="w-12 h-12 text-[#FEB21A]/40 absolute top-6 right-6 pointer-events-none" />

          <div className="space-y-6">
            {/* Stars */}
            <div className="flex items-center gap-1 text-[#FEB21A]">
              {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FEB21A]" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-sm sm:text-base font-heading font-medium text-[#1F2937] leading-relaxed italic overflow-y-auto max-h-[320px] pr-4 custom-scrollbar">
              "{TESTIMONIALS[activeIndex].quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#E5E7EB]">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-[#FEB21A] shadow-md flex items-center justify-center p-1.5 overflow-hidden shrink-0">
                <img
                  src={TESTIMONIALS[activeIndex].avatar}
                  alt={TESTIMONIALS[activeIndex].name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="text-base font-heading font-extrabold text-[#1F2937]">
                  {TESTIMONIALS[activeIndex].name}
                </h4>
                <p className="text-xs text-[#004B84] font-semibold">
                  {TESTIMONIALS[activeIndex].role}, <span className="font-bold">{TESTIMONIALS[activeIndex].company}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#E5E7EB]">
            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === activeIndex ? 'w-8 bg-[#004B84]' : 'w-2 bg-[#004B84]/20'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveIndex((activeIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                className="w-10 h-10 rounded-xl bg-[#F8FAFC] text-[#004B84] hover:bg-[#004B84] hover:text-[#FEB21A] flex items-center justify-center transition-all border border-[#E5E7EB]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveIndex((activeIndex + 1) % TESTIMONIALS.length)}
                className="w-10 h-10 rounded-xl bg-[#004B84] text-[#FEB21A] hover:bg-[#0D5FA3] flex items-center justify-center transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
