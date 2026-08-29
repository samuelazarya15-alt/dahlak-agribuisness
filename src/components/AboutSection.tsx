import React from 'react';
import { KEY_STATS, COMPANY_INFO } from '../data/agrobusinessData';
import { DAHLAK_REAL_IMAGES } from '../data/dahlakImages';
import { 
  Landmark, 
  Award, 
  Boxes, 
  Users, 
  Sprout, 
  Droplets, 
  ShieldCheck, 
  Truck, 
  Quote, 
  ArrowRight,
  Target,
  Compass,
  TrendingUp,
  MapPin,
  FileText
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Landmark: <Landmark className="w-5 h-5 text-emerald-800" />,
  Award: <Award className="w-5 h-5 text-emerald-800" />,
  Boxes: <Boxes className="w-5 h-5 text-emerald-800" />,
  Users: <Users className="w-5 h-5 text-emerald-800" />,
  Sprout: <Sprout className="w-5 h-5 text-emerald-800" />,
  Droplets: <Droplets className="w-5 h-5 text-emerald-800" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-800" />,
  Truck: <Truck className="w-5 h-5 text-emerald-800" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-emerald-800" />,
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#fafaf9] border-b border-stone-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-stone-100 border border-stone-200 text-emerald-800 text-[11px] font-bold uppercase tracking-[0.2em] mb-3">
            <Sprout className="w-3.5 h-3.5" />
            <span>Company Profile &amp; Mission</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-editorial-serif text-slate-900 tracking-tight leading-tight">
            Empowering Agriculture, Nurturing Sustainable Futures
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Under the visionary leadership of <strong className="text-slate-900">{COMPANY_INFO.founder}</strong>, Dahlak Agribusiness and Vocational Center bridges the gap between traditional cultivation and commercial prosperity.
          </p>
        </div>

        {/* Stats Grid Banner */}
        <div id="impact" className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {KEY_STATS.map((stat) => (
            <div
              key={stat.id}
              id={`stat-card-${stat.id}`}
              className="bg-white hover:bg-stone-50 border border-stone-200/90 p-6 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md text-left group"
            >
              <div className="w-10 h-10 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center mb-4 group-hover:border-emerald-700 transition-colors">
                {iconMap[stat.iconName] || <Sprout className="w-5 h-5 text-emerald-800" />}
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-normal font-editorial-serif text-slate-900 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider font-bold text-slate-800 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5 font-mono">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* Storytelling & Founder Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column: Tagged Founder & Field Photos */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="relative rounded-lg overflow-hidden shadow-lg border border-stone-300 bg-stone-100 group">
              <img
                src={DAHLAK_REAL_IMAGES.hydroponicLettuce}
                alt="Yonas Hadgu surveying organic hydroponic greenhouse lettuce crops at Dahlak farm"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="p-4 bg-slate-900 text-white flex justify-between items-center border-t border-slate-800">
                <div className="text-left">
                  <div className="font-bold text-sm font-editorial-serif text-emerald-300">{COMPANY_INFO.founder}</div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">{COMPANY_INFO.founderTitle}</div>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 bg-slate-800 text-emerald-300 rounded border border-slate-700">
                  {COMPANY_INFO.slogan}
                </span>
              </div>
            </div>

            {/* Secondary Luweero Farm Blueprint Badge */}
            <div className="bg-stone-900 text-white p-4 rounded-lg border border-stone-800 text-xs font-mono text-left">
              <div className="flex items-center justify-between text-emerald-400 font-bold mb-1">
                <span>Luweero Farm Blueprint</span>
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <p className="text-[11px] text-stone-300">
                Brooding (12x8m) &bull; Layers (12x8m) &bull; Feed Store (3x4m) &bull; Workers Quarters
              </p>
            </div>

          </div>

          {/* Text Narrative Column: Official About Us, Vision & Mission */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="space-y-4 text-slate-700 leading-relaxed text-base">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-700"></span>
                <span>ABOUT US</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-normal font-editorial-serif text-slate-900 tracking-tight">
                Practical Knowledge, Financial Literacy &amp; Entrepreneurship
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                {COMPANY_INFO.aboutUs}
              </p>
            </div>

            {/* Official Vision & Mission Callouts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-white border-l-4 border-emerald-800 p-4 rounded-r-lg shadow-sm border border-stone-200">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-emerald-900 mb-1.5">
                  <Target className="w-3.5 h-3.5 text-emerald-800" />
                  <span>OUR VISION</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-serif">
                  &ldquo;{COMPANY_INFO.vision}&rdquo;
                </p>
              </div>

              <div className="bg-white border-l-4 border-slate-800 p-4 rounded-r-lg shadow-sm border border-stone-200">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-slate-900 mb-1.5">
                  <Compass className="w-3.5 h-3.5 text-slate-800" />
                  <span>OUR MISSION</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-serif">
                  &ldquo;{COMPANY_INFO.mission}&rdquo;
                </p>
              </div>

            </div>

            {/* Slogan Quote Banner */}
            <div className="bg-emerald-950 text-white p-5 rounded-lg border border-emerald-800 relative">
              <Quote className="w-6 h-6 text-emerald-700 absolute top-3 right-4 pointer-events-none" />
              <p className="text-base sm:text-lg italic font-editorial-serif text-emerald-100 leading-relaxed">
                &ldquo;Back to organic nature. Let&apos;s grow together.&rdquo;
              </p>
              <div className="mt-2 text-xs font-mono text-emerald-300">
                — Dahlak Agribusiness &amp; Vocational Center Directive
              </div>
            </div>

            {/* Action Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#company-profile"
                className="inline-flex items-center text-xs uppercase tracking-widest font-bold text-emerald-800 hover:text-emerald-900 gap-1.5 group"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-800" />
                <span>View Full Company Dossier &amp; Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
