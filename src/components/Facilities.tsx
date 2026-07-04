import React, { useState } from 'react';
import { LayoutGrid, ZoomIn, X, Compass, Check } from 'lucide-react';
import { FACILITIES } from '../data';
import { FacilityItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';

export default function Facilities() {
  const [selectedCategory, setSelectedCategory] = useState<'Semua' | 'Akademik' | 'Olahraga' | 'Lainnya'>('Semua');
  const [lightboxItem, setLightboxItem] = useState<FacilityItem | null>(null);

  // Group or map categories
  const filteredFacilities = FACILITIES.filter((fac) => {
    if (selectedCategory === 'Semua') return true;
    if (selectedCategory === 'Akademik') return fac.category === 'Akademik';
    if (selectedCategory === 'Olahraga') return fac.category === 'Olahraga';
    // 'Lainnya' maps 'Penunjang' or 'Sosial'
    return fac.category === 'Penunjang' || fac.category === 'Sosial';
  });

  return (
    <section id="fasilitas" className="py-24 bg-slate-50 dark:bg-slate-900/30 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="facilities-header">
          <span className="text-xs font-bold text-sky-600 dark:text-sky-400 tracking-widest uppercase bg-sky-50 dark:bg-sky-950/50 px-3 py-1.5 rounded-full">
            SARANA & PRASARANA
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-4 tracking-tight">
            Fasilitas Belajar & Olahraga Standar Dunia
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-2">
            Kami meyakini lingkungan fisik yang asri, estetik, dan berteknologi tinggi merangsang semangat belajar serta produktivitas kreativitas murid.
          </p>
          <div className="w-12 h-1 bg-sky-600 dark:bg-sky-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="facilities-filter-controls">
          {(['Semua', 'Akademik', 'Olahraga', 'Lainnya'] as const).map((cat) => (
            <button
              key={cat}
              id={`filter-fac-${cat.toLowerCase()}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/15'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-100 dark:border-slate-800'
              }`}
            >
              {cat === 'Lainnya' ? 'Seni & Penunjang' : cat === 'Semua' ? 'Semua Fasilitas' : cat}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="facilities-grid">
          <AnimatePresence mode="popLayout">
            {filteredFacilities.map((fac) => (
              <motion.div
                key={fac.id}
                id={`facility-card-${fac.id}`}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
                className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-800/80 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={fac.image}
                    alt={fac.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Category Pill Overlaid */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-slate-900/95 backdrop-blur-sm text-xs font-bold text-sky-600 dark:text-sky-400 rounded-full shadow-sm">
                    {fac.category}
                  </span>

                  {/* Zoom Hover Overlay */}
                  <div 
                    onClick={() => setLightboxItem(fac)}
                    className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                    id={`zoom-overlay-${fac.id}`}
                  >
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:scale-110 transition-transform">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-6 space-y-2">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-slate-800 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {fac.name}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {fac.description}
                  </p>
                  
                  <button
                    onClick={() => setLightboxItem(fac)}
                    className="text-xs font-semibold text-sky-600 dark:text-sky-400 inline-flex items-center space-x-1 hover:underline pt-2 cursor-pointer"
                  >
                    <span>Detail Sarana</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox / Modal Panel */}
        <AnimatePresence>
          {lightboxItem && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
              id="facility-lightbox"
            >
              {/* Outer click closure zone */}
              <div className="absolute inset-0" onClick={() => setLightboxItem(null)} />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative z-10 border border-slate-100 dark:border-slate-800"
              >
                {/* Close Button */}
                <button
                  id="lightbox-close-btn"
                  onClick={() => setLightboxItem(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/50 hover:bg-slate-900/80 text-white transition-colors cursor-pointer z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Lightbox Image */}
                <div className="relative h-64 sm:h-80 w-full">
                  <img
                    src={lightboxItem.image}
                    alt={lightboxItem.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 px-3 py-1 bg-sky-600 text-white text-xs font-bold rounded-full">
                    Kategori: {lightboxItem.category}
                  </span>
                </div>

                {/* Lightbox Content Info */}
                <div className="p-8 space-y-4">
                  <h3 className="font-display font-bold text-2xl text-slate-950 dark:text-white">
                    {lightboxItem.name}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {lightboxItem.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Pemeliharaan Rutin Mingguan</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Sistem AC & Penjernih Udara</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Pengawasan CCTV 24 Jam</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Akses Wi-Fi High Speed</span>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      id="lightbox-close-footer-btn"
                      onClick={() => setLightboxItem(null)}
                      className="px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs hover:bg-slate-200 cursor-pointer"
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
