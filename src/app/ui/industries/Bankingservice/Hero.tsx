import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="pt-10 px-2 md:h-[80vh] sm:py-16 md:py-24 flex items-center justify-center bg-gray-100">
        <div className="mx-auto max-w-4xl text-center py-5">
          {/* <p className="text-lg font-medium leading-8 text-gray-500">Innovative IT Solutions</p> */}
          <h1 data-aos="fade-left" data-aos-duration="1000" className="text-3xl sm:text-4xl md:text-5xl py-5 lg:text-5xl font-bold leading-10 tracking-tight text-black">
            Transforming the Future of{" "}
            <span className="text-amber-600">Banking</span>
          </h1>
          <p data-aos="fade-right" data-aos-duration="1000" className="text-paragraph md:text-lg leading-relaxed px-4 py-4">
            The banking industry is at the forefront of technological
            innovation, it needs robust, secure and scalable IT infrastructure
            to meet today’s banking requirements Vionsys IT Solutions India Pvt
            Ltd specializes in comprehensive IT services tailored to the
            specific needs of banks, improving operational efficiency,
            regulatory -Helps them ensure compliance, and deliver a great
            customer experience.
          </p>
          {/* <div className="mt-6 flex items-center justify-center gap-4">
            <Link
              href={"#Learnmore"}
              aria-label=""
              className="rounded-md bg-amber-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Learn More
            </Link>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
