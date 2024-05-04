"use client";
import { Button } from "@/components/ui/button";
import { Modal } from "antd";
import Link from "next/link";
import React, { Suspense, useState } from "react";

const ScheduleMeetAndContactCTA: React.FC = () => {
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

      <section className="w-[100vw] overflow-x-hidden">
        {/* Final section contact us and schedule a meeting */}
        <div className="flex justify-center items-center py-4">
          <div className="flex flex-col justify-center items-center gap-4 md:px-8 px-2 py-4 md:w-[70%]">
            <h4
              data-aos="zoom-out"
              className="text-2xl text-blue1 font-bold text-center"
            >
              Excited about the prospect of collaborating? Share your ideas, and
              let's work together to create something truly remarkable!
            </h4>
            <div className="flex gap-4 flex-wrap">
              <Button data-aos="fade-right" onClick={() => setmodalopen(true)}>
                Schedule a meeting
              </Button>
              <Link href="/contact">
                <Button data-aos="fade-left">Contact us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScheduleMeetAndContactCTA;
