import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MessageSquare } from 'lucide-react';
import { SectionHeader } from '../../components/SectionHeader';

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

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

  // Data matching the exact structure from reference screenshot
  const leftColumnItems: TestimonialItem[] = [
    {
      id: 'jenna',
      name: 'Jenna Morales',
      role: 'Design Lead at LaunchNest',
      quote: 'We needed a quick turnaround, and Daniel delivered a Framer site that was not only fast but visually stunning. Highly recommend.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 'theo',
      name: 'Theo Barnes',
      role: 'Product Manager at Driftly',
      quote: 'His attention to detail is unmatched. Our mobile app now feels intuitive and premium—our users noticed the difference right away.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
  ];

  const centerColumnTop: TestimonialItem = {
    id: 'marcus',
    name: 'Marcus Allen',
    role: 'CEO at Wellnest',
    quote: 'Working with Daniel felt like working with a creative partner, not just a designer. He brought clarity and elegance to our digital presence.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  };

  const centerColumnFeatured = {
    id: 'sophie',
    name: 'Sophie Allen',
    role: 'Founder at Bloom Studio',
    quote: 'Daniel made the entire process feel effortless. He listened, adapted, and delivered a site that completely exceeded our expectations.',
    heroImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  };

  const centerColumnBottom: TestimonialItem = {
    id: 'priya',
    name: 'Priya Nair',
    role: 'Co-Founder at Kinfolk Goods',
    quote: 'Daniel took our messy vision and turned it into something polished, clear, and effective. He truly understands design with purpose.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
  };

  const rightColumnItems: TestimonialItem[] = [
    {
      id: 'kevin',
      name: 'Kevin Yates',
      role: 'Director at Elevate Legal',
      quote: 'Professional, thoughtful, and fast. Our new website is not only beautiful but has increased engagement by over 40%.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 'lucia',
      name: 'Lucia Romero',
      role: 'Founder at Supply Co.',
      quote: 'He just gets it. Daniel has an instinct for what a brand needs, even when you’re still figuring it out yourself.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    },
  ];

  // Helper render for standard cards
  const renderStandardCard = (item: TestimonialItem) => (
    <div
      key={item.id}
      className={`${darkTheme ? 'bg-[#0d1322] border-neutral-800 shadow-md' : 'bg-white border-neutral-100 shadow-[0_12px_35px_rgba(0,0,0,0.06)]'} rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 border relative text-left transition-all hover:shadow-lg flex flex-col justify-between min-h-[280px] sm:min-h-[320px]`}
    >
      {/* Top Right Floating Avatar */}
      <div className={`absolute top-6 right-6 w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden shadow-[0_8px_18px_rgba(0,0,0,0.14)] shrink-0 ${darkTheme ? 'bg-neutral-800 border border-neutral-700' : 'bg-neutral-100'}`}>
        <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
      </div>

      {/* Top Empty Space to match reference layout */}
      <div className="h-14 sm:h-20" />

      {/* Quote and Author Section */}
      <div className="flex flex-col justify-end">
        {/* Quote */}
        <p className={`font-sans text-[15px] sm:text-[16.5px] ${darkTheme ? 'text-white' : 'text-[#111111]'} font-medium leading-[1.38] tracking-tight mb-5`}>
          “{item.quote}”
        </p>

        {/* Author Info */}
        <div className={`font-sans text-xs sm:text-[13px] ${darkTheme ? 'text-neutral-400' : 'text-neutral-500'} font-normal flex items-center flex-wrap`}>
          <span className={`font-semibold ${darkTheme ? 'text-white' : 'text-neutral-900'}`}>{item.name}</span>
          <span className="mx-2 text-neutral-400">•</span>
          <span className={`${darkTheme ? 'text-neutral-400' : 'text-neutral-500'} font-normal`}>{item.role}</span>
        </div>
      </div>
    </div>
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
        <SectionHeader
          title="TESTIMONIALS"
          subtitle="Hear from those who've experienced Anish's design expertise firsthand."
          dark={darkTheme}
          icon={<MessageSquare className="w-5 h-5 stroke-[2.2]" />}
        />

        {/* 3-COLUMN FLOATING CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-7 items-center mt-8 sm:mt-12">
          
          {/* LEFT COLUMN (MOVES DOWN ON SCROLL) */}
          <motion.div
            style={{ y: ySides }}
            className="flex flex-col justify-center gap-5 sm:gap-6 md:gap-7"
          >
            {leftColumnItems.map(renderStandardCard)}
          </motion.div>

          {/* CENTER COLUMN (MOVES UP ON SCROLL) */}
          <motion.div
            style={{ y: yCenter }}
            className="flex flex-col gap-5 sm:gap-6 md:gap-7"
          >
            {/* Top Center Card */}
            {renderStandardCard(centerColumnTop)}

            {/* FEATURED MIDDLE CARD (Yellow Photo + Dark Card) */}
            <div className="bg-[#080808] text-white rounded-[28px] sm:rounded-[32px] p-3.5 sm:p-4 shadow-[0_25px_60px_rgba(0,0,0,0.4)] border border-neutral-900/80 relative text-left transition-all hover:shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
              {/* Image Container with Inner Rounded Radius */}
              <div className="w-full h-56 sm:h-64 overflow-hidden rounded-[20px] sm:rounded-[22px] bg-[#eab308] relative">
                <img
                  src={centerColumnFeatured.heroImage}
                  alt={centerColumnFeatured.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Text Area */}
              <div className="px-3 sm:px-4 pt-5 sm:pt-6 pb-3 sm:pb-4 bg-[#080808] text-white">
                <p className="font-sans text-[15px] sm:text-[16.5px] font-semibold text-white leading-[1.38] tracking-tight mb-5">
                  “Daniel made the entire process feel effortless. He listened, adapted, and delivered a site that completely exceeded our expectations.”
                </p>

                <div className="font-sans text-xs sm:text-[13px] text-neutral-400 font-normal flex items-center flex-wrap">
                  <span className="font-bold text-white">{centerColumnFeatured.name}</span>
                  <span className="mx-2 text-neutral-500">•</span>
                  <span className="text-neutral-400 font-normal">{centerColumnFeatured.role}</span>
                </div>
              </div>
            </div>

            {/* Bottom Center Card */}
            {renderStandardCard(centerColumnBottom)}
          </motion.div>

          {/* RIGHT COLUMN (MOVES DOWN ON SCROLL) */}
          <motion.div
            style={{ y: ySides }}
            className="flex flex-col justify-center gap-5 sm:gap-6 md:gap-7"
          >
            {rightColumnItems.map(renderStandardCard)}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
