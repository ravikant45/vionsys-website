"use client";
import { Form } from "antd";
import { vEmployeeModelTemplate } from "@/utils/vEmployeeModelTemplate";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactUsForm from "../software-development/ContactUsForm";

const Hero = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [form] = Form.useForm();
  const [countryCode, setCountryCode] = useState<string>("+1");
  const router = useRouter();

  const handleCountryChange = (value: string) => {
    setCountryCode(value);
  };

  const filterOption = (
    input: string,
    option?: { value: string; children: React.ReactNode }
  ) => {
    const childrenAsString = option?.children?.toString().toLowerCase() || "";
    return (
      (childrenAsString.includes(input.toLowerCase()) ||
        option?.value.toLowerCase().includes(input.toLowerCase())) ??
      false
    );
  };

  const handleSubmit = async (values: any) => {
    setLoading(true);
    const data = { ...values, countryCode };

    const template = vEmployeeModelTemplate(data);
    const sendTo = ["info@vionsys.com", "pawandolas@vionsys.com"];
    //const sendTo = ["workvansh12@gmail.com"];
    const updatedData = {
      data,
      template,
      sendTo,
    };
    try {
      await axios.post("/api/email", updatedData, {
        headers: { "Content-Type": "application/json" },
      });
      setLoading(false);
      toast.success("Message sent successfully!");
      router.push("/thank-you");
      form.resetFields();
    } catch (error) {
      toast.error("Failed to send message");
    }
  };

  const handleRedirect = () => {
    router.push("/ourservices/remoteitdeveloper/findDevlopers");
  };

  const heading = "Contact Us Today !";
  const message = "Our team will be in touch with you shortly.";

  return (
    <>
      <section className="relative h-full min-h-screen w-full flex justify-center gap-10 py-2">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/VEmployee/bgImageHero.jpeg"
            alt="Background Image"
            fill
            priority
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative w-full flex md:flex-row flex-col gap-10 items-center p-5 md:px-16 pt-20 md:pt-10 z-10">
          {/* Left Side: Title, Subheading, and Description */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 20 },
                opacity: { duration: 0.4 },
                ease: "easeInOut",
              }}
            >
              <h1 className="text-xl sm:text-2xl md:text-5xl tracking-tight font-bold md:mb-4 text-white">
                Hire Remote IT Developer
              </h1>
              <h2 className="text-sm sm:text-lg md:text-xl font-bold my-4 text-orange">
                Hire on Per Hours/Weekly/Monthly/Quarterly Basis
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6">
                At Vionsys, we’re trusted by 1000+ global clients. With a top 1%
                development team hand-picked for your project, our extensive
                ecosystem spans 200+ tech stacks, ensuring the ideal fit for
                your software development needs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.4 },
                ease: "easeInOut",
              }}
              className="flex gap-4"
            >
              <button
                className="font-sans flex justify-center gap-2 items-center shadow-xl text-sm text-gray-50 bg-blue1 backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-orange hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-3 py-1 overflow-hidden border-2 rounded-full group my-1 uppercase"
                type="button"
                onClick={handleRedirect}
              >
                Find a Developer
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 19"
                  className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                >
                  <path
                    className="fill-gray-800 group-hover:fill-gray-800"
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  ></path>
                </svg>
              </button>
              <button
                className="font-sans flex justify-center gap-2 items-center shadow-xl text-sm bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-orange hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-3 py-1 overflow-hidden border-2 rounded-full group my-[6px] uppercase"
                onClick={() => {
                  router.push(
                    "https://calendly.com/vionsysit/30min?back=1&month=2025-01"
                  );
                }}
              >
                Talk To An Expert
                <svg
                  className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-800 group-hover:fill-gray-800"
                  ></path>
                </svg>
              </button>
            </motion.div>
          </div>

          {/* Right Side: Contact Form */}
          <ContactUsForm
            heading={heading}
            message={message}
            title={"Remote it developer Landing page"}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
