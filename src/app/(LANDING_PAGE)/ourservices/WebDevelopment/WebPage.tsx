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
import WebDevPopModal from "../componets/WebDevelopmentUI/WebDevPopModal";
import Banner from "../componets/WebDevelopmentUI/Banner";
import StaticCTA from "@/components/ui/StaticCTA";

const WebPage = () => {
  
    const [showModal, setShowModal] = useState(false);


  return (
    <main className="overflow-x-hidden"> 
    {/* h-screen scrollbar-thin overflow-y-scroll */}
      <HeroSection showModal={showModal} setShowModal={setShowModal} />
      <Services />
      <InfiniteMovingCardsDemo />
      <PricingSection showModal={showModal} setShowModal={setShowModal} />
      <WhychooseUs />
      <Banner showModal={showModal} setShowModal={setShowModal} />
      <ContactUs />
      <WebDevPopModal showModal={showModal} setShowModal={setShowModal} />
      <StaticCTA message="Get a Free Consultation" cta="Request a Callback" setShowModal={setShowModal}/>
    </main>
  )
}

export default WebPage