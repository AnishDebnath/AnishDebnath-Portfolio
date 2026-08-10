import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { DarkButton } from './DarkButton';

interface MarqueeCardData {
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  accentColor: string;
}

interface ActiveProject {
  id: string;
  title: string;
  subtitle: string;
  status: 'In Progress' | 'Completed';
  description: string;
  tags: string[];
  completion: number;
  liveUrl?: string;
  topMarquee: MarqueeCardData[];
  bottomMarquee: MarqueeCardData[];
}

interface NowWorkingOnSectionProps {
  darkTheme?: boolean;
}

export const NowWorkingOnSection: React.FC<NowWorkingOnSectionProps> = ({ darkTheme = true }) => {
  const projects: ActiveProject[] = [
    {
      id: 'luxina',
      title: 'Luxina - Brand Studio Template',
      subtitle: 'Creative Agency Ecosystem',
      status: 'In Progress',
      description: "I'm designing Luxina, a bold and expressive template for creatives and agencies. It's made to help showcase work in a strong, visual way. Right now, I'm fine-tuning the layout and adding smooth animations.",
      tags: ['Framer', 'React', 'Motion', 'Tailwind'],
      completion: 80,
      liveUrl: 'https://example.com',
      topMarquee: [
        {
          title: 'We craft digital presence that means more',
          subtitle: 'Luxina Agency Showcase',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
          badge: 'Hero Section',
          accentColor: '#f2512d'
        },
        {
          title: 'Solaro - Brand Identity & Digital Studio',
          subtitle: 'Featured Case Study',
          image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
          badge: 'Case Study',
          accentColor: '#0d130d'
        },
        {
          title: 'Expressive visual storytelling for creative agencies',
          subtitle: 'Design System & UI',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
          badge: 'Capabilities',
          accentColor: '#d2fc38'
        },
        {
          title: 'Turn ambitious ideas into standout digital brands',
          subtitle: 'Brand Strategy Framework',
          image: 'https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=800&q=80',
          badge: 'Overview',
          accentColor: '#f2512d'
        }
      ],
      bottomMarquee: [
        {
          title: 'Fluid Layouts & Kinetic Typography for Framer',
          subtitle: 'Interactive Workflows',
          image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80',
          badge: 'Components',
          accentColor: '#10b981'
        },
        {
          title: 'High-Impact Portfolio Grids & Motion Cards',
          subtitle: 'Studio Layout #02',
          image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
          badge: 'Works Grid',
          accentColor: '#f2512d'
        },
        {
          title: 'Built for Designers, Founders & Creative Studios',
          subtitle: 'Client Testimonials & Trust',
          image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
          badge: 'Social Proof',
          accentColor: '#f2512d'
        },
        {
          title: 'Minimalist Dark Theme & Micro-Interactions',
          subtitle: 'Dark Mode Experience',
          image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80',
          badge: 'Dark Mode',
          accentColor: '#38bdf8'
        }
      ]
    },
    {
      id: 'luzia',
      title: 'Luzia - Free Portfolio Template',
      subtitle: 'Minimalist Portfolio System',
      status: 'Completed',
      description: "I'm updating Luzia, my free minimal portfolio template. It's built for creatives who like clean and simple design. I'm improving a few sections to make it easier to use and more flexible.",
      tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
      completion: 100,
      liveUrl: 'https://example.com',
      topMarquee: [
        {
          title: 'Minimal & refined layout for designers & creators',
          subtitle: 'Luzia Home Header',
          image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
          badge: 'Portfolio',
          accentColor: '#10b981'
        },
        {
          title: 'Selected Works & Interactive Project Cards',
          subtitle: 'Curated Showcase',
          image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
          badge: 'Projects',
          accentColor: '#34d399'
        },
        {
          title: 'Crafting thoughtful digital experiences with clarity',
          subtitle: 'About & Philosophy',
          image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
          badge: 'About',
          accentColor: '#10b981'
        },
        {
          title: 'Direct, clear, & impact-focused case studies',
          subtitle: 'Detailed Insights',
          image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80',
          badge: 'Case Study',
          accentColor: '#f2512d'
        }
      ],
      bottomMarquee: [
        {
          title: 'Seamless Mobile Responsiveness & Touch Controls',
          subtitle: 'Adaptive Layouts',
          image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
          badge: 'Mobile First',
          accentColor: '#f2512d'
        },
        {
          title: 'Clean Minimalist Typography & Grid Rhythms',
          subtitle: 'Design System',
          image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
          badge: 'Typography',
          accentColor: '#0d130d'
        },
        {
          title: 'Lightweight, Accessible, & Fast Load Times',
          subtitle: 'Performance Focus',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
          badge: 'Speed',
          accentColor: '#10b981'
        },
        {
          title: 'Free Open Source Template for Framer & React',
          subtitle: 'Community Release',
          image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80',
          badge: 'Free Download',
          accentColor: '#f2512d'
        }
      ]
    }
  ];

  // Helper renderer for marquee image cards
  const renderMarqueeCard = (card: MarqueeCardData, idx: number, keyPrefix: string) => (
    <div
      key={`${keyPrefix}-${idx}`}
      className="relative w-[280px] sm:w-[320px] md:w-[350px] h-[180px] sm:h-[200px] shrink-0 rounded-2xl overflow-hidden border border-black/15 shadow-sm select-none group bg-neutral-200"
    >
      {/* Background Demo Preview Image */}
      <img
        src={card.image}
        alt={card.title}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
  );

  return (
    <section className={`py-16 sm:py-24 relative overflow-hidden ${darkTheme ? 'bg-[#060913] text-white' : 'bg-[#f5f5f5] text-[#0d130d]'}`}>
      {darkTheme && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,81,45,0.12),rgba(255,255,255,0))]" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#f2512d]/10 rounded-full blur-3xl" />
        </div>
      )}

      <div className="max-w-[1085px] mx-auto px-4 sm:px-6 relative z-10">

        {/* SECTION HEADER MATCHING OTHER SECTIONS */}
        <SectionHeader
          title="NOW WORKING ON"
          subtitle="Projects I’m actively building and fine-tuning at the moment."
          dark={darkTheme}
          icon={<Sparkles className="w-5 h-5 stroke-[2.2]" />}
        />

        {/* PROJECT SHOWCASE CONTAINERS */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((project) => {
            // Duplicate marquee arrays for infinite loop
            const topTrack = [...project.topMarquee, ...project.topMarquee, ...project.topMarquee];
            const bottomTrack = [...project.bottomMarquee, ...project.bottomMarquee, ...project.bottomMarquee];

            return (
              <div
                key={project.id}
                className="relative bg-[#f2efe6] bg-hero-grid border-neutral-300 rounded-[32px] sm:rounded-[44px] border overflow-hidden shadow-sm min-h-[520px] sm:min-h-[560px] md:min-h-[600px] flex items-center justify-center py-8 sm:py-12"
              >
                {/* 1. BACKGROUND SCROLLING MARQUEES (Upper goes Right-to-Left, Bottom goes Left-to-Right with tight gap between rows) */}
                <div className="absolute inset-0 flex flex-col justify-center gap-3 sm:gap-5 py-12 sm:py-16 pointer-events-none overflow-hidden select-none">
                  
                  {/* UPPER MARQUEE ROW (RIGHT TO LEFT) */}
                  <div className="relative w-full overflow-hidden">
                    <div className="animate-marquee-left flex items-center gap-4 sm:gap-6 py-1">
                      {topTrack.map((card, idx) => renderMarqueeCard(card, idx, `${project.id}-top`))}
                    </div>
                  </div>

                  {/* BOTTOM MARQUEE ROW (LEFT TO RIGHT) */}
                  <div className="relative w-full overflow-hidden">
                    <div className="animate-marquee-right flex items-center gap-4 sm:gap-6 py-1">
                      {bottomTrack.map((card, idx) => renderMarqueeCard(card, idx, `${project.id}-bottom`))}
                    </div>
                  </div>

                </div>

                {/* 2. OVERLAY FADE ONLY THAT APPEARS WHEN SCROLLED INTO VIEW (NO BLUR) */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="absolute inset-0 bg-black z-10 pointer-events-none"
                />

                {/* 3. CENTER CARD WITH 3:4 ASPECT RATIO (STATUS, YEAR RIGHT CORNER, TITLE, DESCRIPTION, BUTTON) */}
                <motion.div
                  initial={{ opacity: 0, y: 70, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-20 w-[290px] sm:w-[330px] md:w-[360px] aspect-[3/4] bg-white text-[#0d130d] rounded-[28px] sm:rounded-[34px] p-6 sm:p-8 border border-neutral-200/90 shadow-2xl flex flex-col justify-between"
                >
                  {/* TOP SECTION: STATUS ROW + TITLE + DESCRIPTION */}
                  <div>
                    {/* TOP ROW: STATUS (LEFT) & YEAR (RIGHT CORNER) */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      {project.status === 'In Progress' ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80 text-xs font-semibold">
                          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                          In Progress
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-semibold">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          Completed
                        </span>
                      )}

                      <span className="text-xs font-mono-tag font-bold text-neutral-400 tracking-wider">
                        2026
                      </span>
                    </div>

                    {/* TITLE & DESCRIPTION AT THE STARTING PORTION */}
                    <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#0d130d] tracking-tight leading-snug mb-3">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* BOTTOM CONTENT: BUTTON */}
                  <DarkButton
                    onClick={() => {
                      if (project.liveUrl) {
                        window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    className="w-full py-3 px-5 text-xs sm:text-sm mt-4"
                  >
                    <span>Live Preview</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </DarkButton>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
