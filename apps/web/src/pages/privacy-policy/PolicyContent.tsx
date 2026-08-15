import React from 'react';

export const PolicyContent: React.FC = () => {
    return (
        <div className="max-w-[760px] mx-auto space-y-8 sm:space-y-10 text-[#0d130d]">

            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                Welcome to Anish Debnath's Portfolio Website. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit or interact with this website.
            </p>

            {/* Section 1 */}
            <div>
                <h2 className="font-display font-black text-lg sm:text-2xl uppercase tracking-tight text-[#0d130d] mb-3">
                    INFORMATION WE COLLECT
                </h2>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-3">
                    We may collect the following types of information:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    <li>
                        <strong className="text-[#0d130d]">Personal Information:</strong> such as your name and email address when you contact us via forms or subscribe to updates.
                    </li>
                    <li>
                        <strong className="text-[#0d130d]">Usage Data:</strong> including your IP address, browser type, device information, pages visited, and time spent on the site.
                    </li>
                    <li>
                        <strong className="text-[#0d130d]">Cookies:</strong> small data files used to enhance your browsing experience and analyze site performance.
                    </li>
                </ul>
            </div>

            {/* Section 2 */}
            <div>
                <h2 className="font-display font-black text-lg sm:text-2xl uppercase tracking-tight text-[#0d130d] mb-3">
                    HOW WE USE YOUR INFORMATION
                </h2>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-3">
                    Your information may be used to:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    <li>Respond to your inquiries or messages.</li>
                    <li>Improve the design, functionality, and user experience of the website.</li>
                    <li>Send occasional updates or newsletters (only if you opt in).</li>
                    <li>Analyze website traffic and performance using analytics tools.</li>
                </ul>
            </div>

            {/* Section 3 */}
            <div>
                <h2 className="font-display font-black text-lg sm:text-2xl uppercase tracking-tight text-[#0d130d] mb-3">
                    HOW WE PROTECT YOUR INFORMATION
                </h2>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    We take reasonable measures to secure your personal information from unauthorized access, alteration, or disclosure. However, please note that no method of data transmission over the Internet is completely secure.
                </p>
            </div>

            {/* Section 4 */}
            <div>
                <h2 className="font-display font-black text-lg sm:text-2xl uppercase tracking-tight text-[#0d130d] mb-3">
                    SHARING OF INFORMATION
                </h2>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    We do not sell, trade, or rent users' personal information. We may use third-party services (like Google Analytics or email platforms) that process data on our behalf solely to improve website performance and communication.
                </p>
            </div>

            {/* Section 5 */}
            <div>
                <h2 className="font-display font-black text-lg sm:text-2xl uppercase tracking-tight text-[#0d130d] mb-3">
                    COOKIES
                </h2>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    This website uses cookies to enhance user experience. You can choose to disable cookies in your browser settings, but some parts of the website may not function properly as a result.
                </p>
            </div>

            {/* Section 6 */}
            <div>
                <h2 className="font-display font-black text-lg sm:text-2xl uppercase tracking-tight text-[#0d130d] mb-3">
                    THIRD-PARTY LINKS
                </h2>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    Our website may contain links to other websites. We are not responsible for the privacy practices or content of those third-party sites.
                </p>
            </div>

            {/* Section 7 */}
            <div>
                <h2 className="font-display font-black text-lg sm:text-2xl uppercase tracking-tight text-[#0d130d] mb-3">
                    YOUR RIGHTS
                </h2>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-3">
                    You have the right to:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    <li>Request access to the personal data we hold about you.</li>
                    <li>Request correction or deletion of your personal data.</li>
                    <li>Opt out of receiving promotional emails.</li>
                </ul>
            </div>

            {/* Section 8 */}
            <div>
                <h2 className="font-display font-black text-lg sm:text-2xl uppercase tracking-tight text-[#0d130d] mb-3">
                    UPDATES TO THIS POLICY
                </h2>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    We may update this Privacy Policy periodically. The updated version will be posted on this page with the revised date.
                </p>
            </div>

            {/* Section 9 */}
            <div>
                <h2 className="font-display font-black text-lg sm:text-2xl uppercase tracking-tight text-[#0d130d] mb-3">
                    CONTACT US
                </h2>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact: <a href="mailto:xyz@email.com" className="hover:text-[#f2512d] underline transition-colors">xyz@email.com</a>
                </p>
            </div>

        </div>
    );
};