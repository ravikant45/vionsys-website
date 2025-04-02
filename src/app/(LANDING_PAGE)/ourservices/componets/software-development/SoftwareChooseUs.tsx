"use client";
import React from "react";
import { motion } from "framer-motion";

function SoftwareChooseUs() {
  const features = [
    {
      title: "Skilled & Experienced Team",
      description:
        "Our team of seasoned professionals brings deep expertise and innovative solutions to every project, ensuring exceptional results tailored to your business needs.",
    },
    {
      title: "Quality Assurance",
      description:
        "We ensure top-tier quality through rigorous testing and attention to detail, delivering reliable and high-performing solutions that meet the highest industry standards.",
    },
    {
      title: "Client-Centric Process",
      description:
        "Rest assured with our dedicated support team available round the clock to assist you whenever you need it, ensuring minimal downtime and maximum productivity.",
    },
    {
      title: "Innovative Technology",
      description:
        "Stay ahead of the curve with our utilization of the latest cloud technologies, guaranteeing that your business remains competitive and adaptable.",
    },
    {
      title: "Cutting-Edge Technologies",
      description:
        "we constantly update our skills and stay abreast of the latest trends and technologies in software development.",
    },
    {
      title: "On-Time Delivery",
      description:
        "Our agile development methodology allows us to adapt to changing requirements and deliver incremental updates regularly.",
    },
  ];

  return (
    <section className="p-6 md:p-16 bg-black text-white ">
      <div className="max-w-4xl mx-auto text-center mb-5">
        <h2
          className="text-3xl font-semibold text-white pb-2 inline-block"
        >
          Why Choose Us?
        </h2>
        <p className="text-white font-light text-lg mt-2">
          We are committed to delivering innovative, high-quality, and cost-effective solutions that help businesses grow and succeed.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-6 rounded-2xl bg-dot-slate-500 border border-stone-800">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="p-6 bg-black shadow-lg rounded-lg border border-gray-700 w-80 text-center flex flex-col items-center"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SoftwareChooseUs;
