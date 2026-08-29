import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';
import { COMPANY_INFO } from '../data/agrobusinessData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForQuote: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onSelectForQuote }) => {
  if (!service) return null;

  return (
    <div
      id="service-detail-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="service-detail-modal-content"
        className="relative bg-[#fafaf9] rounded-lg max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-300 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Image */}
        <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-slate-900">
          {/* Photo tag for easy replacement */}
          <div className="absolute top-3 left-3 z-10 bg-slate-900/90 text-emerald-300 text-[10px] font-mono px-2.5 py-1 rounded border border-emerald-500/40">
            📷 {service.imagePlaceholder.tag}
          </div>

          <img
            src={service.imagePlaceholder.url}
            alt={service.imagePlaceholder.alt}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-slate-950/40 to-transparent" />

          <button
            id="close-service-modal-btn"
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center border border-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block bg-slate-800 text-emerald-300 text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded border border-slate-700 mb-1">
              {service.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-normal font-editorial-serif text-white">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Metrics highlight banner if available */}
          {service.metrics && (
            <div className="flex items-center justify-between p-3 bg-white rounded border border-stone-200">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-600">
                Key Performance Standard:
              </span>
              <div className="text-right">
                <span className="text-base font-bold font-editorial-serif text-emerald-800">
                  {service.metrics.value}
                </span>
                <span className="text-xs text-slate-500 ml-1.5 font-mono">
                  ({service.metrics.label})
                </span>
              </div>
            </div>
          )}

          {/* Full description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Service Overview & Specifications
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Key deliverables checklist */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Core Capabilities & Quality Standards
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer / Action */}
          <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-500 flex items-center gap-1.5 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-800" />
              <span>Full compliance with Dahlak quality protocols</span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 sm:w-auto px-4 py-2 text-xs uppercase tracking-wider font-semibold text-slate-700 hover:text-slate-900 bg-stone-200 hover:bg-stone-300 rounded transition-colors"
              >
                Close
              </button>
              <button
                id="modal-request-quote-btn"
                type="button"
                onClick={() => {
                  onSelectForQuote(service.title);
                  onClose();
                  const contactEl = document.getElementById('contact');
                  if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-1/2 sm:w-auto px-4 py-2 text-xs uppercase tracking-wider font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded shadow-sm flex items-center justify-center gap-1.5 transition-colors border border-emerald-900"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
