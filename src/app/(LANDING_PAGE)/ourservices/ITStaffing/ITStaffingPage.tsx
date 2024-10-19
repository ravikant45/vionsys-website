'use client';
import React, { useState } from "react";
import Hero from "../componets/ITStaffingUI/Hero";
import WhatWeServe from "../componets/ITStaffingUI/WhatWeServe";
import Cta from "../componets/ITStaffingUI/Cta";
import OurHighlights from "../componets/ITStaffingUI/OurHighlights";
import OurOfferings from "../componets/ITStaffingUI/OurOfferings";
import ContactUs from "../componets/WebDevelopmentUI/ContactUs";
import ChooseUs from "../componets/ITStaffingUI/ChooseUs";
import InfiniteMovingCardsDemo from "@/app/ui/home/Clients";
import Pop_Model from "../componets/ITStaffingUI/Pop_Model";
import StaticCTA from "@/components/ui/StaticCTA"; 

const ITStaffingPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="overflow-x-hidden">
      {/* Ensure Hero section has an ID for proper scroll detection */}
      <div id="hero">
        <Hero showModal={showModal} setShowModal={setShowModal} />
      </div>
      <OurHighlights />
      <OurOfferings showModal={showModal} setShowModal={setShowModal} />
      <WhatWeServe />
      <Cta showModal={showModal} setShowModal={setShowModal} />
      <ChooseUs />
      <InfiniteMovingCardsDemo />
      <ContactUs />
      <Pop_Model showModal={showModal} setShowModal={setShowModal} />
      <StaticCTA message="Get a Free Staffing Consultation!" cta="Contact us Today" setShowModal={setShowModal} />
    </div>
  );
};

export default ITStaffingPage;
