import React from "react";
import Image from "next/image";
import SoftwareTestingImage from "/public/assets/services/Testing/software-testing-banner.png";

const Hero = () => {
  return (
    <div>
      <section className="w-[100vw] md:h-[100vh] h-[60vh] ">
        <div className="relative w-full h-full flex justify-start items-center">
          <Image
            src={SoftwareTestingImage}
            alt=""
            className="w-full h-full z-0"
          />
          <div className="bg-transparent z-10 text-white absolute top-0  h-full flex flex-col justify-center items-start w-full px-4">
            <div className="md:w-[50%] w-full flex flex-col gap-2 p-2">
              <h4
                data-aos="fade-left"
                className="md:text-5xl text-xl font-extrabold text-orange "
              >
                Ensuring Software Stability Through Rigorous Testing
              </h4>
              <p data-aos="fade-right" className="md:text-lg text-sm py-4">
                We redefine software testing and quality assurance with a
                tailored approach that merges innovation and expertise. With a
                relentless pursuit of perfection, we meticulously assess, refine
                and optimize your software, ensuring robustness, security and
                exceptional performance. Trust us to elevate your software to
                new heights of reliability and user satisfaction, empowering
                your business for success in today's dynamic digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
