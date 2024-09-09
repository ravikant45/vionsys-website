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

import Client01 from "../../public/assets/clients/Client1.png";
import Client02 from "../../public/assets/clients/Client2.png";
import Client03 from "../../public/assets/clients/Client3.png";
import Client04 from "../../public/assets/clients/Client4.png";
import Client05 from "../../public/assets/clients/Client5.png";
import Client06 from "../../public/assets/clients/Client6.png";
import Client07 from "../../public/assets/clients/Client7.png";
import Client08 from "../../public/assets/clients/Client8.png";
import Client09 from "../../public/assets/clients/Client9.png";
import Client10 from "../../public/assets/clients/Client10.png";
import Client11 from "../../public/assets/clients/Client11.png";
import Client12 from "../../public/assets/clients/Client12.png";
import Client13 from "../../public/assets/clients/Client13.png";
import Client14 from "../../public/assets/clients/Client14.png";

interface Testimonial {
  id: string;
  img: string;
}


const testimonials: Testimonial[] = [
  { id: "1", img: SClient1.src },
  { id: "2", img: SClient2.src },
  { id: "3", img: SClient4.src },
  { id: "4", img: SClient5.src },
  { id: "5", img: SClient7.src },
  { id: "6", img: SClient8.src },
  { id: "7", img: SClient9.src },
  { id: "8", img: SClient10.src },
  { id: "9", img: SClient11.src },
  { id: "10", img: SClient12.src },
  { id: "11", img: SClient13.src },
  { id: "12", img: SClient14.src },
  { id: "13", img: SClient15.src },
  { id: "14", img: SClient16.src },
  { id: "15", img: Client01.src },
  { id: "16", img: Client02.src },
  { id: "17", img: Client03.src },
  { id: "18", img: Client04.src },
  { id: "19", img: Client05.src },
  { id: "20", img: Client06.src },
  { id: "21", img: Client07.src },
  { id: "22", img: Client08.src },
  { id: "23", img: Client09.src },
  { id: "24", img: Client10.src },
  { id: "25", img: Client11.src },
  { id: "26", img: Client12.src },
  { id: "27", img: Client13.src },
  { id: "28", img: Client14.src },
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
