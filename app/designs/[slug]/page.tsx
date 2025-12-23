import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "../../components/ui/Container";
import { Section } from "../../components/ui/Section";
import { Heading } from "../../components/ui/Heading";
import { Button } from "../../components/ui/Button";
import { projects, getProjectBySlug } from "../../lib/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero Image */}
      <div className="relative h-[60vh] md:h-[70vh]">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Project Info */}
      <Section>
        <Container size="narrow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Project Details Sidebar */}
            <div className="md:col-span-1 space-y-6">
              <div>
                <h4 className="text-sm uppercase tracking-widest text-gold mb-2">
                  Project
                </h4>
                <p className="text-charcoal">{project.title}</p>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-widest text-gold mb-2">
                  Location
                </h4>
                <p className="text-charcoal">{project.location}</p>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-widest text-gold mb-2">
                  Year
                </h4>
                <p className="text-charcoal">{project.year}</p>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-widest text-gold mb-2">
                  Category
                </h4>
                <p className="text-charcoal capitalize">{project.category}</p>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-widest text-gold mb-2">
                  Client
                </h4>
                <p className="text-charcoal">{project.client}</p>
              </div>
            </div>

            {/* Project Description */}
            <div className="md:col-span-2">
              <Heading variant="h2" className="mb-6">
                {project.title}
              </Heading>
              <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
                {project.description}
              </p>
              <Button href="/contact">Start Your Project</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Project Gallery */}
      {project.gallery.length > 0 && (
        <Section className="bg-cream">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((image, index) => (
                <div key={index} className="relative aspect-[4/3]">
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* CTA Section */}
      <Section>
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <Heading variant="h2" className="mb-6">
              Inspired by This Project?
            </Heading>
            <p className="text-lg text-charcoal/80 mb-8">
              Let's discuss how we can create something exceptional for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact">Get in Touch</Button>
              <Button href="/designs" variant="secondary">
                View More Projects
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
