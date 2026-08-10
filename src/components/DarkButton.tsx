import React from 'react';

interface DarkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  roundedClassName?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const DarkButton: React.FC<DarkButtonProps> = ({
  children,
  className = '',
  roundedClassName = 'rounded-xl',
  onClick,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative group overflow-hidden bg-[#0d120f] text-white font-sans text-sm font-semibold transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 ${roundedClassName} ${className}`}
      {...props}
    >
      {/* Solid Dark Background Base with Accent Hover Transition */}
      <span className="absolute inset-0 bg-[#0d120f] group-hover:bg-[#f2512d] transition-colors duration-300 pointer-events-none" />

      {/* Animated Monochromatic Seamless SVG Line Grid Pattern (Translating/Panning) */}
      <span
        className="absolute -inset-[100%] opacity-40 animate-pattern-panning pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-width='0.75' stroke-opacity='0.3'%3E%3Cpath d='M0 40C20 40 20 0 40 0s20 40 40 40-20 40-40 40S0 40 0 40z'/%3E%3Ccircle cx='40' cy='40' r='18' stroke-dasharray='2 3'/%3E%3Ccircle cx='40' cy='40' r='32'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Animated Organic Contour Wave Lines Overlay (Drifting/Scaling) */}
      <span className="absolute -inset-6 opacity-35 animate-pattern-wave pointer-events-none">
        <svg className="w-full h-full text-white" viewBox="0 0 400 200" preserveAspectRatio="none" fill="none">
          <path d="M-20,20 Q60,110 140,10 T300,80" stroke="currentColor" strokeWidth="0.8" />
          <path d="M-20,50 Q80,130 180,20 T340,100" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 3" />
          <path d="M-20,80 Q100,150 200,30 T380,120" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="70" cy="45" r="28" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" />
          <circle cx="280" cy="65" r="35" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </span>

      {/* Subtle Inner Frame Glow */}
      <span className={`absolute inset-0 ${roundedClassName} border border-white/10 pointer-events-none`} />

      {/* Button Content - Always Sharp & Visible */}
      <span className="relative z-10 flex items-center justify-center gap-2 text-white font-medium tracking-wide">
        {children}
      </span>
    </button>
  );
};
