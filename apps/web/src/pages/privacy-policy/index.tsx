import React from 'react';
import { PageRoute } from '../../types';
import { SectionHeader } from '../../components/common/SectionHeader';
import { FaqSection } from '../../components/ui/FaqSection';
import { CtaBanner } from '../../components/ui/CtaBanner';
import { ShieldCheck } from 'lucide-react';
import { PolicyContent } from './PolicyContent';

interface PrivacyPolicyPageProps {
    onNavigate: (route: PageRoute) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
    return (
        <main className="min-h-screen bg-[#f5f5f5] text-[#0d130d] font-sans selection:bg-[#f2512d] selection:text-white pt-6 sm:pt-10 pb-20 select-none">
            <div className="max-w-[1085px] mx-auto px-4 sm:px-6">

                {/* Standard Section Header without sub-heading */}
                <SectionHeader
                    title="PRIVACY POLICY"
                    icon={<ShieldCheck className="w-6 h-6 stroke-[2.2]" />}
                />

                {/* Content Container */}
                <PolicyContent />

                {/* FAQ Section */}
                <FaqSection className="pt-12 sm:pt-16" />

                {/* CTA Banner */}
                <div className="mt-12 sm:mt-16">
                    <CtaBanner onNavigate={onNavigate} />
                </div>

            </div>
        </main>
    );
};