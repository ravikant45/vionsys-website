'use client'
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

const ITStaffingPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="overflow-x-hidden">
      <Hero showModal={showModal} setShowModal={setShowModal} />
      <OurHighlights />
      <OurOfferings showModal={showModal} setShowModal={setShowModal} />
      <WhatWeServe />
      <Cta showModal={showModal} setShowModal={setShowModal} />
      <ChooseUs />
      <InfiniteMovingCardsDemo />
      <ContactUs />
      <Pop_Model showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default ITStaffingPage;
