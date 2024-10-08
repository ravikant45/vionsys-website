"use client";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FiCloud, FiLayers, FiDatabase } from "react-icons/fi";
import {
  LuHeartHandshake,
  LuWrench,
  LuGraduationCap,
  LuLifeBuoy,
} from "react-icons/lu";
import { IoCog, IoCodeSlash } from "react-icons/io5";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const services = [
  {
    id: 1,
    title: "Salesforce Implementation",
    description:
      "Setting up Salesforce for businesses, customizing it to fit their needs, and integrating it.",
    icon: <FiCloud className="h-6 w-6" />,
  },
  {
    id: 2,
    title: "Salesforce Consulting",
    description:
      "Offering expert advice on how to optimize Salesforce for specific business objectives and workflows.",
    icon: <LuHeartHandshake className="h-6 w-6" />,
  },
  {
    id: 3,
    title: "Salesforce Managed Services",
    description:
      "Ongoing support and administration of Salesforce environments to ensure peak performance.",
    icon: <IoCog className="h-6 w-6" />,
  },
  {
    id: 4,
    title: "Salesforce Integration",
    description:
      "Seamlessly integrating Salesforce with other enterprise systems such as ERP, marketing automation, and third-party apps.",
    icon: <FiLayers className="h-6 w-6" />,
  },
  {
    id: 5,
    title: "Salesforce Development",
    description:
      "Custom development to extend Salesforce's functionality through custom applications, workflows, and automations.",
    icon: <IoCodeSlash className="h-6 w-6" />,
  },
  {
    id: 6,
    title: "Salesforce Customization",
    description:
      "Tailoring Salesforce's CRM features (fields, workflows, reports) to match specific business processes.",
    icon: <LuWrench className="h-6 w-6" />,
  },
  {
    id: 7,
    title: "Salesforce Training",
    description:
      "Providing customized training programs to ensure teams can fully utilize Salesforce.",
    icon: <LuGraduationCap className="h-6 w-6" />,
  },
  {
    id: 8,
    title: "Salesforce Data Migration",
    description:
      "Assisting with the migration of data from legacy systems to Salesforce while ensuring data integrity.",
    icon: <FiDatabase className="h-6 w-6" />,
  },
  {
    id: 9,
    title: "Salesforce Support & Maintenance",
    description:
      "Providing post-implementation support, bug fixes, and performance optimization.",
    icon: <LuLifeBuoy className="h-6 w-6" />,
  },
  // {
  //     id: 7,
  //     title: "Salesforce AppExchange Solutions",
  //     description: "Helping businesses find and implement third-party apps from the Salesforce AppExchange to extend functionality."
  // },
];

export default function Services() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % services.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="services"
      className="w-full pb-6 md:pb-10 lg:pb-12 pt-8 bg-gradient-to-b"
    >
      <div className="container px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          className="text-3xl font-bold tracking-tighter text-center mb-8 text-orange"
        >
          Our Salesforce Services
        </motion.h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              key={service.id}
              className={`shadow-lg p-6 group duration-300 bg-white hover:bg-blue-100 hover:shadow-lg hover:-translate-y-1 border border-slate-300 rounded-lg ${
                index === activeStep ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <p className="flex items-center font-semibold text-xl mb-4 space-x-2 text-blue-600">
                {service.icon}
                <span>{service.title}</span>
              </p>
              <div>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
