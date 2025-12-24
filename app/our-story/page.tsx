import type { Metadata } from "next";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { Heading } from "../components/ui/Heading";
import { Button } from "../components/ui/Button";
import { FoundersSection } from "../components/about/FoundersSection";
import { ValuesSection } from "../components/about/ValuesSection";
import { LeatherBackground } from "../components/ui/LeatherBackground";
import { teamMembers, values } from "../lib/data/team";

export const metadata: Metadata = {
  title: "Our Story",
};

export default function OurStoryPage() {
  return (
    <LeatherBackground className="min-h-screen">
      {/* Hero Section */}
      <Section className="min-h-[60vh] flex items-center justify-center">
        <Container>
          <div className="text-center">
            <Heading variant="hero" className="mb-6">
              Our Story
            </Heading>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              A journey of passion, dedication, and timeless design
            </p>
          </div>
        </Container>
      </Section>

      {/* Introduction */}
      <Section>
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Heading variant="h2" className="mb-12">
              Building the Future, Honoring the Past
            </Heading>
            <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed">
              <p>
                Founded in 2024, Auriga Homes emerged from a simple belief: that
                architecture should be both minimal and bold, timeless yet
                contemporary.
              </p>
              <p>
                We've had the privilege of working with remarkable clients who
                share our vision for creating spaces that inspire and endure.
              </p>
              <p>
                Every project is a collaboration, a chance to push boundaries
                while honoring the principles of great design.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Founders */}
      <Section>
        <Container>
          <Heading variant="h2" className="text-center mb-20">
            Meet the Founders
          </Heading>
          <FoundersSection founders={teamMembers} />
        </Container>
      </Section>

      {/* Values */}
      <Section>
        <Container>
          <Heading variant="h2" className="text-center mb-20">
            Our Values
          </Heading>
          <ValuesSection values={values} />
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-forest">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Heading variant="h2" className="text-cream mb-6">
              Let's Create Your Story
            </Heading>
            <p className="text-cream/80 text-lg mb-8">
              We'd love to hear about your vision and explore how we can bring it to life.
            </p>
            <Button href="/contact" variant="primary">
              Start a Conversation
            </Button>
          </div>
        </Container>
      </Section>
    </LeatherBackground>
  );
}
