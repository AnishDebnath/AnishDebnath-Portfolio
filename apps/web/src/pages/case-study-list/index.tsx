import React from 'react';
import { PageRoute } from '../../types';
import { FaqSection } from '../../components/ui/FaqSection';
import { CtaBanner } from '../../components/ui/CtaBanner';
import { PortfolioShowcase } from './PortfolioShowcase';

interface CaseStudyListPageProps {
    onNavigate: (route: PageRoute, detailId?: string) => void;
}

export const CaseStudyListPage: React.FC<CaseStudyListPageProps> = ({ onNavigate }) => {
    return (
        <main className="min-h-screen bg-[#f5f5f5] text-[#0d130d] font-sans selection:bg-[#f2512d] selection:text-white">

            {/* 1. Main Dark Showcase Section */}
            <PortfolioShowcase onNavigate={onNavigate} />

            {/* 2. FAQ & CTA Banner */}
            <FaqSection className="pt-16 sm:pt-24" />
            <CtaBanner onNavigate={onNavigate} />

        </main>
    );
};