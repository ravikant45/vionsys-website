"use client";
import React from "react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
const items = [
  {
    title: "CRM customization",
    description:
      "You won’t find a one-size-fits-all quality CRM. Our team tailors this platform to suit your business. We will also integrate it with your existing system. This will create a central location for all customer data.",
  },
  {
    title: "CRM Integration",
    description:
      "CRM systems can be integrated with other corporate systems such as email marketing, accounting software and e-commerce systems to provide smooth and efficient data flow.",
  },
  {
    title: "CRM Resources",
    description:
      "CRM systems are tailored to the specific needs of businesses and industries, including custom farms, processes and automation.",
  },
  {
    title: "Reporting and Analysis",
    description:
      "Drive actionable insights through customer data. We’ll help set up reports and dashboards to track key metrics, identify trends, and drive data-driven decisions.",
  },
  {
    title: "User Adoption & Training",
    description:
      "Change is hard. Extensive training will be provided to sales, marketing and customer service departments. We will train them in a way that every employee feels comfortable and confident working with this new CRM system.",
  },
  {
    title: "CRM security",
    description:
      "Ensure customer data security, and our staff will assist you with all best practices related to CRM security & compliance of your system in accordance with various data privacy laws.",
  },
  {
    title: "CRM Change Management",
    description:
      "As your business grows, your needs from a CRM will change. We’ll help you track changes to your CRM system, so you’re still behind.",
  },
  {
    title: "CRM Support",
    description:
      "We don’t get lost at the end of the process. We’ll be here to address your routine questions, troubleshoot problems that arise, and collaborate whenever you need to change your CRM.",
  },
];

function Empower() {
  return (
    <div className="flex-col gap-4 px-4 md:py-14 w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <motion.h1
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.4 },
          ease: "easeInOut",
        }}
        className="md:text-3xl text-xl py-3 font-extrabold relative bg-clip-text text-transparent bg-gradient-to-b from-MainHeading to-MainHeading text-center"
      >
        Empower Your Tech Company with CRM
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 20 },
          opacity: { duration: 0.4 },
          ease: "easeInOut",
        }}
        className="md:text-2xl  font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-SubHeading to-SubHeading md:px-52 text-center"
      >
        Our CRM solution is specifically designed to meet the unique needs of
        tech companies offering a comprehensive suite of tools to streamline
        operations and drive growth.
      </motion.p>{" "}
      <br />
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.2,
          scale: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }}
      >
        <BentoGrid className="max-w-6xl mx-auto relative bg-clip-text text-transparent bg-gradient-to-b from-black to-black text-center py-4">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
            />
          ))}
        </BentoGrid>
      </motion.div>
    </div>
  );
}

export default Empower;
