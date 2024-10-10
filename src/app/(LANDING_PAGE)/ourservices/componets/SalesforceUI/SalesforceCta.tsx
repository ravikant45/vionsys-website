import React from "react";
import { motion } from "framer-motion";

type HeroSalesforceCtaProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const SalesforceCta: React.FC<HeroSalesforceCtaProps> = ({ showModal, setShowModal }) => {
  return (
      <motion.section initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 40 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }} className="container mx-auto my-5 py-5 lg:px-0 bg-gray-200 rounded-lg text-center">
        <h3 className="text-3xl font-extrabold">Ready to grow your business?</h3>
        <p className="mt-8 text-xl font-light">
        Take your business to the next level with our cutting-edge IT solutions.
        </p>
        <p className="mt-8">
          <button onClick={() => {
                  setShowModal(!showModal);
                }} className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff8c00_0%,#ffa500_50%,#1e90ff_100%)]"></span>
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-7 text-sm font-medium bg-[#F0F0EE] text-blue1 backdrop-blur-3xl gap-2 undefined">
              Get Started Now
            </span>
          </button>
        </p>
      </motion.section>
  );
};

export default SalesforceCta;
