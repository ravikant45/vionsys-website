"use client"

import { useState } from "react"
import { BiChevronDown } from "react-icons/bi"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "What’s included in Salesforce consulting?",
      answer:
        "Salesforce consulting involves the process of designing, implementing, and managing a Salesforce org for a company based on its needs and preferences. A Salesforce Consultant understands the objectives that an organization needs to attain and guides them every step of the way in developing and implementing Salesforce in the best way possible",
    },
    {
      question: "Do your Salesforce consulting services include third-party integrations?",
      answer:
        "Yes, our Salesforce consultants are well-versed with the nitty-gritty details of Salesforce and help you undertake seamless third-party Salesforce integrations. Based on the industry you operate in and the service you want to integrate with, we help you integrate your data and functionality of your Salesforce org to obtain a single unified platform.",
    },
    {
      question: "What is the cost of your Salesforce consulting services?",
      answer:
        "There are no fixed prices for our Salesforce consulting services. Once you book a session with us and share your requirements, we work out a package that fits your budget and helps you achieve your organizational goals. Our services are tailored to suit your specific needs and we make sure that you utilize the full potential of the CRM platform.",
    },
    {
      question: "How can I determine if I need a Salesforce consultant?",
      answer:
        "Here are some of the major instances that indicate that you need a Salesforce Consultant: The need for user appropriation The need for custom development The need for custom data integration The need to obtain a 360-degree view of clients",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <div id="FAQ" className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <p className="text-orange font-semibold tracking-wider uppercase mb-2">FAQ</p>
        <h1 className="text-3xl font-bold text-blue1">Frequently Asked Questions</h1>
      </div>

      <div className="mt-8 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-sm overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-4 text-left font-medium text-blue1 hover:bg-gray-50 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <BiChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform ${
                  openIndex === index ? "transform rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="p-4 pt-0 text-gray-700">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
