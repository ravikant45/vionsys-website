import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="relative h-full md:h-[100vh] w-full overflow-hidden bg-black">
        <Image
          alt="Hero Image"
          className="md:h-full h-[40vh] w-full object-fit opacity-45"
          height={1080}
          src={"/assets/industries/ITDigital/ITHero.jpg"}
          style={{
            aspectRatio: "1920/1080",
            objectFit: "cover",
          }}
          width={1920}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h1
            data-aos="fade-left"
            data-aos-duration="500"
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            IT Digital Transformation
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;