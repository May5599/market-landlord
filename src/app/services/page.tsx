import PropertyHero from "@/components/services/PropertyHero";
import PropertyIntro from "@/components/services/PropertyIntro";
import ServiceGrid from "@/components/services/ServiceGrid";
import HowWeHelp from "@/components/services/HowWeHelp";
import PropertyCTA from "@/components/services/PropertyCTA";


export default function ServicesPage() {
  return (
    <main>
      <PropertyHero />
      <PropertyIntro />
      <ServiceGrid />
      <HowWeHelp />
      <PropertyCTA />
    </main>
  );
}
