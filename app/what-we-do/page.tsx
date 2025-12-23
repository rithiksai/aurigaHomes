import type { Metadata } from "next";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { Heading } from "../components/ui/Heading";
import { ServiceGrid } from "../components/capabilities/ServiceGrid";
import { Button } from "../components/ui/Button";
import { services } from "../lib/data/services";

export const metadata: Metadata = {
  title: "What We Do",
};

export default function WhatWeDoPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-cream to-white">
        <Container>
          <div className="text-center">
            <Heading variant="hero" className="mb-6">
              What We Do
            </Heading>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Comprehensive services for creating exceptional spaces
            </p>
          </div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section>
        <Container>
          <ServiceGrid services={services} />
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-forest">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Heading variant="h2" className="text-cream mb-6">
              Let's Create Together
            </Heading>
            <p className="text-cream/80 text-lg mb-8">
              Every project is a collaboration. Let's discuss how we can bring your vision to life.
            </p>
            <Button href="/contact" variant="primary">
              Start a Conversation
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
