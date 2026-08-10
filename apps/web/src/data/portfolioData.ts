import { CaseStudy, JournalArticle, ExperienceItem, FAQItem } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'aurora-legal',
    title: 'Aurora Legal',
    client: 'Aurora Legal Group',
    subtitle: 'A modern, trustworthy website for a boutique law firm, designed to convey professionalism with a human touch',
    category: 'Web Design',
    year: '2025',
    date: 'May 3, 2025',
    iconBg: 'bg-[#e6c820]',
    featured: true,
    tags: ['// Web Architecture', '// Legal UX', '// Brand Identity'],
    coverImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80',
    middleImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80'
    ],
    overlayDescription: 'A modern, trustworthy website for a boutique law firm, designed to convey professionalism with a human touch.',
    summary: 'A modern, trustworthy website for a boutique law firm, designed to convey professionalism with a human touch.',
    challenge: 'Boutique law firms often struggle to differentiate themselves online, relying on generic stock photos and dense legalese that deters prospective clients.',
    solution: 'Designed an approachable, high-trust digital presence with clear client consultation flows and human-centric partner profiles.',
    solutionBullets: [
      'Crafted a warm, authoritative visual language pairing bespoke typography with serene monochrome photography.',
      'Streamlined prospective client inquiry flows with intelligent intake questionnaires.',
      'Designed mobile-first case history breakdowns and attorney practice area cards.',
      'Built custom trust indicators and client testimonial showcases.'
    ],
    resultsSubtitle: 'Transforming legal practice representation through thoughtful design.',
    impactMetrics: [
      { value: '54%', label: 'increase in online consultation bookings within 60 days' },
      { value: '2.8x', label: 'longer average session duration across practice area pages' },
      { value: '88%', label: 'client satisfaction score on brand trust and clarity' }
    ],
    services: ['Web Design', 'UX Strategy', 'Brand Identity', 'Front-End Development'],
    liveUrl: 'https://auroralegal.example.com',
    nextProjectId: 'electric-mobility'
  },
  {
    id: 'electric-mobility',
    title: 'ELECTRIC MOBILITY EXPERIENCE',
    client: 'Vektor Motors',
    subtitle: 'Next-generation electric vehicle companion app & portal.',
    category: 'UI/UX',
    year: '2023',
    date: 'Nov 14, 2023',
    iconBg: 'bg-[#f2512d]',
    featured: true,
    tags: ['// UX Research', '// App Interface Design', '// Prototyping'],
    coverImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    middleImage: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80'
    ],
    overlayDescription: 'A seamless digital experience designed for modern electric vehicle owners — enabling smart control, real-time monitoring, and a more connected driving journey.',
    summary: 'A seamless digital experience designed for modern electric vehicle owners — enabling smart control, real-time monitoring, and a more connected driving journey.',
    challenge: 'The project aimed to redefine the EV owner experience through a unified digital cockpit and companion mobile application. Key challenges included structuring dense battery telemetry, route elevation maps, and charging network status into a safe, glanceable 60fps driver interface without visual distraction.',
    solution: 'Designed an ultra-high contrast dark UI mode with touch-target friendly widget layouts and predictive charging route planners.',
    solutionBullets: [
      'Engineered an ultra-high contrast dark UI mode optimized for both full daylight and night driving safety.',
      'Integrated real-time predictive range calculation based on driver history, topography, and ambient temperature.',
      'Designed touch-target friendly widget layouts for fluid cross-screen interactions between mobile app and central display.',
      'Built a unified charging hub navigation tool with live connector availability and instant payment authorization.'
    ],
    resultsSubtitle: 'Accelerating electric vehicle adoption through intuitive digital design.',
    impactMetrics: [
      { value: '48%', label: 'boost in daily active driver engagement with companion app' },
      { value: '35%', label: 'reduction in task completion time for route charging stops' },
      { value: '92%', label: 'positive rating on visual ergonomics and interface clarity' },
      { value: '18k+', label: 'connected EV vehicles managed concurrently on the platform' }
    ],
    services: ['HMI UI Design', 'Design System Architecture', 'Telemetry Visualizations', 'User Research'],
    nextProjectId: 'virtual-gym'
  },
  {
    id: 'virtual-gym',
    title: 'VIRTUAL GYM EXPERIENCE SHOWCASE',
    client: 'Aura Fitness Inc.',
    subtitle: 'AI-assisted fitness mobile app & workout telemetry workspace.',
    category: 'Mobile Apps',
    year: '2024',
    date: 'Aug 12, 2024',
    iconBg: 'bg-[#1fc932]',
    featured: true,
    tags: ['// UX Research', '// App Interface Design', '// Prototyping'],
    coverImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80',
    middleImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80'
    ],
    overlayDescription: 'A personalized fitness platform designed to bring real gym experiences into the digital space — helping users train, track, and stay motivated anytime, anywhere.',
    summary: 'A personalized fitness platform designed to bring real gym experiences into the digital space — helping users train, track, and stay motivated anytime, anywhere.',
    challenge: 'Traditional workout apps suffered from high dropout rates due to repetitive static video routines and lack of interactive personal coaching feedback during exercise routines.',
    solution: 'Engineered a haptic-responsive iOS & Android interface with fluid dark theme telemetry widgets and real-time audio coaching queues.',
    solutionBullets: [
      'Developed a live computer-vision posture feedback engine delivering instantaneous form corrections.',
      'Designed customizable dark-theme telemetry dashboards tracking heart rate zones and muscular fatigue.',
      'Engineered haptic audio coaching cues that adapt dynamically to workout intensity and momentum.',
      'Built social leaderboards and workout sharing channels to foster community competition.'
    ],
    resultsSubtitle: 'Empowering athletes with real-time biometric intelligence.',
    impactMetrics: [
      { value: '78%', label: 'active monthly user retention rate sustained across 6 months' },
      { value: '64%', label: 'increase in completed multi-week training programs' },
      { value: '4.9 ★', label: 'average app store rating across iOS and Android app stores' },
      { value: '2.4M', label: 'workout sessions logged globally within the first year' }
    ],
    services: ['Mobile UI/UX', 'Design System', 'Design Prototyping', 'iOS & Android Design'],
    liveUrl: 'https://virtualgym.example.com',
    nextProjectId: 'tropical-escape'
  },
  {
    id: 'tropical-escape',
    title: 'TROPICAL ESCAPE IDENTITY',
    client: 'Tropical Escape Group',
    subtitle: 'Luxury eco-resort booking platform & digital experience.',
    category: 'Branding',
    year: '2024',
    date: 'Jan 24, 2024',
    iconBg: 'bg-[#3b82f6]',
    featured: true,
    tags: ['// Brand Identity', '// Art Direction', '// Digital Experience'],
    coverImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80',
    middleImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80'
    ],
    overlayDescription: 'Crafted a luxurious and inviting brand identity that reflects the resort\'s serene atmosphere and elevates its guest experience across all touchpoints.',
    summary: 'Crafted a luxurious and inviting brand identity that reflects the resort\'s serene atmosphere and elevates its guest experience across all touchpoints.',
    challenge: 'The project aimed to develop a vibrant and cohesive brand identity for Tropical Escape, a luxury resort and travel experience brand. The main challenge was to capture the essence of tropical serenity and adventure while maintaining a premium and modern appeal. The identity needed to feel fresh, memorable, and adaptable across print, digital, and merchandise without losing its natural warmth and energy.',
    solution: 'Designed an editorial-grade brand visual system and booking experience with custom typography and rich resort collateral.',
    solutionBullets: [
      'Developed a visual language inspired by tropical elements — ocean hues, palm textures, and sunset gradients.',
      'Designed a flexible logo system that embodies both relaxation and sophistication through organic shapes and fluid typography.',
      'Curated a color palette of turquoise, coral, sand, and deep blue to evoke coastal energy and luxury.',
      'Established brand typography that feels elegant yet approachable, complementing the resort\'s modern aesthetic.',
      'Created brand collateral such as stationery, social templates, signage, and digital ads to maintain a consistent visual presence.'
    ],
    resultsSubtitle: 'A seamless fusion of tropical vibrancy and refined elegance.',
    impactMetrics: [
      { value: '42%', label: 'boost in brand recognition across digital and travel platforms' },
      { value: '30%', label: 'increase in booking engagement within the first campaign cycle' },
      { value: '25%', label: 'consistency achieved across all marketing and merchandise materials' },
      { value: '95%', label: 'rise in customer satisfaction related to visual appeal and brand experience' }
    ],
    services: ['Brand Architecture', 'Art Direction', 'Typography System', 'Web Design'],
    liveUrl: 'https://tropicalescape.example.com',
    nextProjectId: 'electric-mobility'
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'beyond-aesthetics',
    title: 'Designing Beyond Aesthetics: How Strategy Shapes Great User Experiences',
    excerpt: 'How strategy, research, and functional clarity shape meaningful software interfaces.',
    category: 'Strategy',
    publishDate: 'OCTOBER 28, 2024',
    readTime: '6 MIN READ',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'David Antony',
      role: 'UI/UX Designer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    tags: ['Strategy', 'UX Design', 'Product Architecture'],
    content: [
      {
        heading: 'THE ROLE OF DESIGN STRATEGY',
        body: [
          'Design is often mistaken for how something looks, but at its core, design is how something works. Strategic thinking ensures that every UI element serves a measurable user need and business goal.'
        ]
      }
    ]
  },
  {
    id: 'concept-to-pixel',
    title: 'From Concept to Pixel: The Creative Journey Behind My Recent SaaS Redesign',
    excerpt: 'A step-by-step breakdown of transforming a complex legacy web app into a streamlined SaaS platform.',
    category: 'Case Study',
    publishDate: 'OCTOBER 15, 2024',
    readTime: '7 MIN READ',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'David Antony',
      role: 'UI/UX Designer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    tags: ['SaaS', 'Redesign', 'Product Design'],
    content: [
      {
        heading: 'FROM IDEA TO PRODUCTION',
        body: [
          'Redesigning a high-volume SaaS tool requires balancing familiarity for existing power users with intuitive onboarding for newcomers.'
        ]
      }
    ]
  },
  {
    id: 'designing-for-conversion',
    title: 'Designing for Conversion: Turning Visitors into Loyal Users',
    excerpt: 'A practical guide to visual hierarchy, user journey mapping, and persuasive microcopy that elevates conversion rates.',
    category: 'Conversion',
    publishDate: 'OCTOBER 24, 2024',
    readTime: '5 MIN READ',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'David Antony',
      role: 'UI/UX Designer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    tags: ['Conversion', 'UX Research', 'Microcopy'],
    content: [
      {
        heading: 'INTRODUCTION',
        body: [
          'In today\'s digital landscape, a visually appealing website is no longer enough. Businesses need to focus on conversion-driven design—crafting user experiences that guide visitors seamlessly toward desired actions. Whether it\'s signing up for a newsletter, purchasing a product, or exploring a service, the goal is to transform casual visitors into engaged, loyal users.'
        ]
      },
      {
        heading: 'UNDERSTANDING THE USER JOURNEY',
        body: [
          'The foundation of conversion-focused design starts with understanding the user journey. Every user interacts differently with your website, depending on their needs, motivations, and pain points. Mapping out this journey helps identify:'
        ]
      },
      {
        heading: 'CLEAR VISUAL HIERARCHY',
        body: [
          'A strong visual hierarchy is essential for conversion. Users should immediately understand what\'s important on the page without confusion. Consider:'
        ]
      },
      {
        heading: 'CRAFTING PERSUASIVE MICROCOPY',
        body: [
          'Small details can make a big difference. Microcopy—the tiny snippets of text like button labels, error messages, or tooltips—plays a vital role in guiding user behavior. Effective microcopy should:'
        ]
      },
      {
        heading: 'OPTIMIZING FOR MOBILE',
        body: [
          'With mobile users now dominating web traffic, a mobile-first approach is crucial. Ensure your designs are responsive, load quickly, and maintain a clear hierarchy on smaller screens. Features to focus on include:'
        ]
      },
      {
        heading: 'TESTING AND ITERATION',
        body: [
          'Conversion-driven design isn\'t static—it requires continuous testing and iteration. Use A/B testing, heatmaps, and analytics to see how users interact with your site. Experiment with:'
        ]
      }
    ]
  },
  {
    id: 'minimalist-ui',
    title: 'The Art of Minimalist UI: How Less Can Truly Be More',
    excerpt: 'Exploring content-first layouts, white space mathematics, and purposeful reduction in modern interfaces.',
    category: 'Minimalism',
    publishDate: 'SEPTEMBER 30, 2024',
    readTime: '4 MIN READ',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'David Antony',
      role: 'UI/UX Designer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    tags: ['Minimalism', 'Typography', 'UI Design'],
    content: [
      {
        heading: 'EMBRACING CLARITY',
        body: [
          'Minimalism is not the absence of design; it is the presence of purpose. By removing visual noise, key content commands the user\'s full attention.'
        ]
      }
    ]
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    period: '2022 — PRESENT',
    role: 'Lead Product Designer & Strategist',
    company: 'Studio Nova',
    location: 'New York, NY',
    description: 'Directing product design and front-end engineering for Series-A and Series-B SaaS clients. Orchestrating design systems and leading multi-disciplinary product launches.',
    skills: ['Product Design', 'React / Next.js', 'Design Systems', 'Team Leadership']
  },
  {
    period: '2020 — 2022',
    role: 'Senior UI/UX Designer',
    company: 'Apex Digital Agency',
    location: 'San Francisco, CA',
    description: 'Designed web experiences and iOS applications for global automotive, fintech, and luxury retail brands. Increased client conversion benchmarks by an average of 35%.',
    skills: ['UI/UX Design', 'Figma Prototyping', 'User Research', '3D Visuals']
  },
  {
    period: '2018 — 2020',
    role: 'Interactive Creative Developer',
    company: 'Monolith Studio',
    location: 'London, UK',
    description: 'Built high-impact WebGL canvases, smooth Webflow integrations, and custom interactive marketing campaigns for Fortune 500 tech clients.',
    skills: ['Three.js', 'GSAP', 'TypeScript', 'Responsive Design']
  },
  {
    period: '2015 — 2018',
    role: 'Visual & Graphic Designer',
    company: 'Freelance Practice',
    location: 'Remote',
    description: 'Crafted brand identity systems, editorial typography layouts, and custom web designs for creative startups and independent publications.',
    skills: ['Branding', 'Typography', 'Visual Identity', 'Graphic Design']
  }
];

export const SERVICES_LIST = [
  {
    number: '01',
    title: 'UI/UX & Product Design',
    description: 'User-centered web & mobile interfaces, wireframing, high-fidelity Figma prototypes, user testing, and complex dashboard workstations.'
  },
  {
    number: '02',
    title: 'Front-End Development',
    description: 'Clean TypeScript, React, Next.js, and Tailwind CSS codebases built with fast loading performance, accessibility standards, and fluid animations.'
  },
  {
    number: '03',
    title: 'Design Systems Architecture',
    description: 'Unified visual languages, tokenized typography and color systems, and reusable React component libraries for scaling engineering teams.'
  },
  {
    number: '04',
    title: 'Brand Identity & Webflow',
    description: 'Distinctive brand strategy, visual logos, typography pairings, interactive 3D assets, and custom CMS web builds.'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'Process',
    question: 'What is your typical project timeline and workflow?',
    answer: 'Most comprehensive web or product design projects take between 4 to 8 weeks depending on scope. My workflow moves cleanly from Discovery & Architecture -> Wireframes & Prototypes -> Visual Polish -> Front-End Development & QA.'
  },
  {
    category: 'Pricing',
    question: 'How do you price your design & engineering services?',
    answer: 'I work primarily on a fixed project-based rate so there are no unexpected hourly billing surprises. Fixed engagements typically start at $7,500 for web design projects and $12,000 for full-stack product interfaces. Retainers are also available.'
  },
  {
    category: 'Availability',
    question: 'Do you take on full-time positions or agency sub-contracts?',
    answer: 'I am currently open to select high-impact freelance projects, design advisory engagements, and fractional lead design roles.'
  },
  {
    category: 'Stack',
    question: 'What design tools and development tech stack do you use?',
    answer: 'For design: Figma, Adobe CC, Spline 3D, and Midjourney. For engineering: React, TypeScript, Next.js, Tailwind CSS, Motion/GSAP, Node.js, and Webflow.'
  }
];
