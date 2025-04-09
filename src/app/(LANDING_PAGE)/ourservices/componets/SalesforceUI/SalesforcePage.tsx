/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import Hero from "./Hero";
import Services from "./Services";
import ContactUs from "../WebDevelopmentUI/ContactUs";
import ClientsServices from "@/utils/ClientsServices";
import SalesforceChooseUs from "./SalesforceChooseUs";
import PopUp from "../../PopUp";
import SalesforceDeveloperHiring from "./SalesforceDeveloperHiring";
import SalesforceTools from "./SalesforceTools";
import CtaSalesforce from "./CtaSalesforce";
import CTOBanner from "../software-development/CTOBanner";

const SalesforcePage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="overflow-hidden bg-black">
      <Hero showModal={showModal} setShowModal={setShowModal} />
      <ClientsServices />
      <Services />
      <CtaSalesforce
        title={"Transform Your CRM With Custom Salesforce Solutions"}
        description={
          "Our skilled developers craft and implement tailored systems designed around your unique business goals."
        }
        url={"/assets/LandingPage/SoftwareDevelopment/ROI.jpg"}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <SalesforceTools />
      <CTOBanner
      showModal={showModal}
      setShowModal={setShowModal}
      />
      {/* <SalesforceOfferings /> */}
      <SalesforceChooseUs />
      {/* <SalesforceCta showModal={showModal} setShowModal={setShowModal} /> */}
      <CtaSalesforce
        title={"Hire Our Salesforce Expert within 72 Hours."}
        description={
          "Need urgent support? Hire a top Salesforce developer and get started in just 72 hours."
        }
        url={"/assets/LandingPage/Salesforce/cta1.jpg"}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <SalesforceDeveloperHiring />
      <ContactUs title={"Salesforce Landing Page"} />
      <PopUp
        title={"Salesforce Landing Page"}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default SalesforcePage;
