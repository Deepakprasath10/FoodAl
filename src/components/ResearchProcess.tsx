import { useState } from 'react';
import { PROCESS_STEPS } from '../constants/data';
import { Lightbulb, Search, Beaker, FlaskConical, Sliders, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ResearchProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb': return Lightbulb;
      case 'Search': return Search;
      case 'Beaker': return Beaker;
      case 'FlaskConical': return FlaskConical;
      case 'Sliders': return Sliders;
      case 'Rocket': return Rocket;
      default: return Lightbulb;
    }
  };

  return (
    <section id="research" className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFC] text-[#004B84] text-xs font-bold uppercase tracking-wider font-number mb-3 border border-[#E5E7EB]">
            Systematic Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#1F2937] tracking-tight">
            6-Step Research Process
          </h2>
          <p className="text-base text-[#6B7280] mt-3 font-body">
            From initial organoleptic benchmark to full commercial launch. Scroll horizontally through our standardized scientific methodology.
          </p>
        </div>

        {/* Timeline Progress Bar */}
        <div className="mb-8 bg-[#E5E7EB] h-2 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-[#004B84] to-[#FEB21A] transition-all duration-500 ease-out"
            style={{ width: `${((activeStep + 1) / PROCESS_STEPS.length) * 100}%` }}
          />
        </div>

        {/* Horizontal Scroll Stepper */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 no-scrollbar snap-x snap-mandatory">
          {PROCESS_STEPS.map((step, idx) => {
            const IconComp = getStepIcon(step.icon);
            const isActive = idx === activeStep;

            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`snap-start shrink-0 w-80 sm:w-96 rounded-3xl p-6 transition-all duration-300 border cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#004B84] text-white border-[#FEB21A] shadow-2xl scale-[1.02]'
                    : 'bg-[#F8FAFC] text-[#1F2937] border-[#E5E7EB] hover:border-[#004B84] shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold ${
                        isActive
                          ? 'bg-[#FEB21A] text-[#004B84]'
                          : 'bg-white text-[#004B84] border border-[#E5E7EB]'
                      }`}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span
                      className={`text-xs font-extrabold font-number uppercase tracking-wider px-3 py-1 rounded-full ${
                        isActive
                          ? 'bg-white/10 text-[#FEB21A] border border-[#FEB21A]/30'
                          : 'bg-[#004B84]/5 text-[#004B84]'
                      }`}
                    >
                      Step 0{step.step}
                    </span>
                  </div>

                  <h3 className={`text-xl font-heading font-extrabold mb-2 ${
                    isActive ? 'text-white' : 'text-[#1F2937]'
                  }`}>
                    {step.title}
                  </h3>

                  <p className={`text-xs font-body leading-relaxed mb-4 ${
                    isActive ? 'text-[#9CA3AF]' : 'text-[#6B7280]'
                  }`}>
                    {step.summary}
                  </p>

                  <p className={`text-xs font-body italic mb-4 p-3 rounded-xl ${
                    isActive ? 'bg-white/10 text-white' : 'bg-white text-[#004B84] border border-[#E5E7EB]'
                  }`}>
                    "{step.details}"
                  </p>
                </div>

                {/* Deliverable Badge */}
                <div className={`pt-4 border-t ${isActive ? 'border-white/10' : 'border-[#E5E7EB]'}`}>
                  <span className={`block text-[10px] font-extrabold font-number uppercase mb-1 ${
                    isActive ? 'text-[#FEB21A]' : 'text-[#004B84]'
                  }`}>
                    Key Step Deliverable
                  </span>
                  <div className="flex items-center gap-2 text-xs font-bold">
                    <CheckCircle2 className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#FEB21A]' : 'text-[#004B84]'}`} />
                    <span>{step.deliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
