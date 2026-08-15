import React from 'react';
import { SectionHeader } from '../../components/SectionHeader';
import { TECH_LIST } from '../../data/technologiesData';

export const TechnologiesSection: React.FC = () => {
  return (
    <section className="bg-[#f5f5f5] text-[#0d130d] py-16 sm:py-24">
      <div className="max-w-[1085px] mx-auto px-4 sm:px-6">
        
        {/* Section Header with exact theme styling */}
        <SectionHeader
          title="TECHNOLOGIES I USE"
          subtitle=""
          dark={false}
          icon={
            <svg className="w-6 h-6 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />

        {/* Content Container */}
        <div className="mt-8 sm:mt-12 space-y-8">
          
          {/* Subtitle Description text wrapped in a centered div */}
          <div className="flex justify-center text-center">
            <p className="font-sans text-base sm:text-lg text-neutral-700 leading-relaxed max-w-3xl">
              Over the years, I have worked with a variety of technologies. Here are some of the technologies I have experience with:
            </p>
          </div>

          {/* Tech Pills Grid / Flex Wrap */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
            {TECH_LIST.map((tech, index) => (
              <div
                key={index}
                className="group flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl bg-[#f5f2eb] border border-neutral-300 text-[#0d130d] text-xs sm:text-sm font-sans font-semibold shadow-2xs hover:bg-[#0d130d] hover:text-white hover:border-[#0d130d] hover:scale-105 transition-all duration-300 cursor-default select-none"
              >
                <span className="shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>

          {/* Footer Text */}
          <div className="pt-4 text-center">
            <span className="font-sans text-base sm:text-lg text-neutral-500 italic">
              ... and many more!
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
