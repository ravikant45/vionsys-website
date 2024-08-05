import React from "react";
import InsuranceHeroSection from "@/app/ui/industries/insuranceSector/InsuranceHeroSection";
import InsuraceChooseUs from "@/app/ui/industries/insuranceSector/InsuranceChooseUs";
import InsuranceContactUs from "@/app/ui/industries/insuranceSector/InsuranceContactUs";
import InsuranceOurServices from "@/app/ui/industries/insuranceSector/InsuranceOurServices";
const Page = () => {
  return (
    <section className="overflow-x-hidden">
      {/*     Hero Section 1 */}
      <InsuranceHeroSection />
      {/* Our Serives Section  */}
      <InsuranceOurServices />
      {/* Why Choosh us */}
      <InsuraceChooseUs />
      {/* Partner with Vionsys Section */}
      <InsuranceContactUs />
    </section>
  );
};

export default Page;
