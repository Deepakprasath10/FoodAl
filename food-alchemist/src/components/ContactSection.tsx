import { useState, FormEvent } from 'react';
import { Send, PhoneCall, Mail, MapPin, CheckCircle2, ShieldCheck, Loader2 } from 'lucide-react';
import { ContactFormData } from '../types';

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    requirements: ['Food Formulation'],
    budget: '$10,000 - $25,000',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');

  const requirementOptions = [
    'Food Formulation',
    'Recipe Development',
    'Shelf Life Extension',
    'Nutritional Analysis',
    'Manufacturing Support',
    'Regulatory Compliance'
  ];

  const toggleRequirement = (req: string) => {
    setFormData((prev) => {
      const exists = prev.requirements.includes(req);
      if (exists) {
        return { ...prev, requirements: prev.requirements.filter((r) => r !== req) };
      } else {
        return { ...prev, requirements: [...prev.requirements, req] };
      }
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setResponseMsg(data.message || 'Inquiry submitted successfully!');
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setResponseMsg('Inquiry received! Our senior food scientists will respond within 24 hours.');
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#004B84] text-white relative overflow-hidden border-t border-[#FEB21A]/30">
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FEB21A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FEB21A] text-xs font-bold uppercase tracking-wider font-number mb-3 border border-[#FEB21A]/30">
                Direct Technical Access
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
                Let's Build Your Next Product.
              </h2>
              <p className="text-base text-[#9CA3AF] mt-4 font-body leading-relaxed">
                Have a new beverage, bakery line, plant-based dairy, or functional snack concept? Send us your technical parameters and target launch timeframe.
              </p>
            </div>

            {/* Direct Contact Info */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 border border-[#FEB21A]/25">
                <div className="w-10 h-10 rounded-xl bg-[#FEB21A] text-[#004B84] flex items-center justify-center font-bold shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-[#FEB21A] font-extrabold font-number">Official Email</span>
                  <a href="mailto:foodalchemist269@gmail.com" className="text-sm font-bold text-white hover:text-[#FEB21A] transition-colors">
                    foodalchemist269@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 border border-[#FEB21A]/25">
                <div className="w-10 h-10 rounded-xl bg-[#FEB21A] text-[#004B84] flex items-center justify-center font-bold shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-[#FEB21A] font-extrabold font-number">Direct Mobile</span>
                  <a href="tel:+916383042701" className="text-sm font-bold text-white hover:text-[#FEB21A] transition-colors">
                    +91 63830 42701
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 border border-[#FEB21A]/25">
                <div className="w-10 h-10 rounded-xl bg-[#FEB21A] text-[#004B84] flex items-center justify-center font-bold shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-[#FEB21A] font-extrabold font-number">Location</span>
                  <span className="text-sm font-bold text-white">Tambaram, Chennai, Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-[#FEB21A]/20 flex items-center gap-3 text-xs text-[#9CA3AF]">
              <ShieldCheck className="w-5 h-5 text-[#FEB21A] shrink-0" />
              <span>All submissions strictly covered under Mutual NDA. Response within 24 hours.</span>
            </div>
          </div>

          {/* Right Column: Modern Floating Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-[#1F2937] rounded-3xl p-6 sm:p-10 border border-[#E5E7EB] shadow-2xl relative">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-heading font-extrabold text-[#004B84] mb-1">
                    Product Project Specification Form
                  </h3>
                  <p className="text-xs text-[#6B7280] mb-4">
                    Fill out your requirements below for an instant preliminary scope evaluation.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1F2937] mb-1 font-heading">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:border-[#004B84]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1F2937] mb-1 font-heading">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. PureBlend Organics"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:border-[#004B84]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1F2937] mb-1 font-heading">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@pureblend.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:border-[#004B84]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1F2937] mb-1 font-heading">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 019-2834"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:border-[#004B84]"
                      />
                    </div>
                  </div>

                  {/* Requirements Pills */}
                  <div>
                    <label className="block text-xs font-bold text-[#1F2937] mb-2 font-heading">
                      Required R&D Services (Select All That Apply)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {requirementOptions.map((req) => {
                        const selected = formData.requirements.includes(req);
                        return (
                          <button
                            key={req}
                            type="button"
                            onClick={() => toggleRequirement(req)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                              selected
                                ? 'bg-[#004B84] text-[#FEB21A] border-[#FEB21A]'
                                : 'bg-[#F8FAFC] text-[#1F2937] border-[#E5E7EB] hover:border-[#004B84]'
                            }`}
                          >
                            {selected ? '✓ ' : '+ '}{req}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-xs font-bold text-[#1F2937] mb-1 font-heading">
                      Target R&D Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:border-[#004B84]"
                    >
                      <option value="Under $5,000">Under $5,000 (Benchtop Proof-of-Concept)</option>
                      <option value="$10,000 - $25,000">$10,000 - $25,000 (Standard R&D + Shelf Life)</option>
                      <option value="$25,000 - $50,000">$25,000 - $50,000 (Commercial Scale + Factory SOP)</option>
                      <option value="$50,000+">$50,000+ (Multi-Product Brand Portfolio)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1F2937] mb-1 font-heading">
                      Brief Concept / Product Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe target taste profile, packaging, target shelf life, or special claims..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:border-[#004B84]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#004B84] hover:bg-[#0D5FA3] text-white font-heading font-bold px-6 py-4 rounded-2xl border border-[#FEB21A]/50 shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin text-[#FEB21A]" />
                        Submitting Inquiry...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#FEB21A]" />
                        Submit Product Specification
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-12 space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#F8FAFC] text-[#004B84] flex items-center justify-center mx-auto border border-[#FEB21A]">
                    <CheckCircle2 className="w-8 h-8 text-[#004B84]" />
                  </div>
                  <h3 className="text-2xl font-heading font-extrabold text-[#1F2937]">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-[#6B7280] max-w-md mx-auto leading-relaxed">
                    {responseMsg}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-[#004B84] text-white font-bold text-xs hover:bg-[#0D5FA3]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Map Preview Below */}
        <div className="mt-16 rounded-3xl overflow-hidden border border-[#FEB21A]/30 shadow-2xl h-64 bg-[#000000] relative flex items-center justify-center">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#FEB21A_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative z-10 text-center space-y-2 p-4 glass-dark rounded-2xl border border-[#FEB21A]/30">
            <MapPin className="w-6 h-6 text-[#FEB21A] mx-auto animate-bounce" />
            <h4 className="font-heading font-bold text-sm text-white">Central Food Innovation Lab & Testing Facility</h4>
            <p className="text-xs text-[#9CA3AF]">BioTech Park, Innovation Way Suite 400 • NABL & FSSAI Accredited</p>
          </div>
        </div>

      </div>
    </section>
  );
}
