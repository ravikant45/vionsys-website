import React, { useEffect, useState } from "react";
import { Button, Form, Image, Input, Select } from "antd";
import { country } from "@/utils/CountryCodes";
import { vEmployeeModelTemplate } from "@/utils/vEmployeeModelTemplate";
import axios from "axios";
import toast from "react-hot-toast";

interface PopUpProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const ViPopUp: React.FC<PopUpProps> = ({ showModal, setShowModal }) => {
  const handleCancel = () => {
    setShowModal(false);
  };
  
  const [loading, setLoading] = useState<boolean>(false);
  const [form] = Form.useForm();
  const [countryCode, setCountryCode] = useState<string>("+1");

  // Disable scrolling when modal is visible
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

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
    
    // Add the default message if no message is provided
    const data = { ...values, countryCode, message: values.message || "Requesting a Call for Virtual Employee." };

    const template = vEmployeeModelTemplate(data);
    const sendTo = ["workvansh1@gmail.com"];
    
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
      toast.success("Message sent successfully!", {
        position: "top-center",
      });;
      setLoading(false);
      form.resetFields();
    } catch (error) {
      toast.error("Failed to send message");
    }
  };

  return (
    <section>
      {showModal && (
        <div id="viBg" className="fixed inset-0 z-50 flex items-center justify-center lg:mt-16 bg-black bg-opacity-50">
          <div  className="relative w-full h-full ">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 dark:hover:text-gray-100 focus:outline-none"
              onClick={handleCancel}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Full-screen content */}
            <div id="viBg">
              <div className="container px-4 py-6 mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-center lg:-mx-10">
                  {/* Image Section */}
                  <div className="mt-10 p-4">
                    <div className="w-full md:w-1/2 md:mx-auto flex flex-col md:flex-row items-center justify-center text-center">
                      <img
                        className="inline-flex object-cover border-4 border-blue1 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-blue1 bg-indigo-50 !h-32 !w-32 mb-4 md:mb-0 ml-0 md:mr-5"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxoZWFkc2hvdHxlbnwwfDB8fHwxNjk1ODE3MjEzfDA&ixlib=rb-4.0.3&q=80&w=1080"
                        alt=""
                      />
                      <div className="flex flex-col">
                        <div className="md:text-justify mb-3">
                          <div className="flex flex-col mb-5">
                            <p className="text-blue1 font-bold text-xl">
                              👋 I'm John
                            </p>
                          </div>
                          <p className="text-orange font-semibold text-center md:text-left">
                            "My expertise is in matching you with the right developers for your technical needs. I'm looking forward to answering any questions you may have."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Form Section */}
              <div className="mx-auto w-full md:w-1/2 md:mx-auto">
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={handleSubmit}
                  className="space-y-4"
                >
                  <Form.Item
                    name="name"
                    rules={[{ required: true, message: "Please enter your full name" }]}
                  >
                    <Input
                      placeholder="Enter Your Name"
                      className="w-full bg-transparent px-2 border text-black rounded"
                      disabled={loading}
                    />
                  </Form.Item>
                  <div className="flex gap-x-2 h-10">
                    <Form.Item
                      name="countryCode"
                      initialValue="+1"
                      rules={[{ required: true, message: "Please select your country!" }]}
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
                      rules={[
                        { required: true, message: "Please enter your phone number!" },
                        { pattern: /^\d{8,15}$/, message: "Please enter valid phone number" },
                      ]}
                      className="w-full"
                    >
                      <Input className="bg-transparent" placeholder="Enter Phone Number" maxLength={15} minLength={8} />
                    </Form.Item>
                  </div>
                  <Form.Item
                    name="email"
                    rules={[{ required: true, message: "Please enter your email!", type: "email" }]}
                  >
                    <Input
                      placeholder="Enter Email Address"
                      className="w-full bg-transparent px-2 border text-black border-gray-300 rounded"
                      disabled={loading}
                    />
                  </Form.Item>
                  <Form.Item>
                    <div className="flex justify-center items-center">
                      <Button
                        className="w-full bg-yellow-300 rounded-lg text-black px-4 mt-2 py-2 text-base hover:bg-yellow-500 transition-all transform hover:scale-100"
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
                          "Book a call"
                        )}
                      </Button>
                    </div>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ViPopUp;
