import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Send } from 'lucide-react';

const Badge: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white border border-neutral-300/90 text-xs font-mono font-semibold uppercase tracking-wider text-[#0d130d] shadow-2xs mb-8 whitespace-nowrap"
        >
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f2512d] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f2512d]"></span>
            </span>
            <span>Work in Progress</span>
        </motion.div>
    );
};

const Headline: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 relative"
        >
            <h1 className="font-display font-normal text-4xl sm:text-6xl md:text-7xl text-[#0d130d] tracking-tight leading-[1.1] max-w-3xl mx-auto">
                I am working on <br />
                my{' '}
                <span className="relative inline-block px-1">
                    {/* Crossed out word */}
                    <span className="relative z-10 text-neutral-400 opacity-80">Website</span>

                    {/* Hand-drawn Strikethrough Line */}
                    <svg
                        className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-20"
                        viewBox="0 0 100 30"
                        preserveAspectRatio="none"
                    >
                        <motion.path
                            d="M -1,16 Q 50,13 103,17"
                            fill="none"
                            stroke="#0d130d"
                            strokeWidth="3"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        />
                    </svg>

                    {/* Curved Arrow starting at the ending tip of the crossed word and lengthening down to point at 'Portfolio' */}
                    <svg
                        className="absolute left-[92%] sm:left-[98%] top-[25%] sm:top-[30%] w-14 sm:w-20 h-12 sm:h-18 overflow-visible pointer-events-none z-20 text-[#f2512d]"
                        viewBox="0 0 70 60"
                    >
                        <motion.path
                            d="M 5,5 Q 45,5 28,50"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                        />
                        {/* Arrowhead */}
                        <motion.path
                            d="M 19,42 L 28,50 L 34,40"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            transform="rotate(30 28 50)"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.35 }}
                        />
                    </svg>

                    {/* Handwritten 'Portfolio' text positioned under the arrow and right edge of crossed word */}
                    <motion.span
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.4 }}
                        className="absolute -bottom-11 sm:-bottom-12 right-[-40px] sm:right-[-40px] font-script text-2xl sm:text-4xl text-[#f2512d] font-normal rotate-[-3deg] whitespace-nowrap drop-shadow-2xs"
                    >
                        Portfolio
                    </motion.span>
                </span>
            </h1>
        </motion.div>
    );
};

const Subtitle: React.FC = () => {
    return (
        <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-neutral-600 text-sm sm:text-base max-w-lg mx-auto mb-8 font-sans leading-relaxed mt-6 sm:mt-10"
        >
            I am designing and developing a new experience. Check back soon for the launch of my portfolio.
        </motion.p>
    );
};

const Subscribe: React.FC = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setSubmitted(true);
            setTimeout(() => {
                setEmail('');
            }, 4000);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full max-w-md mx-auto mb-10"
        >
            {submitted ? (
                <div className="bg-white border border-emerald-300/80 rounded-2xl p-4 flex items-center justify-center gap-3 text-sm text-neutral-800 shadow-sm">
                    {/* <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" /> */}
                    <span className="font-medium">Thank you! You've been added to my updates list.</span>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="flex items-center gap-2 bg-white p-1.5 sm:p-2 rounded-2xl border border-neutral-300/90 shadow-sm">
                    <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full min-w-0 flex-1 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-[#0d130d] bg-transparent outline-none placeholder:text-neutral-400 font-sans"
                    />
                    <button
                        type="submit"
                        className="px-4 sm:px-6 py-2.5 sm:py-3 bg-[#f2512d] hover:bg-[#e74723] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-colors shadow-sm cursor-pointer active:scale-[0.98] flex items-center justify-center gap-1.5 sm:gap-2 shrink-0"
                    >
                        <span>Join</span>
                        <Send className="w-3.5 h-3.5" />
                    </button>
                </form>
            )}
        </motion.div>
    );
};

export const Body: React.FC = () => {
    return (
        <>
            <Badge />
            <Headline />
            <Subtitle />
            <Subscribe />
        </>
    );
};