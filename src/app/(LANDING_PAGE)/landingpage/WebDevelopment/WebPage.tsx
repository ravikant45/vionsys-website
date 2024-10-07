'use client'
import React, { useState } from "react";
import WorkWithUs from "@/app/ui/home/WorkWithUs";
import InfiniteMovingCardsDemo from "@/app/ui/home/Clients";
import HeroSection from "../componets/WebDevelopmentUI/HeroSection";
import Services from "../componets/WebDevelopmentUI/Services";
import PricingSection from "../componets/WebDevelopmentUI/PricingSection";
import WhychooseUs from "../componets/WebDevelopmentUI/WhychooseUs";
import ContactUs from "../componets/WebDevelopmentUI/ContactUs";
// import SocialLinks from "../componets/WebDevelopmentUI/SocialLinks";
import PopUp from "../PopUp";

const WebPage = () => {
  
    const [showModal, setShowModal] = useState(false);

  return (
    <main className="overflow-x-hidden"> 
    {/* h-screen scrollbar-thin overflow-y-scroll */}
      <HeroSection />
      <Services />
      <InfiniteMovingCardsDemo />
      <PricingSection />
      <WhychooseUs />
      <WorkWithUs/>
      <ContactUs />
      <PopUp showModal={showModal} setShowModal={setShowModal} />
    </main>
  )
}

export default WebPage