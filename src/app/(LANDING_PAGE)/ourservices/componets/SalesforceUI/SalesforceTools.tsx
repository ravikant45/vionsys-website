"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

interface TechCategory {
  name: string;
}

interface TechCategories {
  [key: string]: TechCategory[];
}

const techCategories: TechCategories = {
  "Salesforce Cloud": [
    { name: "Service" },
    { name: "Sales" },
    { name: "Commerce" },
    { name: "Financial Services" },
    { name: "Marketing" },
    { name: "Field Service" },
    { name: "Community" },
    { name: "Health" },
    { name: "App" },
    { name: "Experience" },
    { name: "Industry" },
    { name: "Analytics" },
    { name: "IoT" },
  ],
  "AppExchange Packages": [
    { name: "Conga Composer" },
    { name: "Conga Sign" },
    { name: "E3Excel" },
    { name: "DocuSign" },
    { name: "Dataloader.io" },
    { name: "Nintex Drawloop DocGen" },
  ],
  "Salesforce Integration": [
    { name: "ERP" },
    { name: "Marketing Automation" },
    { name: "Accounting" },
    { name: "E-Commerce" },
    { name: "Salesforce Email" },
    { name: "Collaboration System" },
    { name: "Social Media" },
    { name: "CTI" },
    { name: "Salesforce Database" },
    { name: "ITSM" },
  ],
};

function SalesforceTools() {
  const categories = Object.keys(techCategories);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    const categoryInterval = setInterval(() => {
      setActiveCategory((prevCategory) => {
        const currentIndex = categories.indexOf(prevCategory);
        return categories[(currentIndex + 1) % categories.length];
      });
      setResetKey((prevKey) => prevKey + 1); // Reset animations
    }, 3000);

    return () => clearInterval(categoryInterval);
  }, [categories]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setResetKey((prevKey) => prevKey + 1); // Reset animations when tab changes
  };

  return (
    <section className="sm:py-16 md:py-8 md:px-16 bg-black">
      <div className="container mx-auto p-4 border rounded-2xl border-stone-800">
        <h2 className="text-white text-2xl md:text-3xl font-semibold text-center mb-4">
          Top Salesforce Tools & Technologies Used by Our Experts
        </h2>
        <p className="text-md font-light text-center text-gray-200 mb-8">
          Our experts leverage top Salesforce tools and technologies to deliver
          customized solutions.
        </p>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors focus-visible:ring focus-visible:ring-blue-400 ${
                activeCategory === category
                  ? "bg-white text-blue-500"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Animated Category Transition */}
        <div className="relative flex flex-col items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={resetKey} // Ensures component resets on tab change
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full h-60 md:h-36 flex flex-col items-center"
            >
              <h3 className="text-xl md:text-2xl text-slate-200 font-semibold text-center mb-6">
                {activeCategory}
              </h3>

              {/* Technologies */}
              <div className="flex flex-wrap justify-center gap-6 items-center">
                {techCategories[activeCategory].map((tech) => (
                  <motion.div
                    key={tech.name}
                    className="flex flex-col items-center text-gray-300 border border-gray-700 py-1 px-6 rounded-xl shadow-md"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-xs sm:text-sm font-medium">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default SalesforceTools;
