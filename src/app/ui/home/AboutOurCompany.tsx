// AboutOurCompany.tsx
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { motion } from "framer-motion";
import CRM from "/public/assets/Home/CRM.png";
import Service from "/public/assets/Home/Service.jpg";
import AI from "/public/assets/Home/AI.jpg";
import Salesforce from "/public/assets/Home/SalesforceImg.jpg";

const SkeletonOne = () => <div>Loading...</div>;
const SkeletonTwo = () => <div>Loading...</div>;
const SkeletonThree = () => <div>Loading...</div>;
const SkeletonFour = () => <div>Loading...</div>;

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: CRM,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: Service,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: AI,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: Salesforce,
  },
];

const AboutOurCompany = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 bg-white justify-items-center items-center overflow-x-hidden">
      <div className="h-[80vh] md:w-[50vw] w-[100vw] col-span-1">
        <LayoutGrid cards={cards} />
      </div>
      <div className="col-span-1 px-5">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 20 },
            opacity: { duration: 0.4 },
            ease: "easeInOut",
          }}
          className="font-extrabold text-MainHeading"
        >
          About Our Company
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.4 },
            ease: "easeInOut",
          }}
          className="text-lg mt-5 text-SubHeading font-bold"
        >
          Elevating your business through exemplary IT services is our
          unwavering passion and commitment.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          className="text-paragraph mt-5 pb-4"
        >
          Vionys IT Solutions India Pvt Ltd is an innovative IT solutions
          provider, dedicated to empowering businesses through cutting-edge
          technology. Focused on customer focus, loyalty, and excellence, we
          deliver bespoke services that drive digital transformation and growth.
          Our team of experts works closely with clients to understand their
          specific requirements, ensuring a high-quality, sustainable solution
          that delivers lasting results.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutOurCompany;
