import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { SectionHeader } from '../../components/common/SectionHeader';
import heroBanner from '../../assets/images/hero.png';

interface CountUpProps {
    value: number;
    suffix?: string;
    pad?: boolean;
    className: string;
}

const CountUp: React.FC<CountUpProps> = ({ value, suffix = '', pad = false, className }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.6 });
    const count = useMotionValue(0);
    const display = useTransform(count, (v) => {
        const rounded = Math.round(v);
        const str = pad ? String(rounded).padStart(2, '0') : String(rounded);
        return `${str}${suffix}`;
    });

    useEffect(() => {
        if (inView) {
            const controls = animate(count, value, { duration: 3, ease: 'easeInOut' });
            return controls.stop;
        }
    }, [inView, value, count]);

    return (
        <motion.span ref={ref} className={className}>
            {display}
        </motion.span>
    );
};

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
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden border border-neutral-300 bg-gradient-to-r from-[#f2512d] via-[#e74723] to-[#801e0a] aspect-[16/9] sm:aspect-[2.4/1] shadow-sm"
                >
                    <img
                        src={heroBanner}
                        alt="Anish Portrait"
                        className="w-full h-full object-cover object-center"
                    />
                </motion.div>
            </div>

            {/* 3. STATS & BIO ROW */}
            <div className="max-w-[980px] mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start pb-20 sm:pb-28">

                    {/* Left: Stats Numbers */}
                    <motion.div
                        initial={{ opacity: 0, x: -32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                        className="md:col-span-4 space-y-8"
                    >
                        <div>
                            <CountUp
                                value={20}
                                suffix="+"
                                className="font-display font-black text-5xl sm:text-6xl text-[#0d130d] block leading-none"
                            />
                            <span className="font-sans font-medium text-base sm:text-lg text-[#e74723] block mt-1.5">
                                Successful Projects
                            </span>
                        </div>

                        <div>
                            <CountUp
                                value={95}
                                suffix="%"
                                className="font-display font-black text-5xl sm:text-6xl text-[#0d130d] block leading-none"
                            />
                            <span className="font-sans font-medium text-base sm:text-lg text-[#e74723] block mt-1.5">
                                Client Satisfaction Rate
                            </span>
                        </div>

                        <div>
                            <CountUp
                                value={4}
                                suffix="+"
                                pad
                                className="font-display font-black text-5xl sm:text-6xl text-[#0d130d] block leading-none"
                            />
                            <span className="font-sans font-medium text-base sm:text-lg text-[#e74723] block mt-1.5">
                                Years of Experience
                            </span>
                        </div>
                    </motion.div>

                    {/* Right: Bio Text Paragraphs */}
                    <motion.div
                        initial={{ opacity: 0, x: 32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                        className="md:col-span-8 space-y-6 font-sans text-base sm:text-lg text-[#2c332c] leading-relaxed"
                    >
                        <p>
                            <span className="font-medium text-[#e74723]">I'm Anish Debnath,</span> a passionate UI/UX designer with over 6 years of experience creating clean, conversion-focused digital experiences. I specialize in designing modern websites, landing pages, and SaaS platforms that blend usability with strong visual appeal.
                        </p>
                        <p>
                            <span className="font-medium text-[#e74723]">My design philosophy</span> is simple — clarity, consistency, and creativity. I believe a great design not only looks good but solves real problems and drives business results. Over the years, I’ve collaborated with startups, agencies, and global brands across industries like real estate, e-commerce, tech, and law.
                        </p>
                    </motion.div>

                </div>
            </div>
        </>
    );
};