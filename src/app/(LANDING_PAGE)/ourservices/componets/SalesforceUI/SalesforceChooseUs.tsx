"use client";

import { motion } from "framer-motion";
import { LuCheckCircle, LuPencilRuler, LuCog, LuPhone } from "react-icons/lu";

const features = [
  {
    icon: <LuCheckCircle className="w-8 h-8" />,
    title: "Skilled Professionals",
    description:
      "We are working professionals who have dignified experience in their own field of interest. Our Salesforce Consulting Companies In USA, Middle East understand the most basic to the advanced needs of the clients.",
  },
  {
    icon: <LuPencilRuler className="w-8 h-8" />,
    title: "Expertise Built Over Years",
    description:
      "We’ve successfully served clients worldwide. We have not left even a single client unsatisfied or being in doubt. We have helped a vast range of clients, and they have rated our services with the best reviews.",
  },
  {
    icon: <LuCog className="w-8 h-8" />,
    title: "Affordable Partner",
    description:
      "Our services stand out as some of the best among Salesforce consulting companies in the USA and the Middle East. We charge fee that will easily affordable and much less then what others are charging.",
  },
  {
    icon: <LuPhone className="w-8 h-8" />,
    title: "Guaranteed Satisfaction",
    description:
      "We deliver Salesforce Consulting services that are both on-time and cost-efficient, with results that matter; we focus on making our clients reach the maximum possible extent of service satisfaction.",
  },
  {
    icon: <LuCog className="w-8 h-8" />,
    title: "Services You Trust",
    description:
      "We believe in delivering on our promises, not making empty ones. We are genuinely serving the businesses with our world-class Salesforce Consulting Services for the last few years.",
  },
  {
    icon: <LuCog className="w-8 h-8" />,
    title: "Premium Quality Services",
    description:
      "No matter where you are, we challenge you to find a service provider that matches the quality we deliver. We don’t just claim to offer 'Premium Quality Services'—we’ve proven it.",
  },
];

const SalesforceChooseUs = () => {
  return (
    <section className="p-6 md:px-16 bg-black text-white ">
      <div className="max-w-4xl mx-auto text-center mb-5">
        <h2 className="text-3xl font-semibold text-white pb-2 inline-block">
          Why Choose Us?
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-6 rounded-2xl bg-dot-slate-500 border border-stone-800">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="p-6 bg-black shadow-lg rounded-lg border border-gray-700 w-[340px] text-center flex flex-col items-center"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SalesforceChooseUs;
