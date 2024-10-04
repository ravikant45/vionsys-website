/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import cloud from "../../images/SoftwareDevelopment/cloud.jpg";
import crm from "../../images/SoftwareDevelopment/crm.jpg";
import ecom from "../../images/SoftwareDevelopment/ecom.jpg";
import mobileApp from "../../images/SoftwareDevelopment/mobileApp.jpg";
import salesforce from "../../images/SoftwareDevelopment/salesforce.jpg";
import PD from "../../images/SoftwareDevelopment/PD.jpg";
import SDevelopment from "../../images/SoftwareDevelopment/SDevelopment.jpg";
import support from "../../images/SoftwareDevelopment/support.jpg";
import webDesign from "../../images/SoftwareDevelopment/webDesign.jpg";
import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  imageSrc: any;
  supportedPlatforms: string[];
}

const services: Service[] = [
  {
    title: "Website Design",

    description:
      "Craft visually stunning, user-centric websites with an emphasis on responsive design, aesthetics, and smooth user experience across all platforms.",
    imageSrc: webDesign,
    supportedPlatforms: ["Adobe XD", "Figma", "Sketch", "InVision"],
  },
  {
    title: "Mobile App Development",

    description:
      "Develop high-performing mobile applications for iOS and Android platforms, offering intuitive design and powerful features to engage users.",
    imageSrc: mobileApp,
    supportedPlatforms: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    title: "Custom Software Development",

    description:
      "Build tailored software solutions that cater to your specific business needs, ensuring optimal performance, scalability, and innovation.",
    imageSrc: SDevelopment,
    supportedPlatforms: ["Node.js", "Django", "Ruby on Rails", ".NET"],
  },
  {
    title: "Ecommerce Solutions",

    description:
      "Provide comprehensive e-commerce solutions that drive online sales, improve customer experience, and increase revenue for your business.",
    imageSrc: ecom,
    supportedPlatforms: ["Magento", "Bigcommerce", "Shopify", "WooCommerce"],
  },
  {
    title: "Cloud Services",

    description:
      "Leverage cloud technologies to offer scalable, secure, and cost-effective cloud solutions for data storage, computing, and business applications.",
    imageSrc: cloud,
    supportedPlatforms: ["AWS", "Google Cloud", "Azure", "IBM Cloud"],
  },
  {
    title: "AI & ML Product Development",

    description:
      "Develop cutting-edge AI and machine learning products to optimize business operations, predict trends, and drive automation.",
    imageSrc: PD,
    supportedPlatforms: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
  },
  {
    title: "Customer Relationship Management(CRM)",

    description:
      "Implement CRM solutions to enhance your sales, marketing, and customer service operations while improving customer retention and relationships.",
    imageSrc: crm,
    supportedPlatforms: [
      "Salesforce",
      "Zoho CRM",
      "HubSpot",
      "Microsoft Dynamics",
    ],
  },
  {
    title: "Salesforce Services",

    description:
      "Customize and implement Salesforce solutions tailored to your business needs, optimizing your workflows, customer relations, and data management.",
    imageSrc: salesforce,
    supportedPlatforms: [
      "Salesforce Service Cloud",
      "Salesforce Marketing Cloud",
    ],
  },
  {
    title: "Maintenance & Support",

    description:
      "Provide ongoing maintenance and technical support for your software applications to ensure they run smoothly and efficiently.",
    imageSrc: support,
    supportedPlatforms: ["Jira", "Zendesk", "Freshdesk", "ServiceNow"],
  },
];

export default function Solutions() {
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
        Our Software Solutions for Modern Businesses
      </h1>
      <p className="mb-8">
        Unlock your business’s full potential with our cutting-edge software
        solutions. From custom application development to system integration, we
        provide reliable and scalable software that streamlines operations,
        enhances productivity, and drives innovation. Whether you're looking to
        automate workflows, improve customer experiences, or optimize your
        infrastructure, our expert team delivers tailored solutions that align
        with your goals and industry standards. Let us help you stay ahead in
        the ever-evolving digital landscape with secure and innovative software
        tailored to your needs.
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
            src={selectedService.imageSrc}
            alt={selectedService.title}
            width={600}
            height={400}
            className="w-full h-64 object-cover mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{selectedService.title}</h2>
          <p>{selectedService.description}</p>
          <div className="px-2">
            <h3 className="text-2xl text-blue2 font-semibold mb-2">
              Supported Platforms
            </h3>
            <ul className="space-y-2">
              {selectedService.supportedPlatforms.map((platform) => (
                <li
                  key={platform}
                  className="flex text-md items-center space-x-2"
                >
                  <svg
                    className="h-5 w-5 text-green-400"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>{platform}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
