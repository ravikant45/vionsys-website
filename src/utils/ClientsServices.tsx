"use client";
import React from "react";
import { motion } from "framer-motion";
import InfiniteMovingServices from "../components/ui/InfiniteMovingServices";
import SClient1 from "../../public/assets/clients/ServicesClient/SClient1.png";
import SClient2 from "../../public/assets/clients/ServicesClient/SClient2.png";
import SClient4 from "../../public/assets/clients/ServicesClient/SClient4.png";
import SClient5 from "../../public/assets/clients/ServicesClient/SClient5.png";
import SClient7 from "../../public/assets/clients/ServicesClient/SClient7.png";
import SClient8 from "../../public/assets/clients/ServicesClient/SClient8.png";
import SClient9 from "../../public/assets/clients/ServicesClient/SClient9.png";
import SClient10 from "../../public/assets/clients/ServicesClient/SClient10.png";
import SClient11 from "../../public/assets/clients/ServicesClient/SClient11.png";
import SClient12 from "../../public/assets/clients/ServicesClient/SClient12.png";
import SClient13 from "../../public/assets/clients/ServicesClient/SClient13.png";
import SClient14 from "../../public/assets/clients/ServicesClient/SClient14.png";
import SClient15 from "../../public/assets/clients/ServicesClient/SClient15.png";
import SClient16 from "../../public/assets/clients/ServicesClient/SClient16.png";

interface Testimonial {
  id: string;
  img: string;
}


const testimonials: Testimonial[] = [
    { id: "1", img: SClient1.src },
    { id: "2", img: SClient2.src },
    { id: "4", img: SClient4.src },
    { id: "5", img: SClient5.src },
    { id: "7", img: SClient7.src },
    { id: "8", img: SClient8.src },
    { id: "9", img: SClient9.src },
    { id: "10", img: SClient10.src },
    { id: "11", img: SClient11.src },
    { id: "12", img: SClient12.src },
    { id: "13", img: SClient13.src },
    { id: "14", img: SClient14.src },
    { id: "15", img: SClient15.src },
    { id: "16", img: SClient16.src },
  ];


const ClientsServices = () => {
  return (
    <div className="p-2">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.60,
          y: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }}
        className="md:text-MainHeading text-MainHeading font-extrabold text-center"
      >
        Our Clients
      </motion.h1>
      <div className="h-auto rounded-md flex antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingServices
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default ClientsServices;
