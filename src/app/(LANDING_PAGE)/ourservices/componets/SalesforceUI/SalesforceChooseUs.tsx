"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LuCheckCircle, LuPencilRuler, LuCog, LuPhone } from "react-icons/lu"
import { FaArrowRight } from "react-icons/fa";

const steps = [
  { icon: <LuCheckCircle className="w-8 h-8" />, title: 'Tailored Solutions', description: 'We customize Salesforce to fit your unique business needs, ensuring it aligns perfectly with your processes, whether its sales, marketing, or customer support.' },
  { icon: <LuPencilRuler className="w-8 h-8" />, title: 'Improved Efficiency', description: 'Our Salesforce services streamline your operations by automating workflows, enabling your team to focus on what matters most—building relationships and closing deals.' },
  { icon: <LuCog className="w-8 h-8" />, title: 'Scalability', description: 'As your business grows, Salesforce grows with you. We implement scalable solutions that can adapt to changing market demands and business objectives.' },
  { icon: <LuPhone className="w-8 h-8" />, title: 'Expert Integration', description: 'Our team ensures seamless integration of Salesforce with your existing systems, allowing you to leverage all your business data for smarter decision-making.' },
  { icon: <LuCog className="w-8 h-8" />, title: 'Enhanced Customer Experience', description: 'With personalized customer insights, you can offer better support, resolve issues faster, and deliver a more engaging, customer-centric experience.' },
  { icon: <LuCog className="w-8 h-8" />, title: 'Ongoing Support and Training', description: 'We provide continuous support and training, empowering your team to make the most of Salesforces robust capabilities.' },
]

export default function Component() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white md:py-16 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }} className="text-MainHeading font-extrabold text-center mb-12">Why Choose Us?</motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <motion.div initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 40 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }} className="relative w-64 h-64">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="10"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="10"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: (activeStep + 1) / steps.length }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <div className="text-blue-600 mb-2">{steps[activeStep].icon}</div>
                  <h3 className="text-xl font-semibold text-center text-gray-800">{steps[activeStep].title}</h3>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 40 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }} className="md:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{steps[activeStep].title}</h3>
                <p className="text-gray-600 mb-4">{steps[activeStep].description}</p>
                <button className="group px-4 py-2 bg-[#4d76aa] text-white rounded-full font-medium flex items-center space-x-2 transition-all duration-300 ease-in-out hover:bg-[#1E77E8]">
                    <span>Contact Now</span>
                    <FaArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  )
}