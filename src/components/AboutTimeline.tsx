import { ABOUT_TIMELINE } from '../constants/data';
import { Calendar, Award, CheckCircle2 } from 'lucide-react';

export default function AboutTimeline() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FFFDF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFC] text-[#004B84] text-xs font-bold uppercase tracking-wider font-number mb-3 border border-[#E5E7EB]">
            Our Journey & Growth
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#1F2937] tracking-tight">
            6+ Years Of Food Science Pioneer Work
          </h2>
          <p className="text-base text-[#6B7280] mt-3 font-body">
            From a humble boutique bio-chemistry testing bench to a global food innovation platform trusted by over 50 leading brands.
          </p>
        </div>

      </div>
    </section>
  );
}
