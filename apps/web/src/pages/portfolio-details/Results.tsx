import React from 'react';
import { motion } from 'motion/react';
import { CaseStudy } from '../../types';
import { SectionHeader } from '../../components/common/SectionHeader';

interface ResultsSectionProps {
    project: CaseStudy;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ project }) => {
    return (
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
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.15 } },
                    }}
                    className="space-y-6 sm:space-y-8"
                >
                    {project.impactMetrics.map((metric, idx) => (
                        <motion.div
                            key={idx}
                            variants={{
                                hidden: { opacity: 0, x: -32 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                            }}
                            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-10 pb-6 border-b border-dashed border-neutral-800/80"
                        >
                            <span className="font-display font-bold text-4xl sm:text-6xl text-[#f2512d] tracking-tight shrink-0 w-32 sm:w-44">
                                {metric.value}
                            </span>
                            <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed flex-1">
                                {metric.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};