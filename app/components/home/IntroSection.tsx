import { Container } from "../ui/Container";
import { Section } from "../ui/Section";

export function IntroSection() {
  return (
    <Section>
      <Container size="narrow">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-display tracking-wide mb-6 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
            Crafting Spaces That Inspire
          </h2>
          <p className="text-lg text-white/90 leading-relaxed mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
            We believe in the power of simplicity. Every project is an opportunity to create something timeless.
          </p>
          <p className="text-lg text-white/90 leading-relaxed mx-auto mt-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
            Bold design. Thoughtful execution. Unforgettable spaces.
          </p>
        </div>
      </Container>
    </Section>
  );
}
