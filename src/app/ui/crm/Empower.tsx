import React from "react";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const items = [
  {
    title: "CRM Deployment",
    description:
      "Assisting clients in setting up and customizing CRM software to suit their specific business needs and workflows.",
  },
  {
    title: "CRM Integration",
    description:
      "Integrating CRM systems with other business applications such as email marketing platforms, accounting software, and e-commerce platforms to streamline data flow and improve efficiency.",
  },
  {
    title: "CRM Customization",
    description:
      "Tailoring CRM solutions to meet the unique requirements of different industries and businesses, including custom fields, workflows, and automation.",
  },
  {
    title: "CRM Strategy Consulting",
    description:
      "Advising clients on CRM best practices, strategic planning, and process optimization to enhance customer engagement, retention, and satisfaction.",
  },
  {
    title: "CRM Migration and Upgrades",
    description:
      "Assisting with migrating data from legacy systems to modern CRM platforms, as well as upgrading existing CRM software to newer versions for improved functionality and performance.",
  },
  {
    title: "Data Management",
    description:
      "Helping organizations effectively manage and analyze customer data to gain insights, identify trends, and make data-driven decisions.",
  },
  {
    title: "CRM Analytics and Reporting",
    description:
      "Implementing advanced analytics tools and reporting dashboards within CRM systems to track key performance metrics, measure ROI, and drive continuous improvement.",
  },
  {
    title: "CRM Security and Compliance",
    description:
      "Ensuring the security and compliance of CRM systems with industry standards and regulations, including data protection laws like GDPR and HIPAA.",
  },
];

function Empower() {
  return (
    <div className="flex-col gap-4 px-4 md:py-14 w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <h1
        data-aos="fade-left"
        className="text-3xl font-extrabold relative bg-clip-text text-transparent bg-gradient-to-b from-MainHeading to-MainHeading text-center"
      >
        Empower Your Tech Company with CRM
      </h1>
      <p
        data-aos="fade-right"
        className="md:text-2xl  font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-SubHeading to-SubHeading md:px-52 text-center"
      >
        Our CRM solution is specifically designed to meet the unique needs of
        tech companies, offering a comprehensive suite of tools to streamline
        operations and drive growth.
      </p>{" "}
      <br />
      <div data-aos="zoom-out">
        <BentoGrid className="max-w-6xl mx-auto relative bg-clip-text text-transparent bg-gradient-to-b from-black to-black text-center">
          {items.map((item, i) => (
            <BentoGridItem
              data-aos="zoom-in"
              key={i}
              title={item.title}
              description={item.description}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}

export default Empower;
