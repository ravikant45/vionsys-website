"use client";

import { useEffect, useState } from "react";
import { Modal, Form, Input, Radio, Select, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import toast from "react-hot-toast";

interface SampleProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Pop_Model({ showModal, setShowModal }: SampleProps) {
  const [userType, setUserType] = useState("employer");
  const [hasModalBeenShown, setHasModalBeenShown] = useState(false); // Track if modal has been shown
  const [loading, setLoading] = useState<boolean>(false);
  const [form] = Form.useForm();

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

  const handleSubmit = async (values: any) => {
    console.log("Form Values:", values); // Print form values to the console
    setLoading(true);
    try {
      const response = await axios.post("/api/email", values, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Thanks for connecting with us!");
      form.resetFields();
      setShowModal(false);
    } catch (error) {
      toast.error("Failed to send message");
    }
    setLoading(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="max-w-2xl mx-auto rounded-lg shadow-md">
      {/* <div className="text-2xl font-bold text-center">Enquiry Form</div> */}
      <Modal
        open={showModal}
        footer={null} // Remove default footer with Ok and Cancel buttons
        onCancel={handleCancel}
      >
        <Form layout="vertical" onFinish={handleSubmit}>
          <div className="text-2xl font-bold text-center pb-3">
            Enquiry Form
          </div>
          <Form.Item name="userType" className="mb-6">
            <Radio.Group
              onChange={(e) => setUserType(e.target.value)}
              value={userType}
              className="text-black"
            >
              <Radio value="employer" className="font-medium">
                Are you an Employer?
              </Radio>
              <Radio value="candidate" className="font-medium">
                Are you a Candidate?
              </Radio>
            </Radio.Group>
          </Form.Item>

          {/* <div className="text-red-500 mb-4">* Fields are mandatory</div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
            <Form.Item
              name="name"
              label={<span className="font-semibold">Full Name</span>}
              rules={[
                { required: true, message: "Please enter your full name!" },
              ]}
            >
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter Your Name"
                className="bg-white rounded border focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none text-gray-900 leading-6 transition-colors duration-200 ease-in-out"
              />
            </Form.Item>

            {userType === "employer" ? (
              <Form.Item
                name="company"
                label={
                  <span className="font-semibold">Company/Organisation</span>
                }
                rules={[
                  {
                    required: true,
                    message: "Please enter your company name!",
                  },
                ]}
              >
                <Input
                  type="text"
                  placeholder="Enter Company Name"
                  id="company"
                  name="company"
                  className="bg-white rounded border focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none text-gray-900 leading-6 transition-colors duration-200 ease-in-out"
                />
              </Form.Item>
            ) : (
              <Form.Item
                name="email"
                label={<span className="font-semibold">Email</span>}
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter a valid email!",
                  },
                ]}
              >
                <Input
                  type="text"
                  placeholder="Enter Email Address"
                  id="email"
                  name="email"
                  className="bg-white rounded border focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none text-gray-900 leading-6 transition-colors duration-200 ease-in-out"
                />
              </Form.Item>
            )}

            {userType === "employer" ? (
              <Form.Item
                name="designation"
                label={<span className="font-semibold">Designation</span>}
                rules={[
                  {
                    required: true,
                    message: "Please enter your designation",
                  },
                ]}
              >
                <Input
                  type="text"
                  placeholder="Enter Your Designation"
                  id="designation"
                  name="designation"
                  className="bg-white rounded border focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none text-gray-900 leading-6 transition-colors duration-200 ease-in-out"
                />
              </Form.Item>
            ) : (
              <Form.Item
                name="phoneNo"
                label={<span className="font-semibold">Phone Number</span>}
                rules={[
                  {
                    required: true,
                    message: "Please enter your phone number!",
                  },
                ]}
              >
                <div>
                  <Input
                    type="Number"
                    placeholder="Enter Mobile Number"
                    id="phoneNo"
                    name="phoneNo"
                    className="bg-white rounded border focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none text-gray-900 leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </Form.Item>
            )}

            {userType === "employer" ? (
              <Form.Item
                name="email"
                label={<span className="font-semibold">Email</span>}
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter a valid email!",
                  },
                ]}
              >
                <Input
                  type="text"
                  placeholder="Enter Email Address"
                  id="email"
                  name="email"
                  className="bg-white rounded border focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none text-gray-900 leading-6 transition-colors duration-200 ease-in-out"
                />
              </Form.Item>
            ) : (
              <Form.Item
                name="qualification"
                label={<span className="font-semibold">Qualification</span>}
                rules={[
                  {
                    required: true,
                    message: "Please Enter Qualification",
                  },
                ]}
              >
                <Input
                  type="text"
                  placeholder="Enter Your Qualification"
                  id="qualification"
                  name="qualification"
                  className="bg-white rounded border focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none text-gray-900 leading-6 transition-colors duration-200 ease-in-out"
                />
              </Form.Item>
            )}

            {userType === "employer" ? (
              <Form.Item
                name="phoneNo"
                label={<span className="font-semibold">Phone Number</span>}
                rules={[
                  {
                    required: true,
                    message: "Please enter your phone number!",
                  },
                ]}
              >
                <div>
                  <Input
                    type="text"
                    placeholder="Enter Phone Number"
                    id="phoneNo"
                    name="phoneNo"
                    className="bg-white rounded border focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none text-gray-900 leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </Form.Item>
            ) : (
              <Form.Item
                name="experience"
                label={<span className="font-semibold">Experience</span>}
                rules={[
                  {
                    required: true,
                    message: "Please Enter Experience",
                  },
                ]}
              >
                <Input
                  type="number"
                  placeholder="Enter Your Experience"
                  id="experience"
                  name="experience"
                  className="bg-white rounded border focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none text-gray-900 leading-6 transition-colors duration-200 ease-in-out"
                />
              </Form.Item>
            )}

            {userType === "employer" ? (
              <Form.Item
                name="interestedIn"
                label={<span className="font-semibold">Service Required</span>}
                rules={[
                  {
                    required: true,
                    message: "Please Service Required",
                  },
                ]}
              >
                <Select placeholder="Select Service Required">
                  <Select.Option value="Permanent Staffing">
                    Permanent Staffing
                  </Select.Option>
                  <Select.Option value="Contract Staffing">
                    Contract Staffing
                  </Select.Option>
                  <Select.Option value="Temporary Staffing">
                    Temporary Staffing
                  </Select.Option>
                  <Select.Option value="Specialized Staffing">
                    Specialized Staffing
                  </Select.Option>
                  <Select.Option value="Recruitment Process Outsourcing (RPO)">
                    Recruitment Process Outsourcing (RPO)
                  </Select.Option>
                  <Select.Option value="Vendor Management Services (VMS)">
                    Vendor Management Services (VMS)
                  </Select.Option>
                </Select>
              </Form.Item>
            ) : (
              <Form.Item
                name="comments"
                label={<span className="font-semibold">Comments</span>}
              >
                <Input.TextArea
                  placeholder="Comment here..."
                  id="comments"
                  name="comments"
                  className="bg-white rounded border focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none text-gray-900 leading-6 transition-colors duration-200 ease-in-out"
                />
              </Form.Item>
            )}
          </div>

          {userType === "employer" ? (
            <Form.Item
              name="message"
              label={<span className="font-semibold">Your Message</span>}
              rules={[
                {
                  required: true,
                  message: "Please enter your message!",
                },
              ]}
            >
              <Input.TextArea
                placeholder="Please enter your message here"
                id="message"
                name="message"
                className="bg-white rounded border focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none text-gray-900 leading-6 transition-colors duration-200 ease-in-out"
              />
            </Form.Item>
          ) : (
            ""
          )}

          {userType === "candidate" && (
            <Form.Item
              name="cv"
              label={<span className="font-semibold">Upload your CV (PDF or DOC)</span>}
              className="text-bold"
              rules={[
                {
                  required: true,
                  message: "Please provide your cv!",
                },
              ]}
            >
              <Upload>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
          )}

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
                )}{" "}
                Submit
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
