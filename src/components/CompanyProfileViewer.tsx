import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Printer, 
  ExternalLink, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Layers, 
  Home, 
  Warehouse, 
  Sprout, 
  BookOpen, 
  Sparkles, 
  ChevronRight,
  UserCheck
} from 'lucide-react';
import { COMPANY_INFO, FARM_FACILITY_ZONES, SERVICES_DATA } from '../data/agrobusinessData';
import { DahlakOfficialLogo } from './DahlakOfficialLogo';

export const CompanyProfileViewer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'facilities' | 'brochure-view'>('profile');

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="company-profile" className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-stone-200 gap-6">
          <div className="text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold uppercase tracking-[0.2em] mb-2">
              <FileText className="w-3.5 h-3.5" />
              <span>Official Company Dossier &amp; Blueprint</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal font-editorial-serif text-slate-900 tracking-tight">
              Dahlak Agribusiness &amp; Vocational Center Profile
            </h2>
            <p className="mt-2 text-base text-slate-600 font-sans">
              Verified corporate profile, certified vision, mission, service catalog, and Luweero farm structural blueprints.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded transition-colors"
              title="Print Company Profile"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Profile</span>
            </button>
            <a
              href={`https://wa.me/256743994935?text=Hello%20Yonas%2C%20I%20reviewed%20the%20Dahlak%20Agribusiness%20and%20Vocational%20Center%20Company%20Profile%20and%20would%20like%20more%20information.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded transition-colors shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Request PDF via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex border-b border-stone-200 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('profile')}
            className={`pb-3 px-4 text-xs uppercase tracking-wider font-bold transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'profile'
                ? 'border-emerald-800 text-emerald-900'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Interactive Corporate Overview</span>
          </button>
          <button
            onClick={() => setActiveTab('facilities')}
            className={`pb-3 px-4 text-xs uppercase tracking-wider font-bold transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'facilities'
                ? 'border-emerald-800 text-emerald-900'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Luweero Farm Blueprint (12x8m Units)</span>
          </button>
          <button
            onClick={() => setActiveTab('brochure-view')}
            className={`pb-3 px-4 text-xs uppercase tracking-wider font-bold transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'brochure-view'
                ? 'border-emerald-800 text-emerald-900'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>2-Page Document Sheet View</span>
          </button>
        </div>

        {/* TAB 1: INTERACTIVE CORPORATE PROFILE */}
        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
            
            {/* Left Col: Emblem & Core Directives */}
            <div className="lg:col-span-4 bg-stone-50 border border-stone-200 rounded-xl p-6 sm:p-8 space-y-6">
              <div className="text-center pb-6 border-b border-stone-200">
                <DahlakOfficialLogo size="xl" variant="emblem" className="mx-auto mb-4" />
                <h3 className="text-xl font-bold font-editorial-serif text-slate-900">
                  Dahlak Agribusiness &amp; Vocational Center
                </h3>
                <p className="text-xs uppercase font-mono tracking-widest text-emerald-800 font-bold mt-1">
                  &ldquo;{COMPANY_INFO.slogan}&rdquo;
                </p>
                <p className="text-xs italic text-stone-500 font-serif mt-0.5">
                  &ldquo;{COMPANY_INFO.secondaryMotto}&rdquo;
                </p>
              </div>

              {/* Founder Tag */}
              <div className="bg-white p-4 rounded-lg border border-stone-200 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-900 text-white flex items-center justify-center font-bold text-sm font-editorial-serif">
                  YH
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 font-editorial-serif">{COMPANY_INFO.founder}</div>
                  <div className="text-[11px] text-emerald-800 font-mono">{COMPANY_INFO.founderTitle}</div>
                </div>
              </div>

              {/* Official Contact Badges */}
              <div className="space-y-3 text-xs pt-2">
                <div className="flex items-start gap-2.5 text-slate-700">
                  <MapPin className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-mono text-[10px] uppercase">Head Office:</strong>
                    <span>{COMPANY_INFO.headOfficeAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-slate-700">
                  <MapPin className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-mono text-[10px] uppercase">Farm &amp; Demonstration Site:</strong>
                    <span>{COMPANY_INFO.farmAddress}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-slate-700">
                  <Phone className="w-4 h-4 text-emerald-800 shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-mono text-[10px] uppercase mr-1">Phone:</strong>
                    <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-emerald-800 font-semibold">{COMPANY_INFO.phone}</a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-slate-700">
                  <MessageSquare className="w-4 h-4 text-emerald-800 shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-mono text-[10px] uppercase mr-1">WhatsApp:</strong>
                    <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-800 font-semibold">{COMPANY_INFO.whatsappDisplay}</a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-slate-700">
                  <Mail className="w-4 h-4 text-emerald-800 shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-mono text-[10px] uppercase mr-1">Email:</strong>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-emerald-800 font-semibold">{COMPANY_INFO.email}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: About Us, Vision, Mission & 4 Core Pillars */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* About Us Card */}
              <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-700"></span>
                  <span>About Us</span>
                </div>
                <h3 className="text-2xl font-normal font-editorial-serif text-slate-900 mb-4">
                  Bridging Agriculture &amp; Business for Sustainable Livelihoods
                </h3>
                <p className="text-slate-700 leading-relaxed text-base">
                  {COMPANY_INFO.aboutUs}
                </p>
              </div>

              {/* Vision & Mission Split Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Vision */}
                <div className="bg-emerald-900 text-white rounded-xl p-6 border border-emerald-800 shadow-sm relative overflow-hidden">
                  <div className="absolute -right-6 -bottom-6 opacity-10 text-white pointer-events-none">
                    <Sparkles className="w-32 h-32" />
                  </div>
                  <div className="text-[10px] uppercase font-mono tracking-widest text-emerald-300 font-bold mb-2">
                    Vision Statement
                  </div>
                  <h4 className="text-lg font-bold font-editorial-serif mb-3 text-emerald-100">
                    Regional Center of Excellence
                  </h4>
                  <p className="text-sm text-emerald-100/90 leading-relaxed font-serif italic">
                    &ldquo;{COMPANY_INFO.vision}&rdquo;
                  </p>
                </div>

                {/* Mission */}
                <div className="bg-[#0f172a] text-white rounded-xl p-6 border border-slate-800 shadow-sm relative overflow-hidden">
                  <div className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-bold mb-2">
                    Mission Statement
                  </div>
                  <h4 className="text-lg font-bold font-editorial-serif mb-3 text-stone-100">
                    Practical Empowerment
                  </h4>
                  <p className="text-sm text-stone-300 leading-relaxed font-serif italic">
                    &ldquo;{COMPANY_INFO.mission}&rdquo;
                  </p>
                </div>

              </div>

              {/* 5 Core Services Pillars */}
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-stone-200">
                  <h4 className="text-lg font-bold font-editorial-serif text-slate-900">
                    Our 5 Core Agribusiness &amp; AgriTech Pillars
                  </h4>
                  <span className="text-[11px] font-mono uppercase text-emerald-800 font-bold">
                    Official Services
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {SERVICES_DATA.slice(0, 5).map((service, idx) => (
                    <div key={service.id} className="bg-white p-4 rounded-lg border border-stone-200 shadow-2xs flex flex-col justify-between">
                      <div>
                        <div className="text-[10px] font-mono text-emerald-800 font-bold uppercase mb-1">
                          Pillar 0{idx + 1}
                        </div>
                        <h5 className="text-sm font-bold text-slate-900 uppercase font-sans mb-1.5">
                          {service.title}
                        </h5>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {service.shortDescription}
                        </p>
                      </div>
                      {service.id === 'agritech-digital-farm' && (
                        <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between">
                          <span className="text-[10px] font-mono text-emerald-700 font-semibold">Drone &amp; Aerial Scouting</span>
                          <a href="#agritech" className="text-[10px] font-bold text-emerald-800 hover:underline">Explore Vision →</a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: LUWEERO FARM INFRASTRUCTURE BLUEPRINT */}
        {activeTab === 'facilities' && (
          <div className="space-y-8 text-left">
            <div className="bg-stone-900 text-white rounded-xl p-6 sm:p-8 border border-stone-800">
              <div className="max-w-3xl">
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
                  Luweero City Council Agricultural Hub
                </span>
                <h3 className="text-2xl sm:text-3xl font-normal font-editorial-serif text-white mt-1">
                  Farm Infrastructure Blueprint &amp; Zone Specifications
                </h3>
                <p className="text-sm text-stone-300 mt-2 leading-relaxed">
                  As documented in our corporate profile, our demonstration farm in Luweero features specialized poultry brooding, commercial layers sheds, hermetic feed storage, and residential staff quarters.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FARM_FACILITY_ZONES.map((zone) => (
                <div
                  key={zone.id}
                  className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-stone-100 text-slate-800 border border-stone-200">
                        {zone.dimensions}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {zone.category}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold font-editorial-serif text-slate-900 mb-2">
                      {zone.name}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {zone.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 space-y-1 text-xs">
                    <div className="text-[11px] text-slate-500 font-mono">
                      <strong className="text-slate-700">Capacity/Scale:</strong> {zone.capacity}
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono">
                      <strong className="text-slate-700">Purpose:</strong> {zone.purpose}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Field Photo Slot Annotation */}
            <div className="bg-emerald-950 text-white rounded-xl p-6 border border-emerald-800 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-800 border border-emerald-700 flex items-center justify-center text-white shrink-0">
                  <UserCheck className="w-6 h-6 text-emerald-300" />
                </div>
                <div>
                  <h4 className="font-bold font-editorial-serif text-base text-emerald-100">
                    Founder Field Inspection in Tomato &amp; Sweet Potato Plots
                  </h4>
                  <p className="text-xs text-emerald-200/80 mt-0.5">
                    Managing Director Yonas Hadgu oversees daily agronomy and training in Luweero with branded Dahlak field gear.
                  </p>
                </div>
              </div>
              <a
                href="#gallery"
                className="shrink-0 px-4 py-2 rounded bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                View Photos in Gallery →
              </a>
            </div>
          </div>
        )}

        {/* TAB 3: BROCHURE 2-PAGE DOCUMENT SHEET VIEW */}
        {activeTab === 'brochure-view' && (
          <div className="space-y-10 text-left">
            <div className="text-center max-w-xl mx-auto mb-6">
              <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-800 font-bold">
                Company Profile Document Replica
              </span>
              <h3 className="text-xl font-bold font-editorial-serif text-slate-900 mt-1">
                Official 2-Page Corporate Profile
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              
              {/* PAGE 1 BROCHURE SHEET */}
              <div className="bg-white border-2 border-stone-300 rounded-xl shadow-lg p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between">
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-6">
                    <DahlakOfficialLogo size="md" variant="horizontal" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 bg-stone-100 px-2 py-1 rounded">
                      Page 01
                    </span>
                  </div>

                  {/* Brochure Blueprint Visual Section */}
                  <div className="bg-stone-900 text-emerald-300 p-4 rounded-lg border border-stone-800 mb-6 text-xs font-mono">
                    <div className="text-white font-bold mb-2 uppercase text-[11px] tracking-wider flex items-center justify-between">
                      <span>Luweero Facility Layout</span>
                      <span className="text-emerald-400 text-[10px]">Agricultural Company</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="bg-stone-800 p-2 rounded border border-stone-700">
                        <span className="text-white font-bold block">BROODING</span>
                        <span>12m × 8m</span>
                      </div>
                      <div className="bg-stone-800 p-2 rounded border border-stone-700">
                        <span className="text-white font-bold block">LAYERS</span>
                        <span>12m × 8m</span>
                      </div>
                      <div className="bg-stone-800 p-2 rounded border border-stone-700">
                        <span className="text-white font-bold block">FEED &amp; EQUIP STORE</span>
                        <span>3m × 4m</span>
                      </div>
                      <div className="bg-stone-800 p-2 rounded border border-stone-700">
                        <span className="text-white font-bold block">WORKERS QUARTERS</span>
                        <span>Staff Residence</span>
                      </div>
                    </div>
                  </div>

                  {/* About Us */}
                  <div className="mb-6">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-800 mb-2 font-mono">
                      ABOUT US
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {COMPANY_INFO.aboutUs}
                    </p>
                  </div>

                  {/* Vision & Mission */}
                  <div className="space-y-4">
                    <div className="bg-stone-50 p-3.5 rounded border border-stone-200">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold block mb-1">
                        VISION
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed italic font-serif">
                        {COMPANY_INFO.vision}
                      </p>
                    </div>

                    <div className="bg-stone-50 p-3.5 rounded border border-stone-200">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold block mb-1">
                        MISSION
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed italic font-serif">
                        {COMPANY_INFO.mission}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-200 text-center">
                  <span className="text-xs font-serif italic font-bold text-emerald-800">
                    &ldquo;{COMPANY_INFO.slogan}&rdquo;
                  </span>
                </div>
              </div>

              {/* PAGE 2 BROCHURE SHEET */}
              <div className="bg-white border-2 border-stone-300 rounded-xl shadow-lg p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between">
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-6">
                    <div className="text-left">
                      <h4 className="text-lg font-bold font-editorial-serif text-slate-900">
                        Our Services
                      </h4>
                      <p className="text-[10px] uppercase font-mono text-emerald-800 font-semibold">
                        Vocational &amp; Agronomic Services
                      </p>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 bg-stone-100 px-2 py-1 rounded">
                      Page 02
                    </span>
                  </div>

                  {/* The 5 Exact Core Services */}
                  <div className="space-y-2.5 mb-6">
                    
                    <div className="bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-200">
                      <h5 className="text-[11px] font-bold text-emerald-950 uppercase font-sans mb-0.5">
                        1. AGRICULTURAL CONSULTATION
                      </h5>
                      <p className="text-[10px] text-slate-700 leading-relaxed">
                        Expert advice on crop production, livestock management, soil health, and farming techniques.
                      </p>
                    </div>

                    <div className="bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-200">
                      <h5 className="text-[11px] font-bold text-emerald-950 uppercase font-sans mb-0.5">
                        2. AGRIPRENEURSHIP &amp; VALUE ADDITION
                      </h5>
                      <p className="text-[10px] text-slate-700 leading-relaxed">
                        Guidance on starting and growing agriculture based businesses, business planning, market access, and value addition.
                      </p>
                    </div>

                    <div className="bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-200">
                      <h5 className="text-[11px] font-bold text-emerald-950 uppercase font-sans mb-0.5">
                        3. AGRI-STARTUP &amp; FINANCIAL MANAGEMENT
                      </h5>
                      <p className="text-[10px] text-slate-700 leading-relaxed">
                        Support for Agri-startups with budgeting, funding strategies, cash flow management, and financial planning.
                      </p>
                    </div>

                    <div className="bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-200">
                      <h5 className="text-[11px] font-bold text-emerald-950 uppercase font-sans mb-0.5">
                        4. VOCATIONAL SKILL TRAINING
                      </h5>
                      <p className="text-[10px] text-slate-700 leading-relaxed">
                        Hands-on training programs in agriculture, agri-business, and related trades to enhance employability and self-reliance.
                      </p>
                    </div>

                    <div className="bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-200">
                      <h5 className="text-[11px] font-bold text-emerald-950 uppercase font-sans mb-0.5">
                        5. AGRITECH, AERIAL DRONES &amp; DIGITAL FARM
                      </h5>
                      <p className="text-[10px] text-slate-700 leading-relaxed">
                        Airborne agricultural drones for NDVI multispectral crop scouting, thermal poultry canopy diagnostics, and digital farm intelligence.
                      </p>
                    </div>

                  </div>

                  {/* Contact Us Block */}
                  <div className="bg-stone-900 text-white p-5 rounded-lg border border-stone-800 space-y-2.5 text-xs">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-bold block mb-1">
                      CONTACT US
                    </span>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{COMPANY_INFO.headOfficeAddress}</span>
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
                      <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-emerald-300 font-semibold">{COMPANY_INFO.email}</a>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-200 text-center">
                  <span className="text-xs font-serif italic font-bold text-emerald-800">
                    &ldquo;{COMPANY_INFO.secondaryMotto}&rdquo;
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
