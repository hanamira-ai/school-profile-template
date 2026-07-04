import React, { useState } from 'react';
import { Cpu, MessageSquare, Music, Compass, Dribbble, Camera, Trophy, Calendar, Sparkles } from 'lucide-react';
import { EXTRACURRICULARS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Cpu: Cpu,
  MessageSquare: MessageSquare,
  Music: Music,
  Compass: Compass,
  Dribbble: Dribbble,
  Camera: Camera
};

export default function Extracurriculars() {
  const [selectedClub, setSelectedClub] = useState(EXTRACURRICULARS[0].id);

  const currentClub = EXTRACURRICULARS.find((club) => club.id === selectedClub) || EXTRACURRICULARS[0];
  const IconComponent = ICON_MAP[currentClub.iconName] || Compass;

  return (
    <section id="ekskul" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="ekskul-header">
          <span className="text-xs font-bold text-sky-600 dark:text-sky-400 tracking-widest uppercase bg-sky-50 dark:bg-sky-950/50 px-3 py-1.5 rounded-full">
            KEGIATAN SISWA
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-4 tracking-tight">
            Pengembangan Bakat & Ekstrakurikuler Unggulan
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-2">
            Di luar jam kelas, murid didorong aktif mengasah kepemimpinan, kepribadian, sosial, dan kegemaran seni-olahraga mereka lewat klub premium kami.
          </p>
          <div className="w-12 h-1 bg-sky-600 dark:bg-sky-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Interactive Layout: Left Menu / Right Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch" id="ekskul-layout-grid">
          
          {/* Column 1: Left Menu Selector */}
          <div className="lg:col-span-4 flex flex-col space-y-2.5" id="ekskul-menu-selector">
            {EXTRACURRICULARS.map((club) => {
              const ClubIcon = ICON_MAP[club.iconName] || Compass;
              return (
                <button
                  key={club.id}
                  id={`club-select-btn-${club.id}`}
                  onClick={() => setSelectedClub(club.id)}
                  className={`w-full p-4.5 rounded-2xl font-bold text-left text-sm sm:text-base transition-all duration-300 flex items-center space-x-4 border cursor-pointer ${
                    selectedClub === club.id
                      ? 'bg-sky-50 dark:bg-sky-950 border-sky-200 dark:border-sky-900 text-sky-700 dark:text-sky-300 shadow-sm shadow-sky-500/5'
                      : 'bg-slate-50 dark:bg-slate-800/20 hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-100 dark:border-slate-800/50 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <div className={`p-2 rounded-xl ${
                    selectedClub === club.id
                      ? 'bg-sky-600 text-white dark:bg-sky-500'
                      : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 shadow-sm border border-slate-100 dark:border-slate-700'
                  }`}>
                    <ClubIcon className="w-4.5 h-4.5" />
                  </div>
                  <span className="truncate">{club.name}</span>
                </button>
              );
            })}
          </div>

          {/* Column 2: Right Detail Showcase Card */}
          <div className="lg:col-span-8 flex" id="ekskul-showcase-panel">
            <div className="w-full bg-slate-50 dark:bg-slate-800/40 rounded-3xl p-6 sm:p-10 border border-slate-100 dark:border-slate-800/80 flex flex-col justify-between overflow-hidden relative">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedClub}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 flex-1 flex flex-col md:flex-row gap-8 items-center md:items-start"
                  id={`club-detail-container-${currentClub.id}`}
                >
                  {/* Club Image Showcase */}
                  <div className="w-full md:w-1/2 aspect-video md:aspect-[4/5] rounded-2xl overflow-hidden shadow-md shrink-0 border border-slate-100 dark:border-slate-800 relative group">
                    <img
                      src={currentClub.image}
                      alt={currentClub.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
                  </div>

                  {/* Club Metadata details */}
                  <div className="space-y-4 flex-1">
                    {/* Club Header */}
                    <div className="flex items-center space-x-2 text-sky-600 dark:text-sky-400 font-bold text-xs sm:text-sm uppercase tracking-wider">
                      <IconComponent className="w-4 h-4 text-sky-500" />
                      <span>Ekskul Unggulan</span>
                    </div>

                    <h3 className="font-display font-extrabold text-2xl text-slate-950 dark:text-white">
                      {currentClub.name}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {currentClub.description}
                    </p>

                    {/* Schedule */}
                    <div className="flex items-center space-x-2.5 p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
                      <Calendar className="w-4.5 h-4.5 text-sky-500 shrink-0" />
                      <div>
                        <span className="font-bold">Jadwal Latihan: </span>
                        <span>{currentClub.schedule} WIB</span>
                      </div>
                    </div>

                    {/* Achievements Bullet List */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-1.5 text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm tracking-wide">
                        <Trophy className="w-4 h-4 text-amber-500" />
                        <span>PRESTASI TERBARU:</span>
                      </div>
                      <ul className="space-y-2">
                        {currentClub.achievements.map((ach, idx) => (
                          <li key={idx} className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed flex items-start space-x-2">
                            <span className="text-amber-500 text-xs font-bold shrink-0 mt-0.5">•</span>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Decorative Accent Ring at Bottom Right */}
              <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
