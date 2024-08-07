"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="relative overflow-hidden top-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2">
              <Image
                src={"/assets/Industries/Telecom/TelecomHero.jpg"}
                alt="Telecommunication"
                width={996}
                height={480}
                className="rounded-xl"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:ml-8 shadow-xl shadow-slate-300 p-4 rounded-xl">
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 20 },
                  opacity: { duration: 0.4 },
                  ease: "easeInOut",
                }}
                className="block text-3xl font-bold text-orange sm:text-4xl md:text-5xl dark:text-white"
              >
                Tele
                <span className="text-blue3">Communication</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.4 },
                  ease: "easeInOut",
                }}
                className="mt-3 text-lg text-gray-800 dark:text-neutral-400"
              >
                The telecom industry is characterized by rapid technological
                development, increasing communication demands, and the need for
                robust, scalable infrastructure. Vionsys IT Solutions India Pvt
                Ltd provides specialized IT services to the telecom industry to
                advance enterprise network services, improve customer
                experience, and drive innovation.
              </motion.p>
            </div>
          </div>
          <div className="relative mt-10">
            <div className="absolute bottom-12 -left-20 -z-[1] size-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg dark:to-neutral-900">
              <div className="bg-white size-48 rounded-lg dark:bg-neutral-900"></div>
            </div>
            <div className="absolute -top-12 -right-20 -z-[1] size-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
              <div className="bg-white size-48 rounded-full dark:bg-neutral-900"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
