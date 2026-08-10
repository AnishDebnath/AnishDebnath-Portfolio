import React from 'react';

export const BrandMarquee: React.FC = () => {
  const brands = [
    { name: 'MINEXA.AI', icon: '✦', tagline: 'AI Solutions' },
    { name: 'PROMOTO', icon: '⚡', tagline: 'SaaS Platform' },
    { name: 'FLOWBIT', icon: '◈', tagline: 'Workflow Automation' },
    { name: 'NOVALABS', icon: '❖', tagline: 'Digital Innovation' },
    { name: 'VERTEX', icon: '▲', tagline: 'Product Studio' },
    { name: 'SYNAPSE', icon: '◉', tagline: 'UX & Insights' },
    { name: 'LUMINA', icon: '✽', tagline: 'Creative Tech' },
    { name: 'AURA', icon: '⬡', tagline: 'Design Systems' },
  ];

  // Repeat twice for seamless infinite marquee loop
  const marqueeList = [...brands, ...brands];

  return (
    <section className="py-8 sm:py-12 bg-[#f5f5f5] text-[#0d130d] overflow-hidden relative">
      <div className="max-w-[1085px] mx-auto px-4 sm:px-6 mb-6 text-center">
        <p className="font-mono-tag text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-500 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f2512d]" />
          Trusted by brands & teams around the world
          <span className="w-1.5 h-1.5 rounded-full bg-[#f2512d]" />
        </p>
      </div>

      {/* Marquee Track Container with same width as section header & fade edges */}
      <div className="max-w-[1085px] mx-auto px-4 sm:px-6">
        <div className="relative w-full overflow-hidden">
          {/* Left & Right Gradient Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#f5f5f5] via-[#f5f5f5]/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#f5f5f5] via-[#f5f5f5]/90 to-transparent z-10 pointer-events-none" />

          {/* Marquee Scrolling Flex Bar */}
          <div className="animate-marquee flex items-center gap-8 sm:gap-14 py-2">
            {marqueeList.map((brand, idx) => (
              <div
                key={`${brand.name}-${idx}`}
                className="flex items-center gap-2.5 sm:gap-3 shrink-0 group cursor-default opacity-80 hover:opacity-100 transition-opacity"
              >
                <span className="text-[#f2512d] text-lg sm:text-xl font-bold group-hover:scale-110 transition-transform">
                  {brand.icon}
                </span>
                <span className="font-sans font-bold text-base sm:text-lg tracking-widest text-[#0d130d] group-hover:text-[#f2512d] transition-colors">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
