"use client";
import { Button } from "@/components/ui/button";
import { Modal } from "antd";
import Link from "next/link";
import React, { Suspense, useState } from "react";
import { motion } from "framer-motion";
const ScheduleMeetAndContactCTA: React.FC = () => {
  const [modalopen, setmodalopen] = useState(false);
  const handlecancle = () => {
    setmodalopen(false);
  };

  // Get the environment variable value

  return (
    <>
      <Modal open={modalopen} onCancel={handlecancle} footer={null}>
        <Suspense fallback={"Loading..."}>
          <iframe
            className="overflow-hidden"
            src="https://calendly.com/hr--eppa/30min"
            height={600}
            width="100%"
          ></iframe>
        </Suspense>
      </Modal>

      <section className="w-[100vw] overflow-x-hidden">
        {/* Final section contact us and schedule a meeting */}
        <div className="flex justify-center items-center py-4">
          <div className="flex flex-col justify-center items-center gap-4 md:px-8 px-2 py-4 md:w-[70%]">
            <motion.h4
              initial={{ opacity: 0, scale: 1.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="text-2xl text-blue1 font-bold text-center"
            >
              Excited about the prospect of collaborating? Share your ideas and
              let's work together to create something truly remarkable!
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.4 },
                ease: "easeInOut",
              }}
              className="flex md:gap-4 gap-2 justify-center items-center flex-wrap"
            >
              <Button onClick={() => setmodalopen(true)}>
                Schedule a meeting
              </Button>
              <Link href="/contact">
                <Button>Contact us</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScheduleMeetAndContactCTA;
