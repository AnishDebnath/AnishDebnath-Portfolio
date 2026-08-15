import React from 'react';
import { JournalArticle, PageRoute } from '../../types';
import { SectionHeader } from '../../components/SectionHeader';
import { JournalCard } from '../../components/JournalCard';
import { BookOpen } from 'lucide-react';

interface MoreArticlesSectionProps {
    relatedArticles: JournalArticle[];
    onNavigate: (route: PageRoute, detailId?: string) => void;
}

export const MoreArticlesSection: React.FC<MoreArticlesSectionProps> = ({ relatedArticles, onNavigate }) => {
    return (
        <section className="relative bg-[#060913] text-white py-16 sm:py-24 my-12 sm:my-16">
            {/* Background glow effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,81,45,0.12),rgba(255,255,255,0))]" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#f2512d]/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-[1085px] mx-auto px-4 sm:px-6 relative z-10">
                <SectionHeader
                    title="MORE CASE STUDIES"
                    dark={true}
                    icon={<BookOpen className="w-6 h-6 stroke-[2.2]" />}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mt-8 sm:mt-12">
                    {relatedArticles.map((rel) => (
                        <JournalCard
                            key={rel.id}
                            article={rel}
                            darkTheme={true}
                            onNavigate={(route, id) => {
                                onNavigate(route, id);
                                window.scrollTo(0, 0);
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};