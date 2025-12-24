import type { Metadata } from "next";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { Heading } from "../components/ui/Heading";
import { ContactForm } from "../components/contact/ContactForm";
import { ContactInfo } from "../components/contact/ContactInfo";
import { LeatherBackground } from "../components/ui/LeatherBackground";

export const metadata: Metadata = {
  title: "Get in Touch",
};

export default function ContactPage() {
  return (
    <LeatherBackground className="min-h-screen">
      {/* Hero Section */}
      <Section className="min-h-[50vh] flex items-center justify-center">
        <Container>
          <div className="text-center">
            <Heading variant="hero" className="mb-6">
              Get in Touch
            </Heading>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            {/* Contact Info */}
            <div>
              <Heading variant="h3" className="mb-8">
                Visit Us
              </Heading>
              <ContactInfo />
            </div>

            {/* Contact Form */}
            <div>
              <Heading variant="h3" className="mb-8">
                Send a Message
              </Heading>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-forest">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Heading variant="h2" className="mb-6 text-cream">
              Start Your Journey
            </Heading>
            <p className="text-lg text-cream/80">
              Whether you're planning a new build, renovation, or simply exploring ideas,
              we'd love to hear from you. Every great project starts with a conversation.
            </p>
          </div>
        </Container>
      </Section>
    </LeatherBackground>
  );
}
