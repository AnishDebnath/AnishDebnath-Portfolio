import React from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react';

export const Navbar: React.FC = () => {
    return (
        <header className="w-full px-6 sm:px-12 py-5 flex items-center justify-between bg-[#f5f5f5]/90 backdrop-blur-md border-b border-neutral-300/80 z-20 sticky top-0 shadow-2xs">
            <div className="font-display font-normal text-2xl uppercase tracking-tight text-[#0d130d] flex items-center gap-0.5">
                Anish<span className="text-[#f2512d]">.</span>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
                <span className="hidden sm:inline-block font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-500">
                    Follow me
                </span>
                <div className="flex items-center gap-2">
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white border border-neutral-300/80 flex items-center justify-center text-[#0d130d] hover:bg-[#f2512d] hover:text-white hover:border-[#f2512d] transition-all shadow-2xs"
                        title="LinkedIn"
                    >
                        <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white border border-neutral-300/80 flex items-center justify-center text-[#0d130d] hover:bg-[#f2512d] hover:text-white hover:border-[#f2512d] transition-all shadow-2xs"
                        title="Twitter"
                    >
                        <Twitter className="w-4 h-4" />
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white border border-neutral-300/80 flex items-center justify-center text-[#0d130d] hover:bg-[#f2512d] hover:text-white hover:border-[#f2512d] transition-all shadow-2xs"
                        title="GitHub"
                    >
                        <Github className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </header>
    );
};