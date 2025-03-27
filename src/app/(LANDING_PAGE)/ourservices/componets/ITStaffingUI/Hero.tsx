/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import HeroContactForm from "../HeroContactForm";

type HeroProps = {
  enquiryModal: boolean;
  setEnquiryModal: (show: boolean) => void;
};

const Hero: React.FC<HeroProps> = ({ enquiryModal, setEnquiryModal }) => {
  const Staffingheading = "Get the Right IT Talent for Your Projects!";
  return (
    <>
      <section
        id="gradient"
        className="relative h-full flex items-center justify-center"
      >
        {/* Content */}
        <div className="relative z-10 container pt-16 mx-auto px-8 flex flex-col md:flex-row items-center justify-around">
          {/* Left Side: Title, Subheading, and Description */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 20 },
                opacity: { duration: 0.4 },
                ease: "easeInOut",
              }}
              className="text-3xl text-blue2 md:text-6xl font-bold mb-4"
            >
              Need an Employee?
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.4 },
                ease: "easeInOut",
              }}
              className="text-2xl text-SubHeading md:text-3xl font-semibold mb-4"
            >
              Hire Top Talents With Our IT Staffing Services
            </motion.h2>
            <p className="text-lg text-slate-600 mb-6">
              If you're seeking talented employees, we’re excited to collaborate
              and discuss how we can work together and bring value to our
              respective organizations.
            </p>
            <div>
              <button className="relative hover:scale-105 ease-in-out duration-500 inline-flex h-14 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
                <span className="absolute hover:scale-125 ease-in-out duration-500 inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff8c00_0%,#ffa500_50%,#1e90ff_100%)]"></span>
                <span
                  className="inline-flex  h-full w-full cursor-pointer items-center justify-center rounded-lg px-7 text-md font-medium bg-[#F0F0EE] text-blue1 backdrop-blur-3xl gap-2 undefined"
                  onClick={() => {
                    setEnquiryModal(!enquiryModal);
                  }}
                >
                  Get in Touch with Our Experts Today
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <HeroContactForm
            title={"IT Staffing Landing Page"}
            heading={Staffingheading}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
