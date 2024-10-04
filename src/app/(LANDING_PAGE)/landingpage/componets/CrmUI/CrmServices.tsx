/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import CRM1 from '../../../landingpage/images/Crm/Crm1.jpg';
import CRM2 from '../../../landingpage/images/Crm/Crm2.jpg';
import CRM3 from '../../../landingpage/images/Crm/Crm3.jpg';
import CRM4 from '../../../landingpage/images/Crm/Crm4.jpg';
import CRM5 from '../../../landingpage/images/Crm/Crm5.jpg';
import CRM6 from '../../../landingpage/images/Crm/Crm6.jpg';
import CRM7 from '../../../landingpage/images/Crm/Crm7.jpg';
import CRM8 from '../../../landingpage/images/Crm/Crm8.jpg';
import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  image: any;
}
const services: Service[] = [
  {
  image: CRM1,
    title: "CRM customization",
    description:
      "You won’t find a one-size-fits-all quality CRM. Our team tailors this platform to suit your business. We will also integrate it with your existing system. This will create a central location for all customer data.",
  },
  {
      image: CRM2,
    title: "CRM Integration",
    description:
      "CRM systems can be integrated with other corporate systems such as email marketing, accounting software and e-commerce systems to provide smooth and efficient data flow.",
  },
  {
      image: CRM3,
    title: "CRM Resources",
    description:
      "CRM systems are tailored to the specific needs of businesses and industries, including custom farms, processes and automation.",
  },
  {
      image: CRM4,
    title: "Reporting and Analysis",
    description:
      "Drive actionable insights through customer data. We’ll help set up reports and dashboards to track key metrics, identify trends, and drive data-driven decisions.",
  },
  {
      image: CRM5,
    title: "User Adoption & Training",
    description:
      "Change is hard. Extensive training will be provided to sales, marketing and customer service departments. We will train them in a way that every employee feels comfortable and confident working with this new CRM system.",
  },
  {
      image: CRM6,
    title: "CRM security",
    description:
      "Ensure customer data security, and our staff will assist you with all best practices related to CRM security & compliance of your system in accordance with various data privacy laws.",
  },
  {
      image: CRM7,
    title: "CRM Change Management",
    description:
      "As your business grows, your needs from a CRM will change. We’ll help you track changes to your CRM system, so you’re still behind.",
  },
  {
      image: CRM8,
    title: "CRM Support",
    description:
      "We don’t get lost at the end of the process. We’ll be here to address your routine questions, troubleshoot problems that arise, and collaborate whenever you need to change your CRM.",
  },
];

export default function Sample() {
  const [selectedService, setSelectedService] = useState<Service>(services[0]);
  const [isMobile, setIsMobile] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    if (isMobile && imageRef.current) {
      imageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen text-slate-700 p-8">
      <h1 className="text-MainHeading font-bold mb-4">
      Empower Your Tech Company with CRM
      </h1>
      <p className="mb-8">
      Our CRM solution is tailored for tech companies, providing tools to streamline operations and drive growth.
      </p>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-4 cursor-pointer border-b border-gray-700 flex justify-between items-center ${
                selectedService.title === service.title
                  ? "text-blue-700"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => handleServiceClick(service)}
            >
              <span>{service.title}</span>
              <FaAngleRight className="w-5 h-5" />
            </div>
          ))}
        </div>
        <div className="w-full md:w-2/3" ref={imageRef}>
          <Image
            src={selectedService.image}
            alt={selectedService.title}
            width={600}
            height={400}
            className="w-full h-80 object-cover mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{selectedService.title}</h2>
          <p>{selectedService.description}</p>
        </div>
      </div>
    </div>
  );
}
