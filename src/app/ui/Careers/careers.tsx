import React from "react";
import Image from "next/image";
import CareerImage from "/public/assets/career/career.jpg";
const CareerComponent = () => {
  return (
    <div className=" w-[100vw] md:h-[100vh] h-auto">
      <div className="relative w-full md:h-full h-[70vh] bg-black">
        <Image
          className="w-full h-full object-cover bg-no-repeat opacity-45"
          src={CareerImage}
          quality={70}
          alt=""
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 pt-10">
          <h1 data-aos="fade-left" className="text-4xl font-extrabold py-6">
            {" "}
            Build your career at Vionsys
          </h1>
          <p data-aos="fade-right" className="text-xl md:w-1/2 pt-2">
            Uncover boundless possibilities with Vionsys IT Solutions India Pvt.
            Ltd. Be part of a dynamic team where creativity, advancement, and
            teamwork thrive. Embark on your path towards a brighter professional
            future now.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerComponent;
