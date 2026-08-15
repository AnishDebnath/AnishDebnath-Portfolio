import React from 'react';
import { motion } from 'motion/react';
import { Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

interface ShowcaseProps {
    downloadSuccess: boolean;
    onDownload: () => void;
    onOpenFullscreen: () => void;
}

export const Showcase: React.FC<ShowcaseProps> = ({ downloadSuccess, onDownload, onOpenFullscreen }) => {
    return (
        <section className="py-10 sm:py-16 bg-[#f5f5f5] text-[#0d130d]">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-6">

                {/* Main 2-Column Workspace */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

                    {/* LEFT COLUMN: Bio, Meta Specs, Download File Card & Action Buttons (5 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="lg:col-span-5 bg-white border border-neutral-200/90 rounded-3xl sm:rounded-[32px] p-6 sm:p-8 shadow-sm space-y-6"
                    >

                        <div className="space-y-6">
                            {/* Heading */}
                            <div>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0d130d] font-display leading-[1.12]">
                                    Resume of <br />
                                    <span className="text-[#f2512d]">
                                        Anish Debnath
                                    </span>
                                </h1>
                                <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed font-sans mt-4">
                                    Full-stack developer focused on building production-ready web applications with clean frontend experiences, secure backend APIs, and practical database performance improvements.
                                </p>
                            </div>

                            {/* 2x2 Meta Information Cards */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-[#f5f2eb] border border-neutral-200/80 rounded-2xl p-3.5 sm:p-4 hover:border-[#f2512d]/50 transition-colors">
                                    <span className="text-[11px] text-neutral-500 font-mono block uppercase tracking-wider mb-1">Role</span>
                                    <span className="text-xs sm:text-sm font-bold text-[#0d130d] block">Full Stack Developer</span>
                                </div>

                                <div className="bg-[#f5f2eb] border border-neutral-200/80 rounded-2xl p-3.5 sm:p-4 hover:border-[#f2512d]/50 transition-colors">
                                    <span className="text-[11px] text-neutral-500 font-mono block uppercase tracking-wider mb-1">Location</span>
                                    <span className="text-xs sm:text-sm font-bold text-[#0d130d] block">India</span>
                                </div>

                                <div className="bg-[#f5f2eb] border border-neutral-200/80 rounded-2xl p-3.5 sm:p-4 hover:border-[#f2512d]/50 transition-colors">
                                    <span className="text-[11px] text-neutral-500 font-mono block uppercase tracking-wider mb-1">Stack</span>
                                    <span className="text-xs sm:text-sm font-bold text-[#0d130d] block truncate">Next.js · Node.js · MongoDB</span>
                                </div>

                                <div className="bg-[#f5f2eb] border border-neutral-200/80 rounded-2xl p-3.5 sm:p-4 hover:border-[#f2512d]/50 transition-colors">
                                    <span className="text-[11px] text-neutral-500 font-mono block uppercase tracking-wider mb-1">Availability</span>
                                    <span className="text-xs sm:text-sm font-bold text-[#0d130d] block">Full-time / Freelance</span>
                                </div>
                            </div>

                            {/* Downloadable PDF File Card */}
                            <div className="bg-[#f5f2eb] border border-neutral-200/80 rounded-2xl p-4 sm:p-5 flex items-center gap-4 relative overflow-hidden group">
                                <div className="w-11 h-11 rounded-2xl bg-[#f2512d]/10 border border-[#f2512d]/30 text-[#f2512d] flex items-center justify-center shrink-0">
                                    <FileText className="w-5 h-5" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h4 className="text-sm font-bold text-[#0d130d] truncate">Anish Debnath Resume</h4>
                                    <p className="text-xs text-neutral-600 truncate mt-0.5">
                                        Anish_Debnath_Full_Stack_Developer_2026.pdf · 270.5 KB
                                    </p>
                                    <p className="text-[11px] text-[#f2512d] font-mono mt-0.5">
                                        Updated April 28, 2026 · v3
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons in Single Row */}
                        <div className="pt-2">
                            <div className="flex flex-row items-center gap-3 w-full">
                                <button
                                    onClick={onDownload}
                                    type="button"
                                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-[#f2512d] hover:bg-[#d03a18] text-white font-sans font-semibold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-[#f2512d]/20 active:scale-95 cursor-pointer"
                                >
                                    {downloadSuccess ? (
                                        <>
                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                            <span>Downloaded!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Download className="w-4 h-4" />
                                            <span>Download Resume</span>
                                        </>
                                    )}
                                </button>

                                <button
                                    onClick={onOpenFullscreen}
                                    type="button"
                                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-[#f5f2eb] hover:bg-[#eae6db] border border-neutral-200 text-[#0d130d] font-sans font-semibold text-xs sm:text-sm transition-all duration-200 active:scale-95 cursor-pointer"
                                >
                                    <ExternalLink className="w-4 h-4 text-neutral-700" />
                                    <span>Open File</span>
                                </button>
                            </div>
                        </div>

                    </motion.div>

                    {/* RIGHT COLUMN: Mac-style Window Frame with Live Paper CV Preview (7 cols) - Matching Height */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                        className="lg:col-span-7 bg-white border border-neutral-200/90 rounded-3xl sm:rounded-[32px] p-3 sm:p-5 lg:p-6 shadow-sm relative flex flex-col h-full min-h-[520px]"
                    >

                        {/* Window Controls Top Bar */}
                        <div className="relative flex items-center justify-center pb-3.5 px-2 border-b border-neutral-200/80 mb-3 sm:mb-4">
                            <div className="absolute left-2 flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                            </div>

                            <div className="text-xs font-mono text-neutral-600 tracking-wider">
                                Resume Preview
                            </div>
                        </div>

                        {/* WHITE RESUME PAPER CANVAS */}
                        <div className="bg-[#fafafa] text-neutral-900 border border-neutral-200/80 rounded-2xl p-6 sm:p-10 lg:p-11 shadow-2xs font-sans flex-1 overflow-y-auto custom-scrollbar select-text text-left max-h-[640px] lg:max-h-[680px]">

                            {/* Header */}
                            <div className="text-center pb-4 border-b-2 border-neutral-900">
                                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 uppercase">
                                    ANISH DEBNATH
                                </h2>
                                <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#f2512d] mt-1">
                                    Full Stack Developer
                                </p>
                                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] sm:text-xs text-neutral-700 mt-2 font-sans font-medium">
                                    <a href="mailto:anish.debnath@gmail.com" className="hover:underline text-[#f2512d]">anish.debnath@gmail.com</a>
                                    <span>|</span>
                                    <span>+8801628442950</span>
                                    <span>|</span>
                                    <a href="https://github.com/AnishDebnath" target="_blank" rel="noreferrer" className="hover:underline text-[#f2512d]">GitHub</a>
                                    <span>|</span>
                                    <a href="https://www.linkedin.com/in/anish-debnath" target="_blank" rel="noreferrer" className="hover:underline text-[#f2512d]">LinkedIn</a>
                                    <span>|</span>
                                    <a href="#" className="hover:underline text-[#f2512d]">Portfolio</a>
                                </div>
                            </div>

                            {/* PROFILE */}
                            <div className="pt-4">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 pb-1 border-b border-neutral-300 mb-2">
                                    PROFILE
                                </h3>
                                <p className="text-xs sm:text-[13px] text-neutral-800 leading-relaxed">
                                    Full Stack Developer with 2+ years of experience building scalable web apps using React, Next.js, Node.js, and TypeScript. Skilled in RESTful APIs, PostgreSQL, and cloud deployments (AWS). Delivered production apps with 95+ Lighthouse scores, with active open-source contributions on GitHub. Agile-friendly and collaborative.
                                </p>
                            </div>

                            {/* EXPERIENCE */}
                            <div className="pt-4">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 pb-1 border-b border-neutral-300 mb-3">
                                    PROFESSIONAL EXPERIENCE
                                </h3>

                                <div className="space-y-3.5 text-xs sm:text-[13px]">
                                    <div>
                                        <div className="flex items-center justify-between font-bold text-neutral-900">
                                            <span>Full Stack Developer <span className="font-normal text-neutral-600">· Codexaa Limited</span></span>
                                            <span className="font-normal italic text-neutral-600 text-[11px]">March 2025 – Present</span>
                                        </div>
                                        <ul className="list-disc list-inside mt-1 space-y-1 text-neutral-800 pl-1">
                                            <li>Designed and implemented secure backend APIs using Node.js and TypeScript with role-based access control and complex business logic</li>
                                            <li>Built 5 production-ready apps using React, Next.js, and TypeScript across the full stack</li>
                                            <li>Reduced PostgreSQL/MongoDB query latency by 90% through strategic indexing and aggregation pipeline optimization</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between font-bold text-neutral-900">
                                            <span>Full Stack Developer <span className="font-normal text-neutral-600">· Ena-Ema Technology</span></span>
                                            <span className="font-normal italic text-neutral-600 text-[11px]">Dec 2024 – March 2025</span>
                                        </div>
                                        <ul className="list-disc list-inside mt-1 space-y-1 text-neutral-800 pl-1">
                                            <li>Architected scalable RESTful backend services and APIs for 6 production applications</li>
                                            <li>Led a 3-person team to successfully relaunch the agency's V2 site</li>
                                            <li>Reduced bug backlog by 85% and optimized DB queries for 10% faster load times</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* PROJECTS */}
                            <div className="pt-4">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 pb-1 border-b border-neutral-300 mb-3">
                                    PROJECTS
                                </h3>

                                <div className="space-y-3.5 text-xs sm:text-[13px]">
                                    <div>
                                        <div className="font-bold text-neutral-900">
                                            Khandakers E-Commerce <span className="font-normal text-neutral-700">— Full-stack E-Commerce Platform with Admin Dashboard — </span>
                                            <a href="#" className="font-normal text-[#f2512d] hover:underline">khandakers-ecommerce.vercel.app/</a>
                                        </div>
                                        <ul className="list-disc list-inside mt-1 space-y-0.5 text-neutral-800 pl-1">
                                            <li>Architected and built full-stack e-commerce MVP as lead developer in a 3-person team — sole owner of all backend, API, and architecture decisions</li>
                                            <li>Engineered Turborepo monorepo with separate customer and admin apps sharing UI, database, and utility packages</li>
                                            <li>Built complete order lifecycle — cart, checkout, SSLCommerz payment gateway, order management, and inventory tracking</li>
                                            <li>Developed 3-layer category system, product variant management, and Cloudinary-powered image pipeline</li>
                                        </ul>
                                        <p className="text-[11px] text-neutral-600 mt-1 italic">
                                            <span className="font-semibold text-neutral-800">Stack:</span> Next.js 16, TypeScript, MongoDB, Mongoose, Tailwind CSS, SSLCommerz, Cloudinary, Vercel
                                        </p>
                                    </div>

                                    <div>
                                        <div className="font-bold text-neutral-900">
                                            NWC Education <span className="font-normal text-neutral-700">— Full-stack Education Consultancy Platform with CMS — </span>
                                            <a href="#" className="font-normal text-[#f2512d] hover:underline">www.nwc.ac</a>
                                        </div>
                                        <ul className="list-disc list-inside mt-1 space-y-0.5 text-neutral-800 pl-1">
                                            <li>Sole developer — deployed platform managing 500+ universities, 5K+ courses across 5+ countries, serving 10K+ monthly visitors</li>
                                            <li>Built role-based CMS for real-time management of universities, courses, scholarships, and events</li>
                                            <li>Achieved 95+ Lighthouse score via SSG/SSR, DB indexing, and lazy loading; filtering system handles 100K+ monthly queries</li>
                                        </ul>
                                        <p className="text-[11px] text-neutral-600 mt-1 italic">
                                            <span className="font-semibold text-neutral-800">Stack:</span> Next.js 16, TypeScript, Prisma, PostgreSQL, Tailwind CSS, Server Actions, Supabase
                                        </p>
                                    </div>

                                    <div>
                                        <div className="font-bold text-neutral-900">
                                            Dev Daily Dashboard <span className="font-normal text-neutral-700">— Personal Developer Productivity Dashboard — </span>
                                            <a href="#" className="font-normal text-[#f2512d] hover:underline">github.com/anish-debnath/daily-dev-dashboard</a>
                                        </div>
                                        <ul className="list-disc list-inside mt-1 space-y-0.5 text-neutral-800 pl-1">
                                            <li>Built full-stack productivity dashboard integrating GitHub API, Groq API, and OpenWeatherMap</li>
                                            <li>Implemented Pomodoro timer, task tracker, standup journal, and 28-day coding streak heatmap with Supabase persistence</li>
                                            <li>Integrated Groq API for AI-generated weekly journal summaries via Vercel cron jobs</li>
                                        </ul>
                                        <p className="text-[11px] text-neutral-600 mt-1 italic">
                                            <span className="font-semibold text-neutral-800">Stack:</span> Next.js 16, TypeScript, Supabase, Tailwind CSS, Groq API, Vercel
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* SKILLS */}
                            <div className="pt-4">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 pb-1 border-b border-neutral-300 mb-2">
                                    SKILLS
                                </h3>
                                <div className="space-y-1 text-xs sm:text-[13px] text-neutral-800">
                                    <p><span className="font-bold text-neutral-900">Languages & Backend:</span> Node.js, TypeScript, Express.js, Python, REST APIs, FastAPI</p>
                                    <p><span className="font-bold text-neutral-900">Frontend & Tools:</span> React, Next.js, Tailwind CSS, Redux Toolkit, HTML5/CSS3, Git/GitHub</p>
                                    <p><span className="font-bold text-neutral-900">Databases & DevOps:</span> PostgreSQL, MongoDB, Prisma, Docker, Vercel, AWS</p>
                                </div>
                            </div>

                            {/* EDUCATION */}
                            <div className="pt-4">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 pb-1 border-b border-neutral-300 mb-2">
                                    EDUCATION & CERTIFICATIONS
                                </h3>
                                <div className="flex items-center justify-between text-xs sm:text-[13px] text-neutral-900 font-medium">
                                    <span>B.Sc. in Computer Science & Engineering <span className="font-normal text-neutral-600">· University of Information Technology & Sciences</span></span>
                                    <span className="text-[11px] text-neutral-600 italic">2021 – 2025</span>
                                </div>
                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
};