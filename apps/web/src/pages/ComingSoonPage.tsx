import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Twitter, Github, Linkedin, CheckCircle2, Loader2, Send } from 'lucide-react';

export const ComingSoonPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
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
    <div className="min-h-screen flex flex-col font-sans select-none bg-[#f5f5f5] bg-pinstripe-light text-[#0d130d] relative overflow-hidden">
      {/* 45-degree Diagonal Pinstripe Pattern Overlay matching website theme */}
      <div className="absolute inset-0 bg-pinstripe-light pointer-events-none z-0" />

      {/* Refined Navigation Bar matching website brand identity */}
      <header className="w-full px-6 sm:px-12 py-5 flex items-center justify-between bg-[#f5f5f5]/90 backdrop-blur-md border-b border-neutral-300/80 z-20 sticky top-0 shadow-2xs">
        <div className="font-display font-normal text-2xl uppercase tracking-tight text-[#0d130d] flex items-center gap-0.5">
          ANISH<span className="text-[#f2512d]">.</span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <span className="hidden sm:inline-block font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-500">
            Follow me
          </span>
          <div className="flex items-center gap-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white border border-neutral-300/80 flex items-center justify-center text-[#0d130d] hover:bg-[#f2512d] hover:text-white hover:border-[#f2512d] transition-all shadow-2xs"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white border border-neutral-300/80 flex items-center justify-center text-[#0d130d] hover:bg-[#f2512d] hover:text-white hover:border-[#f2512d] transition-all shadow-2xs"
              title="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white border border-neutral-300/80 flex items-center justify-center text-[#0d130d] hover:bg-[#f2512d] hover:text-white hover:border-[#f2512d] transition-all shadow-2xs"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Center Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16 relative z-10 text-center max-w-4xl mx-auto w-full">
        {/* Top Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-300/90 text-xs font-mono font-semibold uppercase tracking-wider text-[#0d130d] shadow-2xs mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f2512d] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f2512d]"></span>
          </span>
          <span>Work in Progress</span>
        </motion.div>

        {/* Main Headline with Strikethrough & Hand-drawn Arrow to Portfolio */}
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

        {/* Subtitle Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-neutral-600 text-sm sm:text-base max-w-lg mx-auto mb-8 font-sans leading-relaxed mt-6 sm:mt-10"
        >
          I am designing and developing a new experience. Check back soon for the launch of my portfolio.
        </motion.p>

        {/* Email Subscribe Form */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full max-w-md mx-auto mb-10"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white border border-emerald-300/80 rounded-2xl p-4 flex items-center justify-center gap-3 text-sm text-neutral-800 shadow-sm"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="font-medium">Thank you! You've been added to my updates list.</span>
            </motion.div>
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
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </motion.div>

        {/* Progress Bar Component: Starts at 0%, smoothly fills to 50% with intro-page style loading animation */}
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
      </main>
    </div>
  );
};




