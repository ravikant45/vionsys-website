import React from "react";

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
        <p
          data-aos="fade-right"
          className="text-base text-gray-800 font-medium text-left pt-3"
        >
          As a company leveraging Salesforce, it's essential to recognize that
          your future success hinges on your ability to adapt to evolving market
          trends, embrace new technologies, and prioritize customer-centric
          strategies. By remaining agile and fully harnessing the capabilities
          of the Salesforce platform, you can position yourself for long-term
          success in an increasingly competitive landscape.
        </p>
      </div>
      <div className="w-full h-auto bg-slate-50 grid-cols-6 justify-evenly">
        <section className="container space-y-8  py-4 mx-auto md:py-6 lg:py-12">
          <div className="mx-auto flex w-full flex-col items-center space-y-4 text-center">
            <h2
              data-aos="fade-left"
              className="font-extrabold text-MainHeading "
            >
              "Our Attributes"
            </h2>
            <p className="max-w-[85%] leading-normal font-bold text-SubHeading sm:text-xl sm:leading-7">
              Explore the incredible offerings provided by us to enrich your
              online visibility.
            </p>
          </div>
          <div
            data-aos="zoom-out"
            className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3"
          >
            {/*first */}
            <div className="relative outline outline-amber-600 hover:cursor-pointer hover:scale-105 hover:bg-blue-100 transition-all overflow-hidden rounded-3xl border bg-background p-2">
              <div className="flex h-180 flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-black">AI Integration</h3>
                  <p className="text-md text-black">
                    The integration of AI and ML into Salesforce can empower
                    users with predictive analytics and automation capabilities,
                    enabling more informed decision-making and personalized
                    interactions.
                  </p>
                </div>
              </div>
            </div>
            {/*Second */}
            <div className="relative outline outline-amber-600 hover:cursor-pointer hover:scale-105 hover:bg-blue-100 transition-all overflow-hidden rounded-3xl border bg-background p-2">
              <div className="flex h-180 flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold ">Customer Experience</h3>
                  <p className="text-md text-black">
                    In an increasingly competitive landscape, prioritizing
                    customer experience can be a key differentiator for
                    businesses. Salesforce's tools for understanding and
                    engaging
                  </p>
                </div>
              </div>
            </div>
            {/*third */}
            <div className="relative outline outline-amber-600 hover:cursor-pointer hover:scale-105 hover:bg-blue-100 transition-all overflow-hidden rounded-3xl border bg-background p-2">
              <div className="flex h-180 flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-black">
                    Data Privacy and Security
                  </h3>
                  <p className="text-md text-black">
                    data privacy regulations becoming more stringent,companies
                    must prioritize security and compliance
                    strategies.Salesforce users need to ensure that they adhere
                    to regulations.
                  </p>
                </div>
              </div>
            </div>
            {/*fourth */}
            <div className="relative outline outline-amber-600 hover:cursor-pointer hover:scale-105 hover:bg-blue-100 transition-all overflow-hidden rounded-3xl border bg-background p-2">
  <div className="flex h-180 flex-col justify-between rounded-md p-6">
    <div className="space-y-2">
      <h3 className="font-bold text-black">
        Integration with Emerging Technologies
      </h3>
      <p className="text-md text-black">
        Integrating with emerging technologies like blockchain, IoT,
        and AR can unlock new opportunities for innovation and
        differentiation.
      </p>
    </div>
  </div>
</div>

            {/*fifth */}
            <div className="relative outline outline-amber-600 hover:cursor-pointer hover:scale-105 hover:bg-blue-100 transition-all overflow-hidden rounded-3xl border bg-background p-2">
              <div className="flex h-180 flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-black">
                    Customization and Flexibility
                  </h3>
                  <p className="text-md text-black">
                    Salesforce's customization capabilities enable companies to
                    tailor the platform to their specific needs and workflows.
                    Investing in customizations and integrations
                  </p>
                </div>
              </div>
            </div>
            {/*sixth */}
            <div className="relative outline outline-amber-600 hover:cursor-pointer hover:scale-105 hover:bg-blue-100 transition-all overflow-hidden rounded-3xl border bg-background p-2">
              <div className="flex h-180 flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-black">Continued Growth</h3>
                  <p className="text-md text-black">
                    As cloud-based solutions become more ubiquitous and
                    companies increasingly adopt CRM systems, Salesforce is
                    poised to maintain its growth trajectory.
                  </p>
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
