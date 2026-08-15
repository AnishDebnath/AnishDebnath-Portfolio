import React, { useState } from 'react';
import { PageRoute } from '../../types';
import { Header } from './Header';
import { Showcase } from './Showcase';
import { FullscreenModal } from './FullscreenModal';

interface ResumePageProps {
    onNavigate: (route: PageRoute) => void;
}

export const ResumePage: React.FC<ResumePageProps> = ({ onNavigate }) => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [downloadSuccess, setDownloadSuccess] = useState(false);

    const handleDownload = () => {
        setDownloadSuccess(true);
        setTimeout(() => setDownloadSuccess(false), 3000);

        const element = document.createElement("a");
        const file = new Blob([
            `ANISH DEBNATH - Full Stack Developer
Email: anish.debnath@gmail.com | Phone: +8801628442950
GitHub: github.com/anish-debnath | Portfolio: anishdebnath.site

PROFILE:
Full Stack Developer with 2+ years of experience building scalable web apps using React, Next.js, Node.js, and TypeScript. Skilled in RESTful APIs, PostgreSQL, and cloud deployments (AWS). Delivered production apps with 95+ Lighthouse scores, with active open-source contributions on GitHub.

PROFESSIONAL EXPERIENCE:
- Full Stack Developer at Codexaa Limited (March 2025 - Present)
- Full Stack Developer at Ena-Ema Technology (Dec 2024 - March 2025)

PROJECTS:
- Khandakers E-Commerce (Next.js, TypeScript, MongoDB)
- NWC Education Platform (Next.js, PostgreSQL, Prisma, Supabase)
- Dev Daily Dashboard (Next.js, Supabase, Groq API)

SKILLS:
Node.js, TypeScript, Express.js, React, Next.js, PostgreSQL, MongoDB, Docker, AWS
`
        ], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "Anish_Debnath_Full_Stack_Developer_Resume.txt";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    return (
        <main className="min-h-screen bg-[#f5f5f5] text-[#0d130d] font-sans selection:bg-[#f2512d] selection:text-white">

            {/* 1. TOP SECTION HEADER */}
            <Header />

            {/* 2. MAIN RESUME SHOWCASE SECTION (MATCHING SITE LIGHT THEME WITH SCREENSHOT LAYOUT) */}
            <Showcase
                downloadSuccess={downloadSuccess}
                onDownload={handleDownload}
                onOpenFullscreen={() => setIsFullscreen(true)}
            />

            {/* 3. FULLSCREEN MODAL OVERLAY */}
            <FullscreenModal
                isFullscreen={isFullscreen}
                onClose={() => setIsFullscreen(false)}
                onDownload={handleDownload}
            />
        </main>
    );
};