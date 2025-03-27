"use client";
import React, { useState, useEffect } from "react";
import ContactUs from "../WebDevelopmentUI/ContactUs";
import Hero from "./Hero";
import SecondVirtualSection from "./SecondVirtualSection";
import VEmployeeModel from "./VEmployeeModel";
import GetVirtualEmployee from "./GetVirtualEmployee";
import KeyBenefits from "./KeyBenefits";
import VEmployeeInfra from "./VEmployeeInfra";
import ComparativeAnalysis from "./ComparativeAnalysis";
import RemoteCTA from "@/components/ui/remoteCTA";
import PopUp from "../../PopUp";

const RemoteItDeveloper = () => {
  const [keyBenefitsRef, setKeyBenefitsRef] = useState<HTMLDivElement | null>(
    null
  );
  const [showCTA, setShowCTA] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Scroll Tracking for KeyBenefits
  useEffect(() => {
    const handleScroll = () => {
      if (keyBenefitsRef) {
        const { top, bottom } = keyBenefitsRef.getBoundingClientRect();
        setShowCTA(top < 0 && bottom > 0); // Show CTA when the KeyBenefits section is in view
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [keyBenefitsRef]);

  return (
    <div className="overflow-hidden">
      <Hero showModal={showModal} setShowModal={setShowModal} />
      <VEmployeeModel />
      <SecondVirtualSection showModal={showModal} setShowModal={setShowModal} />
      <PopUp
        title={"Remote It Developer Landing Page"}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <GetVirtualEmployee setSectionRef={setKeyBenefitsRef} />
      <KeyBenefits />
      <VEmployeeInfra />
      <ComparativeAnalysis showModal={showModal} setShowModal={setShowModal} />
      <ContactUs title={"Remote IT Developer Landing Page"} />
      {showCTA && (
        <RemoteCTA
          message="Need expert help? Let's talk."
          cta="Talk to Experts"
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};

export default RemoteItDeveloper;
