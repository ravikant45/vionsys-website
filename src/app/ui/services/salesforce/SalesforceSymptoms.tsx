import Image from "next/image"

export default function SalesforceSymptoms() {
  return (
    <div id="WhatToConsider" className=" text-gray-700 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm tracking-wider uppercase mb-4">HIRE A SALESFORCE CONSULTANT</p>
          <h1 className="text-2xl md:text-3xl font-bold text-orange leading-tight max-w-4xl mx-auto">
          Key Indicators That You Need to Hire a Salesforce Consultant
          </h1>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 items-start">
          <div className="flex justify-center">
            <Image
              src="/assets/services/Salesforce/HIRE A SALESFORCE CONSULTANT.png"
              alt="Salesforce consultant indicators"
              width={1000}
              height={1000}
              className="bg-white p-2 rounded"
            />
          </div>

          <div>
            <ul className="space-y-1 list-disc pl-6">
              <li>When you think your user appropriation is inadequate</li>
              <li>
                You are not confident whether you will be able to utilize the system to its maximum potential or not
              </li>
              <li>When you feel like you are not capable of completing the Salesforce projects on time</li>
              <li>You are not able to get a 360° view of your clients and future possibilities</li>
              <li>When you feel you are not incapable of delivering satisfaction to your clients</li>
              <li>
                When you lack necessary reports and statements that you think are required to reach significant business
                judgments and overall performance evaluations
              </li>
              <li>
                If you don&apos;t have any idea how to calculate the total return on investment. Whether you are in profit or
                loss.
              </li>
              <li>
                When you feel the sales are coming down and the business conversion is affecting the overall revenue.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
