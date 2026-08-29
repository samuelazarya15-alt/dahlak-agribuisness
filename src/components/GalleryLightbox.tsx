import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Camera } from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(prevIndex);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(nextIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % items.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items.length, onClose, onNavigate]);

  return (
    <div
      id="gallery-lightbox-overlay"
      className="fixed inset-0 z-50 bg-[#0a0f1d]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between text-white z-20 pb-2 border-b border-stone-800">
        <div className="flex items-center gap-2">
          <div className="bg-stone-900 border border-stone-700 text-emerald-300 text-xs px-3 py-1 rounded font-mono">
            📷 {currentItem.image.tag}
          </div>
          <span className="text-xs text-stone-400 font-mono hidden sm:inline">
            [{currentIndex + 1} / {items.length}]
          </span>
        </div>

        <button
          id="close-lightbox-btn"
          type="button"
          onClick={onClose}
          className="p-2 rounded-full bg-stone-900 hover:bg-stone-800 text-white border border-stone-700 transition-colors"
          aria-label="Close image viewer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative flex-1 flex items-center justify-center my-auto max-h-[75vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prev Button */}
        <button
          id="lightbox-prev-btn"
          type="button"
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-stone-900/90 hover:bg-emerald-800 text-white border border-stone-700 transition-colors shadow-lg"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Image Display */}
        <div className="relative max-h-[70vh] max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl border border-stone-800 bg-black flex items-center justify-center">
          <img
            src={currentItem.image.url}
            alt={currentItem.image.alt}
            className="max-h-[70vh] w-auto object-contain transition-transform duration-300"
          />
        </div>

        {/* Next Button */}
        <button
          id="lightbox-next-btn"
          type="button"
          onClick={handleNext}
          className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-stone-900/90 hover:bg-emerald-800 text-white border border-stone-700 transition-colors shadow-lg"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Info Card */}
      <div
        className="max-w-3xl mx-auto w-full bg-stone-900/95 border border-stone-800 p-4 rounded-lg text-white text-left z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
          <h3 className="text-lg font-normal font-editorial-serif text-emerald-300">
            {currentItem.title}
          </h3>
          <span className="text-xs px-2.5 py-0.5 bg-stone-950 text-stone-300 rounded border border-stone-700 font-mono">
            {currentItem.categoryLabel}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-stone-300 mb-2 font-serif italic">
          {currentItem.description}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs text-stone-400 pt-2 border-t border-stone-800 font-mono">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>{currentItem.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span>{currentItem.date}</span>
          </div>
          <div className="flex items-center gap-1.5 ml-auto text-[11px] text-stone-500">
            <Camera className="w-3.5 h-3.5 text-stone-500" />
            <span>Slot: {currentItem.image.tag.split('-')[0].trim()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
