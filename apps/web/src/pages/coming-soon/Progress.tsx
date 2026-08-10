import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Loader2 } from 'lucide-react';

export const Progress: React.FC = () => {
    const [progress, setProgress] = useState(0);

    // Smooth counting animation from 0% to 50% on mount, then holds at 50% with continuous loading shimmer
    useEffect(() => {
        let animFrame: number;
        let timeoutId: NodeJS.Timeout;

        // Small delay before start to ensure component is mounted and visible
        timeoutId = setTimeout(() => {
            const startTime = performance.now();
            const duration = 2400; // 2.4 seconds animation from 0% to 50%

            const updateProgress = (now: number) => {
                const elapsed = now - startTime;
                const progressFraction = Math.min(elapsed / duration, 1);
                // Custom cubic ease-out curve for natural loading feel
                const easeOut = 1 - Math.pow(1 - progressFraction, 3);
                const currentVal = easeOut * 50;

                setProgress(currentVal);

                if (progressFraction < 1) {
                    animFrame = requestAnimationFrame(updateProgress);
                } else {
                    setProgress(50);
                }
            };

            animFrame = requestAnimationFrame(updateProgress);
        }, 150);

        return () => {
            clearTimeout(timeoutId);
            if (animFrame) cancelAnimationFrame(animFrame);
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="w-full max-w-md bg-white/95 border border-neutral-300/90 rounded-2xl p-4 text-left shadow-sm"
        >
            <div className="flex items-center justify-between text-xs font-mono font-semibold text-neutral-700 mb-2.5">
                <span className="flex items-center gap-2 text-[#0d130d]">
                    <Loader2 className="w-4 h-4 text-[#f2512d] animate-spin" />
                    <span>Development Progress</span>
                </span>
                <span className="font-mono text-[#f2512d] font-bold text-sm tracking-tight">
                    {Math.round(progress)}%
                </span>
            </div>

            {/* Progress Bar Container - Intro-style sleek rounded bar */}
            <div className="w-full h-2.5 bg-neutral-200/90 rounded-full overflow-hidden relative">
                <motion.div
                    className="h-full bg-[#f2512d] rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "easeOut", duration: 0.1 }}
                />
            </div>
        </motion.div>
    );
};