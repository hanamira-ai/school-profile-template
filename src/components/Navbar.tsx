import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, GraduationCap, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SCHOOL_INFO } from '../data';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  activeSection: string;
}

const NAV_ITEMS = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'tentang', label: 'Tentang' },
  { id: 'keunggulan', label: 'Keunggulan' },
  { id: 'akademik', label: 'Akademik' },
  { id: 'fasilitas', label: 'Fasilitas' },
  { id: 'ekskul', label: 'Kegiatan Siswa' },
  { id: 'prestasi', label: 'Prestasi' },
  { id: 'berita', label: 'Berita' },
  { id: 'ppdb', label: 'PPDB (Pendaftaran)' },
  { id: 'kontak', label: 'Kontak' }
];

export default function Navbar({ darkMode, setDarkMode, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
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
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'pt-2 sm:pt-3 px-3 sm:px-6' : 'pt-4 sm:pt-5 px-4 sm:px-8'
      }`}
    >
      <div
        className={`mx-auto max-w-7xl transition-all duration-500 relative ${
          isScrolled
            ? 'rounded-2xl sm:rounded-full bg-white/75 dark:bg-slate-900/75 border border-white/40 dark:border-slate-800/60 shadow-[0_12px_40px_-12px_rgba(14,165,233,0.12)] dark:shadow-[0_16px_48px_-10px_rgba(0,0,0,0.5)] backdrop-blur-xl px-4 sm:px-8 py-1.5'
            : 'rounded-2xl sm:rounded-3xl bg-white/50 dark:bg-slate-950/40 border border-white/20 dark:border-slate-800/30 shadow-[0_4px_30px_rgba(0,0,0,0.02)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-lg px-4 sm:px-6 py-2.5'
        }`}
      >
        {/* Subtle top light gloss effect for liquid-glass feel */}
        <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

        <div className="flex items-center justify-between h-14 sm:h-16 relative z-10">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('beranda')}
            className="flex items-center space-x-2.5 cursor-pointer group"
            id="nav-logo-container"
          >
            <div className="p-2 bg-gradient-to-tr from-sky-600 to-indigo-600 dark:from-sky-500 dark:to-indigo-500 rounded-xl text-white shadow-md shadow-sky-500/20 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
              <GraduationCap className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
            </div>
            <div>
              <span className="font-display font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white block leading-none">
                SMA LENTERA
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-sky-600 dark:text-sky-400 block tracking-widest uppercase mt-0.5">
                NUSANTARA
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1" id="desktop-nav">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                id={`nav-btn-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-2.5 xl:px-3 py-1.5 text-[13px] xl:text-[14px] font-semibold rounded-full transition-all duration-300 cursor-pointer overflow-hidden group ${
                  activeSection === item.id
                    ? 'text-sky-600 dark:text-sky-400 bg-sky-500/10 dark:bg-sky-400/10 border border-sky-500/15 dark:border-sky-400/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]'
                    : 'text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 border border-transparent hover:border-white/20 dark:hover:border-slate-800/40 hover:bg-white/40 dark:hover:bg-slate-800/20'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {activeSection !== item.id && (
                  <span className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Action Area (Dark Mode Toggle & PPDB Button) */}
          <div className="hidden lg:flex items-center space-x-3" id="nav-action-area">
            {/* Dark Mode Toggle */}
            <button
              id="dark-mode-toggle-desktop"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-white/40 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/40 shadow-sm backdrop-blur-md text-slate-600 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-700/60 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-sky-500" />}
            </button>

            {/* Quick PPDB CTA */}
            <button
              id="cta-ppdb-desktop"
              onClick={() => scrollToSection('ppdb')}
              className="inline-flex items-center space-x-1.5 px-4.5 py-2 rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold text-xs xl:text-sm shadow-md shadow-sky-500/20 hover:shadow-sky-500/35 hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer border border-white/20 dark:border-white/10"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>PPDB Online</span>
            </button>
          </div>

          {/* Mobile Right Controls (Toggle Mode + Burger) */}
          <div className="flex items-center space-x-2 lg:hidden" id="mobile-nav-controls">
            {/* Dark Mode Toggle */}
            <button
              id="dark-mode-toggle-mobile"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-white/40 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/40 shadow-sm backdrop-blur-md text-slate-600 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-700/60 transition-all duration-200 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-sky-500" />}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-burger"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-white/40 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/40 shadow-sm backdrop-blur-md text-slate-600 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-700/60 transition-all duration-200 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Framer Motion) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="lg:hidden mt-2 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border border-white/30 dark:border-slate-800/50 rounded-2xl shadow-xl overflow-hidden mx-auto max-w-7xl relative"
          >
            <div className="px-3 py-3 space-y-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-btn-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-150 cursor-pointer flex items-center justify-between ${
                    activeSection === item.id
                      ? 'text-sky-600 dark:text-sky-400 bg-sky-500/10 dark:bg-sky-400/15 border border-sky-500/10 dark:border-sky-400/10'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 dark:bg-sky-400 animate-pulse" />
                  )}
                </button>
              ))}
              <div className="pt-3 border-t border-slate-200/50 dark:border-slate-800/50 mt-2">
                <button
                  id="mobile-cta-ppdb"
                  onClick={() => scrollToSection('ppdb')}
                  className="w-full text-center py-3 px-4 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-bold text-xs transition-all shadow-md cursor-pointer flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Daftar PPDB Online 2026/2027</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
