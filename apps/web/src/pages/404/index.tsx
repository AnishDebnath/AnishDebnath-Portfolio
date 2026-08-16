import React from 'react';
import { PageRoute } from '../../types';
import { NotFoundHero } from './NotFoundHero';

interface NotFoundPageProps {
    onNavigate: (route: PageRoute) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
    return (
        <main className="min-h-screen bg-[#f5f5f5] text-[#0d130d] font-sans selection:bg-[#f2512d] selection:text-white select-none flex items-center justify-center py-16">
            <div className="max-w-[1085px] w-full mx-auto px-4 sm:px-6 text-center">
                <NotFoundHero onNavigate={onNavigate} />
            </div>
        </main>
    );
};