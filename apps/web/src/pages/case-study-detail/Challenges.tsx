import React from 'react';
import { CaseStudy } from '../../types';

interface ChallengesSectionProps {
    project: CaseStudy;
}

export const ChallengesSection: React.FC<ChallengesSectionProps> = ({ project }) => {
    return (
        <section className="py-10 sm:py-16">
            <div className="max-w-[980px] mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-start">

                    {/* Left Title with Red Badge */}
                    <div className="md:col-span-4 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-2xl bg-[#f2512d] flex items-center justify-center text-white shrink-0 shadow-sm">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-[#0d130d] leading-none">
                            CHALLENGES
                        </h2>
                    </div>

                    {/* Right Narrative Description */}
                    <div className="md:col-span-8">
                        <p className="text-sm sm:text-base text-neutral-800 font-sans leading-relaxed">
                            {project.challenge}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};