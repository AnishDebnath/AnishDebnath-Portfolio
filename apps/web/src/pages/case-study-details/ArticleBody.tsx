import React from 'react';
import { motion } from 'motion/react';

export const ArticleBody: React.FC = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="max-w-3xl mx-auto space-y-10 text-neutral-800 font-sans text-base sm:text-lg leading-relaxed mb-20"
        >

            <motion.p
                variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                }}
                className="text-neutral-700 leading-relaxed"
            >
                In today's digital landscape, a visually appealing website is no longer enough. Businesses need to focus on conversion-driven design—crafting user experiences that guide visitors seamlessly toward desired actions. Whether it's signing up for a newsletter, purchasing a product, or exploring a service, the goal is to transform casual visitors into engaged, loyal users.
            </motion.p>

            {/* Section 1: UNDERSTANDING THE USER JOURNEY */}
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                }}
            >
                <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#0d130d] mb-4">
                    UNDERSTANDING THE USER JOURNEY
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                    The foundation of conversion-focused design starts with understanding the user journey. Every user interacts differently with your website, depending on their needs, motivations, and pain points. Mapping out this journey helps identify:
                </p>
                <div className="space-y-2 text-neutral-700 mb-4 pl-1">
                    <p>Entry points: Where users land on your site.</p>
                    <p>Pain points: What stops them from taking action.</p>
                    <p>Decision triggers: What motivates them to convert.</p>
                </div>
                <p className="text-neutral-700 leading-relaxed">
                    By analyzing these touchpoints, designers can create experiences that anticipate user needs, remove friction, and guide them toward the next step.
                </p>
            </motion.div>

            {/* Section 2: CLEAR VISUAL HIERARCHY */}
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                }}
            >
                <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#0d130d] mb-4">
                    CLEAR VISUAL HIERARCHY
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                    A strong visual hierarchy is essential for conversion. Users should immediately understand what's important on the page without confusion. Consider:
                </p>
                <div className="space-y-2 text-neutral-700 mb-4 pl-1">
                    <p>Strategic placement of CTAs (Call-To-Actions) above the fold and at key decision points.</p>
                    <p>Use of color and contrast to make actionable elements stand out.</p>
                    <p>Whitespace and typography to highlight essential content and reduce cognitive load.</p>
                </div>
                <p className="text-neutral-700 leading-relaxed">
                    When users can effortlessly scan and comprehend your content, the likelihood of conversion increases significantly.
                </p>
            </motion.div>

            {/* Section 3: CRAFTING PERSUASIVE MICROCOPY */}
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                }}
            >
                <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#0d130d] mb-4">
                    CRAFTING PERSUASIVE MICROCOPY
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                    Small details can make a big difference. Microcopy—the tiny snippets of text like button labels, error messages, or tooltips—plays a vital role in guiding user behavior. Effective microcopy should:
                </p>
                <div className="space-y-2 text-neutral-700 mb-4 pl-1">
                    <p>Use clear and actionable language ("Get Started", "Claim Your Free Trial").</p>
                    <p>Reduce anxiety by reassuring users ("No credit card required").</p>
                    <p>Add a human touch to build trust and connection.</p>
                </div>
                <p className="text-neutral-700 leading-relaxed">
                    These small textual cues often drive big improvements in user engagement and conversions.
                </p>
            </motion.div>

            {/* Section 4: OPTIMIZING FOR MOBILE */}
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                }}
            >
                <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#0d130d] mb-4">
                    OPTIMIZING FOR MOBILE
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                    With mobile users now dominating web traffic, a mobile-first approach is crucial. Ensure your designs are responsive, load quickly, and maintain a clear hierarchy on smaller screens. Features to focus on include:
                </p>
                <div className="space-y-2 text-neutral-700 mb-4 pl-1">
                    <p>Large, tappable CTAs</p>
                    <p>Simplified forms</p>
                    <p>Optimized images and media</p>
                </div>
                <p className="text-neutral-700 leading-relaxed">
                    A seamless mobile experience keeps users engaged and reduces bounce rates, ultimately boosting conversions.
                </p>
            </motion.div>

            {/* Section 5: TESTING AND ITERATION */}
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                }}
            >
                <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#0d130d] mb-4">
                    TESTING AND ITERATION
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                    Conversion-driven design isn't static—it requires continuous testing and iteration. Use A/B testing, heatmaps, and analytics to see how users interact with your site. Experiment with:
                </p>
                <div className="space-y-2 text-neutral-700 mb-4 pl-1">
                    <p>Different CTA placements</p>
                    <p>Button colors and wording</p>
                    <p>Page layouts and content flow</p>
                </div>
                <p className="text-neutral-700 leading-relaxed">
                    Data-driven iterations help you refine the experience, ensuring that design choices are always aligned with user behavior and business goals.
                </p>
            </motion.div>

        </motion.div>
    );
};