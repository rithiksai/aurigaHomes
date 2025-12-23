export interface Service {
  id: number;
  number: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 1,
    number: "01",
    title: "Architecture",
    description:
      "Thoughtful design that transforms spaces into timeless expressions of form and function.",
  },
  {
    id: 2,
    number: "02",
    title: "Interior Design",
    description:
      "Curated interiors that embody sophistication through minimal yet impactful aesthetics.",
  },
  {
    id: 3,
    number: "03",
    title: "Landscape",
    description:
      "Harmonious outdoor environments that seamlessly blend nature with architectural vision.",
  },
  {
    id: 4,
    number: "04",
    title: "Consultation",
    description:
      "Expert guidance to help you navigate the complexities of bringing your vision to life.",
  },
  {
    id: 5,
    number: "05",
    title: "Project Management",
    description:
      "End-to-end oversight ensuring every detail aligns with your expectations and timeline.",
  },
  {
    id: 6,
    number: "06",
    title: "Renovations",
    description:
      "Transforming existing spaces with fresh perspective while honoring their inherent character.",
  },
];
