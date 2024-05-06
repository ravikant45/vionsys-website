"use client";
import React from "react";
import Image from "next/image";
const About2 = () => {
  return (
    <div className="flex flex-col flex-wrap overflow-x-hidden">
      <div className="w-screen flex justify-center items-center px-2 py-4 " >
        <div className="h-auto py-2 flex flex-col  gap-4 justify-center items-center bg-cover bg-dot-zinc-400">
          <h1 data-aos="fade-right"
            className="text-MainHeading font-extrabold text-center">
            Crafting Solutions For{" "}
            <span className="text-orange">Global Innovators.</span>
          </h1>
          <p
            data-aos="fade-left"
            className="px-4 font-medium "
          >
            We are a leading IT company providing comprehensive solutions, ranging from software development and cloud services to cybersecurity and IT consulting. Our wide range of expertise is delivered by an experienced team that offers tailored solutions, ensuring efficiency, reliability, and scalability to help businesses thrive in the digital era.
          </p>
        </div>
      </div>

      <div className="w-screen h-[40] flex justify-center items-center border-t-8 border-b-8  border-text[#e57e2c]-500 rounded-3xl">
        <div className="w-screen flex md:flex-row flex-col justify-center items-center px-5 gap-2" >
          <h1
            data-aos="fade-right"
            className="pt-6 text-paragraph"
          >
            At our core, we've been driven by a clear objective: supporting
            entrepreneurs in bringing meaningful software solutions to life. Our
            dedication lies in creating and launching products that serve and
            benefit people, driving positive change for a better world, and that
            includes our own. With a steadfast commitment to innovation and
            collaboration, we strive to push the boundaries of technology to
            address global challenges and empower individuals and businesses
            alike. We believe that by harnessing the transformative power of
            technology, we can pave the way for a more inclusive, sustainable,
            and prosperous future for all.
          </h1>
          <Image
            data-aos="fade-down"
            className="py-2"
            src="/Corevalue.jpg"
            alt="Image not Found"
            height={500}
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default About2;
