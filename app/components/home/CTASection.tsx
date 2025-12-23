import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { Heading } from "../ui/Heading";

export function CTASection() {
  return (
    <Section className="bg-gold">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <Heading variant="h2" className="text-forest mb-6">
            Ready to Create Something Extraordinary?
          </Heading>
          <p className="text-forest/80 text-lg mb-8">
            Let's bring your vision to life with bold design and meticulous attention to detail.
          </p>
          <Button href="/contact" variant="primary" className="bg-forest text-cream hover:bg-forest/90">
            Start Your Project
          </Button>
        </div>
      </Container>
    </Section>
  );
}
