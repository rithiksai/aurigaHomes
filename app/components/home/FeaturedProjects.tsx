import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { Heading } from "../ui/Heading";

const featuredProjects = [
  {
    id: 1,
    title: "Modern Villa",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Urban Loft",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Coastal Retreat",
    location: "Malibu, CA",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
  },
];

export function FeaturedProjects() {
  return (
    <Section className="bg-cream">
      <Container>
        <Heading variant="h2" className="text-center mb-16">
          Featured Projects
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/designs/${project.id}`}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-forest/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-cream font-display text-2xl tracking-wide">
                    View Project
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-display tracking-wide mb-2 group-hover:text-gold transition-colors">
                {project.title}
              </h3>
              <p className="text-charcoal/70 text-sm uppercase tracking-wider">
                {project.location}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
