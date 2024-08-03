import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-800 h-[60vh] md:h-[100vh]">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width="200"
              height="200"
              x="100%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth="0"
            ></path>
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          ></rect>
        </svg>
        <div
          className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          ></div>
        </div>
        <div className="py-10 flex md:h-screen h-full items-center justify-center">
          <div className="max-w-full flex-shrink-0 px-4 text-center lg:max-w-4xl lg:py-8 pt-10">
            <h1
              data-aos="fade-left"
              data-aos-duration="600"
              className="md:text-5xl text-3xl font-bold tracking-tight text-white"
            >
              Revolutionize
              <span className="text-sky-500"> Professional Services</span> With
              <span className="text-amber-500"> Vionsys</span>
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="600"
              className="py-6 md:text-lg text-sm leading-6 text-gray-300"
            >
              In an increasingly competitive business environment, businesses
              need expert advice and personalized solutions to tackle complex
              obstacles and achieve their strategic goals. Vionsys IT Solutions
              India Pvt Ltd offers a wide range of professional services that
              provide businesses with the insights, knowledge, and tools they
              need to succeed. Our professional services include advice,
              installation, and support for a variety of businesses and
              industries.
            </p>
            {/* <div className="flex items-center justify-center gap-x-6">
              <Link
                href="#"
                className="rounded-md bg-amber-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                rel="noreferrer"
              >
                Learn More
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
