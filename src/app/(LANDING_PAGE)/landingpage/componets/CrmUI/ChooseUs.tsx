"use client";

import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ChooseUs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState<boolean | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const points = [
    {
      id: 1,
      title: "Growth-Focused Strategy",
      description:
        "We don't just implement CRMs; we create a strategy to drive your company's growth. We will identify areas for improvement and use the CRM to increase sales, marketing, and customer service efficiency.",
    },
    {
      id: 2,
      title: "Deep Industry Expertise",
      description:
        "Our consultants are not masters of all trades. We understand your industry and can individually design the CRM to your firm, meeting your unique demands and goals.",
    },
    {
      id: 3,
      title: "Data-Driven Decisions",
      description:
        "We are not fond of guesswork. We analyze data to improve CRM operations for clients and ensure that the most value insights are derived from customer data.",
    },
    {
      id: 4,
      title: "Unwavering Support",
      description:
        "We're in for the long haul. You'll have a personal point of contact who will be with you every step of the way, offering consultation, support, and advice on how to build your business in all areas.",
    },
    {
      id: 5,
      title: "Focus on User Success",
      description:
        "A strong CRM is meaningless if your staff does not use it. We focus on assisting users in learning and effectively using the system through training and continuous support in order to maximize benefits.",
    },
  ];

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const newIndex = prevIndex === null ? 0 : (prevIndex + 1) % points.length;
        return newIndex;
      });
    }, 3000);
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (isHovering) {
      if (intervalRef.current) clearInterval(intervalRef.current);
    } else {
      startInterval();
    }
  }, [isHovering]);

  return (
    <div className="md:min-h-screen md:p-8 p-3 flex flex-col items-center justify-center bg-dot-slate-300">
      <div className="w-full max-w-6xl text-center md:mb-6">
        <motion.h1
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.4 },
              ease: "easeInOut",
            }} className="text-MainHeading font-extrabold mb-4">
          Why Choose Us?
        </motion.h1>
        <motion.p initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.4 },
              ease: "easeInOut",
            }} className="text-SubHeading font-bold">
          Other CRM consultants may set up your system, but at Vionsys, we go
          further becoming part of your team and dedicated to your long-term
          success.
        </motion.p>
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut"
            }} className="relative w-full h-[50vh] md:h-[70vh] max-w-6xl">
        {points.map((point, index) => {
          const angle = (index / points.length) * 2 * Math.PI - Math.PI / 2;
          const x = Math.cos(angle);
          const y = Math.sin(angle);
          return (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 md:block hidden"
              style={{
                left: `${50 + 40 * x}%`,
                top: `${50 + 40 * y}%`,
              }}
            >
              <Button
                variant="outline"
                className={`w-12 h-12 md:w-16 md:h-16 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#1164CB] text-white"
                    : "bg-white text-[#1164CB]"
                }`}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                {index + 1}
              </Button>
            </div>
          );
        })}
        <Card
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[60%] max-w-xl text-center shadow-lg border-[#1164CB] bg-white hover:scale-105 hover:shadow-xl"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {activeIndex !== null && (
            <>
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  {points[activeIndex].title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base font-medium">
                  {points[activeIndex].description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col justify-center items-center">
                <Button className="md:w-[35%] w-[70%]">
                  Contact Now <FaArrowRight className="mx-2" />
                </Button>
              </CardFooter>
            </>
          )}
        </Card>
      </motion.div>
    </div>
  );
}
