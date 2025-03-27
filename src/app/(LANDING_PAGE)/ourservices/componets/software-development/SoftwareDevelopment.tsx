"use client";
import React, { useState } from "react";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import ROISection from "./ROISection";
import CapabilitiesSection from "./CapabilitiesSection";
import PopUp from "../../PopUp";
import InfiniteMovingCardsDemo from "@/app/ui/home/Clients";
import WhatWeServe from "../ITStaffingUI/WhatWeServe";
import CTOBanner from "./CTOBanner";
import SoftwareTechnologies from "./SoftwareTechnologies";
import SoftwareChooseUs from "./SoftwareChooseUs";
import ContactUs from "../WebDevelopmentUI/ContactUs";
import CTA from "../SoftwareDevelopmentUI/CTA";

function SoftwareDevelopment() {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className="bg-black">
      <HeroSection showModal={showModal} setShowModal={setShowModal} />
      <ServicesSection />
      <ROISection />
      <CapabilitiesSection />
      <CTOBanner showModal={showModal} setShowModal={setShowModal} />
      <SoftwareTechnologies />
      <CTA showModal={showModal} setShowModal={setShowModal} />
      <SoftwareChooseUs />
      <InfiniteMovingCardsDemo />
      <ContactUs title={"Software Development Landing Page"} />
      <PopUp
        title={"Software Development Landing Page"}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}

export default SoftwareDevelopment;
