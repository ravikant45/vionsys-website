"use client";
import { useEffect, useState } from "react";
import { Modal, Form, Input, Select, Button } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { country } from "@/utils/CountryCodes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { WebDevPopModalTemplate } from "@/utils/WebDevPopModalTemplate";

interface WebDevPopModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

export default function WebDevPopModal({
  showModal,
  setShowModal,
}: WebDevPopModalProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [form] = Form.useForm();
  const [hasModalBeenShown, setHasModalBeenShown] = useState(false);
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

  useEffect(() => {
    if (!hasModalBeenShown) {
      const timer = setTimeout(() => {
        setShowModal(!showModal);
        setHasModalBeenShown(true);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [hasModalBeenShown, setShowModal]);

  if (!showModal) return null;

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

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="max-w-3xl mx-auto rounded-lg shadow-md">
        <Modal
          open={showModal}
          footer={null}
          onCancel={handleCancel}
          destroyOnClose={true}
        >
          <Form layout="vertical" onFinish={handleSubmit}>
            <div className="text-2xl font-bold text-center pb-3">
              Enquiry Form
            </div>

            <Form.Item
              name="name"
              label={<span className="font-semibold">Full Name</span>}
              rules={[
                { required: true, message: "Please enter your full name!" },
              ]}
            >
              <Input placeholder="Enter Your Name" />
            </Form.Item>

            <Form.Item
              name="email"
              label={<span className="font-semibold">Email Address</span>}
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email!",
                },
              ]}
            >
              <Input placeholder="Enter Email Address" />
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
                          className="mr-2"
                        />
                        {c.code}
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
              label={
                <span className="font-semibold">Select Service Required</span>
              }
              rules={[{ required: true, message: "Please select a service!" }]}
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
              label={<span className="font-semibold">Your Message</span>}
              rules={[
                { required: true, message: "Please enter your message!" },
              ]}
            >
              <Input.TextArea placeholder="Please enter your message here" />
            </Form.Item>

            <Form.Item>
              <div className="flex space-x-4 justify-end">
                <Button
                  htmlType="reset"
                  className="m-2 border font-medium text-base"
                >
                  Reset
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={loading}
                  className="border bg-black text-white m-2 font-medium text-base"
                >
                  {loading ? (
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
                  ) : (
                    "Submit"
                  )}
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
}
