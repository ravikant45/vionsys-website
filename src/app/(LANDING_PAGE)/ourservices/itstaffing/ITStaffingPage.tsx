"use client";
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
  const [enquiryModal, setEnquiryModal] = useState<boolean>(false);

  return (
    <div className="overflow-x-hidden">
      {/* Ensure Hero section has an ID for proper scroll detection */}
      <div id="hero">
        <Hero enquiryModal={enquiryModal} setEnquiryModal={setEnquiryModal} />
      </div>
      <OurHighlights />
      <OurOfferings
        enquiryModal={enquiryModal}
        setEnquiryModal={setEnquiryModal}
      />
      <WhatWeServe />
      <Cta enquiryModal={enquiryModal} setEnquiryModal={setEnquiryModal} />
      <ChooseUs />
      <InfiniteMovingCardsDemo />
      <ContactUs title={"IT Staffing Landing Page"} />
      <Pop_Model
        title={"IT Staffing Landing Page"}
        enquiryModal={enquiryModal}
        setEnquiryModal={setEnquiryModal}
      />
      <StaticCTA
        message="Get a Free Staffing Consultation!"
        cta="Contact us Today"
        setEnquiryModal={setEnquiryModal}
      />
    </div>
  );
};

export default ITStaffingPage;
