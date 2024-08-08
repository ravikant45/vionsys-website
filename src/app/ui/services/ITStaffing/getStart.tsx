"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Button } from "@/components/ui/button";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

export function getStart() {
  const words = [
    {
      text: "Get",
      className: "text-MainHeading font-extrabold",
    },
    {
      text: "Started",
      className: "text-MainHeading font-extrabold",
    },
    {
      text: "Today",
      className: "text-MainHeading font-extrabold",
    },
  ];
  return (
    <div className="bg-dot-slate-300 flex justify-center items-center">
      <div className="flex flex-col items-center bg-cover w-[100vw] py-4">
        <div className="flex flex-col justify-center items-center md:px-3 w-3/4 h-full">
          <TypewriterEffect words={words} />
          <div className="py-4 flex flex-col justify-center items-center md:px-3 h-full">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 20 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="md:text-SubHeading text-lg text-[#e57e2c] font-bold"
            >
              Ready to take your IT team's capabilities to new heights? Reach
              out to us now and discover how our specialized IT staffing
              services can empower your organization. Let's collaborate for
              success!
            </motion.p>
            <Link href="/contact">
              <Button>
                Contact
                <BsTelephoneOutboundFill className=" ml-2 text-sm text-center" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default getStart;
