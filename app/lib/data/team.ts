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
    role: "Founder",
    bio: "With over 5 years of experience, Manoj brings a minimalist philosophy to every project. He oversees every build personally — because he believes a home is only as good as the hands that construct it.",
    image: "/founders.jpg",
  },
  {
    id: 2,
    name: "Raunak Baid",
    role: "Co-Founder",
    bio: "Raunak's keen eye for detail and passion for considered design have shaped every Auriga project from the inside out. He believes every space should feel like it was made for exactly one family.",
    image: "/founders.jpg",
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
