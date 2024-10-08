import CloudHero from "../../../ourservices/images/CloudComputing/CloudHero2.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroContactForm from "../HeroContactForm";

type HeroProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Hero: React.FC<HeroProps> = ({ showModal, setShowModal }) => {
  return (
    <div className="pt-16">
      <div className="relative">
        <Image
          src={CloudHero}
          alt=""
          className="object-cover w-full h-screen"
        />
      </div>
      <div className="absolute items-center left-1 h-full top-0 flex md:flex-row flex-col w-full p-2 md:p-10">
        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 20 },
            opacity: { duration: 0.4 },
            ease: "easeInOut",
          }}
          className="md:max-w-[50rem] w-full flex flex-col gap-2 space-y-3"
        >
          <h1 className="text-4xl md:text-6xl text-white max-w-[50rem] font-bold pt-[10%]">
            Cloud Computing Services
          </h1>
          <p className="md:text-4xl font-semibold text-white">
            Take Your Business to New Heights with us.
          </p>
          <div>
            <h1 className="text-white text-2xl font-semibold mb-2">
              Highlights:
            </h1>
            <ul className="list-decimal mb-2 text-white font-medium text-xl px-4">
              <li className="mb-2">
                Streamlined processes for greater efficiency
              </li>
              <li className="mb-2">Enhance customer relationships</li>
              <li className="mb-2">Optimize overall business performance</li>
            </ul>
          </div>
          <div className="flex justify-start items-center pb-3">
            <button className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff8c00_0%,#ffa500_50%,#1e90ff_100%)]"></span>
              <span
                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-7 text-sm font-medium text-[#F0F0EE] bg-blue1 backdrop-blur-3xl gap-2 undefined"
                onClick={() => {
                  setShowModal(!showModal);
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
        </motion.div>

        {/* Contact Form Component */}
        <HeroContactForm />
      </div>
    </div>
  );
};

export default Hero;
