import React, { useState } from 'react';
import {
  TrendingUp, Globe, Code2, Smartphone, Bot, Cloud, Palette, BarChart3,
  Lightbulb, Building2, HeartPulse, GraduationCap, Factory, ShoppingBag,
  Truck, Briefcase, Rocket, Target, Cpu, Layers, Zap, MessageSquare,
  FileText, Users, Sparkles, Award, ShieldCheck, CheckCircle2, ArrowRight,
  MapPin, Phone, ChevronDown, ChevronUp, Star
} from 'lucide-react';
import {
  SIGARA_COMPANY, SIGARA_ABOUT_CARDS, SIGARA_STORY, SIGARA_STORY_QUOTE,
  SIGARA_MAIN_SERVICES, SIGARA_DIGITAL_MARKETING, SIGARA_WEBSITE_DEV,
  SIGARA_CUSTOM_SOFTWARE, SIGARA_AI_AUTOMATION, SIGARA_INDUSTRIES,
  SIGARA_TECH_STACK, SIGARA_PROCESS_STEPS, SIGARA_WHY_CHOOSE,
  SIGARA_CASE_STUDIES, SIGARA_ENGAGEMENT_MODELS, SIGARA_COMMITMENT
} from '../constants/sigaraData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp, Globe, Code2, Smartphone, Bot, Cloud, Palette, BarChart3,
  Lightbulb, Building2, HeartPulse, GraduationCap, Factory, ShoppingBag,
  Truck, Briefcase, Rocket, Target, Cpu, Layers, Zap, MessageSquare,
  FileText, Users, Sparkles, Award, ShieldCheck, CheckCircle2,
};

const Icon = ({ name, className }: { name: string; className?: string }) => {
  const Component = iconMap[name] || Star;
  return <Component className={className} />;
};

const stackCategoryColors: Record<string, string> = {
  Frontend: '#004B84',
  Backend: '#0D5FA3',
  Mobile: '#1A6B9A',
  Database: '#FEB21A',
  Cloud: '#E5A400',
};

export default function SigaraServicesPage() {
  const [openService, setOpenService] = useState<string | null>(null);

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FFFDF8] min-h-screen">

      {/* ── HERO ── */}
      <section className="relative bg-[#004B84] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJWNDBoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FEB21A]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEB21A] text-[#004B84] text-[10px] font-extrabold uppercase tracking-widest mb-6">
              <Sparkles className="w-3 h-3" />
              SIGARA TECHNOLOGIES
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight mb-4">
              Development &<br />
              <span className="text-[#FEB21A]">Digital Services</span>
            </h1>
            <p className="text-lg text-[#FEB21A] font-semibold mb-3 font-heading">
              Technology & Digital Transformation Consulting
            </p>
            <p className="text-white/80 text-base leading-relaxed mb-2 max-w-2xl">
              {SIGARA_COMPANY.description}
            </p>
            <p className="text-white/60 text-sm mb-8">
              {SIGARA_COMPANY.supportingStatement}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href={`tel:${SIGARA_COMPANY.contact}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FEB21A] text-[#004B84] font-heading font-extrabold text-sm hover:bg-white transition-all shadow-lg hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                Start a Project
              </a>
              <a
                href="#services-overview"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white border border-white/20 font-heading font-bold text-sm hover:bg-white/20 transition-all"
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              {SIGARA_COMPANY.geography.map((g) => (
                <div key={g} className="flex items-center gap-1.5 text-white/60 text-xs">
                  <MapPin className="w-3 h-3 text-[#FEB21A]" />
                  {g}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004B84]/10 text-[#004B84] text-[10px] font-extrabold uppercase tracking-widest mb-4">
                About SIGARA
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#004B84] mb-4">
                Elevating Businesses to Their Peak
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                {SIGARA_COMPANY.description}
              </p>
              <p className="text-[#004B84] font-semibold text-sm">
                {SIGARA_COMPANY.supportingStatement}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SIGARA_ABOUT_CARDS.map((card) => (
                <div
                  key={card.id}
                  className="bg-[#F8FAFC] rounded-2xl p-5 border border-[#E5E7EB] hover:border-[#FEB21A]/50 hover:shadow-md transition-all"
                >
                  <div className="text-[10px] font-extrabold text-[#FEB21A] uppercase tracking-widest mb-2">
                    {card.label}
                  </div>
                  <p className="text-[#1F2937] text-sm leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="py-16 bg-[#F8FAFC] border-y border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004B84]/10 text-[#004B84] text-[10px] font-extrabold uppercase tracking-widest mb-4">
              Our Story
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#004B84]">
              Why We Exist
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {SIGARA_STORY.map((s) => (
              <div key={s.num} className="bg-white rounded-2xl p-6 border border-[#E5E7EB] shadow-sm hover:shadow-md transition-all">
                <div className="text-4xl font-extrabold text-[#FEB21A]/30 font-heading mb-3">{s.num}</div>
                <h3 className="text-base font-extrabold text-[#004B84] font-heading mb-2">{s.heading}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#004B84] rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-[#FEB21A] to-transparent rounded-3xl" />
            <div className="relative">
              <div className="text-4xl text-[#FEB21A] mb-4">"</div>
              <blockquote className="text-xl sm:text-2xl font-heading font-bold text-white mb-4 max-w-2xl mx-auto leading-snug">
                {SIGARA_STORY_QUOTE.text}
              </blockquote>
              <p className="text-[#FEB21A] text-sm font-semibold mb-2">{SIGARA_STORY_QUOTE.attribution}</p>
              <div className="inline-flex items-center gap-2 text-white/50 text-xs">
                <Globe className="w-3 h-3" />
                {SIGARA_STORY_QUOTE.credibility}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section id="services-overview" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEB21A] text-[#004B84] text-[10px] font-extrabold uppercase tracking-widest mb-4">
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#004B84] mb-3">
              End-to-End Digital Solutions
            </h2>
            <p className="text-gray-500 text-sm">End-to-end digital solutions crafted for growth</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SIGARA_MAIN_SERVICES.map((svc) => (
              <div
                key={svc.id}
                className="group bg-[#F8FAFC] rounded-2xl p-6 border border-[#E5E7EB] hover:border-[#004B84]/30 hover:bg-white hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#004B84] text-[#FEB21A] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Icon name={svc.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-extrabold text-[#004B84]/10 font-heading group-hover:text-[#FEB21A]/40 transition-colors">
                    {svc.num}
                  </span>
                </div>
                <h3 className="font-heading font-extrabold text-[#004B84] text-base mb-1">{svc.title}</h3>
                <p className="text-gray-500 text-xs">{svc.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE DETAILS (Accordion) ── */}
      <section className="py-16 bg-[#F8FAFC] border-y border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#004B84]">Service Deep-Dives</h2>
            <p className="text-gray-500 text-sm mt-2">Click each service to explore capabilities</p>
          </div>

          {/* Digital Marketing */}
          <ServiceAccordion
            id="dm"
            open={openService}
            onToggle={setOpenService}
            icon="TrendingUp"
            title="Digital Marketing Services"
            sub="Drive traffic · Generate leads · Maximize ROI"
            items={SIGARA_DIGITAL_MARKETING.map((i) => ({ title: i.title, desc: i.desc }))}
          />

          {/* Website Dev */}
          <ServiceAccordion
            id="web"
            open={openService}
            onToggle={setOpenService}
            icon="Globe"
            title="Website Development"
            sub="Professional, scalable web experiences"
            items={SIGARA_WEBSITE_DEV}
          />

          {/* Custom Software */}
          <ServiceAccordion
            id="software"
            open={openService}
            onToggle={setOpenService}
            icon="Code2"
            title="Custom Software Development"
            sub="Building scalable, enterprise-grade software tailored to your unique business needs"
            items={SIGARA_CUSTOM_SOFTWARE}
          />

          {/* AI & Automation */}
          <ServiceAccordion
            id="ai"
            open={openService}
            onToggle={setOpenService}
            icon="Bot"
            title="AI & Automation Solutions"
            sub="Intelligent systems that work while you sleep"
            items={SIGARA_AI_AUTOMATION}
          />

          {/* Mobile + Cloud + UI/UX + BI + IT */}
          <ServiceAccordion
            id="mobile"
            open={openService}
            onToggle={setOpenService}
            icon="Smartphone"
            title="Mobile Apps"
            sub="Cross-platform mobile application development"
            items={[
              { title: 'Flutter', desc: 'Beautiful native apps for iOS and Android from a single codebase.' },
              { title: 'React Native', desc: 'High-performance cross-platform apps with native feel.' },
              { title: 'iOS & Android', desc: 'Dedicated native app development for Apple and Google platforms.' },
            ]}
          />
          <ServiceAccordion
            id="cloud"
            open={openService}
            onToggle={setOpenService}
            icon="Cloud"
            title="Cloud & API Solutions"
            sub="Modern cloud infrastructure, API design and integration"
            items={[
              { title: 'Microsoft Azure', desc: 'Enterprise-grade cloud hosting, Azure DevOps, and managed services.' },
              { title: 'AWS', desc: 'Scalable cloud infrastructure powered by Amazon Web Services.' },
              { title: 'Google Cloud', desc: 'GCP compute, storage, and data analytics services.' },
              { title: 'REST APIs & Integration', desc: 'API design, third-party integrations, and microservices architecture.' },
            ]}
          />
          <ServiceAccordion
            id="uiux"
            open={openService}
            onToggle={setOpenService}
            icon="Palette"
            title="UI/UX Design"
            sub="Design as the foundation of every great product"
            items={[
              { title: 'Research & Discovery', desc: 'User research, persona creation, and competitive analysis.' },
              { title: 'Wireframes', desc: 'Low and high-fidelity wireframes for web and mobile applications.' },
              { title: 'Prototypes', desc: 'Interactive prototypes for validation before development begins.' },
            ]}
          />
          <ServiceAccordion
            id="bi"
            open={openService}
            onToggle={setOpenService}
            icon="BarChart3"
            title="Business Intelligence"
            sub="Turning data into actionable insights"
            items={[
              { title: 'Custom Dashboards', desc: 'Real-time business dashboards tailored to your KPIs.' },
              { title: 'Analytics', desc: 'Advanced data analytics to identify trends and opportunities.' },
              { title: 'Reporting', desc: 'Automated reporting systems for operations, finance, and sales.' },
            ]}
          />
          <ServiceAccordion
            id="it"
            open={openService}
            onToggle={setOpenService}
            icon="Lightbulb"
            title="IT Consulting"
            sub="Technology strategy and digital transformation partnership"
            items={[
              { title: 'Technology Strategy', desc: 'Define your technology roadmap aligned to business goals.' },
              { title: 'Digital Transformation', desc: 'End-to-end transformation consulting for modern enterprises.' },
            ]}
          />
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004B84]/10 text-[#004B84] text-[10px] font-extrabold uppercase tracking-widest mb-4">
              Industries
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#004B84] mb-2">Industries We Serve</h2>
            <p className="text-gray-500 text-sm">Delivering digital transformation across diverse sectors</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SIGARA_INDUSTRIES.map((ind) => (
              <div
                key={ind.name}
                className="group bg-[#F8FAFC] rounded-2xl p-5 border border-[#E5E7EB] hover:border-[#FEB21A]/50 hover:bg-[#FEB21A]/5 hover:shadow-md transition-all text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-[#004B84]/10 text-[#004B84] flex items-center justify-center mx-auto mb-3 group-hover:bg-[#004B84] group-hover:text-[#FEB21A] transition-all">
                  <Icon name={ind.icon} className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold font-heading text-[#1F2937]">{ind.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-16 bg-[#004B84]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEB21A] text-[#004B84] text-[10px] font-extrabold uppercase tracking-widest mb-4">
              Tech Stack
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mb-2">Our Technology Stack</h2>
            <p className="text-white/60 text-sm">Modern, proven, and future-ready technologies</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SIGARA_TECH_STACK.map((stack) => (
              <div
                key={stack.category}
                className="bg-white/10 rounded-2xl p-5 border border-white/10 hover:bg-white/15 transition-all"
              >
                <div
                  className="text-[10px] font-extrabold uppercase tracking-widest mb-3 px-2 py-1 rounded-lg inline-block"
                  style={{ background: stackCategoryColors[stack.category] + '40', color: stack.category === 'Database' || stack.category === 'Cloud' ? '#FEB21A' : '#93C5FD' }}
                >
                  {stack.category}
                </div>
                <ul className="space-y-2">
                  {stack.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/80 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FEB21A] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004B84]/10 text-[#004B84] text-[10px] font-extrabold uppercase tracking-widest mb-4">
              Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#004B84] mb-2">Our Project Execution Process</h2>
            <p className="text-gray-500 text-sm">A structured, transparent, and collaborative delivery methodology</p>
          </div>

          {/* Desktop horizontal timeline */}
          <div className="hidden lg:flex items-start gap-0 mb-8">
            {SIGARA_PROCESS_STEPS.map((step, idx) => (
              <div key={step.num} className="flex-1 relative">
                {idx < SIGARA_PROCESS_STEPS.length - 1 && (
                  <div className="absolute top-5 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#004B84] to-[#FEB21A]/50 z-0" />
                )}
                <div className="relative z-10 flex flex-col items-center text-center px-2">
                  <div className="w-10 h-10 rounded-full bg-[#004B84] text-[#FEB21A] flex items-center justify-center text-xs font-extrabold mb-3 border-2 border-[#FEB21A]/40">
                    {step.num}
                  </div>
                  <p className="text-xs font-extrabold text-[#004B84] font-heading mb-1">{step.title}</p>
                  <p className="text-[10px] text-gray-500 leading-tight">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile vertical timeline */}
          <div className="lg:hidden space-y-0">
            {SIGARA_PROCESS_STEPS.map((step, idx) => (
              <div key={step.num} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-[#004B84] text-[#FEB21A] flex items-center justify-center text-xs font-extrabold shrink-0">
                    {step.num}
                  </div>
                  {idx < SIGARA_PROCESS_STEPS.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-[#004B84] to-[#FEB21A]/30 my-1" style={{ minHeight: '32px' }} />
                  )}
                </div>
                <div className="pb-6">
                  <p className="text-sm font-extrabold text-[#004B84] font-heading mb-0.5">{step.title}</p>
                  <p className="text-xs text-gray-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-400 mt-4 italic">
            Each phase includes client review checkpoints and transparent reporting.
          </p>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="py-16 bg-[#F8FAFC] border-y border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEB21A] text-[#004B84] text-[10px] font-extrabold uppercase tracking-widest mb-4">
              Why SIGARA
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#004B84] mb-3">Why Choose SIGARA?</h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              We combine deep business understanding with cutting-edge technology to deliver outcomes, not just deliverables.
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="bg-[#004B84] text-white rounded-2xl px-8 py-5 text-center shadow-xl">
              <div className="text-4xl font-extrabold font-heading text-[#FEB21A] mb-1">95%</div>
              <p className="text-xs text-white/70 font-semibold uppercase tracking-wider">Client Satisfaction Rate</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SIGARA_WHY_CHOOSE.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-6 border border-[#E5E7EB] hover:border-[#004B84]/30 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#004B84]/10 text-[#004B84] flex items-center justify-center group-hover:bg-[#004B84] group-hover:text-[#FEB21A] transition-all">
                    <Icon name={f.icon} className="w-4 h-4" />
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-[#FEB21A] ml-auto" />
                </div>
                <h3 className="font-heading font-extrabold text-[#004B84] text-sm mb-1">{f.title}</h3>
                <p className="text-gray-500 text-xs">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004B84]/10 text-[#004B84] text-[10px] font-extrabold uppercase tracking-widest mb-4">
              Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#004B84] mb-2">Case Studies</h2>
            <p className="text-gray-500 text-sm">Real projects. Real results.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {SIGARA_CASE_STUDIES.map((cs) => (
              <div
                key={cs.num}
                className="bg-[#F8FAFC] rounded-3xl overflow-hidden border border-[#E5E7EB] hover:shadow-xl hover:border-[#004B84]/20 transition-all group"
              >
                <div className="bg-[#004B84] p-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-[10px] font-extrabold text-[#FEB21A] uppercase tracking-widest">
                      CASE STUDY {cs.num}
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-[#FEB21A]/20 flex items-center justify-center">
                      <Icon name={cs.icon} className="w-4 h-4 text-[#FEB21A]" />
                    </div>
                  </div>
                  <h3 className="text-white font-heading font-extrabold text-base">{cs.title}</h3>
                  <p className="text-[#FEB21A]/70 text-[10px] mt-1">{cs.industry}</p>
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <div className="text-[10px] font-extrabold text-red-500 uppercase tracking-wider mb-1">Challenge</div>
                    <p className="text-gray-600 text-xs leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold text-[#004B84] uppercase tracking-wider mb-1">Solution</div>
                    <p className="text-gray-600 text-xs leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold text-green-600 uppercase tracking-wider mb-2">Results</div>
                    <ul className="space-y-1">
                      {cs.results.map((r) => (
                        <li key={r} className="flex items-center gap-2 text-xs text-gray-700 font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FEB21A] shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODELS ── */}
      <section className="py-16 bg-[#004B84]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEB21A] text-[#004B84] text-[10px] font-extrabold uppercase tracking-widest mb-4">
              Engagement
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mb-2">Engagement Models</h2>
            <p className="text-white/60 text-sm">Flexible delivery options designed to fit your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SIGARA_ENGAGEMENT_MODELS.map((model) => (
              <div
                key={model.id}
                className="bg-white/10 rounded-3xl p-6 border border-white/10 hover:bg-white/15 hover:border-[#FEB21A]/30 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[10px] font-extrabold text-[#FEB21A] uppercase tracking-widest">{model.label}</div>
                  <div className="w-9 h-9 rounded-xl bg-[#FEB21A]/20 flex items-center justify-center">
                    <Icon name={model.icon} className="w-4 h-4 text-[#FEB21A]" />
                  </div>
                </div>
                <h3 className="text-white font-heading font-extrabold text-base mb-2">{model.title}</h3>
                <p className="text-white/60 text-xs mb-4 leading-relaxed">{model.desc}</p>
                <ul className="space-y-2 mb-4">
                  {model.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-white/70 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FEB21A] shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-white/10 pt-3">
                  <span className="text-[10px] text-[#FEB21A] font-bold">Best for: </span>
                  <span className="text-[10px] text-white/60">{model.bestFor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMITMENT ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004B84]/10 text-[#004B84] text-[10px] font-extrabold uppercase tracking-widest mb-4">
              Our Commitment
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#004B84] mb-2">Our Commitment to Excellence</h2>
            <p className="text-gray-500 text-sm">Built on trust. Driven by results. Committed to your long-term success.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {SIGARA_COMMITMENT.map((c) => (
              <div
                key={c.title}
                className="group bg-[#F8FAFC] rounded-2xl p-5 border border-[#E5E7EB] hover:border-[#004B84]/30 hover:shadow-lg hover:bg-white transition-all text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-[#004B84] text-[#FEB21A] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={c.icon} className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-extrabold text-[#004B84] text-sm mb-2">{c.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-16 bg-[#F8FAFC] border-t border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEB21A] text-[#004B84] text-[10px] font-extrabold uppercase tracking-widest mb-6">
            <Sparkles className="w-3 h-3" />
            Get Started
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#004B84] mb-4">
            Ready to Build What's Next?
          </h2>
          <p className="text-gray-500 mb-8 text-base">
            Let's turn your business goals into scalable digital solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href={`tel:${SIGARA_COMPANY.contact}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#004B84] text-white font-heading font-extrabold text-sm hover:bg-[#0D5FA3] transition-all shadow-lg hover:scale-105"
            >
              <Phone className="w-4 h-4 text-[#FEB21A]" />
              Talk to SIGARA
            </a>
            <a
              href={`tel:${SIGARA_COMPANY.contact}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#FEB21A] text-[#004B84] font-heading font-extrabold text-sm hover:bg-[#E5A400] transition-all shadow-md hover:scale-105"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
            <Phone className="w-4 h-4 text-[#004B84]" />
            <a href={`tel:${SIGARA_COMPANY.contact}`} className="font-bold text-[#004B84] hover:text-[#FEB21A] transition-colors">
              {SIGARA_COMPANY.contact}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── Accordion Component ──
interface AccordionItem { title: string; desc: string; }
interface AccordionProps {
  id: string;
  open: string | null;
  onToggle: (id: string | null) => void;
  icon: string;
  title: string;
  sub: string;
  items: AccordionItem[];
}

function ServiceAccordion({ id, open, onToggle, icon, title, sub, items }: AccordionProps) {
  const isOpen = open === id;
  return (
    <div className="mb-3 rounded-2xl border border-[#E5E7EB] bg-white overflow-hidden hover:border-[#004B84]/30 transition-all">
      <button
        onClick={() => onToggle(isOpen ? null : id)}
        className="w-full flex items-center justify-between p-5 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#004B84] text-[#FEB21A] flex items-center justify-center shrink-0">
            <Icon name={icon} className="w-5 h-5" />
          </div>
          <div>
            <p className="font-heading font-extrabold text-[#004B84] text-sm">{title}</p>
            <p className="text-gray-400 text-xs">{sub}</p>
          </div>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#004B84] shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-5 pb-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 border-t border-[#E5E7EB] pt-4">
          {items.map((item) => (
            <div key={item.title} className="bg-[#F8FAFC] rounded-xl p-4 border border-[#E5E7EB]">
              <h4 className="font-heading font-bold text-[#004B84] text-xs mb-1">{item.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
