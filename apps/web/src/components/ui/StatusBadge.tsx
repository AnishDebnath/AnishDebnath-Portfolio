import React from 'react';

interface StatusBadgeProps {
  onClick?: () => void;
  className?: string;
  text?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ 
  onClick, 
  className = '',
  text = 'Available Now' 
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`inline-flex items-center gap-2 text-xs sm:text-sm font-sans hover:opacity-85 transition-opacity ${className}`}
    >
      <span className="relative flex h-3.5 w-3.5 items-center justify-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#083315] border border-[#22c55e] items-center justify-center">
          <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full"></span>
        </span>
      </span>
      <span className="text-[#22c55e] font-medium tracking-tight">{text}</span>
    </button>
  );
};
