import React from 'react';
import { motion } from 'motion/react';
import { CaseStudy } from '../../types';

interface ShowcaseBannerProps {
    project: CaseStudy;
}

export const ShowcaseBanner: React.FC<ShowcaseBannerProps> = ({ project }) => {
    return (
        <section className="py-6 sm:py-10">
            <div className="max-w-[1085px] mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-[28px] sm:rounded-[32px] overflow-hidden border border-neutral-300 aspect-[16/8] shadow-md bg-neutral-900"
                >
                    <img
                        src={project.middleImage || project.galleryImages[0] || project.coverImage}
                        alt="Project Showcase"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
};