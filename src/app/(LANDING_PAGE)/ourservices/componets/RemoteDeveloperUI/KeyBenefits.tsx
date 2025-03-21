import React from "react";

const KeyBenefits = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="py-8 sm:py-16 lg:pb-18">
        {/* Main Heading */}
        <h2 className="text-center text-3xl font-semibold text-orange p-6 mb-10">
          Key Benefits of Hiring Virtual Developers from Vionsys
        </h2>

        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
          {/* Background SVG */}
          <div className="absolute inset-x-0 hidden top-2 md:block xl:px-44 md:px-20 lg:px-28">
            <svg
              className="w-full transform transition duration-500 hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              width="875"
              height="48"
              viewBox="0 0 875 48"
              fill="none"
            >
              <path
                d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                stroke="#D4D4D8"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="1 12"
              />
            </svg>
          </div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 gap-y-8 sm:gap-y-10 md:grid-cols-3 md:gap-x-8 text-center relative">
            {[
              {
                title: "Discovery Call",
                description:
                  "Experience the difference Vionsys can make for your project. Let's connect to discuss your needs.",
              },
              {
                title: "Build Your Dream Team",
                description:
                  "We will offer flexible pricing just for you. Sign up now and seamlessly onboard your team.",
              },
              {
                title: "Get Started Now",
                description:
                  "Start your project strong with defined goals and milestones.",
              },
            ].map((benefit, index) => (
              <div key={index} className="cursor-pointer group">
                {/* Icon Section */}
                <div className="group-hover:border border-orange flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 dark:border-gray-700 rounded-full shadow group-hover:bg-blue1 group-hover:text-white">
                  <span className="text-xl font-semibold">{index + 1}</span>
                </div>
                {/* Content Section */}
                <div className="group-hover:bg-orange mt-4 shadow-lg p-4 rounded transition duration-300 h-36 flex flex-col justify-between">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-black">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 sm:mt-2 text-sm md:text-base text-black dark:text-gray-400 group-hover:text-white">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
