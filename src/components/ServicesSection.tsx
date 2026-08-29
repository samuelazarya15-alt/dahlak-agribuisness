import React, { useState } from 'react';
import { 
  Compass, 
  TrendingUp, 
  Calculator, 
  GraduationCap, 
  Egg, 
  Leaf, 
  ArrowRight, 
  Check, 
  Sprout, 
  Layers,
  MessageSquare
} from 'lucide-react';
import { SERVICES_DATA, COMPANY_INFO } from '../data/agrobusinessData';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-5 h-5 text-emerald-800" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-emerald-800" />,
  Calculator: <Calculator className="w-5 h-5 text-emerald-800" />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-emerald-800" />,
  Egg: <Egg className="w-5 h-5 text-emerald-800" />,
  Leaf: <Leaf className="w-5 h-5 text-emerald-800" />,
};

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'Consultation', label: '1. Agri-Consultation' },
    { id: 'Enterprise', label: '2. Agripreneurship' },
    { id: 'Finance', label: '3. Agri-Finance & Startups' },
    { id: 'Training', label: '4. Vocational Training' },
    { id: 'Livestock', label: 'Poultry & Livestock' },
    { id: 'Cultivation', label: 'Organic Horticulture' },
  ];

  const filteredServices = filterCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category.toLowerCase() === filterCategory.toLowerCase());

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#fafaf9] border-b border-stone-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-stone-100 border border-stone-200 text-emerald-800 text-[11px] font-bold uppercase tracking-[0.2em] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>4 Core Vocational Pillars &amp; Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-editorial-serif text-slate-900 tracking-tight leading-tight">
            Our Official Agribusiness Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Practical skills, agricultural consultations, enterprise mentorship, financial planning, and hands-on vocational poultry and organic crop training.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`filter-service-${cat.id}`}
              type="button"
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded text-xs uppercase tracking-wider font-semibold transition-all duration-150 ${
                filterCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-lg overflow-hidden border border-stone-200 hover:border-emerald-700/60 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col group text-left"
            >
              {/* Card Image Container */}
              <div className="relative h-48 w-full overflow-hidden bg-stone-100 border-b border-stone-200">
                <img
                  src={service.imagePlaceholder.url}
                  alt={service.imagePlaceholder.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                <span className="absolute bottom-2.5 right-2.5 bg-slate-900/90 text-emerald-300 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-slate-700">
                  {service.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded bg-stone-100 text-emerald-800 flex items-center justify-center shrink-0 border border-stone-200">
                      {iconMap[service.iconName] || <Sprout className="w-5 h-5" />}
                    </div>
                    <h3 className="text-lg font-normal font-editorial-serif text-slate-900 group-hover:text-emerald-900 transition-colors line-clamp-1">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Bullet features preview */}
                  <ul className="space-y-1.5 mb-6 text-xs text-slate-700">
                    {service.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-800 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  {service.metrics && (
                    <div className="text-[11px] font-mono text-slate-500">
                      <span className="text-emerald-800 font-bold">{service.metrics.value}</span>
                    </div>
                  )}
                  <button
                    id={`learn-more-btn-${service.id}`}
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center text-xs uppercase tracking-wider font-bold text-emerald-800 hover:text-emerald-900 group/btn ml-auto"
                  >
                    <span>Full Details &amp; Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Custom Consultation Callout */}
        <div className="mt-14 bg-[#0f172a] rounded-lg p-8 text-white shadow-lg border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">Direct Agribusiness Consultation</span>
            <h4 className="text-xl sm:text-2xl font-normal font-editorial-serif text-white">
              Ready to grow your farm or enroll in vocational training?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Contact <strong className="text-white">{COMPANY_INFO.founder}</strong> directly for personalized consultation, poultry training cohorts, or agri-startup financial management.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Yonas%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-emerald-700 hover:bg-emerald-600 text-white uppercase tracking-wider font-bold text-xs rounded transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href="#contact"
              className="px-5 py-3 bg-white text-slate-900 hover:bg-stone-100 uppercase tracking-wider font-bold text-xs rounded transition-all shadow active:scale-95"
            >
              Book In Person
            </a>
          </div>
        </div>

      </div>

      {/* Interactive Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForQuote={(title) => {
          onSelectServiceForQuote(title);
        }}
      />
    </section>
  );
};
