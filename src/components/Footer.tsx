import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  ShieldCheck, 
  Check,
  Send,
  MapPin,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/agrobusinessData';
import { DahlakOfficialLogo } from './DahlakOfficialLogo';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 2500);
    }
  };

  return (
    <footer id="footer" className="bg-[#0a0f1d] text-stone-300 pt-16 pb-12 border-t border-stone-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-stone-800">
          
          {/* Column 1: Brand & Founder Narrative */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <DahlakOfficialLogo size="md" variant="horizontal" />
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-sans">
              Under the leadership of <strong className="text-stone-200">{COMPANY_INFO.founder}</strong> ({COMPANY_INFO.founderTitle}), Dahlak Agribusiness &amp; Vocational Center empowers farmers, youths, and agri-startups through practical training, advisory, and organic cultivation.
            </p>

            <div className="space-y-1 text-xs">
              <div className="text-emerald-400 font-mono italic">
                &ldquo;{COMPANY_INFO.slogan}&rdquo;
              </div>
              <div className="text-stone-400 font-serif italic">
                &ldquo;{COMPANY_INFO.secondaryMotto}&rdquo;
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Vocational Center &amp; Farm Hub &bull; Luweero &amp; Kampala</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-bold text-white uppercase tracking-widest font-mono">
              Quick Index
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="text-stone-400 hover:text-emerald-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="#company-profile" className="text-stone-400 hover:text-emerald-300 transition-colors font-semibold text-emerald-400">Company Profile</a>
              </li>
              <li>
                <a href="#about" className="text-stone-400 hover:text-emerald-300 transition-colors">About &amp; Vision</a>
              </li>
              <li>
                <a href="#services" className="text-stone-400 hover:text-emerald-300 transition-colors">4 Core Pillars</a>
              </li>
              <li>
                <a href="#video" className="text-stone-400 hover:text-emerald-300 transition-colors">Video Story</a>
              </li>
              <li>
                <a href="#gallery" className="text-stone-400 hover:text-emerald-300 transition-colors">Photo Gallery (12+ Slots)</a>
              </li>
              <li>
                <a href="#why-us" className="text-stone-400 hover:text-emerald-300 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#contact" className="text-stone-400 hover:text-emerald-300 transition-colors">Contact &amp; Location</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Agricultural Offerings */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] font-bold text-white uppercase tracking-widest font-mono">
              Core Pillars
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.slice(0, 4).map((srv) => (
                <li key={srv.id}>
                  <a href="#services" className="text-stone-400 hover:text-emerald-300 transition-colors block truncate">
                    {srv.title}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-stone-800">
                <span className="text-[10px] uppercase font-mono text-emerald-400 block">Demonstration Farm:</span>
                <span className="text-stone-400 text-xs">Brooding (12x8m) &bull; Layers (12x8m)</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Direct Contacts */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-bold text-white uppercase tracking-widest font-mono">
              Direct Contact
            </h4>
            
            <div className="space-y-2 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-[11px]">{COMPANY_INFO.headOfficeAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-emerald-300 font-semibold">{COMPANY_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 font-semibold">{COMPANY_INFO.whatsappDisplay}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-emerald-300 font-mono text-[11px]">{COMPANY_INFO.email}</a>
              </div>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-2 pt-2 border-t border-stone-800">
              <span className="text-[10px] uppercase font-mono text-stone-400 block">Training &amp; Harvest Updates</span>
              <div className="flex items-center gap-1.5">
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-900 border border-stone-700 rounded text-xs text-white focus:outline-none focus:border-emerald-500 font-sans"
                />
                <button
                  type="submit"
                  className="p-2 bg-emerald-800 hover:bg-emerald-700 text-white rounded transition-colors shrink-0"
                  aria-label="Subscribe to updates"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Subscribed successfully!
                </span>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Dahlak Agribusiness and Vocational Center. All rights reserved. Directed by {COMPANY_INFO.founder}.
          </div>
          <div className="flex items-center space-x-6 text-[11px] font-mono">
            <span className="text-emerald-400">&ldquo;{COMPANY_INFO.slogan}&rdquo;</span>
            <span className="text-stone-600">|</span>
            <span className="text-stone-400">&ldquo;{COMPANY_INFO.secondaryMotto}&rdquo;</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
