import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { X, Calendar, Clock, CheckCircle, Shield, PhoneCall, Send, Loader2, AlertCircle } from 'lucide-react';
import useLockBodyScroll from '../hooks/useLockBodyScroll';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    date: '2026-07-28',
    time: '10:00 AM EST',
    topic: 'New Product Formulation'
  });

  useLockBodyScroll(isOpen);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setError('Email delivery is not configured yet. Please contact us directly for now.');
      return;
    }

    setSending(true);
    setError('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          company: formData.company || 'Not provided',
          from_email: formData.email,
          phone: formData.phone,
          preferred_date: formData.date,
          preferred_time: formData.time,
          topic: formData.topic
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setSubmitted(true);
    } catch (err) {
      console.error('Consultation booking email failed:', err);
      setError('Something went wrong sending your request. Please try again or email us directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-[#004B84]/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-3xl border border-[#E5E7EB] shadow-2xl p-6 sm:p-8 my-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#6B7280] hover:text-[#1F2937] bg-[#F8FAFC] p-2 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-[#004B84] text-[#FEB21A] flex items-center justify-center border border-[#FEB21A]/30 shadow-md">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#004B84] font-number">
                  1-on-1 Strategy Session
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#1F2937]">
                  Book Food Science Consultation
                </h3>
              </div>
            </div>

            <p className="text-xs text-[#6B7280] mb-6">
              Speak directly with our senior food chemists, process engineers, and regulatory specialists to evaluate your product formulation, shelf life goals, or factory co-packing setup.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#1F2937] mb-1 font-heading">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E5E7EB] bg-white text-sm text-[#1F2937] focus:outline-none focus:border-[#004B84]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1F2937] mb-1 font-heading">
                    Company / Brand Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Organics"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E5E7EB] bg-white text-sm text-[#1F2937] focus:outline-none focus:border-[#004B84]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#1F2937] mb-1 font-heading">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@apexorganics.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E5E7EB] bg-white text-sm text-[#1F2937] focus:outline-none focus:border-[#004B84]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1F2937] mb-1 font-heading">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E5E7EB] bg-white text-sm text-[#1F2937] focus:outline-none focus:border-[#004B84]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#1F2937] mb-1 font-heading">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E5E7EB] bg-white text-sm text-[#1F2937] focus:outline-none focus:border-[#004B84]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1F2937] mb-1 font-heading">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E5E7EB] bg-white text-sm text-[#1F2937] focus:outline-none focus:border-[#004B84]"
                  >
                    <option value="10:00 AM EST">10:00 AM EST (Morning)</option>
                    <option value="02:00 PM EST">02:00 PM EST (Afternoon)</option>
                    <option value="05:00 PM EST">05:00 PM EST (Late Afternoon)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1F2937] mb-1 font-heading">
                  Primary Discussion Focus
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-[#E5E7EB] bg-white text-sm text-[#1F2937] focus:outline-none focus:border-[#004B84]"
                >
                  <option value="New Product Formulation">New Product Formulation & Recipe Development</option>
                  <option value="Shelf Life Extension">Shelf Life Extension & Natural Preservation</option>
                  <option value="Nutritional Analysis & Labeling">Nutritional Analysis & Regulatory Labeling</option>
                  <option value="Co-packer Matching & Factory Scaling">Co-packer Matching & Factory Scaling</option>
                </select>
              </div>

              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] flex items-center gap-2 text-xs text-[#004B84] font-medium">
                <Shield className="w-4 h-4 text-[#FEB21A] shrink-0" />
                Protected under our strict Mutual Non-Disclosure Agreement (NDA).
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2 text-xs text-red-700 font-medium">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-[#004B84] hover:bg-[#0D5FA3] disabled:opacity-70 text-white font-heading font-bold px-5 py-3 rounded-xl border border-[#FEB21A]/50 shadow-lg transition-all flex items-center justify-center gap-2"
              >
                {sending ? (
                  <>
                    <Loader2 className="w-4 h-4 text-[#FEB21A] animate-spin" />
                    Sending Request...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#FEB21A]" />
                    Confirm Consultation Booking
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#F8FAFC] text-[#004B84] border border-[#FEB21A]/40 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle className="w-8 h-8 text-[#004B84]" />
            </div>
            <h3 className="text-2xl font-heading font-extrabold text-[#1F2937]">
              Consultation Scheduled!
            </h3>
            <p className="text-xs text-[#6B7280] max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-[#004B84]">{formData.name}</span>. A calendar invitation and video conference link for <span className="font-bold text-[#004B84]">{formData.date} at {formData.time}</span> have been sent to <span className="font-bold text-[#004B84]">{formData.email}</span>.
            </p>

            <div className="p-4 rounded-2xl bg-[#004B84] text-white border border-[#FEB21A]/30 max-w-md mx-auto text-left text-xs space-y-1">
              <span className="block font-bold text-[#FEB21A] font-number uppercase text-[10px]">Reference Code</span>
              <span className="block text-base font-extrabold font-number">FA-CALL-{Math.floor(1000 + Math.random() * 9000)}</span>
              <span className="block text-[#9CA3AF] text-[11px] mt-1">Topic: {formData.topic}</span>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-xl bg-[#004B84] text-white font-bold text-xs hover:bg-[#0D5FA3] transition-all"
            >
              Done & Return
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
