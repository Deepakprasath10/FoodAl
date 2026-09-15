import { Sparkles, Target, Compass } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFC] text-[#004B84] text-xs font-bold uppercase tracking-wider font-number mb-3 border border-[#E5E7EB]">
            <Sparkles className="w-3.5 h-3.5 text-[#FEB21A]" />
            Brand Introduction
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#1F2937] tracking-tight">
            Who We Are
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <p className="lg:col-span-8 text-base text-[#6B7280] font-body leading-relaxed">
            Food Alchemist is the one-stop destination for the entire food business needs. Our team of experts works in collaboration with clients to develop innovative and market-ready food products. We conduct thorough research on market trends, perform sensory evaluations, and optimize recipes to deliver products that meet consumer demands for taste, nutrition, and quality. By partnering with Food Alchemist, your culinary concepts can be transformed into successful and profitable products in the highly competitive food industry.
          </p>
          <div className="lg:col-span-4 bg-[#004B84] text-white rounded-3xl p-6 flex items-center border border-[#FEB21A]/30 shadow-lg">
            <p className="text-base sm:text-lg font-heading font-bold leading-snug">
              A bold and innovative food consultancy brand that blends science, creativity, and innovation to transform ideas into successful food products.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] shadow-sm hover:shadow-lg hover:border-[#FEB21A] transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#F8FAFC] text-[#004B84] flex items-center justify-center border border-[#E5E7EB]">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-heading font-extrabold text-[#1F2937]">Vision</h2>
            <p className="text-sm text-[#6B7280] font-body leading-relaxed">
              To be the leading force in transforming food ideas into innovative, sustainable, and market-ready products through the perfect blend of science, creativity, and strategy.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] shadow-sm hover:shadow-lg hover:border-[#FEB21A] transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#F8FAFC] text-[#004B84] flex items-center justify-center border border-[#E5E7EB]">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-heading font-extrabold text-[#1F2937]">Mission</h2>
            <p className="text-sm text-[#6B7280] font-body leading-relaxed">
              Our mission is to empower food startups and brands by providing expert consultancy, scientific solutions, and innovative product development. We aim to combine research, strategy, and creativity to craft foods that are impactful, and sustainable.
            </p>
          </div>
        </div>

        {/* Journey & Growth Callout Banner */}
        <div className="bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] rounded-3xl p-10 sm:p-14 border border-[#E5E7EB] shadow-sm flex flex-col items-center text-center relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#004B84] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-[#FEB21A] opacity-[0.05] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#004B84] text-xs font-bold uppercase tracking-widest font-number mb-6 border border-[#E5E7EB] shadow-sm">
              Our Journey & Growth
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#1F2937] tracking-tight mb-5 leading-tight">
              6+ Years Of Food Science<br className="hidden sm:block" /> Pioneer Work
            </h2>
            <p className="text-base sm:text-lg text-[#4B5563] font-body max-w-2xl mx-auto leading-relaxed">
              From a humble boutique bio-chemistry testing bench to a global food innovation platform trusted by over 50 leading brands.
            </p>
          </div>
        </div>


      </div>
    </section>
  );
}
