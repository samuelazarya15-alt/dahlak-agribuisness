import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompanyProfileViewer } from './components/CompanyProfileViewer';
import { FarmDecorationFlyers } from './components/FarmDecorationFlyers';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { DigitalFarmSuite } from './components/DigitalFarmSuite';
import { VideoSpotlight } from './components/VideoSpotlight';
import { GallerySection } from './components/GallerySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { YieldCalculator } from './components/YieldCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from './data/agrobusinessData';

export default function App() {
  const [quotePrefillService, setQuotePrefillService] = useState<string>('');
  const [quotePrefillDetails, setQuotePrefillDetails] = useState<string>('');
  const [showBackToTop, setShowBackToTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setQuotePrefillService(serviceTitle);
    setQuotePrefillDetails(`I am requesting a consultation and availability schedule for: ${serviceTitle}.`);
  };

  const handleApplyEstimateToQuote = (details: string) => {
    setQuotePrefillDetails(details);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] text-slate-900 flex flex-col font-sans selection:bg-emerald-700 selection:text-white">
      {/* Sticky Top Navbar */}
      <Navbar onOpenContact={() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Official Company Profile & Blueprint Viewer */}
        <CompanyProfileViewer />

        {/* Farm Bulletins, Admission Notices & Decorative Agronomy Flyers */}
        <FarmDecorationFlyers />

        {/* About & Narrative Section */}
        <AboutSection />

        {/* 5 Core Pillars & Services Section */}
        <ServicesSection onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* 5th Core Sector: Digital Farm Software Suite & AgriTech */}
        <DigitalFarmSuite />

        {/* Responsive Video Spotlight & Story (ቪድዮ ንምርኣይ) */}
        <VideoSpotlight />

        {/* Visual Farm & Facilities Gallery with Real Photo Data Mapping */}
        <GallerySection />

        {/* Why Choose Dahlak */}
        <WhyChooseUs />

        {/* Practical Production & Farm Estimator Tool */}
        <YieldCalculator onApplyEstimateToQuote={handleApplyEstimateToQuote} />

        {/* Client & Trainee Testimonials */}
        <TestimonialsSection />

        {/* Direct Contact & Consultation Form */}
        <ContactSection
          initialServiceSelection={quotePrefillService}
          initialQuoteDetails={quotePrefillDetails}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* WhatsApp Direct Floating Button */}
        <a
          id="floating-whatsapp-btn"
          href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Yonas%20Hadgu%2C%20I%20am%20chatting%20from%20the%20Dahlak%20Agribusiness%20website.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 border border-emerald-600/50"
          aria-label="Direct WhatsApp chat with Yonas Hadgu"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            id="back-to-top-btn"
            type="button"
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-xl flex items-center justify-center border border-slate-700 transition-all hover:scale-105 active:scale-95 animate-in fade-in duration-200"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
