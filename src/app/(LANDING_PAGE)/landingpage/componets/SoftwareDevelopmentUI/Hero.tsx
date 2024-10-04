/* eslint-disable react/no-unescaped-entities */
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { motion } from "framer-motion";
import sdHero1 from "../../images/SoftwareDevelopment/sdHero1.jpg";
import sdHero2 from "../../images/SoftwareDevelopment/sdHero2.jpg";
import sdHero3 from "../../images/SoftwareDevelopment/sdHero3.jpg";
import HeroContactForm from "../HeroContactForm";

type HeroProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Hero: React.FC<HeroProps> = ({ showModal, setShowModal }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <section className="relative h-full md:w-[100vw]">
      {/* Embla Carousel */}
      <div className="embla w-full h-full absolute top-0 left-0" ref={emblaRef}>
        <div className="embla__container w-full h-full">
          {/* Slide 1 */}
          <div className="embla__slide w-full h-full relative">
            <Image
              src={sdHero1}
              alt="carousel image 1"
              className="absolute w-full h-full object-cover"
              quality={100}
            />
            {/* Dark overlay */}
            <div className="absolute w-full h-full bg-black opacity-50"></div>
          </div>
          {/* Slide 2 */}
          <div className="embla__slide w-full h-full relative">
            <Image
              src={sdHero2}
              alt="carousel image 2"
              className="absolute w-full h-full object-cover"
              quality={100}
            />
            {/* Dark overlay */}
            <div className="absolute w-full h-full bg-black opacity-50"></div>
          </div>
          {/* Slide 3 */}
          <div className="embla__slide w-full h-full relative">
            <Image
              src={sdHero3}
              alt="carousel image 3"
              className="absolute w-full h-full object-cover"
              quality={100}
            />
            {/* Dark overlay */}
            <div className="absolute w-full h-full bg-black opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Static Text and Contact Form */}
      <div className="relative z-10 flex md:flex-row flex-col items-center justify-between w-full h-full md:px-6 px-4 py-10">
        {/* Left Side*/}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          className="flex flex-col justify-center h-full md:w-1/2 pt-10 space-y-6"
        >
          <h2 className="md:text-6xl  text-3xl font-extrabold capitalize text-white">
            <span className="text-orange">C</span>ustom{" "}
            <span className="text-orange">S</span>oftware <br />
            <span className="text-orange">D</span>evelopment{" "}
            <span className="text-orange">S</span>ervices
          </h2>
          <p className="md:text-3xl text-lg font-bold text-white">
            Comprehensive IT Solutions for Today's Challenges
          </p>
          <div className="flex flex-col space-y-1">
            <p className="md:text-md text-md  text-slate-100">
              1. We specialize in custom web, app, and software development that
              fuels your business growth.
            </p>
            <p className="md:text-md text-md  text-slate-100">
              2. We would be happy to hear from you, Please fill out the form
              below or send your requirements to us here- info@vionsys.com.
            </p>
          </div>
          <div className="pb-4 md:pb-0">
            <button className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff8c00_0%,#ffa500_50%,#1e90ff_100%)]"></span>
              <span
                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-7 text-sm font-medium bg-blue1 text-white backdrop-blur-3xl gap-2 undefined"
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

        {/* Contact Form */}
        <HeroContactForm />
      </div>
    </section>
  );
};

export default Hero;
