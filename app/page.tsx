import { Hero } from "./components/home/Hero";
import { IntroSection } from "./components/home/IntroSection";
import { FeaturedProjects } from "./components/home/FeaturedProjects";
import { CTASection } from "./components/home/CTASection";
import { HouseScene } from "./components/three/HouseScene";

export default function Home() {
  return (
    <>
      <HouseScene />
      <div className="relative z-10">
        <Hero />
        <IntroSection />
        <FeaturedProjects />
        <CTASection />
      </div>
    </>
  );
}
