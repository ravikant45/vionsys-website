"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LuCheckCircle, LuPencilRuler, LuCog, LuPhone } from "react-icons/lu";

const steps = [
  {
    icon: <LuCheckCircle className="w-6 h-6" />,
    title: "Assessment",
    description:
      "We start by understanding your business needs and existing IT infrastructure.",
  },
  {
    icon: <LuPencilRuler className="w-6 h-6" />,
    title: "Planning",
    description:
      "A custom roadmap is created to ensure a seamless transition to the cloud.",
  },
  {
    icon: <LuCog className="w-6 h-6" />,
    title: "Implementation",
    description:
      "Our team manages by ensuring minimal disruption and maximum security.",
  },
  {
    icon: <LuPhone className="w-6 h-6" />,
    title: "Ongoing Support",
    description:
      "Continuous monitoring and support to keep cloud environment optimized and secure.",
  },
];

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveStep((prevStep) => (prevStep + 1) % steps.length);
    }, 2000);
    return () => clearTimeout(timer);
  }, [activeStep]);

  return (
    <div className="container mx-auto px-4 py-6">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          y: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }}
        className="text-MainHeading font-extrabold text-center mb-12"
      >
        How We Work
      </motion.h2>
      <div className="relative">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: activeStep >= index ? 1 : 0.5, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`flex items-start mb-8 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <motion.div
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className={`w-1/2 ${
                index % 2 === 0 ? "pr-8 text-right" : "pl-8"
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black flex items-center justify-center text-white">
              {step.icon}
            </div>
            <div className={`w-1/2 ${index % 2 === 0 ? "pl-8" : "pr-8"}`}></div>
          </motion.div>
        ))}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
      </div>
    </div>
  );
}
