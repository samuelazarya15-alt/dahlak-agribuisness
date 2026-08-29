import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronRight, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/agrobusinessData';
import { DahlakOfficialLogo } from './DahlakOfficialLogo';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Company Profile', href: '#company-profile' },
    { name: 'Farm Bulletins', href: '#farm-flyers' },
    { name: 'About', href: '#about' },
    { name: '5 Core Sectors', href: '#services' },
    { name: 'Drone & AgriTech', href: '#agritech' },
    { name: 'Farm Video', href: '#video' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Estimator', href: '#calculator' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top micro announcement bar - Editorial Style with Real Contacts */}
      <div className="bg-[#0f172a] text-slate-300 text-[11px] py-2 px-4 border-b border-slate-800 tracking-wide hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-5">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium tracking-wider uppercase text-[10px]">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {COMPANY_INFO.slogan}
            </span>
            <span className="text-slate-600">|</span>
            <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-300 transition-colors">
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Yonas%2C%20I%20would%20like%20to%20inquire%20about%20Dahlak%20Agribusiness%20services.`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-300 transition-colors"
            >
              <MessageSquare className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp: {COMPANY_INFO.whatsappDisplay}</span>
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-300 transition-colors">
              <Mail className="w-3 h-3 text-emerald-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
          <div className="flex items-center space-x-4 text-slate-300">
            <span className="text-slate-400 font-serif italic">Managing Director: <strong className="text-white not-italic">{COMPANY_INFO.founder}</strong></span>
            <span className="bg-emerald-950 text-emerald-300 px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider border border-emerald-800/60">
              Vocational &amp; Agronomic Center
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        id="navbar-header"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#fafaf9]/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-2.5'
            : 'bg-[#fafaf9]/90 backdrop-blur-sm border-b border-stone-200/50 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <a
              id="brand-logo-link"
              href="#home"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-700 rounded-lg p-1"
            >
              <DahlakOfficialLogo size="md" variant="horizontal" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  className="px-3 py-1.5 text-xs uppercase tracking-wider font-semibold text-slate-700 hover:text-emerald-800 rounded transition-colors duration-150 hover:bg-stone-100"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button & WhatsApp */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                id="header-cta-whatsapp-btn"
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Yonas%20Hadgu%2C%20I%20am%20interested%20in%20Dahlak%20Agribusiness%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-900 bg-emerald-100/80 hover:bg-emerald-200/80 rounded-md transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-800" />
                <span>WhatsApp Desk</span>
              </a>
              <a
                id="header-cta-quote-btn"
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2 text-xs uppercase tracking-wider font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-md shadow-sm transition-all duration-150 active:scale-95 border border-emerald-900"
              >
                <span>Inquire / Enroll</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded bg-emerald-100 text-emerald-900 text-xs"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <button
                id="mobile-menu-toggle-btn"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-slate-800 hover:text-emerald-800 hover:bg-stone-200/60 focus:outline-none"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-stone-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs uppercase tracking-wider font-semibold text-slate-700 hover:text-emerald-800 hover:bg-stone-100 rounded"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="space-y-2 pt-2 text-xs">
            <div className="text-slate-500 font-mono text-[11px]">
              Managing Director: <strong className="text-slate-900">{COMPANY_INFO.founder}</strong>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Phone className="w-3.5 h-3.5 text-emerald-800" />
              <span>{COMPANY_INFO.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Mail className="w-3.5 h-3.5 text-emerald-800" />
              <span>{COMPANY_INFO.email}</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded bg-emerald-100 text-emerald-900 font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-800" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 rounded bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-wider text-center"
            >
              Book Agricultural Consultation
            </a>
          </div>
        </div>
      )}
    </>
  );
};
