import { useState } from 'react';
import { Atom, Sparkles, ShieldCheck, Zap, Activity } from 'lucide-react';

export default function InnovationSection() {
  const [activeNode, setActiveNode] = useState(0);

  const nodes = [
    { title: "Hydrocolloid Emulsification", desc: "Clean-label stabilization without synthetic gums using citrus fiber & apple pectin matrices." },
    { title: "Water Activity (a_w) Tuning", desc: "Precise moisture management preventing microbial proliferation while preserving soft texture." },
    { title: "Polyphenol Anti-Rancidity", desc: "Rosemary and green tea botanical extracts neutralizing lipid oxidation kinetics naturally." },
    { title: "Taste Receptor Masking", desc: "Sodium channel blockers and natural flavor esters neutralizing bitterness in plant proteins." }
  ];

  return (
    <section className="py-24 bg-white text-gray-900 relative overflow-hidden border-y border-[#FEB21A]/30">
      {/* Background Hero Image with Dark Overlay */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1600"
          alt="Food Science Laboratory"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/90 to-[#000000]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Overlay */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004B84] text-[#FEB21A] text-xs font-bold uppercase tracking-widest font-number mb-4 border border-[#FEB21A]/40 shadow-lg">
            <Atom className="w-4 h-4 text-[#FEB21A] animate-spin" />
            Biochemical Precision
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#004B84] tracking-tight">
            Innovation Powered By Science
          </h2>
          <p className="text-base sm:text-lg text-[#9CA3AF] mt-4 font-body leading-relaxed">
            We operate at the molecular level to solve taste, stability, and industrial scalability challenges for the world's most ambitious food brands.
          </p>
        </div>

        {/* Interactive Molecular Nodes Canvas Representation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nodes.map((node, idx) => (
            <div
              key={idx}
              onClick={() => setActiveNode(idx)}
              className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                activeNode === idx
                  ? 'bg-[#004B84] text-[#004B84] border-[#FEB21A] shadow-2xl ring-2 ring-[#FEB21A]/50 scale-105'
                  : 'glass-card text-gray-900 text-[#004B84]/80 border-[#FEB21A]/20 hover:border-[#FEB21A]/50'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold ${
                  activeNode === idx ? 'bg-[#FEB21A] text-[#004B84]' : 'bg-[#004B84] text-[#FEB21A]'
                }`}>
                  <Activity className="w-5 h-5" />
                </div>
                <span className="text-xs font-extrabold font-number text-[#FEB21A]">
                  Node 0{idx + 1}
                </span>
              </div>

              <h3 className="text-lg font-heading font-extrabold text-[#004B84] mb-2">
                {node.title}
              </h3>

              <p className="text-xs text-[#9CA3AF] font-body leading-relaxed">
                {node.desc}
              </p>

              {activeNode === idx && (
                <div className="mt-4 pt-3 border-t border-[#FEB21A]/30 flex items-center gap-1.5 text-[11px] font-bold text-[#FEB21A]">
                  <Sparkles className="w-3.5 h-3.5" /> Active R&D Protocol Activated
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
