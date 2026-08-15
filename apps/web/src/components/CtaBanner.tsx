import React from 'react';
import { motion } from 'motion/react';
import { PageRoute } from '../types';
import { MessageSquare, Clock, Calendar, Star, Zap, CheckCircle2 } from 'lucide-react';

interface CtaBannerProps {
  onNavigate: (route: PageRoute, detailId?: string) => void;
  className?: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onNavigate, className = '' }) => {
  return (
    <section className={`py-16 sm:py-24 bg-[#f5f5f5] text-[#0d130d] relative overflow-hidden ${className}`}>
      <div className="max-w-[1085px] mx-auto px-4 sm:px-6 relative">
        {/* MAIN CTA CONTAINER CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[32px] sm:rounded-[44px] overflow-hidden border border-neutral-300/90 bg-[#f2efe6] bg-hero-grid p-6 sm:p-10 lg:p-12 shadow-xs"
        >

          {/* Subtle Corner Accents / Crosshairs */}
          <div className="absolute top-5 left-5 text-neutral-400/60 font-mono text-xs select-none pointer-events-none">+</div>
          <div className="absolute top-5 right-5 text-neutral-400/60 font-mono text-xs select-none pointer-events-none">+</div>
          <div className="absolute bottom-5 left-5 text-neutral-400/60 font-mono text-xs select-none pointer-events-none">+</div>
          <div className="absolute bottom-5 right-5 text-neutral-400/60 font-mono text-xs select-none pointer-events-none">+</div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

            {/* LEFT SIDE CARDS - ASYMMETRIC, RANDOMLY SCATTERED LAYOUT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
              }}
              className="lg:col-span-3 flex flex-col gap-6 order-2 lg:order-1 relative"
            >

              {/* Card 1: High Top-Left, sneaking over the left edge (-8deg rotation, shifted up-left) */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -40, rotate: -12 },
                  visible: { opacity: 1, x: 0, rotate: -8, transition: { duration: 0.7, ease: 'easeOut' } },
                }}
                className="p-4 sm:p-4.5 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-300/90 shadow-lg transform lg:-rotate-8 lg:-translate-x-6 lg:-translate-y-4 hover:rotate-0 hover:translate-x-0 hover:translate-y-0 hover:scale-105 transition-all duration-300 cursor-pointer group hover:z-30 hover:shadow-xl hover:border-neutral-400"
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22c55e]"></span>
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#083315] font-bold">
                    Accepting Projects
                  </span>
                </div>

                <div className="flex items-center gap-3 pt-2.5 mt-2 border-t border-neutral-200/80">
                  <div className="w-8 h-8 rounded-xl bg-[#0d130d] text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Clock className="w-4 h-4 text-[#22c55e]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0d130d] font-sans">Fast Response</p>
                    <p className="text-[11px] text-neutral-500 font-sans">Average &lt; 2 hours</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Lower down, shifted inwards (+5deg rotation, pushed lower/right) */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -40, rotate: 10 },
                  visible: { opacity: 1, x: 0, rotate: 5, transition: { duration: 0.7, ease: 'easeOut' } },
                }}
                className="p-4 sm:p-4.5 rounded-2xl bg-[#0d130d] text-white border border-neutral-800 shadow-xl transform lg:rotate-5 lg:translate-x-4 lg:translate-y-3 hover:rotate-0 hover:translate-x-0 hover:translate-y-0 hover:scale-105 transition-all duration-300 cursor-pointer group hover:z-30 hover:shadow-2xl hover:border-neutral-700"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#f2512d]/20 border border-[#f2512d]/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Star className="w-4 h-4 text-[#f2512d] fill-[#f2512d]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-[#f2512d] text-xs font-bold">
                      <span>5.0 Star Rating</span>
                    </div>
                    <p className="text-[11px] text-neutral-300 font-sans">100% Client Satisfaction</p>
                  </div>
                </div>
              </motion.div>

            </motion.div>

            {/* CENTER CTA CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.35 }}
              className="lg:col-span-6 flex flex-col items-center text-center px-2 sm:px-4 order-1 lg:order-2 my-4 sm:my-6 relative z-20"
            >
              <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#0d130d] leading-[1.12] mb-6 max-w-md">
                LET'S BUILD SOMETHING<br className="hidden sm:inline" /> GREAT TOGETHER
              </h2>

              {/* Book a Call Button (Exact matching style to Navbar "Let's Talk" button) */}
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#f2512d] hover:bg-[#d03a18] text-white text-sm sm:text-[15px] font-sans font-semibold tracking-wide transition-all duration-300 shadow-sm active:scale-95 group cursor-pointer shrink-0 hover:shadow-md hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4 text-white fill-white/20 group-hover:scale-110 transition-transform" />
                <span>Book a Call</span>
              </button>
            </motion.div>

            {/* RIGHT SIDE CARDS - ASYMMETRIC, RANDOMLY SCATTERED LAYOUT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
              }}
              className="lg:col-span-3 flex flex-col gap-6 order-3 lg:order-3 relative"
            >

              {/* Card 3: Shifted right & slightly down (+7deg rotation) */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 40, rotate: 12 },
                  visible: { opacity: 1, x: 0, rotate: 7, transition: { duration: 0.7, ease: 'easeOut' } },
                }}
                className="p-4 sm:p-4.5 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-300/90 shadow-lg transform lg:rotate-7 lg:translate-x-5 lg:-translate-y-2 hover:rotate-0 hover:translate-x-0 hover:translate-y-0 hover:scale-105 transition-all duration-300 cursor-pointer group hover:z-30 hover:shadow-xl hover:border-neutral-400"
              >
                <div className="flex items-center gap-2 text-[#f2512d]">
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#0d130d]">
                    15-Min Strategy Call
                  </span>
                </div>

                <ul className="space-y-1.5 pt-2 mt-1 border-t border-neutral-200/80 text-[11px] sm:text-xs text-neutral-700 font-sans">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
                    <span>Free 1:1 project review</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
                    <span>Scope & timeline estimate</span>
                  </li>
                </ul>
              </motion.div>

              {/* Card 4: Sneaking out bottom right (-6deg rotation, pushed left and down) */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 40, rotate: -10 },
                  visible: { opacity: 1, x: 0, rotate: -6, transition: { duration: 0.7, ease: 'easeOut' } },
                }}
                className="p-4 sm:p-4.5 rounded-2xl bg-[#0d130d] text-white border border-neutral-800 shadow-xl transform lg:-rotate-6 lg:-translate-x-5 lg:translate-y-5 hover:rotate-0 hover:translate-x-0 hover:translate-y-0 hover:scale-105 transition-all duration-300 cursor-pointer group hover:z-30 hover:shadow-2xl hover:border-neutral-700"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#22c55e]/20 border border-[#22c55e]/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Zap className="w-4 h-4 text-[#22c55e]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white font-sans">Prefer Async?</p>
                    <p className="text-[11px] text-neutral-400 font-sans">Send your brief anytime</p>
                  </div>
                </div>
              </motion.div>

            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};



