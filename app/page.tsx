import { Hero } from "./components/home/Hero";
import { IntroSection } from "./components/home/IntroSection";
import { FeaturedProjects } from "./components/home/FeaturedProjects";
import { CTASection } from "./components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <FeaturedProjects />
      <CTASection />
    </>
  );
}
