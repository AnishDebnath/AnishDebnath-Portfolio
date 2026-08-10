import React, { useState, useEffect, useRef } from 'react';
import { SectionHeader } from './SectionHeader';
import { Search, Palette, Code2, Rocket, CheckCircle2, Clock, Sparkles, Users, Lightbulb, Compass, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PageRoute } from '../types';

interface WorkProcessSectionProps {
  onNavigate?: (route: PageRoute) => void;
  className?: string;
}

interface ProcessStep {
  number: string;
  tag: string;
  title: string;
  shortDesc: string;
  duration: string;
  icon: React.ReactNode;
  description: string;
  deliverables: string[];
  highlight: string;
}

export const WorkProcessSection: React.FC<WorkProcessSectionProps> = ({ className = '' }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const isClickScrollingRef = useRef<boolean>(false);

  const steps: ProcessStep[] = [
    {
      number: '01',
      tag: 'DISCOVERY',
      title: 'Discovery',
      shortDesc: 'We start by understanding your goals, audience, brand needs, and the direction your project should take.',
      duration: '3–5 Days',
      icon: <Users className="w-4 h-4 text-[#0d130d]" />,
      description: 'Understanding your business goals, target audience, and market positioning. We define the project roadmap, sitemap, wireframes, and core requirements before writing a single line of code.',
      deliverables: ['Project Scope & Roadmap', 'UX Wireframes & Flow', 'Competitive Analysis', 'Content Architecture'],
      highlight: '100% alignment before design starts'
    },
    {
      number: '02',
      tag: 'STRATEGY',
      title: 'Strategy & Design',
      shortDesc: 'I define the structure, message, and creative approach before moving into the visual design stage.',
      duration: '1–2 Weeks',
      icon: <Lightbulb className="w-4 h-4 text-[#0d130d]" />,
      description: 'Crafting high-fidelity visual interfaces, bespoke typography scales, micro-interactions, and a cohesive design system in Figma. You get interactive prototypes to preview and test early.',
      deliverables: ['High-Fidelity UI Screens', 'Figma Design System', 'Interactive Prototype', 'Responsive Layouts'],
      highlight: 'Pixel-perfect & component-driven'
    },
    {
      number: '03',
      tag: 'DIRECTION',
      title: 'Development & Build',
      shortDesc: 'A clear visual direction is shaped into production-ready code with responsive, fast-loading layouts.',
      duration: '1–2 Weeks',
      icon: <Terminal className="w-4 h-4 text-[#0d130d]" />,
      description: 'Translating designs into clean, production-ready code using React, Next.js, and Tailwind CSS. Built with modular components, smooth animations, SEO best practices, and fast load speeds.',
      deliverables: ['Clean React & Tailwind Code', 'Fully Responsive Web App', 'Smooth Micro-Animations', 'SEO & Speed Tuning'],
      highlight: '95+ Lighthouse speed score'
    },
    {
      number: '04',
      tag: 'LAUNCH',
      title: 'Launch & Delivery',
      shortDesc: 'Final QA testing, deployment to your live server, domain setup, and seamless handoff support.',
      duration: '2–3 Days',
      icon: <Rocket className="w-4 h-4 text-[#0d130d]" />,
      description: 'Comprehensive cross-device testing, performance audits, and accessibility checks. Seamless deployment to production with full handoff documentation and 30-day post-launch support.',
      deliverables: ['Cross-Browser QA Audit', 'Production Deployment', 'Component Handoff', '30-Day Post-Launch Support'],
      highlight: 'Zero-downtime deployment'
    }
  ];

  // Scroll handler to update active step as user scrolls through the section
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !stickyRef.current || isClickScrollingRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const stickyHeight = stickyRef.current.offsetHeight;
      const stickyRect = stickyRef.current.getBoundingClientRect();

      const scrollableDistance = containerRect.height - stickyHeight;
      if (scrollableDistance <= 0) return;

      // Distance scrolled into the sticky container
      const scrolled = stickyRect.top - containerRect.top;
      const progress = scrolled / scrollableDistance;

      if (progress <= 0) {
        setActiveStep(0);
      } else if (progress >= 1) {
        setActiveStep(3);
      } else {
        const calculatedStep = Math.min(3, Math.max(0, Math.floor(progress * 4)));
        setActiveStep(calculatedStep);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    if (!containerRef.current || !stickyRef.current) return;

    isClickScrollingRef.current = true;
    const containerRect = containerRef.current.getBoundingClientRect();
    const stickyHeight = stickyRef.current.offsetHeight;
    const scrollableDistance = containerRect.height - stickyHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const stickyRect = stickyRef.current.getBoundingClientRect();

    const stepProgress = (index + 0.5) / 4;
    const targetScrolled = stepProgress * scrollableDistance;
    const containerTopInDoc = containerRect.top + scrollTop;
    const targetScrollY = containerTopInDoc + targetScrolled - stickyRect.top;

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    });

    setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 800);
  };

  const currentStep = steps[activeStep];

  return (
    <section className={`py-16 sm:py-24 bg-[#f5f5f5] text-[#0d130d] relative ${className}`}>
      <div className="max-w-[980px] mx-auto px-4 sm:px-6">
        
        {/* TALL STICKY SCROLL CONTAINER */}
        <div ref={containerRef} className="relative min-h-[200vh] lg:min-h-[240vh]">
          
          {/* STICKY WRAPPER FOR HEADER + CONTENT - CENTERED IN VIEWPORT */}
          <div 
            ref={stickyRef} 
            className="sticky top-12 sm:top-16 lg:top-[calc(50vh-290px)] py-4 space-y-6 lg:space-y-8"
          >
            {/* Section Header */}
            <SectionHeader
              title="WORK PROCESS"
              subtitle="A clear, battle-tested 4-step workflow designed to take your idea from concept to launch with speed, clarity, and precision."
              dark={false}
              icon={
                <Sparkles className="w-6 h-6 stroke-[2.2]" />
              }
            />

            {/* TWO COLUMNS GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              {/* LEFT SIDE: TIMELINE CARDS LIST (MATCHES SCREENSHOT DESIGN) */}
            <div className="lg:col-span-5 flex flex-col gap-4 relative">
              {/* Continuous Vertical Timeline Line Track (from center of top icon to center of bottom icon) */}
              <div className="absolute left-[34px] sm:left-[36px] top-[32px] sm:top-[36px] bottom-[32px] sm:bottom-[36px] w-[2px] z-0">
                {/* Background Line */}
                <div className="w-full h-full bg-neutral-300/70 rounded-full" />
                
                {/* Active Animated Progress Line */}
                <motion.div
                  className="absolute top-0 left-0 w-full bg-[#f2512d] rounded-full"
                  animate={{
                    height: `${(activeStep / (steps.length - 1)) * 100}%`
                  }}
                  transition={{ type: 'spring', stiffness: 220, damping: 28 }}
                />
              </div>

              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.number}
                    onClick={() => handleStepClick(idx)}
                    className={`w-full text-left transition-all duration-300 cursor-pointer relative z-10 flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl border ${
                      isActive
                        ? 'bg-white text-[#0d130d] border-neutral-300 shadow-sm scale-[1.01]'
                        : 'bg-transparent text-neutral-600 border-transparent hover:bg-white/40 hover:border-neutral-200/50 opacity-65 hover:opacity-100'
                    }`}
                  >
                    {/* Icon Box sitting over vertical timeline line */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 relative z-10 shadow-2xs ${
                        isActive
                          ? 'bg-[#f2512d] text-white border border-[#f2512d] shadow-2xs'
                          : 'bg-white text-[#0d130d] border border-neutral-300/80'
                      }`}
                    >
                      {React.cloneElement(step.icon as React.ReactElement, {
                        className: `w-4.5 h-4.5 ${isActive ? 'text-white' : 'text-[#0d130d]'}`
                      })}
                    </div>

                    {/* Card Content: Tag, Title, Duration (No description text) */}
                    <div className="flex-1 min-w-0 flex items-center justify-between gap-2.5">
                      <div>
                        <span className={`block font-mono text-[10px] uppercase tracking-wider font-bold mb-0.5 ${
                          isActive ? 'text-[#f2512d]' : 'text-neutral-400'
                        }`}>
                          / {step.tag}
                        </span>
                        <h4 className={`font-sans font-bold text-base sm:text-lg tracking-tight ${
                          isActive ? 'text-[#0d130d]' : 'text-neutral-600'
                        }`}>
                          {step.title}
                        </h4>
                      </div>

                      <span className={`font-mono text-[11px] font-bold shrink-0 px-2.5 py-1 rounded-full border transition-colors ${
                        isActive
                          ? 'bg-[#0d130d] border-[#0d130d] text-white'
                          : 'bg-white/60 border-neutral-300/60 text-neutral-500'
                      }`}>
                        {step.duration}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* RIGHT SIDE: ANIMATED DETAILS CARD (THEME ALIGNED, BALANCED PROPORTIONS) */}
            <div className="lg:col-span-7 bg-white rounded-[24px] p-6 sm:p-8 lg:p-9 border border-neutral-200/90 shadow-sm flex flex-col justify-between relative overflow-hidden min-h-[300px]">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep.number}
                  initial={{ opacity: 0, y: 12, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.99 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Top Row: Icon + Duration/Time Badge */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-[#f5f2eb] border border-neutral-200/80 flex items-center justify-center text-[#0d130d]">
                        {React.cloneElement(currentStep.icon as React.ReactElement, {
                          className: 'w-5 h-5 text-[#0d130d] stroke-[2]'
                        })}
                      </div>

                      <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold px-3 py-1 rounded-full bg-[#f5f2eb] border border-neutral-300/70 text-[#0d130d]">
                        <Clock className="w-3.5 h-3.5 text-[#f2512d]" />
                        <span>{currentStep.duration}</span>
                      </span>
                    </div>

                    {/* Title Heading */}
                    <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#0d130d] tracking-tight mb-2.5">
                      {currentStep.title}
                    </h3>

                    {/* Description Paragraph */}
                    <p className="text-sm sm:text-base text-neutral-600 font-sans leading-relaxed">
                      {currentStep.description}
                    </p>
                  </div>

                  {/* Clean Subtle Deliverables List */}
                  {currentStep.deliverables && currentStep.deliverables.length > 0 && (
                    <div className="pt-5 mt-6 border-t border-neutral-200/70 flex flex-wrap items-center gap-2">
                      {currentStep.deliverables.map((item, dIdx) => (
                        <span
                          key={dIdx}
                          className="inline-flex items-center gap-1.5 bg-[#f5f2eb]/90 border border-neutral-200/90 rounded-lg px-3 py-1.5 text-xs font-sans text-[#0d130d] font-medium"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#f2512d] shrink-0" />
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>

            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
);
};


