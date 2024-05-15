import React, { useState } from "react";
import { Suspense } from "react";
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
            src="https://calendly.com/hr--eppa/30min"
            height={600}
            width="100%"
          ></iframe>
        </Suspense>
      </Modal>
      <AuroraBackground>
        <div className="relative flex flex-col gap-4 items-center justify-center px-4 md:py-24 py-4">
          {/* <div className='flex flex-col justify-items-center items-center'> */}
          <h4 data-aos="fade-left" className="font-extrabold text-MainHeading">
            Want to work with us?
          </h4>
          <h5 data-aos="fade-right" className="text-SubHeading font-bold">
            Elevate your business through digital transformation, driving
            sustainable growth.
          </h5>
          <div data-aos="fade-left" className="text-paragraph text-gray1 pb-4 md:px-44 leading-7 text-center">
            Explore limitless possibilities with Vionsys IT Solutions India Pvt.
            Ltd. Join our vibrant team where you'll engage in innovative
            projects, thrive in a collaborative atmosphere, access ongoing
            learning initiatives, and chart a path for professional advancement.
            Discover the ideal environment to unleash your full potential in the
            dynamic IT industry.
          </div>
          <div className="flex flex-wrap gap-7 text-center">
            <Button className="text-lg" data-aos="fade-right" data-aos-duration="500" onClick={() => setmodalopen(true)}>
              Schedule a meeting
            </Button>
            <Link href={"/contact"}>
              <Button className="text-lg" data-aos="fade-left" data-aos-duration="500">Contact Us</Button>
            </Link>
          </div>
          {/* </div> */}
        </div>
      </AuroraBackground>
    </>
  );
}

export default WorkWithUs;
