import { useState } from 'react';
import { CASE_STUDIES } from '../constants/data';
import {
  FlaskConical,
  CheckCircle2,
  AlertCircle,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  Quote,
  Layers,
  Activity,
  Microscope,
  Award
} from 'lucide-react';

interface CaseStudiesProps {
  onOpenConsultation: () => void;
}

export default function CaseStudies({ onOpenConsultation }: CaseStudiesProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeCase = CASE_STUDIES[activeIdx];

  return (
    <section className="py-20 lg:py-28 bg-white text-gray-900 relative overflow-hidden border-y border-[#FEB21A]/30">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#004B84]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FEB21A]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FEB21A] text-xs font-bold uppercase tracking-wider font-number border border-[#FEB21A]/30">
            <Microscope className="w-4 h-4 text-[#FEB21A]" />
            Case Study Portfolio • Food Product Development
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#004B84] tracking-tight">
            Formulation, Stability & <span className="text-[#FEB21A]">Commercialization</span>
          </h2>

          <p className="text-sm sm:text-base text-black font-body max-w-2xl mx-auto leading-relaxed">
            Real R&D journeys solving complex food science hurdles—from moisture migration and heat tolerance to precise gel kinetics.
          </p>
        </div>

        {/* Interactive Case Study Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CASE_STUDIES.map((cs, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={cs.id}
                onClick={() => setActiveIdx(idx)}
                className={`text-left p-5 rounded-2xl transition-all relative overflow-hidden border cursor-pointer ${
                  isActive
                    ? 'bg-[#004B84] border-[#FEB21A] shadow-xl shadow-[#004B84]/40 scale-[1.02]'
                    : 'bg-white border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-black font-number uppercase tracking-wider px-2.5 py-0.5 rounded-md ${
                    isActive ? 'bg-[#FEB21A] text-[#004B84]' : 'bg-gray-200 text-black border border-gray-300'
                  }`}>
                    {cs.caseNumber}
                  </span>
                  <span className={`text-[11px] font-semibold ${isActive ? 'text-white' : 'text-black'}`}>
                    {cs.category}
                  </span>
                </div>

                <h3 className={`font-heading font-bold text-base sm:text-lg leading-snug mb-1 ${isActive ? 'text-white' : 'text-black'}`}>
                  {cs.title}
                </h3>
                <p className={`text-xs line-clamp-1 ${isActive ? 'text-white' : 'text-black'}`}>
                  {cs.subtitle}
                </p>

                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FEB21A]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Case Study Detail Dashboard */}
        <div className="bg-white/95 text-[#1F2937] rounded-3xl p-6 sm:p-10 border border-[#FEB21A]/40 shadow-2xl backdrop-blur-xl space-y-10">

          {/* Header Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-8 border-b border-[#E5E7EB]">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-[#004B84] text-[#FEB21A] text-xs font-black font-number tracking-wider">
                  {activeCase.caseNumber}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#004B84]/10 text-[#004B84] text-xs font-bold font-number uppercase tracking-wide">
                  {activeCase.status}
                </span>
                <span className="text-xs font-bold text-gray-500">
                  {activeCase.category}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#1F2937] tracking-tight">
                {activeCase.title}
              </h3>
              <p className="text-base sm:text-lg font-semibold text-[#004B84]">
                {activeCase.subtitle}
              </p>
            </div>

            {activeCase.tagline && (
              <div className="bg-[#004B84]/5 border-l-4 border-[#FEB21A] p-4 rounded-r-xl max-w-sm">
                <p className="text-xs font-bold text-[#004B84] italic">
                  "{activeCase.tagline}"
                </p>
              </div>
            )}
          </div>

          {/* 2-Column Scientific Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* Left Column: Overview, The Challenge & R&D Approach */}
            <div className="lg:col-span-7 space-y-8">

              {/* Project Overview */}
              <div className="space-y-3">
                <h4 className="text-xs font-black font-number uppercase tracking-wider text-[#004B84] flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#FEB21A]" />
                  Project Overview
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed font-body">
                  {activeCase.projectOverview}
                </p>
              </div>

              {/* The Challenge Box */}
              <div className="bg-red-50/70 border border-red-200/80 rounded-2xl p-6 space-y-4">
                <h4 className="text-xs font-black font-number uppercase tracking-wider text-red-800 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600" />
                  The Challenge
                </h4>
                <p className="text-xs sm:text-sm text-red-950 leading-relaxed font-medium">
                  {activeCase.theChallenge.overview}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {activeCase.theChallenge.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-red-900">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {activeCase.theChallenge.subnote && (
                  <p className="text-xs font-bold text-red-800 italic pt-2 border-t border-red-200">
                    💡 {activeCase.theChallenge.subnote}
                  </p>
                )}
              </div>

              {/* Our R&D Approach */}
              <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-6 space-y-4">
                <h4 className="text-xs font-black font-number uppercase tracking-wider text-[#004B84] flex items-center gap-2">
                  <FlaskConical className="w-4 h-4 text-[#FEB21A]" />
                  Our R&D Approach & Iterative Cycle
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {activeCase.rdApproach.overview}
                </p>

                {activeCase.rdApproach.timeline && (
                  <div className="inline-block px-3 py-1 rounded-lg bg-[#004B84] text-[#004B84] text-xs font-bold font-number">
                    ⏱ {activeCase.rdApproach.timeline}
                  </div>
                )}

                {activeCase.rdApproach.cycleSteps && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {activeCase.rdApproach.cycleSteps.map((step, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 bg-white px-3.5 py-2 rounded-xl border border-[#E5E7EB] shadow-xs">
                        <span className="w-5 h-5 rounded-full bg-[#004B84] text-[#FEB21A] text-[10px] font-black flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-xs font-bold text-[#1F2937]">{step}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Confidentiality Notice */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-100 border border-gray-200 text-gray-600 text-xs">
                <ShieldAlert className="w-4 h-4 text-[#004B84] shrink-0" />
                <span className="leading-tight">
                  <strong className="font-semibold text-gray-800">Confidentiality Note:</strong> {activeCase.confidentialityNote}
                </span>
              </div>

            </div>

            {/* Right Column: Visual, Technical Focus, Key Learning & Outcome */}
            <div className="lg:col-span-5 space-y-6">

              {/* Product Visual & Metric Highlight */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E5E7EB] group">
                <img
                  src={activeCase.image}
                  alt={activeCase.title}
                  className="w-full h-52 sm:h-60 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-[#000000]/30 to-transparent flex flex-col justify-end p-5 text-[#004B84]">
                  <span className="text-[10px] font-bold font-number uppercase tracking-wider text-[#FEB21A] mb-1">
                    Verified Benchmark
                  </span>
                  <p className="font-heading font-extrabold text-sm sm:text-base leading-snug">
                    {activeCase.metric}
                  </p>
                </div>
              </div>

              {/* Key Technical Focus Areas */}
              <div className="space-y-3">
                <h4 className="text-xs font-black font-number uppercase tracking-wider text-[#004B84] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#FEB21A]" />
                  Key Technical Focus Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeCase.technicalFocusAreas.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-[#004B84]/5 text-[#004B84] border border-[#004B84]/20 text-xs font-bold hover:bg-[#004B84] hover:text-[#FEB21A] transition-colors cursor-default"
                    >
                      • {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Learning Quote Box */}
              <div className="bg-[#004B84] text-[#004B84] p-5 rounded-2xl border border-[#FEB21A]/40 relative overflow-hidden shadow-lg space-y-3">
                <Quote className="w-8 h-8 text-[#FEB21A]/30 absolute top-3 right-3 pointer-events-none" />
                <h4 className="text-[11px] font-black font-number uppercase tracking-wider text-[#FEB21A]">
                  Key R&D Learning
                </h4>
                <p className="text-xs sm:text-sm text-gray-100 font-medium leading-relaxed">
                  "{activeCase.keyLearning.main}"
                </p>
                {activeCase.keyLearning.quote && (
                  <p className="text-xs font-extrabold text-[#FEB21A] italic border-t border-white/20 pt-2">
                    — {activeCase.keyLearning.quote}
                  </p>
                )}
              </div>

              {/* Outcome Box */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 space-y-3">
                <h4 className="text-xs font-black font-number uppercase tracking-wider text-emerald-800 flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-600" />
                  Commercial Outcome
                </h4>
                <p className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
                  {activeCase.outcome.summary}
                </p>
                <div className="space-y-1.5 pt-1">
                  {activeCase.outcome.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-emerald-900 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Consultation CTA */}
          <div className="pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="font-heading font-extrabold text-base text-[#1F2937]">
                Facing similar formulation or shelf-life bottlenecks?
              </h4>
              <p className="text-xs text-gray-500 font-body">
                Our food scientists will analyze your product matrix and formulate scalable solutions.
              </p>
            </div>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-[#004B84] text-[#FEB21A] hover:bg-[#0D5FA3] hover:text-[#004B84] font-heading font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl border border-[#FEB21A]/40 shadow-lg transition-all shrink-0 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              Discuss Your Product Challenge
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
