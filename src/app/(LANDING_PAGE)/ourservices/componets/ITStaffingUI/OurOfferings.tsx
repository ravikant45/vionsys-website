"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  FiChevronLeft,
  FiChevronRight,
  FiUserPlus,
  FiUsers,
  FiUserCheck,
  FiBriefcase,
} from "react-icons/fi";
import { Button } from "@/components/ui/button";
import backgroundImage from "@/app/(LANDING_PAGE)/ourservices/images/ITStaffing/Offerings.jpg";

// Define the structure of an offering
interface Offering {
  title: string;
  description: string;
  icon: React.ComponentType; // Type for react-icons
  color: string;
}

type OurOfferingsProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

// List of offerings
const offerings: Offering[] = [
  {
    title: "Contract To Hire Staffing",
    description:
      "Find the perfect fit with a trial period before committing to full-time employment.",
    icon: FiUserCheck,
    color: "bg-gradient-to-br from-purple-400 to-indigo-500",
  },
  {
    title: "Recruitment Process Outsourcing",
    description:
      "Streamline your hiring process with our comprehensive RPO solutions.",
    icon: FiUsers,
    color: "bg-gradient-to-br from-green-400 to-cyan-500",
  },
  {
    title: "Contract Staffing",
    description:
      "Flexible staffing solutions for short-term projects and temporary needs.",
    icon: FiBriefcase,
    color: "bg-gradient-to-br from-sky-400 to-blue-500",
  },
  {
    title: "Permanent Staffing",
    description:
      "Build your dream team with our expert permanent placement services.",
    icon: FiUserPlus,
    color: "bg-gradient-to-br from-pink-400 to-red-500",
  },
];

const OurOfferings: React.FC<OurOfferingsProps> = ({ showModal, setShowModal }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const IconComponent = offerings[currentIndex].icon;

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % offerings.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + offerings.length) % offerings.length
    );
  };

  const slideVariants = {
    hidden: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full py-12 md:py-10 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden"
    >
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${backgroundImage.src})` }} // Use the imported image
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
        className="relative z-10 flex justify-center items-center flex-col gap-4 px-4 md:px-6"
      >
        <h2 className="text-SubHeading font-bold tracking-tighter sm:text-5xl text-center text-white mb-8">
          Our Offerings
        </h2>
        <div className="relative md:w-1/2">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`${offerings[currentIndex].color} p-8 md:p-12 flex flex-col md:gap-4 items-center justify-between`}
            >
              <div className="mb-6 md:mb-0 md:mr-8 flex flex-col justify-center items-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="bg-white rounded-full inline-block justify-center p-4  mb-4"
                >
                  <IconComponent />
                </motion.div>
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-2xl font-bold text-center text-white mb-2"
                >
                  {offerings[currentIndex].title}
                </motion.h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-white text-center text-opacity-90"
                >
                  {offerings[currentIndex].description}
                </motion.p>
              </div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex space-x-4"
              >
                <Button
                onClick={() => {
                  setShowModal(!showModal);
                }}
                  variant="outline"
                  size="lg"
                  className="bg-white bg-opacity-20 text-white border-white"
                >
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg"
            onClick={prevSlide}
          >
            <FiChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg"
            onClick={nextSlide}
          >
            <FiChevronRight className="h-6 w-6" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {offerings.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-300"
              } transition-colors duration-300`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OurOfferings;
