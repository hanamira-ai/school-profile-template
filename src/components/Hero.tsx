import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowDown, Award, Users, BookOpen, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SCHOOL_INFO } from '../data';

// Realistic educational photos
const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop',
    title: 'Mendidik Pemimpin Masa Depan',
    subtitle: 'Berkarakter Global & Berakar Budaya Nusantara'
  },
  {
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600&auto=format&fit=crop',
    title: 'Akademis Unggul & Inovatif',
    subtitle: 'Integrasi Kurikulum Merdeka Nasional & Internasional Cambridge'
  },
  {
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop',
    title: 'Ekosistem Belajar Inspiratif',
    subtitle: 'Didukung Fasilitas Smart-Classroom & Laboratorium STEM Terlengkap'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Slideshow with Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.85)), url(${HERO_SLIDES[currentSlide].image})`,
            }}
          />
        </AnimatePresence>
      </div>

      {/* Decorative Light Gradients */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full filter blur-[120px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-12 pb-16 flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
        {/* PPDB Alert Announcement */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center space-x-2 bg-sky-500/25 border border-sky-400/30 backdrop-blur-md px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide text-sky-200 mb-8 cursor-pointer hover:bg-sky-500/30 transition-colors"
          onClick={() => handleScrollTo('ppdb')}
          id="hero-ppdb-announcement"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
          </span>
          <span>PPDB Tahun Ajaran 2026/2027 Gelombang 1 Resmi Dibuka!</span>
          <ChevronRight className="w-4 h-4 ml-1" />
        </motion.div>

        {/* Dynamic Titles */}
        <div className="max-w-4xl min-h-[160px] sm:min-h-[220px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
              id={`hero-slide-content-${currentSlide}`}
            >
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-sky-100">
                {HERO_SLIDES[currentSlide].title}
              </h1>
              <p className="text-slate-300 font-sans text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
                {HERO_SLIDES[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mt-12 w-full sm:w-auto"
          id="hero-ctas"
        >
          <button
            id="hero-btn-primary"
            onClick={() => handleScrollTo('ppdb')}
            className="px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-xl text-base shadow-lg shadow-sky-600/30 hover:shadow-sky-500/40 transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            Daftar Sekarang (PPDB Online)
          </button>
          <button
            id="hero-btn-secondary"
            onClick={() => handleScrollTo('tentang')}
            className="px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 text-white font-semibold rounded-xl text-base transition-all hover:-translate-y-0.5 backdrop-blur-sm cursor-pointer"
          >
            Jelajahi Profil Sekolah
          </button>
        </motion.div>

        {/* Statistics Board */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 w-full max-w-5xl bg-white/5 dark:bg-slate-900/40 border border-white/10 dark:border-slate-800/60 p-6 sm:p-8 rounded-3xl backdrop-blur-md"
          id="hero-stats-board"
        >
          {SCHOOL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="text-center" id={`hero-stat-${idx}`}>
              <div className="font-display font-extrabold text-2xl sm:text-4xl text-sky-400 tracking-tight">
                {stat.value}
              </div>
              <div className="text-slate-300 text-xs sm:text-sm font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Floating Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          onClick={() => handleScrollTo('tentang')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
          id="hero-scroll-indicator"
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </div>
    </section>
  );
}
