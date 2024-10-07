"use client";

import Image from "next/image";
import { useState, useRef } from "react";
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

// Service details array
const services = [
  {
    name: "Website Design",
    icon: "🎨",
    content:
      "Craft visually stunning, user-centric websites with an emphasis on responsive design, aesthetics, and smooth user experience across all platforms.",
    imagePath: webDesign,
    supportedPlatforms: ["Adobe XD", "Figma", "Sketch", "InVision"],
  },
  {
    name: "Mobile App Development",
    icon: "📱",
    content:
      "Develop high-performing mobile applications for iOS and Android platforms, offering intuitive design and powerful features to engage users.",
    imagePath: mobileApp,
    supportedPlatforms: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    name: "Custom Software",
    description: "DEVELOPMENT",
    icon: "💻",
    content:
      "Build tailored software solutions that cater to your specific business needs, ensuring optimal performance, scalability, and innovation.",
    imagePath: SDevelopment,
    supportedPlatforms: ["Node.js", "Django", "Ruby on Rails", ".NET"],
  },
  {
    name: "Ecommerce Solutions",
    icon: "🛒",
    content:
      "Provide comprehensive e-commerce solutions that drive online sales, improve customer experience, and increase revenue for your business.",
    imagePath: ecom,
    supportedPlatforms: ["Magento", "Bigcommerce", "Shopify", "WooCommerce"],
  },
  {
    name: "Cloud Services",
    icon: "☁️",
    content:
      "Leverage cloud technologies to offer scalable, secure, and cost-effective cloud solutions for data storage, computing, and business applications.",
    imagePath: cloud,
    supportedPlatforms: ["AWS", "Google Cloud", "Azure", "IBM Cloud"],
  },
  {
    name: "AI & ML Product Development",
    icon: "🧠",
    content:
      "Develop cutting-edge AI and machine learning products to optimize business operations, predict trends, and drive automation.",
    imagePath: PD,
    supportedPlatforms: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
  },
  {
    name: "Customer Relationship Management(CRM)",
    icon: "📊",
    content:
      "Implement CRM solutions to enhance your sales, marketing, and customer service operations while improving customer retention and relationships.",
    imagePath: crm,
    supportedPlatforms: [
      "Salesforce",
      "Zoho CRM",
      "HubSpot",
      "Microsoft Dynamics",
    ],
  },
  {
    name: "Salesforce Services",
    icon: "☁️",
    content:
      "Customize and implement Salesforce solutions tailored to your business needs, optimizing your workflows, customer relations, and data management.",
    imagePath: salesforce,
    supportedPlatforms: [
      "Salesforce Service Cloud",
      "Salesforce Marketing Cloud",
    ],
  },
  {
    name: "Maintenance & Support",
    icon: "🔧",
    content:
      "Provide ongoing maintenance and technical support for your software applications to ensure they run smoothly and efficiently.",
    imagePath: support,
    supportedPlatforms: ["Jira", "Zendesk", "Freshdesk", "ServiceNow"],
  },
];

export default function ServiceSolutions() {
  const [selectedService, setSelectedService] = useState(services[0]); // Default to Website Design
  const contentRef = useRef<HTMLDivElement>(null);

  // Function to handle service click and scroll to content
  const handleServiceClick = (service:any) => {
    setSelectedService(service);
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center" >
      <motion.h1
        initial={{ opacity: 0, scale: 1.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.2,
          scale: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }}
        className=" text-MainHeading font-extrabold pb-12"
      >
        Our Services
      </motion.h1>
      <div className="flex flex-col-reverse md:flex-row items-start gap-8" >
        {/* Service Details */}
        <div className="w-full md:w-[40%] md:py-8 py-4 space-y-6" ref={contentRef}> {/* Add ref here */}
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 20 },
              opacity: { duration: 0.4 },
              ease: "easeInOut",
            }}
            className="md:text-6xl text-2xl px-2  text-orange font-bold"
          >
            {selectedService.name}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.4 },
              ease: "easeInOut",
            }}
            className="text-gray-600 px-2"
          >
            {selectedService.content}
          </motion.p>

          {/* Render supported platforms based on the selected service */}
          <div className="px-2">
            <motion.h3
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 20 },
                opacity: { duration: 0.4 },
                ease: "easeInOut",
              }}
              className="text-2xl text-blue2 font-semibold mb-2"
            >
              Supported Platforms
            </motion.h3>
            <ul className="space-y-2">
              {selectedService.supportedPlatforms.map((platform) => (
                <motion.li
                  key={platform}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 20 },
                    opacity: { duration: 0.4 },
                    ease: "easeInOut",
                  }}
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
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Service Images */}
        <div className="w-full px-2 md:pt-4 md:w-[60%] grid md:grid-cols-3 grid-cols-2  place-items-center gap-4">
          {services.map((service) => (
            <div
              key={service.name}
              className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 ${
                selectedService.name === service.name
                  ? "ring-2 ring-blue-500"
                  : ""
              }`}
              onClick={() => handleServiceClick(service)}
            >
              <Image
                src={service.imagePath}
                alt={service.name}
                width={300}
                height={200}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-4">
                <span className="text-white text-3xl mb-2">{service.icon}</span>
                <h3 className="text-white text-sm flex items-center justify-center text-center font-bold">
                  {service.name}
                </h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
