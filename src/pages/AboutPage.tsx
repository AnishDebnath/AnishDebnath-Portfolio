import React, { useState } from 'react';
import { PageRoute } from '../types';
import { SectionHeader } from '../components/SectionHeader';
import { TechnologiesSection } from '../components/TechnologiesSection';
import { WorkProcessSection } from '../components/WorkProcessSection';
import { StudySection } from '../components/StudySection';
import { FaqSection } from '../components/FaqSection';
import { CtaBanner } from '../components/CtaBanner';
import { CheckSquare, ChevronLeft, ChevronRight, LayoutDashboard, Layers, Users } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute, detailId?: string) => void;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface ExperienceImage {
  url: string;
  title: string;
}

interface ExperienceItemData {
  id: string;
  role: string;
  company: string;
  period: string;
  bullets: string[];
  images: ExperienceImage[];
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: "What's your typical design process like?",
    answer: "I follow a clear process that starts with understanding your goals, then moves through wireframing, visual design, and final delivery with your feedback at every step.",
  },
  {
    id: 'faq-2',
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on scope, but a standard website or mobile app interface design usually takes 2 to 4 weeks from concept to final handoff.",
  },
  {
    id: 'faq-3',
    question: "Do you also offer development or only design?",
    answer: "I specialize primarily in UI/UX design, design systems, and prototyping. However, I partner closely with expert developers or deliver clean, production-ready React/Framer code when requested.",
  },
  {
    id: 'faq-4',
    question: "What tools do you use for your design work?",
    answer: "My primary tool stack includes Figma for wireframing and design systems, Framer & Webflow for interactive site building, Notion for workflow management, and Adobe CC for graphics.",
  },
  {
    id: 'faq-5',
    question: "Can you redesign my existing website instead of starting from scratch?",
    answer: "Yes, absolutely! I regularly perform comprehensive UX audits and full site redesigns to elevate conversions, modernize aesthetics, and improve overall user experience.",
  },
];

const EXPERIENCE_DATA: ExperienceItemData[] = [
  {
    id: 'exp-1',
    role: 'Senior UI/UX Designer',
    company: 'PixelForge Studio',
    period: '2022 – Present',
    bullets: [
      'Led the design of over 25+ SaaS and e-commerce platforms focused on conversion optimization.',
      'Collaborated with developers and stakeholders to create seamless user journeys and scalable design systems.',
      'Mentored junior designers and established the studio\'s design workflow using Figma and Notion.',
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        title: 'SaaS Analytics Dashboard UI',
      },
      {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        title: 'Conversion Design System',
      },
      {
        url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
        title: 'E-Commerce Platform Redesign',
      },
    ],
  },
  {
    id: 'exp-2',
    role: 'Product Designer',
    company: 'BrightTech Solutions',
    period: '2019 – 2022',
    bullets: [
      'Designed web and mobile interfaces for B2B SaaS products serving 100k+ users.',
      'Conducted user research, usability testing, and data-driven design iterations.',
      'Improved product retention by 18% through simplified onboarding UX.',
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80',
        title: 'B2B Web Application',
      },
      {
        url: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80',
        title: 'Usability Testing & Wireframing',
      },
      {
        url: 'https://images.unsplash.com/photo-1542744094-3a3121699039?auto=format&fit=crop&w=1200&q=80',
        title: 'Onboarding Workflow Screens',
      },
    ],
  },
  {
    id: 'exp-3',
    role: 'UI Designer',
    company: 'Creative Hive Agency',
    period: '2017 – 2019',
    bullets: [
      'Created landing pages and marketing websites for startups across fintech, real estate, and law industries.',
      'Collaborated closely with marketing teams to align design with brand identity and goals.',
      'Delivered 40+ client projects with a strong focus on aesthetics and performance.',
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
        title: 'Fintech Landing Platform',
      },
      {
        url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
        title: 'Real Estate Booking Interface',
      },
      {
        url: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80',
        title: 'Legal Agency Web Experience',
      },
    ],
  },
];

const ExperienceImageGrid: React.FC<{ images: ExperienceImage[] }> = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="mt-5 max-w-xl grid grid-cols-1 sm:grid-cols-3 gap-3">
      {images.map((img, i) => (
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
  );
};

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<string>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaq(prev => prev === id ? '' : id);
  };

  return (
    <main className="bg-[#f5f5f5] text-[#0d130d] pt-8 sm:pt-12 pb-20">
      
      {/* 1. ABOUT ANTONY SECTION HEADER */}
      <div className="max-w-[980px] mx-auto px-4 sm:px-6">
        <SectionHeader
          title="ABOUT ANTONY"
          subtitle=""
          icon={
            <svg className="w-6 h-6 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
      </div>

      {/* 2. HERO PORTRAIT BANNER */}
      <div className="max-w-[1085px] mx-auto px-4 sm:px-6 mb-16 sm:mb-20">
        <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden border border-neutral-300 bg-gradient-to-r from-[#f2512d] via-[#e74723] to-[#801e0a] aspect-[16/9] sm:aspect-[2.4/1] shadow-sm">
          <img
            src="https://framerusercontent.com/images/gIB852FnoSAoaST2b7XHe096Ls.png?scale-down-to=2048"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=2000&q=80";
            }}
            alt="Antony Portrait"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* 3. STATS & BIO ROW */}
      <div className="max-w-[980px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start pb-20 sm:pb-28">
          
          {/* Left: Stats Numbers */}
          <div className="md:col-span-4 space-y-8">
            <div>
              <span className="font-display font-black text-5xl sm:text-6xl text-[#0d130d] block leading-none">
                80+
              </span>
              <span className="font-sans font-medium text-base sm:text-lg text-[#e74723] block mt-1.5">
                Successful Projects
              </span>
            </div>

            <div>
              <span className="font-display font-black text-5xl sm:text-6xl text-[#0d130d] block leading-none">
                95%
              </span>
              <span className="font-sans font-medium text-base sm:text-lg text-[#e74723] block mt-1.5">
                Client Satisfaction Rate
              </span>
            </div>

            <div>
              <span className="font-display font-black text-5xl sm:text-6xl text-[#0d130d] block leading-none">
                06+
              </span>
              <span className="font-sans font-medium text-base sm:text-lg text-[#e74723] block mt-1.5">
                Years of Experience
              </span>
            </div>
          </div>

          {/* Right: Bio Text Paragraphs */}
          <div className="md:col-span-8 space-y-6 font-sans text-base sm:text-lg text-[#2c332c] leading-relaxed">
            <p>
              <span className="font-medium text-[#e74723]">I'm David Antony,</span> a passionate UI/UX designer with over 6 years of experience creating clean, conversion-focused digital experiences. I specialize in designing modern websites, landing pages, and SaaS platforms that blend usability with strong visual appeal.
            </p>
            <p>
              <span className="font-medium text-[#e74723]">My design philosophy</span> is simple — clarity, consistency, and creativity. I believe a great design not only looks good but solves real problems and drives business results. Over the years, I’ve collaborated with startups, agencies, and global brands across industries like real estate, e-commerce, tech, and law.
            </p>
          </div>

        </div>
      </div>

      {/* 4. EXPERIENCE SECTION (DARK THEME) */}
      <section className="relative bg-[#060913] text-white py-20 sm:py-28 my-16 sm:my-24">
        {/* Background glow effects matching footer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,81,45,0.12),rgba(255,255,255,0))]" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#f2512d]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[980px] mx-auto px-4 sm:px-6 relative z-10">
          
          <SectionHeader
            title="EXPERIENCE"
            subtitle="Years of creating user-centered designs that make an impact."
            dark={true}
            icon={
              <svg className="w-6 h-6 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />

          {/* Experience List */}
          <div className="space-y-12 sm:space-y-16 pb-20 border-b border-neutral-800">
            {EXPERIENCE_DATA.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-12 items-start ${
                  index < EXPERIENCE_DATA.length - 1 ? 'pb-12 border-b border-dashed border-neutral-800/80' : ''
                }`}
              >
                {/* Left: Role & Company */}
                <div className="md:col-span-5">
                  <h3 className="font-sans font-bold text-lg sm:text-xl text-white">
                    {exp.role} — {exp.company}
                  </h3>
                  <span className="font-sans font-medium text-sm text-[#e74723] block mt-1">
                    {exp.period}
                  </span>
                </div>

                {/* Right: Description & Image Slide */}
                <div className="md:col-span-7">
                  {/* Description Bullets */}
                  <ul className="space-y-3 font-sans text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-neutral-500 shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Image side by side boxes right after description */}
                  <ExperienceImageGrid images={exp.images} />
                </div>
              </div>
            ))}
          </div>

          {/* Currently & Quote Row */}
          <div className="pt-16 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            
            {/* Left Quote */}
            <div className="md:col-span-6 space-y-3">
              <span className="font-serif text-5xl sm:text-6xl text-neutral-600 block leading-none font-bold">
                “
              </span>
              <p className="font-sans font-medium text-xl sm:text-2xl text-[#e74723] leading-snug">
                Design is the silent ambassador of every idea we bring to life.
              </p>
            </div>

            {/* Right Currently list */}
            <div className="md:col-span-6 space-y-4">
              <h4 className="font-display font-black text-2xl uppercase tracking-wider text-white mb-4">
                CURRENTLY
              </h4>
              <ul className="space-y-3.5 font-sans text-sm sm:text-base text-neutral-300">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md border border-neutral-700 bg-neutral-900/90 flex items-center justify-center shrink-0 shadow-xs">
                    <LayoutDashboard className="w-3.5 h-3.5 text-[#1fc932]" />
                  </div>
                  <span>Designing a modern SaaS dashboard</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md border border-neutral-700 bg-neutral-900/90 flex items-center justify-center shrink-0 shadow-xs">
                    <Layers className="w-3.5 h-3.5 text-[#1fc932]" />
                  </div>
                  <span>Building a personal design system</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md border border-neutral-700 bg-neutral-900/90 flex items-center justify-center shrink-0 shadow-xs">
                    <Users className="w-3.5 h-3.5 text-[#1fc932]" />
                  </div>
                  <span>Collaborating with a startup team</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 5. TECHNOLOGIES I USE SECTION */}
      <TechnologiesSection />

      {/* WORK PROCESS SECTION */}
      <WorkProcessSection onNavigate={onNavigate} />

      {/* 6. STUDY SHOWCASE SECTION */}
      <StudySection />

      {/* 7. FAQ SECTION */}
      <FaqSection />

      {/* 6. CTA BANNER */}
      <CtaBanner onNavigate={onNavigate} />

    </main>
  );
};
