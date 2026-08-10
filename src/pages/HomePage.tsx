import React, { useState } from 'react';
import { PageRoute } from '../types';
import { CASE_STUDIES, JOURNAL_ARTICLES } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { JournalCard } from '../components/JournalCard';
import { CapabilitiesSection } from '../components/CapabilitiesSection';
import { WorkProcessSection } from '../components/WorkProcessSection';
import { BrandMarquee } from '../components/BrandMarquee';
import { HeroSection } from '../components/HeroSection';
import { NowWorkingOnSection } from '../components/NowWorkingOnSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FaqSection } from '../components/FaqSection';
import { CtaBanner } from '../components/CtaBanner';
import { ArrowUpRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: PageRoute, detailId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What's your typical design process like?",
      answer: "I follow a clear process that starts with understanding your goals, then moves through wireframing, visual design, and final delivery with your feedback at every step."
    },
    {
      question: "How long does a typical project take?",
      answer: "Most web and product design projects take between 3 to 6 weeks depending on scope, complexity, and feedback loops."
    },
    {
      question: "Do you also offer development or only design?",
      answer: "I specialize in end-to-end delivery: from Figma prototypes to full-stack front-end React, Next.js, and Webflow implementation."
    },
    {
      question: "What tools do you use for your design work?",
      answer: "Primary stack includes Figma for interface design & prototyping, Spline for 3D elements, Midjourney for generative art direction, and React/Tailwind for code."
    },
    {
      question: "Can you redesign my existing website instead of starting from scratch?",
      answer: "Yes! I routinely perform comprehensive UI/UX audits and redesigns to modernize legacy sites and boost conversion metrics."
    }
  ];

  const awards = [
    {
      title: "BEST UI/UX DESIGNER OF THE YEAR",
      organization: "Awarded by Design Excellence Awards",
      year: "2024"
    },
    {
      title: "TOP PRODUCT DESIGN AWARD",
      organization: "Recognized by Global UX Summit",
      year: "2023"
    },
    {
      title: "INNOVATION IN INTERACTION DESIGN",
      organization: "Honored by Digital Creators Conference",
      year: "2022"
    },
    {
      title: "BEST MOBILE APP DESIGN",
      organization: "Presented by App Design Awards",
      year: "2021"
    },
    {
      title: "CREATIVE EXCELLENCE IN WEB DESIGN",
      organization: "Recognized by Web Innovators Forum",
      year: "2020"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#0d130d]">
      
      {/* 1. HERO SECTION */}
      <HeroSection onNavigate={onNavigate} />

      {/* BRAND MARQUEE SECTION */}
      <BrandMarquee />

      {/* 2. STATS SECTION */}
      <section className="py-16 sm:py-24 bg-[#f5f5f5]">
        <div className="max-w-[1085px] mx-auto px-4 sm:px-6">
          
          <SectionHeader
            title="STATS"
            subtitle="A quick look at the measurable impact behind Antony's design journey."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            
            {/* Stat Card 1: Successful Projects */}
            <div className="bg-[#f5f2eb] rounded-[24px] p-7 sm:p-8 border border-dashed border-neutral-300 relative overflow-hidden flex flex-col justify-between min-h-[380px] shadow-2xs">
              <div className="relative z-10 pointer-events-none">
                <span className="font-display text-6xl sm:text-7xl text-[#0d130d] block mb-1 font-black tracking-tight leading-none">
                  80+
                </span>
                <span className="font-sans text-base sm:text-lg font-medium text-[#e74723] block mt-2">
                  Successful Projects
                </span>
              </div>

              {/* Tilted Diagonal Pill Pile with Alternating Marquee - Edge to Edge 3 Rows */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                <div className="absolute -bottom-10 -left-12 w-[170%] transform -rotate-[20deg] origin-bottom-left flex flex-col gap-3">
                  
                  {/* Row 1: Left Marquee */}
                  <div className="flex overflow-hidden w-full">
                    <div className="animate-marquee-left flex items-center gap-3">
                      {[
                        { label: 'Law & Attorney', style: 'bg-white text-[#0d130d] border border-[#f2512d]' },
                        { label: 'Real Estate', style: 'bg-[#0d130d] text-white' },
                        { label: 'Fintech', style: 'bg-white text-[#0d130d] border border-[#f2512d]' },
                        { label: 'SaaS Platform', style: 'bg-[#133c23] text-white' },
                        { label: 'Healthcare', style: 'bg-[#f2512d] text-white' },
                        { label: 'AI Products', style: 'bg-[#0d130d] text-white' },
                        { label: 'Law & Attorney', style: 'bg-white text-[#0d130d] border border-[#f2512d]' },
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
                        { label: 'Medical', style: 'bg-[#f2512d] text-white' },
                        { label: 'e-Commerce', style: 'bg-[#133c23] text-white' },
                        { label: 'Branding', style: 'bg-[#0d130d] text-white' },
                        { label: 'Web3', style: 'bg-white text-[#0d130d] border border-[#f2512d]' },
                        { label: 'Mobile Apps', style: 'bg-[#0d130d] text-white' },
                        { label: 'Design Systems', style: 'bg-white text-[#0d130d] border border-[#f2512d]' },
                        { label: 'Medical', style: 'bg-[#f2512d] text-white' },
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
            </div>

            {/* Stat Card 2: Client Satisfaction Rate (Dark theme) */}
            <div className="bg-[#0d130d] text-white rounded-[24px] p-7 sm:p-8 border border-dashed border-neutral-800 relative overflow-hidden flex flex-col justify-between min-h-[380px] shadow-md">
              <div>
                <span className="font-display text-6xl sm:text-7xl text-white block mb-1 font-black tracking-tight leading-none">
                  95%
                </span>
                <span className="font-sans text-base sm:text-lg font-medium text-[#1fc932] block mt-2">
                  Client Satisfaction Rate
                </span>
              </div>

              {/* Chat Bubble Widget */}
              <div className="mt-8 pt-2">
                
                {/* Message 1 Row */}
                <div className="flex items-center gap-3 mb-2.5">
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
                    Hi, Antony
                  </div>
                </div>

                {/* Message 2 Box */}
                <div className="ml-13">
                  <div className="bg-[#1c241c] text-white p-3.5 rounded-2xl rounded-tl-xs text-xs font-sans leading-relaxed border border-white/10 shadow-sm">
                    Huge thanks for the effort. You totally exceeded my expectations!
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-[11px] font-sans font-medium text-[#1fc932]">
                    <span className="font-bold">✓✓</span>
                    <span className="ml-1">5m ago</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Stat Card 3: Years of Experience */}
            <div className="bg-[#f5f2eb] rounded-[24px] p-7 sm:p-8 border border-dashed border-neutral-300 relative overflow-hidden flex flex-col justify-between min-h-[380px] shadow-2xs">
              <div>
                <span className="font-display text-6xl sm:text-7xl text-[#0d130d] block mb-1 font-black tracking-tight leading-none">
                  06+
                </span>
                <span className="font-sans text-base sm:text-lg font-medium text-[#e74723] block mt-2">
                  Years of Experience
                </span>
              </div>

              {/* Speedometer Dial Gauge Graphic */}
              <div className="relative mt-2 -mb-8 flex items-end justify-center h-48 overflow-hidden select-none">
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
                  <text x="50" y="115" fontSize="10" fontFamily="sans-serif" fill="#b0a999" textAnchor="middle">03</text>
                  <text x="64" y="78" fontSize="10" fontFamily="sans-serif" fill="#b0a999" textAnchor="middle">04</text>
                  <text x="90" y="48" fontSize="10" fontFamily="sans-serif" fill="#b0a999" textAnchor="middle">05</text>
                  
                  {/* Active highlighted 06 in orange */}
                  <text x="120" y="32" fontSize="12" fontWeight="bold" fontFamily="sans-serif" fill="#e74723" textAnchor="middle">06</text>
                  
                  <text x="150" y="48" fontSize="10" fontFamily="sans-serif" fill="#b0a999" textAnchor="middle">07</text>
                  <text x="176" y="78" fontSize="10" fontFamily="sans-serif" fill="#b0a999" textAnchor="middle">08</text>
                  <text x="190" y="115" fontSize="10" fontFamily="sans-serif" fill="#b0a999" textAnchor="middle">09</text>

                  {/* Red Pointer Arrow line pointing to 06 */}
                  <line x1="120" y1="125" x2="120" y2="42" stroke="#e74723" strokeWidth="2.5" strokeLinecap="round" />
                  
                  {/* Pointer Arrowhead */}
                  <polygon points="120,36 116,44 124,44" fill="#e74723" />

                  {/* Center Base Pivot */}
                  <circle cx="120" cy="125" r="11" fill="#0d130d" />
                  <circle cx="120" cy="125" r="4.5" fill="#e74723" />
                </svg>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* NOW WORKING ON SECTION (DARK) */}
      <NowWorkingOnSection darkTheme={true} />

      {/* WORK PROCESS SECTION (LIGHT) */}
      <WorkProcessSection onNavigate={onNavigate} />

      {/* PORTFOLIO SECTION (DARK) */}
      <section className="relative bg-[#060913] text-white py-16 sm:py-24 border-t border-b border-neutral-800">
        {/* Background glow effects matching footer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,81,45,0.12),rgba(255,255,255,0))]" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#f2512d]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1085px] mx-auto px-4 sm:px-6 relative z-10">
          <SectionHeader
            title="PORTFOLIO"
            subtitle="Selected projects, design systems, and digital products."
            dark={true}
            icon={
              <svg className="w-6 h-6 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="3" width="18" height="18" rx="4" strokeWidth="2" />
                <path d="M7 16v-3M12 16v-6M17 16v-9" strokeWidth="2.2" strokeLinecap="round" />
                <circle cx="7" cy="8" r="1" fill="currentColor" />
              </svg>
            }
          />

          <div className="space-y-12 sm:space-y-20 mt-8 sm:mt-12 relative pb-16 sm:pb-24">
            {CASE_STUDIES.map((project, index) => (
              <div 
                key={project.id}
                className="sticky"
                style={{ 
                  top: `calc(12vh + ${index * 92}px)`,
                  zIndex: index + 1 
                }}
              >
                <CaseStudyCard 
                  project={project} 
                  index={index} 
                  onNavigate={onNavigate} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES SECTION (LIGHT) */}
      <CapabilitiesSection onNavigate={onNavigate} darkTheme={false} />

      {/* TESTIMONIALS SECTION (LIGHT) */}
      <TestimonialsSection darkTheme={false} />

      {/* CASE STUDY SECTION (DARK) */}
      <section className="relative py-16 sm:py-24 bg-[#060913] text-white">
        {/* Background glow effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,81,45,0.12),rgba(255,255,255,0))]" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#f2512d]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1085px] mx-auto px-4 sm:px-6 relative z-10">
          
          <SectionHeader
            title="CASE STUDY"
            subtitle="Thoughts, lessons, and behind-the-scenes insights from my design journey."
            dark={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mt-8 sm:mt-12">
            {JOURNAL_ARTICLES.slice(0, 2).map((article) => (
              <JournalCard
                key={article.id}
                article={article}
                darkTheme={true}
                onNavigate={(route, id) => onNavigate(route, id)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* FAQ SECTION (LIGHT) */}
      <FaqSection darkTheme={false} />

      {/* CTA BANNER SECTION */}
      <CtaBanner onNavigate={onNavigate} />

    </div>
  );
};
