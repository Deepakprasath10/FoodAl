import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { SERVICES_LIST } from '../constants/data';
import { ServiceItem } from '../types';
import {
  SIGARA_COMPANY, SIGARA_ABOUT_CARDS, SIGARA_STORY, SIGARA_STORY_QUOTE,
  SIGARA_MAIN_SERVICES, SIGARA_DIGITAL_MARKETING, SIGARA_WEBSITE_DEV,
  SIGARA_CUSTOM_SOFTWARE, SIGARA_AI_AUTOMATION, SIGARA_INDUSTRIES,
  SIGARA_TECH_STACK, SIGARA_PROCESS_STEPS, SIGARA_WHY_CHOOSE,
  SIGARA_CASE_STUDIES, SIGARA_ENGAGEMENT_MODELS, SIGARA_COMMITMENT
} from '../constants/sigaraData';
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
  ArrowUpRight,
  Code2,
  Globe,
  TrendingUp,
  Smartphone,
  Bot,
  Cloud,
  Palette,
  BarChart3,
  Building2,
  HeartPulse,
  GraduationCap,
  Factory,
  ShoppingBag,
  Truck,
  Target,
  Cpu,
  Zap,
  MessageSquare,
  Users,
  MapPin,
  Phone,
  ChevronDown,
  ChevronUp,
  Star,
  Rocket as RocketIcon
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
      case 'Code2': return Code2;
      case 'CheckCircle2': return CheckCircle2;
      default: return FlaskConical;
    }
  };

  const sigaraIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    TrendingUp, Globe, Code2, Smartphone, Bot, Cloud, Palette, BarChart3,
    Lightbulb, Building2, HeartPulse, GraduationCap, Factory, ShoppingBag,
    Truck, Briefcase, Rocket, Target, Cpu, Layers, Zap, MessageSquare,
    FileText, Users, Sparkles, Award, ShieldCheck, CheckCircle2,
  };
  const SigaraIcon = ({ name, className }: { name: string; className?: string }) => {
    const Comp = sigaraIconMap[name] || Star;
    return <Comp className={className} />;
  };

  const ActiveIcon = getIconComponent(activeService.iconName);

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FFFDF8] min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#F8FAFC] py-12 lg:py-16 border-b border-[#FEB21A]/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FEB21A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEB21A] text-black text-xs font-extrabold uppercase tracking-wider font-number mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-black" />
              R&D Services Engine
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-black">
              Food Scientific & Commercial Services
            </h1>
            <p className="text-sm sm:text-base text-gray-800 mt-3 font-body leading-relaxed max-w-2xl">
              Select any core capability from our interactive service menu below to explore detailed formulation pipelines, deliverables, regulatory standards, and technology frameworks.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setViewMode('single')}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-heading transition-all ${
                  viewMode === 'single'
                    ? 'bg-[#FEB21A] text-black shadow-md'
                    : 'bg-white border border-gray-200 text-black hover:bg-gray-50'
                }`}
              >
                Focused Module View
              </button>
              <button
                onClick={() => setViewMode('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-heading transition-all ${
                  viewMode === 'all'
                    ? 'bg-[#FEB21A] text-black shadow-md'
                    : 'bg-white border border-gray-200 text-black hover:bg-gray-50'
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
          <div className="bg-[#FEB21A] p-2 rounded-2xl flex items-center gap-2 w-max min-w-full shadow-lg border border-[#E5A400]">
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
              activeService.id === 'development-services' ? (
                /* ── SIGARA INLINE PANEL ── */
                <SigaraInlinePanel SigaraIcon={SigaraIcon} contact={SIGARA_COMPANY.contact} />
              ) : (
                <div className="space-y-8 animate-fade-in">
                {/* Hero Header Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] shadow-xl relative overflow-hidden">
                  
                  {activeService.heroImage && (
                    <div className="w-full rounded-2xl overflow-hidden mb-6 relative bg-gray-50">
                      <img 
                        src={activeService.heroImage} 
                        alt={activeService.title} 
                        className="w-full h-auto max-h-[60vh] object-cover sm:object-contain"
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
                  <div className="bg-white text-gray-900 rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] shadow-xl space-y-4">
                    <h3 className="text-base font-extrabold font-heading text-[#FEB21A] uppercase tracking-wider font-number text-xs">
                      Value Proposition & Business Impact
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {activeService.keyBenefits.map((benefit, i) => (
                        <div key={i} className="bg-white/10 p-4 rounded-2xl border border-white/10">
                          <span className="block text-xs font-semibold text-[#004B84] leading-relaxed">
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
              )
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

// ── SIGARA INLINE PANEL ──────────────────────────────────────────────────
interface SigaraInlinePanelProps {
  SigaraIcon: (props: { name: string; className?: string }) => React.ReactElement;
  contact: string;
}

function SigaraInlinePanel({ SigaraIcon, contact }: SigaraInlinePanelProps) {
  const [openAccordion, setOpenAccordion] = React.useState<string | null>(null);

  const accordions = [
    { id: 'dm', icon: 'TrendingUp', title: 'Digital Marketing', sub: 'SEO · Ads · Social · Analytics',
      items: [
        { title: 'SEO & Content', desc: 'Rank higher, attract organic traffic, and build lasting digital authority.' },
        { title: 'Google Ads (PPC)', desc: 'Precision-targeted paid campaigns that maximize every advertising dollar.' },
        { title: 'Meta & Social Ads', desc: 'Engage audiences on Facebook, Instagram, LinkedIn, and YouTube.' },
        { title: 'Social Media Marketing', desc: 'Build brand presence and community across all major platforms.' },
        { title: 'Performance Marketing', desc: 'Data-driven campaigns measured by real business outcomes.' },
        { title: 'Lead Generation', desc: 'Qualified leads delivered to your sales team through smart funnels.' },
        { title: 'Analytics & Reporting', desc: 'Real-time dashboards and insights to optimize campaigns continuously.' },
      ]
    },
    { id: 'web', icon: 'Globe', title: 'Website Development', sub: 'Corporate · E-Commerce · Web Apps',
      items: [
        { title: 'Corporate Websites', desc: 'Professional, brand-aligned websites that convert visitors into clients.' },
        { title: 'E-Commerce', desc: 'Feature-rich stores with payment gateways, inventory, and analytics.' },
        { title: 'Landing Pages', desc: 'High-conversion pages optimized for your marketing campaigns.' },
        { title: 'Web Applications', desc: 'Custom-built web platforms that power your business operations.' },
        { title: 'Website Maintenance', desc: 'Ongoing support, updates, security, and performance optimization.' },
      ]
    },
    { id: 'sw', icon: 'Code2', title: 'Custom Software', sub: 'Enterprise · SaaS · Dashboards',
      items: [
        { title: 'Enterprise Applications', desc: 'Large-scale systems built for reliability, security, and scale.' },
        { title: 'SaaS Platforms', desc: 'Multi-tenant cloud software with subscription billing and analytics.' },
        { title: 'Workflow Automation', desc: 'Eliminate manual tasks with intelligent, rule-based automation.' },
        { title: 'Custom Dashboards', desc: 'Real-time data visualization tailored to your KPIs.' },
        { title: 'Internal Systems', desc: 'Secure intranet tools, ERPs, CRMs, and HR systems.' },
      ]
    },
    { id: 'ai', icon: 'Bot', title: 'AI & Automation', sub: 'Chatbots · OpenAI · Workflow AI',
      items: [
        { title: 'AI Chatbots', desc: '24/7 intelligent customer support chatbots trained on your business data.' },
        { title: 'OpenAI Integration', desc: 'GPT-4 and latest LLM integrations into your existing business applications.' },
        { title: 'Workflow Automation', desc: 'End-to-end process automation reducing manual effort by up to 80%.' },
        { title: 'Business Process AI', desc: 'AI-driven process optimization across operations, HR, finance, and sales.' },
        { title: 'Intelligent Analytics', desc: 'Predictive insights and AI-driven recommendations for smarter decisions.' },
      ]
    },
    { id: 'mob', icon: 'Smartphone', title: 'Mobile Apps', sub: 'Flutter · React Native · iOS · Android',
      items: [
        { title: 'Flutter', desc: 'Beautiful native apps for iOS and Android from a single codebase.' },
        { title: 'React Native', desc: 'High-performance cross-platform apps with native feel.' },
        { title: 'iOS & Android', desc: 'Dedicated native app development for Apple and Google platforms.' },
      ]
    },
    { id: 'cloud', icon: 'Cloud', title: 'Cloud & API', sub: 'Azure · AWS · GCP · Integration',
      items: [
        { title: 'Microsoft Azure', desc: 'Enterprise-grade cloud hosting and DevOps services.' },
        { title: 'AWS', desc: 'Scalable cloud infrastructure powered by Amazon Web Services.' },
        { title: 'Google Cloud', desc: 'GCP compute, storage, and data analytics.' },
        { title: 'REST APIs & Integration', desc: 'API design, third-party integrations, and microservices.' },
      ]
    },
    { id: 'ui', icon: 'Palette', title: 'UI/UX Design', sub: 'Research · Wireframes · Prototypes',
      items: [
        { title: 'Research & Discovery', desc: 'User research, persona creation, and competitive analysis.' },
        { title: 'Wireframes', desc: 'Low and high-fidelity wireframes for web and mobile applications.' },
        { title: 'Prototypes', desc: 'Interactive prototypes for validation before development begins.' },
      ]
    },
    { id: 'bi', icon: 'BarChart3', title: 'Business Intelligence', sub: 'Dashboards · Analytics · Reporting',
      items: [
        { title: 'Custom Dashboards', desc: 'Real-time business dashboards tailored to your KPIs.' },
        { title: 'Analytics', desc: 'Advanced data analytics to identify trends and opportunities.' },
        { title: 'Reporting', desc: 'Automated reporting systems for operations, finance, and sales.' },
      ]
    },
    { id: 'it', icon: 'Lightbulb', title: 'IT Consulting', sub: 'Strategy · Digital Transformation',
      items: [
        { title: 'Technology Strategy', desc: 'Define your technology roadmap aligned to business goals.' },
        { title: 'Digital Transformation', desc: 'End-to-end transformation consulting for modern enterprises.' },
      ]
    },
  ];

  const industries = [
    { name: 'Real Estate', icon: 'Building2' },
    { name: 'Healthcare', icon: 'HeartPulse' },
    { name: 'Education', icon: 'GraduationCap' },
    { name: 'Manufacturing', icon: 'Factory' },
    { name: 'Retail', icon: 'ShoppingBag' },
    { name: 'Logistics', icon: 'Truck' },
    { name: 'Professional Services', icon: 'Briefcase' },
    { name: 'Startups', icon: 'Rocket' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* SIGARA Hero Banner */}
      <div className="bg-[#004B84] rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#FEB21A]/10 rounded-full blur-3xl" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEB21A] text-[#004B84] text-[10px] font-extrabold uppercase tracking-widest mb-4">
            <Sparkles className="w-3 h-3" />
            SIGARA TECHNOLOGIES
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-2">
            Development & <span className="text-[#FEB21A]">Digital Services</span>
          </h2>
          <p className="text-white/70 text-sm leading-relaxed mb-1">Technology & Digital Transformation Consulting</p>
          <p className="text-white/60 text-xs">Empowering businesses with scalable, secure, and future-ready solutions.</p>
        </div>
      </div>

      {/* Vision / Mission / Values / Promise */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { label: 'OUR VISION', text: 'To be the most trusted digital transformation partner for businesses globally.' },
          { label: 'OUR MISSION', text: 'Empower organizations with cutting-edge technology solutions that drive measurable results.' },
          { label: 'OUR VALUES', text: 'Innovation · Integrity · Excellence · Client-First · Long-Term Partnership' },
          { label: 'OUR PROMISE', text: 'Transparent communication, dedicated support, and solutions that grow with your business.' },
        ].map((c) => (
          <div key={c.label} className="bg-white rounded-2xl p-4 border border-[#E5E7EB] hover:border-[#FEB21A]/40 transition-all">
            <div className="text-[10px] font-extrabold text-[#FEB21A] uppercase tracking-widest mb-1.5">{c.label}</div>
            <p className="text-xs text-[#1F2937] leading-relaxed">{c.text}</p>
          </div>
        ))}
      </div>

      {/* Why Choose + 95% */}
      <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-[#E5E7EB]">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
          <div>
            <p className="text-xs font-extrabold text-[#004B84] uppercase tracking-widest mb-1">Why Choose SIGARA?</p>
            <p className="text-sm text-gray-600 max-w-lg">We combine deep business understanding with cutting-edge technology to deliver outcomes, not just deliverables.</p>
          </div>
          <div className="bg-[#004B84] rounded-2xl px-5 py-3 text-center">
            <div className="text-2xl font-extrabold font-heading text-[#FEB21A]">95%</div>
            <p className="text-[10px] text-white/70 font-semibold uppercase tracking-wider">Client Satisfaction</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { label: 'Business-First', desc: 'Technology in service of your goals' },
            { label: 'Modern Tech', desc: 'Latest frameworks and platforms' },
            { label: 'Scalable', desc: 'Built to grow with your business' },
            { label: 'Fast Delivery', desc: 'Agile sprints with on-time delivery' },
            { label: 'Transparent', desc: 'Real-time updates and reporting' },
            { label: 'Cost-Effective', desc: 'Premium quality at competitive pricing' },
          ].map((f) => (
            <div key={f.label} className="bg-white rounded-xl p-3 border border-[#E5E7EB]">
              <div className="flex items-center gap-1.5 mb-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FEB21A]" />
                <span className="text-xs font-bold text-[#004B84]">{f.label}</span>
              </div>
              <p className="text-[10px] text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Service Accordions */}
      <div className="bg-white rounded-3xl p-5 border border-[#E5E7EB] shadow-md">
        <p className="text-sm font-extrabold text-[#004B84] font-heading mb-1">Our Services</p>
        <p className="text-xs text-gray-400 mb-4">Click to explore each service category</p>
        <div className="space-y-2">
          {accordions.map((acc) => {
            const isOpen = openAccordion === acc.id;
            return (
              <div key={acc.id} className="rounded-xl border border-[#E5E7EB] overflow-hidden">
                <button
                  onClick={() => setOpenAccordion(isOpen ? null : acc.id)}
                  className="w-full flex items-center justify-between p-3 text-left hover:bg-[#F8FAFC] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#004B84] flex items-center justify-center">
                      <SigaraIcon name={acc.icon} className="w-4 h-4 text-[#FEB21A]" />
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-[#004B84]">{acc.title}</p>
                      <p className="text-[10px] text-gray-400">{acc.sub}</p>
                    </div>
                  </div>
                  {isOpen
                    ? <ChevronUp className="w-4 h-4 text-[#004B84]" />
                    : <ChevronDown className="w-4 h-4 text-gray-400" />}
                </button>
                {isOpen && (
                  <div className="px-3 pb-3 grid grid-cols-1 sm:grid-cols-2 gap-2 border-t border-[#E5E7EB] pt-3">
                    {acc.items.map((item) => (
                      <div key={item.title} className="bg-[#F8FAFC] rounded-xl p-3 border border-[#E5E7EB]">
                        <p className="text-xs font-bold text-[#004B84] mb-0.5">{item.title}</p>
                        <p className="text-[10px] text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Industries */}
      <div className="bg-white rounded-3xl p-5 border border-[#E5E7EB] shadow-md">
        <p className="text-sm font-extrabold text-[#004B84] font-heading mb-1">Industries We Serve</p>
        <p className="text-xs text-gray-400 mb-4">Delivering digital transformation across diverse sectors</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {industries.map((ind) => (
            <div key={ind.name} className="group bg-[#F8FAFC] rounded-xl p-3 border border-[#E5E7EB] hover:border-[#FEB21A]/40 hover:bg-[#FEB21A]/5 transition-all text-center">
              <div className="w-10 h-10 rounded-xl bg-[#004B84]/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-[#004B84] transition-all">
                <SigaraIcon name={ind.icon} className="w-4 h-4 text-[#004B84] group-hover:text-[#FEB21A]" />
              </div>
              <p className="text-[10px] font-bold text-[#1F2937]">{ind.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-[#004B84] rounded-3xl p-5 shadow-xl">
        <p className="text-sm font-extrabold text-white font-heading mb-1">Technology Stack</p>
        <p className="text-xs text-white/50 mb-4">Modern, proven, and future-ready technologies</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { cat: 'Frontend', items: ['React', 'Angular', 'Vue.js', 'HTML/CSS'] },
            { cat: 'Backend', items: ['.NET/C#', 'Node.js', 'Python', 'REST APIs'] },
            { cat: 'Mobile', items: ['Flutter', 'React Native', 'iOS', 'Android'] },
            { cat: 'Database', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
            { cat: 'Cloud', items: ['Azure', 'AWS', 'Google Cloud', 'Docker'] },
          ].map((stack) => (
            <div key={stack.cat} className="bg-white/10 rounded-xl p-3 border border-white/10">
              <p className="text-[9px] font-extrabold text-[#FEB21A] uppercase tracking-widest mb-2">{stack.cat}</p>
              <ul className="space-y-1">
                {stack.items.map((item) => (
                  <li key={item} className="flex items-center gap-1.5 text-white/70 text-[10px]">
                    <span className="w-1 h-1 rounded-full bg-[#FEB21A] shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Case Studies */}
      <div className="bg-white rounded-3xl p-5 border border-[#E5E7EB] shadow-md">
        <p className="text-sm font-extrabold text-[#004B84] font-heading mb-1">Case Studies</p>
        <p className="text-xs text-gray-400 mb-4">Real projects. Real results.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { num: '01', title: 'Digital Marketing Growth', industry: 'Real Estate · India', results: ['312% organic traffic', '68% lower cost-per-lead', '45 leads/month'] },
            { num: '02', title: 'Website Transformation', industry: 'Healthcare Provider · UAE', results: ['4x appointment bookings', '90% mobile satisfaction'] },
            { num: '03', title: 'Custom Software', industry: 'Logistics Company · USA', results: ['60% less manual effort', '99.5% delivery accuracy', '40% faster ops'] },
          ].map((cs) => (
            <div key={cs.num} className="bg-[#F8FAFC] rounded-2xl overflow-hidden border border-[#E5E7EB]">
              <div className="bg-[#004B84] p-3">
                <p className="text-[10px] font-extrabold text-[#FEB21A] uppercase tracking-widest">CASE {cs.num}</p>
                <p className="text-white font-heading font-bold text-xs">{cs.title}</p>
                <p className="text-[#FEB21A]/60 text-[9px] mt-0.5">{cs.industry}</p>
              </div>
              <div className="p-3 space-y-1">
                {cs.results.map((r) => (
                  <div key={r} className="flex items-center gap-1.5 text-[10px] font-semibold text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FEB21A] shrink-0" />{r}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Engagement Models */}
      <div className="bg-[#F8FAFC] rounded-3xl p-5 border border-[#E5E7EB]">
        <p className="text-sm font-extrabold text-[#004B84] font-heading mb-1">Engagement Models</p>
        <p className="text-xs text-gray-400 mb-4">Flexible delivery options designed to fit your needs</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { label: 'MODEL 01', title: 'Fixed Cost Projects', desc: 'Fixed budget & timeline. Best for: Websites, Apps, Portals.' },
            { label: 'MODEL 02', title: 'Dedicated Resource', desc: 'Hire dedicated SIGARA engineers. Best for: Ongoing development.' },
            { label: 'MODEL 03', title: 'Consulting & Advisory', desc: 'CTO-as-a-Service, audits. Best for: Strategy & planning.' },
          ].map((m) => (
            <div key={m.label} className="bg-white rounded-2xl p-4 border border-[#E5E7EB]">
              <p className="text-[10px] font-extrabold text-[#FEB21A] uppercase tracking-widest mb-1">{m.label}</p>
              <p className="text-xs font-bold text-[#004B84] mb-1.5">{m.title}</p>
              <p className="text-[10px] text-gray-500 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-[#FEB21A] to-[#E5A400] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#004B84]/70 mb-1">READY TO BUILD WHAT'S NEXT?</p>
          <h3 className="text-xl font-heading font-extrabold text-[#004B84]">Talk to SIGARA Technologies</h3>
          <p className="text-xs text-[#004B84]/80 mt-1">Let's turn your business goals into scalable digital solutions.</p>
        </div>
        <a
          href={`tel:${contact}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#004B84] text-[#FEB21A] font-heading font-extrabold text-xs hover:bg-[#0D5FA3] transition-all shadow-xl shrink-0"
        >
          <Phone className="w-4 h-4" />
          {contact}
        </a>
      </div>
    </div>
  );
}
