import React from 'react';
import { PageRoute } from '../types';
import { JOURNAL_ARTICLES } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';
import { JournalCard } from '../components/JournalCard';
import { FaqSection } from '../components/FaqSection';
import { CtaBanner } from '../components/CtaBanner';
import { BookOpen, Tag } from 'lucide-react';

interface JournalDetailPageProps {
  articleId?: string;
  onNavigate: (route: PageRoute, detailId?: string) => void;
}

export const JournalDetailPage: React.FC<JournalDetailPageProps> = ({ articleId, onNavigate }) => {
  const article = JOURNAL_ARTICLES.find(a => a.id === articleId) || JOURNAL_ARTICLES.find(a => a.id === 'designing-for-conversion') || JOURNAL_ARTICLES[0];

  // More journal articles (the other 2 items from the array)
  const relatedArticles = JOURNAL_ARTICLES.filter(a => a.id !== article.id).slice(0, 2);

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-[#0d130d] py-12 sm:py-20 select-none">
      <div className="max-w-[1085px] mx-auto px-4 sm:px-6">

        {/* Main Title Section with top & bottom dashed lines and background grid lines */}
        <div className="relative py-10 sm:py-14 border-y border-dashed border-neutral-300 mb-8 overflow-hidden">
          {/* Horizontal dashed grid lines running behind title */}
          <div className="absolute inset-0 flex flex-col justify-evenly pointer-events-none opacity-50">
            <div className="w-full border-b border-dashed border-neutral-300" />
            <div className="w-full border-b border-dashed border-neutral-300" />
            <div className="w-full border-b border-dashed border-neutral-300" />
          </div>

          <h1 className="relative z-10 font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#0d130d] leading-[1.08] text-center max-w-4xl mx-auto px-4">
            {article.title}
          </h1>
        </div>

        {/* Author & Journal Tag Meta Bar (Below title band) */}
        <div className="flex items-center justify-center gap-3.5 mb-10 text-sm sm:text-base font-sans font-medium text-[#0d130d]">
          <div className="flex items-center gap-2">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-7 h-7 rounded-full object-cover border border-neutral-300"
            />
            <span className="font-semibold text-[#0d130d]">Davit Antony</span>
          </div>
          <div className="h-4 w-px border-r border-dashed border-[#f2512d] mx-0.5" />
          <div className="flex items-center gap-1.5 text-[#0d130d]">
            <Tag className="w-4 h-4 text-[#0d130d]" />
            <span>{article.category || article.tags?.[0] || 'Journal'}</span>
          </div>
        </div>

        {/* Hero Cover Image */}
        <div className="rounded-[28px] sm:rounded-[36px] overflow-hidden bg-neutral-200 aspect-[16/9] max-h-[520px] w-full mb-14 shadow-sm">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body Paragraphs & Sections */}
        <div className="max-w-3xl mx-auto space-y-10 text-neutral-800 font-sans text-base sm:text-lg leading-relaxed mb-20">

          <p className="text-neutral-700 leading-relaxed">
            In today's digital landscape, a visually appealing website is no longer enough. Businesses need to focus on conversion-driven design—crafting user experiences that guide visitors seamlessly toward desired actions. Whether it's signing up for a newsletter, purchasing a product, or exploring a service, the goal is to transform casual visitors into engaged, loyal users.
          </p>

          {/* Section 1: UNDERSTANDING THE USER JOURNEY */}
          <div>
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
          </div>

          {/* Section 2: CLEAR VISUAL HIERARCHY */}
          <div>
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
          </div>

          {/* Section 3: CRAFTING PERSUASIVE MICROCOPY */}
          <div>
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
          </div>

          {/* Section 4: OPTIMIZING FOR MOBILE */}
          <div>
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
          </div>

          {/* Section 5: TESTING AND ITERATION */}
          <div>
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
          </div>

        </div>

      </div>

      {/* MORE CASE STUDIES Section (Dark Background) */}
      <section className="relative bg-[#060913] text-white py-16 sm:py-24 my-12 sm:my-16">
        {/* Background glow effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,81,45,0.12),rgba(255,255,255,0))]" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#f2512d]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1085px] mx-auto px-4 sm:px-6 relative z-10">
          <SectionHeader
            title="MORE CASE STUDIES"
            dark={true}
            icon={<BookOpen className="w-6 h-6 stroke-[2.2]" />}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mt-8 sm:mt-12">
            {relatedArticles.map((rel) => (
              <JournalCard
                key={rel.id}
                article={rel}
                darkTheme={true}
                onNavigate={(route, id) => {
                  onNavigate(route, id);
                  window.scrollTo(0, 0);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1085px] mx-auto px-4 sm:px-6">

        {/* FAQ Section */}
        <FaqSection className="pt-4 sm:pt-8" />

        {/* CTA Banner Section before footer */}
        <CtaBanner onNavigate={onNavigate} />

      </div>
    </main>
  );
};

