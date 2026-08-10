import React from 'react';
import { SectionHeader } from './SectionHeader';

interface StudyImage {
  url: string;
  title: string;
}

interface StudyItemData {
  id: string;
  degree: string;
  institution: string;
  period: string;
  bullets: string[];
  images: StudyImage[];
}

const STUDY_DATA: StudyItemData[] = [
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

export const StudySection: React.FC = () => {
  return (
    <section className="relative bg-[#060913] text-white py-16 sm:py-24 my-16 sm:my-24">
      {/* Background glow effects matching footer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,81,45,0.12),rgba(255,255,255,0))]" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#f2512d]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[980px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          title="STUDY & EDUCATION"
          subtitle="Academic foundation, specialized certifications, and ongoing design research."
          dark={true}
          icon={
            <svg className="w-6 h-6 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 10v6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />

        {/* Study Items List */}
        <div className="space-y-12 sm:space-y-16">
          {STUDY_DATA.map((study, index) => (
            <div 
              key={study.id} 
              className={`grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-12 items-start ${
                index < STUDY_DATA.length - 1 ? 'pb-12 border-b border-dashed border-neutral-800/80' : ''
              }`}
            >
              {/* Left: Degree & Institution */}
              <div className="md:col-span-5">
                <h3 className="font-sans font-bold text-lg sm:text-xl text-white">
                  {study.degree} — {study.institution}
                </h3>
                <span className="font-sans font-medium text-sm text-[#e74723] block mt-1">
                  {study.period}
                </span>
              </div>

              {/* Right: Description Bullets & Image Cards Grid */}
              <div className="md:col-span-7">
                <ul className="space-y-3 font-sans text-sm sm:text-base text-neutral-300 leading-relaxed">
                  {study.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-neutral-500 shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Image side by side boxes */}
                <div className="mt-5 max-w-xl grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {study.images.map((img, i) => (
                    <div 
                      key={i} 
                      className="group relative rounded-xl overflow-hidden border border-neutral-800/90 bg-[#121812] aspect-[4/3] shadow-xs"
                    >
                      <img
                        src={img.url}
                        alt={img.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-2">
                        <span className="font-sans font-medium text-[11px] text-neutral-200 line-clamp-1 block text-center">
                          {img.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
