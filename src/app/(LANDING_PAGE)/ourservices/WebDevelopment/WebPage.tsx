'use client'
import React, { useEffect, useState } from "react";
import InfiniteMovingCardsDemo from "@/app/ui/home/Clients";
import HeroSection from "../componets/WebDevelopmentUI/HeroSection";
import Services from "../componets/WebDevelopmentUI/Services";
import PricingSection from "../componets/WebDevelopmentUI/PricingSection";
import WhychooseUs from "../componets/WebDevelopmentUI/WhychooseUs";
import ContactUs from "../componets/WebDevelopmentUI/ContactUs";
import WebDevPopModal from "../componets/WebDevelopmentUI/WebDevPopModal";
import Banner from "../componets/WebDevelopmentUI/Banner";
import StaticCTA from "@/components/ui/StaticCTA";
import PopUp from "../PopUp";

const WebPage = () => {

  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [hasModalBeenShown, setHasModalBeenShown] = useState(false);

  useEffect(() => {
    if (!hasModalBeenShown) {
      const timer = setTimeout(() => {
        setShowModal1(!showModal1);
        setHasModalBeenShown(true);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [hasModalBeenShown, setShowModal1]);


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
      <StaticCTA message="Get a Free Consultation" cta="Request a Callback" setShowModal={setShowModal} />
      <PopUp setShowModal1={setShowModal1} showModal1={showModal1} />
    </main>
  )
}

export default WebPage