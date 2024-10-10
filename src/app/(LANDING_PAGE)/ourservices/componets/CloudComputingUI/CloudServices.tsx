"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const slides = [
  {
    image: "/assets/LandingPage/CloudComputing/Cloud1.jpg",
    title: "Infrastructure as a Service (IaaS)",
    points: [
      "On-demand resources with pay-as-you-go pricing.",
      "Fully managed infrastructure without the need for physical hardware.",
      "Customizable environments to meet specific business needs.",
    ],
    description:
      "Provide clients with scalable and flexible virtualized computing resources over the internet, including storage, networking, and servers.",
  },
  {
    image: "/assets/LandingPage/CloudComputing/Cloud2.jpg",
    title: "Platform as a Service (PaaS)",
    points: [
      "Automated updates, maintenance, and security.",
      "Integration with popular programming languages and tools.",
      "Development environments that streamline app creation.",
    ],
    description:
      "Offer a cloud-based platform for developers to build, deploy, and manage applications without worrying about underlying infrastructure.",
  },
  {
    image: "/assets/LandingPage/CloudComputing/Cloud3.jpg",
    title: "Software as a Service (SaaS)",
    points: [
      "Accessible through web browsers—no installation needed.",
      "Regular updates and maintenance handled by the service provider.",
      "Scalable solutions, whether for a few users or an entire organization.",
    ],
    description:
      "Provide software applications via the cloud that users can access from any device with an internet connection.",
  },
  {
    image: "/assets/LandingPage/CloudComputing/Cloud4.jpg",
    title: "Cloud Migration Services",
    points: [
      "Comprehensive migration plans and strategies.",
      "Zero downtime during the transition process.",
      "Integration of existing systems into the cloud seamlessly.",
    ],
    description:
      "Help businesses move their existing infrastructure, applications, and data to the cloud with minimal disruption.",
  },
  {
    image: "/assets/LandingPage/CloudComputing/Cloud5.jpg",
    title: "Cloud Storage Services",
    points: [
      "Flexible storage plans to accommodate growing data needs.",
      "Encryption for data security during transfer and storage.",
      "Disaster recovery options to protect against data loss.",
    ],
    description:
      "Securely store data and files in the cloud, accessible from anywhere with robust backup and redundancy options.",
  },
];

interface PopUpCloudProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const CloudServices: React.FC<PopUpCloudProps> = ({ showModal, setShowModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAutoPlaying) {
      timer = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="relative w-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }}
        className="text-[#215CBC] text-4xl font-extrabold text-center mb-3"
      >
        Our Cloud Computing Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }}
        className="text-orange text-3xl font-bold text-center mb-3"
      >
        We offer a wide range of services to help your business succeed.
      </motion.p>
      <div className=" flex items-center justify-center">
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }}
        className="max-w-7xl text-slate-600 text-2xl font-semibold text-center mb-10"
      >
        We provide a comprehensive range of cloud solutions, from scalable
        infrastructure to secure data management, designed to drive your
        business growth and success.
      </motion.p>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className="bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto relative">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                      index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                ))}
              </div>
              <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`transition-opacity duration-500 ease-in-out ${
                      index === currentIndex
                        ? "opacity-100"
                        : "opacity-0 hidden"
                    }`}
                  >
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary">
                      {slide.title}
                    </h2>
                    <ul className="space-y-2 sm:space-y-4 mb-4 sm:mb-3">
                      {slide.points.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 text-primary">•</span>
                          <span className="text-base">{point}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-base sm:text-base text-gray-600 mb-5">
                      {slide.description}
                    </p>
                    <button onClick={() => {
                  setShowModal(!showModal);
                }} className="group px-6 py-3 bg-amber-500 text-white rounded-full font-medium flex items-center space-x-2 transition-all duration-300 ease-in-out hover:bg-amber-600">
                      <span>Get Started</span>
                      <FaArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Next slide"
          >
            <FaChevronRight className="w-6 h-6 text-primary" />
          </button>
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-colors focus:outline-dashed focus:ring-2 focus:ring-primary ${
                index === currentIndex
                  ? "bg-blue-500"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CloudServices;