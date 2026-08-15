import React from 'react';
import { CaseStudy } from '../../types';

interface ShowcaseBannerProps {
    project: CaseStudy;
}

export const ShowcaseBanner: React.FC<ShowcaseBannerProps> = ({ project }) => {
    return (
        <section className="py-6 sm:py-10">
            <div className="max-w-[1085px] mx-auto px-4 sm:px-6">
                <div className="rounded-[28px] sm:rounded-[32px] overflow-hidden border border-neutral-300 aspect-[16/8] shadow-md bg-neutral-900">
                    <img
                        src={project.middleImage || project.galleryImages[0] || project.coverImage}
                        alt="Project Showcase"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};