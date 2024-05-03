import React from "react";

import Custom from "/public/assets/services/Salesforce/Custom.jpg";
import Customer from "/public/assets/services/Salesforce/Customer.png";
import Emerging from "/public/assets/services/Salesforce/Emerging.jpeg";
import Expansion from "/public/assets/services/Salesforce/Expansion.png";
import Growth from "/public/assets/services/Salesforce/Growth.png";
import IntegrationAI from "/public/assets/services/Salesforce/IntegrationAI.jpg";
import Security from "/public/assets/services/Salesforce/Security.jpeg";
import Image from "next/image";

function Future() {
  return (
    <div>
      <div className="px-10 py-12 text-center  relative mt-10 ">
        <div className="bg-gradient-to-r bg-clip-text text-transparent from-red-500 to-blue-700">
          <h1 className="text-3xl font-bold  text-center py-2">
            Companies utilizing Salesforce are poised for favorable future
            outcomes
          </h1>
        </div>
        <p data-aos="fade-right" className="text-lg text-gray-800 font-medium text-left">
          As a company leveraging Salesforce, it's essential to recognize that
          your future success hinges on your ability to adapt to evolving market
          trends, embrace new technologies, and prioritize customer-centric
          strategies. By remaining agile and fully harnessing the capabilities
          of the Salesforce platform, you can position yourself for long-term
          success in an increasingly competitive landscape.
        </p>
      </div>
      <div className="w-full h-auto bg-slate-400 grid-cols-6 justify-evenly">
        <section className="container space-y-6 bg-slate-50 py-4 mx-auto md:py-6 lg:py-12">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2
              data-aos="fade-left"
              className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
            >
              "Our Attributes"
            </h2>
            <p className="max-w-[85%] leading-normal text-[#3469bc] sm:text-lg sm:leading-7">
              Explore the incredible offerings provided by us to enrich your
              online visibility.
            </p>
          </div>
          <div
            data-aos="zoom-out"
            className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3"
          >{/*first */}
            <div className="relative outline outline-amber-600 hover:cursor-pointer hover:scale-105 hover:bg-blue-100 transition-all overflow-hidden rounded-3xl border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-black">
                    AI Integration
                  </h3>
                  <p className="text-sm text-muted-foreground">The integration of AI and ML into Salesforce can empower users with predictive analytics and automation capabilities, enabling more informed decision-making and personalized interactions.</p>
                </div>
              </div>
            </div>
            {/*Second */}
            <div className="relative outline outline-amber-600 hover:cursor-pointer hover:scale-105 hover:bg-blue-100 transition-all overflow-hidden rounded-3xl border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold ">
                    Customer Experience
                  </h3>
                  <p className="text-sm text-muted-foreground">In an increasingly competitive landscape, prioritizing customer experience can be a key differentiator for businesses. Salesforce's tools for understanding and engaging</p>
                </div>
              </div>
            </div>
            {/*third */}
            <div className="relative outline outline-amber-600 hover:cursor-pointer hover:scale-105 hover:bg-blue-100 transition-all overflow-hidden rounded-3xl border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-black">
                    Data Privacy and Security
                  </h3>
                  <p className="text-sm text-muted-foreground">data privacy regulations becoming more stringent,companies must prioritize security and compliance strategies.Salesforce users need to ensure that they adhere to regulations.</p>
                </div>
              </div>
            </div>
            {/*fourth */}
            <div className="relative outline outline-amber-600 hover:cursor-pointer hover:scale-105 hover:bg-blue-100 transition-all overflow-hidden rounded-3xl border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-black">
                    Integration with Emerging Technologies
                  </h3>
                  <p className="text-sm text-muted-foreground">Integrating with emerging technologies like blockchain, IoT, and AR can unlock new opportunities for innovation and differentiation.</p>
                </div>
              </div>
            </div>
            {/*fifth */}
            <div className="relative outline outline-amber-600 hover:cursor-pointer hover:scale-105 hover:bg-blue-100 transition-all overflow-hidden rounded-3xl border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-black">
                    Customization and Flexibility
                  </h3>
                  <p className="text-sm text-muted-foreground">Salesforce's customization capabilities enable companies to tailor the platform to their specific needs and workflows. Investing in customizations and integrations</p>
                </div>
              </div>
            </div>
            {/*sixth */}
            <div className="relative outline outline-amber-600 hover:cursor-pointer hover:scale-105 hover:bg-blue-100 transition-all overflow-hidden rounded-3xl border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-black">Continued Growth</h3>
                  <p className="text-sm text-muted-foreground">As cloud-based solutions become more ubiquitous and companies increasingly adopt CRM systems, Salesforce is poised to maintain its growth trajectory.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Future;
