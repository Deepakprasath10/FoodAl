import { useState } from 'react';
import { SERVICES_LIST } from '../constants/data';
import { Rocket, Briefcase, Lightbulb, FlaskConical, Activity, Megaphone, Scale, ArrowRight, CheckCircle2, Sparkles, ChevronRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesTimelineProps {
  onOpenConsultation: () => void;
}

export default function ServicesTimeline({ onOpenConsultation }: ServicesTimelineProps) {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_LIST[0].id);

  const activeService = SERVICES_LIST.find((s) => s.id === activeServiceId) || SERVICES_LIST[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Rocket': return Rocket;
      case 'Briefcase': return Briefcase;
      case 'Lightbulb': return Lightbulb;
      case 'FlaskConical': return FlaskConical;
      case 'Activity': return Activity;
      case 'Megaphone': return Megaphone;
      case 'Scale': return Scale;
      default: return FlaskConical;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FCFCFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFC] text-[#004B84] text-xs font-bold uppercase tracking-wider font-number mb-3 border border-[#E5E7EB]">
            <Sparkles className="w-3.5 h-3.5 text-[#FEB21A]" />
            End-to-End R&D Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#1F2937] tracking-tight">
            Scientific Food Services Engine
          </h2>
          <p className="text-base text-[#6B7280] mt-3 font-body">
            Instead of generic advice, we deliver precision lab formulations, accelerated shelf-life verification, and on-site factory scaling. Click any milestone to open its technical blueprint.
          </p>
        </div>

        {/* Horizontal Timeline Steps Bar */}
        <div className="relative mb-12 overflow-x-auto pb-4 no-scrollbar">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#004B84]/10 -translate-y-1/2 rounded-full hidden sm:block" />

          <div className="flex items-center justify-between min-w-[700px] gap-4 relative z-10">
            {SERVICES_LIST.map((service, idx) => {
              const IconComp = getIcon(service.iconName);
              const isActive = service.id === activeServiceId;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`flex flex-col items-center group cursor-pointer focus:outline-none transition-all ${
                    isActive ? 'scale-105' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-md border ${
                      isActive
                        ? 'bg-[#004B84] text-[#FEB21A] border-[#FEB21A] ring-4 ring-[#F8FAFC]'
                        : 'bg-white text-[#004B84] border-[#E5E7EB] hover:border-[#004B84]'
                    }`}
                  >
                    <IconComp className="w-6 h-6" />
                  </div>

                  <span className={`text-xs font-heading font-bold mt-2.5 text-center max-w-[100px] ${
                    isActive ? 'text-[#004B84]' : 'text-[#6B7280]'
                  }`}>
                    0{idx + 1}. {service.title}
                  </span>

                  <span className={`w-2 h-2 rounded-full mt-1.5 transition-all ${
                    isActive ? 'bg-[#FEB21A] scale-125' : 'bg-transparent'
                  }`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Animated Active Service Detail Panel */}
        <div className="bg-[#004B84] text-white rounded-3xl p-6 sm:p-10 border border-[#FEB21A]/40 shadow-2xl relative overflow-hidden transition-all duration-300">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FEB21A]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* Left Detail Summary */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-extrabold font-number uppercase tracking-widest text-[#FEB21A] bg-white/10 px-3 py-1 rounded-full border border-[#FEB21A]/30">
                  Service Milestone Deep-Dive
                </span>
                <span className="text-xs font-semibold text-white/80 bg-white/10 px-3 py-1 rounded-full">
                  Timeframe: {activeService.timeframe}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white flex items-center gap-3">
                {activeService.title}
              </h3>

              <p className="text-sm sm:text-base text-white/90 font-body leading-relaxed">
                {activeService.fullDesc}
              </p>

              {/* Technical Highlights Tags */}
              <div>
                <span className="block text-xs font-extrabold font-number uppercase text-[#FEB21A] mb-2">
                  Biochemical & Process Innovations
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeService.techHighlights.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium bg-white/10 text-white border border-[#FEB21A]/30 px-3 py-1 rounded-xl"
                    >
                      ⚡ {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="bg-[#FEB21A] hover:bg-[#E5A400] text-[#004B84] font-heading font-bold text-xs sm:text-sm px-6 py-3.5 rounded-2xl border border-white/20 shadow-lg transition-all flex items-center gap-2 group"
                >
                  Request {activeService.title} Proposal
                  <ArrowRight className="w-4 h-4 text-[#004B84] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Key Deliverables Card */}
            <div className="lg:col-span-5 bg-white text-[#1F2937] p-6 rounded-2xl border border-[#E5E7EB] shadow-xl space-y-4">
              <h4 className="text-sm font-extrabold font-heading text-[#004B84] uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FEB21A]" />
                Tangible Project Deliverables
              </h4>

              <div className="space-y-2.5">
                {activeService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] text-xs font-semibold text-[#1F2937]">
                    <ChevronRight className="w-4 h-4 text-[#004B84] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] text-[11px] text-[#6B7280] font-medium">
                🔒 Protected under 100% Client Formula IP Ownership and NDA.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
