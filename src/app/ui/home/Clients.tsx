"use client";

import ClientImage3 from "../../../../public/assets/clients/client-3.png";
import ClientImage4 from "../../../../public/assets/clients/client-4.png";
import ClientImage5 from "../../../../public/assets/clients/client-5.png";
import ClientImage6 from "../../../../public/assets/clients/client-6.png";
import ClientImage7 from "../../../../public/assets/clients/client-7.png";
import ClientImage8 from "../../../../public/assets/clients/client-8.png";
import ClientImage9 from "../../../../public/assets/clients/client-9.png";
import ClientImage10 from "../../../../public/assets/clients/client-10.png";
import Client01 from "../../../../public/assets/clients/Client1.png";
import Client02 from "../../../../public/assets/clients/Client2.png";
import Client03 from "../../../../public/assets/clients/Client3.png";
import Client04 from "../../../../public/assets/clients/Client4.png";
import Client05 from "../../../../public/assets/clients/Client5.png";
import Client06 from "../../../../public/assets/clients/Client6.png";
import Client07 from "../../../../public/assets/clients/Client7.png";
import Client08 from "../../../../public/assets/clients/Client8.png";
import Client09 from "../../../../public/assets/clients/Client9.png";
import Client10 from "../../../../public/assets/clients/Client10.png";
import Client11 from "../../../../public/assets/clients/Client11.png";
import Client12 from "../../../../public/assets/clients/Client12.png";
import Client13 from "../../../../public/assets/clients/Client13.png";
import Client14 from "../../../../public/assets/clients/Client14.png";

import InfiniteMovingCards2 from "../../../components/ui/infinite-moving-cards2";
import { motion } from "framer-motion";

interface Testimonial {
  id: string;
  img: string;
}

const testimonials: Testimonial[] = [
  { id: "3", img: ClientImage3.src },
  { id: "4", img: ClientImage4.src },
  { id: "5", img: ClientImage5.src },
  { id: "6", img: ClientImage6.src },
  { id: "7", img: ClientImage7.src },
  { id: "8", img: ClientImage8.src },
  { id: "9", img: ClientImage9.src },
  { id: "10", img: ClientImage10.src },
  { id: "11", img: Client01.src },
  { id: "12", img: Client02.src },
  { id: "13", img: Client03.src },
  { id: "14", img: Client04.src },
  { id: "15", img: Client05.src },
  { id: "16", img: Client06.src },
  { id: "17", img: Client07.src },
  { id: "18", img: Client08.src },
  { id: "19", img: Client09.src },
  { id: "20", img: Client10.src },
  { id: "21", img: Client11.src },
  { id: "22", img: Client12.src },
  { id: "23", img: Client13.src },
  { id: "24", img: Client14.src },
];


export function InfiniteMovingCardsDemo() {
  return (
    <div className="bg-[#fd4343] bg-[linear-gradient(45deg,_#fd4343_0%,_#ffbde9_50%,_#8983fb_100%)] p-6">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          y: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }}
        className="md:text-MainHeading text-MainHeading font-extrabold text-center"
      >
        Our Clients
      </motion.h1>
      <div className="h-auto md:py-4 py-2 rounded-md flex antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards2
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

export default InfiniteMovingCardsDemo;
