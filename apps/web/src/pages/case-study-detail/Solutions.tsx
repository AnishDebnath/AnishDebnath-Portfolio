import React from 'react';

interface SolutionsSectionProps {
    solutionBullets: string[];
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ solutionBullets }) => {
    return (
        <section className="py-10 sm:py-16">
            <div className="max-w-[980px] mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-start">

                    {/* Left Title with Red Badge */}
                    <div className="md:col-span-4 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-2xl bg-[#f2512d] flex items-center justify-center text-white shrink-0 shadow-sm">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-[#0d130d] leading-none">
                            SOLUTIONS
                        </h2>
                    </div>

                    {/* Right Bulleted List */}
                    <div className="md:col-span-8 space-y-4">
                        {solutionBullets.map((bullet, idx) => (
                            <div key={idx} className="flex items-start gap-3.5">
                                <span className="w-2 h-2 rounded-sm bg-[#f2512d] mt-2 shrink-0" />
                                <p className="text-sm sm:text-base text-neutral-800 font-sans leading-relaxed">
                                    {bullet}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};