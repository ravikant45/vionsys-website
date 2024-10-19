"use client";
import React, { useState } from "react";
import Hero from "../componets/CrmUI/Hero";
import ChooseUs from "../componets/CrmUI/ChooseUs";
import ContactUs from "../componets/WebDevelopmentUI/ContactUs";
import ClientsServices from "@/utils/ClientsServices";
import CrmServices from "../componets/CrmUI/CrmServices";
import CrmImage from "../componets/CrmUI/CrmImage";
import CrmCta from "../componets/CrmUI/CrmCta";
import PopUp from "../PopUp";

const CrmPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="overflow-hidden">
      <Hero showModal={showModal} setShowModal={setShowModal} />
      <CrmServices />
      <ChooseUs showModal={showModal} setShowModal={setShowModal} />
      <CrmImage />
      <ClientsServices />
      <CrmCta showModal={showModal} setShowModal={setShowModal} />
      <ContactUs />
      <PopUp showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default CrmPage;
