import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface AppleHelloIntroProps {
  onComplete: () => void;
}

const GREETINGS = [
  { text: "Hello", lang: "English" },
  { text: "Hola", lang: "Spanish" },
  { text: "Bonjour", lang: "French" },
  { text: "नमस्ते", lang: "Hindi" },
  { text: "নমস্কার", lang: "Bengali" },
  { text: "こんにちは", lang: "Japanese" },
];

export const AppleHelloIntro: React.FC<AppleHelloIntroProps> = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [showScript, setShowScript] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Cycle through greetings at a balanced, easily readable pace (520ms per word)
    if (index < GREETINGS.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 520);
      return () => clearTimeout(timer);
    } else {
      // After cycling greetings, transition smoothly to cursive handwritten "hello."
      const scriptTimer = setTimeout(() => {
        setShowScript(true);
      }, 520);

      // Dismiss intro after stroke animation completes with a balanced pause
      const exitTimer = setTimeout(() => {
        handleFinish();
      }, 2000);

      return () => {
        clearTimeout(scriptTimer);
        clearTimeout(exitTimer);
      };
    }
  }, [index]);

  const handleFinish = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 600); // match exit transition duration
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="apple-hello-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03, y: -15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0b0f0b] text-white select-none overflow-hidden"
        >
          {/* Subtle Ambient Radial Warm Glow */}
          <div className="absolute w-[600px] h-[600px] bg-[#f2512d]/15 rounded-full blur-[150px] pointer-events-none transform -translate-y-6" />

          {/* Top Skip Control */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute top-6 right-6 z-10"
          >
            <button
              onClick={handleFinish}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-mono text-neutral-300 hover:text-white transition-all duration-200 backdrop-blur-md cursor-pointer flex items-center gap-1.5 active:scale-95"
            >
              <span>Skip</span>
              <span className="text-[10px] text-neutral-400 font-sans">✕</span>
            </button>
          </motion.div>

          {/* Main Animation Display */}
          <div className="relative flex flex-col items-center justify-center min-h-[260px] px-6 text-center">
            {!showScript ? (
              /* Phase 1: Smooth Multilingual Greetings */
              <div className="relative h-32 sm:h-40 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 12, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 1.03 }}
                    transition={{ duration: 0.22, ease: [0.25, 1, 0.5, 1] }}
                    className="flex flex-col items-center"
                  >
                    <span className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white font-display drop-shadow-lg">
                      {GREETINGS[index].text}
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-neutral-400 mt-4 tracking-widest uppercase">
                      {GREETINGS[index].lang}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            ) : (
              /* Phase 2: Iconic Apple Cursive "hello." Writing Effect */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center justify-center relative"
              >
                {/* SVG Path Draw Cursive "hello." */}
                <div className="relative mb-3 flex items-center justify-center">
                  <svg
                    viewBox="0 0 300 110"
                    className="w-72 sm:w-96 md:w-[420px] h-auto overflow-visible filter drop-shadow-[0_0_25px_rgba(242,81,45,0.45)]"
                  >
                    <defs>
                      <linearGradient id="apple-hello-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="50%" stopColor="#f2512d" />
                        <stop offset="100%" stopColor="#ff7d56" />
                      </linearGradient>
                    </defs>

                    {/* Smooth, perfectly legible Cursive "hello" stroke animation */}
                    <motion.path
                      d="M 22 72 C 22 32, 40 10, 50 10 C 58 10, 44 50, 44 85 C 44 58, 64 48, 76 48 C 88 48, 82 85, 82 85 C 82 85, 96 58, 108 58 C 118 58, 114 70, 100 72 C 92 73, 102 85, 116 85 C 126 85, 142 30, 150 10 C 158 10, 146 55, 146 85 C 146 85, 172 30, 180 10 C 188 10, 176 55, 176 85 C 188 85, 202 55, 216 55 C 230 55, 232 72, 222 83 C 212 92, 198 78, 208 60 C 216 48, 230 54, 250 56"
                      fill="none"
                      stroke="url(#apple-hello-grad)"
                      strokeWidth="5.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.05, ease: [0.33, 1, 0.68, 1] }}
                    />

                    {/* Dot at the end of hello. */}
                    <motion.circle
                      cx="260"
                      cy="82"
                      r="4.5"
                      fill="#f2512d"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.0, duration: 0.22, ease: "backOut" }}
                    />
                  </svg>
                </div>

                {/* Subtitle / Welcome text */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-2 text-xs sm:text-sm font-sans text-neutral-300 mt-4 tracking-wide"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#f2512d] animate-pulse" />
                  <span className="font-medium">Welcome to Anish Debnath's Portfolio</span>
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* Bottom Progress Bar */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-36 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#f2512d] to-[#ff7d56]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 4.6, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
