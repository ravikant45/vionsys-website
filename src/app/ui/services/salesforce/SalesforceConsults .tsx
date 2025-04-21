import Image from "next/image";
import React from "react";

function SalesforceConsults() {
  const offerings = [
    {
      title: "Implementations",
      description: [
        "Our expert team is fully prepared to help you with the installation process, integrating, and configuring your Salesforce items, personalized to your business-specific essentials. No matter you are planning to integrate new Salesforce infrastructure or migrating to Salesforce from your existing platform, it is the best choice in both cases.",
      ],
      image: "/assets/services/Salesforce/Implementations.jpg",
      reverse: false,
      alt: "Implementations",
    },
    {
      title: "Optimization",
      description: [
        "Organizations are dedicating significant resources to enhance their stability. Salesforce occurrences and the utilization of a part of the aptitudes can perfectly enhance your business stability. A decentralized evaluation can assist you adequately use Salesforce to improve your efficiency, ROI, association, and communication.",
      ],
      image: "/assets/services/Salesforce/Organizations.png",
      reverse: true,
      alt: "Optimization",
    },
    {
      title: "Execution",
      description: [
        "Our team of experienced industry specialists helps you predict outcomes, ranging from outsourced support to large-scale projects. We deal in providing consultancy Services around a vast array of services comprising: Agile Development, Staffing Augmentation, Outsourced Customer Support, Project Planning, Plan Execution & Development, Staffing Managed Services, Cross-Cloud Integrations.",
      ],
      image: "/assets/services/Salesforce/Execution.jpg",
      reverse: false,
      alt: "Execution",
    },
    {
      title: "Cross Cloud Integration",
      description: [
        "Our representatives have successfully supported hundreds of global clients in integrating, implementing and executing business operations on Salesforce. We are a team of professionals in offering Salesforce consulting services about cloud integration to formulate a 360° view of the client & empowering their 1:1 drive.",
      ],
      image: "/assets/services/Salesforce/Cross Cloud Integration.jpg",
      reverse: true,
      alt: "Cross Cloud Integration",
    },
  ];
  return (
    <div id="OurSalesforceConsults" className="h-full bg-blue-950">
      <div className="mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-12">
          {/* <p className="text-white font-medium tracking-wider uppercase text-sm mb-1">OUR SALESFORCE CONSULTS</p> */}
          <h2 className="text-3xl font-bold text-orange">
            What Our Salesforce Experts Can Do for You
          </h2>
        </div>

        <div className="space-y-12">
          {offerings.map(
            ({ title, description, image, reverse, alt }, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  reverse ? "md:flex-row-reverse" : "md:flex-row"
                } items-center mx-auto`}
              >
                <div className="md:w-1/2 flex justify-center">
                <div className="max-w-md p-4 space-y-4">
                  <h3 className="text-3xl font-bold text-orange">{title}</h3>
                  {description.map((text, i) => (
                    <p key={i} className="text-gray-200">
                      {text}
                    </p>
                  ))}
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative w-[90vw] md:w-full max-w-md h-[250px] sm:h-[300px] md:h-80 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={alt}
                      fill
                      className="object-contain opacity-80"
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default SalesforceConsults;
