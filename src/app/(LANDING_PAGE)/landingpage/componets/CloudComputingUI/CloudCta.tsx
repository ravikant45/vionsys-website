import React from "react";
import { motion } from "framer-motion";

const CloudCta = () => {
  return (
      <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 40 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }} className="relative bg-white py-12 px-8 text-center rounded-lg overflow-hidden shadow-md">
        <div className="absolute inset-0 bg-blue-600 transform -skew-y-3"></div>
        <div className="relative z-10 text-white">
          <h2 className="text-4xl font-bold mb-4">
            Scale Your Business with Cloud Solutions
          </h2>
          <p className="text-lg mb-6">
            Unlock the potential of cloud computing to optimize your
            infrastructure and reduce costs.
          </p>
          <button className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg transition">
            Start Your Cloud Journey
          </button>
        </div>
    </motion.div>
  );
};

export default CloudCta;
