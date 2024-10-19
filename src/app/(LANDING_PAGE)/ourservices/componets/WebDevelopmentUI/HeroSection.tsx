/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { Button, Form, Image, Input, Select } from "antd";
import { country } from "@/utils/CountryCodes";
import { WebDevPopModalTemplate } from "@/utils/WebDevPopModalTemplate";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

type HeroProps = {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
};

const HeroSection: React.FC<HeroProps> = ({ showModal, setShowModal }) => {
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

    const template = WebDevPopModalTemplate(data);
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

  return (
    <>
      <section
        id="bg2"
        className="relative h-full flex items-center justify-center"
      >
        {/* Content */}
        <div className="relative z-10 container pt-16 mx-auto px-8 flex flex-col md:flex-row items-center justify-around">
          {/* Left Side: Title, Subheading, and Description */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 20 },
                opacity: { duration: 0.4 },
                ease: "easeInOut",
              }}
              className="text-3xl text-blue2 md:text-6xl font-bold mb-4"
            >
              Web Design & Web Development Company
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
              className="text-2xl text-SubHeading md:text-3xl font-semibold mb-4"
            >
              You Think, We Make It!
            </motion.h2>
            <p className="text-lg text-slate-600 mb-6">
              Your one-stop destination for top-notch web design & development
              services.
            </p>
            <div>
              <button className="relative animate-bounce hover:scale-105 ease-in-out duration-800 inline-flex h-14 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
                <span className="absolute hover:scale-125 ease-in-out duration-800 inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff8c00_0%,#ffa500_50%,#1e90ff_100%)]"></span>
                <span
                  className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-7 text-md font-medium bg-[#F0F0EE] text-blue1 backdrop-blur-3xl gap-2 undefined"
                  onClick={() => {
                    setShowModal(!showModal);
                  }}
                >
                  Get in Touch with Our Experts Today
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            className="space-y-1 md:py-4 md:px-4 p-2 rounded-xl bg-white"
          >
            <div>
              <h1 className="text-center text-blue1 text-xl font-bold pt-1">
                {" "}
                {/* Adjusted padding top */}
                Get A Free Call
              </h1>
              <p className="text-sm text-orange text-center pb-2">
                {" "}
                {/* Reduced padding bottom */}
                Our team will be in touch with you shortly.
              </p>
            </div>

            <Form.Item
              className="w-full"
              name="name"
              label={
                <span className="block text-sm font-medium text-black">
                  Full Name
                </span>
              }
              rules={[
                { required: true, message: "Please enter your full name" },
              ]}
            >
              <Input
                placeholder="Enter Your Name"
                className="w-full mt-1 p-2 border text-black border-gray-300 rounded"
                disabled={loading}
              />
            </Form.Item>

            <Form.Item
              name="email"
              label={
                <span className="block text-sm font-medium text-black">
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
                className="w-full mt-1 p-2 border text-black border-gray-300 rounded"
                disabled={loading}
              />
            </Form.Item>

            <div className="flex gap-x-2">
              <Form.Item
                name="countryCode"
                label={<span className="font-semibold"> Country</span>}
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
                          className=""
                        />
                        <span className="ml-2">{c.code}</span>
                      </div>
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                name="phone"
                label={<span className="font-semibold">Phone Number</span>}
                rules={[
                  {
                    required: true,
                    message: "Please enter your phone number!",
                  },
                ]}
                className="w-full"
              >
                <Input placeholder="Enter Phone Number" />
              </Form.Item>
            </div>

            <Form.Item
              name="service"
              label={<span className="font-semibold">Service Required</span>}
              rules={[
                { required: true, message: "Please select a service required" },
              ]}
            >
              <Select placeholder="Select Service Required">
                <Select.Option value="Business Website">
                  Business Website
                </Select.Option>
                <Select.Option value="E-Commerce Website">
                  E-Commerce Website
                </Select.Option>
                <Select.Option value="Educational Website">
                  Educational Website
                </Select.Option>
                <Select.Option value="Static Website">
                  Static Website
                </Select.Option>
                <Select.Option value="Dynamic Website">
                  Dynamic Website
                </Select.Option>
                <Select.Option value="Other">Other</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="message"
              label={
                <span className="block text-sm font-medium text-black">
                  Your Message
                </span>
              }
              rules={[
                { required: true, message: "Please enter your message!" },
              ]}
            >
              <Input.TextArea
                placeholder="Leave a comment..."
                className="w-full mt-1 p-2 border text-black border-gray-300 rounded"
                disabled={loading}
              />
            </Form.Item>

            <Form.Item>
              <div className="flex justify-center items-center">
                <Button
                  className="w-full bg-blue-600 border-2 border-[#3e3e3e] rounded-lg text-white px-4 mt-2 py-2 text-base hover:bg-blue-700 transition-all transform hover:scale-105"
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
      </section>
    </>
  );
};

export default HeroSection;
