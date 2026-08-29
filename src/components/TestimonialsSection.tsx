import React from 'react';
import { Star, MessageSquare, Quote, CheckCircle, Building2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/agrobusinessData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#fafaf9] border-b border-stone-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-stone-100 border border-stone-200 text-emerald-800 text-[11px] font-bold uppercase tracking-[0.2em] mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Commercial Partners & Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-editorial-serif text-slate-900 tracking-tight leading-tight">
            Trusted by Commodity Exporters, Retail Networks & Farming Unions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            See how Dahlak Agrobusiness’s commitment to consistent crop purity, ethical farmer agreements, and cold-chain precision drives mutual commercial growth.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              id={`testimonial-card-${testimonial.id}`}
              className="bg-white rounded-lg p-7 border border-stone-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between relative group"
            >
              <Quote className="w-8 h-8 text-stone-200 absolute top-6 right-6 pointer-events-none group-hover:text-emerald-100 transition-colors" />

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="text-[11px] font-mono font-bold text-slate-700 ml-1.5">5.0 / 5.0</span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm font-editorial-serif italic text-slate-800 leading-relaxed mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>

              {/* Author & Photo Meta */}
              <div className="pt-4 border-t border-stone-100 flex items-center gap-3.5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-stone-100 shrink-0 border border-stone-300">
                  <img
                    src={testimonial.avatar.url}
                    alt={testimonial.avatar.alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-editorial-serif">
                    {testimonial.name}
                  </h4>
                  <div className="text-xs text-emerald-800 font-medium">
                    {testimonial.role}
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono truncate max-w-[190px]">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Trust Badges */}
        <div className="mt-16 pt-10 border-t border-stone-200 flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-slate-500 text-xs font-mono tracking-wider uppercase">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-emerald-800" />
            <span>Commercial Grain Exporters</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-800" />
            <span>Supermarket Retail Networks</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-emerald-800" />
            <span>Regional Outgrower Unions</span>
          </div>
        </div>

      </div>
    </section>
  );
};
