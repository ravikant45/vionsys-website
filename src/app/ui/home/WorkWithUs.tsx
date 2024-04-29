import React, { useState } from "react";
import { Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { Modal } from "antd";

function WorkWithUs() {
  const [modalopen, setmodalopen] = useState(false);
  const handlecancle = () => {
    setmodalopen(false);
  };
  return (
    <>
      <Modal open={modalopen} onCancel={handlecancle} footer={null}>
        <Suspense fallback={"Loading..."}>
          <iframe
            className="overflow-hidden"
            src="https://calendly.com/worksagar20/vionsysservices"
            height={600}
            width="100%"
          ></iframe>
        </Suspense>
      </Modal>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 md:py-24 py-4"
        >
          {/* <div className='flex flex-col justify-items-center items-center'> */}
          <h4 className="underline font-bold md:text-xl text-xl text-orange">
            Want to work with us?
          </h4>
          <h5 className="text-lg text-black font-semibold">
            Elevate your business through digital transformation, driving
            sustainable growth.
          </h5>
          <div className="text-sm text-gray1 pb-4 md:px-44 leading-7 text-center">
            Explore limitless possibilities with Vionsys IT Solutions INDIA Pvt.
            Ltd. Join our vibrant team where you'll engage in innovative
            projects, thrive in a collaborative atmosphere, access ongoing
            learning initiatives, and chart a path for professional advancement.
            Discover the ideal environment to unleash your full potential in the
            dynamic IT industry.
          </div>
          <div className="flex flex-wrap gap-7 text-center">
            <Button onClick={() => setmodalopen(true)}>
              Schedule a meeting
            </Button>
            <Link href={"/contact"}>
              <Button>Contact Us</Button>
            </Link>
          </div>
          {/* </div> */}
        </motion.div>
      </AuroraBackground>
    </>
  );
}

export default WorkWithUs;
