import FranchiseHero from "@/components/about/FranchiseHero";
import WhyFranchise from "@/components/about/WhyFranchise";
import ContactSection from "@/components/about/ContactSection";
import FranchiseInfo from "@/components/about/FranchiseInfo";
import OurMission from "@/components/about/OurMission";
import WhoWeAre from "@/components/about/WhoWeAre";

export default function Frenchise() {
  return (
    <main>
      <FranchiseHero />
      <OurMission />
      <WhyFranchise />
      <WhoWeAre />
      <ContactSection />
      <FranchiseInfo />
    </main>
  );
}
