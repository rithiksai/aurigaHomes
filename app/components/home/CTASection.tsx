import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { Heading } from "../ui/Heading";

export function CTASection() {
  return (
    <Section>
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <Heading
            variant="h2"
            className="text-white mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
          >
            Ready to Create Something Extraordinary?
          </Heading>
          <p className="text-white/90 text-lg mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
            Let's bring your vision to life with bold design and meticulous attention to detail.
          </p>
          <Button href="/contact">Start Your Project</Button>
        </div>
      </Container>
    </Section>
  );
}
