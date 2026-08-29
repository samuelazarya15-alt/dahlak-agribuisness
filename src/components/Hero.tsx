import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sprout, TrendingUp, Sparkles, MapPin, MessageSquare, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/agrobusinessData';
import { DahlakOfficialLogo } from './DahlakOfficialLogo';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#0a0f1d] text-white pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-stone-800">
      {/* Background Subtle Editorial Grid & Accent */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-emerald-900/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Messaging & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Editorial Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-stone-900/90 border border-stone-700 text-stone-300 text-[11px] font-mono tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Directed by {COMPANY_INFO.founder}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-[11px] font-mono tracking-wider">
                <Sprout className="w-3 h-3" />
                <span>&ldquo;{COMPANY_INFO.slogan}&rdquo;</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-editorial-serif tracking-tight text-white leading-[1.12]">
              Dahlak Agribusiness &amp;{' '}
              <span className="italic text-emerald-300 font-serif">
                Vocational Center
              </span>
            </h1>

            {/* Subheadline & Slogan */}
            <p className="text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed font-normal">
              Empowering individuals and communities through <strong className="text-white font-semibold">practical agricultural knowledge, financial literacy, and entrepreneurial skills</strong>. Bridging the gap between farming and profitable business in Uganda and East Africa.
            </p>

            {/* 4 Official Core Pillars Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 border-t border-stone-800/80">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Agricultural Consultation &amp; Soil Health</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Agripreneurship &amp; Value Addition</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Agri-Startup &amp; Financial Management</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Vocational Skill Training &amp; Apprenticeship</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <a
                id="hero-primary-cta-btn"
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-widest font-bold text-white bg-emerald-800 hover:bg-emerald-700 rounded-md shadow transition-all duration-150 group active:scale-95 border border-emerald-700"
              >
                <span>Explore 4 Core Pillars</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                id="hero-profile-cta-btn"
                href="#company-profile"
                className="inline-flex items-center justify-center px-5 py-3.5 text-xs uppercase tracking-widest font-bold text-stone-200 hover:text-white bg-stone-900/90 hover:bg-stone-800 border border-stone-700 rounded-md transition-all duration-150 active:scale-95 gap-2"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Company Profile Dossier</span>
              </a>

              <a
                id="hero-whatsapp-direct-btn"
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Yonas%2C%20I%20am%20visiting%20the%20website%20and%20want%20to%20know%20more%20about%20Dahlak%20Agribusiness.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-3.5 text-xs uppercase tracking-widest font-bold text-emerald-300 hover:text-emerald-200 bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-700/60 rounded-md transition-all duration-150 gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: {COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Editorial Footnote Trust Bar */}
            <div className="pt-5 border-t border-stone-800/80 flex flex-wrap items-center gap-6 text-xs text-stone-400 font-sans">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Head Office: Bunga, Kampala</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Farm Hub: Luweero City Council</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-300 italic font-serif">
                <span>&ldquo;{COMPANY_INFO.secondaryMotto}&rdquo;</span>
              </div>
            </div>
          </div>

          {/* Right Column: Official Logo Emblem Display & Farm Blueprint Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none space-y-4">
              
              {/* Official Emblem Showcase Card with Farm Ribbon */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-stone-700 bg-radial from-stone-900 to-black p-6 sm:p-8 text-center group">
                
                {/* Decorative Farm Corner Stamp */}
                <div className="absolute top-3 right-3 bg-emerald-950/90 text-emerald-300 text-[10px] font-mono px-2.5 py-1 rounded border border-emerald-700/60 shadow-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Verified Agribusiness</span>
                </div>

                <div className="py-2">
                  <DahlakOfficialLogo size="2xl" variant="emblem" className="mx-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]" />
                </div>

                <div className="mt-4 pt-4 border-t border-stone-800 text-left">
                  <h3 className="text-lg sm:text-xl font-bold font-editorial-serif text-white flex items-center justify-between">
                    <span>Dahlak Agribusiness</span>
                    <span className="text-xs font-mono text-emerald-400 font-normal">Est. 2018</span>
                  </h3>
                  <p className="text-xs text-stone-400 mt-1 font-mono uppercase tracking-wider">
                    Vocational Center &bull; Luweero &amp; Kampala
                  </p>
                  <p className="text-xs italic text-emerald-300/90 font-serif mt-2">
                    &ldquo;{COMPANY_INFO.slogan}&rdquo;
                  </p>
                </div>
              </div>

              {/* Decorative Farm Bulletin Mini Flyer */}
              <div className="bg-amber-950/40 border border-amber-800/60 rounded-xl p-4 text-xs font-mono text-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md">
                <div className="space-y-0.5">
                  <span className="text-amber-400 font-bold block text-[11px] uppercase tracking-wider">
                    🌾 Luweero Demonstration Farm
                  </span>
                  <span className="text-stone-300 text-[10px] block">
                    Brooding (12x8m) &bull; Layers (12x8m) &bull; Feed Store (3x4m)
                  </span>
                </div>
                <a
                  href="#farm-flyers"
                  className="px-3 py-1.5 rounded bg-emerald-800 hover:bg-emerald-700 text-white text-[10px] uppercase font-bold tracking-wider transition-colors shrink-0 flex items-center gap-1 self-stretch sm:self-auto justify-center"
                >
                  <span>Farm Notices →</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
