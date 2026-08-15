import React from 'react';
import { PageRoute } from '../../types';
import { JOURNAL_ARTICLES } from '../../data/portfolioData';
import { FaqSection } from '../../components/FaqSection';
import { CtaBanner } from '../../components/CtaBanner';
import { TitleBand } from './TitleBand';
import { MetaBar } from './MetaBar';
import { HeroImage } from './HeroImage';
import { ArticleBody } from './ArticleBody';
import { MoreArticlesSection } from './MoreArticles';

interface JournalDetailPageProps {
    articleId?: string;
    onNavigate: (route: PageRoute, detailId?: string) => void;
}

export const JournalDetailPage: React.FC<JournalDetailPageProps> = ({ articleId, onNavigate }) => {
    const article = JOURNAL_ARTICLES.find(a => a.id === articleId) || JOURNAL_ARTICLES.find(a => a.id === 'designing-for-conversion') || JOURNAL_ARTICLES[0];

    // More journal articles (the other 2 items from the array)
    const relatedArticles = JOURNAL_ARTICLES.filter(a => a.id !== article.id).slice(0, 2);

    return (
        <main className="min-h-screen bg-[#f5f5f5] text-[#0d130d] py-12 sm:py-20 select-none">
            <div className="max-w-[1085px] mx-auto px-4 sm:px-6">

                {/* Main Title Section with top & bottom dashed lines and background grid lines */}
                <TitleBand title={article.title} />

                {/* Author & Journal Tag Meta Bar (Below title band) */}
                <MetaBar article={article} />

                {/* Hero Cover Image */}
                <HeroImage article={article} />

                {/* Article Body Paragraphs & Sections */}
                <ArticleBody />

            </div>

            {/* MORE CASE STUDIES Section (Dark Background) */}
            <MoreArticlesSection relatedArticles={relatedArticles} onNavigate={onNavigate} />

            <div className="max-w-[1085px] mx-auto px-4 sm:px-6">

                {/* FAQ Section */}
                <FaqSection className="pt-4 sm:pt-8" />

                {/* CTA Banner Section before footer */}
                <CtaBanner onNavigate={onNavigate} />

            </div>
        </main>
    );
};