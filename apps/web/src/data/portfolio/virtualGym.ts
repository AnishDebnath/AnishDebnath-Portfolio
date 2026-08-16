import { CaseStudy } from '../../types';

export const virtualGym: CaseStudy = {
  id: 'virtual-gym',
  title: 'VIRTUAL GYM EXPERIENCE SHOWCASE',
  client: 'Aura Fitness Inc.',
  subtitle: 'AI-assisted fitness mobile app & workout telemetry workspace.',
  category: 'Mobile Apps',
  year: '2024',
  date: 'Aug 12, 2024',
  iconBg: 'bg-[#1fc932]',
  featured: true,
  showOnHome: true,
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
};
