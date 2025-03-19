import React from "react";
import { motion } from "framer-motion";

interface KeyBenefitsProps {
  setSectionRef: (ref: HTMLDivElement | null) => void;
}

const GetVirtualEmployee: React.FC<KeyBenefitsProps> = ({ setSectionRef }) => {
  const employeeBenefits = [
    {
      svgLink: "https://www.svgrepo.com/show/530452/mobile-app.svg",
      heading: "Mobile App Development",
    },
    {
      svgLink: "https://www.svgrepo.com/show/530456/host-record.svg",
      heading: "CMS/CRM/ERP Systems",
    },
    {
      svgLink: "https://www.svgrepo.com/show/530449/cloud-backup.svg",
      heading: "Cloud Native",
    },
    {
      svgLink: "https://www.svgrepo.com/show/530440/machine-vision.svg",
      heading: "Analytics and Reporting",
    },
    {
      svgLink: "https://www.svgrepo.com/show/530442/port-detection.svg",
      heading: "Software Migration",
    },
    {
      svgLink: "https://www.svgrepo.com/show/530438/ddos-protection.svg",
      heading: "Application Re-Engineering",
    },
    {
      svgLink: "https://www.svgrepo.com/show/530445/data-analysis.svg",
      heading: "Product Development",
    },
    {
      svgLink: "https://www.svgrepo.com/show/530450/page-analysis.svg",
      heading: "Business Process Automation",
    },
  ];

  return (
    <div className="px-2 py-10" ref={(ref) => setSectionRef(ref as HTMLDivElement | null)}>
      <div id="features" className="mx-auto max-w-6xl">
        <h2 className="text-center font-display text-2xl text-blue1 font-bold md:text-MainHeading">
          Get On-Demand Remote IT Developers for All Your Software Needs
        </h2>
        <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-4">
          {employeeBenefits.map((benefits, index) => (
            <motion.li
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              key={index}
              className="relative bg-white rounded-xl shadow-lg px-6 py-8 group overflow-hidden"
            >
              {/* Icon */}
              <div className="relative z-10 transition-all duration-500 group-hover:text-black">
                <img
                  src={benefits.svgLink}
                  alt=""
                  className="mx-auto h-10 w-10"
                />
              </div>

              {/* Heading */}
              <h3 className="my-3 font-display font-medium group-hover:text-primary-500 z-10 relative">
                {benefits.heading}
              </h3>

              {/* Green hover effect */}
              <div className="absolute inset-0 bg-orange transition-transform duration-500 transform translate-y-full group-hover:translate-y-0 z-0"></div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GetVirtualEmployee;
