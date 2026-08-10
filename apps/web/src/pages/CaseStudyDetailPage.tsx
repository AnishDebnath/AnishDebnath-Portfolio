import React, { useEffect } from 'react';
import { PageRoute } from '../types';
import { CASE_STUDIES } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { FaqSection } from '../components/FaqSection';
import { CtaBanner } from '../components/CtaBanner';
import { Calendar, ArrowUpRight } from 'lucide-react';

interface CaseStudyDetailPageProps {
  projectId: string;
  onNavigate: (route: PageRoute, detailId?: string) => void;
}

export const CaseStudyDetailPage: React.FC<CaseStudyDetailPageProps> = ({
  projectId,
  onNavigate
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const project = CASE_STUDIES.find(p => p.id === projectId) || CASE_STUDIES[0];
  const otherProjects = CASE_STUDIES.filter(p => p.id !== project.id);

  const defaultBullets = [
    'Developed a visual language inspired by tropical elements — ocean hues, palm textures, and sunset gradients.',
    'Designed a flexible logo system that embodies both relaxation and sophistication through organic shapes and fluid typography.',
    'Curated a color palette of turquoise, coral, sand, and deep blue to evoke coastal energy and luxury.',
    'Established brand typography that feels elegant yet approachable, complementing the resort\'s modern aesthetic.',
    'Created brand collateral such as stationery, social templates, signage, and digital ads to maintain a consistent visual presence.'
  ];

  const solutionBullets = project.solutionBullets && project.solutionBullets.length > 0
    ? project.solutionBullets
    : defaultBullets;

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-[#0d130d] font-sans selection:bg-[#f2512d] selection:text-white pt-6 sm:pt-10 pb-20 select-none">

      {/* 1. Header Section */}
      <div className="max-w-[1085px] mx-auto px-4 sm:px-6">
        <SectionHeader
          title={project.title}
          icon={
            <svg className="w-6 h-6 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="3" width="18" height="18" rx="4" strokeWidth="2" />
              <path d="M7 16v-3M12 16v-6M17 16v-9" strokeWidth="2.2" strokeLinecap="round" />
              <circle cx="7" cy="8" r="1" fill="currentColor" />
            </svg>
          }
        />

        {/* Sub-header info block */}
        <div className="max-w-[980px] mx-auto mb-10 pt-2 px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">

            {/* Left: Logo & Description */}
            <div className="flex flex-col items-start gap-3 sm:gap-4 max-w-2xl">
              <div className="flex items-center gap-3 shrink-0 text-[#0d130d]">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#0d130d] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-[#0d130d]">Logoipsum</span>
              </div>
              <p className="text-base sm:text-lg text-neutral-800 font-sans leading-relaxed">
                {project.overlayDescription || project.summary}
              </p>
            </div>

            {/* Right: Tags */}
            <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 md:gap-1.5 text-xs sm:text-sm font-mono-tag text-[#f2512d] tracking-wider shrink-0">
              {(project.tags || ['// Brand Identity', '// Art Direction', '// Digital Experience']).map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div>

          </div>
        </div>

        {/* Main Hero Showcase Image */}
        <div className="mb-16 sm:mb-20">
          <div className="rounded-[28px] sm:rounded-[32px] overflow-hidden border border-neutral-300 aspect-[16/9] shadow-xl bg-neutral-900">
            <img
              src={project.heroImage || project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* 2. CHALLENGES Section */}
      <section className="py-10 sm:py-16">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-start">

            {/* Left Title with Red Badge */}
            <div className="md:col-span-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#f2512d] flex items-center justify-center text-white shrink-0 shadow-sm">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-[#0d130d] leading-none">
                CHALLENGES
              </h2>
            </div>

            {/* Right Narrative Description */}
            <div className="md:col-span-8">
              <p className="text-sm sm:text-base text-neutral-800 font-sans leading-relaxed">
                {project.challenge}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Middle Showcase Banner Image */}
      <section className="py-6 sm:py-10">
        <div className="max-w-[1085px] mx-auto px-4 sm:px-6">
          <div className="rounded-[28px] sm:rounded-[32px] overflow-hidden border border-neutral-300 aspect-[16/8] shadow-md bg-neutral-900">
            <img
              src={project.middleImage || project.galleryImages[0] || project.coverImage}
              alt="Project Showcase"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4. SOLUTIONS Section */}
      <section className="py-10 sm:py-16">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-start">

            {/* Left Title with Red Badge */}
            <div className="md:col-span-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#f2512d] flex items-center justify-center text-white shrink-0 shadow-sm">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-[#0d130d] leading-none">
                SOLUTIONS
              </h2>
            </div>

            {/* Right Bulleted List */}
            <div className="md:col-span-8 space-y-4">
              {solutionBullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <span className="w-2 h-2 rounded-sm bg-[#f2512d] mt-2 shrink-0" />
                  <p className="text-sm sm:text-base text-neutral-800 font-sans leading-relaxed">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 5. RESULTS Section (Dark Background) */}
      <section className="relative bg-[#060913] text-white py-12 sm:py-20 my-12 sm:my-20 border-y border-neutral-800">
        {/* Background glow effects matching footer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,81,45,0.12),rgba(255,255,255,0))]" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#f2512d]/10 rounded-full blur-3xl" />
        </div>

        {/* Content Container matching 980px max width */}
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 relative z-10 space-y-10 sm:space-y-14">

          {/* Section Header */}
          <SectionHeader
            title="RESULTS"
            subtitle={project.resultsSubtitle || 'A seamless fusion of tropical vibrancy and refined elegance.'}
            dark={true}
            className="my-0"
            icon={
              <svg className="w-6 h-6 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />

          {/* Metrics Stack */}
          <div className="space-y-6 sm:space-y-8">
            {project.impactMetrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-10 pb-6 border-b border-dashed border-neutral-800/80">
                <span className="font-display font-bold text-4xl sm:text-6xl text-[#f2512d] tracking-tight shrink-0 w-32 sm:w-44">
                  {metric.value}
                </span>
                <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed flex-1">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Gallery Section */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <section className="py-10 sm:py-16">
          <div className="max-w-[1085px] mx-auto px-4 sm:px-6 space-y-6">

            {/* Top Large Gallery Image */}
            <div className="rounded-[28px] sm:rounded-[32px] overflow-hidden border border-neutral-300 aspect-[16/9] shadow-md bg-neutral-900">
              <img
                src={project.galleryImages[0]}
                alt="Gallery showcase"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Row: 2 Grid Images */}
            {project.galleryImages.length > 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.galleryImages.slice(1, 3).map((img, idx) => (
                  <div key={idx} className="rounded-[28px] sm:rounded-[32px] overflow-hidden border border-neutral-300 aspect-[4/3] shadow-md bg-neutral-900">
                    <img
                      src={img}
                      alt={`Gallery thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

          </div>
        </section>
      )}

      {/* 7. MORE PROJECT Section (Dark Theme) */}
      <section className="relative bg-[#060913] text-white py-16 sm:py-24 border-t border-neutral-800">
        {/* Background glow effects matching footer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,81,45,0.12),rgba(255,255,255,0))]" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#f2512d]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[980px] mx-auto px-4 sm:px-6 space-y-16 sm:space-y-20 relative z-10">

          {/* Section Header */}
          <SectionHeader
            title="MORE PROJECT"
            dark={true}
            icon={
              <svg className="w-6 h-6 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="3" width="18" height="18" rx="4" strokeWidth="2" />
                <path d="M7 16v-3M12 16v-6M17 16v-9" strokeWidth="2.2" strokeLinecap="round" />
                <circle cx="7" cy="8" r="1" fill="currentColor" />
              </svg>
            }
          />

          {/* Cards Stack */}
          <div className="space-y-12 sm:space-y-16">
            {otherProjects.map((other, index) => (
              <div key={other.id}>
                <CaseStudyCard
                  project={other}
                  index={index}
                  onNavigate={(route, detailId) => {
                    onNavigate(route, detailId);
                    window.scrollTo(0, 0);
                  }}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. FAQ & CTA Banner */}
      <FaqSection className="pt-16 sm:pt-24" />
      <CtaBanner onNavigate={onNavigate} />

    </main>
  );
};
