import React from 'react';
import { PageRoute } from '../../types';
import { JOURNAL_ARTICLES } from '../../data/portfolioData';
import { JournalCard } from '../../components/JournalCard';

interface ArticleGridProps {
    onNavigate: (route: PageRoute, detailId?: string) => void;
}

export const ArticleGrid: React.FC<ArticleGridProps> = ({ onNavigate }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mb-12 sm:mb-16">
            {JOURNAL_ARTICLES.map((article) => (
                <JournalCard
                    key={article.id}
                    article={article}
                    onNavigate={(route, id) => onNavigate(route, id)}
                />
            ))}
        </div>
    );
};