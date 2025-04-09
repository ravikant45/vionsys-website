"use client";

import ContactUsForm from "../software-development/ContactUsForm";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

type HeroSalesforceProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Hero: React.FC<HeroSalesforceProps> = ({ showModal, setShowModal }) => {
  const router = useRouter();
  const heading = "Share Your Requirements";
  const message =
    "To help our experts understand your business objectives and create your customized plan.";

  useEffect(() => {
    if (!showModal) {
      setTimeout(() => setShowModal(true), 100);
    }
  }, []);

  return (
    <section className="relative h-full min-h-screen w-full flex justify-center gap-10 py-2">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/LandingPage/Salesforce/salesforce1.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="z-0 opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent"></div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative max-w-7xl flex md:flex-row flex-col gap-10 items-center p-5 md:px-16 pt-20 md:pt-10 z-10">
        {/* Left side - Hero content */}
        <div className="lg:w-2/3">
          <h1 className="text-4xl mt-4 md:text-5xl font-bold text-white leading-tight mb-4">
            Hire Our Skilled Salesforce
          </h1>
          <p className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Developer On A Contract Basis
          </p>
          {/* <p className="text-white text-base mb-10 max-w-2xl">
            Tagline: Flexible, Skilled, and Ready – Contract-Based Salesforce Developers!
            </p> */}

          <div className="flex mt-10 flex-row gap-4 items-center">
            <button
              className="font-sans py-2 flex justify-center gap-2 items-center shadow-xl text-sm bg-blue-600 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-orange text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-3 overflow-hidden border-2 rounded-full group my-[6px] uppercase"
              onClick={() => {
                setShowModal(!showModal);
              }}
            >
              CONTACT US
              <svg
                className="w-8 h-8 justify-end group-hover:rotate-90 bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-gray-800 group-hover:fill-gray-800"
                ></path>
              </svg>
            </button>

            <span className="text-gray-500 text-base font-semibold flex flex-col items-center">
              <span className="border-l border-gray-400 h-4" />
              or
              <span className="border-l border-gray-400 h-4" />
            </span>

            <button
              onClick={() => {
                router.push(
                  "https://calendly.com/vionsysit/30min?back=1&month=2025-01"
                );
              }}
              className="text-gray-300 hover:text-white underline text-base font-semibold"
            >
              Book A Call
            </button>
          </div>

          {/* Logos Section */}
          <div className="mt-12 flex flex-col flex-wrap gap-5">
            <div className="flex pl-2 flex-col border-l-2 border-blue-500">
              <span className="text-white text-sm">
                Expertise in Advanced Salesforce Tools & Technologies
              </span>
            </div>
            <div className="flex pl-2 flex-col border-l-2 border-blue-500">
              <span className="text-white text-sm">
                Flexible Contracts & Transparent Pricing
              </span>
            </div>
          </div>
        </div>

        {/* Right side - Contact form */}
        <ContactUsForm
          heading={heading}
          message={message}
          title={"Salesforce Landing page"}
        />
      </div>
    </section>
  );
};

export default Hero;
