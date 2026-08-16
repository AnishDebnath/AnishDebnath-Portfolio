import React from 'react';
import { motion } from 'motion/react';
import { PageRoute } from '../../types';
import { SectionHeader } from '../../components/common/SectionHeader';
import { FaqSection } from '../../components/common/faq';
import { CtaBanner } from '../../components/common/cta';
import { BookOpen } from 'lucide-react';
import { ArticleGrid } from './ArticleGrid';

interface JournalListPageProps {
    onNavigate: (route: PageRoute, detailId?: string) => void;
}

export const JournalListPage: React.FC<JournalListPageProps> = ({ onNavigate }) => {
    return (
        <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="min-h-screen bg-[#f5f5f5] text-[#0d130d] pt-6 sm:pt-10 pb-20 select-none"
        >
            <div className="max-w-[1085px] mx-auto px-4 sm:px-6">

                {/* Section Header */}
                <SectionHeader
                    title="CASE STUDY"
                    subtitle="Ideas and practical insights on design, websites, creative direction, and digital craft."
                    icon={<BookOpen className="w-6 h-6 stroke-[2.2]" />}
                />

                {/* 2-Column Article Grid */}
                <ArticleGrid onNavigate={onNavigate} />

                {/* FAQ Section */}
                <FaqSection className="pt-8 sm:pt-12" />

                {/* CTA Banner */}
                <CtaBanner onNavigate={onNavigate} />

            </div>
        </motion.main>
    );
};