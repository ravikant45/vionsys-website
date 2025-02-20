import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ComparativeAnalysis = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const data = [
    {
      category: "Sourcing the Right Developers",
      columns: ["1-3 Months", "1-2 Days", "1-4 Weeks"],
    },
    {
      category: "Time to Start a Project",
      columns: ["2-3 Months", "1-2 Weeks", "1 Month"],
    },
    { category: "Acquisition Cost", columns: ["8-10k USD", "0", "1-5k USD"] },
    { category: "Infrastructure Cost", columns: ["10-15k USD", "0", "0"] },
    {
      category: "Pricing Per Week",
      columns: ["2000/4000 USD", "1000-1500 USD", "500-1000 USD"],
    },
    {
      category: "Project Failure",
      columns: ["Moderate", "Nil Till Date", "High"],
    },
    { category: "Dedicated Team", columns: ["No", "Yes", "Yes"] },
    { category: "Training Cost", columns: ["5000 USD", "0", "0"] },
    {
      category: "Timely Delivery",
      columns: ["Average", "Yes", "Ask For Extension"],
    },
    {
      category: "Termination Cost",
      columns: ["10-15k USD", "0", "Based On Contract"],
    },
    {
      category: "Assured Working Hours",
      columns: ["40", "40-45", "Uncertain"],
    },
    {
      category: "Quality Auditor",
      columns: ["5000 USD/Week", "0", "Additional"],
    },
    { category: "Data Privacy", columns: ["High", "High", "Low"] },
  ];

  const headers = [
    "Hiring In-House Developers",
    "Vionsys IT Solutions",
    "Freelancers/Upworks",
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="text-gray-700 body-font overflow-hidden bg-white py-5 md:p-6 p-4 "
    >
      <div className="container lg:px-20 mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl font-bold text-center text-blue1 mb-10"
        >
          Comparative Analysis
        </motion.h1>

        <div className="flex flex-wrap">
          {/* Left Sidebar */}
          <motion.div
            initial={{ x: -100 }}
            animate={isInView ? { x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:w-1/4 mt-20 hidden lg:block"
          >
            <div className="rounded-lg overflow-hidden shadow-md">
              {data.map((item, index) => (
                <p
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-blue-100" : "bg-white"
                  } text-gray-700 text-center h-12 flex items-center justify-start px-4 font-medium`}
                >
                  {item.category}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Right Table */}
          <motion.div
            initial={{ x: 100 }}
            animate={isInView ? { x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex lg:w-[75%] w-full space-x-4" // Use space-x-4 to evenly space the columns horizontally
          >
            {headers.map((header, headerIndex) => (
              <motion.div
                key={headerIndex}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`w-full lg:w-1/3 mb-10 lg:mb-0 border-2 ${
                  header === "Vionsys IT Solutions"
                    ? "border-orange relative shadow-lg"
                    : "border-gray-300"
                } rounded-lg`}
                style={{ position: "relative" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.zIndex = "10";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.zIndex = "1";
                }}
              >
                {header === "Vionsys IT Solutions" && (
                  <span className="bg-orange text-white px-3 py-1 text-xs absolute right-0 top-0 rounded-bl">
                    Recommended
                  </span>
                )}

                <div className="px-2 text-center h-20 flex flex-col items-center justify-center rounded-sm bg-white">
                  <h2
                    className={`text-lg font-semibold text-black ${
                      header === "Vionsys IT Solutions" ? "text-blue1" : ""
                    } rounded-lg`}
                  >
                    {header}
                  </h2>
                </div>

                {/* Add padding to Vionsys IT Solutions */}
                {header === "Vionsys IT Solutions" ? (
                  <div>
                    {data.map((item, rowIndex) => (
                      <p
                        key={rowIndex}
                        className={`${
                          rowIndex % 2 === 0 ? "bg-blue-50" : "bg-white"
                        } text-gray-600 text-center h-12 flex items-center justify-center`}
                      >
                        {item.columns[headerIndex]}
                      </p>
                    ))}
                  </div>
                ) : (
                  data.map((item, rowIndex) => (
                    <p
                      key={rowIndex}
                      className={`${
                        rowIndex % 2 === 0 ? "bg-blue-50" : "bg-white"
                      } text-gray-600 text-center h-12 flex items-center justify-center`}
                    >
                      {item.columns[headerIndex]}
                    </p>
                  ))
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ComparativeAnalysis;
