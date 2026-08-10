import React from 'react';
import { Navbar } from './Navbar';
import { Body } from './Body';
import { Progress } from './Progress';

export const ComingSoonPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans select-none bg-[#f5f5f5] bg-pinstripe-light text-[#0d130d] relative overflow-hidden">
            {/* 45-degree Diagonal Pinstripe Pattern Overlay matching website theme */}
            <div className="absolute inset-0 bg-pinstripe-light pointer-events-none z-0" />

            <Navbar />

            {/* Main Center Content */}
            <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16 relative z-10 text-center max-w-4xl mx-auto w-full">
                <Body />
                <Progress />
            </main>
        </div>
    );
};