"use client";
import { useEffect, useState } from "react";
import { Modal, Form, Input, Radio, Select, Button } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { StaffingEmployerTemplate } from "@/utils/staffingEmployerTemplate";
import { StaffingEmployeeTemplate } from "@/utils/staffingEmployeeTemplate";
import { country } from "@/utils/CountryCodes";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface PopModalProps {
  enquiryModal: boolean;
  setEnquiryModal: (show: boolean) => void;
}

export default function Pop_Model({ enquiryModal, setEnquiryModal }: PopModalProps) {
  const [userType, setUserType] = useState("employer");
  const [hasModalBeenShown, setHasModalBeenShown] = useState(false); // Track if modal has been shown
  const [loading, setLoading] = useState<boolean>(false);
  const [attachments, setAttachments] = useState<
    { filename: string; content: string }[] | undefined
  >();
  const [form] = Form.useForm();
  const [countryCode, setCountryCode] = useState<string>("");
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
        setEnquiryModal(!enquiryModal);
        setHasModalBeenShown(true);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [hasModalBeenShown, setEnquiryModal]);

  if (!enquiryModal) return null;

  const handleSubmit = async (values: any) => {
    setLoading(true);

    const data = { ...values, countryCode, attachments };
    const sendTo = ["info@vionsys.com", "pawandolas@vionsys.com"];
    const template = !data.attachments
      ? StaffingEmployerTemplate(data)
      : StaffingEmployeeTemplate(data);
    const updatedData = {
      ...data,
      template,
      sendTo,
    };
    try {
      if (data?.attachments) {
        await axios.post("/api/sendEmailWithFile", updatedData, {
          headers: { "Content-Type": "application/json" },
        });
      } else {
        await axios.post("/api/email", updatedData, {
          headers: { "Content-Type": "application/json" },
        });
      }
      setLoading(false);
      router.push("/thank-you");
      form.resetFields();
    } catch (error) {
      toast.error("Failed to send message");
    }
  };

  const handleCancel = () => {
    setEnquiryModal(false);
  };

  return (
    <>
      <div className="max-w-3xl mx-auto rounded-lg shadow-md">
        {/* <div className="text-2xl font-bold text-center">Enquiry Form</div> */}
        <Modal
          open={enquiryModal}
          footer={null} // Remove default footer with Ok and Cancel buttons
          onCancel={handleCancel}
          destroyOnClose={true} // Ensure it resets when closed
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
                <>
                  <Form.Item
                    name="countryCode"
                    label={<span className="font-semibold">Country Code</span>}
                    rules={[
                      {
                        required: true,
                        message: "Please select your country code!",
                      },
                    ]}
                  >
                    <Select
                      showSearch
                      className="w-32"
                      placeholder="Select Country"
                      optionFilterProp="children"
                      value={countryCode}
                      onChange={handleCountryChange}
                      filterOption={filterOption}
                    >
                      <option value="" disabled>
                        Country
                      </option>
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
                    label={<span className="font-semibold">Mobile Number</span>}
                    rules={[
                      {
                        required: true,
                        message: "Please enter your mobile number!",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      placeholder="Enter Mobile Number"
                      id="phone"
                      name="phone"
                      className="bg-white rounded border focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none text-gray-900 leading-6 transition-colors duration-200 ease-in-out"
                    />
                  </Form.Item>
                </>
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
                  <div className="flex gap-2">
                    <Select
                      showSearch
                      className="w-32"
                      placeholder="Country"
                      optionFilterProp="children"
                      value={countryCode}
                      onChange={handleCountryChange}
                      filterOption={filterOption}
                    >
                      <option value="" disabled>
                        Country
                      </option>
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
                <>
                  <Form.Item
                    name="interestedIn"
                    label={
                      <span className="font-semibold">Service Required</span>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please select a service required",
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
                      <Select.Option value="Other">Other</Select.Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="lookingFor"
                    label={
                      <span className="font-semibold">Your Requirement</span>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please select IT or Non-IT",
                      },
                    ]}
                  >
                    <Radio.Group className="text-black">
                      <Radio value="IT" className="font-medium">
                        IT
                      </Radio>
                      <Radio value="Non-IT" className="font-medium">
                        Non-IT
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </>
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
                label={
                  <span className="font-semibold">
                    Upload Your CV (PDF or DOC)
                  </span>
                }
                rules={[{ required: true, message: "Please upload your CV!" }]}
              >
                <Input
                  type="file"
                  multiple
                  onChange={async (e) => {
                    const files = e.target.files;
                    if (files) {
                      const filesArray = await Promise.all(
                        Array.from(files).map(async (file) => ({
                          filename: file.name,
                          content: await toBase64(file), // Convert to base64
                        }))
                      );
                      setAttachments(filesArray); // Update the form field with the array of file data
                    }
                  }}
                />
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
    </>
  );
}
const toBase64 = (file: File) => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};
