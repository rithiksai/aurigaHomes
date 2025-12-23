export interface Project {
  slug: string;
  title: string;
  category: "architecture" | "interior" | "landscape";
  location: string;
  year: number;
  client: string;
  description: string;
  heroImage: string;
  gallery: string[];
  featured: boolean;
}
