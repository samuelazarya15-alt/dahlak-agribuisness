import React, { useState } from 'react';
import { 
  Radio, 
  Wind, 
  Navigation, 
  Eye, 
  Layers, 
  ShieldCheck, 
  Compass, 
  Sparkles, 
  Maximize2, 
  CheckCircle2, 
  MessageSquare,
  Activity,
  Scan,
  Cpu,
  Sun,
  MapPin,
  ArrowUpRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/agrobusinessData';
import { DAHLAK_REAL_IMAGES } from '../data/dahlakImages';

type DroneScanMode = 'ndvi' | 'thermal' | 'topography' | 'rgb';

interface ScanModeConfig {
  id: DroneScanMode;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  sensorType: string;
  keyMetric: string;
  metricLabel: string;
  statusText: string;
  targetSector: string;
}

const DRONE_SCAN_MODES: ScanModeConfig[] = [
  {
    id: 'ndvi',
    name: 'Multispectral NDVI Crop Scouting',
    badge: 'Vegetation Health Index',
    tagline: 'High-Altitude Chlorophyll & Photosynthetic Vitality Mapping',
    description: 'Our airborne drone sweeps across the Luweero demonstration plots, capturing near-infrared (NIR) wavelengths to calculate plant vigor across organic tomato rows and sweet potato beds. This early-detection system flags localized nutrient deficiencies and moisture stress days before visible symptoms appear.',
    sensorType: '5-Band Multispectral + RedEdge Sensor',
    keyMetric: '0.84 NDVI',
    metricLabel: 'Optimal Vegetative Vigor',
    statusText: 'Active Scan • Plot A & B (Tomatoes)',
    targetSector: 'Luweero Organic Field Plots'
  },
  {
    id: 'thermal',
    name: 'Thermal Poultry Shed Diagnostics',
    badge: 'Bio-Climatic Thermal Imaging',
    tagline: 'Aerial Heat-Signature Analysis for Brooding & Layers Units',
    description: 'Hovering silently above our 12m × 8m brooding and layer sheds, the drone performs non-invasive radiometric thermal scans. By monitoring rooftop solar absorption, heat retention, and ventilation airflow, we maintain precise bio-secure temperatures for young chicks without disturbing the flock.',
    sensorType: 'Long-Wave Radiometric Thermal FLIR',
    keyMetric: '32.6°C',
    metricLabel: 'Brooding Shed Core Balance',
    statusText: 'Inspecting 12x8m Brooder Roof',
    targetSector: 'Luweero Poultry Infrastructure'
  },
  {
    id: 'topography',
    name: 'Topographical Elevation & Drip Planning',
    badge: '3D Elevation & Drainage',
    tagline: 'Centimeter-Level Terrain Contouring & Solar Drip Routing',
    description: 'Precision photogrammetry generates high-resolution 3D digital elevation models (DEM) of the farmland. This topographical data dictates optimal gravity-fed drip irrigation lines, prevents rainy-season soil erosion, and maximizes water efficiency from solar-pumped storage reservoirs.',
    sensorType: 'RTK Centimeter GPS + 48MP Orthomosaic Lens',
    keyMetric: '±1.2 cm',
    metricLabel: 'Surface Topography Precision',
    statusText: 'Contour Mapping Complete',
    targetSector: 'Gravity-Fed Irrigation Zones'
  },
  {
    id: 'rgb',
    name: 'Ultra-HD Organic Canopy & Bio-Security Patrol',
    badge: 'High-Resolution Visual Recon',
    tagline: 'Zero-Chemical Bio-Security & Field Boundary Surveillance',
    description: 'High-resolution true-color aerial inspection provides continuous oversight across the farm’s perimeter, compost production stations, and worker operations. Ensuring 100% adherence to our "Back to organic nature" standards with zero synthetic contamination.',
    sensorType: '4K Cinema True-Color Gimbal Camera',
    keyMetric: '4K Ultra-HD',
    metricLabel: 'Optical Clarity at 45m Altitude',
    statusText: 'Perimeter Live Video Feed',
    targetSector: 'Luweero Agro-Hub Boundary'
  }
];

export const DigitalFarmSuite: React.FC = () => {
  const [activeScanMode, setActiveScanMode] = useState<DroneScanMode>('ndvi');
  const [flightAltitude, setFlightAltitude] = useState<number>(45); // in meters
  const [droneBattery, setDroneBattery] = useState<number>(89);
  const [isHovering, setIsHovering] = useState<boolean>(true);

  const currentModeConfig = DRONE_SCAN_MODES.find(m => m.id === activeScanMode) || DRONE_SCAN_MODES[0];

  const handleWhatsAppConsultation = () => {
    const text = encodeURIComponent(
      `Hello Yonas Hadgu, I am fascinated by Dahlak's AgriTech vision and Airborne Drone precision farm monitoring. Could we discuss drone surveying or smart digital farm consultation for my agricultural project?`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="agritech" className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden border-y border-stone-800">
      {/* Background Ambience & Fine Grid lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-950/50 via-stone-900/80 to-stone-950 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-4 shadow-sm">
            <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>05. 5th Core Agribusiness Pillar &bull; AgriTech &amp; Aerial Intelligence</span>
          </div>
          
          <h2 className="font-editorial-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-5 leading-tight">
            The Digital Farm Vision: <br className="hidden sm:inline" />
            <span className="italic font-normal text-emerald-400">Sky Meets Soil with Airborne Precision</span>
          </h2>
          
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            At Dahlak Agribusiness &amp; Vocational Center, the ancient rhythm of fertile earth meets the cutting edge of aerospace technology. We aggregate our entire digital farm intelligence through high-altitude aerial drone systems operating above our Luweero demonstration farm—transforming how modern East African agriculture is planned, monitored, and harvested.
          </p>
        </div>

        {/* Narrative Vision Grid: 3 Compelling Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="bg-stone-800/50 border border-stone-700/70 rounded-2xl p-6 sm:p-7 backdrop-blur-sm relative overflow-hidden group hover:border-emerald-500/60 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-emerald-900/60 border border-emerald-700/50 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-105 transition-transform">
              <Navigation className="w-5 h-5" />
            </div>
            <h3 className="font-editorial-serif text-xl font-bold text-white mb-2.5">
              Autonomous Sky Patrol
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              Our autonomous agricultural drone glides on air above the Luweero valley, performing continuous aerial telemetry sweeps. By capturing multispectral imagery from 45 meters above the canopy, we spot early crop water stress and pest vulnerabilities before they threaten harvest yields.
            </p>
          </div>

          <div className="bg-stone-800/50 border border-stone-700/70 rounded-2xl p-6 sm:p-7 backdrop-blur-sm relative overflow-hidden group hover:border-emerald-500/60 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-emerald-900/60 border border-emerald-700/50 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-105 transition-transform">
              <Scan className="w-5 h-5" />
            </div>
            <h3 className="font-editorial-serif text-xl font-bold text-white mb-2.5">
              Organic Precision Agronomy
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              True organic farming demands scientific rigor. Drone-generated NDVI chlorophyll maps enable pinpoint application of organic bio-fertilizers and compost tea—delivering targeted nourishment strictly where soil needs it, with zero synthetic chemicals and zero wasted input.
            </p>
          </div>

          <div className="bg-stone-800/50 border border-stone-700/70 rounded-2xl p-6 sm:p-7 backdrop-blur-sm relative overflow-hidden group hover:border-emerald-500/60 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-emerald-900/60 border border-emerald-700/50 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-105 transition-transform">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-editorial-serif text-xl font-bold text-white mb-2.5">
              Integrated Farm Intelligence
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              Aerial drone data streams directly into Dahlak’s digital farm telemetry. From thermal canopy readings over our 12x8m brooding and layer sheds to solar drip valve synchronization, we empower trainees and farm owners with actionable, bankable intelligence.
            </p>
          </div>

        </div>

        {/* Live Drone Mission Control & Interactive Flight Cockpit */}
        <div className="bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Top Mission Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-stone-800">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-3.5 h-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
                  Dahlak SkyScout AG-4 &bull; Live Aerial Telemetry
                </span>
                <span className="text-[11px] font-mono text-stone-400">
                  Target: Luweero Agro Demonstration Hub (0°50&apos;18&quot;N, 32°30&apos;42&quot;E)
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <div className="px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 flex items-center gap-2">
                <Wind className="w-3.5 h-3.5 text-blue-400" />
                <span>Wind: 4.2 km/h ENE</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 flex items-center gap-2">
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>Solar Lux: 82,400</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-400 font-bold flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5" />
                <span>Battery: {droneBattery}%</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Drone Sensor Mode Selector */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-3 block">
                  Select Drone Airborne Sensor Mode
                </span>

                <div className="space-y-3">
                  {DRONE_SCAN_MODES.map((mode) => {
                    const isSelected = mode.id === activeScanMode;
                    return (
                      <button
                        key={mode.id}
                        onClick={() => setActiveScanMode(mode.id)}
                        className={`w-full p-4 rounded-xl text-left transition-all duration-200 border cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-950/90 border-emerald-500 shadow-lg shadow-emerald-950/60 ring-1 ring-emerald-500/50'
                            : 'bg-stone-900/70 hover:bg-stone-900 border-stone-800 text-stone-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <h4 className={`text-sm font-bold tracking-tight ${isSelected ? 'text-white' : 'text-stone-200'}`}>
                            {mode.name}
                          </h4>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                            isSelected ? 'bg-emerald-900 text-emerald-300 border border-emerald-700/60' : 'bg-stone-800 text-stone-400'
                          }`}>
                            {mode.badge}
                          </span>
                        </div>
                        <p className="text-xs text-stone-400 line-clamp-1 mb-2">
                          {mode.tagline}
                        </p>
                        <div className="flex items-center justify-between text-[11px] font-mono pt-2 border-t border-stone-800/80">
                          <span className="text-stone-400 truncate max-w-[180px]">{mode.sensorType}</span>
                          <span className={isSelected ? 'text-emerald-400 font-bold' : 'text-stone-500'}>
                            {mode.keyMetric}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Altitude Slider Control */}
              <div className="p-4 rounded-xl bg-stone-900 border border-stone-800">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-stone-300 font-medium">Airborne Drone Flight Altitude</span>
                  <span className="font-mono text-emerald-400 font-bold">{flightAltitude} Meters AGL</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  step="5"
                  value={flightAltitude}
                  onChange={(e) => setFlightAltitude(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[10px] text-stone-500 font-mono mt-1">
                  <span>20m (Ultra-Close Canopy)</span>
                  <span>45m (Standard Sweep)</span>
                  <span>100m (Full Basin Overview)</span>
                </div>
              </div>
            </div>

            {/* Right Column: Live Aerial Flight Scanner Simulation Viewport */}
            <div className="lg:col-span-7 bg-stone-900 rounded-2xl border border-stone-800 p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden min-h-[420px]">
              
              {/* Simulated Aerial HUD Overlay */}
              <div className="relative w-full aspect-video rounded-xl bg-stone-950 border border-stone-800/80 overflow-hidden flex flex-col justify-between p-4 shadow-inner">
                
                {/* Background Aerial Map Representation with dynamic filters */}
                <div 
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
                    activeScanMode === 'ndvi'
                      ? 'contrast-125 saturate-150 hue-rotate-15'
                      : activeScanMode === 'thermal'
                      ? 'invert contrast-150 hue-rotate-90 saturate-200'
                      : activeScanMode === 'topography'
                      ? 'grayscale contrast-125'
                      : ''
                  }`}
                  style={{
                    backgroundImage: `url('${DAHLAK_REAL_IMAGES.heroDroneFarm}')`,
                    opacity: 0.75
                  }}
                />

                {/* HUD Crosshairs & Grid Overlays */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98115_1px,transparent_1px),linear-gradient(to_bottom,#10b98115_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                  
                  {/* Center Target Reticle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 border border-emerald-400/40 rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 border border-emerald-400/70 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                      </div>
                    </div>
                  </div>

                  {/* Corner Target Brackets */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-emerald-400/80" />
                  <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-emerald-400/80" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-emerald-400/80" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-emerald-400/80" />
                </div>

                {/* Top HUD Telemetry Info */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-emerald-300 bg-black/60 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-emerald-900/50">
                  <div className="flex items-center gap-2">
                    <Compass className="w-3.5 h-3.5 text-emerald-400 animate-spin" style={{ animationDuration: '8s' }} />
                    <span>HDG: 184° S &bull; ALT: {flightAltitude}.0m</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold uppercase text-[10px]">
                    {currentModeConfig.badge}
                  </span>
                </div>

                {/* Bottom HUD Target Info Box */}
                <div className="relative z-10 bg-black/75 p-3 rounded-xl border border-stone-800 backdrop-blur-sm">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      {currentModeConfig.targetSector}
                    </span>
                    <span className="font-mono text-emerald-400 font-bold text-sm">
                      {currentModeConfig.keyMetric}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-stone-400">
                    <span>{currentModeConfig.sensorType}</span>
                    <span className="text-emerald-400">{currentModeConfig.statusText}</span>
                  </div>
                </div>

              </div>

              {/* Dynamic Narrative Summary for Active Mode */}
              <div className="mt-4 pt-4 border-t border-stone-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="max-w-md">
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {currentModeConfig.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleWhatsAppConsultation}
                  className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm transition-all shadow-md shadow-emerald-950/60 active:scale-95 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request Drone Survey</span>
                </button>
              </div>

            </div>

          </div>

          {/* Bottom Trust & Vision Statement */}
          <div className="mt-8 pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Certified Aerial Agronomy &bull; Back to organic nature &bull; Luweero, Uganda</span>
            </div>
            <span className="text-stone-500">
              Dahlak Agribusiness &amp; Vocational Center &bull; AgriTech Division
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
