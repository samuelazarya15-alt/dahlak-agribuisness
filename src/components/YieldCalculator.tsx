import React, { useState } from 'react';
import { Calculator, Truck, ArrowRight } from 'lucide-react';

interface YieldCalculatorProps {
  onApplyEstimateToQuote: (details: string) => void;
}

export const YieldCalculator: React.FC<YieldCalculatorProps> = ({ onApplyEstimateToQuote }) => {
  const [commodity, setCommodity] = useState<'sesame' | 'teff' | 'soybean' | 'tomatoes' | 'maize'>('sesame');
  const [volumeMetricTons, setVolumeMetricTons] = useState<number>(50);
  const [packagingType, setPackagingType] = useState<'50kg-hermetic' | '25kg-woven' | '1ton-bulk' | 'retail-1kg'>('50kg-hermetic');
  const [logisticsMode, setLogisticsMode] = useState<'fob-port' | 'cif-destination' | 'farmgate'>('fob-port');

  const commoditySpecs = {
    sesame: {
      name: 'Premium White / Brown Sesame Seeds',
      purity: '99.9% Optical Sorted',
      moisture: 'Max 6.0%',
      estContainerCapacityMT: 19, // 20ft FCL
      baseLeadTimeDays: 14,
    },
    teff: {
      name: 'High-Purity White & Brown Teff Grain',
      purity: '99.8% Cleaned & Destoned',
      moisture: 'Max 10.5%',
      estContainerCapacityMT: 21,
      baseLeadTimeDays: 10,
    },
    soybean: {
      name: 'Non-GMO Food-Grade Soybeans',
      purity: '99.5% Graded',
      moisture: 'Max 12.0%',
      estContainerCapacityMT: 22,
      baseLeadTimeDays: 12,
    },
    tomatoes: {
      name: 'Greenhouse Vine-Ripened Tomatoes (Fresh)',
      purity: 'Grade-A Hydroponic',
      moisture: 'Cold-Chain Controlled (+4°C)',
      estContainerCapacityMT: 16,
      baseLeadTimeDays: 2,
    },
    maize: {
      name: 'Selected White & Yellow Maize Corn',
      purity: '99.0% Graded Grain',
      moisture: 'Max 13.0%',
      estContainerCapacityMT: 24,
      baseLeadTimeDays: 7,
    },
  };

  const selectedSpec = commoditySpecs[commodity];
  const estFclContainers = Math.ceil(volumeMetricTons / selectedSpec.estContainerCapacityMT);
  const totalBags = packagingType === '50kg-hermetic'
    ? volumeMetricTons * 20
    : packagingType === '25kg-woven'
    ? volumeMetricTons * 40
    : packagingType === 'retail-1kg'
    ? volumeMetricTons * 1000
    : Math.ceil(volumeMetricTons);

  const handleTransferToQuote = () => {
    const summary = `Inquiry for ${volumeMetricTons} MT of ${selectedSpec.name}. Packaging: ${packagingType}. Delivery Terms: ${logisticsMode.toUpperCase()}. Approx ${estFclContainers} FCL containers.`;
    onApplyEstimateToQuote(summary);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator" className="py-20 lg:py-24 bg-[#fafaf9] border-b border-stone-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-stone-100 border border-stone-200 text-emerald-800 text-[11px] font-bold uppercase tracking-[0.2em] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Logistics & Volume Modeler</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-editorial-serif text-slate-900 tracking-tight leading-tight">
            Produce Volume & Logistics Estimator
          </h2>
          <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto">
            Plan your harvest procurement, estimate shipping container allocations, and generate an immediate dispatch specification for Dahlak Agrobusiness.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white border border-stone-300 rounded-lg p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Controls Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Select Commodity */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2">
                  1. Select Agricultural Commodity
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {(['sesame', 'teff', 'soybean', 'tomatoes', 'maize'] as const).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setCommodity(key)}
                      className={`p-3 rounded border text-xs font-semibold capitalize transition-all text-left ${
                        commodity === key
                          ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                          : 'bg-stone-50 text-slate-700 border-stone-200 hover:border-stone-300 hover:bg-stone-100'
                      }`}
                    >
                      <div className="font-bold uppercase tracking-wider text-[11px]">{key}</div>
                      <div className={`text-[10px] font-mono mt-0.5 ${commodity === key ? 'text-emerald-300' : 'text-slate-500'}`}>
                        {key === 'tomatoes' ? 'Fresh / +4°C' : 'Graded Grains'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Metric Tons Slider / Input */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    2. Procurement Volume (Metric Tons)
                  </label>
                  <span className="text-base font-bold font-editorial-serif text-emerald-800">
                    {volumeMetricTons} MT
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="500"
                  step="5"
                  value={volumeMetricTons}
                  onChange={(e) => setVolumeMetricTons(Number(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-800"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                  <span>5 MT (Sample)</span>
                  <span>100 MT</span>
                  <span>250 MT</span>
                  <span>500 MT (Full Fleet)</span>
                </div>
              </div>

              {/* Packaging Format */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2">
                  3. Packaging & Bagging Format
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: '50kg-hermetic', label: '50kg Hermetic Bags', desc: 'Moisture & pest sealed' },
                    { id: '25kg-woven', label: '25kg PP Woven Bags', desc: 'Standard commercial' },
                    { id: '1ton-bulk', label: '1,000kg Jumbo Bags', desc: 'Industrial processing' },
                    { id: 'retail-1kg', label: '1kg Retail Packets', desc: 'Supermarket ready' },
                  ].map((pkg) => (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => setPackagingType(pkg.id as any)}
                      className={`p-2.5 rounded border text-xs text-left transition-all ${
                        packagingType === pkg.id
                          ? 'bg-stone-100 border-emerald-800 text-slate-900 font-bold'
                          : 'bg-stone-50 border-stone-200 text-slate-600 hover:border-stone-300'
                      }`}
                    >
                      <div className="font-semibold text-xs">{pkg.label}</div>
                      <div className="text-[10px] text-slate-500 font-mono mt-0.5">{pkg.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Delivery Terms */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2">
                  4. International Incoterms
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'fob-port', label: 'FOB Port', desc: 'On Vessel' },
                    { id: 'cif-destination', label: 'CIF Port', desc: 'Insured Freight' },
                    { id: 'farmgate', label: 'Ex-Farm', desc: 'Depot Pickup' },
                  ].map((inc) => (
                    <button
                      key={inc.id}
                      type="button"
                      onClick={() => setLogisticsMode(inc.id as any)}
                      className={`p-2 rounded border text-xs text-left transition-all ${
                        logisticsMode === inc.id
                          ? 'bg-stone-100 border-emerald-800 text-slate-900 font-bold'
                          : 'bg-stone-50 border-stone-200 text-slate-600'
                      }`}
                    >
                      <div className="font-semibold text-[11px]">{inc.label}</div>
                      <div className="text-[9px] text-slate-400 font-mono">{inc.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Live Calculation Output Card */}
            <div className="lg:col-span-5 bg-[#0f172a] text-white rounded-lg p-6 shadow-xl border border-slate-800 text-left space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                    Estimated Dispatch Model
                  </span>
                  <h3 className="text-base font-normal font-editorial-serif text-white mt-0.5">
                    {selectedSpec.name}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded bg-slate-900 text-emerald-400 flex items-center justify-center border border-slate-700">
                  <Truck className="w-4 h-4" />
                </div>
              </div>

              {/* Output Statistics */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-slate-800 font-mono">
                  <span className="text-slate-400">Purity Standard:</span>
                  <span className="font-bold text-emerald-400">{selectedSpec.purity}</span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-slate-800 font-mono">
                  <span className="text-slate-400">Moisture Index:</span>
                  <span className="text-slate-200">{selectedSpec.moisture}</span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-slate-800 font-mono">
                  <span className="text-slate-400">Est. Shipping Allocation:</span>
                  <span className="font-bold text-emerald-300">
                    {estFclContainers} × 20ft FCL Containers
                  </span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-slate-800 font-mono">
                  <span className="text-slate-400">Packaged Units:</span>
                  <span className="text-slate-200">
                    {totalBags.toLocaleString()} {packagingType === '1ton-bulk' ? 'Bags (1 MT each)' : 'Units'}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-slate-800 font-mono">
                  <span className="text-slate-400">Est. Prep & Dispatch:</span>
                  <span className="text-slate-200">{selectedSpec.baseLeadTimeDays} Working Days</span>
                </div>
              </div>

              {/* Apply to Quote Button */}
              <div className="pt-2">
                <button
                  id="apply-estimator-to-quote-btn"
                  type="button"
                  onClick={handleTransferToQuote}
                  className="w-full py-3 px-4 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded transition-all shadow flex items-center justify-center gap-2 group active:scale-95 border border-emerald-700"
                >
                  <span>Apply Estimate to Formal Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[10px] text-slate-400 text-center mt-2 font-mono">
                  Direct review by Yonas & commercial export desk.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
