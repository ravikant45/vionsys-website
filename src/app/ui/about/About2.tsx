"use client";
import React from "react";
import Image from "next/image";

const About2 = () => {
  return (
    <div className="flex flex-col flex-wrap">
      <div className="w-screen lg:h-[40] flex justify-center items-center px-2 py-4 " >
        <div
          className="rounded-2xl bg-black shadow-xl lg:h-[300px] h-auto w-[1300px]  py-2 flex flex-col lg:flex-wrap lg:justify-center lg:items-center gap-10 bg-cover overflow-hidden"
          style={{
            
            backgroundImage:
              "url('https://img.freepik.com/free-photo/conference-room-with-desk-wall-windows-that-says-office_1340-37385.jpg?t=st=1714821147~exp=1714824747~hmac=4aca4652589e46e4152c7c54e6a110f6013359caaddb39999bf663ccecad2b81&w=900')",
           }}
        >
          <h1
            data-aos="fade-right"
            className="text-[#e57e2c] lg:h-[100px] h-auto lg:w-[550px] w-auto lg:text-4xl text-2xl font-bold text-center"
          >
            Crafting Solutions For{" "}
            <span className=" text-[#e57e2c]">Global Innovators.</span>
          </h1>
          <p
            data-aos="fade-left"
            className="lg:h-[200px]  h-auto lg:w-[600px] w-auto font-bold  px-4 lg:text-lg text-sm  text-white "
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

      <div className="w-screen h-[40] flex lg:flex lg:justify-center flex-col items-center  border-t-8 border-b-8  border-text[#e57e2c]-500 rounded-3xl">
        <div  className="w-screen flex flex-wrap justify-around items-start px-5" >
          <h1
            data-aos="fade-right"
            className=" pt-6 lg:px-4 h-auto lg:h-[360px] w-[600px] lg:text-lg text-sm font-normal text-gray1"
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
            className="relative  lg:w-[30%] mt-5 py-2 lg:bottom-1"
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
