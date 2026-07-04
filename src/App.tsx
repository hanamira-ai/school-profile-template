import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Advantages from './components/Advantages';
import Programs from './components/Programs';
import Facilities from './components/Facilities';
import Extracurriculars from './components/Extracurriculars';
import Achievements from './components/Achievements';
import NewsSection from './components/NewsSection';
import Testimonials from './components/Testimonials';
import Admissions from './components/Admissions';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme_school_template');
    if (saved) return saved === 'dark';
    // Default to light mode for crisp and standard institutional look
    return false;
  });

  const [activeSection, setActiveSection] = useState('beranda');

  // Dark Mode side effects
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme_school_template', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme_school_template', 'light');
    }
  }, [darkMode]);

  // Scroll Spy Intersection Observer
  useEffect(() => {
    const sections = [
      'beranda',
      'tentang',
      'keunggulan',
      'akademik',
      'fasilitas',
      'ekskul',
      'prestasi',
      'berita',
      'ppdb',
      'kontak'
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Spies when section dominates the mid viewport
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      {/* Floating Header Navbar */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        activeSection={activeSection} 
      />

      {/* Main Single Page Layout Sections */}
      <main id="main-content-layout">
        
        {/* Hero Area */}
        <Hero />

        {/* About Section & Sambutan Kepala Sekolah */}
        <About />

        {/* Vision & Mission Centerpiece */}
        <VisionMission />

        {/* Core Advantages */}
        <Advantages />

        {/* Academic Majors (MIPA, IPS, IBB) */}
        <Programs />

        {/* Campus Facilities with Lightbox gallery */}
        <Facilities />

        {/* Extracurricular Clubs */}
        <Extracurriculars />

        {/* Student achievements */}
        <Achievements />

        {/* News search and Category filters */}
        <NewsSection />

        {/* Alumni Reflections and Testimonial carousel */}
        <Testimonials />

        {/* Admissions guide, Fee Calculator, and PPDB multi-step form */}
        <Admissions />

        {/* Contact info, interactive mock map, and direct mail contact form */}
        <Contact />

      </main>

      {/* Corporate institutional Footer directory */}
      <Footer />
    </div>
  );
}
