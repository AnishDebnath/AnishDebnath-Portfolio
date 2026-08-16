import React from 'react';
import { motion } from 'motion/react';
import { CaseStudyArticle } from '../../types';

interface HeroImageProps {
    article: CaseStudyArticle;
}

export const HeroImage: React.FC<HeroImageProps> = ({ article }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[28px] sm:rounded-[36px] overflow-hidden bg-neutral-200 aspect-[16/9] max-h-[520px] w-full mb-14 shadow-sm"
        >
            <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover"
            />
        </motion.div>
    );
};