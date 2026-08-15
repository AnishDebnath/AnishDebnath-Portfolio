import React from 'react';
import { motion } from 'motion/react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  dark?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  dark = false,
  className = '',
  icon,
}) => {
  return (
    <div className={`relative w-full h-32 my-10 sm:my-14 flex items-center justify-center overflow-hidden px-4 sm:px-8 md:px-12 ${className}`}>
      
      {/* Top dashed grid lines with left and right padding */}
      <div className={`absolute top-0 inset-x-4 sm:inset-x-8 md:inset-x-12 h-[1px] border-b border-dashed ${dark ? 'border-white/10' : 'border-neutral-300'}`} />
      <div className={`absolute top-3 inset-x-4 sm:inset-x-8 md:inset-x-12 h-[1px] border-b border-dashed ${dark ? 'border-white/5' : 'border-neutral-300/60'}`} />
      
      {/* Central horizontal accent red grid lines passing behind text with left/right padding */}
      <div className={`absolute top-[42px] inset-x-4 sm:inset-x-8 md:inset-x-12 h-[1px] ${dark ? 'bg-[#f2512d]/20' : 'bg-[#f2512d]/15'}`} />
      <div className={`absolute top-[86px] inset-x-4 sm:inset-x-8 md:inset-x-12 h-[1px] ${dark ? 'bg-[#f2512d]/20' : 'bg-[#f2512d]/15'}`} />

      {/* Bottom dashed grid lines with left and right padding */}
      <div className={`absolute bottom-3 inset-x-4 sm:inset-x-8 md:inset-x-12 h-[1px] border-b border-dashed ${dark ? 'border-white/5' : 'border-neutral-300/60'}`} />
      <div className={`absolute bottom-0 inset-x-4 sm:inset-x-8 md:inset-x-12 h-[1px] border-b border-dashed ${dark ? 'border-white/10' : 'border-neutral-300'}`} />

      {/* Centered Content Row with left & right inner padding */}
      <div className="relative z-10 w-full max-w-[1020px] mx-auto px-6 sm:px-12 md:px-16 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-14 text-center md:text-left">
        
        {/* Left: Icon Squircle + Title */}
        <div className="flex items-center gap-4 shrink-0 group/header cursor-pointer">
          <div className="w-12 h-12 rounded-2xl bg-[#f2512d] flex items-center justify-center shrink-0 text-white shadow-xs -rotate-6 group-hover/header:rotate-0 hover:rotate-0 transition-transform duration-300">
            {icon || (
              <svg className="w-6 h-6 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="3" width="18" height="18" rx="4" strokeWidth="2"/>
                <path d="M7 16v-3M12 16v-6M17 16v-9" strokeWidth="2.2" strokeLinecap="round"/>
                <circle cx="7" cy="8" r="1" fill="currentColor"/>
              </svg>
            )}
          </div>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } },
            }}
            className={`font-display text-4xl sm:text-5xl uppercase tracking-normal leading-none ${
              dark ? 'text-white' : 'text-[#0d130d]'
            }`}
          >
            {title.split('').map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                }}
                className="inline-block whitespace-pre"
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>
        </div>

        {/* Right: Subtitle Description with compact narrow max width */}
        {subtitle && (
          <p className={`w-80 max-w-80 text-sm sm:text-base font-sans font-normal leading-snug sm:leading-6 ${
            dark ? 'text-white/90' : 'text-[#191919]'
          }`}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
