import Hero from "@/app/ui/industries/telecom/Hero";
import ChooseUs from "@/app/ui/industries/telecom/ChooseUs";
import CTA from "@/app/ui/industries/telecom/CTA";

const page = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <Hero />

        {/* Why Choose Us Section */}
        <ChooseUs />

        {/* CTA */}
        <CTA />
      </div>
    </>
  );
};

export default page;
