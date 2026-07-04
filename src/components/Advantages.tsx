import React from 'react';
import { BookOpen, Sparkles, Users, Globe, Trophy } from 'lucide-react';
import { ADVANTAGES } from '../data';

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  BookOpen: BookOpen,
  Sparkles: Sparkles,
  Users: Users,
  Globe: Globe
};

export default function Advantages() {
  return (
    <section id="keunggulan" className="py-24 bg-slate-50 dark:bg-slate-900/30 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="advantages-header">
          <span className="text-xs font-bold text-sky-600 dark:text-sky-400 tracking-widest uppercase bg-sky-50 dark:bg-sky-950/50 px-3 py-1.5 rounded-full">
            KEUNGGULAN UTAMA
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-4 tracking-tight">
            Mengapa Memilih SMA Lentera Nusantara?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-2">
            Kami menawarkan standar pendidikan luar biasa yang menggabungkan aspek spiritual, intelektual, dan sosial secara proporsional.
          </p>
          <div className="w-12 h-1 bg-sky-600 dark:bg-sky-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="advantages-grid">
          {ADVANTAGES.map((adv, idx) => {
            const IconComponent = ICON_MAP[adv.icon] || Trophy;
            return (
              <div
                key={idx}
                id={`advantage-card-${idx}`}
                className="group p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Container with interactive colored background based on index */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform duration-300 group-hover:scale-110 ${
                    idx === 0 ? 'bg-sky-50 text-sky-600 dark:bg-sky-950 dark:text-sky-400' :
                    idx === 1 ? 'bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400' :
                    idx === 2 ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400' :
                    'bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400'
                  }`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-slate-800 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {adv.title}
                  </h3>
                  
                  <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                    {adv.description}
                  </p>
                </div>

                {/* Bottom Accent bar */}
                <div className={`h-1 w-8 rounded-full mt-8 transition-all duration-300 group-hover:w-full ${
                  idx === 0 ? 'bg-sky-500' :
                  idx === 1 ? 'bg-amber-500' :
                  idx === 2 ? 'bg-emerald-500' :
                  'bg-indigo-500'
                }`} />
              </div>
            );
          })}
        </div>

        {/* Dynamic Highlight Card at bottom */}
        <div 
          className="mt-16 bg-gradient-to-r from-sky-600 to-sky-800 dark:from-sky-800 dark:to-slate-900 rounded-3xl p-8 sm:p-10 shadow-lg text-white flex flex-col md:flex-row items-center justify-between gap-6"
          id="advantages-interactive-banner"
        >
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-display font-bold text-xl sm:text-2xl">
              Siap Menjadi Bagian dari Generasi Berprestasi?
            </h3>
            <p className="text-sky-100 text-xs sm:text-sm max-w-xl">
              Pendaftaran Peserta Didik Baru (PPDB) Gelombang 1 menawarkan potongan biaya pengembangan khusus bagi pendaftar awal dan peraih prestasi tingkat kota.
            </p>
          </div>
          <button
            onClick={() => {
              const element = document.getElementById('ppdb');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-6 py-3.5 bg-white text-sky-600 font-bold rounded-xl text-sm hover:bg-sky-50 transition-colors shadow-md cursor-pointer shrink-0"
            id="adv-banner-cta"
          >
            Pelajari Biaya & PPDB Online
          </button>
        </div>

      </div>
    </section>
  );
}
