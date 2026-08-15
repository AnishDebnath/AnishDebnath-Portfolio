import React from 'react';
import { SectionHeader } from '../../components/common/SectionHeader';

export const Intro: React.FC = () => {
    return (
        <>
            {/* 1. ABOUT ANISH SECTION HEADER */}
            <div className="max-w-[980px] mx-auto px-4 sm:px-6">
                <SectionHeader
                    title="ABOUT ANISH"
                    subtitle=""
                    icon={
                        <svg className="w-6 h-6 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    }
                />
            </div>

            {/* 2. HERO PORTRAIT BANNER */}
            <div className="max-w-[1085px] mx-auto px-4 sm:px-6 mb-16 sm:mb-20">
                <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden border border-neutral-300 bg-gradient-to-r from-[#f2512d] via-[#e74723] to-[#801e0a] aspect-[16/9] sm:aspect-[2.4/1] shadow-sm">
                    <img
                        src="https://framerusercontent.com/images/gIB852FnoSAoaST2b7XHe096Ls.png?scale-down-to=2048"
                        onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=2000&q=80";
                        }}
                        alt="Anish Portrait"
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            </div>

            {/* 3. STATS & BIO ROW */}
            <div className="max-w-[980px] mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start pb-20 sm:pb-28">

                    {/* Left: Stats Numbers */}
                    <div className="md:col-span-4 space-y-8">
                        <div>
                            <span className="font-display font-black text-5xl sm:text-6xl text-[#0d130d] block leading-none">
                                80+
                            </span>
                            <span className="font-sans font-medium text-base sm:text-lg text-[#e74723] block mt-1.5">
                                Successful Projects
                            </span>
                        </div>

                        <div>
                            <span className="font-display font-black text-5xl sm:text-6xl text-[#0d130d] block leading-none">
                                95%
                            </span>
                            <span className="font-sans font-medium text-base sm:text-lg text-[#e74723] block mt-1.5">
                                Client Satisfaction Rate
                            </span>
                        </div>

                        <div>
                            <span className="font-display font-black text-5xl sm:text-6xl text-[#0d130d] block leading-none">
                                06+
                            </span>
                            <span className="font-sans font-medium text-base sm:text-lg text-[#e74723] block mt-1.5">
                                Years of Experience
                            </span>
                        </div>
                    </div>

                    {/* Right: Bio Text Paragraphs */}
                    <div className="md:col-span-8 space-y-6 font-sans text-base sm:text-lg text-[#2c332c] leading-relaxed">
                        <p>
                            <span className="font-medium text-[#e74723]">I'm Anish Debnath,</span> a passionate UI/UX designer with over 6 years of experience creating clean, conversion-focused digital experiences. I specialize in designing modern websites, landing pages, and SaaS platforms that blend usability with strong visual appeal.
                        </p>
                        <p>
                            <span className="font-medium text-[#e74723]">My design philosophy</span> is simple — clarity, consistency, and creativity. I believe a great design not only looks good but solves real problems and drives business results. Over the years, I’ve collaborated with startups, agencies, and global brands across industries like real estate, e-commerce, tech, and law.
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
};