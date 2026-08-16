import { CaseStudy } from '../../types';

export const electricMobility: CaseStudy = {
  id: 'electric-mobility',
  title: 'ELECTRIC MOBILITY EXPERIENCE',
  client: 'Vektor Motors',
  subtitle: 'Next-generation electric vehicle companion app & portal.',
  category: 'UI/UX',
  year: '2023',
  date: 'Nov 14, 2023',
  iconBg: 'bg-[#f2512d]',
  featured: true,
  showOnHome: true,
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
};
