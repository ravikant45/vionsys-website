"use client";

import React, { useEffect, useState } from "react";

interface StaticCTAProps {
  message: string;
  cta: string;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const RemoteCTA: React.FC<StaticCTAProps> = ({
  message,
  cta,
  showModal,
  setShowModal,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const heroBottom = heroSection?.getBoundingClientRect().bottom || 0;

      if (window.scrollY > heroBottom) {
        setIsVisible(true);
        setShouldAnimate(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isVisible ? (
    <div
      className={`fixed bottom-0 text-white md:left-[25%] md:w-[50%] left-0 w-full rounded-tl-3xl rounded-tr-3xl bg-blue3 shadow-lg z-50 px-8 py-3 flex justify-center gap-8 items-center ${
        shouldAnimate ? "animate-fadeIn" : ""
      }`}
    >
      <div className="md:text-lg text-md font-semibold">{message}</div>
      <button
        onClick={() => setShowModal(!showModal)}
        className="bg-orange hover:bg-amber-500 text-sm font-bold text-white px-4 py-1 rounded-md"
      >
        {cta}
      </button>
    </div>
  ) : null;
};

export default RemoteCTA;
