import React from 'react';
import { PageRoute } from '../../types';
import { FaqSection } from '../../components/FaqSection';
import { CtaBanner } from '../../components/CtaBanner';
import { Header } from './Header';
import { ContactForm } from './ContactForm';

interface ContactPageProps {
    onNavigate: (route: PageRoute, detailId?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
    return (
        <main className="min-h-screen bg-[#f5f5f5] text-[#0d130d] pt-6 sm:pt-10 pb-20 select-none">
            <div className="max-w-[1085px] mx-auto px-4 sm:px-6">

                {/* Section Header */}
                <Header />

                {/* 2-Column Contact Card Section */}
                <ContactForm />

                {/* FAQ Section */}
                <FaqSection className="pt-8 sm:pt-12" />

                {/* CTA Banner */}
                <CtaBanner onNavigate={onNavigate} />

            </div>
        </main>
    );
};