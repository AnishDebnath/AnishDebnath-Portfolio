export interface ExperienceImage {
    url: string;
    title: string;
}

export interface ExperienceItemData {
    id: string;
    role: string;
    company: string;
    period: string;
    duration?: string;
    location?: string;
    bullets: string[];
    images: ExperienceImage[];
}

export const EXPERIENCE_DATA: ExperienceItemData[] = [
    {
        id: 'exp-1',
        role: 'Senior UI/UX Designer',
        company: 'PixelForge Studio',
        period: '2022 – Present',
        duration: '4 yrs 4 mos',
        location: 'Nagpur, Maharashtra, India · Remote',
        bullets: [
            'Led the design of over 25+ SaaS and e-commerce platforms focused on conversion optimization.',
            'Collaborated with developers and stakeholders to create seamless user journeys and scalable design systems.',
            'Mentored junior designers and established the studio\'s design workflow using Figma and Notion.',
        ],
        images: [
            {
                url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
                title: 'SaaS Analytics Dashboard UI',
            },
            {
                url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
                title: 'Conversion Design System',
            },
            {
                url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
                title: 'E-Commerce Platform Redesign',
            },
        ],
    },
    {
        id: 'exp-2',
        role: 'Product Designer',
        company: 'BrightTech Solutions',
        period: '2019 – 2022',
        duration: '3 yrs',
        location: 'Nagpur, Maharashtra, India · Remote',
        bullets: [
            'Designed web and mobile interfaces for B2B SaaS products serving 100k+ users.',
            'Conducted user research, usability testing, and data-driven design iterations.',
            'Improved product retention by 18% through simplified onboarding UX.',
        ],
        images: [
            {
                url: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80',
                title: 'B2B Web Application',
            },
            {
                url: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80',
                title: 'Usability Testing & Wireframing',
            },
            {
                url: 'https://images.unsplash.com/photo-1542744094-3a3121699039?auto=format&fit=crop&w=1200&q=80',
                title: 'Onboarding Workflow Screens',
            },
        ],
    },
    {
        id: 'exp-3',
        role: 'UI Designer',
        company: 'Creative Hive Agency',
        period: '2017 – 2019',
        duration: '2 yrs',
        location: 'Nagpur, Maharashtra, India · Remote',
        bullets: [
            'Created landing pages and marketing websites for startups across fintech, real estate, and law industries.',
            'Collaborated closely with marketing teams to align design with brand identity and goals.',
            'Delivered 40+ client projects with a strong focus on aesthetics and performance.',
        ],
        images: [
            {
                url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
                title: 'Fintech Landing Platform',
            },
            {
                url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
                title: 'Real Estate Booking Interface',
            },
            {
                url: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80',
                title: 'Legal Agency Web Experience',
            },
        ],
    },
];