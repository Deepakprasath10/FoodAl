import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ArrowRight,
  Beaker,
  PhoneCall,
  ChevronDown,
  Rocket,
  Briefcase,
  Lightbulb,
  FlaskConical,
  Activity,
  Megaphone,
  Scale,
  Sparkles
} from 'lucide-react';
import { SERVICES_LIST } from '../constants/data';
import logoIcon from '../assets/logo-icon.svg';
import useLockBodyScroll from '../hooks/useLockBodyScroll';

interface NavbarProps {
  onOpenAIFormulate: () => void;
  onOpenConsultation: () => void;
}

function getServiceIcon(iconName: string) {
  switch (iconName) {
    case 'Rocket': return Rocket;
    case 'Briefcase': return Briefcase;
    case 'Lightbulb': return Lightbulb;
    case 'FlaskConical': return FlaskConical;
    case 'Activity': return Activity;
    case 'Megaphone': return Megaphone;
    case 'Scale': return Scale;
    default: return Sparkles;
  }
}

export default function Navbar({ onOpenAIFormulate, onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useLockBodyScroll(mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Research', path: '/research' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-nav ${
        scrolled ? 'py-3 shadow-md' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" onClick={() => handleNavClick('/')} className="flex items-center gap-3 group">
          <img
            src={logoIcon}
            alt="Food Alchemist logo"
            className="w-16 h-16 group-hover:scale-105 transition-transform"
          />
          <div className="leading-none">
            <span className="block font-heading font-extrabold text-base sm:text-lg tracking-widest text-[#004B84] uppercase">
              FOOD
            </span>
            <span className="block font-heading font-extrabold text-base sm:text-lg tracking-widest text-[#004B84] uppercase">
              ALCHEMIST
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            if (link.name === 'Services') {
              const isServicesActive = location.pathname.startsWith('/services');
              return (
                <div
                  key="Services"
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    to="/services"
                    onClick={() => handleNavClick('/services')}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold font-heading transition-all flex items-center gap-1.5 cursor-pointer ${
                      isServicesActive
                        ? 'text-[#004B84] bg-[#F8FAFC] border border-[#E5E7EB]'
                        : 'text-[#1F2937]/80 hover:text-[#004B84] hover:bg-[#F8FAFC]'
                    }`}
                  >
                    Services
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        servicesDropdownOpen ? 'rotate-180 text-[#004B84]' : ''
                      }`}
                    />
                  </Link>

                  {/* Dropdown Menu */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#E5E7EB] p-2.5 space-y-1 animate-fade-in z-50">
                      <div className="px-3 py-2 border-b border-[#E5E7EB] flex items-center justify-between">
                        <span className="text-[10px] font-black font-number uppercase tracking-wider text-[#004B84]">
                          R&D & Science Services
                        </span>
                        <Link
                          to="/services"
                          onClick={() => {
                            setServicesDropdownOpen(false);
                            handleNavClick('/services');
                          }}
                          className="text-[10px] font-bold text-[#004B84] hover:text-[#FEB21A] transition-colors"
                        >
                          View All →
                        </Link>
                      </div>

                      <div className="max-h-[380px] overflow-y-auto py-1 space-y-1 custom-scrollbar">
                        {SERVICES_LIST.map((srv) => {
                          const IconComponent = getServiceIcon(srv.iconName);
                          const isCurrent = location.pathname === `/services/${srv.id}`;
                          return (
                            <Link
                              key={srv.id}
                              to={`/services/${srv.id}`}
                              onClick={() => {
                                setServicesDropdownOpen(false);
                                handleNavClick(`/services/${srv.id}`);
                              }}
                              className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                                isCurrent
                                  ? 'bg-[#004B84]/10 text-[#004B84]'
                                  : 'hover:bg-[#F8FAFC] text-[#1F2937]'
                              }`}
                            >
                              <div className="w-8 h-8 rounded-lg bg-[#004B84]/5 text-[#004B84] flex items-center justify-center shrink-0 mt-0.5 border border-[#004B84]/10">
                                <IconComponent className="w-4 h-4 text-[#004B84]" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs font-bold font-heading truncate text-[#1F2937]">
                                  {srv.title}
                                </div>
                                <div className="text-[10px] text-[#6B7280] line-clamp-1">
                                  {srv.badge || srv.timeframe}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold font-heading transition-all ${
                  location.pathname === link.path
                    ? 'text-[#004B84] bg-[#F8FAFC] border border-[#E5E7EB]'
                    : 'text-[#1F2937]/80 hover:text-[#004B84] hover:bg-[#F8FAFC]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenAIFormulate}
            className="px-3.5 py-2 rounded-xl border border-[#004B84]/20 hover:border-[#004B84] text-[#004B84] font-heading font-bold text-xs bg-white/90 transition-all flex items-center gap-1.5 shadow-sm hover:shadow cursor-pointer"
          >
            <Beaker className="w-3.5 h-3.5 text-[#FEB21A]" />
            AI Formulate
          </button>

          <button
            onClick={onOpenConsultation}
            className="px-4 py-2 rounded-xl bg-[#004B84] hover:bg-[#0D5FA3] text-white font-heading font-bold text-xs border border-[#FEB21A]/40 transition-all shadow-md flex items-center gap-1.5 group cursor-pointer"
          >
            Book Consultation
            <ArrowRight className="w-3.5 h-3.5 text-[#FEB21A] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-[#F8FAFC] text-[#004B84] border border-[#E5E7EB] hover:bg-[#004B84] hover:text-white transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Fullscreen Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[70px] z-40 bg-white border-t border-[#E5E7EB] p-6 flex flex-col justify-between overflow-y-auto animate-fade-in">
          <div className="space-y-2">
            <div className="text-xs font-bold text-[#004B84] font-number uppercase tracking-wider mb-2">Navigation Menu</div>
            {navLinks.map((link) => {
              if (link.name === 'Services') {
                return (
                  <div key="Services" className="space-y-1">
                    <div className="flex items-center justify-between">
                      <Link
                        to="/services"
                        onClick={() => handleNavClick('/services')}
                        className={`flex-1 py-3 px-4 rounded-2xl text-base font-heading font-bold transition-all ${
                          location.pathname === '/services'
                            ? 'bg-[#004B84] text-white'
                            : 'text-[#1F2937] hover:bg-[#F8FAFC]'
                        }`}
                      >
                        Services
                      </Link>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="p-3 text-[#004B84] hover:bg-[#F8FAFC] rounded-2xl cursor-pointer"
                        aria-label="Expand services"
                      >
                        <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </div>

                    {mobileServicesOpen && (
                      <div className="pl-4 pr-2 py-2 space-y-1.5 border-l-2 border-[#FEB21A] ml-4 bg-[#F8FAFC] rounded-r-2xl">
                        {SERVICES_LIST.map((srv) => (
                          <Link
                            key={srv.id}
                            to={`/services/${srv.id}`}
                            onClick={() => handleNavClick(`/services/${srv.id}`)}
                            className="block py-2 px-3 rounded-xl text-xs font-bold text-[#004B84] hover:bg-white transition-colors"
                          >
                            • {srv.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`block py-3 px-4 rounded-2xl text-base font-heading font-bold transition-all ${
                    location.pathname === link.path
                      ? 'bg-[#004B84] text-white'
                      : 'text-[#1F2937] hover:bg-[#F8FAFC]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-[#E5E7EB] space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAIFormulate();
              }}
              className="w-full py-3 rounded-2xl border border-[#004B84] text-[#004B84] font-heading font-bold text-sm bg-white flex items-center justify-center gap-2 cursor-pointer"
            >
              <Beaker className="w-4 h-4 text-[#FEB21A]" />
              AI Product R&D Generator
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 rounded-2xl bg-[#004B84] text-white font-heading font-bold text-sm border border-[#FEB21A]/50 shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#FEB21A]" />
              Book 1-on-1 Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
