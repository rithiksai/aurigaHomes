import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "completed-residence",
    title: "Completed Residence",
    category: "architecture",
    location: "Bengaluru",
    year: 2023,
    client: "Private Residence",
    description:
      "A completed multi-storey residence showcasing Auriga's precision in construction — copper-toned cladding, glass balcony railings, cantilevered volumes, and lush rooftop greenery. Built and delivered.",
    heroImage: "/projects/project-1.jpg",
    gallery: [
      "/projects/project-1.jpg",
      "/projects/project-2.jpg",
    ],
    featured: true,
  },
  {
    slug: "raghavendra-residence",
    title: "Raghavendra Residence",
    category: "architecture",
    location: "Bengaluru",
    year: 2024,
    client: "Mr. Raghavendra",
    description:
      "A bold contemporary residence on a corner plot — clean cuboid massing in dark grey and white, with an open ground-floor carport, rooftop terrace, and floor-to-ceiling glass that commands the street.",
    heroImage: "/projects/project-3.jpg",
    gallery: [
      "/projects/project-3.jpg",
    ],
    featured: true,
  },
  {
    slug: "subramanya-residence",
    title: "Subramanya Residence",
    category: "architecture",
    location: "Bengaluru",
    year: 2024,
    client: "Mr. Subramanya",
    description:
      "A striking urban home defined by exposed dark brick cladding, dramatic dusk lighting, and generous open parking. Three storeys of considered design — each level distinct, each detail deliberate.",
    heroImage: "/projects/project-4.jpg",
    gallery: [
      "/projects/project-4.jpg",
    ],
    featured: true,
  },
  {
    slug: "praveen-residence",
    title: "Praveen Residence",
    category: "architecture",
    location: "Bengaluru",
    year: 2024,
    client: "Mr. Praveen",
    description:
      "A compact urban home with a confident presence — stacked dark and cream volumes, a covered carport, open terraces at every level, and vertical louvers that balance openness with privacy.",
    heroImage: "/projects/project-6.jpg",
    gallery: [
      "/projects/project-6.jpg",
      "/projects/project-5.jpg",
    ],
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
