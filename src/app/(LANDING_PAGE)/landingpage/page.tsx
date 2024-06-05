import React from "react";
import HeroSection from "./componets/HeroSection";
import Services from "./componets/Services";
import PricingSection from "./componets/PricingSection";
import OurClients from "@/app/ui/home/OurClients";
import WhychooseUs from "./componets/WhychooseUs";
import ContactUs from "./componets/ContactUs";
import SocialLinks from "./componets/SocialLinks";
import WorkWithUs from "@/app/ui/home/WorkWithUs";
import App from "./app";

const LandingPage = () => {
  return (
    <main className="h-screen scrollbar-thin overflow-y-scroll overflow-x-hidden">
      <HeroSection />
      <Services />
      <OurClients />
      <PricingSection />
      <WhychooseUs />
      <WorkWithUs/>
      <ContactUs/>
      <SocialLinks />
      <App />
    </main>
  );
};

export default LandingPage;
