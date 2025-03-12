import React, { useState } from "react";
import { country, countryCodes } from "@/utils/CountryCodes";
import toast from "react-hot-toast";
import { Button, Form, Input, Modal, Select } from "antd";
import axios from "axios";
import { StaffingLandingPageTemplate } from "@/utils/StaffingLandingPageTemplate";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Inputs = {
  name: string;

  countryCode: string;
  number: string;

  email: string;
  message: string;
};

const HeroContactForm: React.FC<{
  heading: string;
}> = ({ heading }) => {
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
    const formattedData = {
      ...values,
      countryCode,
    };
    const template = StaffingLandingPageTemplate(formattedData);
    const sendTo = ["info@vionsys.com", "pawandolas@vionsys.com"];
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
    }
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.2,
          scale: { type: "spring", stiffness: 40 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }}
        className="md:w-1/2 flex text-start justify-center items-center md:p-4 p-2 md:mt-6"
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="space-y-1 md:py-4 md:px-6 p-4 rounded-xl bg-white"
        >
          <div>
            <h1 className="text-center text-blue1 text-xl font-bold pt-2">
              {heading}
            </h1>
            <p className="text-sm text-orange text-center pb-4">
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
            rules={[{ required: true, message: "Please enter your full name" }]}
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

          <div className="flex gap-x-2 h-16">
            <Form.Item
              name="countryCode"
              label={<span className="font-semibold">Country</span>}
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
              name="number"
              label={<span className="font-semibold">Phone Number</span>}
              rules={[
                { required: true, message: "Please enter your phone number!" },
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
            name="message"
            label={
              <span className="block text-sm font-medium text-black">
                Your Message
              </span>
            }
            rules={[{ required: true, message: "Please enter your message!" }]}
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
      </motion.div>
    </>
  );
};

export default HeroContactForm;
