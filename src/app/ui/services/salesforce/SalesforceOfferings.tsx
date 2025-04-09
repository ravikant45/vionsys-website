import Image from "next/image";
import React from "react";

const offerings = [
  {
    title: "Salesforce Consulting Services",
    description: [
      "Our Salesforce consulting firms in the usa empower your Sales, Customer Service, Marketing and Technology teams by transforming vision into practical technology solutions, Change behaviour, not just technology.",
      "We’re here to offer end to end Salesforce Consulting Services for the cloud that involves developing applications, collaborating cloud applications and supporting cloud solutions for your end-users.",
    ],
    image: "/assets/services/Salesforce/Salesforce Consulting Services.jpg",
    reverse: true,
    alt: "Salesforce Consulting Services",
  },
  {
    title: "Salesforce Appexchange",
    description: [
      "Vionsys's team uses Force.com domain knowledge and technical expertise to develop applications for companies to deploy on the AppExchange®.",
    ],
    image: "/assets/services/Salesforce/Salesforce Appexchange.jpg",
    reverse: false,
    alt: "Salesforce Appexchange",
  },
  {
    title: "Salesforce Integration",
    description: [
      "Integrate your organization's existing systems into one centralized, accessible platform. With Salesforce Integration, salesforce consulting companies in USA you can cut waste and drive efficiency and reduce costs dramatically.",
    ],
    image: "/assets/services/Salesforce/cloudback.jpg",
    reverse: true,
    alt: "Salesforce Integration",
  },
];

function SalesforceOfferings() {
  return (
    <div id="OurOfferings" className="h-full mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-12">
        <p className="text-orange font-medium tracking-wider uppercase text-sm mb-1">
          EXPERTISE
        </p>
        <h2 className="text-3xl font-bold text-blue1">What We Offer</h2>
      </div>

      <div className="space-y-24">
        {offerings.map(({ title, description, image, reverse, alt }, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-8`}
          >
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-3xl font-bold text-blue1">{title}</h3>
              {description.map((text, i) => (
                <p key={i} className="text-gray-700">
                  {text}
                </p>
              ))}
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-[90vw] md:w-full max-w-md h-[250px] sm:h-[300px] md:h-80 rounded-lg overflow-hidden">
                <Image src={image} alt={alt} fill className="object-contain" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SalesforceOfferings;
