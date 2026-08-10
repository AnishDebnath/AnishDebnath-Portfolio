import React from 'react';
import { PageRoute } from '../types';
import { JOURNAL_ARTICLES } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';
import { JournalCard } from '../components/JournalCard';
import { FaqSection } from '../components/FaqSection';
import { CtaBanner } from '../components/CtaBanner';
import { BookOpen } from 'lucide-react';

interface JournalListPageProps {
  onNavigate: (route: PageRoute, detailId?: string) => void;
}

export const JournalListPage: React.FC<JournalListPageProps> = ({ onNavigate }) => {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-[#0d130d] pt-6 sm:pt-10 pb-20 select-none">
      <div className="max-w-[1085px] mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <SectionHeader
          title="CASE STUDY"
          subtitle="Thoughts, lessons, and behind-the-scenes insights from my design journey."
          icon={<BookOpen className="w-6 h-6 stroke-[2.2]" />}
        />

        {/* 2-Column Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mb-12 sm:mb-16">
          {JOURNAL_ARTICLES.map((article) => (
            <JournalCard
              key={article.id}
              article={article}
              onNavigate={(route, id) => onNavigate(route, id)}
            />
          ))}
        </div>

        {/* FAQ Section */}
        <FaqSection className="pt-8 sm:pt-12" />

        {/* CTA Banner */}
        <CtaBanner onNavigate={onNavigate} />

      </div>
    </main>
  );
};
