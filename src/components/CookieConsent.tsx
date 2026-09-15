import { useState, useEffect } from 'react';
import { Cookie, X, Check } from 'lucide-react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('food_alchemist_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('food_alchemist_cookie_consent', 'accepted');
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem('food_alchemist_cookie_consent', 'declined');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-md w-[calc(100%-3rem)] bg-white/95 text-gray-900 border-[#E5E7EB] p-5 rounded-2xl border border-[#FEB21A]/30 shadow-2xl backdrop-blur-lg animate-float-fast">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#004B84] text-[#FEB21A] flex items-center justify-center shrink-0 border border-[#FEB21A]/30">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h4 className="font-heading font-semibold text-sm text-[#004B84] mb-1">Cookie & Data Preferences</h4>
          <p className="text-xs text-[#004B84]/70 leading-relaxed">
            We use essential analytical cookies to optimize R&D performance and deliver personalized food formulation insights.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <button
              onClick={handleAccept}
              className="flex-1 bg-[#FEB21A] hover:bg-[#E5A400] text-[#004B84] border border-white/20 px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5"
            >
              <Check className="w-3.5 h-3.5 text-[#004B84]" /> Accept All
            </button>
            <button
              onClick={handleDecline}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#004B84]/60 hover:text-[#004B84] hover:bg-white/10 transition-all"
            >
              Essential Only
            </button>
          </div>
        </div>
        <button
          onClick={handleDecline}
          className="text-[#004B84]/40 hover:text-[#004B84] transition-colors p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
