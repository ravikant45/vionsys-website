"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import PopUp from "../../PopUp";
import LandingNavbar from "./LandingNavbar";
import { usePathname } from "next/navigation";

const ClientNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  const pathName = usePathname();

  return (
    <>
      {pathName === "/ourservices/software-development" || pathName === "/ourservices/salesforce" ? (
        <LandingNavbar showModal={showModal} setShowModal={setShowModal} />
      ) : (
        <Navbar showModal={showModal} setShowModal={setShowModal} />
      )}
      
      <PopUp title={"Landing Page"} showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default ClientNavbar;
