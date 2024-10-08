"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowsAltV,
  FaDollarSign,
  FaShieldAlt,
  FaUsers,
  FaRocket,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaArrowsAltV />,
    title: "Scalability",
    description:
      "Our cloud solutions easily adapt to your needs, allowing you to scale resources up or down as required. This flexibility ensures your infrastructure grows with your business, handling any workload changes effortlessly.",
  },
  {
    icon: <FaDollarSign />,
    title: "Cost Efficiency",
    description:
      "With a pay-as-you-go model, you only pay for what you use, eliminating the need for large upfront investments. Operational costs are reduced as there is no need for in-house hardware or IT maintenance.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security",
    description:
      "We offer robust security with features like encryption, multi-factor authentication, and continuous monitoring. Our cloud services ensure your data is safe, adhering to global security standards.",
  },
  {
    icon: <FaUsers />,
    title: "Collaboration",
    description:
      "Enable your teams to work together efficiently, regardless of location. Real-time access to data and shared resources promotes seamless collaboration and boosts productivity.",
  },
  {
    icon: <FaRocket />,
    title: "Speed",
    description:
      "Deploy applications quickly and experience enhanced performance. Cloud platforms ensure fast, efficient processing, helping you bring products to market faster.",
  },
];

export default function CloudChooseUs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container mx-auto md:px-4 py-10">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          y: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }}
        className="text-MainHeading font-extrabold text-center mb-10"
      >
        Why Choose Our Cloud Services?
      </motion.h2>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}  
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }}
        className="flex mb-4 border-b"
      >
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-1 py-2 px-4 text-center ${
              activeTab === index
                ? "border-b-2 border-primary bg-orange rounded-t-md font-medium text-white"
                : "text-muted-foreground font-medium"
            }`}
          >
            {step.title}
          </button>
        ))}
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-4 rounded-lg shadow-xl"
        >
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className="max-w-5xl flex flex-col "
          >
            <div className="flex items-center mb-4">
              <div className="text-primary mr-4">{steps[activeTab].icon}</div>
              <h3 className="text-xl font-semibold">
                {steps[activeTab].title}
              </h3>
            </div>
            <p className="text-muted-foreground">
              {steps[activeTab].description}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
