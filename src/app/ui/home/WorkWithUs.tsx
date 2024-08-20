"use client";
import React, { useState } from "react";
import { Suspense } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { Modal } from "antd";
import DynamicLoader from "@/components/ui/DynamicLoader";

function WorkWithUs() {
  const [modalopen, setmodalopen] = useState(false);
  const handlecancle = () => {
    setmodalopen(false);
  };
  return (
    <>
      <Modal open={modalopen} onCancel={handlecancle} footer={null}>
        <Suspense fallback={<DynamicLoader />}>
          <iframe
            className="overflow-hidden"
            src="https://calendly.com/hr--eppa/30min"
            height={600}
            width="100%"
          ></iframe>
        </Suspense>
      </Modal>
      <AuroraBackground>
        <div className="relative flex flex-col gap-4 items-center justify-center px-4 md:py-24 py-4">
          {/* <div className='flex flex-col justify-items-center items-center'> */}
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.4 },
              ease: "easeInOut",
            }}
            className="font-extrabold text-MainHeading text-center"
          >
            Want to work with us?
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 20 },
              opacity: { duration: 0.4 },
              ease: "easeInOut",
            }}
            className="text-SubHeading font-bold text-center"
          >
            Elevate your business through digital transformation, driving
            sustainable growth.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.4 },
              ease: "easeInOut",
            }}
            className="text-paragraph text-gray1 pb-4 md:px-44 leading-7 text-center"
          >
            Explore limitless possibilities with Vionsys IT Solutions India Pvt.
            Ltd. Join our vibrant team where you'll engage in innovative
            projects, thrive in a collaborative atmosphere, access ongoing
            learning initiatives and chart a path for professional advancement.
            Discover the ideal environment to unleash your full potential in the
            dynamic IT industry.
          </motion.p>
          <div className="flex flex-wrap gap-7 text-center">
            <Button
              aria-label="Schedule a meeting button"
              className="text-lg text-center"
              onClick={() => setmodalopen(true)}
            >
              Schedule a meeting
            </Button>
            <Link aria-label="contact us link" href={"/contact"}>
              <Button className="text-lg text-center">Contact Us</Button>
            </Link>
          </div>
          {/* </div> */}
        </div>
      </AuroraBackground>
    </>
  );
}

export default WorkWithUs;
