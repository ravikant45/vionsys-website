"use client";

import { motion } from "framer-motion";
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

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Web Platform");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % techCategories[activeCategory].length
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [activeCategory]);

  return (
    <>
      <section className="pt-12 sm:py-16 md:py-8 lg:py-8">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, scale: 1.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className="text-MainHeading font-bold text-center mb-4"
          >
            Our Tech Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 20 },
              opacity: { duration: 0.4 },
              ease: "easeInOut",
            }}
            className="text-lg md:text-xl text-center text-orange mb-8 lg:mb-12"
          >
            We leverage cutting-edge technologies to build scalable,
            high-performance solutions.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-2 mb-8 lg:mb-12">
            {Object.keys(techCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative h-52 flex flex-col justify-between  overflow-hidden">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              <h3 className="text-xl md:text-2xl text-slate-700 font-semibold text-center mb-6">
                {activeCategory}
              </h3>
              <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 items-center">
                {techCategories[activeCategory].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                      opacity: index === currentIndex ? 1 : 0.3,
                      scale: index === currentIndex ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={80}
                      height={80}
                      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-2 object-cover"
                    />
                    <span className="text-xs sm:text-sm font-medium">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
