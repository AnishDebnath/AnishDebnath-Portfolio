import React from 'react';
import { motion } from 'motion/react';
import { PageRoute } from '../../types';
import { Home } from 'lucide-react';

interface NotFoundHeroProps {
    onNavigate: (route: PageRoute) => void;
}

export const NotFoundHero: React.FC<NotFoundHeroProps> = ({ onNavigate }) => {
    return (
        <>
            {/* Top 404 Section with dashed grid border lines & red horizontal grid background */}
            <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="py-6 sm:py-10 my-4 sm:my-6 border-t border-b border-dashed border-neutral-300/80 bg-header-grid flex items-center justify-center"
            >
                <div className="flex items-center justify-center gap-1 sm:gap-1.5 text-[#f2512d] font-display font-black text-6xl sm:text-7xl lg:text-8xl leading-none select-none tracking-tight">
                    <span>4</span>
                    {/* Custom 0 with center dot matching the design image */}
                    <div className="relative flex items-center justify-center mx-1">
                        <svg className="w-[0.72em] h-[0.9em]" viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="12" y="12" width="76" height="106" rx="38" stroke="#f2512d" strokeWidth="24" fill="none" />
                            <circle cx="50" cy="65" r="9" fill="#f2512d" />
                        </svg>
                    </div>
                    <span>4</span>
                </div>
            </motion.div>

            {/* PAGE NOT FOUND Heading */}
            <motion.h1
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
                className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#0d130d] mb-3"
            >
                PAGE NOT FOUND
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
                className="font-sans text-xs sm:text-sm text-neutral-600 max-w-md mx-auto mb-8 leading-relaxed"
            >
                The page you looking for doesn’t exist or has been removed.
            </motion.p>

            {/* Go to Home Button */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
                className="mb-16 sm:mb-24"
            >
                <button
                    onClick={() => onNavigate('home')}
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#f2512d] hover:bg-[#d03a18] text-white font-sans text-sm font-semibold transition-all shadow-md active:scale-95 cursor-pointer group"
                >
                    <Home className="w-4.5 h-4.5 stroke-[2.2]" />
                    <span>Go to Home</span>
                </button>
            </motion.div>
        </>
    );
};