import React from "react";
import HeroSection from "./componets/landingUI/HeroSection";
import Services from "./componets/landingUI/Services";
import PricingSection from "./componets/landingUI/PricingSection";
import WhychooseUs from "./componets/landingUI/WhychooseUs";
import ContactUs from "./componets/landingUI/ContactUs";
import SocialLinks from "./componets/landingUI/SocialLinks";
import WorkWithUs from "@/app/ui/home/WorkWithUs";
import App from "./app";
import InfiniteMovingCardsDemo from "@/app/ui/home/Clients";

const LandingPage = () => {
  return (
    <main className="h-screen scrollbar-thin overflow-y-scroll overflow-x-hidden">
      <HeroSection />
      <Services />
      <InfiniteMovingCardsDemo />
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
