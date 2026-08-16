import React, { useEffect } from 'react';
import { PageRoute } from '../../types';
import { CASE_STUDIES } from '../../data/portfolio';
import { FaqSection } from '../../components/ui/FaqSection';
import { CtaBanner } from '../../components/ui/CtaBanner';
import { HeaderSection } from './Header';
import { ChallengesSection } from './Challenges';
import { ShowcaseBanner } from './ShowcaseBanner';
import { SolutionsSection } from './Solutions';
import { ResultsSection } from './Results';
import { GallerySection } from './Gallery';
import { MoreProjectsSection } from './MoreProjects';

const DEFAULT_SOLUTION_BULLETS = [
  'Conducted user research and competitor analysis to map pain points',
  'Built a scalable design system with reusable components and tokens',
  'Delivered high-fidelity prototypes and usability-tested every flow',
  'Partnered with engineers through implementation to pixel-perfect launch'
];

interface CaseStudyDetailPageProps {
    projectId: string;
    onNavigate: (route: PageRoute, detailId?: string) => void;
}

export const CaseStudyDetailPage: React.FC<CaseStudyDetailPageProps> = ({
    projectId,
    onNavigate
}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectId]);

    const project = CASE_STUDIES.find(p => p.id === projectId) || CASE_STUDIES[0];
    const otherProjects = CASE_STUDIES.filter(p => p.id !== project.id);

    const solutionBullets = project.solutionBullets && project.solutionBullets.length > 0
        ? project.solutionBullets
        : DEFAULT_SOLUTION_BULLETS;

    return (
        <main className="min-h-screen bg-[#f5f5f5] text-[#0d130d] font-sans selection:bg-[#f2512d] selection:text-white pt-6 sm:pt-10 pb-20 select-none">

            {/* 1. Header Section */}
            <HeaderSection project={project} />

            {/* 2. CHALLENGES Section */}
            <ChallengesSection project={project} />

            {/* 3. Middle Showcase Banner Image */}
            <ShowcaseBanner project={project} />

            {/* 4. SOLUTIONS Section */}
            <SolutionsSection solutionBullets={solutionBullets} />

            {/* 5. RESULTS Section (Dark Background) */}
            <ResultsSection project={project} />

            {/* 6. Gallery Section */}
            <GallerySection project={project} />

            {/* 7. MORE PROJECT Section (Dark Theme) */}
            <MoreProjectsSection otherProjects={otherProjects} onNavigate={onNavigate} />

            {/* 8. FAQ & CTA Banner */}
            <FaqSection className="pt-16 sm:pt-24" />
            <CtaBanner onNavigate={onNavigate} />

        </main>
    );
};