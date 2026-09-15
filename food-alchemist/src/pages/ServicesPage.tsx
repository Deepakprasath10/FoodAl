import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { SERVICES_LIST } from '../constants/data';
import { ServiceItem } from '../types';
import { 
  Rocket, 
  Briefcase, 
  Lightbulb, 
  FlaskConical, 
  Activity, 
  Megaphone, 
  Scale, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  ChevronRight,
  ShieldCheck,
  FileText,
  Sliders,
  Award,
  Layers,
  ArrowUpRight
} from 'lucide-react';

interface ServicesPageProps {
  onOpenConsultation: () => void;
}

export default function ServicesPage({ onOpenConsultation }: ServicesPageProps) {
  const { serviceId } = useParams<{ serviceId?: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  // Find active service from URL param or hash or default to first service
  const getInitialService = (): ServiceItem => {
    if (serviceId) {
      const match = SERVICES_LIST.find((s) => s.id === serviceId);
      if (match) return match;
    }
    if (location.hash) {
      const cleanHash = location.hash.replace('#', '');
      const match = SERVICES_LIST.find((s) => s.id === cleanHash);
      if (match) return match;
    }
    return SERVICES_LIST[0];
  };

  const [activeService, setActiveService] = useState<ServiceItem>(getInitialService);
  const [viewMode, setViewMode] = useState<'single' | 'all'>('single');

  useEffect(() => {
    if (serviceId) {
      const match = SERVICES_LIST.find((s) => s.id === serviceId);
      if (match) setActiveService(match);
    } else if (location.hash) {
      const cleanHash = location.hash.replace('#', '');
      const match = SERVICES_LIST.find((s) => s.id === cleanHash);
      if (match) setActiveService(match);
    }
  }, [serviceId, location.hash]);

  const handleSelectService = (service: ServiceItem) => {
    setActiveService(service);
    setViewMode('single');
    navigate(`/services/${service.id}`, { replace: true });
  };

  const getIconComponent = (iconName: string) => {
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

  const ActiveIcon = getIconComponent(activeService.iconName);

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FFFDF8] min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#004B84] text-white py-12 lg:py-16 border-b border-[#FEB21A]/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FEB21A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEB21A] text-[#004B84] text-xs font-extrabold uppercase tracking-wider font-number mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#004B84]" />
              R&D Services Engine
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-white">
              Food Scientific & Commercial Services
            </h1>
            <p className="text-sm sm:text-base text-white/80 mt-3 font-body leading-relaxed max-w-2xl">
              Select any core capability from our interactive service menu below to explore detailed formulation pipelines, deliverables, regulatory standards, and technology frameworks.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setViewMode('single')}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-heading transition-all ${
                  viewMode === 'single'
                    ? 'bg-[#FEB21A] text-[#004B84] shadow-md'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Focused Module View
              </button>
              <button
                onClick={() => setViewMode('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-heading transition-all ${
                  viewMode === 'all'
                    ? 'bg-[#FEB21A] text-[#004B84] shadow-md'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                View All 7 Services Overview
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        
        {/* Mobile Horizontal Navigation Bar */}
        <div className="lg:hidden mb-8 overflow-x-auto pb-3 no-scrollbar -mx-4 px-4">
          <div className="bg-[#FEB21A] p-2 rounded-2xl flex items-center gap-2 min-w-[700px] shadow-lg border border-[#E5A400]">
            {SERVICES_LIST.map((srv) => {
              const isSelected = activeService.id === srv.id && viewMode === 'single';
              return (
                <button
                  key={srv.id}
                  onClick={() => handleSelectService(srv)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-heading font-extrabold uppercase tracking-wide whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-[#004B84] text-[#FEB21A] shadow-md scale-102'
                      : 'text-[#004B84] hover:bg-[#004B84]/10'
                  }`}
                >
                  {srv.title}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDEBAR: Iconic Gold/Amber Menu (Matching prompt image) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-28">
            <div className="bg-[#FEB21A] rounded-2xl p-5 border border-[#E5A400] shadow-xl overflow-hidden relative">
              
              <div className="mb-4 pb-3 border-b border-[#004B84]/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#004B84]/70 font-number">
                    R&D SERVICES MENU
                  </span>
                  <h3 className="text-base font-extrabold font-heading text-[#004B84]">
                    Core Categories
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-xl bg-[#004B84] text-[#FEB21A] flex items-center justify-center font-bold text-xs">
                  {SERVICES_LIST.length}
                </div>
              </div>

              {/* Vertical Menu Buttons */}
              <nav className="space-y-2">
                {SERVICES_LIST.map((service) => {
                  const Icon = getIconComponent(service.iconName);
                  const isActive = activeService.id === service.id && viewMode === 'single';

                  return (
                    <button
                      key={service.id}
                      onClick={() => handleSelectService(service)}
                      className={`w-full text-left px-4 py-3.5 rounded-xl transition-all flex items-center justify-between group ${
                        isActive
                          ? 'bg-[#004B84] text-[#FEB21A] shadow-lg font-extrabold translate-x-1'
                          : 'text-[#004B84] hover:bg-[#004B84]/10 font-bold'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#FEB21A]' : 'text-[#004B84]'}`} />
                        <span className="text-xs sm:text-sm font-heading uppercase tracking-wide">
                          {service.title}
                        </span>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-1 text-[#FEB21A]' : 'opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5'}`} />
                    </button>
                  );
                })}
              </nav>

              {/* Sidebar Footer Callout */}
              <div className="mt-6 pt-4 border-t border-[#004B84]/20 bg-[#004B84]/5 rounded-xl p-3.5 text-[#004B84]">
                <div className="flex items-center gap-2 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#004B84]" />
                  <span>Confidentiality Guaranteed</span>
                </div>
                <p className="text-[11px] text-[#004B84]/80 mt-1 leading-snug">
                  Strict Non-Disclosure Agreements (NDA) signed prior to recipe sharing.
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT CONTENT AREA */}
          <div className="lg:col-span-8">
            
            {viewMode === 'single' ? (
              /* FOCUSED SINGLE SERVICE MODULE VIEW */
              <div className="space-y-8 animate-fade-in">
                
                {/* Hero Header Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] shadow-xl relative overflow-hidden">
                  
                  {activeService.heroImage && (
                    <div className="h-48 sm:h-64 rounded-2xl overflow-hidden mb-6 relative bg-gray-100">
                      <img 
                        src={activeService.heroImage} 
                        alt={activeService.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {!activeService.heroImage && (
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-[#004B84] text-[#FEB21A] flex items-center justify-center border border-[#FEB21A]/40 shadow-lg shrink-0">
                        <ActiveIcon className="w-8 h-8" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#004B84] font-number uppercase tracking-wider">
                          Est. Timeline: {activeService.timeframe}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#1F2937]">
                          {activeService.title}
                        </h2>
                      </div>
                    </div>
                  )}

                  <p className="text-base text-[#1F2937] font-body leading-relaxed mb-6">
                    {activeService.fullDesc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E5E7EB]">
                    <div className="flex items-center gap-3 bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E5E7EB]">
                      <Clock className="w-5 h-5 text-[#004B84] shrink-0" />
                      <div>
                        <span className="block text-[10px] font-extrabold font-number uppercase text-[#004B84]">Average Turnaround</span>
                        <span className="text-xs font-bold text-[#1F2937]">{activeService.timeframe}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-[#F8FAFC] border border-[#E5E7EB] p-3.5 rounded-xl">
                      <Award className="w-5 h-5 text-[#FEB21A] shrink-0" />
                      <div>
                        <span className="block text-[10px] font-extrabold font-number uppercase text-[#004B84]">Compliance Guarantee</span>
                        <span className="text-xs font-bold text-[#1F2937]">FSSAI Certified</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Process Timeline Steps */}
                {activeService.processSteps && activeService.processSteps.length > 0 && (
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] shadow-md">
                    <div className="flex items-center gap-2 mb-6">
                      <Sliders className="w-5 h-5 text-[#004B84]" />
                      <h3 className="text-lg font-heading font-extrabold text-[#1F2937]">
                        4-Step Execution Protocol
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {activeService.processSteps.map((pStep) => (
                        <div key={pStep.step} className="bg-[#F8FAFC] p-4 rounded-2xl border border-[#E5E7EB] space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-lg bg-[#004B84] text-[#FEB21A] flex items-center justify-center text-xs font-bold font-number">
                              0{pStep.step}
                            </span>
                            <span className="text-xs font-bold text-[#1F2937] font-heading">{pStep.title}</span>
                          </div>
                          <p className="text-xs text-[#6B7280] font-body leading-relaxed">
                            {pStep.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Deliverables & Technical Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Client Deliverables */}
                  <div className="bg-white rounded-3xl p-6 border border-[#E5E7EB] shadow-md space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b border-[#E5E7EB]">
                      <FileText className="w-5 h-5 text-[#004B84]" />
                      <h3 className="text-sm font-extrabold font-heading text-[#1F2937]">
                        Client Deliverables
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {activeService.deliverables.map((del, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs font-semibold text-[#1F2937]">
                          <CheckCircle2 className="w-4 h-4 text-[#FEB21A] shrink-0 mt-0.5" />
                          <span className="leading-tight">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Highlights */}
                  <div className="bg-white rounded-3xl p-6 border border-[#E5E7EB] shadow-md space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b border-[#E5E7EB]">
                      <Layers className="w-5 h-5 text-[#004B84]" />
                      <h3 className="text-sm font-extrabold font-heading text-[#1F2937]">
                        Scientific Focus & Technologies
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeService.techHighlights.map((tech, i) => (
                        <span key={i} className="text-xs font-medium bg-[#F8FAFC] text-[#004B84] border border-[#E5E7EB] px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                          <span className="text-[#FEB21A]">⚡</span> {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Key Benefits */}
                {activeService.keyBenefits && activeService.keyBenefits.length > 0 && (
                  <div className="bg-[#000000] text-white rounded-3xl p-6 sm:p-8 border border-[#FEB21A]/30 shadow-xl space-y-4">
                    <h3 className="text-base font-extrabold font-heading text-[#FEB21A] uppercase tracking-wider font-number text-xs">
                      Value Proposition & Business Impact
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {activeService.keyBenefits.map((benefit, i) => (
                        <div key={i} className="bg-white/10 p-4 rounded-2xl border border-white/10">
                          <span className="block text-xs font-semibold text-white leading-relaxed">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action CTA Card */}
                <div className="bg-gradient-to-r from-[#FEB21A] to-[#E5A400] text-[#004B84] rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#FEB21A]">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest font-number text-[#004B84]/80">
                      READY TO GET STARTED?
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#004B84]">
                      Consult on {activeService.title}
                    </h3>
                    <p className="text-xs font-medium text-[#004B84]/90 mt-1 max-w-md">
                      Speak directly with our senior food scientists to discuss custom formulation, lab trials, or regulatory requirements.
                    </p>
                  </div>

                  <button
                    onClick={onOpenConsultation}
                    className="px-6 py-3.5 rounded-2xl bg-[#004B84] hover:bg-[#0D5FA3] text-[#FEB21A] font-heading font-bold text-xs shadow-xl transition-all flex items-center gap-2 shrink-0 group"
                  >
                    Request Proposal
                    <ArrowRight className="w-4 h-4 text-[#FEB21A] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            ) : (
              /* ALL SERVICES OVERVIEW VIEW */
              <div className="space-y-10 animate-fade-in">
                {SERVICES_LIST.map((srv, idx) => {
                  const Icon = getIconComponent(srv.iconName);

                  return (
                    <div
                      key={srv.id}
                      id={srv.id}
                      className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] shadow-lg hover:border-[#FEB21A] transition-all grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
                    >
                      <div className="lg:col-span-7 space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-[#004B84] text-[#FEB21A] flex items-center justify-center border border-[#FEB21A]/30 shadow-md shrink-0">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-[11px] font-bold text-[#004B84] font-number uppercase tracking-wider">
                              0{idx + 1}. {srv.badge || "Core Service"} • {srv.timeframe}
                            </span>
                            <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-[#1F2937]">
                              {srv.title}
                            </h2>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-[#6B7280] font-body leading-relaxed">
                          {srv.fullDesc}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {srv.techHighlights.map((tech, i) => (
                            <span key={i} className="text-[11px] font-medium bg-[#F8FAFC] text-[#004B84] border border-[#E5E7EB] px-2.5 py-1 rounded-xl">
                              ⚡ {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="lg:col-span-5 bg-[#F8FAFC] p-5 rounded-2xl border border-[#E5E7EB] space-y-3">
                        <span className="block text-[11px] font-extrabold font-number text-[#004B84] uppercase tracking-wider">
                          Key Deliverables
                        </span>
                        <div className="space-y-1.5">
                          {srv.deliverables.slice(0, 3).map((del, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs font-semibold text-[#1F2937]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#FEB21A] shrink-0 mt-0.5" />
                              <span>{del}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2 flex gap-2">
                          <button
                            onClick={() => handleSelectService(srv)}
                            className="flex-1 bg-[#004B84] hover:bg-[#0D5FA3] text-white font-heading font-bold text-xs py-2.5 rounded-xl border border-[#FEB21A]/30 transition-all flex items-center justify-center gap-1.5"
                          >
                            Explore Deep-Dive
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#FEB21A]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}
