import OpportunityHero from "@/components/opportunity/OpportunityHero";
import MarketOpportunity from "@/components/opportunity/MarketOpportunity";    
import FranchiseBenefits from "@/components/opportunity/FranchiseBenefits";    
import OpportunityBanner from '../../components/opportunity/OpportunityBanner';
import StepsToOwnership from "@/components/opportunity/StepsToOwnership";
import BoldQuote from "@/components/opportunity/BoldQuote";

export default function Opportunity() {
  return (
    <main>
      <OpportunityHero />
      <MarketOpportunity /> 
      <OpportunityBanner />
      <FranchiseBenefits />
      < BoldQuote />
      <StepsToOwnership />
      
      
    </main>
  );
}