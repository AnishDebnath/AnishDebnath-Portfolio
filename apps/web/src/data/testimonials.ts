export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface TestimonialFeatured extends TestimonialItem {
  heroImage: string;
}

export const TESTIMONIALS = {
  leftColumnItems: [
    {
      id: 'jenna',
      name: 'Jenna Morales',
      role: 'Design Lead at LaunchNest',
      quote: 'We needed a quick turnaround, and Daniel delivered a Framer site that was not only fast but visually stunning. Highly recommend.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 'theo',
      name: 'Theo Barnes',
      role: 'Product Manager at Driftly',
      quote: 'His attention to detail is unmatched. Our mobile app now feels intuitive and premium—our users noticed the difference right away.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
  ] as TestimonialItem[],

  centerColumnTop: {
    id: 'marcus',
    name: 'Marcus Allen',
    role: 'CEO at Wellnest',
    quote: 'Working with Daniel felt like working with a creative partner, not just a designer. He brought clarity and elegance to our digital presence.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  } as TestimonialItem,

  centerColumnFeatured: {
    id: 'sophie',
    name: 'Sophie Allen',
    role: 'Founder at Bloom Studio',
    quote: 'Daniel made the entire process feel effortless. He listened, adapted, and delivered a site that completely exceeded our expectations.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  } as TestimonialFeatured,

  centerColumnBottom: {
    id: 'priya',
    name: 'Priya Nair',
    role: 'Co-Founder at Kinfolk Goods',
    quote: 'Daniel took our messy vision and turned it into something polished, clear, and effective. He truly understands design with purpose.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
  } as TestimonialItem,

  rightColumnItems: [
    {
      id: 'kevin',
      name: 'Kevin Yates',
      role: 'Director at Elevate Legal',
      quote: 'Professional, thoughtful, and fast. Our new website is not only beautiful but has increased engagement by over 40%.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 'lucia',
      name: 'Lucia Romero',
      role: 'Founder at Supply Co.',
      quote: 'He just gets it. Daniel has an instinct for what a brand needs, even when you’re still figuring it out yourself.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    },
  ] as TestimonialItem[],
};