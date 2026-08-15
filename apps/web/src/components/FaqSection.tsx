import React, { useState } from 'react';
import { SectionHeader } from './common/SectionHeader';
import { MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { DEFAULT_FAQ_DATA } from '../data/faqData';

interface FaqSectionProps {
  className?: string;
  darkTheme?: boolean;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ className = '', darkTheme = false }) => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaq(prev => prev === id ? null : id);
  };

  return (
    <section className={`relative py-16 sm:py-24 ${darkTheme ? 'bg-[#060913] text-white' : 'bg-[#f5f5f5] text-[#0d130d]'} ${className}`}>
      {darkTheme && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,81,45,0.12),rgba(255,255,255,0))]" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#f2512d]/10 rounded-full blur-3xl" />
        </div>
      )}

      <div className="max-w-[1085px] mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader
          title="FAQ"
          subtitle="Answers to the most common questions about my design process and services."
          dark={darkTheme}
          icon={
            <MessageSquare className="w-6 h-6 stroke-[2.2]" />
          }
        />

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {DEFAULT_FAQ_DATA.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div 
                key={faq.id}
                className={`rounded-2xl transition-all border overflow-hidden ${
                  darkTheme
                    ? isOpen 
                      ? 'bg-[#0d1322] border-neutral-700 shadow-sm' 
                      : 'bg-[#0a0f1d] border-neutral-800 hover:border-neutral-700'
                    : isOpen
                      ? 'bg-white border-neutral-200/90 shadow-sm'
                      : 'bg-[#f5f5f5] border-neutral-300 hover:border-neutral-400'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className={`font-sans font-semibold text-base sm:text-lg ${darkTheme ? 'text-white' : 'text-[#0d130d]'}`}>
                    {faq.question}
                  </span>
                  <div className="flex items-center gap-1.5 shrink-0 text-xs font-sans font-medium text-[#f2512d]">
                    <span>{isOpen ? 'Collapse' : 'Expand'}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className={`px-5 sm:px-6 pb-6 pt-0 font-sans text-sm sm:text-base leading-relaxed ${darkTheme ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
