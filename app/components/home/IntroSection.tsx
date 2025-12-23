import { Container } from "../ui/Container";
import { Section } from "../ui/Section";

export function IntroSection() {
  return (
    <Section>
      <Container size="narrow">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-display tracking-wide mb-6">
            Crafting Spaces That Inspire
          </h2>
          <p className="text-lg text-charcoal/80 leading-relaxed mx-auto">
            We believe in the power of simplicity. Every project is an opportunity to create something timeless.
          </p>
          <p className="text-lg text-charcoal/80 leading-relaxed mx-auto mt-4">
            Bold design. Thoughtful execution. Unforgettable spaces.
          </p>
        </div>
      </Container>
    </Section>
  );
}
