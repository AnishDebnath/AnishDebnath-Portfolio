import React from 'react';
import { SectionHeader } from '../../components/common/SectionHeader';
import { LayoutDashboard, Layers, Users } from 'lucide-react';
import { EXPERIENCE_DATA, ExperienceItemData, ExperienceImage } from '../../data/experienceData';

const ExperienceImageGrid: React.FC<{ images: ExperienceImage[] }> = ({ images }) => {
    if (!images || images.length === 0) return null;

    return (
        <div className="mt-5 max-w-xl grid grid-cols-1 sm:grid-cols-3 gap-3">
            {images.map((img, i) => (
                <div
                    key={i}
                    className="group relative rounded-xl overflow-hidden border border-neutral-800/90 bg-[#121812] aspect-[4/3] shadow-xs"
                >
                    <img
                        src={img.url}
                        alt={img.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-2">
                        <span className="font-sans font-medium text-[11px] text-neutral-200 line-clamp-1 block text-center">
                            {img.title}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export const Experience: React.FC = () => {
    return (
        <section className="relative bg-[#060913] text-white py-20 sm:py-28 my-16 sm:my-24">
            {/* Background glow effects matching footer */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,81,45,0.12),rgba(255,255,255,0))]" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#f2512d]/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-[980px] mx-auto px-4 sm:px-6 relative z-10">

                <SectionHeader
                    title="EXPERIENCE"
                    subtitle="Years of creating user-centered designs that make an impact."
                    dark={true}
                    icon={
                        <svg className="w-6 h-6 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    }
                />

                {/* Experience List */}
                <div className="space-y-12 sm:space-y-16 pb-20 border-b border-neutral-800">
                    {EXPERIENCE_DATA.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-12 items-start ${index < EXPERIENCE_DATA.length - 1 ? 'pb-12 border-b border-dashed border-neutral-800/80' : ''
                                }`}
                        >
                            {/* Left: Role & Company */}
                            <div className="md:col-span-5">
                                <h3 className="font-sans font-bold text-lg sm:text-xl text-white">
                                    {exp.role} — {exp.company}
                                </h3>
                                <span className="font-sans font-medium text-sm text-[#e74723] block mt-1">
                                    {exp.period}
                                </span>
                            </div>

                            {/* Right: Description & Image Slide */}
                            <div className="md:col-span-7">
                                {/* Description Bullets */}
                                <ul className="space-y-3 font-sans text-sm sm:text-base text-neutral-300 leading-relaxed">
                                    {exp.bullets.map((bullet, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5">
                                            <span className="text-neutral-500 shrink-0">•</span>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Image side by side boxes right after description */}
                                <ExperienceImageGrid images={exp.images} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Currently & Quote Row */}
                <div className="pt-16 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

                    {/* Left Quote */}
                    <div className="md:col-span-6 space-y-3">
                        <span className="font-serif text-5xl sm:text-6xl text-neutral-600 block leading-none font-bold">
                            “
                        </span>
                        <p className="font-sans font-medium text-xl sm:text-2xl text-[#e74723] leading-snug">
                            Design is the silent ambassador of every idea we bring to life.
                        </p>
                    </div>

                    {/* Right Currently list */}
                    <div className="md:col-span-6 space-y-4">
                        <h4 className="font-display font-black text-2xl uppercase tracking-wider text-white mb-4">
                            CURRENTLY
                        </h4>
                        <ul className="space-y-3.5 font-sans text-sm sm:text-base text-neutral-300">
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-md border border-neutral-700 bg-neutral-900/90 flex items-center justify-center shrink-0 shadow-xs">
                                    <LayoutDashboard className="w-3.5 h-3.5 text-[#1fc932]" />
                                </div>
                                <span>Designing a modern SaaS dashboard</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-md border border-neutral-700 bg-neutral-900/90 flex items-center justify-center shrink-0 shadow-xs">
                                    <Layers className="w-3.5 h-3.5 text-[#1fc932]" />
                                </div>
                                <span>Building a personal design system</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-md border border-neutral-700 bg-neutral-900/90 flex items-center justify-center shrink-0 shadow-xs">
                                    <Users className="w-3.5 h-3.5 text-[#1fc932]" />
                                </div>
                                <span>Collaborating with a startup team</span>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    );
};