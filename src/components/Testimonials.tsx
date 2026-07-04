import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const activeTest = TESTIMONIALS[activeIndex];

  return (
    <section id="testimoni" className="py-24 bg-slate-50 dark:bg-slate-900/30 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative quotes background watermark */}
      <div className="absolute top-12 left-12 text-slate-200/40 dark:text-slate-800/20 -z-0 pointer-events-none">
        <Quote className="w-48 h-48" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="testimonials-header">
          <span className="text-xs font-bold text-sky-600 dark:text-sky-400 tracking-widest uppercase bg-sky-50 dark:bg-sky-950/50 px-3 py-1.5 rounded-full">
            KATA MEREKA
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-4 tracking-tight">
            Apresiasi Alumni, Siswa, & Orang Tua
          </h2>
          <div className="w-12 h-1 bg-sky-600 dark:bg-sky-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Carousel Slider */}
        <div className="relative min-h-[380px] sm:min-h-[300px] flex items-center justify-center" id="testimonials-slider">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="w-full bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-12 shadow-md border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row gap-8 items-center"
              id={`testi-slide-${activeTest.id}`}
            >
              {/* Avatar section (Column 1) */}
              <div className="text-center shrink-0">
                <div className="relative inline-block w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-sm border-2 border-slate-100 dark:border-slate-700">
                  <img
                    src={activeTest.avatar}
                    alt={activeTest.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-center space-x-0.5 mt-3 text-amber-400">
                  {Array.from({ length: activeTest.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              {/* Speech and info details (Column 2) */}
              <div className="space-y-4 flex-1 text-center md:text-left">
                <span className="px-2.5 py-1 text-[10px] font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50 rounded-full tracking-wider uppercase">
                  {activeTest.role}
                </span>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base italic leading-relaxed">
                  "{activeTest.content}"
                </p>

                <div>
                  <h4 className="font-display font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                    {activeTest.name}
                  </h4>
                  <p className="text-slate-400 dark:text-slate-500 text-xs sm:text-sm">
                    {activeTest.batchOrClass}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controllers */}
        <div className="flex items-center justify-between mt-8" id="testimonials-controls">
          {/* Active slide dot indicators */}
          <div className="flex space-x-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                id={`testi-dot-${i}`}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === i ? 'w-8 bg-sky-600 dark:bg-sky-400' : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Nav Buttons */}
          <div className="flex space-x-2">
            <button
              id="testi-btn-prev"
              onClick={handlePrev}
              className="p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              id="testi-btn-next"
              onClick={handleNext}
              className="p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
