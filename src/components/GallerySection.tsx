import React, { useState } from 'react';
import { Camera, Eye, MapPin, Layers, Info } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/agrobusinessData';
import { GalleryLightbox } from './GalleryLightbox';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: `All Facilities & Operations (${GALLERY_ITEMS.length})` },
    { id: 'crops', label: 'Crops & Harvest' },
    { id: 'technology', label: 'Agri-Tech & Solar' },
    { id: 'processing', label: 'Agro-Processing' },
    { id: 'horticulture', label: 'Horticulture & Greenhouses' },
    { id: 'community', label: 'Community & Outgrowers' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleOpenLightbox = (itemIndexInFiltered: number) => {
    const targetItem = filteredItems[itemIndexInFiltered];
    const fullIndex = GALLERY_ITEMS.findIndex((it) => it.id === targetItem.id);
    setLightboxIndex(fullIndex >= 0 ? fullIndex : 0);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#fafaf9] border-b border-stone-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-stone-100 border border-stone-200 text-emerald-800 text-[11px] font-bold uppercase tracking-[0.2em] mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Archive & Field Operations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-editorial-serif text-slate-900 tracking-tight leading-tight">
            Dahlak Agricultural Portfolio & Facilities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Photographic documentation of our vocational training cohorts, value addition labs, commercial bakeries, hydroponic greenhouses, and community farmers in Uganda.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`filter-gallery-${cat.id}`}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded text-xs uppercase tracking-wider font-semibold transition-all duration-150 ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid - 14 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            return (
              <div
                key={item.id}
                id={`gallery-card-${item.id}`}
                onClick={() => handleOpenLightbox(index)}
                className="group relative rounded-xl overflow-hidden bg-slate-950 border border-stone-300/80 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.image.url}
                    alt={item.image.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                  {/* Hover Quick View Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-11 h-11 rounded-full bg-emerald-800 text-white flex items-center justify-center shadow-xl transform group-hover:scale-100 scale-75 transition-transform duration-200 border border-emerald-500/50">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Card Caption */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-white pointer-events-auto">
                  <div className="flex items-center justify-between text-xs mb-1 font-mono">
                    <div className="flex items-center gap-1 text-emerald-400">
                      <MapPin className="w-3 h-3 shrink-0" />
                      <span className="truncate max-w-[170px]">{item.location}</span>
                    </div>
                    <span className="text-[10px] text-stone-400 font-mono hidden sm:inline">
                      {item.image.dimensions}
                    </span>
                  </div>
                  <h3 className="text-base font-normal font-editorial-serif text-white group-hover:text-emerald-300 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-300 mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Summary Footer Strip */}
        <div className="mt-12 pt-6 border-t border-stone-300/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-800" />
            <span>Showing <strong className="text-slate-900">{filteredItems.length}</strong> of <strong className="text-slate-900">{GALLERY_ITEMS.length}</strong> photographic facilities</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500 font-mono text-[11px]">
            <Info className="w-3.5 h-3.5 text-emerald-700" />
            <span>Click any photo to open full-screen lightbox viewer</span>
          </div>
        </div>

      </div>

      {/* Lightbox Viewer Component */}
      <GalleryLightbox
        items={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
};
