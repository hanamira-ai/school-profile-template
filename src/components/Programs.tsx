import React, { useState } from 'react';
import { BookOpen, Award, CheckCircle, ChevronRight, Briefcase } from 'lucide-react';
import { ACADEMIC_PROGRAMS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function Programs() {
  const [activeTab, setActiveTab] = useState('mipa');

  const selectedProgram = ACADEMIC_PROGRAMS.find((p) => p.id === activeTab) || ACADEMIC_PROGRAMS[0];

  return (
    <section id="akademik" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="programs-header">
          <span className="text-xs font-bold text-sky-600 dark:text-sky-400 tracking-widest uppercase bg-sky-50 dark:bg-sky-950/50 px-3 py-1.5 rounded-full">
            PROGRAM AKADEMIK
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-4 tracking-tight">
            Penjurusan Kompetensi & Peminatan Siswa
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-2">
            Kami menyediakan program peminatan terarah yang didesain secara adaptif dengan bimbingan karier berkelanjutan menuju jenjang universitas terbaik.
          </p>
          <div className="w-12 h-1 bg-sky-600 dark:bg-sky-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-12" id="programs-tab-controls">
          <div className="inline-flex p-1.5 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
            {ACADEMIC_PROGRAMS.map((prog) => (
              <button
                key={prog.id}
                id={`tab-program-${prog.id}`}
                onClick={() => setActiveTab(prog.id)}
                className={`px-5 py-3 sm:px-8 sm:py-3.5 rounded-xl font-display font-bold text-sm sm:text-base transition-all duration-300 cursor-pointer ${
                  activeTab === prog.id
                    ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-300 shadow-md'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                {prog.code}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Program Showcase Panel */}
        <div className="bg-slate-50 dark:bg-slate-800/40 rounded-3xl p-6 sm:p-10 border border-slate-100 dark:border-slate-800/80" id="program-showcase-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
              id={`program-content-container-${selectedProgram.id}`}
            >
              {/* Left Column: Info Description */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-bold uppercase mb-3">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Program {selectedProgram.code}</span>
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white leading-tight">
                    {selectedProgram.name}
                  </h3>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {selectedProgram.description}
                </p>

                {/* Curriculum Detail Card */}
                <div className="p-4 bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-800/50 flex items-start space-x-3 shadow-sm">
                  <div className="p-2 bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-xl mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-sm">Sertifikasi & Kurikulum Pendamping</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{selectedProgram.curriculum}</p>
                  </div>
                </div>

                {/* Two Column details: Focus Subjects & Career Paths */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  {/* Focus Subjects */}
                  <div className="space-y-3">
                    <h4 className="font-display font-bold text-slate-800 dark:text-slate-200 text-sm tracking-wider uppercase flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 bg-sky-500 rounded-full" />
                      <span>Fokus Mata Pelajaran</span>
                    </h4>
                    <ul className="space-y-2">
                      {selectedProgram.focusSubjects.map((sub, i) => (
                        <li key={i} className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                          <CheckCircle className="w-4 h-4 text-sky-500 shrink-0" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Career Paths */}
                  <div className="space-y-3">
                    <h4 className="font-display font-bold text-slate-800 dark:text-slate-200 text-sm tracking-wider uppercase flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      <span>Prospek Karir & Studi</span>
                    </h4>
                    <ul className="space-y-2">
                      {selectedProgram.careerPaths.map((path, i) => (
                        <li key={i} className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                          <Briefcase className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{path}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Image with rounded-3xl */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[4/5] shadow-lg border border-slate-100 dark:border-slate-800">
                  <img
                    src={selectedProgram.image}
                    alt={selectedProgram.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Decorative Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-950/20 to-transparent" />
                  
                  {/* Floating Class Quote Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm p-4 rounded-2xl shadow-md border border-white/20">
                    <p className="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Metode Pengajaran</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-0.5">80% Teori & Riset Laboratorium, 20% Kunjungan Industri / Magang Sosial.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
