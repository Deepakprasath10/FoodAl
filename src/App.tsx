import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

import CookieConsent from './components/CookieConsent';
import AIFormulationModal from './components/AIFormulationModal';
import ConsultationModal from './components/ConsultationModal';
import FoodInnovationAssistant from './components/FoodInnovationAssistant';
import BackToTopButton from './components/BackToTopButton';

import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import ResearchPage from './pages/ResearchPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import SigaraServicesPage from './pages/SigaraServicesPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenConsultation = () => setConsultationModalOpen(true);
    window.addEventListener('open-consultation', handleOpenConsultation);
    return () => window.removeEventListener('open-consultation', handleOpenConsultation);
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white text-[#1F2937] relative font-sans selection:bg-[#004B84] selection:text-[#FEB21A]">
        <ScrollToTop />
        <ScrollProgress />

        
        <Navbar
          onOpenAIFormulate={() => setAiModalOpen(true)}
          onOpenConsultation={() => setConsultationModalOpen(true)}
        />

        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onOpenAIFormulate={() => setAiModalOpen(true)}
                  onOpenConsultation={() => setConsultationModalOpen(true)}
                />
              }
            />
            <Route
              path="/services"
              element={<ServicesPage onOpenConsultation={() => setConsultationModalOpen(true)} />}
            />
            <Route
              path="/services/:serviceId"
              element={<ServicesPage onOpenConsultation={() => setConsultationModalOpen(true)} />}
            />
            <Route
              path="/industries"
              element={<IndustriesPage onOpenConsultation={() => setConsultationModalOpen(true)} />}
            />
            <Route
              path="/research"
              element={<ResearchPage onOpenConsultation={() => setConsultationModalOpen(true)} />}
            />
            <Route
              path="/about"
              element={<AboutPage onOpenConsultation={() => setConsultationModalOpen(true)} />}
            />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/development-services" element={<SigaraServicesPage />} />
          </Routes>
        </main>

        <Footer />

        {/* Global Modal Popups */}
        <AIFormulationModal
          isOpen={aiModalOpen}
          onClose={() => setAiModalOpen(false)}
          onBookConsultation={() => setConsultationModalOpen(true)}
        />

        <ConsultationModal
          isOpen={consultationModalOpen}
          onClose={() => setConsultationModalOpen(false)}
        />

        <CookieConsent />

        <BackToTopButton />

        {/* Floating Food Innovation Assistant */}
        <FoodInnovationAssistant />
      </div>
    </BrowserRouter>
  );
}
