export interface StudyImage {
  url: string;
  title: string;
}

export interface StudyItemData {
  id: string;
  degree: string;
  institution: string;
  period: string;
  bullets: string[];
  images: StudyImage[];
}

export const STUDY_DATA: StudyItemData[] = [
  {
    id: 'study-1',
    degree: 'B.Sc. in Human-Computer Interaction',
    institution: 'University of Design & Technology',
    period: '2013 – 2017',
    bullets: [
      'Graduated with First Class Honors, focusing on UX Architecture, Cognitive Ergonomics, and Interactive Media.',
      'Conducted capstone research on micro-interactions, motion design physics, and web accessibility standards.',
      'Led the Student UX Guild, hosting weekly wireframing bootcamps and design critique sessions.',
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
        title: 'HCI Capstone Research Project',
      },
      {
        url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
        title: 'Interaction Design Lab',
      },
      {
        url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
        title: 'Digital Wireframing Workshop',
      },
    ],
  },
  {
    id: 'study-2',
    degree: 'Advanced UI/UX & Design Systems Specialization',
    institution: 'Interaction Design Institute & NN/g',
    period: '2018 – 2019',
    bullets: [
      'Mastered advanced heuristic evaluation, complex information architecture, and multi-brand design tokens.',
      'Completed intensive case studies on enterprise SaaS accessibility compliance (WCAG 2.1 AA) and micro-frontends.',
      'Awarded Certificate of Distinction in User Research & Data-Driven Usability Testing.',
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
        title: 'Design Systems Architecture',
      },
      {
        url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
        title: 'Usability Testing & Analytics',
      },
      {
        url: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80',
        title: 'UX Strategy & Frameworks',
      },
    ],
  },
  {
    id: 'study-3',
    degree: 'Master Certification in Design Engineering & Framer',
    institution: 'Frontend & Interactive Design Academy',
    period: '2020 – 2021',
    bullets: [
      'Specialized in bridging the gap between Figma design systems and production-ready React / Framer applications.',
      'Deep-dived into WebGL graphics, CSS fluid typography scales, and advanced responsive layout mechanics.',
      'Built 12+ experimental interactive prototypes published in leading design showcases.',
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
        title: 'Framer Physics Motion Lab',
      },
      {
        url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
        title: 'Design-to-Code Engineering',
      },
      {
        url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
        title: 'Interactive Web Components',
      },
    ],
  },
];
