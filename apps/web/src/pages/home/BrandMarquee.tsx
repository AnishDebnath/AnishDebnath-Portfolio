import React from 'react';
import mm from '../../assets/brand-logo/mm.png';
import tph from '../../assets/brand-logo/tph.png';
import gconnect from '../../assets/brand-logo/gconnect.png';
import gold from '../../assets/brand-logo/gold.png';
import charu from '../../assets/brand-logo/charu.png';
import crh from '../../assets/brand-logo/crh.png';
import r1 from '../../assets/brand-logo/r1.png';
import qba from '../../assets/brand-logo/qba.png';
import openhome from '../../assets/brand-logo/openhome.png';
import logix from '../../assets/brand-logo/logix.png';

export const BrandMarquee: React.FC = () => {
  const brandLogos = [qba, logix, openhome, tph, charu, mm, gold, crh, r1, gconnect];

  const marqueeList = [...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <section className="py-8 sm:py-12 bg-[#f5f5f5] text-[#0d130d] overflow-hidden relative">
      <div className="max-w-[1085px] mx-auto px-4 sm:px-6 mb-6 text-center">
        <p className="font-mono-tag text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-500 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f2512d]" />
          Trusted by brands & teams around the world
          <span className="w-1.5 h-1.5 rounded-full bg-[#f2512d]" />
        </p>
      </div>

      <div className="max-w-[1085px] mx-auto px-4 sm:px-6">
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#f5f5f5] via-[#f5f5f5]/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#f5f5f5] via-[#f5f5f5]/90 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center gap-8 sm:gap-14 py-2">
            {marqueeList.map((logo, idx) => (
              <div
                key={`${logo}-${idx}`}
                className="shrink-0 group cursor-default"
              >
                <img
                  src={logo}
                  alt="Brand logo"
                  className="h-9 sm:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};