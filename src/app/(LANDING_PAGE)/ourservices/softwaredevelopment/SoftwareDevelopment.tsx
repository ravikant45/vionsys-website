"use client";
import React, { useState } from "react";
import Hero from "../componets/SoftwareDevelopmentUI/Hero";
import WhatWeServe from "../componets/ITStaffingUI/WhatWeServe";
import CTA from "../componets/SoftwareDevelopmentUI/CTA";
import Banner from "../componets/SoftwareDevelopmentUI/Banner";
import ChooseUs from "../componets/SoftwareDevelopmentUI/ChooseUs";
import ContactUs from "../componets/WebDevelopmentUI/ContactUs";
import InfiniteMovingCardsDemo from "@/app/ui/home/Clients";
import Technologies from "../componets/SoftwareDevelopmentUI/Technologies";
import Solutions from "../componets/SoftwareDevelopmentUI/Soultions";
import PopUp from "../PopUp";

const SoftwareDevelopment = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div id="gradient" className="overflow-x-hidden">
      <Hero showModal={showModal} setShowModal={setShowModal} />
      {/* <ServiceSolutions /> */}
      <Solutions />
      <InfiniteMovingCardsDemo />
      <WhatWeServe />
      <Banner showModal={showModal} setShowModal={setShowModal} />
      <Technologies />
      <ChooseUs />
      <CTA showModal={showModal} setShowModal={setShowModal} />
      <ContactUs  />
      <PopUp showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default SoftwareDevelopment;
