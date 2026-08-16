import React from 'react';
import { motion } from 'motion/react';
import { CaseStudy } from '../../types';
import { SectionHeader } from '../../components/common/SectionHeader';

interface HeaderSectionProps {
    project: CaseStudy;
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({ project }) => {
    return (
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
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="max-w-[980px] mx-auto mb-10 pt-2 px-4 sm:px-6"
            >
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
            </motion.div>

            {/* Main Hero Showcase Image */}
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mb-16 sm:mb-20"
            >
                <div className="rounded-[28px] sm:rounded-[32px] overflow-hidden border border-neutral-300 aspect-[16/9] shadow-xl bg-neutral-900">
                    <img
                        src={project.heroImage || project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </motion.div>
        </div>
    );
};