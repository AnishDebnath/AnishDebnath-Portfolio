import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionHeader } from '../../components/common/SectionHeader';
import { DarkButton } from '../../components/ui/DarkButton';
import { ACTIVE_PROJECTS, MarqueeCardData } from '../../data/nowWorkingOn';

interface NowWorkingOnSectionProps {
  darkTheme?: boolean;
}

export const NowWorkingOnSection: React.FC<NowWorkingOnSectionProps> = ({ darkTheme = true }) => {
  const projects = ACTIVE_PROJECTS;

  // Helper renderer for marquee image cards
  const renderMarqueeCard = (card: MarqueeCardData, idx: number, keyPrefix: string) => (
    <div
      key={`${keyPrefix}-${idx}`}
      className="relative w-[280px] sm:w-[320px] md:w-[350px] h-[180px] sm:h-[200px] shrink-0 rounded-2xl overflow-hidden border border-black/15 shadow-sm select-none group bg-neutral-200"
    >
      {/* Background Demo Preview Image */}
      <img
        src={card.image}
        alt={card.title}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
  );

  return (
    <section className={`py-16 sm:py-24 relative overflow-hidden ${darkTheme ? 'bg-[#060913] text-white' : 'bg-[#f5f5f5] text-[#0d130d]'}`}>
      {darkTheme && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,81,45,0.12),rgba(255,255,255,0))]" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#f2512d]/10 rounded-full blur-3xl" />
        </div>
      )}

      <div className="max-w-[1085px] mx-auto px-4 sm:px-6 relative z-10">

        {/* SECTION HEADER MATCHING OTHER SECTIONS */}
        <SectionHeader
          title="NOW WORKING ON"
          subtitle="Projects Iâ€™m actively building and fine-tuning at the moment."
          dark={darkTheme}
          icon={<Sparkles className="w-5 h-5 stroke-[2.2]" />}
        />

        {/* PROJECT SHOWCASE CONTAINERS */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((project) => {
            // Duplicate marquee arrays for infinite loop
            const topTrack = [...project.topMarquee, ...project.topMarquee, ...project.topMarquee];
            const bottomTrack = [...project.bottomMarquee, ...project.bottomMarquee, ...project.bottomMarquee];

            return (
              <div
                key={project.id}
                className="relative bg-[#f2efe6] bg-hero-grid border-neutral-300 rounded-[32px] sm:rounded-[44px] border overflow-hidden shadow-sm min-h-[520px] sm:min-h-[560px] md:min-h-[600px] flex items-center justify-center py-8 sm:py-12"
              >
                {/* 1. BACKGROUND SCROLLING MARQUEES (Upper goes Right-to-Left, Bottom goes Left-to-Right with tight gap between rows) */}
                <div className="absolute inset-0 flex flex-col justify-center gap-3 sm:gap-5 py-12 sm:py-16 pointer-events-none overflow-hidden select-none">

                  {/* UPPER MARQUEE ROW (RIGHT TO LEFT) */}
                  <div className="relative w-full overflow-hidden">
                    <div className="animate-marquee-left flex items-center gap-4 sm:gap-6 py-1">
                      {topTrack.map((card, idx) => renderMarqueeCard(card, idx, `${project.id}-top`))}
                    </div>
                  </div>

                  {/* BOTTOM MARQUEE ROW (LEFT TO RIGHT) */}
                  <div className="relative w-full overflow-hidden">
                    <div className="animate-marquee-right flex items-center gap-4 sm:gap-6 py-1">
                      {bottomTrack.map((card, idx) => renderMarqueeCard(card, idx, `${project.id}-bottom`))}
                    </div>
                  </div>

                </div>

                {/* 2. OVERLAY FADE + BLUR THAT APPEARS WHEN SCROLLED INTO VIEW */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="absolute inset-0 bg-black/5 backdrop-blur-[4px] z-10 pointer-events-none"
                />

                {/* 3. CENTER CARD WITH 3:4 ASPECT RATIO (STATUS, YEAR RIGHT CORNER, TITLE, DESCRIPTION, BUTTON) */}
                <motion.div
                  initial={{ opacity: 0, y: 70, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-20 w-[290px] sm:w-[330px] md:w-[360px] aspect-[3/4] bg-white text-[#0d130d] rounded-[28px] sm:rounded-[34px] p-6 sm:p-8 border border-neutral-200/90 shadow-2xl flex flex-col justify-between"
                >
                  {/* TOP SECTION: STATUS ROW + TITLE + DESCRIPTION */}
                  <div>
                    {/* TOP ROW: STATUS (LEFT) & YEAR (RIGHT CORNER) */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      {project.status === 'In Progress' ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80 text-xs font-semibold">
                          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                          In Progress
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-semibold">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          Completed
                        </span>
                      )}

                      <span className="text-xs font-mono-tag font-bold text-neutral-400 tracking-wider">
                        2026
                      </span>
                    </div>

                    {/* TITLE & DESCRIPTION AT THE STARTING PORTION */}
                    <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#0d130d] tracking-tight leading-snug mb-3">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* BOTTOM CONTENT: BUTTON */}
                  <DarkButton
                    onClick={() => {
                      if (project.liveUrl) {
                        window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    className="w-full py-3 px-5 text-xs sm:text-sm mt-4"
                  >
                    <span>Live Preview</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </DarkButton>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
