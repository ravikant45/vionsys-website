"use client";
import React, { useState } from "react";
import ContactUs from "../componets/WebDevelopmentUI/ContactUs";
import Hero from "../componets/VirtualEmployeesUI/Hero";
import SecondVirtualSection from "../componets/VirtualEmployeesUI/SecondVirtualSection";
import VEmployeeModel from "../componets/VirtualEmployeesUI/VEmployeeModel";
import GetVirtualEmployee from "../componets/VirtualEmployeesUI/GetVirtualEmployee";
import KeyBenefits from "../componets/VirtualEmployeesUI/KeyBenefits";
import VEmployeeInfra from "../componets/VirtualEmployeesUI/VEmployeeInfra";
import ComparativeAnalysis from "../componets/VirtualEmployeesUI/ComparativeAnalysis";
/* import PopUp from "../PopUp"; */
import ViPopUp from "../componets/VirtualEmployeesUI/viPopUp";

const VirtualEmployees = () => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div id="contactbg" className="overflow-hidden">
      <Hero showModal={showModal} setShowModal={setShowModal} />
      <VEmployeeModel />
      <SecondVirtualSection />
      <GetVirtualEmployee />
      <KeyBenefits />
      <VEmployeeInfra />
      <ComparativeAnalysis />
      <ContactUs />
      <ViPopUp setShowModal={setShowModal} showModal={showModal}/>
      {/* <PopUp setShowModal={setShowModal} showModal={showModal} /> */}
    </div>
  );
};

export default VirtualEmployees;
