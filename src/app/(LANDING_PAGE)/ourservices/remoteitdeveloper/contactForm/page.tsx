"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Form, Input, Select } from "antd";
import { Button } from "@/components/ui/button";
import { country } from "@/utils/CountryCodes";
import { vEmployeeModelTemplate } from "@/utils/vEmployeeModelTemplate";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
const Page: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedSkills = JSON.parse(
    decodeURIComponent(searchParams.get("skills") || "[]")
  );
  const [countryCode, setCountryCode] = useState<string>("");

  const handleSubmit = async (values: any) => {
    const formattedData = {
      ...values,
      countryCode: values.countryCode,
      selectedSkills,
    };

    const template = vEmployeeModelTemplate(formattedData);
    const sendTo = ["info@vionsys.com", "pawandolas@vionsys.com"];
    //const sendTo = ["workvansh12@gmail.com"];
    const updatedData = {
      formattedData,
      template,
      sendTo,
    };

    setLoading(true);
    try {
      const response = await axios.post("/api/email", updatedData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLoading(false);
      form.resetFields();
      router.push("/thank-you");
    } catch (error) {
      toast.error("Failed to send message");
      setLoading(false);
    }
  };

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

  return (
    <div className="relative mt-8 w-full h-[600px] flex flex-col lg:flex-row items-center justify-center mx-auto gap-8 px-4 py-8">
      {/* Right Image */}
      <div className="w-full lg:w-1/2 hidden lg:block">
        <Image
          width={500}
          height={500}
          className="w-full h-64 lg:h-full object-cover rounded-lg"
          src="/assets/VEmployee/contactImage.jpg"
          alt="Winding mountain road"
        />
      </div>

      {/* Left Content */}
      <div className="w-full lg:w-1/2 rounded-lg p-6 lg:p-9">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          className="text-xl md:mt-4 text-orange font-extrabold text-center leading-tight text-blue950 md:text-2xl"
        >
          Send us message
        </motion.h2>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            className="w-full"
            name="name"
            label={<span className="font-semibold">Full Name</span>}
            rules={[{ required: true, message: "Please enter your full name" }]}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
            >
              <Input
                type="text"
                placeholder="Enter Your Name"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </motion.div>
          </Form.Item>

          {/* ... rest of your form fields remain the same ... */}
          <Form.Item
            name="email"
            label={<span className="font-semibold">Email Address</span>}
            rules={[
              {
                required: true,
                message: "Please enter your email!",
                type: "email",
              },
            ]}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }} //X:100
              whileInView={{ opacity: 1, scale: 1 }} //y:100
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
            >
              <Input
                type="text"
                placeholder="Enter Email Address"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </motion.div>
          </Form.Item>

          <div className="flex gap-x-2">
            <Form.Item
              name="countryCode"
              label={<span className="font-semibold"> Country</span>}
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
                        className="mr-2"
                      />
                      {c.code}
                    </div>
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="number"
              label={<span className="font-semibold">Phone Number</span>}
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
            name="message"
            label={
              <span className="block text-sm font-semibold">Your Message</span>
            }
            rules={[
              {
                required: true,
                message: "Please enter your message!",
              },
            ]}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }} //X:100
              whileInView={{ opacity: 1, scale: 1 }} //y:100
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
            >
              <Input.TextArea
                placeholder="Leave a comment..."
                id="message"
                name="message"
                className=" w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </motion.div>
          </Form.Item>
          <Form.Item>
            <div className="flex justify-center w-full items-center">
              <Button disabled={loading} className="text-lg w-full text-center">
                {loading && (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline"
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
                )}
                Submit
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Page;
