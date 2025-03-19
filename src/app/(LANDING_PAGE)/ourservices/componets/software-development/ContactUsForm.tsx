"use client";
import React, { useState } from "react";
import { country } from "@/utils/CountryCodes";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { SoftwareDevelopmentTemplate } from "@/utils/SoftwareDevelopmentTemplate";
import Image from "next/image";

interface ContactUsFormProps {
  heading: string;
  message: string;
  title: string;
}

function ContactUsForm({ heading, message, title }: ContactUsFormProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  // ✅ Set default country to India (+91)
  const defaultCountry = country.find((c) => c.code === "+91") || country[0];
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [showDropdown, setShowDropdown] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCountryChange = (code: string) => {
    const selected = country.find((c) => c.code === code);
    if (selected) {
      setSelectedCountry(selected);
      setShowDropdown(false); // Close dropdown after selection
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.message
    ) {
      toast.error("Please fill all required fields");
      return;
    }
    const phoneNumber = formData.number ? `${selectedCountry.code} ${formData.number}` : "";
    const formattedData = { ...formData, number: phoneNumber };
    const template = SoftwareDevelopmentTemplate(formattedData, title);
    const sendTo = ["info@vionsys", "ramanpatil@vionsys.com"];
    const updatedData = { formattedData, template, sendTo };

    setLoading(true);
    try {
      await axios.post("/api/email", updatedData, {
        headers: { "Content-Type": "application/json" },
      });
      setFormData({ name: "", email: "", number: "", message: "" });
      router.push("/thank-you");
    } catch (error) {
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:w-1/3 md:mt-16 rounded-xl lg:mt-0">
      <div className="bg-stone-100 rounded-t-lg p-4 w-full">
        <h2 className="text-lg font-semibold text-center mb-2">{heading}</h2>
        <p className="text-center text-xs text-gray-700">{message}</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="md:py-4 md:px-8 p-4 rounded-b-lg bg-white"
      >
        {/* Full Name */}
        <div className="w-full text-sm mb-5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name*"
            className="w-full px-2 py-1 border-b border-stone-600 text-stone-700 focus:outline-none focus:ring-0"
            required
          />
        </div>

        {/* Email */}
        <div className="w-full text-sm mb-5">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email address*"
            className="w-full px-2 py-1 border-b border-stone-600 text-stone-700 focus:outline-none focus:ring-0"
            required
          />
        </div>

        {/* Country Code & Phone Number */}
        <div className="flex gap-x-4 text-sm mb-5">
          {/* Country Dropdown */}
          <div className="relative w-1/3">
            <button
              type="button"
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-full flex items-center gap-2 px-2 py-2 border-b border-stone-600 text-stone-700 focus:outline-none"
            >
              <Image
                width={24}
                height={16}
                src={selectedCountry.image}
                alt="flag"
                className="w-6 h-4"
              />
              {selectedCountry.code}
            </button>

            {/* Dropdown Options */}
            {showDropdown && (
              <div className="absolute left-0 w-full max-h-40 overflow-auto mt-1 bg-white border border-stone-300 rounded-md shadow-lg z-10">
                {country.map((c) => (
                  <div
                    key={c.code}
                    onClick={() => handleCountryChange(c.code)}
                    className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100"
                  >
                    <Image
                      width={24}
                      height={16}
                      src={c.image}
                      alt="flag"
                      className="w-6 h-4"
                    />
                    {c.code}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Phone Number */}
          <div className="w-2/3">
            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
              placeholder="Contact number*"
              maxLength={10}
              minLength={10}
              pattern="\d{8,15}"
              className="w-full h-full px-2 py-1 border-b border-stone-600 text-stone-700 focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        {/* Message */}
        <div className="w-full text-sm mb-5">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Describe Your Project/Idea In Brief (Helps Us Come Back Better Prepared)"
            className="w-full h-full p-2 pb-5 placeholder:text-xs bg-stone-100 border-b text-stone-700 border-stone-600 focus:outline-none focus:ring-0"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="w-full bg-blue-600 rounded-full text-white px-4 py-2 text-base hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white mx-auto"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  className="opacity-25"
                ></circle>
                <path
                  fill="currentColor"
                  className="opacity-75"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4c-2.697 0-5.074-1.072-6.834-2.709l2.834-2.833z"
                ></path>
              </svg>
            ) : (
              "Get Started"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUsForm;