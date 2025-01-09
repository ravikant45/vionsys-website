"use client";
import React, { useState, useEffect } from "react";
import ContactUs from "../componets/WebDevelopmentUI/ContactUs";
import Hero from "../componets/VirtualEmployeesUI/Hero";
import SecondVirtualSection from "../componets/VirtualEmployeesUI/SecondVirtualSection";
import VEmployeeModel from "../componets/VirtualEmployeesUI/VEmployeeModel";
import GetVirtualEmployee from "../componets/VirtualEmployeesUI/GetVirtualEmployee";
import KeyBenefits from "../componets/VirtualEmployeesUI/KeyBenefits";
import VEmployeeInfra from "../componets/VirtualEmployeesUI/VEmployeeInfra";
import ComparativeAnalysis from "../componets/VirtualEmployeesUI/ComparativeAnalysis";
import RemoteCTA from "@/components/ui/remoteCTA";

const RemoteItDeveloper = () => {
  const [showModal, setShowModal] = useState(false);
  const [keyBenefitsRef, setKeyBenefitsRef] = useState<HTMLDivElement | null>(null);
  const [showCTA, setShowCTA] = useState(false);

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
      <SecondVirtualSection />
      <GetVirtualEmployee setSectionRef={setKeyBenefitsRef}  />
      <KeyBenefits />
      <VEmployeeInfra />
      <ComparativeAnalysis />
      <ContactUs />
      {showCTA && (
        <RemoteCTA
          message="Need expert help? Let's talk."
          cta="Talk to Experts"
        />
      )}
    </div>
  );
};

export default RemoteItDeveloper;
