import Image from "next/image";
import ContactUsForm from "./ContactUsForm";
import { useEffect } from "react";

type HeroProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const HeroSection: React.FC<HeroProps> = ({ showModal, setShowModal }) => {
  const heading ="Share Your Requirements"
  const message ="To help our experts understand your business objectives and create your customized plan."

  useEffect(() => {
    if (!showModal) {
      setTimeout(() => setShowModal(true), 100);
    }
  }, [])

  return (
    <section className="relative h-full min-h-screen w-full flex justify-center gap-10 py-2">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/LandingPage/SoftwareDevelopment/HeroImage.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="z-0 opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative w-full flex md:flex-row flex-col gap-10 items-center p-5 md:px-16 pt-20 md:pt-10 z-10">
        {/* Left side - Hero content */}
        <div className="lg:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Custom Software
          </h1>
          <p className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Development Services
          </p>
          <p className="text-white text-base mb-10 max-w-2xl">
            Elevate your business with robust custom software services, designed
            to unleash innovation and drive unparalleled growth.
          </p>
          <button
            className="font-sans py-2 flex justify-center gap-2 items-center shadow-xl text-sm bg-blue-600 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-orange text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-3 overflow-hidden border-2 rounded-full group my-[6px] uppercase"
            onClick={() => {
              setShowModal(!showModal);
            }}
          >
            Get in Touch
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

          {/* Logos Section */}
          <div className="mt-16 flex flex-wrap items-center gap-10">
            <div className="flex pr-6 flex-col border-r border-gray-500">
              <Image
                src="/placeholder.svg?height=80&width=150"
                alt="Deloitte"
                width={150}
                height={40}
                className="mb-2"
              />
              <span className="text-green-400 text-lg font-bold">50</span>
              <span className="text-white text-sm">Technology Fast 50</span>
            </div>
            <div className="flex flex-col pr-6 border-r border-gray-500">
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="Statista"
                width={120}
                height={40}
                className="mb-2"
              />
              <span className="text-white text-sm">India&apos;s Growth</span>
              <span className="text-white text-sm">Champions in IT</span>
            </div>
            <div className="flex flex-col">
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="Entrepreneur"
                width={120}
                height={40}
                className="mb-2"
              />
              <span className="text-white text-sm">App Development</span>
              <span className="text-white text-sm">Company Of The Year</span>
            </div>
          </div>
        </div>

        {/* Right side - Contact form */}
        <ContactUsForm heading={heading} message={message} title={"Software Development Landing page"}/>
      </div>
    </section>
  );
};

export default HeroSection;
