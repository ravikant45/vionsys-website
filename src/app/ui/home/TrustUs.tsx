import React from "react";

import { LayoutGrid } from "@/components/ui/layout-grid";

import Business_Systems from "../../../../public/assets/Home/Business-Systems.jpg";
import Data_Security from "../../../../public/assets/Home/Data-Security.jpg";
import Network_Monitoring from "../../../../public/assets/Home/Network-Monitoring-2.jpg";
import Network_Security from "../../../../public/assets/Home/Network-Security.jpg";
import Business_System from "../../../../public/assets/Home/Protect_Business.jpeg";
import Small_Business from "../../../../public/assets/Home/Small-Business-1.jpeg";
import { motion } from "framer-motion";
const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-2xl text-white">Protect Your Business</p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-2xl text-white">Network Security</p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-2xl text-white">Data Security</p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-2xl text-white bg-black opacity-60">
        Small Business Owners
      </p>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold text-2xl text-white bg-black opacity-60">
        Run your Business
      </p>
    </div>
  );
};
const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold text-2xl text-white bg-black opacity-60">
        Network Monitoring
      </p>
    </div>
  );
};
interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.2,
        scale: { type: "spring", stiffness: 30 },
        opacity: { duration: 0.6 },
        ease: "easeInOut",
      }}
      className="border rounded-lg shadow-lg md:p-6 p-3 flex flex-col items-start">
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};


const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail: Business_System,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: Network_Security,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: Data_Security,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1",
    thumbnail: Small_Business,
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-1",
    thumbnail: Business_Systems,
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-1",
    thumbnail: Network_Monitoring,
  },
];

function TrustUs() {
  const cardsData = [
    {
      title: "Featured Expertise",
      description: "With years of experience in the IT solutions industry, Vionsys IT Solutions India Pvt Ltd is renowned for providing high-quality, innovative solutions designed to meet the specific needs of our clients.",
      icon: <span>🏆</span>, // Replace with actual icon component
    },
    {
      title: "Notable Employees",
      description: "Our team consists of certified professionals with specialized knowledge and expertise in the latest technology and industry standards, ensuring that your IT infrastructure is in the hands of experts.",
      icon: <span>👥</span>, // Replace with actual icon component
    },
    {
      title: "Customer Process",
      description: "We prioritize your business goals and challenges, delivering personalized solutions that align with your goals and deliver measurable results.",
      icon: <span>📊</span>, // Replace with actual icon component
    },
    {
      title: "Commitment to innovation",
      description: "To stay at the forefront of industry trends, we continue to invest in research and development and deliver innovative solutions that meet the evolving needs of our customers.",
      icon: <span>💡</span>, // Replace with actual icon component
    },
    {
      title: "Safety and Compliance",
      description: "We follow strict security measures and regulatory standards to protect your data and ensure your IT infrastructure complies with regulatory requirements.   ",
      icon: <span>🛡️</span>, // Replace with actual icon component
    },
  ];
  return (
    <section>
      <div className="grid md:grid-cols-3 px-2 py-4 grid-cols-1 justify-items-center items-center">
        <div className="h-screen w-full col-span-2 md:order-1 order-2">
          <LayoutGrid cards={cards} />
        </div>
        <div className="order-1 md:order-2 p-8">
          <p data-aos="fade-left" className="font-extrabold text-MainHeading">
            Why trust us?
          </p>
          <p data-aos="fade-right" className="text-SubHeading mt-5 font-bold">
            Achieve digital transformation for your retail business services
          </p>
          <p data-aos="zoom-out" className="text-paragraph mt-5 mb-5">
            Enhance your business through digital transformation and get the best from Vionsys IT Solutions India Pvt. Ltd. Join our vibrant team and explore the limitless possibilities. Here, you will participate in new projects, thrive in a collaborative environment, and experience a continuous learning program that supports your professional development Find the ideal environment to unlock your full potential in the dynamic IT career in.
          </p>
        </div>
      </div>


      {/* Section to show the Data */}
      <div className="flex justify-center items-center md:p-8 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustUs;
