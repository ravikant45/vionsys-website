"use client";
import React from "react";
import HeroSection from "./componets/HeroSection";
import Services from "./componets/Services";
import PricingSection from "./componets/PricingSection";
import OurClients from "@/app/ui/home/OurClients";
import WhychooseUs from "./componets/WhychooseUs";
import ContactUs from "./componets/ContactUs";
import SocialLinks from "./componets/SocialLinks";

const LandingPage = () => {
  return (
    <main>
      <HeroSection />
      <Services />
      <OurClients />
      <PricingSection />
      <WhychooseUs />
      <ContactUs />
      <SocialLinks />
    </main>
  );
};

export default LandingPage;
