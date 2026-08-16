import React, { useState, useEffect } from 'react';
import { PageRoute } from '../../types';
import { Menu, X, MessageSquare } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface HeaderProps {
  activeRoute: PageRoute;
  onNavigate: (route: PageRoute, detailId?: string) => void;
}

export const navItems: { label: string; route: PageRoute }[] = [
  { label: 'Home', route: 'home' },
  { label: 'About', route: 'about' },
  { label: 'Resume', route: 'resume' },
  { label: 'Portfolio', route: 'portfolio' },
  { label: 'Case Study', route: 'case-study' },
];

export const NavLinks: React.FC<{ activeRoute: PageRoute; onNavigate: (route: PageRoute) => void }> = ({
  activeRoute,
  onNavigate,
}) => (
  <nav className="flex items-center gap-2 sm:gap-3">
    {navItems.map((item, index) => {
      const isActive = activeRoute === item.route ||
        (item.route === 'portfolio' && activeRoute === 'portfolio-detail') ||
        (item.route === 'case-study' && activeRoute === 'case-study-detail');
      return (
        <React.Fragment key={item.route}>
          {index > 0 && <span className="text-neutral-900 text-xs font-black select-none px-0.5">•</span>}
          <button
            onClick={() => onNavigate(item.route)}
            className={`text-sm sm:text-[15px] font-sans font-semibold transition-colors ${isActive
              ? 'text-[#f2512d]'
              : 'text-[#0d130d] hover:text-[#f2512d]'
              }`}
          >
            {item.label}
          </button>
        </React.Fragment>
      );
    })}
  </nav>
);

export const AvatarStatus: React.FC<{ isCompact?: boolean; onNavigate: (route: PageRoute) => void }> = ({
  isCompact = false,
  onNavigate,
}) => (
  <div className="flex items-center gap-3 sm:gap-4 shrink-0">
    {/* Avatar Box with Loader Animation */}
    <div className={`${isCompact ? 'w-10 h-10 sm:w-11 sm:h-11' : 'w-10 h-10 sm:w-11 sm:h-11'} rounded-xl bg-white border border-neutral-300/80 flex items-center justify-center shadow-2xs shrink-0 overflow-hidden`}>
      <span className="loader scale-[0.32] origin-center"></span>
    </div>

    {/* Green Status Badge */}
    <button
      onClick={() => onNavigate('contact')}
      type="button"
      className="inline-flex items-center gap-2 font-sans hover:opacity-85 transition-opacity"
    >
      <span className="relative flex h-3.5 w-3.5 items-center justify-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#083315] border border-[#22c55e] items-center justify-center">
          <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full"></span>
        </span>
      </span>
      <span className="text-[#22c55e] text-sm sm:text-[15px] font-semibold tracking-tight whitespace-nowrap">Available Now</span>
    </button>
  </div>
);

export const LetsTalkButton: React.FC<{ isCompact?: boolean; onNavigate: (route: PageRoute) => void }> = ({
  isCompact = false,
  onNavigate,
}) => (
  <button
    onClick={() => onNavigate('contact')}
    className={`inline-flex items-center gap-2 ${isCompact ? 'px-4 py-2 text-xs sm:text-sm' : 'px-5 py-2.5 text-sm sm:text-[15px]'
      } rounded-xl bg-[#f2512d] hover:bg-[#d03a18] text-white font-sans font-semibold tracking-wide transition-all shadow-sm active:scale-95 shrink-0`}
  >
    <MessageSquare className="w-4 h-4 text-white fill-white/20" />
    <span>Let's Talk</span>
  </button>
);

export const Header: React.FC<HeaderProps> = ({ activeRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* 1. TOP MAIN NAVBAR (Fixed at top position of page) */}
      <header className="relative w-full z-40 bg-[#f5f5f5] py-3.5 border-b border-neutral-200/60">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 flex items-center justify-between">

          {/* Left: Avatar Doodle Box + Available Now Indicator */}
          <AvatarStatus onNavigate={handleNavClick} />

          {/* Center Navigation Links with Bullets */}
          <div className="hidden md:flex items-center">
            <NavLinks activeRoute={activeRoute} onNavigate={handleNavClick} />
          </div>

          {/* Right CTA Button: Let's Talk */}
          <div className="hidden sm:flex items-center">
            <LetsTalkButton onNavigate={handleNavClick} />
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-neutral-200 text-[#0d130d] hover:bg-neutral-300 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0d130d] text-white border-b border-neutral-800 px-6 py-6 animate-fadeIn mt-3">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = activeRoute === item.route;
                return (
                  <button
                    key={item.route}
                    onClick={() => handleNavClick(item.route)}
                    className={`text-left py-2 text-lg font-display tracking-wider uppercase border-b border-neutral-800/80 ${isActive ? 'text-[#f2512d]' : 'text-neutral-300 hover:text-white'
                      }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-2">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#f2512d] text-white text-sm font-sans font-medium tracking-wide hover:bg-[#d03a18] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>Let's Talk</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 2. SCROLLED GLASSMORPHISM FLOATING BOX NAVBAR (Appears when scrolled > 80px) */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ y: -80, opacity: 0, x: '-50%' }}
            animate={{ y: 0, opacity: 1, x: '-50%' }}
            exit={{ y: -80, opacity: 0, x: '-50%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-4 left-1/2 z-50 w-[92%] max-w-[920px] px-4 sm:px-6 py-2.5 sm:py-3 rounded-[22px] bg-white/80 backdrop-blur-xl border border-white/90 shadow-[0_16px_40px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-between gap-3 sm:gap-6 ring-1 ring-black/5"
          >
            {/* Left: Avatar Doodle + Available Now */}
            <AvatarStatus isCompact onNavigate={handleNavClick} />

            {/* Center: Navigation Links with Bullet Points (Identical design to top navbar) */}
            <div className="hidden md:flex items-center">
              <NavLinks activeRoute={activeRoute} onNavigate={handleNavClick} />
            </div>

            {/* Right: Let's Talk CTA Button (Identical design to top navbar) */}
            <div className="hidden sm:flex items-center">
              <LetsTalkButton isCompact onNavigate={handleNavClick} />
            </div>

            {/* Mobile menu trigger inside scrolled floating navbar */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-neutral-200/80 text-[#0d130d] hover:bg-neutral-300 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};