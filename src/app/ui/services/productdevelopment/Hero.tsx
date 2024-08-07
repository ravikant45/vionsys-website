import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div>
      <section>
        <div className="relative h-full w-full overflow-hidden bg-black">
          <Image
            alt="Hero Image"
            className="md:h-full h-[40vh] w-full object-cover opacity-45"
            height={1080}
            src={"/assets/services/ProductDevelopment/Main.jpg"}
            style={{
              aspectRatio: "1920/1080",
              objectFit: "cover",
            }}
            width={1920}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 px-4 text-center text-white">
            <h1
              data-aos="fade-left"
              data-aos-duration="500"
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            >
              Product Development
            </h1>
            <p
              data-aos="fade-left"
              data-aos-duration="500"
              className="max-w-xl text-lg md:text-xl"
            >
              At Vionsys IT Solutions India Pvt Ltd, we offer comprehensive
              services to help your business succeed. Our expertise spans the
              entire product life cycle, ensuring your product meets market
              demand and exceeds customer expectations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
