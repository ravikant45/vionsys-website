"use client";

import { useState } from "react";
import { BiShield, BiChevronDown } from "react-icons/bi";
import { FaHospital, FaShoppingCart, FaGraduationCap, FaSatelliteDish } from "react-icons/fa";
import { FaIndustry, FaOilCan } from "react-icons/fa6";
import { MdOutlineConstruction } from "react-icons/md";
import { RiBankLine, RiStethoscopeLine, RiComputerLine } from "react-icons/ri";

const industries = [
  { id: "banking", icon: <RiBankLine className="text-blue-500 w-6 h-6" />, title: "Banking", content: "Our banking software solutions provide secure, scalable platforms for digital banking, mobile payments, and financial management systems." },
  { id: "insurance", icon: <BiShield className="text-blue-500 w-6 h-6" />, title: "Insurance", content: "We develop comprehensive insurance software solutions that streamline claims processing, policy management, and customer engagement." },
  { id: "it_digital_transformation", icon: <RiComputerLine className="text-blue-500 w-6 h-6" />, title: "IT Digital Transformation", content: "We help businesses modernize their IT infrastructure and processes through cloud adoption, automation, and emerging technologies." },
  { id: "finance_sector", icon: <RiBankLine className="text-blue-500 w-6 h-6" />, title: "Finance", content: "Our financial software solutions cater to investment firms, accounting services, and regulatory compliance systems." },
  { id: "pharma", icon: <RiStethoscopeLine className="text-blue-500 w-6 h-6" />, title: "Pharma", content: "Our pharma software solutions enhance drug development, regulatory compliance, and supply chain efficiency." },
  { id: "telecommunication", icon: <FaSatelliteDish className="text-blue-500 w-6 h-6" />, title: "Telecommunication", content: "We build telecom software solutions for network optimization, customer management, and billing automation." },
  { id: "ecommerce", icon: <FaShoppingCart className="text-blue-500 w-6 h-6" />, title: "E-commerce", content: "Our e-commerce software solutions enable businesses to create scalable online stores with seamless shopping experiences." },
  { id: "construction", icon: <MdOutlineConstruction className="text-blue-500 w-6 h-6" />, title: "Construction", content: "We offer construction management software for project tracking, resource planning, and site safety compliance." },
  { id: "healthcare", icon: <FaHospital className="text-blue-500 w-6 h-6" />, title: "Healthcare", content: "Our healthcare software solutions improve patient care, hospital management, and telemedicine services." },
  { id: "education", icon: <FaGraduationCap className="text-blue-500 w-6 h-6" />, title: "Education", content: "We develop e-learning platforms and student management systems to enhance digital education experiences." },
  { id: "manufacturing", icon: <FaIndustry className="text-blue-500 w-6 h-6" />, title: "Manufacturing", content: "Our manufacturing solutions enhance production efficiency, supply chain management, and real-time monitoring for optimized operations." },
  { id: "oil_gas", icon: <FaOilCan className="text-blue-500 w-6 h-6" />, title: "Oil & Gas", content: "We provide software solutions for oil & gas companies to optimize exploration, drilling operations, and asset management." },
];


export default function CapabilitiesSection() {
  const [openIndustry, setOpenIndustry] = useState<string | null>("banking");
  
  const toggleAccordion = (id: string) => {
    setOpenIndustry(openIndustry === id ? null : id);
  };

  return (
    <div className="bg-black p-6 md:px-16 md:py-6">
      {/* Scrollable container wrapping both sections */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side - Scrollable */}
        <div
          className="lg:w-1/2 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-8 leading-tight">
            Proven Capabilities to Build Diverse Industry-Based Software
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            As an industry leader in software application development services, our dedicated team works around the
            clock to build custom technology solutions tailored to your industry and business needs. We focus on
            delivering high-quality, scalable, and secure applications that drive efficiency and innovation. Our
            expertise spans various industries, ensuring that we can meet the unique challenges and requirements of
            your sector.
          </p>
        </div>

        {/* Right Side - Scrollable */}
        <div
          className="lg:w-1/2 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"
        >
          <div className="bg-zinc-900/50 rounded-lg">
            {industries.map((industry) => (
              <div key={industry.id} className="border-b border-zinc-800 last:border-b-0">
                <button
                  className="w-full flex items-center justify-between p-6 text-white hover:bg-zinc-800/50 transition-colors"
                  onClick={() => toggleAccordion(industry.id)}
                >
                  <div className="flex items-center gap-4">
                    {industry.icon}
                    <span className="text-base font-medium">{industry.title}</span>
                  </div>
                  <BiChevronDown
                    className={`h-6 w-6 transform transition-transform ${
                      openIndustry === industry.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndustry === industry.id && (
                  <div className="px-6 pb-6 text-gray-300 text-sm">{industry.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
