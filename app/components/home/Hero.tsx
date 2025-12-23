import { Heading } from "../ui/Heading";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-cream to-white">
      <Container>
        <div className="text-center">
          <Heading variant="hero" className="mb-8 text-balance">
            Building Dreams <br className="hidden md:block" />
            Into Reality
          </Heading>
          <p className="text-lg md:text-xl text-charcoal/70 mb-12 max-w-2xl mx-auto">
            Minimal architecture. Bold vision. Exceptional spaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/designs">View Our Work</Button>
            <Button href="/contact" variant="secondary">
              Get in Touch
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
