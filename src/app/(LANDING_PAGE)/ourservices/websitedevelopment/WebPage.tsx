"use client";
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

const WebPage = () => {
  const [enquiryModal, setEnquiryModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [hasModalBeenShown, setHasModalBeenShown] = useState(false);

  useEffect(() => {
    if (!hasModalBeenShown) {
      const timer = setTimeout(() => {
        setShowModal(!showModal);
        setHasModalBeenShown(true);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [hasModalBeenShown, setShowModal]);

  return (
    <main className="overflow-x-hidden">
      {/* h-screen scrollbar-thin overflow-y-scroll */}
      <HeroSection
        title={"Web Development Landing Page"}
        enquiryModal={enquiryModal}
        setEnquiryModal={setEnquiryModal}
      />
      <Services />
      <InfiniteMovingCardsDemo />
      <PricingSection
        enquiryModal={enquiryModal}
        setEnquiryModal={setEnquiryModal}
      />
      <WhychooseUs />
      <Banner enquiryModal={enquiryModal} setEnquiryModal={setEnquiryModal} />
      <ContactUs title={"Web Development Landing Page"} />
      <WebDevPopModal
        title={"Web Development Landing Page"}
        enquiryModal={enquiryModal}
        setEnquiryModal={setEnquiryModal}
      />
      <StaticCTA
        message="Get a Free Consultation"
        cta="Request a Callback"
        setEnquiryModal={setEnquiryModal}
      />
    </main>
  );
};

export default WebPage;
