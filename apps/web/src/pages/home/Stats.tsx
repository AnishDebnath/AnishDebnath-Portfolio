import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { SectionHeader } from '../../components/common/SectionHeader';

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
            const controls = animate(count, value, { duration: 3, ease: 'easeOut' });
            return controls.stop;
        }
    }, [inView, value, count]);

    return (
        <motion.span ref={ref} className={className}>
            {display}
        </motion.span>
    );
};

interface TypeTextProps {
    text: string;
    className: string;
}

const TypeText: React.FC<TypeTextProps> = ({ text, className }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.6 });
    const [chars, setChars] = useState(0);

    useEffect(() => {
        if (!inView) return;
        const interval = setInterval(() => {
            setChars((prev) => {
                if (prev >= text.length) {
                    clearInterval(interval);
                    return prev;
                }
                return prev + 1;
            });
        }, 60);
        return () => clearInterval(interval);
    }, [inView, text]);

    return (
        <span ref={ref} className={className}>
            {text.slice(0, chars)}
            {chars < text.length && <span className="inline-block w-[2px] h-[1em] align-middle bg-current ml-0.5 animate-pulse" />}
        </span>
    );
};

export const Stats: React.FC = () => {
    return (
        <section className="py-16 sm:py-24 bg-[#f5f5f5]">
            <div className="max-w-[1085px] mx-auto px-4 sm:px-6">

                <SectionHeader
                    title="Why choose me"
                    subtitle="I blend strategy, design, and execution to create meaningful digital experiences."
                />

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.3 } }
                    }}
                >

                    {/* Stat Card 1: Successful Projects */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } }
                        }}
                        className="bg-[#f5f2eb] rounded-[24px] p-7 sm:p-8 border border-dashed border-neutral-300 relative overflow-hidden flex flex-col justify-between min-h-[380px] shadow-2xs"
                    >
                        <div className="relative z-10 pointer-events-none">
                            <CountUp
                                value={20}
                                suffix="+"
                                className="font-display text-6xl sm:text-7xl text-[#0d130d] block mb-1 font-black tracking-tight leading-none"
                            />
                            <TypeText
                                text="Successful Projects"
                                className="font-sans text-base sm:text-lg font-medium text-[#e74723] block mt-2"
                            />
                        </div>

                        {/* Tilted Diagonal Pill Pile with Alternating Marquee - Edge to Edge 3 Rows */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                            <div className="absolute -bottom-10 -left-12 w-[170%] transform -rotate-[20deg] origin-bottom-left flex flex-col gap-3">

                                {/* Row 1: Left Marquee */}
                                <div className="flex overflow-hidden w-full">
                                    <div className="animate-marquee-left flex items-center gap-3">
                                        {[
                                            { label: 'Agency', style: 'bg-white text-[#0d130d] border border-[#f2512d]' },
                                            { label: 'Real Estate', style: 'bg-[#0d130d] text-white' },
                                            { label: 'Fintech', style: 'bg-white text-[#0d130d] border border-[#f2512d]' },
                                            { label: 'SaaS Platform', style: 'bg-[#133c23] text-white' },
                                            { label: 'Healthcare', style: 'bg-[#f2512d] text-white' },
                                            { label: 'AI Products', style: 'bg-[#0d130d] text-white' },
                                            { label: 'Agency', style: 'bg-white text-[#0d130d] border border-[#f2512d]' },
                                            { label: 'Real Estate', style: 'bg-[#0d130d] text-white' },
                                            { label: 'Fintech', style: 'bg-white text-[#0d130d] border border-[#f2512d]' },
                                            { label: 'SaaS Platform', style: 'bg-[#133c23] text-white' },
                                            { label: 'Healthcare', style: 'bg-[#f2512d] text-white' },
                                            { label: 'AI Products', style: 'bg-[#0d130d] text-white' },
                                        ].map((item, idx) => (
                                            <span key={idx} className={`${item.style} px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-sans font-semibold shadow-xs whitespace-nowrap`}>
                                                {item.label}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Row 2: Right Marquee */}
                                <div className="flex overflow-hidden w-full">
                                    <div className="animate-marquee-right flex items-center gap-3">
                                        {[
                                            { label: 'SaaS Product', style: 'bg-[#f2512d] text-white' },
                                            { label: 'e-Commerce', style: 'bg-[#133c23] text-white' },
                                            { label: 'Branding', style: 'bg-[#0d130d] text-white' },
                                            { label: 'Web3', style: 'bg-white text-[#0d130d] border border-[#f2512d]' },
                                            { label: 'Mobile Apps', style: 'bg-[#0d130d] text-white' },
                                            { label: 'Design Systems', style: 'bg-white text-[#0d130d] border border-[#f2512d]' },
                                            { label: 'SaaS Product', style: 'bg-[#f2512d] text-white' },
                                            { label: 'e-Commerce', style: 'bg-[#133c23] text-white' },
                                            { label: 'Branding', style: 'bg-[#0d130d] text-white' },
                                            { label: 'Web3', style: 'bg-white text-[#0d130d] border border-[#f2512d]' },
                                            { label: 'Mobile Apps', style: 'bg-[#0d130d] text-white' },
                                            { label: 'Design Systems', style: 'bg-white text-[#0d130d] border border-[#f2512d]' },
                                        ].map((item, idx) => (
                                            <span key={idx} className={`${item.style} px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-sans font-semibold shadow-xs whitespace-nowrap`}>
                                                {item.label}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Row 3: Left Marquee */}
                                <div className="flex overflow-hidden w-full">
                                    <div className="animate-marquee-left flex items-center gap-3">
                                        {[
                                            { label: 'Fintech', style: 'bg-white text-[#0d130d] border border-[#f2512d]' },
                                            { label: 'Web3', style: 'bg-white text-[#0d130d] border border-[#f2512d]' },
                                            { label: 'Branding', style: 'bg-[#0d130d] text-white' },
                                            { label: 'Real Estate', style: 'bg-[#0d130d] text-white' },
                                            { label: 'e-Commerce', style: 'bg-[#133c23] text-white' },
                                            { label: 'Agency', style: 'bg-[#f2512d] text-white' },
                                            { label: 'Fintech', style: 'bg-white text-[#0d130d] border border-[#f2512d]' },
                                            { label: 'Web3', style: 'bg-white text-[#0d130d] border border-[#f2512d]' },
                                            { label: 'Branding', style: 'bg-[#0d130d] text-white' },
                                            { label: 'Real Estate', style: 'bg-[#0d130d] text-white' },
                                            { label: 'e-Commerce', style: 'bg-[#133c23] text-white' },
                                            { label: 'Agency', style: 'bg-[#f2512d] text-white' },
                                        ].map((item, idx) => (
                                            <span key={idx} className={`${item.style} px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-sans font-semibold shadow-xs whitespace-nowrap`}>
                                                {item.label}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </motion.div>

                    {/* Stat Card 2: Client Satisfaction Rate (Dark theme) */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } }
                        }}
                        className="bg-[#0d130d] text-white rounded-[24px] p-7 sm:p-8 border border-dashed border-neutral-800 relative overflow-hidden flex flex-col justify-between min-h-[380px] shadow-md"
                    >
                        <div>
                            <CountUp
                                value={95}
                                suffix="%"
                                className="font-display text-6xl sm:text-7xl text-white block mb-1 font-black tracking-tight leading-none"
                            />
                            <TypeText
                                text="Client Satisfaction Rate"
                                className="font-sans text-base sm:text-lg font-medium text-[#1fc932] block mt-2"
                            />
                        </div>

                        {/* Chat Bubble Widget */}
                        <motion.div
                            className="mt-8 pt-2"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: 0.25, delayChildren: 0.4 } }
                            }}
                        >

                            {/* Message 1 Row */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
                                }}
                                className="flex items-center gap-3 mb-2.5"
                            >
                                {/* Line art guy avatar in white circle with red border */}
                                <div className="w-10 h-10 rounded-full bg-white border border-[#e74723] flex items-center justify-center p-0.5 shrink-0 shadow-sm">
                                    <svg viewBox="0 0 40 40" className="w-full h-full text-neutral-900 stroke-current fill-none stroke-[2] stroke-linecap-round stroke-linejoin-round">
                                        {/* Hair/Head */}
                                        <path d="M 12 14 Q 10 8 16 10 Q 18 5 23 8 Q 28 6 28 11 Q 31 10 29 15" />
                                        {/* Face outline */}
                                        <path d="M 11 15 C 11 26 29 26 29 15" />
                                        {/* Glasses */}
                                        <rect x="13" y="15" width="6" height="5" rx="1.5" />
                                        <rect x="21" y="15" width="6" height="5" rx="1.5" />
                                        <line x1="19" y1="17.5" x2="21" y2="17.5" />
                                        {/* Smile */}
                                        <path d="M 17 22 Q 20 24 23 22" />
                                        {/* Bowtie */}
                                        <polygon points="18,27 22,27 20,29" fill="currentColor" />
                                    </svg>
                                </div>
                                <div className="bg-[#1c241c] text-white px-4 py-2.5 rounded-2xl rounded-tl-xs text-xs font-sans font-medium border border-white/10 shadow-sm">
                                    Hi, Anish
                                </div>
                            </motion.div>

                            {/* Message 2 Box */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: 20 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
                                }}
                                className="ml-13"
                            >
                                <div className="bg-[#1c241c] text-white p-3.5 rounded-2xl rounded-tl-xs text-xs font-sans leading-relaxed border border-white/10 shadow-sm">
                                    Huge thanks for the effort. You totally exceeded my expectations!
                                </div>
                                <div className="mt-2 flex items-center gap-1 text-[11px] font-sans font-medium text-[#1fc932]">
                                    <span className="font-bold">✓✓</span>
                                    <span className="ml-1">5m ago</span>
                                </div>
                            </motion.div>

                        </motion.div>
                    </motion.div>

                    {/* Stat Card 3: Years of Experience */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } }
                        }}
                        className="bg-[#f5f2eb] rounded-[24px] p-7 sm:p-8 border border-dashed border-neutral-300 relative overflow-hidden flex flex-col justify-between min-h-[380px] shadow-2xs"
                    >
                        <div>
                            <CountUp
                                value={4}
                                suffix="+"
                                pad
                                className="font-display text-6xl sm:text-7xl text-[#0d130d] block mb-1 font-black tracking-tight leading-none"
                            />
                            <TypeText
                                text="Years of Experience"
                                className="font-sans text-base sm:text-lg font-medium text-[#e74723] block mt-2"
                            />
                        </div>

                        {/* Speedometer Dial Gauge Graphic */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.4 }}
                            className="relative mt-2 -mb-8 flex items-end justify-center h-48 overflow-hidden select-none"
                        >
                            <svg viewBox="0 0 240 135" className="w-60 sm:w-64 h-auto overflow-visible">

                                {/* Outer Hatch Tick Pattern Arc */}
                                <path
                                    d="M 20 125 A 100 100 0 0 1 220 125"
                                    fill="none"
                                    stroke="#d4cebe"
                                    strokeWidth="16"
                                    strokeDasharray="1.5 3.5"
                                />

                                {/* Inner Semicircle Arch Line */}
                                <path
                                    d="M 38 125 A 82 82 0 0 1 202 125"
                                    fill="none"
                                    stroke="#ded8ca"
                                    strokeWidth="1.5"
                                />

                                {/* Arc Numbers */}
                                <text x="50" y="115" fontSize="10" fontFamily="sans-serif" fill="#b0a999" textAnchor="middle">01</text>
                                <text x="64" y="82" fontSize="10" fontFamily="sans-serif" fill="#b0a999" textAnchor="middle">02</text>
                                <text x="90" y="58" fontSize="10" fontFamily="sans-serif" fill="#b0a999" textAnchor="middle">03</text>

                                {/* Active highlighted 06 in orange */}
                                <text x="120" y="42" fontSize="12" fontWeight="bold" fontFamily="sans-serif" fill="#e74723" textAnchor="middle">04</text>

                                <text x="150" y="58" fontSize="10" fontFamily="sans-serif" fill="#b0a999" textAnchor="middle">05</text>
                                <text x="176" y="82" fontSize="10" fontFamily="sans-serif" fill="#b0a999" textAnchor="middle">06</text>
                                <text x="190" y="115" fontSize="10" fontFamily="sans-serif" fill="#b0a999" textAnchor="middle">07</text>

                                {/* Red Pointer Arrow line pointing to 06 */}
                                <line x1="120" y1="125" x2="120" y2="58" stroke="#e74723" strokeWidth="2.5" strokeLinecap="round" />

                                {/* Pointer Arrowhead */}
                                <polygon points="120,52 116,60 124,60" fill="#e74723" />

                                {/* Center Base Pivot */}
                                <circle cx="120" cy="125" r="11" fill="#0d130d" />
                                <circle cx="120" cy="125" r="4.5" fill="#e74723" />
                            </svg>
                        </motion.div>
                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
};