import { 
  NewsItem, 
  AchievementItem, 
  FacilityItem, 
  TestimonialItem, 
  ExtracurricularItem, 
  AcademicProgram,
  AdmissionStep
} from './types';

export const SCHOOL_INFO = {
  name: 'SMA Lentera Nusantara',
  tagline: 'Mendidik Pemimpin Masa Depan Berkarakter Global & Berakar Budaya',
  shortName: 'Lentera Nusantara',
  established: '2012',
  accreditation: 'A (Unggul - Nilai 99)',
  address: 'Jl. Pemuda Emas No. 45, Kebayoran Baru, Jakarta Selatan, 12110',
  phone: '(021) 789-2345',
  email: 'info@lenteranusantara.sch.id',
  operatingHours: 'Senin - Jumat | 07:00 - 15:30 WIB',
  stats: [
    { label: 'Siswa Aktif', value: '1,240+' },
    { label: 'Guru & Staf', value: '85+' },
    { label: 'Alumni di PTN & Ivy League', value: '98.5%' },
    { label: 'Ekstrakurikuler', value: '32+' }
  ]
};

export const ADVANTAGES = [
  {
    title: 'Kurikulum Merdeka Plus',
    description: 'Integrasi Kurikulum Merdeka nasional dengan standar global Cambridge International untuk mempersiapkan siswa bersaing di kancah global.',
    icon: 'BookOpen'
  },
  {
    title: 'Fasilitas Kelas Dunia',
    description: 'Menyediakan lingkungan belajar mutakhir mulai dari Lab Virtual Reality, Studio Musik kedap suara, hingga Kompleks Olahraga standar Olimpiade.',
    icon: 'Sparkles'
  },
  {
    title: 'Pembinaan Karakter & Leadership',
    description: 'Program kepemimpinan intensif terintegrasi dalam pembelajaran harian demi mencetak lulusan beretika tinggi, disiplin, dan cinta tanah air.',
    icon: 'Users'
  },
  {
    title: 'Jejaring Global & PTN',
    description: 'Kerja sama eksklusif dengan universitas negeri terbaik (UI, ITB, UGM) serta program persiapan belajar ke luar negeri (Counseling & TOEFL/IELTS).',
    icon: 'Globe'
  }
];

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: 'mipa',
    name: 'Matematika dan Ilmu Pengetahuan Alam (MIPA)',
    description: 'Fokus mendalam pada penguasaan sains dasar, matematika tingkat tinggi, metodologi penelitian, serta aplikasi praktis dalam teknologi modern.',
    code: 'MIPA',
    curriculum: 'Kurikulum Merdeka + Cambridge AS & A-Level Math/Physics/Chemistry',
    focusSubjects: ['Fisika Terapan', 'Kimia Analitik', 'Bioteknologi Dasar', 'Robotika & Coding'],
    careerPaths: ['Teknik/Kerekayasaan', 'Kedokteran & Kesehatan', 'Sains Data & IT', 'Riset Ilmiah'],
    image: 'https://images.unsplash.com/photo-1562774053-4d03719b3d30?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'ips',
    name: 'Ilmu Pengetahuan Sosial (IPS)',
    description: 'Mengembangkan pemikiran analitis tentang dinamika sosial, ekonomi global, hukum, tata kelola negara, serta jiwa kewirausahaan sosial yang adaptif.',
    code: 'IPS',
    curriculum: 'Kurikulum Merdeka + Case Method Leadership & Social Sciences',
    focusSubjects: ['Ekonomi Makro & Mikro', 'Sosiologi Modern', 'Hukum & Tata Negara', 'Kewirausahaan Digital'],
    careerPaths: ['Bisnis & Manajemen', 'Hukum & Diplomasi', 'Hubungan Internasional', 'Ekonomi Pembangunan'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bahasa',
    name: 'Bahasa dan Kebudayaan (IBB)',
    description: 'Fokus pada kompetensi komunikasi lintas budaya, penguasaan bahasa asing strategis, sastra, jurnalistik, seni kreatif, dan diplomasi kebudayaan.',
    code: 'IBB',
    curriculum: 'Kurikulum Merdeka + TOEFL/IELTS Prep + Multi-Language Proficiency',
    focusSubjects: ['Bahasa Mandarin & Jepang', 'Sastra Indonesia & Dunia', 'Creative Writing', 'Komunikasi Publik'],
    careerPaths: ['Sastra & Jurnalistik', 'Media & Periklanan', 'Penerjemah Internasional', 'Kementerian Luar Negeri'],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop'
  }
];

export const FACILITIES: FacilityItem[] = [
  {
    id: 'lab-stem',
    name: 'Laboratorium STEM & Virtual Reality',
    description: 'Laboratorium modern yang menggabungkan sains fisik dengan eksperimen virtual imersif berbasis teknologi VR Oculus.',
    category: 'Akademik',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'library',
    name: 'Perpustakaan Digital "Pustaka Nusantara"',
    description: 'Mengintegrasikan ribuan koleksi buku fisik dengan e-library berstandar internasional, ditunjang area membaca estetik bergaya kafe.',
    category: 'Akademik',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'classroom',
    name: 'Smart Classroom Interaktif',
    description: 'Ruang kelas ber-AC dengan Interactive Smart Board, audio terintegrasi, pencahayaan pintar, dan layout meja fleksibel kolaboratif.',
    category: 'Akademik',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'sports',
    name: 'Kompleks Olahraga "Wira Mandala"',
    description: 'Dilengkapi kolam renang ukuran semi-olimpiade, lapangan futsal/basket indoor berlantai kayu premium, dan lintasan lari atletik.',
    category: 'Olahraga',
    image: 'https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'music-studio',
    name: 'Studio Seni & Musik Kedap Suara',
    description: 'Fasilitas berekspresi seni visual, ruang rekaman modern, studio tari berlantai cermin penuh, dan ruang latihan orkestra sekolah.',
    category: 'Penunjang',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'amphitheater',
    name: 'Amphitheater Terbuka',
    description: 'Panggung terbuka hijau berarsitektur estetik, digunakan untuk pertunjukan seni luar ruangan, pameran karya, dan festival siswa.',
    category: 'Sosial',
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=800&auto=format&fit=crop'
  }
];

export const EXTRACURRICULARS: ExtracurricularItem[] = [
  {
    id: 'robotic',
    name: 'Nusantara Robotics Club (NRC)',
    description: 'Eksplorasi pembuatan robot, pemrograman mikrokontroler Arduino, IoT, kecerdasan buatan, dan persiapan turnamen kompetitif.',
    iconName: 'Cpu',
    image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7ef?q=80&w=800&auto=format&fit=crop',
    schedule: 'Selasa & Kamis | 15:45 - 17:30',
    achievements: [
      'Juara 1 Indonesia Robotic Olympiad (IRO) 2024 Kategori Future Engineers',
      'Medali Emas National Youth Robot Competition 2025'
    ]
  },
  {
    id: 'debate',
    name: 'English Debate & Model UN (MUN)',
    description: 'Mengasah teknik debat kompetitif parlemen Inggris, negosiasi, riset isu global, pidato publik (public speaking), dan simulasi sidang PBB.',
    iconName: 'MessageSquare',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop',
    schedule: 'Rabu & Jumat | 15:45 - 17:30',
    achievements: [
      'Juara 1 World Schools Debating Championship Regional DKI Jakarta 2025',
      'Best Delegate di Harvard Model UN Asia 2024'
    ]
  },
  {
    id: 'orchestra',
    name: 'Orkes Simfoni Lentera (OSL)',
    description: 'Mewadahi bakat bermusik instrumen gesek, tiup, perkusi, dan vokal klasik. Memproduksi resital seni tahunan berskala besar.',
    iconName: 'Music',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=800&auto=format&fit=crop',
    schedule: 'Senin | 15:45 - 18:00',
    achievements: [
      'Grand Prix Gold Award pada Festival Paduan Suara & Orkestra Nasional 2024',
      'Pengisi Acara Utama di Konser Kolaborasi Kebudayaan DKI Jakarta'
    ]
  },
  {
    id: 'scout',
    name: 'Pramuka Garuda Wira Nusantara',
    description: 'Pembentukan kepemimpinan tangguh, kepanduan alam terbuka, survival skills, kecintaan lingkungan, serta aksi pengabdian masyarakat.',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1473163928189-364b2c4e1135?q=80&w=800&auto=format&fit=crop',
    schedule: 'Sabtu | 08:00 - 11:30',
    achievements: [
      'Predikat Pramuka Garuda Teladan Tingkat Provinsi 2024',
      'Juara Umum Lomba Ketangkasan Kepramukaan Nasional 2025'
    ]
  },
  {
    id: 'basketball',
    name: 'Klub Futsal & Basket Elite',
    description: 'Pembinaan olahraga bola besar dengan sistem kepelatihan fisik terukur, didukung oleh mantan pelatih klub liga profesional nasional.',
    iconName: 'Dribbble',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop',
    schedule: 'Selasa & Jumat | 16:00 - 18:00',
    achievements: [
      'Juara 1 DBL Jakarta South Region 2025 (Kategori Basket Putra)',
      'Medali Perak Turnamen Futsal Pelajar Nasional 2024'
    ]
  },
  {
    id: 'cinematography',
    name: 'Lensa Nusantara (Seni Kreatif)',
    description: 'Pelatihan fotografi potret/lanskap, penulisan naskah film, teknik penyutradaraan, sinematografi, editing video, dan produksi podcast.',
    iconName: 'Camera',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop',
    schedule: 'Senin & Kamis | 15:45 - 17:30',
    achievements: [
      'Juara Terfavorit Festival Film Pendek Pelajar Kementerian Pendidikan 2024',
      'Pemenang Kategori Foto Jurnalistik Terbaik pada Lomba Pers Pelajar Nasional'
    ]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'Medali Emas Olimpiade Sains Nasional (OSN) - Fisika',
    category: 'Nasional',
    year: '2025',
    winner: 'Andi Hermawan (Kelas XI MIPA 1)',
    description: 'Meraih skor tertinggi di babak final nasional teori dan praktikum fisika optik kuantum.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'ach-2',
    title: 'Medali Emas - International Exhibition for Young Inventors (IEYI) di Tokyo',
    category: 'Internasional',
    year: '2025',
    winner: 'Tim Riset Smart-Watering (Keysha & Farhan)',
    description: 'Menemukan sistem penyiraman pertanian ramah lingkungan berbasis AI yang teruji menghemat air 40%.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'ach-3',
    title: 'Juara 1 Debat Bahasa Inggris - Asian Schools Championship',
    category: 'Internasional',
    year: '2024',
    winner: 'Nusantara Debate Squad (Siti, David, Clara)',
    description: 'Berhasil menyisihkan 64 tim sekolah elite se-Asia Tenggara dalam turnamen format Parliamentary.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'ach-4',
    title: 'Juara Umum FLS2N (Festival Lomba Seni Siswa Nasional) Provinsi Jakarta',
    category: 'Provinsi',
    year: '2024',
    winner: 'Tim Tari Tradisional & Desain Poster',
    description: 'Menyabet 3 medali emas dan 1 perak dalam kompetisi cipta seni dan penampilan kebudayaan daerah.',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'SMA Lentera Nusantara Raih Akreditasi "A" Unggul dengan Skor Tertinggi Se-Provinsi',
    summary: 'Badan Akreditasi Nasional mengumumkan SMA Lentera Nusantara meraih skor evaluasi 99, menempatkannya di jajaran teratas sekolah teladan.',
    content: 'Proses penilaian akreditasi yang berlangsung ketat selama tiga bulan melingkupi mutu lulusan, proses pembelajaran, mutu guru, dan manajemen sekolah. Hasil ini mencerminkan komitmen berkelanjutan dari seluruh tim pengajar, komite orang tua, dan siswa dalam mewujudkan ekosistem sekolah bertaraf dunia.',
    category: 'Pengumuman',
    date: '28 Juni 2026',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop',
    author: 'Tim Humas',
    views: 1245
  },
  {
    id: 'news-2',
    title: 'Inovasi Siswa MIPA: Robot Pemilah Sampah Berbasis AI Menang di Kancah Nasional',
    summary: 'Tim robotik sekolah mengembangkan teknologi robot pintar yang mampu mendeteksi dan memilah 5 kategori sampah secara mandiri.',
    content: 'Menggunakan sensor computer vision yang diprogram mandiri oleh siswa kelas XI, robot pemilah sampah pintar "NusaClean" berhasil memukau dewan juri di National Scientific Expo 2026. Teknologi ini direncanakan akan diimplementasikan secara nyata di lingkungan kantin hijau sekolah mulai bulan depan.',
    category: 'Prestasi',
    date: '15 Juni 2026',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
    author: 'Guru Pembina STEM',
    views: 940
  },
  {
    id: 'news-3',
    title: 'Kunjungan Delegasi National University of Singapore (NUS) ke Kampus Lentera',
    summary: 'Delegasi NUS menggelar lokakarya riset bersama sekaligus menawarkan program jalur beasiswa langsung untuk siswa berprestasi.',
    content: 'Dalam kunjungan resmi ini, para profesor dari NUS berdiskusi dengan siswa MIPA mengenai riset biologi kelautan. Pihak NUS mengapresiasi kualitas portofolio riset siswa SMA Lentera Nusantara dan sepakat membuka kuota beasiswa masuk bebas tes tulis bagi 3 lulusan terbaik di bidang sains.',
    category: 'Kegiatan',
    date: '02 Juni 2026',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop',
    author: 'Konselor Akademik',
    views: 820
  },
  {
    id: 'news-4',
    title: 'Informasi PPDB Ajaran 2026/2027: Jalur Prestasi dan Beasiswa Penuh Mulai Dibuka',
    summary: 'Kesempatan emas bergabung bersama SMA Lentera Nusantara. Pendaftaran Jalur Beasiswa Prestasi resmi dibuka hingga akhir bulan depan.',
    content: 'Sebagai bentuk kepedulian terhadap kemajuan pendidikan Indonesia, kami menyediakan beasiswa penuh (pembebasan SPP dan Uang Pangkal) untuk calon siswa dengan prestasi akademis nasional, peraih medali olimpiade, atau atlet provinsi. Persyaratan administrasi dan tes seleksi dapat diakses di portal pendaftaran online kami.',
    category: 'Pengumuman',
    date: '25 Mei 2026',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    author: 'Panitia PPDB',
    views: 3120
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Budi Santoso',
    role: 'Alumni',
    batchOrClass: 'Angkatan 2022 - Kyoto University, Japan',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop',
    content: 'Belajar di SMA Lentera Nusantara benar-benar mempersiapkan mental dan cara berpikir riset saya. Guru-guru di sini memperlakukan kami sebagai ilmuwan muda. Kurikulum Cambridge pendamping sangat memudahkan saya lolos beasiswa penuh MEXT di Jepang.',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Dr. Rina Wijaya',
    role: 'Orang Tua',
    batchOrClass: 'Ibu dari Keysha Amanda (Kelas XI MIPA 1)',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    content: 'Kami sangat bersyukur memercayakan pendidikan putri kami di sini. Tidak hanya berprestasi di riset sains, Keysha kini tumbuh menjadi remaja yang disiplin, berempati tinggi, dan fasih berbahasa Inggris. Manajemen sekolah luar biasa transparan.',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Zahra Muthia',
    role: 'Siswa Aktif',
    batchOrClass: 'Ketua OSIS - Kelas XII IPS',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    content: 'Atmosfer di Lentera Nusantara sangat dinamis namun saling mendukung. Tidak ada persaingan toxic, kami didorong berkolaborasi. Klub Debat dan wadah OSIS membuat saya berani memimpin program besar beranggaran puluhan juta di sekolah!',
    rating: 5
  }
];

export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    step: 1,
    title: 'Pendaftaran Online',
    description: 'Mengisi formulir data diri, melampirkan rapor SMP Semester 1-5, akta kelahiran, dan kartu keluarga secara online di portal PPDB.',
    period: 'Gelombang 1: Oktober - Desember | Gelombang 2: Januari - Maret'
  },
  {
    step: 2,
    title: 'Asesmen Bakat & Akademik',
    description: 'Mengikuti ujian potensi akademik, penguasaan literasi bahasa Inggris, penalaran matematika dasar, serta asesmen psikologis (psikotes).',
    period: 'Gelombang 1: Pertengahan Januari | Gelombang 2: Pertengahan April'
  },
  {
    step: 3,
    title: 'Wawancara Siswa & Orang Tua',
    description: 'Sesi tatap muka bersama pimpinan sekolah untuk menyelaraskan komitmen mendidik, potensi minat bakat siswa, serta kebutuhan khusus.',
    period: 'Maksimal 7 hari setelah pengumuman kelulusan ujian tertulis'
  },
  {
    step: 4,
    title: 'Registrasi Ulang & Orientasi',
    description: 'Pengukuran seragam, penyelesaian administrasi biaya pendidikan, pengenalan sistem pembelajaran digital sekolah, dan masa orientasi (MPLS).',
    period: 'Mei - Juli 2026'
  }
];

export const FAQS = [
  {
    question: 'Apakah SMA Lentera Nusantara menggunakan Kurikulum Internasional penuh?',
    answer: 'Kami mengadopsi integrasi harmonis: Kurikulum Merdeka sebagai fondasi nasional wajib dan Kurikulum Cambridge Assessment International Education (A-Level) sebagai pendamping untuk mata pelajaran sains, matematika, dan bahasa Inggris guna memudahkan adaptasi kuliah ke luar negeri.'
  },
  {
    question: 'Bagaimana sistem seleksi beasiswa prestasi di sekolah ini?',
    answer: 'Beasiswa prestasi terbagi menjadi Beasiswa Akademik (berdasarkan medali OSN atau nilai rapor rata-rata > 90) dan Beasiswa Non-Akademik (Seni/Olahraga tingkat provinsi/nasional). Siswa terpilih dibebaskan dari Dana Pengembangan (Uang Pangkal) serta mendapatkan potongan SPP bulanan hingga 100%.'
  },
  {
    question: 'Apakah sekolah menyediakan asrama (boarding school) untuk siswa luar kota?',
    answer: 'Ya, kami menyediakan fasilitas Asrama Premium (Dormitory) terpisah untuk putra dan putri dengan pengawasan mentor pengasuh 24 jam, bimbingan belajar malam hari, program pengembangan bahasa, dan catering gizi seimbang.'
  },
  {
    question: 'Bagaimana persentase lulusan sekolah ini diterima di perguruan tinggi?',
    answer: 'Setiap tahunnya, lebih dari 75% lulusan kami berhasil menembus PTN unggulan Indonesia (UI, ITB, UGM, Unpad) melalui jalur prestasi (SNBP) maupun tes (SNBT). Sisanya (sekitar 23%) melanjutkan studi ke berbagai universitas ternama dunia di Singapura, Jepang, Australia, Amerika Serikat, dan Eropa.'
  }
];

export const TUITION_CALCULATOR_OPTIONS = {
  gradeBase: [
    { id: 'regular-school', label: 'Kelas Reguler (Non-Asrama)', costAdmission: 25000000, costMonthly: 2500000 },
    { id: 'boarding-school', label: 'Kelas Asrama (Boarding)', costAdmission: 40000000, costMonthly: 5500000 }
  ],
  pathOptions: [
    { id: 'regular-path', label: 'Jalur Reguler / Umum', discountPct: 0 },
    { id: 'ach-regional', label: 'Jalur Prestasi Daerah (Kota/Provinsi) - Diskon 25% Uang Pangkal', discountPct: 25 },
    { id: 'ach-national', label: 'Jalur Prestasi Nasional / OSN - Diskon 50% Uang Pangkal', discountPct: 50 },
    { id: 'scholastic', label: 'Jalur Beasiswa Penuh (Seleksi Khusus) - Diskon 100% Uang Pangkal & 50% SPP', discountPct: 100, sppDiscountPct: 50 }
  ],
  extraServices: [
    { id: 'catering', label: 'Catering Makan Siang Sehat (Khusus Reguler)', cost: 650000 },
    { id: 'shuttle', label: 'Antar Jemput Bus Sekolah Premium (Bulanan)', cost: 800000 },
    { id: 'cambridge-exam', label: 'Paket Ujian Cambridge Internasional (Tahunan dibagi 12)', cost: 400000 }
  ]
};
