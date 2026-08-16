import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { CaseStudy } from '../../types';
import { SectionHeader } from '../../components/common/SectionHeader';
import logix from '../../assets/brand-logo/logix.png';

interface HeaderSectionProps {
    project: CaseStudy;
}

interface TagTypewriterProps {
    tags: string[];
}

const TagTypewriter: React.FC<TagTypewriterProps> = ({ tags }) => {
    const [started, setStarted] = useState(false);
    const [doneCount, setDoneCount] = useState(0);
    const [typed, setTyped] = useState('');

    useEffect(() => {
        if (!started || doneCount >= tags.length) return;
        const target = tags[doneCount];
        let i = 0;
        const interval = setInterval(() => {
            i += 1;
            setTyped(target.slice(0, i));
            if (i >= target.length) {
                clearInterval(interval);
                setTimeout(() => {
                    setDoneCount((c) => c + 1);
                    setTyped('');
                }, 350);
            }
        }, 45);
        return () => clearInterval(interval);
    }, [started, doneCount, tags]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
            onViewportEnter={() => setStarted(true)}
            className="flex flex-wrap md:flex-col items-start md:items-end gap-2 md:gap-1.5 text-xs sm:text-sm font-mono-tag text-[#f2512d] tracking-wider shrink-0"
        >
            {tags.slice(0, doneCount).map((tag, idx) => (
                <span key={idx}>{tag}</span>
            ))}
            {doneCount < tags.length && (
                <span className="flex items-center">
                    <span>{typed}</span>
                    <span className="w-[2px] h-[1em] bg-current ml-0.5 animate-pulse" />
                </span>
            )}
        </motion.div>
    );
};

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
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-center gap-3 shrink-0 text-[#0d130d]"
                        >
<img
                                src={logix}
                                alt="Brand logo"
                                className="h-12 sm:h-16 w-auto object-contain shrink-0"
                            />
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            className="text-base sm:text-lg text-neutral-800 font-sans leading-relaxed"
                        >
                            {project.overlayDescription || project.summary}
                        </motion.p>
                    </div>

                    {/* Right: Tags */}
                    <TagTypewriter tags={project.tags || ['// Brand Identity', '// Art Direction', '// Digital Experience']} />

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