import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck,
  Award
} from 'lucide-react';
import { COMPANY_INFO, FAQS } from '../data/agrobusinessData';

interface ContactSectionProps {
  initialServiceSelection?: string;
  initialQuoteDetails?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialServiceSelection = '',
  initialQuoteDetails = '',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    serviceInterest: initialServiceSelection || 'Agricultural Consultation',
    orderVolume: '',
    message: initialQuoteDetails || '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#fafaf9] border-b border-stone-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-stone-100 border border-stone-200 text-emerald-800 text-[11px] font-bold uppercase tracking-[0.2em] mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Desk &amp; Vocational Admissions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-editorial-serif text-slate-900 tracking-tight leading-tight">
            Get in Touch with Dahlak Agribusiness
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Speak directly with <strong className="text-slate-900">{COMPANY_INFO.founder}</strong> to schedule an agricultural consultation, enroll in vocational training, or discuss agripreneurship partnerships.
          </p>
        </div>

        {/* Two-Column Grid: Contact Form vs Information & FAQs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-lg p-6 sm:p-10 border border-stone-300 shadow-sm text-left">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-200">
              <div>
                <h3 className="text-xl font-normal font-editorial-serif text-slate-900">
                  Consultation &amp; Enrollment Inquiry
                </h3>
                <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                  Official responses dispatched within 12-24 business hours.
                </p>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-emerald-800 bg-stone-100 px-2.5 py-1 rounded border border-stone-200">
                <ShieldCheck className="w-3 h-3" />
                Director&apos;s Desk
              </span>
            </div>

            {formSubmitted ? (
              <div
                id="contact-form-success-state"
                className="bg-stone-50 border border-stone-300 rounded-lg p-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-800 text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-normal font-editorial-serif text-slate-900">
                  Thank You, {formData.fullName || 'Partner'}!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your inquiry regarding <strong className="text-slate-900">{formData.serviceInterest}</strong> has been transmitted to Yonas Hadgu and our agribusiness coordination desk. A formal response will be dispatched to <strong className="text-slate-900">{formData.email}</strong>.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        organization: '',
                        serviceInterest: 'Agricultural Consultation',
                        orderVolume: '',
                        message: '',
                      });
                    }}
                    className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-slate-800 bg-stone-200 hover:bg-stone-300 rounded transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form id="agrobusiness-contact-form" onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-full-name" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="contact-full-name"
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Robert / Grace"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded border border-stone-300 focus:border-emerald-800 focus:ring-1 focus:ring-emerald-800 bg-white text-slate-900 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. partner@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded border border-stone-300 focus:border-emerald-800 focus:ring-1 focus:ring-emerald-800 bg-white text-slate-900 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 0751 400 715"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded border border-stone-300 focus:border-emerald-800 focus:ring-1 focus:ring-emerald-800 bg-white text-slate-900 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-org" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Farm / Organization / Community Group
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      name="organization"
                      placeholder="e.g. Independent Farmer / Cooperative"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded border border-stone-300 focus:border-emerald-800 focus:ring-1 focus:ring-emerald-800 bg-white text-slate-900 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-service" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Service / Vocational Pillar *
                    </label>
                    <select
                      id="contact-service"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded border border-stone-300 focus:border-emerald-800 focus:ring-1 focus:ring-emerald-800 bg-white text-slate-900 text-sm outline-none transition-all"
                    >
                      <option value="Agricultural Consultation">1. Agricultural Consultation (Crops & Livestock)</option>
                      <option value="Agripreneurship">2. Agripreneurship & Value Addition</option>
                      <option value="Agri-Startup & Financial Management">3. Agri-Startup & Financial Management</option>
                      <option value="Vocational Skill Training">4. Vocational Skill Training (Poultry/Crops)</option>
                      <option value="Poultry Brooding & Layers Supply">Poultry Brooding & Layer Units (Luweero)</option>
                      <option value="Organic Tomato & Sweet Potato Supply">Organic Tomato & Sweet Potato Supply</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-volume" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Land Area / Flock Size / Trainee Count
                    </label>
                    <input
                      id="contact-volume"
                      type="text"
                      name="orderVolume"
                      placeholder="e.g. 5 Acres, 1,000 birds, or 2 Trainees"
                      value={formData.orderVolume}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded border border-stone-300 focus:border-emerald-800 focus:ring-1 focus:ring-emerald-800 bg-white text-slate-900 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Inquiries or Specific Goals *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe your current agricultural setup, training requirements, or business goals..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded border border-stone-300 focus:border-emerald-800 focus:ring-1 focus:ring-emerald-800 bg-white text-slate-900 text-sm outline-none transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    id="submit-contact-form-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-widest shadow transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-75 border border-emerald-900"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry to Yonas Hadgu</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Verified Business Info & FAQ Accordion */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            {/* Contact Channels Card with Real Data */}
            <div className="bg-[#0f172a] text-white rounded-lg p-6 sm:p-8 shadow-xl border border-slate-800 space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-400">
                  Head Office &amp; Farm Centers
                </span>
                <h3 className="text-xl font-normal font-editorial-serif text-white mt-1">
                  Dahlak Agribusiness &amp; Vocational Center
                </h3>
                <p className="text-xs text-stone-400 font-serif italic mt-1">
                  Managing Director: <strong className="text-white not-italic">{COMPANY_INFO.founder}</strong>
                </p>
              </div>

              <div className="space-y-4 text-xs">
                
                {/* Head Office */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded bg-slate-900 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-stone-400 font-mono uppercase">Head Coordination Office</div>
                    <div className="font-semibold text-stone-200 text-xs sm:text-sm mt-0.5">{COMPANY_INFO.headOfficeAddress}</div>
                  </div>
                </div>

                {/* Farm Facility */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded bg-slate-900 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-stone-400 font-mono uppercase">Practical Demonstration Farm</div>
                    <div className="font-semibold text-stone-200 text-xs sm:text-sm mt-0.5">{COMPANY_INFO.farmAddress}</div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded bg-slate-900 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-stone-400 font-mono uppercase">Direct Phone Calls</div>
                    <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="font-semibold text-stone-200 hover:text-emerald-300 text-sm mt-0.5 block">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded bg-slate-900 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-stone-400 font-mono uppercase">Official WhatsApp Desk</div>
                    <a 
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Yonas%20Hadgu%2C%20I%20would%20like%20to%20reach%20out%20to%20Dahlak%20Agribusiness.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-emerald-300 hover:underline text-sm mt-0.5 block"
                    >
                      {COMPANY_INFO.whatsappDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded bg-slate-900 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-stone-400 font-mono uppercase">Official Email</div>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="font-semibold text-stone-200 hover:text-emerald-300 text-xs sm:text-sm mt-0.5 block font-mono">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded bg-slate-900 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-stone-400 font-mono uppercase">Working Hours</div>
                    <div className="font-semibold text-stone-200 mt-0.5">{COMPANY_INFO.operatingHours}</div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Link */}
              <div className="pt-2">
                <a
                  id="whatsapp-direct-link"
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Yonas%2C%20I%20would%20like%20to%20speak%20with%20you%20regarding%20Dahlak%20Agribusiness.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow border border-emerald-700"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp: {COMPANY_INFO.whatsappDisplay}</span>
                </a>
              </div>
            </div>

            {/* Quick Interactive FAQ Accordion */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-normal font-editorial-serif text-xl">
                <HelpCircle className="w-5 h-5 text-emerald-800" />
                <span>Frequently Asked Questions</span>
              </div>

              {FAQS.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    id={`faq-item-${faq.id}`}
                    className="border border-stone-200 rounded overflow-hidden bg-white transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-4 text-left flex items-center justify-between gap-3 text-sm font-semibold text-slate-800 hover:text-emerald-800"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-emerald-800 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-stone-100 pt-2 bg-stone-50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
