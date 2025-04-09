"use client";

import { motion } from "framer-motion";
import { LuCheckCircle, LuPencilRuler, LuCog, LuPhone } from "react-icons/lu";

const features = [
  {
    icon: <LuCheckCircle className="w-8 h-8" />,
    title: "Tailored Solutions",
    description:
      "We customize Salesforce to fit your unique business needs, ensuring it aligns perfectly with your processes, whether its sales, marketing or customer support.",
  },
  {
    icon: <LuPencilRuler className="w-8 h-8" />,
    title: "Improved Efficiency",
    description:
      "Our Salesforce services streamline your operations by automating workflows, enabling your team to focus on what matters most—building relationships and closing deals.",
  },
  {
    icon: <LuCog className="w-8 h-8" />,
    title: "Scalability",
    description:
      "As your business grows, Salesforce grows with you. We implement scalable solutions that can adapt to changing market demands and business objectives.",
  },
  {
    icon: <LuPhone className="w-8 h-8" />,
    title: "Expert Integration",
    description:
      "Our team ensures seamless integration of Salesforce with your existing systems, allowing you to leverage all your business data for smarter decision-making.",
  },
  {
    icon: <LuCog className="w-8 h-8" />,
    title: "Enhanced Customer Experience",
    description:
      "With personalized customer insights, you can offer better support, resolve issues faster, and deliver a more engaging, customer-centric experience.",
  },
  {
    icon: <LuCog className="w-8 h-8" />,
    title: "Ongoing Support and Training",
    description:
      "We provide continuous support and training, empowering your team to make the most of Salesforces robust capabilities.",
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
            className="p-6 bg-black shadow-lg rounded-lg border border-gray-700 w-80 text-center flex flex-col items-center"
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
