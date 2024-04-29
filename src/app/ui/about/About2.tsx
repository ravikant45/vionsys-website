"use client";
import React from "react";
import Image from "next/image";

const About2 = () => {
  return (
    <div className="flex flex-col flex-wrap">
      <div className="w-screen lg:h-[40] flex justify-center items-center px-2 py-4 " >
        <div
          className="rounded-2xl shadow-xl lg:h-[300px] h-auto w-[1300px]  py-2 flex flex-col lg:flex-wrap lg:justify-center lg:items-center gap-10 bg-cover overflow-hidden"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/glowing-geometric-shapes-vibrant-colors-ly-reflect-generated-by-ai_188544-41203.jpg?t=st=1714050034~exp=1714053634~hmac=2dd69bad17e644f7c3204152d77955ea5e297fe158e44466146d852e25be97c0&w=1060 ')",
          }}
        >
          <h1
            data-aos="fade-right"
            className="text-white lg:h-[100px] h-auto lg:w-[550px] w-auto lg:text-4xl text-2xl font-bold text-center"
          >
            Crafting Solutions For{" "}
            <span className="text-white ">Global Innovators.</span>
          </h1>
          <p
            data-aos="fade-left"
            className="lg:h-[200px]  h-auto lg:w-[600px] w-auto  px-4 lg:text-lg text-sm font-medium text-white "
          >
            Vionsys IT solutions INDIA Pvt. Ltd. is a leading IT company
            providing comprehensive solutions. From software development and
            cloud services to cybersecurity and IT consulting, we offer a wide
            range of expertise. Our experienced team delivers tailored
            solutions, ensuring efficiency, reliability, and scalability, to
            help businesses thrive in the digital era.
          </p>
        </div>
      </div>

      <div className="w-screen h-[40] flex lg:flex lg:justify-center flex-col items-center  py-2">
        <div  className="w-screen flex flex-wrap justify-around items-start px-4 " >
          <h1
            data-aos="fade-right"
            className="lg:px-4 h-auto lg:h-[360px] w-[600px] lg:text-lg text-sm font-normal text-gray1"
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
            className="relative  lg:w-[20%] p-1 lg:right-32 lg:bottom-1"
            src="/aboutImg1.jpg"
            alt="Image not Found"
            height={200}
            width={200}
          />
        </div>
      </div>
    </div>
  );
};

export default About2;
