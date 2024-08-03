import Hero from "@/app/ui/industries/itDigital/Hero";
import OurApproach from "@/app/ui/industries/itDigital/OurApproach";
import CTA from "@/app/ui/industries/itDigital/CTA";

const page = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <Hero />

        {/* Our Approach */}
        <OurApproach />

        {/* CTA */}
        <CTA />
      </div>
    </>
  );
};

export default page;
