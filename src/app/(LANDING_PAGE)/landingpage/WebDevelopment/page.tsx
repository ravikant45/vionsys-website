import React from "react";
import WorkWithUs from "@/app/ui/home/WorkWithUs";
import InfiniteMovingCardsDemo from "@/app/ui/home/Clients";
import HeroSection from "../componets/WebDevelopmentUI/HeroSection";
import Services from "../componets/WebDevelopmentUI/Services";
import PricingSection from "../componets/WebDevelopmentUI/PricingSection";
import WhychooseUs from "../componets/WebDevelopmentUI/WhychooseUs";
import ContactUs from "../componets/WebDevelopmentUI/ContactUs";
import SocialLinks from "../componets/WebDevelopmentUI/SocialLinks";
import App from "../app";

const page = () => {
  return (
    <main className="h-screen scrollbar-thin overflow-y-scroll overflow-x-hidden">
      <HeroSection />
      <Services />
      <InfiniteMovingCardsDemo />
      <PricingSection />
      <WhychooseUs />
      <WorkWithUs/>
      <ContactUs />
      <SocialLinks />
      <App />
    </main>
  );
};

export default page;
