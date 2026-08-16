import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../../components/common/SectionHeader';

interface CapabilitiesSectionProps {
  onNavigate?: (route: 'contact') => void;
  darkTheme?: boolean;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onNavigate, darkTheme = true }) => {
  return (
    <section className={`relative py-16 sm:py-24 ${darkTheme ? 'bg-[#060913] text-white' : 'bg-[#f5f5f5] text-[#0d130d]'}`}>
      {darkTheme && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,81,45,0.12),rgba(255,255,255,0))]" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#f2512d]/10 rounded-full blur-3xl" />
        </div>
      )}

      <div className="max-w-[1085px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeader
            title="What I Do"
            subtitle="Here's how I help businesses bring their ideas to life through design and technology."
            dark={darkTheme}
            icon={
              <svg className="w-6 h-6 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />
        </motion.div>

        {/* Asymmetric Bento Grid (Row 1: 5-col / 7-col, Row 2: 7-col / 5-col) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 mt-8 sm:mt-12"
        >

          {/* 1. BRANDING CARD (Row 1 Left - Narrow 5/12) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40, x: -24 },
              visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
            }}
            className={`md:col-span-5 ${darkTheme ? 'bg-[#0d1322] border-neutral-800' : 'bg-white border-neutral-200/90'} rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 border flex flex-col justify-between overflow-hidden relative group hover:border-[#f2512d]/50 transition-all duration-300 shadow-sm`}
          >
            <div>
              <h3 className={`font-sans font-bold text-xl sm:text-2xl ${darkTheme ? 'text-white' : 'text-[#0d130d]'} tracking-tight mb-2.5 group-hover:text-[#f2512d] transition-colors`}>
                Branding
              </h3>
              <p className={`text-xs sm:text-sm ${darkTheme ? 'text-neutral-300' : 'text-neutral-600'} font-sans leading-relaxed mb-6`}>
                Developing cohesive brand identities that reflect your core values. Making your brand unforgettable and instantly recognizable.
              </p>
            </div>

            {/* Graphic Mockup: Brand Specimen */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
              className="mt-2 pt-2 rounded-2xl bg-[#f5f2eb] border border-neutral-200/80 p-3.5 sm:p-4 overflow-hidden relative"
            >
              <div className="relative pt-2 pb-1">
                {/* Background Layer (Offset) */}
                <div className="absolute top-0 inset-x-3 h-24 bg-neutral-200/60 rounded-xl border border-neutral-300/60 transform -translate-y-2 scale-95 opacity-60" />

                {/* Main Foreground Specimen Card */}
                <div className="relative bg-white rounded-xl p-4 border border-neutral-200/90 shadow-2xs flex items-center justify-between">
                  <div className="font-serif font-bold text-3xl sm:text-4xl text-[#0d130d] tracking-tighter leading-none pr-3.5 border-r border-neutral-200">
                    Ag
                  </div>

                  <div className="space-y-1 pl-1">
                    <div className="text-[11px] font-sans font-bold text-[#0d130d] tracking-wide">
                      Font Display
                    </div>
                    <div className="text-[11px] font-serif italic text-neutral-600">
                      Font Display
                    </div>
                    <div className="flex items-center gap-1.5 pt-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#f2512d] inline-block shadow-2xs" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#e6c820] inline-block shadow-2xs" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1fc932] inline-block shadow-2xs" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0d130d] inline-block shadow-2xs" />
                    </div>
                  </div>

                  <div className="w-7 h-7 rounded-lg bg-[#f2512d]/10 border border-[#f2512d]/30 flex items-center justify-center text-[#f2512d]">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <circle cx="8.5" cy="8.5" r="3" />
                      <circle cx="15.5" cy="8.5" r="3" />
                      <circle cx="8.5" cy="15.5" r="3" />
                      <circle cx="15.5" cy="15.5" r="3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* 2. WEB DESIGN CARD (Row 1 Right - Wide 7/12) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40, x: 24 },
              visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
            }}
            className={`md:col-span-7 ${darkTheme ? 'bg-[#0d1322] border-neutral-800' : 'bg-white border-neutral-200/90'} rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 border flex flex-col justify-between overflow-hidden relative group hover:border-[#f2512d]/50 transition-all duration-300 shadow-sm`}
          >
            <div>
              <h3 className={`font-sans font-bold text-xl sm:text-2xl ${darkTheme ? 'text-white' : 'text-[#0d130d]'} tracking-tight mb-2.5 group-hover:text-[#f2512d] transition-colors`}>
                Web Design
              </h3>
              <p className={`text-xs sm:text-sm ${darkTheme ? 'text-neutral-300' : 'text-neutral-600'} font-sans leading-relaxed mb-6`}>
                Designing visually stunning, user-friendly websites and landing pages that captivate visitors. Turning clicks into customers with intuitive design.
              </p>
            </div>

            {/* Graphic Mockup: Browser Interface */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              className={`mt-2 pt-2 rounded-2xl ${darkTheme ? 'bg-[#141b2d] border-neutral-800' : 'bg-[#f5f2eb] border-neutral-200/80'} border p-3.5 sm:p-4 overflow-hidden relative`}
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-700/60 text-[11px] font-mono text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                </div>
                <div className="bg-white/80 px-3 py-0.5 rounded-md text-[#0d130d] text-[10px] border border-neutral-300/80 font-semibold">
                  v2 - Home
                </div>
                <div className="flex gap-2 text-neutral-400">
                  <span>⋮</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 sm:p-6 border border-neutral-200/90 text-center relative overflow-hidden shadow-2xs">
                <div className="inline-block bg-[#f2512d]/10 text-[#f2512d] text-[10px] font-mono px-2.5 py-0.5 rounded-full mb-2 border border-[#f2512d]/20 font-semibold">
                  WEB DESIGN & DEVELOPMENT
                </div>
                <h4 className="font-sans font-bold text-sm sm:text-base text-[#0d130d] tracking-tight leading-snug mb-2 max-w-sm mx-auto">
                  Web Design & Development Partner for Seamless Growth
                </h4>
                <p className="text-[11px] text-neutral-500 max-w-xs mx-auto mb-3 line-clamp-1">
                  Empowering ambitious brands with high-conversion web experiences.
                </p>
                <div className="flex items-center justify-center gap-2">
                  <span className="bg-[#0d130d] text-white text-[10px] font-medium px-3 py-1 rounded-full shadow-2xs">
                    View Work
                  </span>
                  <span className="bg-neutral-100 text-[#0d130d] text-[10px] font-medium px-3 py-1 rounded-full border border-neutral-300">
                    Contact
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* 3. PRODUCT DESIGN CARD (Row 2 Left - Wide 7/12) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40, x: -24 },
              visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
            }}
            className={`md:col-span-7 ${darkTheme ? 'bg-[#0d1322] border-neutral-800' : 'bg-white border-neutral-200/90'} rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 border flex flex-col justify-between overflow-hidden relative group hover:border-[#f2512d]/50 transition-all duration-300 shadow-sm`}
          >
            <div>
              <h3 className={`font-sans font-bold text-xl sm:text-2xl ${darkTheme ? 'text-white' : 'text-[#0d130d]'} tracking-tight mb-2.5 group-hover:text-[#f2512d] transition-colors`}>
                Product Design
              </h3>
              <p className={`text-xs sm:text-sm ${darkTheme ? 'text-neutral-300' : 'text-neutral-600'} font-sans leading-relaxed mb-6`}>
                Creating intuitive and attractive product designs that resonate with users. Enhancing user experience and retention through innovation.
              </p>
            </div>

            {/* Graphic Mockup: Product Workspace */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
              className={`mt-2 pt-2 rounded-2xl ${darkTheme ? 'bg-[#141b2d] border-neutral-800' : 'bg-[#f5f2eb] border-neutral-200/80'} border p-3.5 sm:p-4 overflow-hidden relative`}
            >
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-neutral-700/60 text-[11px] text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#f2512d]" />
                  <span className={`font-mono text-[10px] font-medium ${darkTheme ? 'text-neutral-200' : 'text-[#0d130d]'}`}>Figma Canvas / App UI</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-400">
                  <span>100%</span>
                  <span>Grid: On</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 items-center">
                <div className="bg-white rounded-xl p-3 border border-neutral-200/90 text-center shadow-2xs">
                  <div className="text-[10px] text-neutral-400 mb-1 font-mono">00:03:22</div>
                  <div className="w-9 h-9 mx-auto rounded-full bg-gradient-to-tr from-[#f2512d] to-amber-500 flex items-center justify-center shadow-2xs my-2">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18.36 6.64a9 9 0 1 1-12.73 0M12 2v10" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="text-[10px] font-semibold text-[#0d130d]">Active Session</div>
                </div>

                <div className="bg-white rounded-xl p-3 border border-neutral-200/90 space-y-2 shadow-2xs">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-neutral-500">Location</span>
                    <span className="text-emerald-600 font-mono font-bold">Live</span>
                  </div>
                  <div className="bg-neutral-50 p-1.5 rounded-md border border-neutral-200 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-[9px] text-[#0d130d] font-mono truncate">New York, US</span>
                  </div>
                  <div className="bg-neutral-50 p-1.5 rounded-md border border-neutral-200 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-[9px] text-[#0d130d] font-mono truncate">Frankfurt, DE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* 4. DEVELOPMENT CARD (Row 2 Right - Narrow 5/12) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40, x: 24 },
              visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
            }}
            className={`md:col-span-5 ${darkTheme ? 'bg-[#0d1322] border-neutral-800' : 'bg-white border-neutral-200/90'} rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 border flex flex-col justify-between overflow-hidden relative group hover:border-[#f2512d]/50 transition-all duration-300 shadow-sm`}
          >
            <div>
              <h3 className={`font-sans font-bold text-xl sm:text-2xl ${darkTheme ? 'text-white' : 'text-[#0d130d]'} tracking-tight mb-2.5 group-hover:text-[#f2512d] transition-colors`}>
                Development
              </h3>
              <p className={`text-xs sm:text-sm ${darkTheme ? 'text-neutral-300' : 'text-neutral-600'} font-sans leading-relaxed mb-6`}>
                Building robust, scalable applications using the latest technologies. Bringing your ideas to life seamlessly.
              </p>
            </div>

            {/* Graphic Mockup: Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
              className={`mt-2 pt-2 rounded-2xl ${darkTheme ? 'bg-[#141b2d] border-neutral-800' : 'bg-[#f5f2eb] border-neutral-200/80'} border p-3.5 sm:p-4 overflow-hidden relative`}
            >
              <div className="flex flex-wrap items-center gap-1.5 mb-3">
                <span className="bg-white text-[#0d130d] px-2 py-0.5 rounded-md text-[10px] font-mono border border-neutral-300/80 flex items-center gap-1 shadow-2xs font-semibold">
                  <span className="text-[#f2512d] font-bold">𝔽</span> Framer
                </span>
                <span className="bg-white text-[#0d130d] px-2 py-0.5 rounded-md text-[10px] font-mono border border-neutral-300/80 flex items-center gap-1 shadow-2xs font-semibold">
                  <span className="text-sky-600 font-bold">⚛</span> React
                </span>
                <span className="bg-white text-[#0d130d] px-2 py-0.5 rounded-md text-[10px] font-mono border border-neutral-300/80 flex items-center gap-1 shadow-2xs font-semibold">
                  <span className="text-blue-600 font-bold">TS</span> TS
                </span>
              </div>

              <div className="bg-white rounded-xl p-3 border border-neutral-200/90 relative shadow-2xs">
                <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-neutral-200 text-[10px] font-mono text-neutral-500">
                  <span>App.tsx</span>
                  <span className="text-emerald-600 font-bold">● Live Build</span>
                </div>
                <div className="bg-neutral-50 p-2.5 rounded-lg border border-neutral-200/80 text-center">
                  <h5 className="font-sans font-bold text-xs text-[#0d130d] mb-1">
                    Impactful Code & Results
                  </h5>
                  <span className="inline-block bg-[#0d130d] text-white text-[9px] font-medium px-2.5 py-0.5 rounded-full mt-1">
                    Deploy
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};
