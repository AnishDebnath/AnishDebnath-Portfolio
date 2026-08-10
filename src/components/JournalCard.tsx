import React from 'react';
import { JournalArticle } from '../types';

interface JournalCardProps {
  article: JournalArticle;
  onNavigate: (route: 'journal-detail', articleId: string) => void;
  darkTheme?: boolean;
}

export const JournalCard: React.FC<JournalCardProps> = ({ article, onNavigate, darkTheme = false }) => {
  // Format date nicely if needed
  const formattedDate = article.publishDate || 'Apr 5, 2025';

  return (
    <div
      onClick={() => onNavigate('journal-detail', article.id)}
      className="group cursor-pointer flex flex-col gap-2.5 w-full"
    >
      {/* 1. Top Image Container - 16:9 Aspect Ratio matching Journal Detail Cover Image */}
      <div className={`rounded-2xl overflow-hidden bg-neutral-900 border ${darkTheme ? 'border-neutral-800/90' : 'border-neutral-300/70'} aspect-[16/9] relative shadow-2xs`}>
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        {/* Soft subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity" />
      </div>

      {/* 2. Bottom Info Container - Glassmorphism style with backdrop blur */}
      <div className={`rounded-2xl p-4 sm:p-4.5 flex flex-col justify-between backdrop-blur-md border transition-all duration-300 ${
        darkTheme 
          ? 'bg-neutral-900/60 border-neutral-800/80 text-white group-hover:border-[#f2512d]/60 shadow-sm' 
          : 'bg-white/60 border-neutral-200/80 text-[#0d130d] group-hover:border-[#f2512d]/50 shadow-xs'
      }`}>
        
        {/* Top Meta Row */}
        <div className="flex items-center justify-between gap-2.5 mb-2">
          {/* Category Tag Pill */}
          <span className={`px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider ${
            darkTheme
              ? 'bg-neutral-800/80 text-neutral-300 border border-neutral-700/80'
              : 'bg-white text-[#0d130d] border border-neutral-200/90 shadow-2xs'
          }`}>
            {article.category || 'Web Design'}
          </span>

          {/* Date */}
          <span className={`text-[11px] sm:text-xs font-mono font-medium ${
            darkTheme ? 'text-neutral-400' : 'text-neutral-500'
          }`}>
            {formattedDate}
          </span>
        </div>

        {/* Title */}
        <h3 className={`font-sans font-bold text-base sm:text-lg leading-snug tracking-tight transition-colors duration-300 group-hover:text-[#f2512d] ${
          darkTheme ? 'text-white' : 'text-[#0d130d]'
        }`}>
          {article.title}
        </h3>

      </div>
    </div>
  );
};
