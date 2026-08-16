import React from 'react';
import { PageRoute } from '../../types';
import { FaqSection } from '../../components/common/faq';
import { CtaBanner } from '../../components/common/cta';
import { NotFoundHero } from './NotFoundHero';

interface NotFoundPageProps {
    onNavigate: (route: PageRoute) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
    return (
        <main className="min-h-screen bg-[#f5f5f5] text-[#0d130d] font-sans selection:bg-[#f2512d] selection:text-white pt-6 sm:pt-10 pb-20 select-none">
            <div className="max-w-[1085px] mx-auto px-4 sm:px-6 text-center">

                {/* Top 404 Section */}
                <NotFoundHero onNavigate={onNavigate} />

                {/* FAQ Section */}
                <FaqSection className="pt-8 sm:pt-12 text-left" />

                {/* CTA Banner */}
                <CtaBanner onNavigate={onNavigate} />

            </div>
        </main>
    );
};