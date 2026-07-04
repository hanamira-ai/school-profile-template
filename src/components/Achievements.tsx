import React, { useState } from 'react';
import { Trophy, Award, Star, Compass, Filter, Sparkles, CheckCircle } from 'lucide-react';
import { ACHIEVEMENTS } from '../data';

export default function Achievements() {
  const [activeFilter, setActiveFilter] = useState<'Semua' | 'Internasional' | 'Nasional' | 'Provinsi'>('Semua');

  const filteredAchievements = ACHIEVEMENTS.filter((ach) => {
    if (activeFilter === 'Semua') return true;
    return ach.category === activeFilter;
  });

  return (
    <section id="prestasi" className="py-24 bg-slate-50 dark:bg-slate-900/30 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="achievements-header">
          <span className="text-xs font-bold text-sky-600 dark:text-sky-400 tracking-widest uppercase bg-sky-50 dark:bg-sky-950/50 px-3 py-1.5 rounded-full">
            PRESTASI GEMILANG
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-4 tracking-tight">
            Tradisi Juara di Kancah Nasional & Internasional
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-2">
            Kami berkomitmen membina kompetensi siswa hingga tingkat optimal, terbukti dengan torehan prestasi bergengsi setiap tahunnya.
          </p>
          <div className="w-12 h-1 bg-sky-600 dark:bg-sky-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="achievements-filter-toolbar">
          {(['Semua', 'Internasional', 'Nasional', 'Provinsi'] as const).map((lvl) => (
            <button
              key={lvl}
              id={`filter-ach-${lvl.toLowerCase()}`}
              onClick={() => setActiveFilter(lvl)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center space-x-1.5 ${
                activeFilter === lvl
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/15 font-bold'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-100 dark:border-slate-800'
              }`}
            >
              {lvl === 'Semua' ? (
                <>
                  <Trophy className="w-4 h-4" />
                  <span>Semua Prestasi</span>
                </>
              ) : (
                <span>Tingkat {lvl}</span>
              )}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="achievements-grid">
          {filteredAchievements.map((ach) => (
            <div
              key={ach.id}
              id={`achievement-card-${ach.id}`}
              className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row"
            >
              {/* Achievement Photo (Left Column) */}
              <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto relative shrink-0 overflow-hidden min-h-[160px]">
                <img
                  src={ach.image}
                  alt={ach.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 to-transparent" />
                
                {/* Level Tag Overlay */}
                <span className={`absolute top-4 left-4 px-3 py-1 text-[10px] font-extrabold uppercase rounded-full shadow-sm ${
                  ach.category === 'Internasional' ? 'bg-indigo-600 text-white' :
                  ach.category === 'Nasional' ? 'bg-amber-500 text-slate-950' :
                  'bg-sky-600 text-white'
                }`}>
                  {ach.category}
                </span>

                {/* Year tag overlay */}
                <span className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 font-bold text-xs px-2.5 py-1 rounded-lg">
                  Tahun {ach.year}
                </span>
              </div>

              {/* Achievement Content (Right Column) */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-1 text-amber-500 text-xs font-semibold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>Prestasi {ach.category}</span>
                  </div>
                  
                  <h3 className="font-display font-bold text-lg sm:text-xl text-slate-800 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors leading-snug">
                    {ach.title}
                  </h3>

                  <p className="text-slate-400 dark:text-slate-400 text-xs font-semibold">
                    Juara: {ach.winner}
                  </p>
                  
                  <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed pt-1 line-clamp-3">
                    {ach.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-50 dark:border-slate-700/50 mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-medium">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Diverifikasi Sekolah</span>
                  </div>
                  <span className="p-1.5 bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 rounded-lg group-hover:scale-105 transition-transform">
                    <Trophy className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
