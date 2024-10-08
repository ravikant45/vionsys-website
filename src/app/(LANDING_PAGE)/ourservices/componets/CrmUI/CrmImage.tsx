// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import CrmBuilding2 from "../../../ourservices/images/Crm/CrmBuilding2.jpg"
// import CrmBuilding from "../../../ourservices/images/Crm/CrmBuilding.jpg"
// import CrmBuilding4 from "../../../ourservices/images/Crm/CrmBuilding4.jpg"

// const slides = [
//   {
//     id: 1,
//     image: CrmBuilding4,
//     title: "Customer Relationship Management (CRM)",
//     description: "Selecting Excellence: Elevate Your CRM Experience with Us."
//   },
//   {
//     id: 2,
//     image: CrmBuilding2,
//     title: "Customer Relationship Management (CRM)",
//     description: "An impressive urban landscape at night"
//   },
//   {
//     id: 3,
//     image: CrmBuilding,
//     title: "Customer Relationship Management (CRM)",
//     description: "Relaxing waves and golden sands"
//   },
// ]

// export default function FullImageSlider() {
//   const [currentSlide, setCurrentSlide] = useState(0)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
//     }, 5000)

//     return () => clearInterval(timer)
//   }, [])

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
//   }

//   return (
//     <div className="relative w-full h-[60vh] p-8 overflow-hidden">
//       <AnimatePresence initial={false}>
//         <motion.div
//           key={currentSlide}
//           initial={{ opacity: 0, x: '100%' }} // Start from the right
//           animate={{ opacity: 1, x: 0 }} // Move to center
//           exit={{ opacity: 0, x: '-100%' }} // Exit to the left
//           transition={{ duration: 0.5 }}
//           className="relative w-full h-full" // Use h-full to take full height of the parent
//         >
//           <Image
//             src={slides[currentSlide].image}
//             alt={slides[currentSlide].title}
//             layout="fill"
//             objectFit="cover"
//             priority
//           />
//           <div className="absolute top-0 left-0 p-4 bg-black bg-opacity-50 text-white max-w-3xl">
//             <h2 className="text-2xl md:text-3xl font-bold mb-2">{slides[currentSlide].title}</h2>
//             <p className="text-sm md:text-lg">{slides[currentSlide].description}</p>
//           </div>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   )
// }

import React, { useState, useEffect } from "react";
import Image from "next/image";
import CrmBuilding2 from "../../../ourservices/images/Crm/CrmBuilding2.jpg";
import CrmBuilding from "../../../ourservices/images/Crm/CrmBuilding.jpg";
import CrmBuilding4 from "../../../ourservices/images/Crm/CrmBuilding4.jpg";

const images = [CrmBuilding2, CrmBuilding, CrmBuilding4];

const CrmImage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div
      id="default-carousel"
      className="relative w-full py-16"
      data-carousel="slide"
    >
      <div className="relative h-[70vh] overflow-hidden rounded-lg md:h-96 flex justify-center items-center">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute transition-opacity duration-700 ease-in-out w-[90vw] ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item
          >
            <Image
              src={src}
              width={1000}
              height={1000}
              objectFit="cover"
              priority
              className="block w-full"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrmImage;

