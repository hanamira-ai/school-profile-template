import React from 'react';
import { GraduationCap, Phone, Mail, MapPin, Award, CheckCircle } from 'lucide-react';
import { SCHOOL_INFO } from '../data';

export default function Footer() {
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 dark:bg-slate-950 pt-16 pb-8 transition-colors duration-300 border-t border-slate-800" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12" id="footer-main-grid">
          
          {/* Column 1: School Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleScrollTo('beranda')} id="footer-logo">
              <div className="p-2.5 bg-sky-600 rounded-xl text-white shadow-md shadow-sky-600/10">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="font-display font-bold text-lg tracking-tight text-white block leading-tight">
                  SMA LENTERA
                </span>
                <span className="text-xs font-semibold text-sky-400 block tracking-wider uppercase">
                  NUSANTARA
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pr-4">
              Mendidik pemimpin masa depan berkarakter global, unggul dalam sains, robotika, bahasa, dan riset dengan tetap berpijak kokoh pada jati diri & budaya luhur nusantara.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-xs text-slate-400">
              <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-slate-800 text-slate-300">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span>Akreditasi A Unggul (99)</span>
              </span>
            </div>
          </div>

          {/* Column 2: Institutional Quick links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-sm text-white tracking-widest uppercase">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button onClick={() => handleScrollTo('beranda')} className="hover:text-sky-400 hover:underline cursor-pointer text-left transition-colors">
                  Beranda Utama
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('tentang')} className="hover:text-sky-400 hover:underline cursor-pointer text-left transition-colors">
                  Tentang Sekolah
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('visi-misi')} className="hover:text-sky-400 hover:underline cursor-pointer text-left transition-colors">
                  Visi & Misi
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('akademik')} className="hover:text-sky-400 hover:underline cursor-pointer text-left transition-colors">
                  Program Akademik
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('fasilitas')} className="hover:text-sky-400 hover:underline cursor-pointer text-left transition-colors">
                  Fasilitas Belajar
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Secondary Information Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-white tracking-widest uppercase">
              Informasi Siswa
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button onClick={() => handleScrollTo('ekskul')} className="hover:text-sky-400 hover:underline cursor-pointer text-left transition-colors">
                  Kegiatan Ekstrakurikuler
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('prestasi')} className="hover:text-sky-400 hover:underline cursor-pointer text-left transition-colors">
                  Siswa Berprestasi
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('berita')} className="hover:text-sky-400 hover:underline cursor-pointer text-left transition-colors">
                  Kabar Berita & Pengumuman
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('ppdb')} className="hover:text-sky-400 hover:underline cursor-pointer text-left transition-colors font-semibold text-sky-400">
                  Pendaftaran PPDB Online
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('kontak')} className="hover:text-sky-400 hover:underline cursor-pointer text-left transition-colors">
                  Layanan Hubungi Kami
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Shortcuts (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-white tracking-widest uppercase">
              Sekretariat
            </h4>
            <ul className="space-y-3.5 text-xs">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-400">
                  {SCHOOL_INFO.address}
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-slate-400">{SCHOOL_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-slate-400">{SCHOOL_INFO.email}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright section */}
        <div className="pt-8 mt-8 border-t border-slate-800 text-center flex flex-col sm:flex-row justify-between items-center gap-4" id="footer-credits">
          <p className="text-xs text-slate-500">
            © {currentYear} {SCHOOL_INFO.name}. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center space-x-2 text-xs text-slate-500">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span>Resmi Terdaftar di Kemendikbudristek RI</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
