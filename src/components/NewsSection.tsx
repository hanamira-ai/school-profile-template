import React, { useState } from 'react';
import { Search, Calendar, User, Eye, X, ChevronRight, HelpCircle, ArrowRight, Newspaper } from 'lucide-react';
import { NEWS } from '../data';
import { NewsItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';

export default function NewsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'Semua' | 'Akademik' | 'Kegiatan' | 'Prestasi' | 'Pengumuman'>('Semua');
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);

  // Filter logic
  const filteredNews = NEWS.filter((item) => {
    const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="berita" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="news-header">
          <span className="text-xs font-bold text-sky-600 dark:text-sky-400 tracking-widest uppercase bg-sky-50 dark:bg-sky-950/50 px-3 py-1.5 rounded-full">
            BERITA & PENGUMUMAN
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-4 tracking-tight">
            Kabar Terbaru & Informasi Terkini
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-2">
            Ikuti berbagai aktivitas harian, capaian prestasi terbaru, serta pengumuman penting seputar administrasi SMA Lentera Nusantara.
          </p>
          <div className="w-12 h-1 bg-sky-600 dark:bg-sky-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Toolbar: Search and Category Filter */}
        <div 
          className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12 p-5 bg-slate-50 dark:bg-slate-800/40 rounded-3xl border border-slate-100 dark:border-slate-800/60"
          id="news-toolbar"
        >
          {/* Categories */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto" id="news-categories-container">
            {(['Semua', 'Pengumuman', 'Prestasi', 'Kegiatan'] as const).map((cat) => (
              <button
                key={cat}
                id={`filter-news-${cat.toLowerCase()}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-100 dark:border-slate-800/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80" id="news-search-box">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 pointer-events-none">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              id="news-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari berita atau pengumuman..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Empty Search Result Fallback */}
        {filteredNews.length === 0 && (
          <div className="text-center py-16 bg-slate-50 dark:bg-slate-800/20 rounded-3xl" id="news-empty-fallback">
            <Newspaper className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
            <p className="text-slate-500 dark:text-slate-400 text-base font-semibold">Tidak ada berita yang cocok dengan pencarian Anda.</p>
            <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">Coba kata kunci lain atau pilih kategori Semua.</p>
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="news-grid">
          {filteredNews.map((item) => (
            <article
              key={item.id}
              id={`news-card-${item.id}`}
              className="group bg-slate-50 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800/80 hover:border-sky-500/10 dark:hover:border-sky-400/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Cover Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Category tag */}
                <span className={`absolute top-4 left-4 px-2.5 py-1 text-[9px] font-extrabold uppercase rounded-full tracking-wider shadow-sm ${
                  item.category === 'Pengumuman' ? 'bg-rose-50 text-rose-600 dark:bg-rose-950/50 dark:text-rose-400' :
                  item.category === 'Prestasi' ? 'bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400' :
                  'bg-sky-50 text-sky-600 dark:bg-sky-950/50 dark:text-sky-400'
                }`}>
                  {item.category}
                </span>
              </div>

              {/* Text Description */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  {/* Meta info */}
                  <div className="flex items-center space-x-3 text-[11px] text-slate-400 dark:text-slate-400 font-semibold">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Eye className="w-3.5 h-3.5" />
                      <span>{item.views}</span>
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white line-clamp-2 leading-snug group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                {/* Read more button trigger */}
                <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-400 dark:text-slate-400">
                    Oleh: {item.author}
                  </span>
                  <button
                    onClick={() => {
                      setActiveArticle(item);
                      // Simulate an increment in views count locally
                      item.views += 1;
                    }}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors cursor-pointer group/btn"
                  >
                    <span>Baca</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* News Lightbox Full Modal details */}
        <AnimatePresence>
          {activeArticle && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
              id="news-full-lightbox"
            >
              <div className="absolute inset-0" onClick={() => setActiveArticle(null)} />
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative z-10 border border-slate-100 dark:border-slate-800 max-h-[85vh] flex flex-col"
              >
                {/* Header photo zone */}
                <div className="relative h-56 sm:h-72 w-full shrink-0">
                  <img
                    src={activeArticle.image}
                    alt={activeArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Close button inside photo block */}
                  <button
                    id="news-lightbox-close-btn"
                    onClick={() => setActiveArticle(null)}
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/60 hover:bg-slate-950/80 text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <span className="absolute bottom-4 left-4 px-3 py-1 bg-sky-600 text-white text-xs font-extrabold uppercase rounded-full shadow-md">
                    Kategori: {activeArticle.category}
                  </span>
                </div>

                {/* Article Content details (Scrollable) */}
                <div className="p-8 overflow-y-auto space-y-6" id="news-lightbox-scrollable-content">
                  
                  {/* Meta tag rows */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-semibold border-b border-slate-100 dark:border-slate-800 pb-4">
                    <span className="flex items-center space-x-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>Dipublikasikan: {activeArticle.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1.5">
                      <User className="w-4 h-4" />
                      <span>Penulis: {activeArticle.author}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1.5">
                      <Eye className="w-4 h-4" />
                      <span>Dilihat {activeArticle.views} Kali</span>
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-950 dark:text-white leading-snug">
                    {activeArticle.title}
                  </h3>

                  {/* Body Text */}
                  <div className="text-slate-600 dark:text-slate-300 text-sm sm:text-base space-y-4 leading-relaxed">
                    <p className="font-bold border-l-4 border-sky-600 pl-3 py-1 text-slate-800 dark:text-slate-200 italic">
                      "{activeArticle.summary}"
                    </p>
                    
                    {/* Simulated paragraph breakdown */}
                    <p>{activeArticle.content}</p>
                    
                    <p>SMA Lentera Nusantara terus menumbuhkan iklim belajar dan prestasi secara kolaboratif guna melahirkan lulusan beretika tinggi, disiplin, berintegritas tinggi, unggul dalam iptek, berpijak pada nilai kebangsaan, dan peduli kelestarian lingkungan.</p>
                  </div>

                  {/* Footer control inside light box */}
                  <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <span className="text-xs text-slate-400">© 2026 {activeArticle.author}</span>
                    <button
                      id="news-lightbox-footer-close"
                      onClick={() => setActiveArticle(null)}
                      className="px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs hover:bg-slate-200 cursor-pointer"
                    >
                      Tutup Berita
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
