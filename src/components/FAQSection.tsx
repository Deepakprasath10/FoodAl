import { useState } from 'react';
import { FAQ_LIST } from '../constants/data';
import { Search, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>(FAQ_LIST[0].id);

  const filteredFaqs = FAQ_LIST.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FFFDF8] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFC] text-[#004B84] text-xs font-bold uppercase tracking-wider font-number mb-3 border border-[#E5E7EB]">
            <HelpCircle className="w-3.5 h-3.5 text-[#FEB21A]" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#1F2937]">
            Got Questions About Food R&D?
          </h2>
          <p className="text-sm text-[#6B7280] mt-2 font-body">
            Search below or browse common inquiries regarding formula IP, lab testing, and factory co-packer setup.
          </p>
        </div>

        {/* Live Search Bar */}
        <div className="relative mb-8 max-w-xl mx-auto">
          <Search className="w-5 h-5 text-[#004B84] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search FAQs (e.g. shelf life, IP ownership, pricing, FSSAI)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-[#E5E7EB] bg-white text-sm text-[#1F2937] placeholder-[#9CA3AF] shadow-sm focus:outline-none focus:border-[#004B84]"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#004B84] shadow-md ring-1 ring-[#004B84]/10'
                      : 'bg-white/80 border-[#E5E7EB] hover:border-[#004B84]/40'
                  }`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-extrabold font-number uppercase tracking-wider bg-[#F8FAFC] text-[#004B84] border border-[#E5E7EB] px-2.5 py-0.5 rounded-full shrink-0">
                        {faq.category}
                      </span>
                      <span className="text-sm sm:text-base font-heading font-bold text-[#1F2937]">
                        {faq.question}
                      </span>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'bg-[#004B84] text-[#FEB21A]' : 'bg-[#F8FAFC] text-[#004B84] border border-[#E5E7EB]'
                    }`}>
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#6B7280] font-body leading-relaxed border-t border-[#E5E7EB] animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 text-xs text-[#6B7280] bg-white rounded-2xl border border-[#E5E7EB]">
              No matching questions found for "{searchQuery}". Contact our team directly!
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
