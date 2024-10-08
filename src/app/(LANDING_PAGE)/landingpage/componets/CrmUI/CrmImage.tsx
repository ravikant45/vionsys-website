"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import CrmBuilding2 from "../../../landingpage/images/Crm/CrmBuilding2.jpg"
import CrmBuilding from "../../../landingpage/images/Crm/CrmBuilding.jpg"
import CrmBuilding4 from "../../../landingpage/images/Crm/CrmBuilding4.jpg"

const slides = [
  {
    id: 1,
    image: CrmBuilding4,
    title: "Customer Relationship Management (CRM)",
    description: "Selecting Excellence: Elevate Your CRM Experience with Us."
  },
  {
    id: 2,
    image: CrmBuilding2,
    title: "Customer Relationship Management (CRM)",
    description: "An impressive urban landscape at night"
  },
  {
    id: 3,
    image: CrmBuilding,
    title: "Customer Relationship Management (CRM)",
    description: "Relaxing waves and golden sands"
  },
]

export default function FullImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full h-screen p-8">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-1/2"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute top-0 left-0 p-4 md:p-4 bg-black bg-opacity-50 text-white max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{slides[currentSlide].title}</h2>
            <p className="text-sm md:text-lg">{slides[currentSlide].description}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}