import React, { useState } from 'react';
import { Quote, ChevronDown, ChevronUp, Award, Calendar, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SCHOOL_INFO } from '../data';

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="tentang" className="py-24 bg-slate-50 dark:bg-slate-900/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="about-header">
          <span className="text-xs font-bold text-sky-600 dark:text-sky-400 tracking-widest uppercase bg-sky-50 dark:bg-sky-950/50 px-3 py-1.5 rounded-full">
            TENTANG KAMI
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-4 tracking-tight">
            Membangun Karakter, Mengukir Prestasi Sejak {SCHOOL_INFO.established}
          </h2>
          <div className="w-12 h-1 bg-sky-600 dark:bg-sky-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* School Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20" id="about-overview-grid">
          {/* Column 1: Image & Highlight Cards */}
          <div className="lg:col-span-5 relative" id="about-visuals">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10 aspect-[4/3] sm:aspect-video lg:aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                alt="Siswa SMA Lentera Nusantara Berdiskusi"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
            </div>
            
            {/* Overlay Decorative Badges */}
            <div 
              className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-xl z-20 border border-slate-100 dark:border-slate-700 max-w-[220px]"
              id="badge-accreditation"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/50 rounded-xl text-emerald-600 dark:text-emerald-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 dark:text-slate-400 font-medium">Akreditasi</div>
                  <div className="font-bold text-slate-800 dark:text-white text-base">Unggul {SCHOOL_INFO.accreditation.split(' ')[0]}</div>
                </div>
              </div>
            </div>

            <div 
              className="absolute -top-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl z-20 border border-slate-100 dark:border-slate-700 hidden sm:block"
              id="badge-history"
            >
              <div className="flex items-center space-x-2 text-sky-600 dark:text-sky-400 font-semibold text-sm">
                <Calendar className="w-4 h-4" />
                <span>Didirikan Tahun {SCHOOL_INFO.established}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Text Description & History */}
          <div className="lg:col-span-7 space-y-6" id="about-text-content">
            <h3 className="font-display font-bold text-2xl text-slate-800 dark:text-slate-100">
              Menempa Integritas & Kecerdasan Kolektif
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              <strong>{SCHOOL_INFO.name}</strong> didirikan dengan impian luhur untuk menyediakan sistem pendidikan menengah atas berkualitas internasional di Indonesia. Kami menggabungkan kekayaan nilai-nilai luhur nusantara—seperti gotong royong, sopan santun, dan ketahanan diri—dengan kerangka akademis global.
            </p>

            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              Melalui program inovatif seperti <em>Nusantara Leadership Program</em> dan <em>Independent Student Research</em>, kami membimbing siswa tidak hanya untuk menghafal teori, melainkan melatih kemampuan berpikir kritis, memecahkan masalah nyata, dan berkolaborasi secara sinergis dalam kebinekaan.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4" id="about-pillars">
              <div className="flex items-start space-x-3 p-4 rounded-xl bg-white dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                <div className="p-2 bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 rounded-lg mt-0.5">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">Kurikulum Integratif</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Sinergi kurikulum nasional dan sertifikasi global.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-xl bg-white dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                <div className="p-2 bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-lg mt-0.5">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">Pembina Berprestasi</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Diajar oleh pendidik profesional dan praktisi industri.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Headmaster's Welcome Card */}
        <div 
          className="bg-white dark:bg-slate-800/80 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 dark:border-slate-700/60 overflow-hidden relative"
          id="headmaster-welcome-card"
        >
          {/* Decorative Background Quote Icon */}
          <div className="absolute right-6 top-6 text-slate-100 dark:text-slate-700/30 -z-0 pointer-events-none">
            <Quote className="w-32 h-32 transform rotate-180" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Headmaster Image */}
            <div className="lg:col-span-3 text-center lg:text-left">
              <div className="relative inline-block w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shadow-md border-4 border-slate-50 dark:border-slate-700">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop"
                  alt="Kepala Sekolah - Prof. Dr. Irwan Haryadi"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <h4 className="font-display font-bold text-lg text-slate-800 dark:text-slate-100 mt-4 block leading-tight">
                Prof. Dr. Irwan Haryadi, M.Ed.
              </h4>
              <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 tracking-wide uppercase mt-1 block">
                Kepala Sekolah
              </span>
            </div>

            {/* Welcome Message Column */}
            <div className="lg:col-span-9 space-y-4">
              <div className="flex items-center space-x-2 text-sky-600 dark:text-sky-400 font-semibold text-sm">
                <Quote className="w-5 h-5 fill-current" />
                <span>Sambutan Kepala Sekolah</span>
              </div>
              
              <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-800 dark:text-slate-100">
                "Selamat Datang di Kawah Candradimuka Calon Pemimpin Bangsa"
              </h3>

              <div className="text-slate-600 dark:text-slate-300 text-[15px] space-y-4 leading-relaxed">
                <p>
                  <em>Assalamu’alaikum Warahmatullahi Wabarakatuh, Salam Sejahtera untuk kita semua.</em>
                </p>
                <p>
                  Kehormatan besar bagi kami menyambut Anda di portal informasi resmi <strong>SMA Lentera Nusantara</strong>. Pendidikan bukan sekadar proses transfer ilmu pengetahuan, melainkan seni menumbuhkan budi pekerti, menyalakan api rasa ingin tahu, dan memperkuat sayap keberanian siswa untuk terbang menggapai cita-cita mereka.
                </p>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      id="headmaster-expanded-speech"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 pt-1 overflow-hidden"
                    >
                      <p>
                        Di era disrupsi teknologi hari ini, kecerdasan akademis murni tidak lagi cukup. Kita memerlukan anak-anak muda yang adaptif, tangguh menghadapi kegagalan, empati terhadap sesama manusia, dan memiliki keterampilan memimpin yang kokoh. Oleh karena itu, kurikulum kami dirancang seimbang untuk melatih otak, mengasah hati, dan mendisiplinkan fisik.
                      </p>
                      <p>
                        Setiap anak di SMA Lentera Nusantara dihargai keunikan minat bakatnya. Baik mereka menyukai eksplorasi biologi kuantum, berdebat mengenai geopolitik internasional, melodi musik simfoni, maupun olahraga ketangkasan—sekolah kami menyediakan bimbingan mentor berstandar tinggi untuk mendampingi perjalanan mereka. Mari bersama-sama kita bangun generasi emas Indonesia!
                      </p>
                      <p className="font-semibold text-slate-800 dark:text-slate-200">
                        <em>Wassalamu’alaikum Warahmatullahi Wabarakatuh.</em>
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Read More Trigger Button */}
              <button
                id="headmaster-read-more-toggle"
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center space-x-2 text-sky-600 dark:text-sky-400 font-semibold text-sm hover:text-sky-700 dark:hover:text-sky-300 transition-colors pt-2 cursor-pointer"
              >
                <span>{isExpanded ? 'Tutup Sambutan' : 'Baca Selengkapnya'}</span>
                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
