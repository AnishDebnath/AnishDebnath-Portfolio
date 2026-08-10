import React from 'react';
import { PageRoute } from '../types';
import { Instagram, Linkedin, Twitter, Github } from 'lucide-react';

interface FooterProps {
  activeRoute?: PageRoute;
  onNavigate: (route: PageRoute, detailId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ activeRoute, onNavigate }) => {
  const isHomeActive = activeRoute === 'home';
  const isAboutActive = activeRoute === 'about';
  const isResumeActive = activeRoute === 'resume';
  const isCaseStudyActive = activeRoute === 'case-study' || activeRoute === 'case-study-detail';
  const isJournalActive = activeRoute === 'journal' || activeRoute === 'journal-detail';
  const isContactActive = activeRoute === 'contact';

  const isPrivacyActive = activeRoute === 'privacy-policy';
  const isTermsActive = activeRoute === 'terms-of-service';
  const isNotFoundActive = activeRoute === '404';

  return (
    <footer className="relative bg-[#060913] text-white pt-8 sm:pt-10 pb-8 overflow-hidden border-t border-neutral-900 select-none">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,81,45,0.12),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#f2512d]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1085px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-2">

          {/* Left: Avatar Profile Image + Name & Role + Social Icons */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            {/* Avatar & Profile Info */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl overflow-hidden border border-white/20 shadow-md shrink-0 bg-neutral-800 -rotate-3 transform hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                  alt="David Antony"
                  className="w-full h-full object-cover filter contrast-110 brightness-95"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="font-sans font-bold text-base text-white tracking-tight leading-snug">
                  David Antony
                </h3>
                <p className="font-sans text-xs text-neutral-400 font-medium">
                  Product Designer & Developer
                </p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-2 sm:border-l sm:border-white/10 sm:pl-6">
              <a
                href="https://x.com/anishdebnath07"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.06] hover:bg-[#f2512d] border border-white/10 hover:border-[#f2512d] flex items-center justify-center text-neutral-300 hover:text-white transition-all duration-300 shadow-xs hover:shadow-lg hover:shadow-[#f2512d]/25 group"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a
                href="https://www.linkedin.com/in/anish-debnath"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.06] hover:bg-[#f2512d] border border-white/10 hover:border-[#f2512d] flex items-center justify-center text-neutral-300 hover:text-white transition-all duration-300 shadow-xs hover:shadow-lg hover:shadow-[#f2512d]/25 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.06] hover:bg-[#f2512d] border border-white/10 hover:border-[#f2512d] flex items-center justify-center text-neutral-300 hover:text-white transition-all duration-300 shadow-xs hover:shadow-lg hover:shadow-[#f2512d]/25 group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a
                href="https://github.com/AnishDebnath"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.06] hover:bg-[#f2512d] border border-white/10 hover:border-[#f2512d] flex items-center justify-center text-neutral-300 hover:text-white transition-all duration-300 shadow-xs hover:shadow-lg hover:shadow-[#f2512d]/25 group"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Right: Navbar Pages */}
          <nav className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2 text-sm sm:text-base font-semibold text-neutral-300">
            <button
              onClick={() => onNavigate('home')}
              className={`transition-colors cursor-pointer ${isHomeActive ? 'text-[#f2512d] font-bold' : 'hover:text-[#f2512d]'
                }`}
            >
              Home
            </button>
            <span className="text-neutral-600 text-xs font-black select-none">•</span>
            <button
              onClick={() => onNavigate('about')}
              className={`transition-colors cursor-pointer ${isAboutActive ? 'text-[#f2512d] font-bold' : 'hover:text-[#f2512d]'
                }`}
            >
              About
            </button>
            <span className="text-neutral-600 text-xs font-black select-none">•</span>
            <button
              onClick={() => onNavigate('resume')}
              className={`transition-colors cursor-pointer ${isResumeActive ? 'text-[#f2512d] font-bold' : 'hover:text-[#f2512d]'
                }`}
            >
              Resume
            </button>
            <span className="text-neutral-600 text-xs font-black select-none">•</span>
            <button
              onClick={() => onNavigate('case-study')}
              className={`transition-colors cursor-pointer ${isCaseStudyActive ? 'text-[#f2512d] font-bold' : 'hover:text-[#f2512d]'
                }`}
            >
              Portfolio
            </button>
            <span className="text-neutral-600 text-xs font-black select-none">•</span>
            <button
              onClick={() => onNavigate('journal')}
              className={`transition-colors cursor-pointer ${isJournalActive ? 'text-[#f2512d] font-bold' : 'hover:text-[#f2512d]'
                }`}
            >
              Case Study
            </button>
            <span className="text-neutral-600 text-xs font-black select-none">•</span>
            <button
              onClick={() => onNavigate('contact')}
              className={`transition-colors cursor-pointer ${isContactActive ? 'text-[#f2512d] font-bold' : 'hover:text-[#f2512d]'
                }`}
            >
              Contact
            </button>
          </nav>

        </div>

        {/* Divider Line with reduced spacing */}
        <div className="w-full h-[1px] bg-white/10 my-4 sm:my-5" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-0.5 text-xs text-neutral-400 font-sans">

          {/* Left: Copyright */}
          <p className="text-neutral-400">
            © {new Date().getFullYear()} David Antony. All Rights Reserved.
          </p>

          {/* Right: Policy, Terms of Service & 404 */}
          <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-2 text-xs text-neutral-400 font-medium">
            <button
              onClick={() => onNavigate('privacy-policy')}
              className={`transition-colors cursor-pointer ${isPrivacyActive ? 'text-[#f2512d] font-bold' : 'hover:text-white'
                }`}
            >
              Privacy Policy
            </button>
            <span className="text-neutral-700 text-xs">•</span>
            <button
              onClick={() => onNavigate('terms-of-service')}
              className={`transition-colors cursor-pointer ${isTermsActive ? 'text-[#f2512d] font-bold' : 'hover:text-white'
                }`}
            >
              Terms of Service
            </button>
            <span className="text-neutral-700 text-xs">•</span>
            <button
              onClick={() => onNavigate('404')}
              className={`transition-colors cursor-pointer ${isNotFoundActive ? 'text-[#f2512d] font-bold' : 'hover:text-white'
                }`}
            >
              404 Page
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

