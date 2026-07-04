import React, { useState } from 'react';
import { 
  Sparkles, 
  HelpCircle, 
  CheckCircle, 
  ArrowRight, 
  Calculator, 
  UserPlus, 
  ClipboardCheck, 
  FileDown, 
  Calendar,
  DollarSign,
  ChevronDown
} from 'lucide-react';
import { ADMISSION_STEPS, FAQS, TUITION_CALCULATOR_OPTIONS } from '../data';
import { InquiryFormState } from '../types';

export default function Admissions() {
  // Calculator States
  const [calcGrade, setCalcGrade] = useState('regular-school');
  const [calcPath, setCalcPath] = useState('regular-path');
  const [calcExtras, setCalcExtras] = useState<string[]>([]);

  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Inquiry Form States
  const [formStep, setFormStep] = useState(1); // 1: Siswa, 2: Wali/Pesan, 3: Success
  const [formData, setFormData] = useState<InquiryFormState>({
    fullName: '',
    email: '',
    phone: '',
    originSchool: '',
    selectedProgram: 'mipa',
    guardianName: '',
    address: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<Partial<InquiryFormState>>({});

  // Calculations
  const selectedGradeObj = TUITION_CALCULATOR_OPTIONS.gradeBase.find(g => g.id === calcGrade) 
    || TUITION_CALCULATOR_OPTIONS.gradeBase[0];
  const selectedPathObj = TUITION_CALCULATOR_OPTIONS.pathOptions.find(p => p.id === calcPath)
    || TUITION_CALCULATOR_OPTIONS.pathOptions[0];

  // Base costs
  const baseAdmission = selectedGradeObj.costAdmission;
  const baseSpp = selectedGradeObj.costMonthly;

  // Discounts
  const admissionDiscountPct = selectedPathObj.discountPct;
  const sppDiscountPct = 'sppDiscountPct' in selectedPathObj ? (selectedPathObj as any).sppDiscountPct : 0;

  const finalAdmission = baseAdmission * (1 - admissionDiscountPct / 100);
  const finalSpp = baseSpp * (1 - sppDiscountPct / 100);

  // Extras
  const extraCostSum = calcExtras.reduce((sum, extraId) => {
    const matched = TUITION_CALCULATOR_OPTIONS.extraServices.find(e => e.id === extraId);
    return sum + (matched ? matched.cost : 0);
  }, 0);

  const calculatedTotalMonthly = finalSpp + extraCostSum;
  const firstPaymentSum = finalAdmission + calculatedTotalMonthly;

  const handleExtraChange = (id: string) => {
    setCalcExtras(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Form Validation and Submission
  const validateStep1 = () => {
    const errors: Partial<InquiryFormState> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Nama lengkap wajib diisi';
    if (!formData.email.trim()) errors.email = 'Email wajib diisi';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Format email tidak valid';
    if (!formData.phone.trim()) errors.phone = 'Nomor HP/WhatsApp wajib diisi';
    if (!formData.originSchool.trim()) errors.originSchool = 'Asal sekolah SMP wajib diisi';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep2 = () => {
    const errors: Partial<InquiryFormState> = {};
    if (!formData.guardianName.trim()) errors.guardianName = 'Nama orang tua/wali wajib diisi';
    if (!formData.address.trim()) errors.address = 'Alamat lengkap wajib diisi';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNextStep = () => {
    if (formStep === 1) {
      if (validateStep1()) setFormStep(2);
    }
  };

  const handlePrevStep = () => {
    setFormStep(1);
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep2()) {
      setFormStep(3);
    }
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      originSchool: '',
      selectedProgram: 'mipa',
      guardianName: '',
      address: '',
      message: ''
    });
    setFormErrors({});
    setFormStep(1);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section id="ppdb" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="admission-header-main">
          <span className="text-xs font-bold text-sky-600 dark:text-sky-400 tracking-widest uppercase bg-sky-50 dark:bg-sky-950/50 px-3 py-1.5 rounded-full">
            PENERIMAAN SISWA BARU (PPDB)
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-4 tracking-tight">
            Portal PPDB Online TA 2026/2027
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-2">
            Bergabunglah bersama kami dan wujudkan potensi terbaik Anda melalui ekosistem pendidikan berstandar tinggi yang menyeimbangkan kecerdasan akademis & karakter luhur.
          </p>
          <div className="w-12 h-1 bg-sky-600 dark:bg-sky-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* 1. PPDB Steps (Alur Pendaftaran) */}
        <div className="mb-24" id="ppdb-steps-block">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-800 dark:text-slate-100 mb-8 text-center flex items-center justify-center space-x-2">
            <ClipboardCheck className="w-6 h-6 text-sky-600 dark:text-sky-400" />
            <span>Alur & Mekanisme Pendaftaran</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {ADMISSION_STEPS.map((step) => (
              <div 
                key={step.step}
                className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 relative flex flex-col justify-between"
                id={`ppdb-step-${step.step}`}
              >
                <div>
                  <div className="w-10 h-10 bg-sky-600 dark:bg-sky-500 text-white font-display font-bold rounded-xl flex items-center justify-center mb-4 shadow-md shadow-sky-600/10">
                    {step.step}
                  </div>
                  <h4 className="font-display font-bold text-slate-800 dark:text-slate-200 text-base">
                    {step.title}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                  <span className="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block">Jadwal:</span>
                  <span className="text-xs text-slate-600 dark:text-slate-300 font-medium block mt-0.5">{step.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Interactive Fee Calculator & PPDB Inquiry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24" id="ppdb-interactive-modules">
          
          {/* Column A: Tuition Fee Calculator (5 cols) */}
          <div className="lg:col-span-5 space-y-6" id="ppdb-calculator-col">
            <div className="bg-slate-50 dark:bg-slate-800/40 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-sm relative">
              
              <div className="flex items-center space-x-2 text-sky-600 dark:text-sky-400 font-bold text-sm uppercase mb-4">
                <Calculator className="w-5 h-5 text-sky-500" />
                <span>Simulasi Biaya Sekolah</span>
              </div>
              
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white leading-tight">
                Kalkulator Pembiayaan PPDB
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Hitung perkiraan biaya pendaftaran dan SPP bulanan berdasarkan jalur masuk & fasilitas tambahan yang dipilih.
              </p>

              <div className="space-y-4 mt-6">
                
                {/* Field 1: Program Type */}
                <div>
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider block mb-2">Tipe Kelas</label>
                  <select
                    id="calc-select-grade"
                    value={calcGrade}
                    onChange={(e) => setCalcGrade(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                  >
                    {TUITION_CALCULATOR_OPTIONS.gradeBase.map(g => (
                      <option key={g.id} value={g.id}>{g.label}</option>
                    ))}
                  </select>
                </div>

                {/* Field 2: Admission Path */}
                <div>
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider block mb-2">Jalur Pendaftaran</label>
                  <select
                    id="calc-select-path"
                    value={calcPath}
                    onChange={(e) => setCalcPath(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                  >
                    {TUITION_CALCULATOR_OPTIONS.pathOptions.map(p => (
                      <option key={p.id} value={p.id}>{p.label}</option>
                    ))}
                  </select>
                </div>

                {/* Field 3: Extra facilities checks (only relevant if not Boarding) */}
                <div>
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider block mb-2">Fasilitas Tambahan (Bulanan)</label>
                  <div className="space-y-2">
                    {TUITION_CALCULATOR_OPTIONS.extraServices.map(extra => {
                      // Disallow lunch catering choice for boarding because boarding already includes 3x meals
                      const isDisabled = calcGrade === 'boarding-school' && extra.id === 'catering';
                      return (
                        <label 
                          key={extra.id} 
                          className={`flex items-start space-x-2 text-xs text-slate-600 dark:text-slate-300 ${isDisabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                          <input
                            type="checkbox"
                            id={`extra-checkbox-${extra.id}`}
                            checked={!isDisabled && calcExtras.includes(extra.id)}
                            disabled={isDisabled}
                            onChange={() => handleExtraChange(extra.id)}
                            className="mt-0.5 rounded text-sky-600 focus:ring-sky-500 cursor-pointer"
                          />
                          <div>
                            <span className="font-semibold block">{extra.label}</span>
                            <span className="text-slate-400">{formatCurrency(extra.cost)} / bulan</span>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Calculation Breakdown display */}
                <div className="bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 p-4 rounded-2xl mt-6 space-y-2 text-xs">
                  <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                    <span>Uang Pangkal (Sekali):</span>
                    <span className={admissionDiscountPct > 0 ? "line-through text-[11px]" : ""}>
                      {formatCurrency(baseAdmission)}
                    </span>
                  </div>
                  {admissionDiscountPct > 0 && (
                    <div className="flex justify-between items-center text-emerald-600 dark:text-emerald-400 font-bold">
                      <span>Uang Pangkal Final (Diskon {admissionDiscountPct}%):</span>
                      <span>{formatCurrency(finalAdmission)}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                    <span>SPP Pokok Bulanan:</span>
                    <span className={sppDiscountPct > 0 ? "line-through text-[11px]" : ""}>
                      {formatCurrency(baseSpp)}
                    </span>
                  </div>
                  {sppDiscountPct > 0 && (
                    <div className="flex justify-between items-center text-emerald-600 dark:text-emerald-400 font-bold">
                      <span>SPP Pokok Final (Diskon {sppDiscountPct}%):</span>
                      <span>{formatCurrency(finalSpp)}</span>
                    </div>
                  )}
                  {extraCostSum > 0 && (
                    <div className="flex justify-between items-center text-slate-500">
                      <span>Fasilitas Tambahan:</span>
                      <span>+{formatCurrency(extraCostSum)} / bln</span>
                    </div>
                  )}
                  <hr className="border-slate-100 dark:border-slate-700 my-2" />
                  
                  <div className="flex justify-between items-center font-bold text-slate-800 dark:text-white text-sm">
                    <span>Estimasi SPP Bulanan:</span>
                    <span>{formatCurrency(calculatedTotalMonthly)}</span>
                  </div>
                  <div className="flex justify-between items-center font-bold text-sky-600 dark:text-sky-400 text-sm">
                    <span>Total Pembayaran Awal:</span>
                    <span>{formatCurrency(firstPaymentSum)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column B: Multi-step Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 space-y-6" id="ppdb-inquiry-col">
            <div className="bg-slate-50 dark:bg-slate-800/40 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-sm">
              
              <div className="flex items-center space-x-2 text-sky-600 dark:text-sky-400 font-bold text-sm uppercase mb-4">
                <UserPlus className="w-5 h-5 text-sky-500" />
                <span>Formulir PPDB Inquiry</span>
              </div>
              
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white leading-tight">
                {formStep === 3 ? "Inquiry Berhasil Terkirim!" : "Formulir Peminatan / Pendaftaran Awal"}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {formStep === 1 && "Langkah 1 dari 2: Lengkapi Identitas Calon Siswa."}
                {formStep === 2 && "Langkah 2 dari 2: Lengkapi Identitas Wali & Pesan."}
                {formStep === 3 && "Kami telah mendaftarkan minat Anda. Silakan catat rincian berikut."}
              </p>

              {/* Steps Progress Visual Bar */}
              <div className="flex items-center space-x-2 mt-4 mb-6">
                <div className={`h-1.5 rounded-full transition-all duration-300 ${formStep >= 1 ? 'w-1/3 bg-sky-500' : 'w-1/3 bg-slate-200'}`} />
                <div className={`h-1.5 rounded-full transition-all duration-300 ${formStep >= 2 ? 'w-1/3 bg-sky-500' : 'w-1/3 bg-slate-200'}`} />
                <div className={`h-1.5 rounded-full transition-all duration-300 ${formStep >= 3 ? 'w-1/3 bg-emerald-500' : 'w-1/3 bg-slate-200'}`} />
              </div>

              {/* Multi-step Form Content */}
              {formStep === 1 && (
                <div className="space-y-4" id="form-step-1-elements">
                  {/* Full Name */}
                  <div>
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-300 block mb-1.5">Nama Lengkap Calon Siswa</label>
                    <input
                      type="text"
                      id="inquiry-input-fullname"
                      value={formData.fullName}
                      onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                      placeholder="Masukkan nama sesuai akta kelahiran..."
                      className="w-full p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                    />
                    {formErrors.fullName && <p className="text-rose-500 text-[10px] font-bold mt-1">{formErrors.fullName}</p>}
                  </div>

                  {/* Email & Phone Rows */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-600 dark:text-slate-300 block mb-1.5">Email Aktif</label>
                      <input
                        type="email"
                        id="inquiry-input-email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="contoh@email.com"
                        className="w-full p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                      />
                      {formErrors.email && <p className="text-rose-500 text-[10px] font-bold mt-1">{formErrors.email}</p>}
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-600 dark:text-slate-300 block mb-1.5">Nomor HP / WhatsApp Wali</label>
                      <input
                        type="tel"
                        id="inquiry-input-phone"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="0812XXXXXXXX"
                        className="w-full p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                      />
                      {formErrors.phone && <p className="text-rose-500 text-[10px] font-bold mt-1">{formErrors.phone}</p>}
                    </div>
                  </div>

                  {/* Origin School SMP & Preferred Program Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-600 dark:text-slate-300 block mb-1.5">Asal SMP / MTs</label>
                      <input
                        type="text"
                        id="inquiry-input-origin-school"
                        value={formData.originSchool}
                        onChange={(e) => setFormData(prev => ({ ...prev, originSchool: e.target.value }))}
                        placeholder="SMP Negeri atau Swasta..."
                        className="w-full p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                      />
                      {formErrors.originSchool && <p className="text-rose-500 text-[10px] font-bold mt-1">{formErrors.originSchool}</p>}
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-600 dark:text-slate-300 block mb-1.5">Peminatan Program</label>
                      <select
                        id="inquiry-select-program"
                        value={formData.selectedProgram}
                        onChange={(e) => setFormData(prev => ({ ...prev, selectedProgram: e.target.value }))}
                        className="w-full p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 cursor-pointer"
                      >
                        <option value="mipa">MIPA (Sains & Tech)</option>
                        <option value="ips">IPS (Social & Leadership)</option>
                        <option value="bahasa">IBB (Sastra & Budaya)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      id="inquiry-btn-next-1"
                      onClick={handleNextStep}
                      className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center space-x-1.5 cursor-pointer shadow-md shadow-sky-600/10"
                    >
                      <span>Lanjut Identitas Wali</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {formStep === 2 && (
                <form onSubmit={handleSubmitInquiry} className="space-y-4" id="form-step-2-elements">
                  {/* Guardian Name */}
                  <div>
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-300 block mb-1.5">Nama Lengkap Orang Tua / Wali</label>
                    <input
                      type="text"
                      id="inquiry-input-guardian"
                      value={formData.guardianName}
                      onChange={(e) => setFormData(prev => ({ ...prev, guardianName: e.target.value }))}
                      placeholder="Masukkan nama Ayah/Ibu/Wali..."
                      className="w-full p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                    />
                    {formErrors.guardianName && <p className="text-rose-500 text-[10px] font-bold mt-1">{formErrors.guardianName}</p>}
                  </div>

                  {/* Address */}
                  <div>
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-300 block mb-1.5">Alamat Tempat Tinggal Lengkap</label>
                    <textarea
                      rows={2}
                      id="inquiry-input-address"
                      value={formData.address}
                      onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                      placeholder="Nama jalan, nomor rumah, RT/RW, Kecamatan, Kota/Kabupaten..."
                      className="w-full p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                    />
                    {formErrors.address && <p className="text-rose-500 text-[10px] font-bold mt-1">{formErrors.address}</p>}
                  </div>

                  {/* Optional Message */}
                  <div>
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-300 block mb-1.5">Pesan / Keterangan Khusus (Opsional)</label>
                    <textarea
                      rows={2}
                      id="inquiry-input-message"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Sebutkan prestasi mentereng atau kondisi kesehatan khusus jika ada..."
                      className="w-full p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      id="inquiry-btn-prev-2"
                      onClick={handlePrevStep}
                      className="px-5 py-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold rounded-xl text-xs hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                    >
                      Kembali
                    </button>
                    <button
                      type="submit"
                      id="inquiry-btn-submit-2"
                      className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center space-x-1.5 cursor-pointer shadow-md shadow-emerald-600/10"
                    >
                      <span>Kirim Inquiry Pendaftaran</span>
                      <CheckCircle className="w-4.5 h-4.5" />
                    </button>
                  </div>
                </form>
              )}

              {formStep === 3 && (
                <div className="space-y-6" id="form-step-success-block">
                  <div className="p-6 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-100 dark:border-emerald-900/50 text-center space-y-2">
                    <div className="inline-flex p-3 bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 rounded-full mb-2">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="font-display font-bold text-slate-900 dark:text-white text-base">Inquiry PPDB Sukses Tersimpan</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Tim Humas & Admisi SMA Lentera Nusantara akan menghubungi nomor WhatsApp / Email Anda dalam 1x24 jam untuk panduan berkas.
                    </p>
                  </div>

                  {/* Summary receipt box mockup */}
                  <div className="p-5 border border-dashed border-slate-200 dark:border-slate-700 rounded-2xl bg-white dark:bg-slate-800/80 space-y-2.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-semibold">No. Registrasi Sementara:</span>
                      <span className="font-mono font-bold text-slate-800 dark:text-white">LN-2026-00341</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-semibold">Nama Calon Siswa:</span>
                      <span className="font-bold text-slate-800 dark:text-white">{formData.fullName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-semibold">Asal Sekolah SMP:</span>
                      <span className="font-semibold text-slate-800 dark:text-white">{formData.originSchool}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-semibold">Email & Kontak WA:</span>
                      <span className="font-semibold text-slate-800 dark:text-white">{formData.email} / {formData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-semibold">Pilihan Peminatan:</span>
                      <span className="font-bold text-sky-600 uppercase tracking-wide">{formData.selectedProgram}</span>
                    </div>
                  </div>

                  {/* Actions row */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      id="inquiry-btn-print-mock"
                      onClick={() => {
                        alert(`Bukti Inquiry Sementara untuk ${formData.fullName} (No. LN-2026-00341) sedang diunduh dalam format PDF. Silakan periksa folder unduhan Anda.`);
                      }}
                      className="flex-1 py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center space-x-1.5 cursor-pointer shadow-md"
                    >
                      <FileDown className="w-4 h-4" />
                      <span>Unduh Bukti PDF (Mock)</span>
                    </button>
                    <button
                      id="inquiry-btn-reset"
                      onClick={handleResetForm}
                      className="py-3 px-5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                    >
                      Daftar Siswa Baru Lainnya
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* 3. FAQ Accordion for PPDB Admissions */}
        <div className="max-w-4xl mx-auto" id="ppdb-faqs-block">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-800 dark:text-slate-100 mb-8 text-center flex items-center justify-center space-x-2">
            <HelpCircle className="w-6 h-6 text-sky-600 dark:text-sky-400" />
            <span>Pertanyaan yang Sering Diajukan (FAQ)</span>
          </h3>

          <div className="space-y-4" id="faq-accordion">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800/60 overflow-hidden"
                  id={`faq-item-${idx}`}
                >
                  <button
                    id={`faq-btn-toggle-${idx}`}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left font-semibold text-slate-800 dark:text-slate-200 text-sm sm:text-base flex items-center justify-between cursor-pointer focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
                  </button>

                  <div 
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? 'max-h-56 border-t border-slate-100 dark:border-slate-800/80 p-5' : 'max-h-0'
                    }`}
                  >
                    <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
