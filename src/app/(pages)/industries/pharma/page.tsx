import Hero from "@/app/ui/industries/pharma/Hero";
import Services from "@/app/ui/industries/pharma/Services";
import CTA from "@/app/ui/industries/pharma/CTA";

const page = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <Hero />

        {/* Our Services */}
        <Services />

        {/* CTA */}
        <CTA />
      </div>
    </>
  );
};

export default page;
