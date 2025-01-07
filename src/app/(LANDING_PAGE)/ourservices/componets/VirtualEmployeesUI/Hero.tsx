"use client";
import { motion } from "framer-motion";
import { Button, Form, Image, Input, Select } from "antd";
import { country } from "@/utils/CountryCodes";
import { vEmployeeModelTemplate } from "@/utils/vEmployeeModelTemplate";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

type HeroProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Hero: React.FC<HeroProps> = ({ showModal, setShowModal }) => {
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
    const updatedData = {
      data,
      template,
      sendTo,
    };
    console.log("updated Data: ", updatedData);
    try {
      await axios.post("/api/email", updatedData, {
        headers: { "Content-Type": "application/json" },
      });
      setLoading(false);
      router.push("/thank-you");
      form.resetFields();
    } catch (error) {
      toast.error("Failed to send message");
    }
  };

  const handleRedirect = () => {
    router.push("/ourservices/virtualemployees/findDevlopers");
  };

  return (
    <>
      <section
        id="bg2"
        className="relative h-full flex items-center justify-center"
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source
            src="/assets/VEmployee/virtualEmployeeVideo1.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-blue-100 opacity-30"></div>

        {/* Content */}
        <div className="relative z-10  container pt-16 mx-auto px-8 flex flex-col md:flex-row items-center justify-around">
          {/* Left Side: Title, Subheading, and Description */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 20 },
                opacity: { duration: 0.4 },
                ease: "easeInOut",
              }}
              className="text-xl sm:text-2xl md:text-5xl tracking-tight font-bold md:mb-4 text-blue1"
            >
              Hire <span className="text-orange">Remote</span> IT Developer
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.4 },
                ease: "easeInOut",
              }}
              className="text-sm sm:text-lg md:text-xl font-bold my-4 text-gray-700"
            >
              Hire on Per Hours/Weekly/Monthly/Quarterly Basis!
            </motion.h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-6">
              At Vionsys, we’re trusted by 1000+ global clients. With a top 1%
              development team hand-picked for your project, our extensive
              ecosystem spans 200+ tech stacks, ensuring the ideal fit for your
              software development needs.
            </p>
            <div>
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
                className="flex justify-center gap-2 items-center shadow-xl text-sm bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-orange hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-3 py-1 overflow-hidden border-2 rounded-full group my-1 uppercase"
                onClick={() => {
                  setShowModal(!showModal);
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
              {/*  */}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="md:p-2">
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              className=" rounded-3xl md:col-span-2 p-4"
              id="heroViBG"
            >
              <div>
                <h1 className="text-center text-yellow-300 text-xl font-bold pt-1">
                  Contact Us Today !
                </h1>
                <p className="text-sm text-white text-center pb-2">
                  Our team will be in touch with you shortly.
                </p>
              </div>

              <Form.Item
                className="w-full mb-2" // Reduced margin-bottom
                name="name"
                label={
                  <span className="text-sm font-medium text-yellow-300">
                    Full Name
                  </span>
                }
                rules={[
                  { required: true, message: "Please enter your full name" },
                ]}
              >
                <Input
                  placeholder="Enter Your Name"
                  className="w-full px-2 border text-black rounded"
                  disabled={loading}
                />
              </Form.Item>

              <Form.Item
                className="w-full mb-2" // Reduced margin-bottom
                name="email"
                label={
                  <span className="text-sm font-medium text-yellow-300">
                    Email Address
                  </span>
                }
                rules={[
                  {
                    required: true,
                    message: "Please enter your email!",
                    type: "email",
                  },
                ]}
              >
                <Input
                  placeholder="Enter Email Address"
                  className="w-full px-2 border text-black border-gray-300 rounded"
                  disabled={loading}
                />
              </Form.Item>

              <div className="flex gap-x-2">
                {" "}
                {/* Reduced bottom margin */}
                <Form.Item
                  name="countryCode"
                  label={
                    <span className="font-semibold text-yellow-300">
                      Country
                    </span>
                  }
                  rules={[
                    { required: true, message: "Please select your country!" },
                  ]}
                  initialValue="+1"
                  className="w-36"
                >
                  <Select
                    showSearch
                    placeholder="Country"
                    optionFilterProp="children"
                    onChange={handleCountryChange}
                    filterOption={filterOption}
                  >
                    {country.map((c, index) => (
                      <Select.Option key={index} value={c.code}>
                        <div className="flex items-center">
                          <Image
                            src={c.image}
                            width={20}
                            height={20}
                            alt={`Flag of ${c.code}`}
                          />
                          <span className="ml-2">{c.code}</span>
                        </div>
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="phone"
                  label={
                    <span className="font-semibold text-yellow-300">
                      Phone Number
                    </span>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number!",
                    },
                    {
                      pattern: /^\d{8,15}$/,
                      message: "Please enter valid phone number",
                    },
                  ]}
                  className="w-full"
                >
                  <Input
                    placeholder="Enter Phone Number"
                    maxLength={15}
                    minLength={8}
                  />
                </Form.Item>
              </div>

              <Form.Item
                className="w-full mb-4" // Reduced margin-bottom
                name="message"
                label={
                  <span className="block text-sm font-medium text-yellow-300">
                    Your Message
                  </span>
                }
                rules={[
                  { required: true, message: "Please enter your message!" },
                ]}
              >
                <Input.TextArea
                  placeholder="Leave a comment..."
                  className="w-full px-2  border text-black border-gray-300 rounded"
                  disabled={loading}
                />
              </Form.Item>

              <Form.Item>
                <div className="flex justify-center items-center">
                  <Button
                    className="w-full bg-yellow-300 rounded-lg text-black px-4 py-2 text-base hover:bg-yellow-500 transition-all transform hover:scale-100"
                    htmlType="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4c-2.697 0-5.074-1.072-6.834-2.709l2.834-2.833zm8-10.582A7.962 7.962 0 0120 12h4c0-6.627-5.373-12-12-12v4c2.697 0 5.074 1.072 6.834 2.709l-2.834 2.833z"
                        ></path>
                      </svg>
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
