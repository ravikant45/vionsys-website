import Image from "next/image";
import React from "react";
import ITHero from "@/../public/assets/industries/ITDigital/ITHero.jpg"

const Hero = () => {
  return (
    <>
      <div className="relative h-full md:h-[100vh] w-full overflow-hidden bg-black">
        <Image
          alt="Hero Image"
          className="md:h-full h-[40vh] w-full object-fit opacity-35"
          height={1080}
          src={ITHero}
          style={{
            aspectRatio: "1920/1080",
            objectFit: "cover",
          }}
          width={1920}
        />
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center px-4 text-center text-white">
          <h1
            data-aos="fade-left"
            data-aos-duration="500"
            className="text-2xl font-bold tracking-tight sm:text-5xl md:text-6xl mt-6"
          >
            IT Digital Transformation
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
