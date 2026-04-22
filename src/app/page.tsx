import HeroSection from "@/components/HeroSection";
import ValueProps from "@/components/ValueProps";
import ShowcaseCarousel from "@/components/ShowcaseCarousel";
import StatsBanner from "@/components/StatsBanner";
import BoldQuote from "@/components/BoldQuote";
import HowItWorks from "@/components/HowItWorks";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsBanner />
      <ValueProps />
      <ShowcaseCarousel />
      
      <BoldQuote />
      <HowItWorks />
      
    </main>
  );
}
