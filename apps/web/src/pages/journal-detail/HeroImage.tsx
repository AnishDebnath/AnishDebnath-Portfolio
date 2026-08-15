import React from 'react';
import { JournalArticle } from '../../types';

interface HeroImageProps {
    article: JournalArticle;
}

export const HeroImage: React.FC<HeroImageProps> = ({ article }) => {
    return (
        <div className="rounded-[28px] sm:rounded-[36px] overflow-hidden bg-neutral-200 aspect-[16/9] max-h-[520px] w-full mb-14 shadow-sm">
            <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover"
            />
        </div>
    );
};