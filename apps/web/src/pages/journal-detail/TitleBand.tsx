import React from 'react';

interface TitleBandProps {
    title: string;
}

export const TitleBand: React.FC<TitleBandProps> = ({ title }) => {
    return (
        <div className="relative py-10 sm:py-14 border-y border-dashed border-neutral-300 mb-8 overflow-hidden">
            {/* Horizontal dashed grid lines running behind title */}
            <div className="absolute inset-0 flex flex-col justify-evenly pointer-events-none opacity-50">
                <div className="w-full border-b border-dashed border-neutral-300" />
                <div className="w-full border-b border-dashed border-neutral-300" />
                <div className="w-full border-b border-dashed border-neutral-300" />
            </div>

            <h1 className="relative z-10 font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#0d130d] leading-[1.08] text-center max-w-4xl mx-auto px-4">
                {title}
            </h1>
        </div>
    );
};