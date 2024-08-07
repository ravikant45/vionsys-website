import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid2";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import CRM from "/public/assets/Home/CRM.png";
import Service from "/public/assets/Home/Service.jpg";
import AI from "/public/assets/Home/AI.jpg";
import Salesforce from "/public/assets/Home/SalesforceImg.jpg";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: StaticImageData;
};

const SkeletonOne = () => {
  return <div></div>;
};

const SkeletonTwo = () => {
  return <div></div>;
};
const SkeletonThree = () => {
  return <div></div>;
};
const SkeletonFour = () => {
  return <div></div>;
};

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
        <motion.h4
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
        </motion.h4>
        <motion.h5
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
        </motion.h5>
        <motion.div
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
        </motion.div>
        <Link href="/about">
          <Button className="text-lg">Learn More</Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutOurCompany;
