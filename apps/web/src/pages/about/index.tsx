import React, { useState } from 'react';
import { PageRoute } from '../../types';
import { TechnologiesSection } from './Technologies';
import { WorkProcessSection } from '../../components/ui/WorkProcess';
import { StudySection } from './Study';
import { FaqSection } from '../../components/common/faq';
import { CtaBanner } from '../../components/common/cta';
import { Intro } from './Intro';
import { Experience } from './Experience';

interface AboutPageProps {
    onNavigate: (route: PageRoute, detailId?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
    const [openFaq, setOpenFaq] = useState<string>('faq-1');

    const toggleFaq = (id: string) => {
        setOpenFaq(prev => prev === id ? '' : id);
    };

    return (
        <main className="bg-[#f5f5f5] text-[#0d130d] pt-8 sm:pt-12 pb-20">

            {/* 1. INTRO: ABOUT ANISH HEADER + PORTRAIT + STATS & BIO */}
            <Intro />

            {/* 2. EXPERIENCE SECTION (DARK THEME) */}
            <Experience />

            {/* 3. TECHNOLOGIES I USE SECTION */}
            <TechnologiesSection />

            {/* WORK PROCESS SECTION */}
            <WorkProcessSection onNavigate={onNavigate} />

            {/* 4. STUDY SHOWCASE SECTION */}
            <StudySection />

            {/* 5. FAQ SECTION */}
            <FaqSection />

            {/* 6. CTA BANNER */}
            <CtaBanner onNavigate={onNavigate} />

        </main>
    );
};