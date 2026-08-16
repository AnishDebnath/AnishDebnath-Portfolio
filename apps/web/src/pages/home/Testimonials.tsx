import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MessageSquare } from 'lucide-react';
import { SectionHeader } from '../../components/common/SectionHeader';
import { TESTIMONIALS, TestimonialItem } from '../../data/testimonials';

interface TestimonialsSectionProps {
  darkTheme?: boolean;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ darkTheme = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position of testimonials section relative to viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax transforms: Center moves UPWARDS while side columns move DOWNWARDS dramatically on scroll
  const ySides = useTransform(scrollYProgress, [0, 1], [-220, 220]);
  const yCenter = useTransform(scrollYProgress, [0, 1], [260, -260]);

  // Data from data/testimonials.ts
  const { leftColumnItems, centerColumnTop, centerColumnFeatured, centerColumnBottom, rightColumnItems } = TESTIMONIALS;

  // Helper render for standard cards
  const renderStandardCard = (item: TestimonialItem, delay = 0) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={`${darkTheme ? 'bg-[#0d1322] border-neutral-800 shadow-md' : 'bg-white border-neutral-100 shadow-[0_12px_35px_rgba(0,0,0,0.06)]'} rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 border relative text-left transition-all hover:shadow-lg flex flex-col justify-between min-h-[280px] sm:min-h-[320px]`}
    >
      {/* Top Right Floating Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: delay + 0.1 }}
        className={`absolute top-6 right-6 w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden shadow-[0_8px_18px_rgba(0,0,0,0.14)] shrink-0 ${darkTheme ? 'bg-neutral-800 border border-neutral-700' : 'bg-neutral-100'}`}
      >
        <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
      </motion.div>

      {/* Top Empty Space to match reference layout */}
      <div className="h-14 sm:h-20" />

      {/* Quote and Author Section */}
      <div className="flex flex-col justify-end">
        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: delay + 0.18 }}
          className={`font-sans text-[15px] sm:text-[16.5px] ${darkTheme ? 'text-white' : 'text-[#111111]'} font-medium leading-[1.38] tracking-tight mb-5`}
        >
          “{item.quote}”
        </motion.p>

        {/* Author Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: delay + 0.28 }}
          className={`font-sans text-xs sm:text-[13px] ${darkTheme ? 'text-neutral-400' : 'text-neutral-500'} font-normal flex items-center flex-wrap`}
        >
          <span className={`font-semibold ${darkTheme ? 'text-white' : 'text-neutral-900'}`}>{item.name}</span>
          <span className="mx-2 text-neutral-400">•</span>
          <span className={`${darkTheme ? 'text-neutral-400' : 'text-neutral-500'} font-normal`}>{item.role}</span>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section ref={containerRef} className={`relative py-16 sm:py-24 ${darkTheme ? 'bg-[#060913] text-white' : 'bg-[#f5f5f5] text-[#0d130d]'} overflow-hidden`}>
      {darkTheme && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,81,45,0.12),rgba(255,255,255,0))]" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#f2512d]/10 rounded-full blur-3xl" />
        </div>
      )}

      <div className="max-w-[1085px] mx-auto px-4 sm:px-6 relative z-10">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeader
            title="TESTIMONIALS"
            subtitle="Honest feedback from founders and teams who trusted the process and results."
            dark={darkTheme}
            icon={<MessageSquare className="w-5 h-5 stroke-[2.2]" />}
          />
        </motion.div>

        {/* 3-COLUMN FLOATING CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-7 items-center mt-8 sm:mt-12">

          {/* LEFT COLUMN (MOVES DOWN ON SCROLL) */}
          <motion.div
            style={{ y: ySides }}
            className="flex flex-col justify-center gap-5 sm:gap-6 md:gap-7"
          >
            {leftColumnItems.map((item, i) => renderStandardCard(item, i * 0.12))}
          </motion.div>

          {/* CENTER COLUMN (MOVES UP ON SCROLL) */}
          <motion.div
            style={{ y: yCenter }}
            className="flex flex-col gap-5 sm:gap-6 md:gap-7"
          >
            {/* Top Center Card */}
            {renderStandardCard(centerColumnTop, 0.05)}

            {/* FEATURED MIDDLE CARD (Yellow Photo + Dark Card) */}
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
              className="bg-[#080808] text-white rounded-[28px] sm:rounded-[32px] p-2 sm:p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.4)] border border-neutral-900/80 relative text-left transition-all hover:shadow-[0_30px_70px_rgba(0,0,0,0.5)]"
            >
              {/* Image Container with Inner Rounded Radius */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.22 }}
                className="w-full aspect-[4/3] overflow-hidden rounded-[20px] sm:rounded-[22px] bg-[#eab308] relative"
              >
                <img
                  src={centerColumnFeatured.heroImage}
                  alt={centerColumnFeatured.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              {/* Text Area */}
              <div className="px-3 sm:px-4 pt-5 sm:pt-6 pb-3 sm:pb-4 bg-[#080808] text-white">
                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                  className="font-sans text-[15px] sm:text-[16.5px] font-semibold text-white leading-[1.38] tracking-tight mb-5"
                >
                  "{centerColumnFeatured.quote}"
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.38 }}
                  className="font-sans text-xs sm:text-[13px] text-neutral-400 font-normal flex items-center flex-wrap"
                >
                  <span className="font-bold text-white">{centerColumnFeatured.name}</span>
                  <span className="mx-2 text-neutral-500">.</span>
                  <span className="text-neutral-400 font-normal">{centerColumnFeatured.role}</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Bottom Center Card */}
            {renderStandardCard(centerColumnBottom, 0.25)}
          </motion.div>

          {/* RIGHT COLUMN (MOVES DOWN ON SCROLL) */}
          <motion.div
            style={{ y: ySides }}
            className="flex flex-col justify-center gap-5 sm:gap-6 md:gap-7"
          >
            {rightColumnItems.map((item, i) => renderStandardCard(item, 0.12 + i * 0.12))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
