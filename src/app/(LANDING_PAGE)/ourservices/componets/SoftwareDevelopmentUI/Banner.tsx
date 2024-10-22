import React from "react";
import banner from "../../images/SoftwareDevelopment/banner.jpg";
import { motion } from "framer-motion";

interface PopUpProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const Banner: React.FC<PopUpProps> = ({ showModal, setShowModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.2,
        scale: { type: "spring", stiffness: 30 },
        opacity: { duration: 0.6 },
        ease: "easeInOut",
      }}
      className="md:h-[60vh] md:w-screen md:px-8 flex items-center justify-center "
    >
      <div
        className="md:h-[80%] md:w-[95%] bg-cover flex md:space-y-6 space-y-4 py-3 justify-center items-start flex-col bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url(${banner.src})`,
        }}
      >
        <h3 className="md:text-4xl text-white font-bold px-6">
          Collaborate on Your Vision!
        </h3>
        <p className="text-lg text-slate-100 px-6">
          Share your vision with us, and let’s work together toward achieving
          your goals.
        </p>
        <div className="px-6">



          <button
            onClick={() => setShowModal(true)}
            className=" block w-full relative p-1 text-white animate-bounce px-4 rounded-md bg-blue2  isolation-auto z-10
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-blue2 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 font-semibold"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
