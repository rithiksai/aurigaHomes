import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "modern-villa",
    title: "Modern Villa",
    category: "architecture",
    location: "Los Angeles, CA",
    year: 2024,
    client: "Private Residence",
    description:
      "A stunning modern villa that seamlessly blends indoor and outdoor living with clean lines and sophisticated materials.",
    heroImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
    ],
    featured: true,
  },
  {
    slug: "urban-loft",
    title: "Urban Loft",
    category: "interior",
    location: "New York, NY",
    year: 2023,
    client: "Private Client",
    description:
      "An industrial loft transformed into a sophisticated living space with curated furnishings and minimal aesthetic.",
    heroImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&h=800&fit=crop",
    ],
    featured: true,
  },
  {
    slug: "coastal-retreat",
    title: "Coastal Retreat",
    category: "architecture",
    location: "Malibu, CA",
    year: 2024,
    client: "Private Residence",
    description:
      "A breathtaking coastal home designed to capture panoramic ocean views while maintaining privacy and comfort.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop",
    ],
    featured: true,
  },
  {
    slug: "mountain-cabin",
    title: "Mountain Cabin",
    category: "architecture",
    location: "Aspen, CO",
    year: 2023,
    client: "Private Residence",
    description:
      "A contemporary mountain retreat that harmonizes with its natural surroundings through thoughtful material selection.",
    heroImage:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop",
    ],
    featured: false,
  },
  {
    slug: "downtown-penthouse",
    title: "Downtown Penthouse",
    category: "interior",
    location: "Chicago, IL",
    year: 2024,
    client: "Private Client",
    description:
      "A luxurious penthouse interior featuring bold design choices and impeccable attention to detail.",
    heroImage:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&h=800&fit=crop",
    ],
    featured: false,
  },
  {
    slug: "garden-oasis",
    title: "Garden Oasis",
    category: "landscape",
    location: "Santa Barbara, CA",
    year: 2023,
    client: "Private Estate",
    description:
      "A meticulously designed landscape that creates serene outdoor spaces for contemplation and entertainment.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop",
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
