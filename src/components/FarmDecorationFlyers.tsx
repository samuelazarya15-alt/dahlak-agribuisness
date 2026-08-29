import React, { useState } from 'react';
import { 
  Sprout, 
  Award, 
  Calendar, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Sparkles, 
  Feather, 
  FileText, 
  Wheat, 
  Layers, 
  ShieldCheck, 
  Egg, 
  Beaker, 
  BookOpen, 
  ArrowRight,
  Download,
  Share2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/agrobusinessData';
import { DahlakOfficialLogo } from './DahlakOfficialLogo';

export const FarmDecorationFlyers: React.FC = () => {
  const [activeFlyerIndex, setActiveFlyerIndex] = useState<number>(0);

  const flyers = [
    {
      id: 'intake-flyer',
      tag: 'Official Admission Bulletin',
      title: '2026 Vocational Agricultural Training & Agripreneurship Intake',
      subtitle: 'Hands-on practical cohorts in Luweero & Kampala demonstration facilities',
      accentColor: 'emerald',
      bgGradient: 'from-amber-50 via-stone-50 to-orange-50/40',
      stampText: 'ENROLLMENT OPEN',
      highlights: [
        { label: 'Cohort Capacity', val: '25 Trainees per intake' },
        { label: 'Curriculum', val: 'Practical field + financial literacy' },
        { label: 'Certification', val: 'Certificate of Agribusiness Competency' },
        { label: 'Venue', val: 'Luweero Demonstration Farm & Kampala Lab' },
      ],
      modules: [
        'Commercial Poultry Brooding & High-Yield Layers (12x8m units)',
        'Hydroponic & Organic Vegetable Greenhouse Cultivation',
        'Value Addition: Soap Formulation, Cosmetic Oils & Industrial Baking',
        'Agri-Startup Bookkeeping, Cost-of-Production & Market Linkages'
      ],
      ctaText: 'Inquire for Admission',
      ctaLink: `https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Yonas%2C%20I%20am%20interested%20in%20enrolling%20in%20the%20Dahlak%20Vocational%20Training%20Cohort.`
    },
    {
      id: 'organic-soil-flyer',
      tag: 'Agronomy Field Notice',
      title: '100% Organic Soil Health & High-Density Horticulture',
      subtitle: 'Sustainable yield optimization protocols developed for East African soils',
      accentColor: 'amber',
      bgGradient: 'from-emerald-50 via-stone-50 to-teal-50/40',
      stampText: 'ORGANIC CERTIFIED',
      highlights: [
        { label: 'Soil Health', val: 'Microbial bio-fertilizers & vermicompost' },
        { label: 'Water Systems', val: 'Gravity drip & hydroponic solar pumps' },
        { label: 'Pest Strategy', val: 'Non-chemical biological protection' },
        { label: 'Motto', val: '"Back to organic nature"' },
      ],
      modules: [
        'Soil fertility mapping and mineral balance diagnostics',
        'Hydroponic leafy greens nutrient formulation & monitoring',
        'Organic companion planting & integrated biological pest control',
        'Post-harvest handling & cold-chain preservation techniques'
      ],
      ctaText: 'Book Agronomy Consultation',
      ctaLink: `https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Yonas%2C%20I%20would%20like%20to%20consult%20on%20Organic%20Soil%20and%20Crop%20Production.`
    },
    {
      id: 'poultry-blueprint-flyer',
      tag: 'Farm Engineering Docket',
      title: 'Modern Commercial Poultry Architecture & Biosecurity',
      subtitle: 'Optimized 12x8m modular poultry blueprint with integrated feed store',
      accentColor: 'stone',
      bgGradient: 'from-stone-100 via-amber-50/50 to-stone-50',
      stampText: 'FIELD BLUEPRINT',
      highlights: [
        { label: 'Brooding Unit', val: '12m x 8m (Controlled Temperature)' },
        { label: 'Layers House', val: '12m x 8m (Automated Egg Nests)' },
        { label: 'Feed Warehouse', val: '3m x 4m (Dry Pest-Proof Store)' },
        { label: 'Biosecurity', val: 'Footbath barrier & ventilation louvers' },
      ],
      modules: [
        'Precision day-old chick brooding heating & vaccination schedules',
        'Low-cost balanced feed formulation (maize bran, soya, fish meal)',
        'Egg collection, grading, and direct commercial packaging',
        'Farm staff quarters management and daily operational logbooks'
      ],
      ctaText: 'Get Poultry Farm Blueprint',
      ctaLink: `https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Yonas%2C%20I%20need%20the%20Poultry%20Farm%20Blueprint%20and%20consultation.`
    },
    {
      id: 'value-addition-flyer',
      tag: 'Agro-Processing Leaflet',
      title: 'Agro-Processing, Cosmetics & Industrial Baking Lab',
      subtitle: 'Transform raw farm harvest into high-margin packaged consumer products',
      accentColor: 'rose',
      bgGradient: 'from-orange-50 via-stone-50 to-amber-50/60',
      stampText: 'VALUE ADDITION',
      highlights: [
        { label: 'Formulations', val: 'Organic bar & liquid soaps, herbal cosmetics' },
        { label: 'Baking Unit', val: 'Commercial bread, pastries & snack processing' },
        { label: 'Partnership', val: 'UIRI technology incubation standards' },
        { label: 'Packaging', val: 'Barcoded branding & UNBS compliance readiness' },
      ],
      modules: [
        'Cold-process botanical soap manufacture and saponification science',
        'Herbal hair oil and skin nourishment cosmetic compounding',
        'Commercial scale bakery dough formulation & oven thermal curves',
        'Product costing, profit margin calculation & wholesale distribution'
      ],
      ctaText: 'Inquire on Processing Training',
      ctaLink: `https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Yonas%2C%20I%20am%20inquiring%20about%20the%20Agro-Processing%20and%20Soap/Bakery%20Training.`
    }
  ];

  const currentFlyer = flyers[activeFlyerIndex];

  return (
    <section id="farm-flyers" className="py-16 lg:py-24 bg-[#f5f4f0] border-b border-stone-300 relative overflow-hidden">
      {/* Decorative Rustic Farm Background Motifs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(#2d3748_1px,transparent_1px)] [background-size:16px_16px]" />
      
      {/* Botanical Corner Watermarks */}
      <div className="absolute top-6 left-6 text-emerald-900/10 pointer-events-none hidden lg:block">
        <Wheat className="w-32 h-32 rotate-12" />
      </div>
      <div className="absolute bottom-6 right-6 text-amber-900/10 pointer-events-none hidden lg:block">
        <Sprout className="w-32 h-32 -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-300/80 text-amber-900 text-[11px] font-bold uppercase tracking-[0.2em] mb-3 shadow-xs">
            <Wheat className="w-3.5 h-3.5 text-amber-800" />
            <span>Farm Bulletins &amp; Vocational Flyers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-editorial-serif text-slate-900 tracking-tight leading-tight">
            Dahlak Agribusiness Field Notices &amp; Bulletins
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Authentic operational notices, seasonal vocational training schedules, and certified agribusiness blueprints from our Luweero and Kampala facilities.
          </p>
        </div>

        {/* Flyer Selector Tabs - Responsive Horizontal Scroll */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {flyers.map((flyer, idx) => (
            <button
              key={flyer.id}
              onClick={() => setActiveFlyerIndex(idx)}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap flex items-center gap-2 border ${
                activeFlyerIndex === idx
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-102'
                  : 'bg-white text-slate-700 hover:bg-stone-100 border-stone-300'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{flyer.tag}</span>
            </button>
          ))}
        </div>

        {/* Main Realistic Parchment Flyer Card */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Decorative Top Brass Pushpin */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 w-7 h-7 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 shadow-lg border border-amber-200 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-900/40" />
          </div>

          {/* Decorative Paper Tape on Corners */}
          <div className="absolute -top-3 left-8 z-20 w-16 h-6 bg-amber-100/70 -rotate-6 backdrop-blur-xs border-y border-amber-200/60 shadow-xs hidden sm:block pointer-events-none" />
          <div className="absolute -top-3 right-8 z-20 w-16 h-6 bg-amber-100/70 rotate-6 backdrop-blur-xs border-y border-amber-200/60 shadow-xs hidden sm:block pointer-events-none" />

          {/* The Flyer Board Container */}
          <div className={`relative bg-gradient-to-br ${currentFlyer.bgGradient} rounded-2xl p-6 sm:p-10 border-2 border-stone-300 shadow-xl text-left overflow-hidden transition-all duration-300`}>
            
            {/* Vintage Serrated Stamp Overlay in Top Right */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 rotate-6 border-2 border-dashed border-emerald-800/80 bg-white/90 px-3 py-1.5 rounded text-center shadow-xs">
              <span className="block text-[9px] font-mono uppercase tracking-widest text-emerald-900 font-bold">
                DAHLAK OFFICIAL
              </span>
              <span className="block text-[11px] font-mono font-extrabold text-emerald-700 tracking-wider">
                {currentFlyer.stampText}
              </span>
            </div>

            {/* Flyer Header Strip */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-300/80 mb-6">
              <div className="flex items-center gap-3">
                <DahlakOfficialLogo size={44} variant="emblem" className="shrink-0 drop-shadow-sm" />
                <div>
                  <h3 className="font-editorial-serif text-lg sm:text-xl font-bold text-slate-900 leading-tight">
                    Dahlak Agribusiness and Vocational Center
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 font-semibold mt-0.5">
                    <span>{COMPANY_INFO.slogan}</span>
                    <span>&bull;</span>
                    <span>Luweero &amp; Kampala</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Flyer Main Content */}
            <div className="space-y-6">
              
              {/* Tag and Title */}
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-widest bg-emerald-800 text-emerald-50 mb-2">
                  {currentFlyer.tag}
                </span>
                <h4 className="text-2xl sm:text-3xl font-normal font-editorial-serif text-slate-900 tracking-tight leading-snug">
                  {currentFlyer.title}
                </h4>
                <p className="text-sm sm:text-base text-slate-700 mt-1 font-serif italic">
                  {currentFlyer.subtitle}
                </p>
              </div>

              {/* 4 Highlights Grid - Fully Responsive */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-white/85 p-4 rounded-xl border border-stone-200 shadow-xs">
                {currentFlyer.highlights.map((h, i) => (
                  <div key={i} className="border-l-2 border-emerald-700 pl-3 py-1 text-left">
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                      {h.label}
                    </span>
                    <span className="block text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                      {h.val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Modules / Key Capabilities Checklist */}
              <div className="bg-stone-50/90 border border-stone-300/80 rounded-xl p-5">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-800" />
                  <span>Key Practical Focus Areas &amp; Curriculum</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentFlyer.modules.map((mod, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flyer Footer Action Bar */}
              <div className="pt-4 border-t border-stone-300 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-600 font-mono text-center sm:text-left">
                  <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                    <Phone className="w-3.5 h-3.5 text-emerald-800" />
                    <span>Direct Inquiries: <strong className="text-slate-900">{COMPANY_INFO.phone}</strong></span>
                  </div>
                  <span className="text-[10px] text-slate-500">Director: {COMPANY_INFO.founder} ({COMPANY_INFO.founderTitle})</span>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <a
                    href={currentFlyer.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-3 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider text-center shadow-md transition-all flex items-center justify-center gap-2 border border-emerald-900 active:scale-95"
                  >
                    <span>{currentFlyer.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* 3 Secondary Mini Stamp Badges below for added farm authenticity */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mt-8">
          
          <div className="bg-white border border-stone-300 rounded-xl p-4 shadow-xs flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200">
              <Wheat className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wide">Organic Standards</div>
              <div className="text-[11px] text-slate-500 font-mono">100% Non-Toxic Soil Regeneration</div>
            </div>
          </div>

          <div className="bg-white border border-stone-300 rounded-xl p-4 shadow-xs flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
              <Egg className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wide">Poultry Science</div>
              <div className="text-[11px] text-slate-500 font-mono">12x8m Modular Units in Luweero</div>
            </div>
          </div>

          <div className="bg-white border border-stone-300 rounded-xl p-4 shadow-xs flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-800 flex items-center justify-center shrink-0 border border-teal-200">
              <Beaker className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wide">Value Addition</div>
              <div className="text-[11px] text-slate-500 font-mono">Soaps, Bakery &amp; Cosmetic Labs</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
