import React from 'react';
import { motion } from 'motion/react';
import { PageRoute } from '../../types';
import { JOURNAL_ARTICLES } from '../../data/case-study';
import { SectionHeader } from '../../components/common/SectionHeader';
import { JournalCard } from '../../components/JournalCard';

interface CaseStudySectionProps {
    onNavigate: (route: PageRoute, detailId?: string) => void;
}

export const CaseStudySection: React.FC<CaseStudySectionProps> = ({ onNavigate }) => {
    return (
        <section className="relative py-16 sm:py-24 bg-[#060913] text-white">
            {/* Background glow effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,81,45,0.12),rgba(255,255,255,0))]" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#f2512d]/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-[1085px] mx-auto px-4 sm:px-6 relative z-10">

                <SectionHeader
                    title="CASE STUDY"
                    subtitle="Thoughts, lessons, and behind-the-scenes insights from my design journey."
                    dark={true}
                />

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.18 } },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mt-8 sm:mt-12"
                >
                    {JOURNAL_ARTICLES.slice(0, 2).map((article, idx) => (
                        <motion.div
                            key={article.id}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
                            }}
                        >
                            <JournalCard
                                article={article}
                                darkTheme={true}
                                onNavigate={(route, id) => onNavigate(route, id)}
                            />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};