export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const DEFAULT_FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: "What's your typical design process like?",
    answer: "I follow a clear process that starts with understanding your goals, then moves through wireframing, visual design, and final delivery with your feedback at every step.",
  },
  {
    id: 'faq-2',
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on scope, but a standard website or mobile app interface design usually takes 2 to 4 weeks from concept to final handoff.",
  },
  {
    id: 'faq-3',
    question: "Do you also offer development or only design?",
    answer: "I specialize primarily in UI/UX design, design systems, and prototyping. However, I partner closely with expert developers or deliver clean, production-ready React/Framer code when requested.",
  },
  {
    id: 'faq-4',
    question: "What tools do you use for your design work?",
    answer: "My primary tool stack includes Figma for wireframing and design systems, Framer & Webflow for interactive site building, Notion for workflow management, and Adobe CC for graphics.",
  },
  {
    id: 'faq-5',
    question: "Can you redesign my existing website instead of starting from scratch?",
    answer: "Yes, absolutely! I regularly perform comprehensive UX audits and full site redesigns to elevate conversions, modernize aesthetics, and improve overall user experience.",
  },
];
