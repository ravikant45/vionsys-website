// Content.tsx
import React from "react";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaCode } from "react-icons/fa6";
import { MdTouchApp, MdVerified, MdSupportAgent } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { GrUserSettings } from "react-icons/gr";
import { LuListTodo } from "react-icons/lu";
import { motion } from "framer-motion";



// Updated data array
const data = [
  {
    icon: <FaCode size={40} color="#e57e2c" />,
    title: "Design and Development",
    description:
      "With a deep understanding of design and development, we seamlessly blend aesthetics and functionality to create stunning websites.",
  },
  {
    icon: <HiOutlineDesktopComputer size={40} color="#e57e2c" />,
    title: "Robust Development",
    description:
      "Our websites aren't just pretty faces – they're built to be reliable and robust, ensuring seamless performance.",
  },
  {
    icon: <MdTouchApp size={40} color="#e57e2c" />,
    title: "User-Friendly Experience",
    description:
      "We design websites with your users in mind, making navigation a breeze for a delightful user experience.",
  },
  {
    icon: <GrUserSettings size={40} color="#e57e2c" />,
    title: "Customized Approach",
    description:
      "Your project is unique, and so is our approach. We tailor our services to meet your specific needs.",
  },
  {
    icon: <MdVerified size={40} color="#e57e2c" />,
    title: "Commitment to Quality",
    description:
      "Quality is our priority, and we're committed to delivering websites that exceed your expectations.",
  },
  {
    icon: <IoIosPeople size={40} color="#e57e2c" />,
    title: "Professional Team",
    description:
      "Our team consists of passionate professionals dedicated to bringing your vision to life with creativity and expertise.",
  },
  {
    icon: <LuListTodo size={40} color="#e57e2c" />,
    title: "Comprehensive Services",
    description:
      "From concept to launch, we offer a full range of web design and development services, making us your one-stop solution.",
  },
  {
    icon: <MdSupportAgent size={40} color="#e57e2c" />,
    title: "Continued Support",
    description:
      "Our support doesn't end at launch – we're here to ensure your website stays updated and performs at its best.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-4xl md:mb-12">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut"
          }}
          className="max-w-lg mb-6 font-sans text-MainHeading font-bold leading-none tracking-tight  md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Why Choose Us</span>
          </span>{" "}
        </motion.h2>
        <p className="text-base text-SubHeading font-semibold md:text-lg">
          We know design, We know development. We are web design experts!
        </p>
        <p className="text-base text-gray-900 pt-2 md:text-sm">
          Our team specializes in creating visually stunning, responsive
          websites that perfectly align with your vision. Combining innovative
          design with robust development, we ensure your online presence is not
          only attractive but also highly functional and user-friendly.
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
        {/* Card Items */}
        {data.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{
              duration: 0.2,
              scale: { type: "spring", stiffness: 300, damping: 20 }, /* Less stiff spring for smoother return */
              ease: "easeInOut",
            }}
            key={index}
            className="transform bg-white border-l-4 border-blue3 transition-transform duration-500 hover:shadow-2xl shadow-md" /* Adjusted shadow transitions */
          >
            <div className="flex flex-col justify-between items-center h-full py-4 px-4 border border-l-0 rounded-r shadow-sm hover:shadow-none">
              <div className="mr-4">{item.icon}</div>
              <div className="text-center">
                <h6 className="mb-2 font-semibold leading-5">{item.title}</h6>
                <p className="text-sm text-gray-900">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>


    </div>
  );
};

export default WhyChooseUs;
