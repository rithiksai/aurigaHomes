import { Hero } from "./components/home/Hero";
import { MarqueeSection } from "./components/home/MarqueeSection";
import { IntroSection } from "./components/home/IntroSection";
import { StatsSection } from "./components/home/StatsSection";
import { FeaturedProjects } from "./components/home/FeaturedProjects";
import { PhilosophySection } from "./components/home/PhilosophySection";
import { ProcessSection } from "./components/home/ProcessSection";
import { CTASection } from "./components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeSection />
      <IntroSection />
      <StatsSection />
      <FeaturedProjects />
      <PhilosophySection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
