'use client'
import { motion } from "framer-motion";
import React, { useState } from "react";
import Magic from "../../../../public/assets/Home/Magic.jpeg";
import Image from "next/image";

// Define the TrustItem interface outside the component
interface TrustItem {
  id: number;
  title: string;
  Paragraph: string;
}

const WhyTrust: React.FC = () => {
  // Define the state for the currently open item ID
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  // Define the array of trust items
  const trust: TrustItem[] = [
    {
      id: 1,
      title: "Featured Expertise",
      Paragraph:
        "With years of experience in IT solutions, we are renowned for providing high-quality, innovative solutions designed to meet the specific needs of our clients.",
    },
    {
      id: 2,
      title: "Notable Employees",
      Paragraph:
        "Our team consists of certified professionals with expertise in the latest technology and industry standards, ensuring your IT infrastructure is in expert hands.",
    },
    {
      id: 3,
      title: "Customer Process",
      Paragraph:
        "We prioritize your business goals and challenges, delivering personalized solutions that align with your goals and deliver measurable results.",
    },
    {
      id: 4,
      title: "Commitment to Innovation",
      Paragraph:
        "To stay at the forefront of industry trends, we continue to invest in research and development and deliver innovative solutions that meet the evolving needs of our customers.",
    },
    {
      id: 5,
      title: "Safety and Compliance",
      Paragraph:
        "We follow strict security measures and regulatory standards to protect your data and ensure your IT infrastructure complies with regulatory requirements.",
    },
  ];

  // Handle item click to toggle the open item
  const handleItemClick = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <section className="mx-auto p-3 md:py-5 px-0 md:p-5 md:px-0">
      <section className="relative md:px-10 px-5 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1">
        <Image className="xl:max-w-6xl" src={Magic} alt="Decorative Background" />
        <div className="content bg-white p-2 pt-8 md:p-6 pb-12 lg:max-w-xl w-full lg:absolute top-10 right-5">
          <div>
            <motion.p initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 20 },
                  opacity: { duration: 0.4 },
                  ease: "easeInOut",
                }} className="font-extrabold text-MainHeading">
              Why trust us?
            </motion.p>
            <motion.p
             initial={{ opacity: 0, x: 100 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{
               delay: 0.2,
               x: { type: "spring", stiffness: 30 },
               opacity: { duration: 0.4 },
               ease: "easeInOut",
             }}
              className="text-SubHeading md:mt-5 mt-3 font-bold"
            >
              Achieve digital transformation for your retail business services
            </motion.p>
            <motion.p initial={{ opacity: 0, scale: 1.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut"
            }} className="text-paragraph mt-5 mb-5">
              Enhance your business through digital transformation and get the
              best from Vionsys IT Solutions India Pvt. Ltd. Join our vibrant
              team and explore the limitless possibilities. Here, you will
              participate in new projects, thrive in a collaborative
              environment, and experience a continuous learning program that
              supports your professional development. Find the ideal environment
              to unlock your full potential in the dynamic IT career.
            </motion.p>
            <motion.ul initial={{ opacity: 0, scale: 1.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut"
            }} className="max-w-2xl mx-auto divide-y shadow shadow-blue-600 rounded-xl">
              {trust.map((item) => (
                 <div key={item.id} className="py-2 px-4">
                 <details className="group">
                   <summary
                     className="flex cursor-pointer list-none items-center justify-between font-medium"
                     onClick={() => handleItemClick(item.id)}
                   >
                     <span>{item.title}</span>
                     <span className="transition-transform group-open:rotate-180">
                       <svg
                         fill="none"
                         height="24"
                         shapeRendering="geometricPrecision"
                         stroke="currentColor"
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth="1.5"
                         viewBox="0 0 24 24"
                         width="24"
                       >
                         <path d="M6 9l6 6 6-6"></path>
                       </svg>
                     </span>
                   </summary>
                   {openItemId === item.id && (
                     <p className="mt-3 text-neutral-600">{item.Paragraph}</p>
                   )}
                 </details>
               </div>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export default WhyTrust;
