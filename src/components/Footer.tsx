import { Link } from 'react-router-dom';
import { MapPin, PhoneCall, Mail, Globe, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';
import { SERVICES_LIST, INDUSTRIES_LIST } from '../constants/data';
import logoIcon from '../assets/logo-icon.svg';

const QUICK_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Research', path: '/research' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
];

const SOCIAL_LINKS = [
  { name: 'LinkedIn', href: '#', Icon: Linkedin },
  { name: 'Instagram', href: 'https://www.instagram.com/food._.alchemist?utm_source=qr&igsh=eTRuNHM5MGQ3cGVq', Icon: Instagram },
  { name: 'Facebook', href: '#', Icon: Facebook },
  { name: 'YouTube', href: '#', Icon: Youtube }
];

export default function Footer() {
  return (
    <footer className="bg-[#004B84] text-white pt-16 pb-8 border-t border-[#FEB21A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">

          {/* Brand Info */}
          <div className="sm:col-span-2 md:col-span-3 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-2 shadow-md shrink-0 border border-[#FEB21A]/40">
                <img src={logoIcon} alt="Food Alchemist logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-heading font-extrabold text-lg tracking-tight text-white leading-tight">
                FOOD<br />ALCHEMIST
              </span>
            </Link>

            <p className="text-xs text-[#9CA3AF] leading-relaxed font-body max-w-xs">
              Transforming food ideas into successful products through science, creativity and commercialization.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              {SOCIAL_LINKS.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-9 h-9 rounded-xl bg-white/10 border border-[#FEB21A]/25 flex items-center justify-center text-[#FEB21A] hover:bg-[#FEB21A] hover:text-[#004B84] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold font-number uppercase tracking-wider text-[#FEB21A]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#9CA3AF]">
              {QUICK_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-[#FEB21A] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold font-number uppercase tracking-wider text-[#FEB21A]">
              Services
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#9CA3AF]">
              {SERVICES_LIST.map((srv) => (
                <li key={srv.id}>
                  <Link to={`/services/${srv.id}`} className="hover:text-[#FEB21A] transition-colors">
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold font-number uppercase tracking-wider text-[#FEB21A]">
              Industries
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#9CA3AF]">
              {INDUSTRIES_LIST.map((ind) => (
                <li key={ind.id}>
                  <Link to="/industries" className="hover:text-[#FEB21A] transition-colors">
                    {ind.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="sm:col-span-2 md:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold font-number uppercase tracking-wider text-[#FEB21A]">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs font-medium text-[#9CA3AF]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FEB21A] shrink-0 mt-0.5" />
                <span>Tambaram, Chennai, Tamil Nadu, India</span>
              </li>
              <li className="flex items-start gap-2.5">
                <PhoneCall className="w-4 h-4 text-[#FEB21A] shrink-0 mt-0.5" />
                <a href="tel:+916383042701" className="hover:text-[#FEB21A] transition-colors">+91 63830 42701</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#FEB21A] shrink-0 mt-0.5" />
                <a href="mailto:foodalchemist269@gmail.com" className="hover:text-[#FEB21A] transition-colors">foodalchemist269@gmail.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-[#FEB21A] shrink-0 mt-0.5" />
                <a href="https://www.foodalchemist.in" className="hover:text-[#FEB21A] transition-colors">www.foodalchemist.in</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#9CA3AF] gap-4">
          <p>© {new Date().getFullYear()} Food Alchemist. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-[#FEB21A] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#FEB21A] transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
