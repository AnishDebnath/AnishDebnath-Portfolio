import React, { useState } from 'react';
import { PageRoute } from '../../types';
import { CapabilitiesSection } from './Capabilities';
import { WorkProcessSection } from '../../components/ui/WorkProcess';
import { BrandMarquee } from './BrandMarquee';
import { NowWorkingOnSection } from './NowWorkingOn';
import { TestimonialsSection } from './Testimonials';
import { FaqSection } from '../../components/FaqSection';
import { CtaBanner } from '../../components/CtaBanner';
import { HeroSection } from './Hero';
import { Stats } from './Stats';
import { PortfolioSection } from './Portfolio';
import { CaseStudySection } from './CaseStudy';

interface HomePageProps {
    onNavigate: (route: PageRoute, detailId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
    // FAQ accordion state
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    return (
        <div className="min-h-screen bg-[#f5f5f5] text-[#0d130d]">

            {/* 1. HERO SECTION */}
            <HeroSection onNavigate={onNavigate} />

            {/* BRAND MARQUEE SECTION */}
            <BrandMarquee />

            {/* 2. STATS SECTION */}
            <Stats />

            {/* NOW WORKING ON SECTION (DARK) */}
            <NowWorkingOnSection darkTheme={true} />

            {/* WORK PROCESS SECTION (LIGHT) */}
            <WorkProcessSection onNavigate={onNavigate} />

            {/* PORTFOLIO SECTION (DARK) */}
            <PortfolioSection onNavigate={onNavigate} />

            {/* CAPABILITIES SECTION (LIGHT) */}
            <CapabilitiesSection onNavigate={onNavigate} darkTheme={false} />

            {/* TESTIMONIALS SECTION (LIGHT) */}
            <TestimonialsSection darkTheme={false} />

            {/* CASE STUDY SECTION (DARK) */}
            <CaseStudySection onNavigate={onNavigate} />

            {/* FAQ SECTION (LIGHT) */}
            <FaqSection darkTheme={false} />

            {/* CTA BANNER SECTION */}
            <CtaBanner onNavigate={onNavigate} />

        </div>
    );
};