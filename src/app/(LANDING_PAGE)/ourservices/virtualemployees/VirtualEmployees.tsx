"use client";
import React, { useEffect, useState } from "react";
import ContactUs from "../componets/WebDevelopmentUI/ContactUs";
import Hero from "../componets/VirtualEmployeesUI/Hero";
import SecondVirtualSection from "../componets/VirtualEmployeesUI/SecondVirtualSection";
import VEmployeeModel from "../componets/VirtualEmployeesUI/VEmployeeModel";
import GetVirtualEmployee from "../componets/VirtualEmployeesUI/GetVirtualEmployee";
import KeyBenefits from "../componets/VirtualEmployeesUI/KeyBenefits";
import VEmployeeInfra from "../componets/VirtualEmployeesUI/VEmployeeInfra";
import ComparativeAnalysis from "../componets/VirtualEmployeesUI/ComparativeAnalysis";
import PopUp from "../PopUp";



const VirtualEmployees = () => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div id='contactbg' className='overflow-hidden'>
      <Hero showModal={showModal} setShowModal={setShowModal}  />
      <VEmployeeModel />
      <SecondVirtualSection />
      <GetVirtualEmployee />
      <KeyBenefits />
      <VEmployeeInfra />
      <ComparativeAnalysis />
      <ContactUs />
      <PopUp setShowModal={setShowModal} showModal={showModal} />
    </div>
  );
};

export default VirtualEmployees;
