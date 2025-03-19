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
      {pathName === "/ourservices/software-development" ? (
        <LandingNavbar showModal={showModal} setShowModal={setShowModal} />
      ) : (
        <Navbar showModal={showModal} setShowModal={setShowModal} />
      )}
      
      <PopUp showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default ClientNavbar;
