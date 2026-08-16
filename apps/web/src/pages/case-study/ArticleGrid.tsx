import React from 'react';
import { motion } from 'motion/react';
import { PageRoute } from '../../types';
import { CASE_STUDY_ARTICLES } from '../../data/case-study';
import { CaseStudyCard } from '../../components/product/CaseStudyCard';

interface ArticleGridProps {
    onNavigate: (route: PageRoute, detailId?: string) => void;
}

export const ArticleGrid: React.FC<ArticleGridProps> = ({ onNavigate }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mb-12 sm:mb-16"
        >
            {CASE_STUDY_ARTICLES.map((article) => (
                <motion.div
                    key={article.id}
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                    }}
                >
                    <CaseStudyCard
                        article={article}
                        onNavigate={(route, id) => onNavigate(route, id)}
                    />
                </motion.div>
            ))}
        </motion.div>
    );
};