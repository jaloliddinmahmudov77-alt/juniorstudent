import gitCertificateImage from '../assets/images/git.jpg';
import javascriptCertificateImage from '../assets/images/js.jpg';
import reactCertificateImage from '../assets/images/react.jpg';
import bootstrapCertificateImage from '../assets/images/bootstrap.jpg';
import jaloliddinImage from '../assets/images/jaloliddin.png';

/**
 * JUNIOR STUDENT PORTFOLIO DATA
 * 
 * Barcha asosiy ma'lumotlar ushbu faylda saqlanadi.
 */

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  link: string;
  githubUrl?: string;
  previewImage: string;
  featuredPoints: string[];
  status: string;
  category: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'code' | 'design' | 'tools';
  description: string;
  proficiency: number;
  highlight: string;
  iconName: string;
  badge: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  credentialId: string;
  category: string;
  description: string;
  skillsCovered: string[];
  badge: string;
  status: string;
  previewImage?: string;
  isSecret?: boolean;
}

// ==========================================
// ASOSIY TALABA MA'LUMOTLARI (PERSONAL INFO)
// ==========================================
export const personalInfo = {
  name: "Junior Student",
  legalName: "Jaloliddin",
  role: "Student Developer & Creator",
  tagline: "Men O'quvchiman. Men Dasturchiman. Men Junior Studentman.",
  subGreeting: "Salom, men Jaloliddin Mahmudov 👋",
  bio: "Men dasturlash, sun’iy intellekt, web development va zamonaviy texnologiyalarni o‘rganayotgan yosh dasturchi-man.",
  aboutText: "Men zamonaviy texnologiyalarni o‘rganishga qiziqadigan yosh dasturchi-man. Hozirda web development, Python, AI, GitHub va boshqa IT yo‘nalishlarida bilimlarimни rivojlantiryapman. Har kuni yangi bilimlar olish, real loyihalar yaratish va kelajakda xalqaro miqyosdagi professional dasturchi bo'lish asosiy maqsadim hisoblanadi.",
  avatarImage: jaloliddinImage,
  location: "O'zbekiston",
  statusBadge: "O'rganishda va yangi loyihalarga tayyor",
  stats: {
    projectsCount: "3+",
    technologiesLearned: "8+",
    certificatesCount: "4+",
    enthusiasmLevel: "100%",
  },
  socials: {
    github: "https://github.com/jaloliddinmahmudov77-alt",
    telegram: "https://t.me/Mahmudov567",
    telegramHandle: "@Mahmudov567",
    email: "jaloliddinmahmudov77@gmail.com",
  },
};

// ==========================================
// REAL LOYIHALAR RO'YXATI (EXACT 3 PROJECTS)
// ==========================================
export const projectsData: ProjectItem[] = [
  {
    id: "project-01",
    number: "01",
    title: "16-Maktab",
    description: "16-maktab uchun yaratilgan zamonaviy web loyiha.",
    fullDescription: "Maktab o'quvchilari, o'qituvchilar va ota-onalar uchun maktab hayoti, yangiliklar va ta'lim jarayonlarini yorituvchi zamonaviy, qulay va to'liq moslashuvchan veb-portal.",
    technologies: ["HTML", "CSS", "JavaScript", "Web Design"],
    link: "https://16maktab.vercel.app/",
    githubUrl: "https://github.com/jaloliddinmahmudov77-alt",
    previewImage: "/src/assets/images/school_website_mockup_1791205081482.jpg",
    featuredPoints: [
      "Mobil va kompyuter qurilmalariga to'liq moslashuvchan layout",
      "Maktab yangiliklari va e'lonlar uchun qulay bo'limlar",
      "Yengil, tez yuklanuvchi toza kod arxitekturasi"
    ],
    status: "Muvaffaqiyatli ishga tushirilgan",
    category: "Ta'limiy Web Portal",
  },
  {
    id: "project-02",
    number: "02",
    title: "Aziz Ustozim",
    description: "Ustozlar kuni uchun yaratilgan zamonaviy va interaktiv tabrik web sayti.",
    fullDescription: "Qadrli ustozlarimiz mehnatini e'zozlash, samimiy dil izhorlari va tabriklarni interaktiv shaklda yetkazish uchun yaratilgan bayramona veb-ilova.",
    technologies: ["HTML", "CSS", "JavaScript", "UI/UX"],
    link: "https://azizustozim.vercel.app/",
    githubUrl: "https://github.com/jaloliddinmahmudov77-alt",
    previewImage: "/src/assets/images/greeting_website_mockup_1791205099171.jpg",
    featuredPoints: [
      "Bayramona interaktiv animatsiyalar va musiqiy/matnli tabriklar",
      "Zamonaviy UI/UX dizayn va hissiyot bag'ishlovchi elementlar",
      "Bir bosish bilan do'stlar va ustozlarga ulashish imkoniyati"
    ],
    status: "Jonli Web Loyiha",
    category: "Interaktiv Tabrik Sayti",
  },
  {
    id: "project-03",
    number: "03",
    title: "Jaloliddin Portfolio",
    description: "Shaxsiy portfolio va dasturlash loyihalarini namoyish qilish uchun yaratilgan professional web sayt.",
    fullDescription: "Dasturchilik yo'lidagi barcha amaliy ishlar, ko'nikmalar va loyihalarni dunyoga tanituvchi zamonaviy portfolio platformasi.",
    technologies: ["HTML", "CSS", "JavaScript", "Portfolio"],
    link: "https://jaloliddinportfolio.vercel.app/",
    githubUrl: "https://github.com/jaloliddinmahmudov77-alt",
    previewImage: "/src/assets/images/portfolio_mockup_preview_1791205114542.jpg",
    featuredPoints: [
      "Zamonaviy va professional shaxsiy brending dizayni",
      "Barcha loyihalar va aloqa kanallariga tezkor kirish",
      "Yengil va optimallashtirilgan foydalanuvchi tajribasi"
    ],
    status: "Jonli Portfolio Sayti",
    category: "Shaxsiy Portfolio",
  },
];

// ==========================================
// KO'NIKMALAR (SKILLS)
// ==========================================
export const skillsData: SkillItem[] = [
  {
    id: "html",
    name: "HTML5",
    category: "code",
    description: "Zamonaviy semantik teglash, qulay tuzilma va SEO-optimallashtirilgan sahifalar.",
    proficiency: 95,
    highlight: "Semantik & Toza struktura",
    iconName: "Code2",
    badge: "Web Core",
  },
  {
    id: "css",
    name: "CSS3 & Styling",
    category: "code",
    description: "Flexbox, Grid, zamonaviy animatsiyalar, responsivlik va vizual effektlar.",
    proficiency: 90,
    highlight: "Responsive & Animations",
    iconName: "Palette",
    badge: "Visuals",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "code",
    description: "DOM boshqaruvi, ES6+ xususiyatlari, interaktiv sahifalar va asinxron funksiyalar.",
    proficiency: 85,
    highlight: "Interaktiv Logika",
    iconName: "Sparkles",
    badge: "Core Logic",
  },
  {
    id: "python",
    name: "Python",
    category: "code",
    description: "Dasturlash asoslari, algoritmik fikrlash, skriptlar va ma'lumotlar bilan ishlash.",
    proficiency: 78,
    highlight: "Algoritmlar & Skriptlar",
    iconName: "Terminal",
    badge: "Backend & Data",
  },
  {
    id: "github",
    name: "Git & GitHub",
    category: "tools",
    description: "Versiyalar nazorati, git commits, branches, repositories va open-source faollik.",
    proficiency: 84,
    highlight: "Versiyalar boshqaruvi",
    iconName: "GitBranch",
    badge: "Workflow",
  },
  {
    id: "ai",
    name: "AI & Modern Tools",
    category: "tools",
    description: "Sun'iy intellekt vositalari bilan ishlash, prompt muhandisligi va AI yordamida tezkor dasturlash.",
    proficiency: 82,
    highlight: "Kelajak texnologiyalari",
    iconName: "Cpu",
    badge: "Innovation",
  },
  {
    id: "uiux",
    name: "UI / UX Design",
    category: "design",
    description: "Foydalanuvchilar uchun qulay interfeyslar, ranglar uyg'unligi va qulay navigatsiya.",
    proficiency: 80,
    highlight: "Foydalanuvchi tajribasi",
    iconName: "Layout",
    badge: "Interface",
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    category: "design",
    description: "Veb elementlar, bannerlar, ikonlar va vizual kontentlar tayyorlash mahorati.",
    proficiency: 75,
    highlight: "Vizual brending",
    iconName: "PenTool",
    badge: "Creativity",
  },
];

// ==========================================
// SERTIFIKATLAR (CERTIFICATES)
// ==========================================
export const certificatesData: CertificateItem[] = [
  {
    id: "cert-1",
    title: "JavaScript Web Development",
    issuer: "Junior IT Academy",
    credentialId: "JIT-WD-8842",
    category: "Web Dasturlash",
    description: "JavaScript asoslari, web-sahifalarga interaktivlik qo‘shish va frontend dasturlash bo‘yicha olingan sertifikat.",
    skillsCovered: ["JavaScript", "Web dasturlash", "Interaktivlik"],
    badge: "JavaScript",
    status: "Tasdiqlangan",
    previewImage: javascriptCertificateImage,
  },
  {
    id: "cert-2",
    title: "React Frontend Development",
    issuer: "Junior IT Academy",
    credentialId: "REACT-DEV-1093",
    category: "Frontend Dasturlash",
    description: "React yordamida zamonaviy, tezkor va komponentlarga asoslangan web-ilovalar yaratish bo‘yicha olingan sertifikat.",
    skillsCovered: ["React", "Komponentlar", "Frontend", "Web-ilovalar"],
    badge: "React",
    status: "Tasdiqlangan",
    previewImage: reactCertificateImage,
  },
  {
    id: "cert-3",
    title: "Git Version Control",
    issuer: "Junior IT Academy",
    credentialId: "GIT-HUB-5501",
    category: "Dasturchi Vositalari",
    description: "Git va GitHub yordamida kod versiyalarini boshqarish, o‘zgarishlarni kuzatish va loyihalar bilan ishlash bo‘yicha olingan sertifikat.",
    skillsCovered: ["Git", "GitHub", "Versiyalar nazorati"],
    badge: "Git",
    status: "Tasdiqlangan",
    previewImage: gitCertificateImage,
  },
  {
    id: "cert-4",
    title: "Bootstrap Web Design",
    issuer: "Junior IT Academy",
    credentialId: "BOOTSTRAP-2404",
    category: "Web Dizayn",
    description: "Bootstrap yordamida moslashuvchan va professional web-sahifalar yaratish bo‘yicha olingan sertifikat.",
    skillsCovered: ["Bootstrap", "Responsive Design", "Web dizayn"],
    badge: "Bootstrap",
    status: "Tasdiqlangan",
    previewImage: bootstrapCertificateImage,
  },
];
