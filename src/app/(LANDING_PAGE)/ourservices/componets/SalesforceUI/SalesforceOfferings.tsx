"use client";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { motion } from "framer-motion";
import { BsFillArrowRightCircleFill } from "react-icons/bs";


export default function Component() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const offerings = [
    {
      id: 1,
      title: "Sales Cloud",
      description:
        "A CRM platform for sales teams to manage leads, accounts, opportunities, and customer interactions. It helps drive productivity and close deals faster.",
    },
    {
      id: 2,
      title: "Service Cloud",
      description:
        "A CRM platform for customer support and service teams to manage customer inquiries, cases, and support tickets across multiple channels.",
    },
    {
      id: 3,
      title: "Marketing Cloud",
      description:
        "A digital marketing platform enabling businesses to manage campaigns, automate marketing efforts, and track engagement across email, SMS, social media, and more.",
    },
    {
      id: 4,
      title: "Commerce Cloud",
      description:
        "A platform for managing e-commerce operations, offering personalized online shopping experiences across web, mobile, social, and in-store.",
    },
    {
      id: 5,
      title: "Community Cloud",
      description:
        "Allows businesses to create online communities for customers, partners, and employees to interact and share information.",
    },
    {
      id: 6,
      title: "Analytics Cloud (Tableau CRM)",
      description:
        "Provides advanced analytics and AI-driven insights to help businesses make data-driven decisions, with dashboards and customizable reports.",
    },
    {
      id: 7,
      title: "Financial Services Cloud",
      description:
        "A version of Salesforce tailored for financial institutions, providing tools for wealth management, retail banking, and insurance.",
    },
    {
      id: 8,
      title: "Health Cloud",
      description:
        "A solution built for healthcare providers to manage patient relationships and care coordination.",
    },
    {
      id: 9,
      title: "Nonprofit Cloud",
      description:
        "A solution built for nonprofit organizations to manage donors, volunteers, and fundraising efforts.",
    },
    {
      id: 10,
      title: "Education Cloud",
      description:
        "Helps educational institutions manage relationships with students, alumni, and staff, focusing on recruitment, engagement, and success.",
    },
    {
      id: 11,
      title: "Manufacturing Cloud",
      description:
        "Tailored for manufacturers, it helps in managing operations, sales, and service processes specific to the manufacturing industry.",
    },
    {
      id: 12,
      title: "IoT Cloud",
      description:
        "Designed to manage and process IoT (Internet of Things) data to enable businesses to connect devices and act on real-time insights.",
    },
    {
      id: 13,
      title: "Einstein AI",
      description:
        "Salesforce's AI platform integrated across various clouds to provide predictive insights, automation, and natural language processing.",
    },
    {
      id: 14,
      title: "Quip (Collaboration Cloud)",
      description:
        "A collaborative platform for team communication, document sharing, and project management.",
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-dot-slate-300 md:p-8 p-2 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className="font-extrabold text-MainHeading mb-1"
          >
            Salesforce Cloud Offerings
          </motion.h1>
          <div className="bg-gradient-to-r bg-clip-text text-transparent from-red-500 to-blue-700">
            <h1 className="text-2xl font-semibold  text-center py-2">
              Empowering businesses with tailored cloud solutions for sales,
              service, marketing, and beyond.
            </h1>
          </div>
        </div>
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          className="text-2xl font-semibold text-[#215CBC] mb-6"
        >
          Explore Our Services:
        </motion.h2>
        <div className="space-y-4">
          {offerings.map((item) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              key={item.id}
              className="border border-indigo-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-1 flex items-center justify-between bg-blue-200 hover:bg-blue-100 bg-opacity-50 transition-colors duration-300"
                onClick={() => toggleExpand(item.id)}
              >
                <span className="text-base font-medium text-black">
                  {item.title}
                </span>
                <IoChevronDown
                  className={`h-5 w-5 text-[#215CBC] transition-transform duration-300 ${
                    expandedIndex === item.id ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {expandedIndex === item.id && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-black mb-4">{item.description}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
