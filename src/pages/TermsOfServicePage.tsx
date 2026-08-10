import React from 'react';
import { PageRoute } from '../types';
import { SectionHeader } from '../components/SectionHeader';
import { FaqSection } from '../components/FaqSection';
import { CtaBanner } from '../components/CtaBanner';
import { FileText } from 'lucide-react';

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
        <div className="max-w-[760px] mx-auto space-y-8 sm:space-y-10 text-[#0d130d]">
          
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            Welcome to David Antony's Portfolio Website (“we,” “our,” or “us”). By accessing or using this website, you agree to comply with and be bound by the following Terms of Service. Please read them carefully before using this site.
          </p>

          {/* Section 1 */}
          <div>
            <h2 className="font-display font-black text-lg sm:text-2xl uppercase tracking-tight text-[#0d130d] mb-3">
              ACCEPTANCE OF TERMS
            </h2>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              By using this website, you confirm that you have read, understood, and agree to these Terms of Service. If you do not agree, please do not use this website.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-display font-black text-lg sm:text-2xl uppercase tracking-tight text-[#0d130d] mb-3">
              USE OF THE WEBSITE
            </h2>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-3">
              You agree to use this website only for lawful purposes and in a way that does not:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-neutral-700 leading-relaxed">
              <li>Infringe upon or violate the rights of others.</li>
              <li>Disrupt or interfere with the website's functionality.</li>
              <li>Transmit harmful or malicious code, spam, or unauthorized content.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-display font-black text-lg sm:text-2xl uppercase tracking-tight text-[#0d130d] mb-3">
              INTELLECTUAL PROPERTY RIGHTS
            </h2>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              All content on this website — including text, graphics, logos, images, and design layouts — is the property of David Antony and is protected by copyright and intellectual property laws. You may not reproduce, redistribute, or exploit any material from this site without prior written permission.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-display font-black text-lg sm:text-2xl uppercase tracking-tight text-[#0d130d] mb-3">
              PORTFOLIO AND PROJECT CONTENT
            </h2>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              Projects, case studies, and visuals displayed on this website are for showcasing design work only. Some projects may include client-related materials; such content is presented with appropriate permissions or as conceptual design samples.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="font-display font-black text-lg sm:text-2xl uppercase tracking-tight text-[#0d130d] mb-3">
              LIMITATION OF LIABILITY
            </h2>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              While we strive to keep the website accurate and up-to-date, we do not guarantee that all information is error-free. David Antony shall not be held liable for any direct, indirect, or incidental damages arising from the use or inability to use this website.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="font-display font-black text-lg sm:text-2xl uppercase tracking-tight text-[#0d130d] mb-3">
              DISCLAIMER
            </h2>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              All content is provided for informational and portfolio presentation purposes only. Nothing on this site constitutes professional advice or a contractual offer.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="font-display font-black text-lg sm:text-2xl uppercase tracking-tight text-[#0d130d] mb-3">
              CHANGES TO THE TERMS
            </h2>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              We reserve the right to update or modify these Terms of Service at any time without prior notice. The latest version will always be available on this page.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="font-display font-black text-lg sm:text-2xl uppercase tracking-tight text-[#0d130d] mb-3">
              CONTACT US
            </h2>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact: <a href="mailto:xyz@email.com" className="hover:text-[#f2512d] underline transition-colors">xyz@email.com</a>
            </p>
          </div>

        </div>

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

