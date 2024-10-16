/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic Plan",
    price: "₹24,999",
    description: "Inexpensive website solution for small businesses",
    features: [
      "Basic Project Tools",
      "Up to 5 Website Pages",
      "10 GB Storage",
      "Access to Basic Templates",
      "Standard Support",
      "Email Support",
      "SEO Basics Package",
      "Monthly Performance Report",
      "1 Year of Free Website Hosting",
    ],
    buttonText: "Buy Now",
    buttonLink: "/auth/login",
    buttonStyle: "bg-blue-500 text-white hover:bg-blue-600",
    mostPopular: false,
    textColor: "text-[#2563eb]", // Basic Plan text color
  },
  {
    name: "Advanced Plan",
    price: "₹49,999",
    description: "Comprehensive website package for growing businesses",
    features: [
      "Advanced Project Tools",
      "Up to 10 Website Pages",
      "50 GB Storage",
      "Custom Domain Integration",
      "Priority Support",
      "Access to Premium Templates",
      "SEO Advanced Package",
      "Bi-weekly Performance Report",
      "1 Year of Free Website Hosting",
      "Social Media Integration",
      "Basic E-commerce Features",
    ],
    buttonText: "Buy Now",
    buttonLink: "/auth/login",
    buttonStyle: "bg-green-500 text-white hover:bg-green-600",
    mostPopular: true,
    textColor: "text-[#16A34A]", // Advanced Plan text color
  },
  {
    name: "Enterprise Plan",
    price: "₹74,999",
    description: "Complete website solution for enterprises",

    features: [
      "Comprehensive Project Suite",
      "Up to 20 Website Pages",
      "100 GB Storage",
      "Advanced Security Features",
      "Dedicated Support",
      "Custom Software Development Tools",
      "SEO Premium Package",
      "Weekly Performance Report",
      "1 Year of Free Website Hosting",
      "Advanced E-commerce Features",
      "Multilingual Website Support",
      "Personalized Training Sessions",
      "Regular Backups & Maintenance",
    ],
    buttonText: "Buy Now",
    buttonLink: "/auth/login",
    buttonStyle: "bg-yellow-500 text-white hover:bg-yellow-600",
    mostPopular: false,
    textColor: "text-[#CA8A04]", // Enterprise Plan text color
  },
];

type HeroProps = {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
};

export default function Pricing({ showModal, setShowModal }: HeroProps) {
  return (
    <div className="relative w-full md:h-auto">
      <div>
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 20 },
            opacity: { duration: 0.4 },
            ease: "easeInOut",
          }}
          className="text-MainHeading font-bold text-center mt-12"
        >
          Inexpensive Website Solutions Plans & Pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.4 },
            ease: "easeInOut",
          }}
          className="max-w-3xl mx-auto mt-4 text-paragraph text-center"
        >
          Explore our enticing array of "Plans & Pricing" designed just for you!
          Dive into a world of options tailored to suit your needs and budget.
        </motion.p>
      </div>
      <div className="mt-24 container space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
        {plans.map((plan, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            key={index}
            className="relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col"
          >
            <div className="flex-1">
              <h3 className={`text-xl font-semibold ${plan.textColor}`}>
                {plan.name}
              </h3>
              {plan.mostPopular && (
                <p className="absolute top-0 py-1.5 px-4 bg-emerald-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide transform -translate-y-1/2">
                  Most popular
                </p>
              )}
              <p className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold tracking-tight">
                  {plan.price}
                </span>
                <span className="ml-1 text-xl font-semibold">/project</span>
              </p>
              <p className="mt-6">{plan.description}</p>
              <ul role="list" className="mt-6 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 w-6 h-6 text-emerald-500"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => setShowModal(!showModal)}
              className={`${plan.buttonStyle} mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium`}
            >
              {plan.buttonText}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
