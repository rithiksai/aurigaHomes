export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Manoj Cherukuri",
    role: "Founder & Lead Builder",
    bio: "With over 5 years of experience, Manoj brings a minimalist philosophy to every project.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Raunak Baid",
    role: "Co-Founder & Interior Designer",
    bio: "Raunak's keen eye for detail and passion for sustainable design have shaped countless interiors. He believes every space should tell a story.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
];

export const values = [
  {
    id: 1,
    title: "Minimal Aesthetic",
    description: "We believe less is more. Every element serves a purpose.",
  },
  {
    id: 2,
    title: "Bold Vision",
    description:
      "We're not afraid to push boundaries while respecting timeless principles.",
  },
  {
    id: 3,
    title: "Craftsmanship",
    description:
      "Quality is never compromised. We partner with the finest artisans.",
  },
];
