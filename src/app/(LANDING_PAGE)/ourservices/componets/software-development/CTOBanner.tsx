"use client";

import React from "react";
import banner from "../../images/SoftwareDevelopment/banner.jpg";

interface PopUpProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const CTOBanner: React.FC<PopUpProps> = ({ showModal, setShowModal }) => {
  return (
    <div className="md:h-[60vh] md:w-screen mx-5 md:mx-0 md:px-8 flex items-center justify-center">
      <div
        className="md:h-[80%] md:w-[95%] rounded-2xl bg-cover flex md:space-y-4 space-y-4 py-3 justify-center items-start flex-col bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url(${banner.src})`,
        }}
      >
        <h3 className="md:text-4xl text-white font-bold px-6">
          Collaborate on Your Vision!
        </h3>
        
        <p className="text-base max-w-4xl text-slate-100 px-6">
        Our innovative solutions and industry expertise will help you streamline your operations, enhance customer experiences and drive sustainable growth.
        </p>

        <div className="px-6">
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-1 md:px-8 animate-pulse rounded-full font-medium transition-colors"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTOBanner;
