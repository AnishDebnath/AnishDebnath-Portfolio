import React from 'react';
import { Download, FileText, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FullscreenModalProps {
    isFullscreen: boolean;
    onClose: () => void;
    onDownload: () => void;
}

export const FullscreenModal: React.FC<FullscreenModalProps> = ({ isFullscreen, onClose, onDownload }) => {
    return (
        <AnimatePresence>
            {isFullscreen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10"
                >
                    <div className="bg-white border border-neutral-200 rounded-3xl w-full max-w-4xl h-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl relative">
                        {/* Modal Top Bar */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-[#f5f5f5]">
                            <div className="flex items-center gap-3">
                                <FileText className="w-5 h-5 text-[#f2512d]" />
                                <span className="font-bold text-[#0d130d] text-base">Anish Debnath Resume</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    onClick={onDownload}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f2512d] text-white text-xs font-semibold hover:bg-[#d03a18] transition-colors cursor-pointer"
                                >
                                    <Download className="w-3.5 h-3.5" />
                                    <span>Download</span>
                                </button>

                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-xl bg-neutral-200 text-neutral-700 hover:bg-neutral-300 transition-colors cursor-pointer"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Modal Document Body */}
                        <div className="flex-1 p-6 sm:p-10 overflow-y-auto bg-neutral-950 flex justify-center">
                            <div className="bg-white text-neutral-900 rounded-2xl p-8 sm:p-12 shadow-2xl w-full max-w-3xl text-left font-sans select-text">
                                <div className="text-center pb-4 border-b-2 border-neutral-900">
                                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 uppercase">
                                        ANISH DEBNATH
                                    </h2>
                                    <p className="text-sm font-semibold uppercase tracking-widest text-[#f2512d] mt-1">
                                        Full Stack Developer
                                    </p>
                                    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-neutral-700 mt-2 font-sans font-medium">
                                        <span>anish.debnath@gmail.com</span>
                                        <span>|</span>
                                        <span>+8801628442950</span>
                                        <span>|</span>
                                        <span>GitHub</span>
                                        <span>|</span>
                                        <span>LinkedIn</span>
                                    </div>
                                </div>

                                <div className="pt-6 space-y-6 text-sm text-neutral-800">
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 pb-1 border-b border-neutral-300 mb-2">
                                            PROFILE
                                        </h3>
                                        <p className="leading-relaxed">
                                            Full Stack Developer with 2+ years of experience building scalable web apps using React, Next.js, Node.js, and TypeScript. Skilled in RESTful APIs, PostgreSQL, and cloud deployments (AWS). Delivered production apps with 95+ Lighthouse scores, with active open-source contributions on GitHub.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 pb-1 border-b border-neutral-300 mb-3">
                                            PROFESSIONAL EXPERIENCE
                                        </h3>
                                        <div className="space-y-4">
                                            <div>
                                                <div className="flex items-center justify-between font-bold text-neutral-900">
                                                    <span>Full Stack Developer <span className="font-normal text-neutral-600">· Codexaa Limited</span></span>
                                                    <span className="font-normal italic text-neutral-600 text-xs">March 2025 – Present</span>
                                                </div>
                                                <ul className="list-disc list-inside mt-1.5 space-y-1 text-neutral-800">
                                                    <li>Designed and implemented secure backend APIs using Node.js and TypeScript with role-based access control and complex business logic</li>
                                                    <li>Built 5 production-ready apps using React, Next.js, and TypeScript across the full stack</li>
                                                    <li>Reduced PostgreSQL/MongoDB query latency by 90% through strategic indexing and aggregation pipeline optimization</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <div className="flex items-center justify-between font-bold text-neutral-900">
                                                    <span>Full Stack Developer <span className="font-normal text-neutral-600">· Ena-Ema Technology</span></span>
                                                    <span className="font-normal italic text-neutral-600 text-xs">Dec 2024 – March 2025</span>
                                                </div>
                                                <ul className="list-disc list-inside mt-1.5 space-y-1 text-neutral-800">
                                                    <li>Architected scalable RESTful backend services and APIs for 6 production applications</li>
                                                    <li>Led a 3-person team to successfully relaunch the agency's V2 site</li>
                                                    <li>Reduced bug backlog by 85% and optimized DB queries for 10% faster load times</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 pb-1 border-b border-neutral-300 mb-3">
                                            PROJECTS
                                        </h3>
                                        <div className="space-y-4">
                                            <div>
                                                <div className="font-bold text-neutral-900">
                                                    Khandakers E-Commerce <span className="font-normal text-neutral-700">— Full-stack E-Commerce Platform with Admin Dashboard</span>
                                                </div>
                                                <ul className="list-disc list-inside mt-1 space-y-1 text-neutral-800">
                                                    <li>Architected and built full-stack e-commerce MVP as lead developer in a 3-person team</li>
                                                    <li>Engineered Turborepo monorepo with separate customer and admin apps</li>
                                                    <li>Built complete order lifecycle — cart, checkout, SSLCommerz payment gateway</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <div className="font-bold text-neutral-900">
                                                    NWC Education <span className="font-normal text-neutral-700">— Full-stack Education Consultancy Platform with CMS</span>
                                                </div>
                                                <ul className="list-disc list-inside mt-1 space-y-1 text-neutral-800">
                                                    <li>Sole developer — deployed platform managing 500+ universities, 5K+ courses across 5+ countries</li>
                                                    <li>Built role-based CMS for real-time management of universities, courses, scholarships</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 pb-1 border-b border-neutral-300 mb-2">
                                            SKILLS & EDUCATION
                                        </h3>
                                        <p><span className="font-bold">Languages & Stack:</span> Node.js, TypeScript, Express.js, React, Next.js, PostgreSQL, MongoDB, Prisma, Docker, AWS</p>
                                        <p className="mt-1"><span className="font-bold">Education:</span> B.Sc. in Computer Science & Engineering · University of Information Technology & Sciences (2021 – 2025)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};