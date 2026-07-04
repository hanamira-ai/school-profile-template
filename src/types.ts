export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: 'Akademik' | 'Kegiatan' | 'Prestasi' | 'Pengumuman';
  date: string;
  image: string;
  author: string;
  views: number;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Nasional' | 'Internasional' | 'Provinsi';
  year: string;
  winner: string;
  description: string;
  image: string;
}

export interface FacilityItem {
  id: string;
  name: string;
  description: string;
  category: 'Akademik' | 'Olahraga' | 'Sosial' | 'Penunjang';
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: 'Alumni' | 'Orang Tua' | 'Siswa Aktif';
  batchOrClass: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface ExtracurricularItem {
  id: string;
  name: string;
  description: string;
  iconName: string; // Lucide icon identifier
  image: string;
  schedule: string;
  achievements: string[];
}

export interface AcademicProgram {
  id: string;
  name: string;
  description: string;
  code: string;
  curriculum: string;
  focusSubjects: string[];
  careerPaths: string[];
  image: string;
}

export interface AdmissionStep {
  step: number;
  title: string;
  description: string;
  period: string;
}

export interface InquiryFormState {
  fullName: string;
  email: string;
  phone: string;
  originSchool: string;
  selectedProgram: string;
  guardianName: string;
  address: string;
  message: string;
}
