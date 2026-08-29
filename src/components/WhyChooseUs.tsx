import React from 'react';
import { 
  ShieldCheck, 
  Leaf, 
  Sparkles, 
  CheckCircle2, 
  Scale, 
  Award, 
  Clock, 
  Users, 
  Globe 
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/agrobusinessData';

export const WhyChooseUs: React.FC = () => {
  const advantages = [
    {
      id: 'adv-1',
      title: 'Direct Farm-to-Port Supply Chain',
      description: 'By cutting out arbitrary intermediate brokers, Dahlak guarantees fresher produce, transparent pricing, and predictable shipping lead times.',
      icon: <Globe className="w-5 h-5 text-emerald-400" />,
    },
    {
      id: 'adv-2',
      title: 'Rigorous 99.9% Optical Sorter Purity',
      description: 'Our agro-processing facility uses high-precision color and laser sorters to eliminate foreign matter and defective grains before packaging.',
      icon: <Scale className="w-5 h-5 text-emerald-400" />,
    },
    {
      id: 'adv-3',
      title: 'Climate-Resilient Solar Technology',
      description: 'Independent solar-powered water pumping stations protect our crops from regional grid outages and ensure continuous harvest cycles.',
      icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
    },
    {
      id: 'adv-4',
      title: 'Rapid Cold-Chain Pre-Cooling',
      description: 'Fresh vegetables and fruits are pre-cooled within 120 minutes of harvest, locking in natural nutrients, crisp texture, and shelf-life.',
      icon: <Clock className="w-5 h-5 text-emerald-400" />,
    },
    {
      id: 'adv-5',
      title: 'Guaranteed Outgrower Buyback Contracts',
      description: 'We uplift thousands of local farming families with fair floor prices, agronomic mentorship, and high-yield certified seed stocks.',
      icon: <Users className="w-5 h-5 text-emerald-400" />,
    },
    {
      id: 'adv-6',
      title: 'Full Lot & Batch Traceability',
      description: 'Every container is tagged with harvest field coordinates, drying date, moisture content tests, and sanitary certification logs.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#0a0f1d] text-white relative overflow-hidden border-b border-stone-800">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-stone-900 border border-stone-700 text-stone-300 text-[11px] font-mono uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5 text-emerald-400" />
            <span>The Dahlak Enterprise Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-editorial-serif text-white tracking-tight leading-tight">
            Why Leading Distributors & Exporters Choose Dahlak
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl mx-auto">
            We combine large-scale agricultural infrastructure with uncompromising quality standards, creating unmatched dependability for commercial food buyers.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 text-left">
          {advantages.map((adv) => (
            <div
              key={adv.id}
              id={`advantage-card-${adv.id}`}
              className="bg-stone-900/80 hover:bg-stone-900 border border-stone-800 hover:border-stone-700 p-6 sm:p-7 rounded-lg transition-all duration-200 shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded bg-stone-950 border border-stone-700 flex items-center justify-center mb-5 group-hover:border-emerald-500 transition-colors">
                  {adv.icon}
                </div>
                <h3 className="text-lg font-normal font-editorial-serif text-white group-hover:text-emerald-300 transition-colors mb-2.5">
                  {adv.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  {adv.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-800 flex items-center text-[11px] font-mono text-emerald-400 gap-1.5 uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Quality Protocol</span>
              </div>
            </div>
          ))}
        </div>

        {/* International Standards & Certifications Ribbon */}
        <div className="bg-stone-900/60 border border-stone-800 rounded-lg p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-400">
              Certified Compliance & Quality Marks
            </span>
            <h4 className="text-xl sm:text-2xl font-normal font-editorial-serif text-white mt-1">
              Verified Against Global Agricultural Accreditations
            </h4>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="bg-stone-950 border border-stone-800 p-4 rounded text-center flex flex-col items-center justify-center hover:border-emerald-700 transition-colors"
              >
                <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 mb-1">
                  {cert.badge}
                </div>
                <div className="text-sm sm:text-base font-normal font-editorial-serif text-white">
                  {cert.name}
                </div>
                <div className="text-[10px] text-stone-400 mt-0.5 font-mono">
                  {cert.code}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
