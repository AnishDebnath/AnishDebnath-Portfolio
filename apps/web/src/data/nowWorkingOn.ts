export interface MarqueeCardData {
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  accentColor: string;
}

export interface ActiveProject {
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

export const ACTIVE_PROJECTS: ActiveProject[] = [
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