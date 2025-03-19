"use client";
import React from "react";
import { motion } from "framer-motion";
import InfiniteMovingServices from "../components/ui/InfiniteMovingServices";
import Client1 from "../../public/assets/clients/ServicesClient/Client1.png";
import Client2 from "../../public/assets/clients/ServicesClient/Client2.png";
import Client3 from "../../public/assets/clients/ServicesClient/Client3.png";
import Client4 from "../../public/assets/clients/ServicesClient/Client4.png";
import Client5 from "../../public/assets/clients/ServicesClient/Client5.png";
import Client6 from "../../public/assets/clients/ServicesClient/Client6.png";
import Client7 from "../../public/assets/clients/ServicesClient/Client7.png";
import Client8 from "../../public/assets/clients/ServicesClient/Client8.png";
import Client9 from "../../public/assets/clients/ServicesClient/Client9.png";
import Client10 from "../../public/assets/clients/ServicesClient/Client10.png";
import Client11 from "../../public/assets/clients/ServicesClient/Client11.png";
import Client12 from "../../public/assets/clients/ServicesClient/Client12.png";
import Client13 from "../../public/assets/clients/ServicesClient/Client13.png";
import Client14 from "../../public/assets/clients/ServicesClient/Client14.png";
import Client15 from "../../public/assets/clients/ServicesClient/Client15.png";
import Client16 from "../../public/assets/clients/ServicesClient/Client16.png";
import Client17 from "../../public/assets/clients/ServicesClient/Client17.png";
import Client18 from "../../public/assets/clients/ServicesClient/Client18.png";
import Client19 from "../../public/assets/clients/ServicesClient/Client19.png";
import Client20 from "../../public/assets/clients/ServicesClient/Client20.png";
import Client21 from "../../public/assets/clients/ServicesClient/Client21.png";
import Client22 from "../../public/assets/clients/ServicesClient/Client22.png";
import Client23 from "../../public/assets/clients/ServicesClient/Client23.png";
import Client24 from "../../public/assets/clients/ServicesClient/Client24.png";
import Client25 from "../../public/assets/clients/ServicesClient/Client25.png";
import Client26 from "../../public/assets/clients/ServicesClient/Client26.png";
import Client27 from "../../public/assets/clients/ServicesClient/Client27.png";
import Client28 from "../../public/assets/clients/ServicesClient/Client28.png";
import Client29 from "../../public/assets/clients/ServicesClient/Client29.png";
import Client30 from "../../public/assets/clients/ServicesClient/Client30.png";
import Client31 from "../../public/assets/clients/ServicesClient/Client31.png";
import Client32 from "../../public/assets/clients/ServicesClient/Client32.png";
import Client33 from "../../public/assets/clients/ServicesClient/Client33.png";
import Client34 from "../../public/assets/clients/ServicesClient/Client34.png";

interface Testimonial {
  id: string;
  img: string;
}

const testimonials: Testimonial[] = [
  { id: "1", img: Client1.src },
  { id: "2", img: Client2.src },
  { id: "3", img: Client3.src },
  { id: "4", img: Client4.src },
  { id: "5", img: Client5.src },
  { id: "6", img: Client6.src },
  { id: "7", img: Client7.src },
  { id: "8", img: Client8.src },
  { id: "9", img: Client9.src },
  { id: "10", img: Client10.src },
  { id: "11", img: Client11.src },
  { id: "12", img: Client12.src },
  { id: "13", img: Client13.src },
  { id: "14", img: Client14.src },
  { id: "15", img: Client15.src },
  { id: "16", img: Client16.src },
  { id: "17", img: Client17.src },
  { id: "18", img: Client18.src },
  { id: "19", img: Client19.src },
  { id: "20", img: Client20.src },
  { id: "21", img: Client21.src },
  { id: "22", img: Client22.src },
  { id: "23", img: Client23.src },
  { id: "24", img: Client24.src },
  { id: "25", img: Client25.src },
  { id: "26", img: Client26.src },
  { id: "27", img: Client27.src },
  { id: "28", img: Client28.src },
  { id: "29", img: Client29.src },
  { id: "30", img: Client30.src },
  { id: "31", img: Client31.src },
  { id: "32", img: Client32.src },
  { id: "33", img: Client33.src },
  { id: "34", img: Client34.src },
];

const ClientsServices = () => {
  return (
    <div className="p-2">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          y: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }}
        className="md:text-MainHeading text-MainHeading font-extrabold text-center"
      >
        Our Clients
      </motion.h2>
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
