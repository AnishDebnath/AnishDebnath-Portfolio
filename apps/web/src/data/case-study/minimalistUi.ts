import { JournalArticle } from '../../types';

export const minimalistUi: JournalArticle = {
  id: 'minimalist-ui',
  title: 'The Art of Minimalist UI: How Less Can Truly Be More',
  excerpt: 'Exploring content-first layouts, white space mathematics, and purposeful reduction in modern interfaces.',
  category: 'Minimalism',
  publishDate: 'SEPTEMBER 30, 2024',
  readTime: '4 MIN READ',
  featured: false,
  coverImage: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=1200&q=80',
  author: {
    name: 'Anish Debnath',
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
};