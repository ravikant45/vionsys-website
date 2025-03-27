"use client";
import React, { useState } from "react";
import Hero from "../componets/DigitalMarketingUI/Hero";
import OurServices from "../componets/DigitalMarketingUI/OurServices";
import CTA from "../componets/DigitalMarketingUI/CTA";
import InfiniteMovingCardsDemo from "@/app/ui/home/Clients";
import ContactUs from "../componets/WebDevelopmentUI/ContactUs";
import HowWeWork from "../componets/DigitalMarketingUI/HowWeWork";
import ChooseUs from "../componets/DigitalMarketingUI/ChooseUs";
import PopUp from "../PopUp";

const DigitalMarketing = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div id="gradient">
      <Hero showModal={showModal} setShowModal={setShowModal} />
      <OurServices />
      <ChooseUs />
      <HowWeWork />
      <InfiniteMovingCardsDemo />
      <CTA showModal={showModal} setShowModal={setShowModal} />
      <ContactUs title={"Digital Marketing Landing Page"} />
      <PopUp
        title={"Digital Marketing Landing Page"}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default DigitalMarketing;
