import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  Instagram, 
  Facebook, 
  Youtube, 
  Twitter, 
  ExternalLink 
} from 'lucide-react';
import { SCHOOL_INFO } from '../data';

interface ContactFormState {
  name: string;
  emailOrPhone: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    emailOrPhone: '',
    subject: 'Akademik',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<Partial<ContactFormState>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const errors: Partial<ContactFormState> = {};
    if (!formData.name.trim()) errors.name = 'Nama lengkap wajib diisi';
    if (!formData.emailOrPhone.trim()) errors.emailOrPhone = 'Email atau No. HP aktif wajib diisi';
    if (!formData.message.trim()) errors.message = 'Pesan Anda masih kosong';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      emailOrPhone: '',
      subject: 'Akademik',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="kontak" className="py-24 bg-slate-50 dark:bg-slate-900/30 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="contact-header">
          <span className="text-xs font-bold text-sky-600 dark:text-sky-400 tracking-widest uppercase bg-sky-50 dark:bg-sky-950/50 px-3 py-1.5 rounded-full">
            HUBUNGI KAMI
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-4 tracking-tight">
            Hubungi Layanan Informasi & Lokasi Kampus
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-2">
            Punya pertanyaan mengenai sistem pembelajaran, kunjungan kampus, atau kemitraan strategis? Tim Humas kami siap melayani Anda sepenuh hati.
          </p>
          <div className="w-12 h-1 bg-sky-600 dark:bg-sky-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Info Cards Row (4 elements) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" id="contact-info-cards">
          
          {/* Card 1: Address */}
          <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-start space-x-4">
            <div className="p-3 bg-sky-50 text-sky-600 dark:bg-sky-950/50 dark:text-sky-400 rounded-2xl shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">Alamat Kampus</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                {SCHOOL_INFO.address}
              </p>
            </div>
          </div>

          {/* Card 2: Phone */}
          <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-start space-x-4">
            <div className="p-3 bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400 rounded-2xl shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">Saluran Telepon</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                {SCHOOL_INFO.phone}
              </p>
              <p className="text-[10px] text-sky-600 font-semibold mt-1">Faks: (021) 789-2346</p>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-start space-x-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 rounded-2xl shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">Surat Elektronik</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                {SCHOOL_INFO.email}
              </p>
              <p className="text-[10px] text-sky-600 font-semibold mt-1">humas@lenteranusantara.sch.id</p>
            </div>
          </div>

          {/* Card 4: Clock */}
          <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-start space-x-4">
            <div className="p-3 bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400 rounded-2xl shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">Jam Operasional</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                {SCHOOL_INFO.operatingHours}
              </p>
              <p className="text-[10px] text-rose-500 font-semibold mt-1">Sabtu - Minggu & Libur Nasional: Tutup</p>
            </div>
          </div>

        </div>

        {/* Form and Map Grid (2 columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch" id="contact-layout-grid">
          
          {/* Column 1: Feedback Form (7 cols) */}
          <div className="lg:col-span-7 flex" id="contact-form-block">
            <div className="w-full bg-white dark:bg-slate-800 p-8 sm:p-10 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              
              {!isSubmitted ? (
                <form onSubmit={handleSendMessage} className="space-y-5" id="form-contact-actual">
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                    Kirim Pesan Langsung
                  </h3>
                  <p className="text-xs text-slate-400">
                    Isi formulir berikut dan petugas informasi kami akan merespons pesan Anda via Email atau telepon secepatnya.
                  </p>

                  {/* Name field */}
                  <div>
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-300 block mb-1.5">Nama Lengkap Anda</label>
                    <input
                      type="text"
                      id="contact-input-name"
                      value={formData.name}
                      onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                      placeholder="Masukkan nama lengkap Anda..."
                      className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                    />
                    {formErrors.name && <p className="text-rose-500 text-[10px] font-bold mt-1">{formErrors.name}</p>}
                  </div>

                  {/* Contact Phone or Email */}
                  <div>
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-300 block mb-1.5">Email / No. WhatsApp Aktif</label>
                    <input
                      type="text"
                      id="contact-input-contact"
                      value={formData.emailOrPhone}
                      onChange={(e) => setFormData(p => ({ ...p, emailOrPhone: e.target.value }))}
                      placeholder="contoh@email.com atau 0812XXXXXXXX..."
                      className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                    />
                    {formErrors.emailOrPhone && <p className="text-rose-500 text-[10px] font-bold mt-1">{formErrors.emailOrPhone}</p>}
                  </div>

                  {/* Subject Dropdown */}
                  <div>
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-300 block mb-1.5">Kategori Subjek Pesan</label>
                    <select
                      id="contact-select-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData(p => ({ ...p, subject: e.target.value }))}
                      className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 cursor-pointer"
                    >
                      <option value="Akademik">Pertanyaan Sistem Akademik</option>
                      <option value="PPDB">Informasi Pendaftaran PPDB</option>
                      <option value="Kerjasama">Kemitraan & CSR Kunjungan</option>
                      <option value="Saran">Saran & Kritik Masukan</option>
                    </select>
                  </div>

                  {/* Message textarea */}
                  <div>
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-300 block mb-1.5">Pesan Lengkap Anda</label>
                    <textarea
                      rows={3}
                      id="contact-input-text"
                      value={formData.message}
                      onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                      placeholder="Tuliskan detail pertanyaan atau masukan Anda di sini..."
                      className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                    />
                    {formErrors.message && <p className="text-rose-500 text-[10px] font-bold mt-1">{formErrors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="contact-btn-submit"
                      className="w-full py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 cursor-pointer shadow-md shadow-sky-600/10 transition-all hover:-translate-y-0.5"
                    >
                      <Send className="w-4 h-4" />
                      <span>Kirim Pesan Sekarang</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-6 text-center py-8" id="contact-success-block">
                  <div className="inline-flex p-4 bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-xl text-slate-950 dark:text-white">Pesan Anda Sukses Dikirim!</h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                      Terima kasih atas masukan/pertanyaan Anda, <strong>{formData.name}</strong>. Tim Humas kami akan merespons melalui <strong>{formData.emailOrPhone}</strong> dalam kurun waktu 1x24 jam kerja.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-700/50 max-w-sm mx-auto space-y-2.5 text-xs text-slate-400">
                    <div className="flex justify-between">
                      <span>Kategori Subjek:</span>
                      <span className="font-bold text-slate-600 dark:text-slate-200">{formData.subject}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Status Tiket:</span>
                      <span className="font-bold text-emerald-500">Antrean Aktif</span>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      id="contact-btn-reset"
                      onClick={handleResetForm}
                      className="px-6 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                    >
                      Kirim Pesan Lainnya
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Column 2: Stylized Custom Map Mock (5 cols) */}
          <div className="lg:col-span-5 flex" id="contact-map-block">
            <div className="w-full bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              
              <div className="space-y-3">
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                  Peta Lokasi Kampus
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Terletak di area strategis Kebayoran Baru, Jakarta Selatan. Akses mudah dari halte MRT Blok M dan Halte Transjakarta Pemuda Emas.
                </p>
              </div>

              {/* Vector styled Mock Map canvas */}
              <div 
                className="relative my-6 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 aspect-video lg:aspect-auto lg:flex-1 overflow-hidden flex items-center justify-center p-4"
                id="contact-map-canvas"
              >
                {/* Simulated Street grid background lines */}
                <div className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none">
                  <div className="absolute top-0 bottom-0 left-1/4 w-0.5 bg-slate-400" />
                  <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-400" />
                  <div className="absolute top-0 bottom-0 left-3/4 w-0.5 bg-slate-400" />
                  <div className="absolute left-0 right-0 top-1/4 h-0.5 bg-slate-400" />
                  <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-slate-400" />
                  <div className="absolute left-0 right-0 top-3/4 h-0.5 bg-slate-400" />
                  <div className="absolute inset-0 bg-radial-gradient from-transparent to-slate-200 dark:to-slate-950" />
                </div>

                {/* Simulated green park */}
                <div className="absolute top-4 left-6 w-24 h-16 bg-emerald-100 dark:bg-emerald-950/20 rounded-xl border border-emerald-200/50" />
                
                {/* Pin element */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="animate-bounce p-3 bg-rose-500 text-white rounded-full shadow-lg shadow-rose-500/30">
                    <MapPin className="w-6 h-6 fill-current" />
                  </div>
                  {/* Tooltip Label */}
                  <div className="mt-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-lg shadow-sm text-center">
                    <span className="text-[10px] font-bold text-slate-800 dark:text-white block leading-tight">SMA LENTERA</span>
                    <span className="text-[9px] font-semibold text-sky-600 dark:text-sky-400 block tracking-widest uppercase">NUSANTARA</span>
                  </div>
                </div>

                {/* Map stats details */}
                <span className="absolute bottom-3 right-3 font-mono text-[9px] text-slate-400 bg-white/80 dark:bg-slate-800/80 px-2 py-0.5 rounded border">
                  Lat: -6.2297 | Lon: 106.8152
                </span>
              </div>

              {/* External Navigation link */}
              <div className="space-y-4">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer"
                  id="contact-btn-gmaps"
                >
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {/* Social follows */}
                <div className="flex items-center justify-center space-x-4 pt-1" id="contact-socials">
                  <span className="text-xs text-slate-400 font-medium">Ikuti Kami:</span>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 hover:bg-sky-50 dark:bg-slate-800 hover:text-sky-600 dark:text-slate-300 rounded-xl transition-colors cursor-pointer" aria-label="Instagram">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 hover:bg-sky-50 dark:bg-slate-800 hover:text-sky-600 dark:text-slate-300 rounded-xl transition-colors cursor-pointer" aria-label="Facebook">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 hover:bg-sky-50 dark:bg-slate-800 hover:text-sky-600 dark:text-slate-300 rounded-xl transition-colors cursor-pointer" aria-label="Youtube">
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 hover:bg-sky-50 dark:bg-slate-800 hover:text-sky-600 dark:text-slate-300 rounded-xl transition-colors cursor-pointer" aria-label="Twitter">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
