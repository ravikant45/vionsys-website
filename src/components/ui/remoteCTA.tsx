"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link"; // Import Link from next/link for navigation

interface StaticCTAProps {
  message: string;
  cta: string;
}

const RemoteCTA: React.FC<StaticCTAProps> = ({ message, cta }) => {
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
      className={`fixed bottom-0 text-white md:left-[25%] md:w-[50%] left-0 w-full rounded-tl-3xl rounded-tr-3xl bg-blue3 shadow-lg z-50 px-8 py-3 flex justify-center gap-8 items-center ${shouldAnimate ? "animate-fadeIn" : ""}`}
    >
      <div className="md:text-lg text-md font-semibold">{message}</div>
      <Link href="https://calendly.com/vionsysit/30min?back=1&month=2025-01">
        <button
          className="bg-orange hover:bg-amber-500 text-sm font-bold text-white px-4 py-1 rounded-md"
        >
          {cta}
        </button>
      </Link>
    </div>
  ) : null;
};

export default RemoteCTA;
