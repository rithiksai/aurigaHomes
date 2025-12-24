import type { Metadata } from "next";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { Heading } from "../components/ui/Heading";
import { ProjectGrid } from "../components/projects/ProjectGrid";
import { LeatherBackground } from "../components/ui/LeatherBackground";
import { projects } from "../lib/data/projects";

export const metadata: Metadata = {
  title: "Designs",
};

export default function DesignsPage() {
  return (
    <LeatherBackground className="min-h-screen">
      {/* Hero Section */}
      <Section className="min-h-[60vh] flex items-center justify-center">
        <Container>
          <div className="text-center">
            <Heading variant="hero" className="mb-6">
              Our Work
            </Heading>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              A curated selection of our most inspiring projects
            </p>
          </div>
        </Container>
      </Section>

      {/* Projects Grid */}
      <Section>
        <Container>
          <ProjectGrid projects={projects} />
        </Container>
      </Section>
    </LeatherBackground>
  );
}
