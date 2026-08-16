import React from 'react';
import { PageRoute } from '../../types';
import { SectionHeader } from '../../components/common/SectionHeader';
import { FaqSection } from '../../components/common/faq';
import { CtaBanner } from '../../components/common/cta';
import { FileText } from 'lucide-react';
import { TermsContent } from './TermsContent';

interface TermsOfServicePageProps {
    onNavigate: (route: PageRoute) => void;
}

export const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({ onNavigate }) => {
    return (
        <main className="min-h-screen bg-[#f5f5f5] text-[#0d130d] font-sans selection:bg-[#f2512d] selection:text-white pt-6 sm:pt-10 pb-20 select-none">
            <div className="max-w-[1085px] mx-auto px-4 sm:px-6">

                {/* Standard Section Header without sub-heading */}
                <SectionHeader
                    title="TERMS OF SERVICE"
                    icon={<FileText className="w-6 h-6 stroke-[2.2]" />}
                />

                {/* Content Container */}
                <TermsContent />

                {/* CTA Banner */}
                <div className="mt-12 sm:mt-16">
                    <CtaBanner onNavigate={onNavigate} />
                </div>

            </div>
        </main>
    );
};