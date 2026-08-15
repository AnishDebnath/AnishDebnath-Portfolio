import React from 'react';
import { CaseStudy } from '../../types';

interface GallerySectionProps {
    project: CaseStudy;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ project }) => {
    if (!project.galleryImages || project.galleryImages.length === 0) return null;

    return (
        <section className="py-10 sm:py-16">
            <div className="max-w-[1085px] mx-auto px-4 sm:px-6 space-y-6">

                {/* Top Large Gallery Image */}
                <div className="rounded-[28px] sm:rounded-[32px] overflow-hidden border border-neutral-300 aspect-[16/9] shadow-md bg-neutral-900">
                    <img
                        src={project.galleryImages[0]}
                        alt="Gallery showcase"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Bottom Row: 2 Grid Images */}
                {project.galleryImages.length > 1 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {project.galleryImages.slice(1, 3).map((img, idx) => (
                            <div key={idx} className="rounded-[28px] sm:rounded-[32px] overflow-hidden border border-neutral-300 aspect-[4/3] shadow-md bg-neutral-900">
                                <img
                                    src={img}
                                    alt={`Gallery thumbnail ${idx + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
};