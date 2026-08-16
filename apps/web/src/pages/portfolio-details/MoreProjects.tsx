import React from 'react';
import { motion } from 'motion/react';
import { CaseStudy, PageRoute } from '../../types';
import { SectionHeader } from '../../components/common/SectionHeader';
import { PortfolioCard } from '../../components/product/PortfolioCard';

interface MoreProjectsSectionProps {
    otherProjects: CaseStudy[];
    onNavigate: (route: PageRoute, detailId?: string) => void;
}

export const MoreProjectsSection: React.FC<MoreProjectsSectionProps> = ({ otherProjects, onNavigate }) => {
    return (
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
                        <motion.div
                            key={other.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <PortfolioCard
                                project={other}
                                index={index}
                                onNavigate={(route, detailId) => {
                                    onNavigate(route, detailId);
                                    window.scrollTo(0, 0);
                                }}
                            />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};