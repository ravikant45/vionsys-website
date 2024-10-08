"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaHandsHelping } from "react-icons/fa";
import { FaLightbulb, FaHeadset, FaPuzzlePiece, FaTrophy } from "react-icons/fa6";

// Define type for the card info
interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  shortDescription: string;
}

// Array of card data (using the original data)
const services: ServiceCard[] = [
  {
    icon: <FaUniversity className="w-10 h-10 text-orange animate-bounce" />,
    title: "Industry Expertise",
    description: "With deep knowledge across various industries, we deliver insights and solutions tailored to your specific sector, ensuring impactful results.",
    shortDescription: "Tailored to your specific sector!"
  },
  {
    icon: <FaLightbulb className="w-10 h-10 text-orange animate-bounce" />,
    title: "Innovative Technology",
    description: "Leveraging cutting-edge technology, we continuously innovate to provide modern, efficient, and scalable solutions that keep you ahead in a rapidly evolving digital landscape.",
    shortDescription: "Stay ahead in a rapidly evolving digital landscape!"
  },
  {
    icon: <FaPuzzlePiece className="w-10 h-10 text-orange animate-bounce" />,
    title: "Tailored Solutions",
    description: "We provide customized solutions designed to meet your unique business needs, ensuring a perfect fit for your goals and objectives.",
    shortDescription: "Customized for your unique business needs!"
  },
  {
    icon: <FaHeadset className="w-10 h-10 text-orange animate-bounce" />,
    title: "Exceptional Support",
    description: "Our team is committed to providing fast, reliable, and personalized support, ensuring your needs are met every step of the way.",
    shortDescription: "Support every step of the way!"
  },
  {
    icon: <FaTrophy className="w-10 h-10 text-orange animate-bounce" />,
    title: "Proven Track Record",
    description: "With a history of successful projects and satisfied clients, we consistently deliver results that exceed expectations.",
    shortDescription: "History of successful projects!"
  },
  {
    icon: <FaHandsHelping className="w-10 h-10 text-orange animate-bounce" />,
    title: "Comprehensive Service Offering",
    description: "We provide a full range of services, covering every aspect of your needs, from strategy to execution, ensuring a seamless experience.",
    shortDescription: "Covering every aspect of your needs!"
  },
];

export default function ChooseUs() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut"
          }}
          className=" font-extrabold text-MainHeading sm:text-4xl">Why Choose Us</motion.h2>
          <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 20 },
            opacity: { duration: 0.4 },
            ease: "easeInOut",
          }}
          className="mt-4 text-SubHeading">Our services include</motion.p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <FlippableCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FlippableCard({ service }: { service: ServiceCard }) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <div
      className="relative h-64 bg-transparent rounded-lg overflow-hidden cursor-pointer"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className="relative w-full bg-white h-full transition-transform duration-1000"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        <div
          className="absolute w-full h-full backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex flex-col items-center justify-center h-full p-6">
            {service.icon}
            <h3 className="mt-4 text-lg font-medium text-blue2">{service.title}</h3>
            <p className="mt-2 text-sm text-paragraph">{service.shortDescription}</p>
          </div>
        </div>
        <div
          className="absolute w-full h-full backface-hidden bg-blue4"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="flex items-center justify-center h-full p-6">
            <p className="text-md text-center text-slate-50">{service.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
