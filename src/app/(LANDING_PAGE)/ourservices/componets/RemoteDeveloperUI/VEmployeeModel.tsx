import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { IoMdArrowDropdownCircle } from "react-icons/io";

const VEmployeeModel = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollSectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      heading: "Why Choose a Virtual Remote Model?",
      description: "Boost productivity with Dedicated Employee Model",
    },
    {
      heading: "Flexible Pricing",
      description: "Top-Notch Services with up to 50% lower cost",
    },
    {
      heading: "Access to Top-Tier Talent",
      description:
        "Top 1% of developers while maintaining a low attrition rate",
    },
    {
      heading: "Scalable Resources",
      description:
        "Easily scale resources up or down based on your business needs",
    },
    {
      heading: "Robust IP Protection",
      description:
        "Unwavering commitment to data security with Zero IP breaches",
    },
    {
      heading: "Technological Excellence",
      description:
        "Leverage Agile Methodology for industry-leading technology practices",
    },
    {
      heading: "Strong Governance",
      description:
        "Complimentary supervisor, quality auditor, and service delivery manager for seamless project management",
    },
    {
      heading: "Effortless Communication",
      description:
        "Engage with experts across 20+ time zones, supported by top collaboration tools.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = scrollSectionRef.current;
      if (element) {
        const totalScrollHeight = element.scrollHeight - element.clientHeight;
        const currentScroll = element.scrollTop;

        const scrollPercentage = (currentScroll / totalScrollHeight) * 100;
        setScrollProgress(scrollPercentage);
      }
    };

    const element = scrollSectionRef.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (element) {
        element.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="max-w-screen-xl h-full mx-auto py-10 px-4 lg:px-10 bg-dot-black/[0.2]">
      <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[350px] gap-6">
        {/* Left text section */}
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          className="left-section w-full lg:w-[45%] p-4 rounded-md"
        >
          <h3 className="text-lg lg:text-MainHeading font-bold mb-4 text-blue1">
            Virtual Remote Model Features
          </h3>
          <p className="text-sm lg:text-base text-gray-700">
            We're not just a staffing and outsourcing 'vendor.' We’re a true
            'partner' invested in your success.
          </p>
        </motion.div>

        {/* Scrollable right section with progress bar */}
        <div className="relative w-full lg:w-[90%] flex flex-col">
          {/* Progress bar */}
          {/* Scrollable content */}
          <div
            className="scroll-section w-full h-full max-h-[350px] overflow-y-auto p-2 pr-4 overflow-x-hidden"
            ref={scrollSectionRef}
          >
            {features.map((feature, index) => (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.4 },
                  ease: "easeInOut",
                }}
                key={index}
                className="w-full mb-4 px-2"
              >
                <div className="h-full p-4 lg:p-5 border border-blue1 border-t-0 border-r-0 rounded-bl-xl">
                  <h3 className="text-base lg:text-2xl text-gray-700 font-bold mb-2">
                    {feature.heading}
                  </h3>
                  <p className="text-sm lg:text-base text-orange">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VEmployeeModel;
