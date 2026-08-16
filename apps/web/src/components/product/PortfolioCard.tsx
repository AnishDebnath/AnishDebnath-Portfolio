import React from 'react';
import { motion } from 'motion/react';
import { CaseStudy } from '../../types';
import { DarkButton } from '../ui/DarkButton';

const DEFAULT_BG_COLORS = [
  'bg-[#e6c820]', // Warm Yellow
  'bg-[#f2512d]', // Theme Orange
  'bg-[#1fc932]', // Energetic Green
  'bg-[#3b82f6]', // Ocean Blue
];

interface PortfolioCardProps {
  project: CaseStudy;
  onNavigate: (route: 'portfolio-detail', detailId: string) => void;
  index?: number;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, onNavigate, index = 0 }) => {
  const iconBgClass = project.iconBg || DEFAULT_BG_COLORS[index % DEFAULT_BG_COLORS.length];

  // Alternating layout direction: even index = Info left, Image right; odd index = Image left, Info right
  const isReversed = index % 2 !== 0;

  // Custom logo marks for each case study
  const renderIconMark = () => {
    switch (project.id) {
      case 'aurora-legal':
        return (
          <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
            <circle cx="8.5" cy="8.5" r="3.5" />
            <circle cx="15.5" cy="8.5" r="3.5" />
            <circle cx="8.5" cy="15.5" r="3.5" />
            <circle cx="15.5" cy="15.5" r="3.5" />
          </svg>
        );
      case 'electric-mobility':
        return (
          <svg className="w-5 h-5 text-white fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        );
      case 'virtual-gym':
        return (
          <svg className="w-5 h-5 text-white fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1M6 8H5a4 4 0 0 0 0 8h1M2 12h20M7 5v14M17 5v14" />
          </svg>
        );
      case 'tropical-escape':
        return (
          <svg className="w-5 h-5 text-white fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
            <circle cx="8.5" cy="8.5" r="3.5" />
            <circle cx="15.5" cy="8.5" r="3.5" />
            <circle cx="8.5" cy="15.5" r="3.5" />
            <circle cx="15.5" cy="15.5" r="3.5" />
          </svg>
        );
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
      onClick={() => onNavigate('portfolio-detail', project.id)}
      className="grid grid-cols-1 lg:grid-cols-12 items-stretch group cursor-pointer"
    >
      {/* Info Card (Separate card with all 4 corners rounded) — slides from image side */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: isReversed ? -250 : 250 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              opacity: { duration: 0.3, ease: 'easeOut' },
              x: { duration: 0.5, ease: [0.16, 0.3, 0.3, 1] },
            },
          },
        }}
        className={`lg:col-span-4 bg-[#f5f2eb] text-[#0d130d] rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 flex flex-col justify-between relative z-0 border border-neutral-300/80 shadow-xs transition-all duration-300 group-hover:border-[#f2512d]/50 group-hover:shadow-md ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>

        <div>
          {/* Top Square Icon */}
          <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${iconBgClass} flex items-center justify-center mb-4 sm:mb-5 shadow-2xs group-hover:scale-105 transition-transform duration-300`}>
            {renderIconMark()}
          </div>

          {/* Project Title */}
          <h3 className="font-sans font-bold text-lg sm:text-xl text-[#0d130d] tracking-tight leading-tight mb-2 group-hover:text-[#f2512d] transition-colors">
            {project.title}
          </h3>

          {/* Subtitle / Description */}
          <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed mb-4 sm:mb-5">
            {project.subtitle || project.summary}
          </p>
        </div>

        {/* Metadata & Compact Button */}
        <div className="mt-auto pt-3.5 border-t border-neutral-300/60 space-y-2.5">

          {/* Client Row */}
          <div className="flex items-center justify-between text-xs font-sans">
            <span className="text-neutral-500 font-medium">Client</span>
            <span className="text-[#0d130d] font-semibold">{project.client}</span>
          </div>

          {/* Date Row */}
          <div className="flex items-center justify-between text-xs font-sans">
            <span className="text-neutral-500 font-medium">Date</span>
            <span className="text-[#0d130d] font-semibold">{project.date || project.year}</span>
          </div>

          {/* Compact Button */}
          <DarkButton
            onClick={(e) => {
              e.stopPropagation();
              onNavigate('portfolio-detail', project.id);
            }}
            roundedClassName="rounded-full"
            className="w-full mt-3 py-2.5 px-4 text-xs sm:text-sm"
          >
            <span>View Details</span>
          </DarkButton>

        </div>

      </motion.div>

      {/* Image Card (Separate card with all 4 corners rounded) — appears first */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
        }}
        className={`lg:col-span-8 rounded-[24px] sm:rounded-[28px] overflow-hidden border border-neutral-800 bg-neutral-900 min-h-[280px] sm:min-h-[340px] lg:min-h-[380px] relative z-10 shadow-md ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}
      >
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          loading="lazy"
        />
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
      </motion.div>

    </motion.div>
  );
};