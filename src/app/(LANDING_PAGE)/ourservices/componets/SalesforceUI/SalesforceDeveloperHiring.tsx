"use client";

import { motion } from "framer-motion";
export default function SalesforceDeveloperHiring() {
  const data = [
    {
      title: "Junior Salesforce Developer",
      price: "$1750 - $2500",
      experience: "1 - 3 Years Experience",
    },
    {
      title: "Mid Level Salesforce Developer",
      price: "$2500 - $3500",
      experience: "3 - 5 Years Experience",
    },
    {
      title: "Senior Level Salesforce Developer",
      price: "$3500 onwards",
      experience: "5+ Years Experience",
    },
  ]
  return (
    <div className="container mx-auto px-4 md:px-12 lg:px-16 py-12">
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Collaborate With The Top 1% Salesforce Developers In India
        </h1>
        <p className="text-lg text-gray-300">
          Hire a team of Salesforce Developers from{" "}
          <span className="text-orange font-bold">Vionsys</span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data.map((dev, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="border border-gray-700 bg-black backdrop-blur-md text-gray-300 rounded-2xl p-6 flex flex-col items-center w-full mx-auto"
          >
            <h2 className="text-lg font-semibold text-center mb-4">{dev.title}</h2>
            <div className="w-16 h-0.5 bg-gray-700 mb-4" />
            <p className="text-xl font-bold mb-4">{dev.price}</p>
            <div className="w-full h-0.5 bg-gray-700 mb-4" />
            <p className="text-center">{dev.experience}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
