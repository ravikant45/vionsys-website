import React from "react";
import { motion } from "framer-motion";

const ComparativeAnalysis = () => {
  const data = [
    {
      parameter: "Sourcing the Right Developers",
      inHouse: "1-3 Months",
      vionsys: "1-2 Days",
      freelance: "1-4 Weeks",
    },
    {
      parameter: "Time to Start a Project",
      inHouse: "2-3 Months",
      vionsys: "1-2 Weeks",
      freelance: "1 Month",
    },
    {
      parameter: "Acquisition Cost",
      inHouse: "8-10k USD",
      vionsys: "0",
      freelance: "1-5k USD",
    },
    {
      parameter: "Infrastructure Cost",
      inHouse: "10-15k USD",
      vionsys: "0",
      freelance: "0",
    },
    {
      parameter: "Pricing Per Week",
      inHouse: "2000/4000 USD",
      vionsys: "1000-1500 USD",
      freelance: "500-1000 USD",
    },
    {
      parameter: "Project Failure",
      inHouse: "Moderate",
      vionsys: "Nil Till Date",
      freelance: "High",
    },
    {
      parameter: "Dedicated Team",
      inHouse: "No",
      vionsys: "Yes",
      freelance: "Yes",
    },
    {
      parameter: "Training Cost",
      inHouse: "5000 USD",
      vionsys: "0",
      freelance: "0",
    },
    {
      parameter: "Timely Delivery",
      inHouse: "Average",
      vionsys: "Yes",
      freelance: "Ask For Extension",
    },
    {
      parameter: "Termination Cost",
      inHouse: "10-15k USD",
      vionsys: "0",
      freelance: "Based On Contract",
    },
    {
      parameter: "Assured Working Hours",
      inHouse: "40",
      vionsys: "40-45",
      freelance: "Uncertain",
    },
    {
      parameter: "Quality Auditor",
      inHouse: "5000 USD/Week",
      vionsys: "0",
      freelance: "Additional",
    },
    {
      parameter: "Data Privacy",
      inHouse: "High",
      vionsys: "High",
      freelance: "Low",
    },
  ];
  

  return (
    <div className="relative md:p-6 p-4 my-8 rounded-lg shadow-lg">
      <motion.h1
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.2,
          scale: { type: "spring", stiffness: 40 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }}
        className="font-bold text-MainHeading text-orange text-center mb-6"
      >
        Comparative Analysis
      </motion.h1>
      <div className="overflow-x-auto mx-auto max-w-5xl">
        <table className="min-w-full bg-white rounded-lg">
          <thead>
            <tr className="bg-gradient-to-r from-blue-700 to-cyan-400">
              <th className="py-3 px-6 text-center font- text-white">
              </th>
              <th className="py-3 px-6 text-center text-white border-x-[1px] border-black">
                Hiring In-House Devlopers
              </th>
              <th className="py-3 px-6 text-center  text-white border-x-[1px] border-black">
                Vionsys IT Solutions Pvt Ltd
              </th>
              <th className="py-3 px-6 text-center text-white">
                Freelancers/Upworks
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 odd:bg-gray-200"
              >
                <td className="py-4 px-6 ">{row.parameter}</td>
                <td
                  className={`py-4 px-6 border-x-[1px] border-black ${
                    index % 2 === 0 ? "bg-indigo-100" : ""
                  }`}
                >
                  {row.inHouse}
                </td>
                <td
                  className={`py-4 px-6 border-x-[1px] border-black ${
                    index % 2 === 0 ? "bg-cyan-100" : ""
                  }`}
                >
                  {row.vionsys}
                </td>
                <td className={`py-4 px-6 ${
                    index % 2 === 0 ? "bg-teal-100" : ""
                  }`}>{row.freelance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparativeAnalysis;
