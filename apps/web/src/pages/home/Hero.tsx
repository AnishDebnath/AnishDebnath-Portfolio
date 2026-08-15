import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import heroPortrait from '../../assets/images/hero-portrait.png';
import profilePicture from '../../assets/images/profile-picture.png';
import { DarkButton } from '../../components/DarkButton';

interface HeroSectionProps {
  onNavigate: (route: string, id?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="pt-14 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 bg-[#f5f5f5] relative overflow-visible">
      <div className="max-w-[1085px] mx-auto px-4 sm:px-6 relative">

        {/* HERO BANNER CARD CONTAINER */}
        <div className="relative bg-[#f2efe6] bg-hero-grid rounded-[32px] sm:rounded-[40px] md:rounded-[48px] border border-neutral-300 pt-8 sm:pt-12 md:pt-14 pb-8 sm:pb-12 px-6 sm:px-10 md:px-12 lg:px-16 shadow-sm flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-4 min-h-[420px] sm:min-h-[460px]">

          {/* LEFT CONTENT COLUMN */}
          <div className="relative z-20 max-w-lg flex flex-col justify-center py-2">

            {/* Header: Avatar + I'm ANTONY */}
            <div className="flex items-center gap-4 sm:gap-5 mb-5 sm:mb-6">
              {/* Portrait Avatar Image without outer dark container box */}
              <div className="w-14 sm:w-16 md:w-18 h-18 sm:h-22 md:h-24 shrink-0 overflow-hidden rounded-2xl shadow-md -rotate-6 transform hover:rotate-0 transition-transform duration-300">
                <img
                  src={profilePicture}
                  alt="Anish"
                  className="w-full h-full object-cover filter contrast-110 brightness-95"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-col justify-center">
                <span className="font-sans font-semibold text-[#f2512d] text-base sm:text-lg leading-none mb-1">
                  I'm
                </span>
                <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl uppercase text-[#0d130d] tracking-tighter leading-none">
                  ANISH
                </h1>
              </div>
            </div>

            {/* Sub-heading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-[#0d130d] leading-snug max-w-md mb-3 sm:mb-4">
              I Help Startups Design & Develop products and websites
            </h2>

            {/* Sub-heading Description Body */}
            <p className="text-sm sm:text-base text-neutral-600 font-sans leading-relaxed max-w-md mb-6 sm:mb-8">
              You need more than pretty designs. I deliver breathtaking visuals, persuasive copy, and flawless development, Ready to elevate your project?
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <DarkButton
                onClick={() => onNavigate('case-studies')}
                className="px-6 py-3 sm:px-7 sm:py-3.5"
                aria-label="View projects"
              >
                <span>View projects</span>
                <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </DarkButton>

              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl bg-transparent border border-neutral-400/80 text-[#0d130d] font-sans text-sm font-semibold hover:bg-white transition-all active:scale-95 cursor-pointer"
              >
                Get in touch
              </button>
            </div>

          </div>

          {/* RIGHT PERSON IMAGE CONTAINER (Extending outside top boundary of the card) */}
          <div className="relative md:absolute md:right-0 md:bottom-0 z-20 w-full md:w-[48%] lg:w-[50%] h-[360px] sm:h-[440px] md:h-[calc(100%+64px)] lg:h-[calc(100%+88px)] flex items-end justify-center md:justify-end pointer-events-none -mt-6 md:mt-0 md:-top-16 lg:-top-22 overflow-hidden rounded-br-[32px] sm:rounded-br-[40px] md:rounded-br-[48px]">
            <img
              src={heroPortrait}
              alt="Designer Portrait"
              className="h-full w-auto object-contain object-bottom filter contrast-105 drop-shadow-md select-none pointer-events-none scale-[1.07] origin-bottom"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* FLOATING STATUS & ACTION CARD OVER THE BOTTOM-RIGHT WITH GLASSMORPHISM */}
          <div className="relative md:absolute md:bottom-6 lg:bottom-8 md:right-6 lg:right-10 z-30 bg-[#0d130d]/55 backdrop-blur-xl text-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/20 shadow-[0_12px_32px_rgba(0,0,0,0.35)] max-w-sm w-full md:w-auto flex items-center justify-between gap-4 mt-2 md:mt-0">
            <div className="pr-2">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22c55e]"></span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono-tag uppercase tracking-widest text-[#22c55e] font-semibold">
                  Available for projects
                </span>
              </div>
              <h3 className="font-sans font-bold text-sm sm:text-base text-white mb-1">
                Have a project in mind?
              </h3>
              <p className="text-xs text-neutral-200/90 leading-snug max-w-[210px]">
                Share a few details, and I'll get back with a clear direction.
              </p>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="w-11 h-11 rounded-xl bg-white text-[#0d130d] hover:bg-[#f2512d] hover:text-white flex items-center justify-center shrink-0 transition-all active:scale-95 shadow-md group cursor-pointer"
              aria-label="Contact for project"
            >
              <ArrowUpRight className="w-5 h-5 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

