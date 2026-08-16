import React from 'react';
import { motion } from 'motion/react';
import { CaseStudyArticle } from '../../types';
import { Tag } from 'lucide-react';

interface MetaBarProps {
    article: CaseStudyArticle;
}

export const MetaBar: React.FC<MetaBarProps> = ({ article }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-center justify-center gap-3.5 mb-10 text-sm sm:text-base font-sans font-medium text-[#0d130d]"
        >
            <div className="flex items-center gap-2">
                <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-7 h-7 rounded-full object-cover border border-neutral-300"
                />
                <span className="font-semibold text-[#0d130d]">Anish Debnath</span>
            </div>
            <div className="h-4 w-px border-r border-dashed border-[#f2512d] mx-0.5" />
            <div className="flex items-center gap-1.5 text-[#0d130d]">
                <Tag className="w-4 h-4 text-[#0d130d]" />
                <span>{article.category || article.tags?.[0] || 'Journal'}</span>
            </div>
        </motion.div>
    );
};