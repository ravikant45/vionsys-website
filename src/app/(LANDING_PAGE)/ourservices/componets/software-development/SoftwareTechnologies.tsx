"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import reactLogo from "../../images/SoftwareDevelopment/react.png";
import next from "../../images/SoftwareDevelopment/next.png";
import ts from "../../images/SoftwareDevelopment/ts.png";
import vue from "../../images/SoftwareDevelopment/vue.png";
import aws from "../../images/SoftwareDevelopment/aws.png";
import docker from "../../images/SoftwareDevelopment/docker.png";
import kubernetes from "../../images/SoftwareDevelopment/Kubernates.png";
import Flutter from "../../images/SoftwareDevelopment/flutter.png";
import Swift from "../../images/SoftwareDevelopment/swift.png";
import postGre from "../../images/SoftwareDevelopment/postGre.png";
import mongo from "../../images/SoftwareDevelopment/mongo.png";
import sql from "../../images/SoftwareDevelopment/sql.png";
import node from "../../images/SoftwareDevelopment/node.png";
import django from "../../images/SoftwareDevelopment/django.png";
import spring from "../../images/SoftwareDevelopment/spring.png";

interface TechCategory {
  name: string;
  logo: any;
}

interface TechCategories {
  [key: string]: TechCategory[];
}

const techCategories: TechCategories = {
  "Web Platform": [
    { name: "React", logo: reactLogo },
    { name: "Next.js", logo: next },
    { name: "TypeScript", logo: ts },
    { name: "Vue.js", logo: vue },
  ],
  "Cloud and DevOps": [
    { name: "AWS", logo: aws },
    { name: "Docker", logo: docker },
    { name: "Kubernetes", logo: kubernetes },
  ],
  "Mobile App Development": [
    { name: "React Native", logo: reactLogo },
    { name: "Flutter", logo: Flutter },
    { name: "Swift", logo: Swift },
  ],
  Databases: [
    { name: "PostgreSQL", logo: postGre },
    { name: "MongoDB", logo: mongo },
    { name: "MySQL", logo: sql },
  ],
  "Other Frameworks": [
    { name: "Node.js", logo: node },
    { name: "Django", logo: django },
    { name: "Spring Boot", logo: spring },
  ],
};

const SoftwareTechnologies = () => {
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
    <section className="pt-12 sm:py-16 md:py-8 md:px-16">
      <div className="container mx-auto p-4 border rounded-2xl border-stone-800">
        <h2 className="text-white text-2xl md:text-4xl font-semibold text-center mb-4">
          Our Tech Stack
        </h2>
        <p className="text-lg font-light text-center text-white mb-8">
          We leverage cutting-edge technologies to build scalable,
          high-performance solutions.
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
              className="w-full flex flex-col items-center"
            >
              <h3 className="text-xl md:text-2xl text-slate-200 font-semibold text-center mb-6">
                {activeCategory}
              </h3>

              {/* Technologies */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 items-center">
                {techCategories[activeCategory].map((tech) => (
                  <motion.div
                    key={tech.name}
                    className="flex flex-col items-center bg-white p-3 rounded-xl shadow-md"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={80}
                      height={80}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg lg:w-24 lg:h-24 mb-2 object-cover"
                    />
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
};

export default SoftwareTechnologies;
