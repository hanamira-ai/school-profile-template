import React from 'react';
import { Compass, Target, Lightbulb, Shield, Heart, HelpCircle } from 'lucide-react';

const MISI_ITEMS = [
  {
    num: '01',
    title: 'Akademis Bertaraf Dunia',
    description: 'Menyelenggarakan proses pembelajaran integratif yang memadukan keunggulan sains, matematika, teknologi, dan bahasa asing dengan sertifikasi internasional.',
    icon: Lightbulb,
    colorClass: 'text-sky-600 bg-sky-50 dark:text-sky-400 dark:bg-sky-950/40'
  },
  {
    num: '02',
    title: 'Kepemimpinan Berkarakter',
    description: 'Membina kepemimpinan murid (student agency) yang berlandaskan integritas, kerendahan hati, kerja keras, dan akhlak mulia sesuai identitas bangsa.',
    icon: Shield,
    colorClass: 'text-amber-600 bg-amber-50 dark:text-amber-400 dark:bg-amber-950/40'
  },
  {
    num: '03',
    title: 'Budaya Riset & Inovasi',
    description: 'Menumbuhkan tradisi penelitian ilmiah sejak dini, kreativitas tanpa batas, serta kebebasan akademik yang bertanggung jawab untuk memecahkan masalah kemanusiaan.',
    icon: Compass,
    colorClass: 'text-indigo-600 bg-indigo-50 dark:text-indigo-400 dark:bg-indigo-950/40'
  },
  {
    num: '04',
    title: 'Kepekaan Sosial & Lingkungan',
    description: 'Menanamkan rasa kepedulian sosial yang mendalam terhadap sesama serta aksi nyata menjaga kelestarian ekologi alam demi pembangunan berkelanjutan.',
    icon: Heart,
    colorClass: 'text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950/40'
  }
];

export default function VisionMission() {
  return (
    <section id="visi-misi" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative Blur Backdrops */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-sky-500/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 -translate-y-1/2 w-80 h-80 bg-teal-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Visi Section */}
        <div className="max-w-4xl mx-auto text-center mb-20" id="vision-box">
          <span className="text-xs font-bold text-sky-600 dark:text-sky-400 tracking-widest uppercase bg-sky-50 dark:bg-sky-950/50 px-3 py-1.5 rounded-full">
            VISI & MISI
          </span>
          
          <div className="flex items-center justify-center space-x-2 text-sky-600 dark:text-sky-400 font-semibold text-sm mt-6 mb-2">
            <Target className="w-5 h-5" />
            <span className="uppercase tracking-widest">VISI UTAMA</span>
          </div>
          
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 dark:text-white leading-relaxed px-2">
            "Menjadi episentrum pendidikan menengah berstandar global yang menghasilkan pemimpin berintegritas tinggi, unggul dalam iptek, berpijak pada nilai kebangsaan, dan peduli kelestarian lingkungan."
          </h2>
          <div className="w-16 h-1 bg-sky-600 dark:bg-sky-500 mx-auto mt-8 rounded-full" />
        </div>

        {/* Misi Header */}
        <div className="text-center mb-12" id="mission-header">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-800 dark:text-slate-100 uppercase tracking-widest flex items-center justify-center space-x-2">
            <span>MISI STRATEGIS SEKOLAH</span>
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">Langkah nyata kami untuk mencapai standar keunggulan global</p>
        </div>

        {/* Misi Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="mission-grid">
          {MISI_ITEMS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                id={`mission-card-${index}`}
                className="group p-8 bg-slate-50 dark:bg-slate-800/40 rounded-3xl hover:bg-white dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-800/80 hover:border-sky-500/20 dark:hover:border-sky-400/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6"
              >
                {/* Number Watermark */}
                <div className="absolute right-4 bottom-2 text-6xl sm:text-7xl font-display font-black text-slate-200/50 dark:text-slate-700/25 select-none pointer-events-none group-hover:scale-110 transition-transform duration-300">
                  {item.num}
                </div>

                {/* Icon Container */}
                <div className={`p-4 rounded-2xl shrink-0 ${item.colorClass} group-hover:scale-105 transition-transform duration-300 shadow-sm`}>
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Details */}
                <div className="space-y-2 relative z-10">
                  <h4 className="font-display font-bold text-lg sm:text-xl text-slate-800 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed pr-2">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
