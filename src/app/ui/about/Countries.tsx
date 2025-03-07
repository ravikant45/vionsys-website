import React from "react";
import inflag from "/public/assets/Countries/in-flag.gif";
import usflag from "/public/assets/Countries/us-flag.gif";
import {
  FaBuilding,
  FaPhone,
  FaMobileAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const OfficeBranches = () => {
  // Define the office data
  const offices = [
    {
      id: "in",
      name: "India",
      flag: inflag,
      description: `Vionsys IT Solutions India Pvt. Ltd.`,
      address:
        "502, World Trade Center, Tower 1, Kharadi, Pune, India - 411014",
      extra: "(HeadQuarters)",
      extra1: "Contact no: (020) 4724-2493",
      extra2: "Mobile no: +91 8766613742",
    },
    {
      id: "us",
      name: "U.S.A",
      flag: usflag,
      description: "Lyndon B, Dallas, TX United States",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className=" font-bold text-MainHeading mb-4">
            Our Diverse Worldwide Locations and Regional Offices.
          </h2>
        </div>

        {/* Office Cards */}
        <div className="grid md:grid-cols-2 gap-x-4 gap-y-6">
          {offices.map((office) => (
            <div
              key={office.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-8">
                {/* Header with Flag and Name */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <FaBuilding className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {office.name}
                      {office.extra && (
                        <span className=" block text-sm text-blue-600">
                          {office.extra}
                        </span>
                      )}
                    </h3>
                  </div>
                  <div className="relative overflow-hidden rounded-lg h-16 w-24">
                    <img
                      src={office.flag.src}
                      alt={`${office.name} flag`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Office Details */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <FaMapMarkerAlt className="h-5 w-5 text-orange mt-1 flex-shrink-0" />
                    <div className="flex flex-col">
                      <p className="text-gray-600">{office.description}</p>
                      <p className="text-gray-600">{office.address}</p>
                    </div>
                  </div>

                  {office.extra1 && (
                    <div className="flex items-center space-x-3">
                      <FaPhone className="h-5 w-5 text-orange" />
                      <p className="text-gray-600">{office.extra1}</p>
                    </div>
                  )}

                  {office.extra2 && (
                    <div className="flex items-center space-x-3">
                      <FaMobileAlt className="h-5 w-5 text-orange" />
                      <p className="text-gray-600">{office.extra2}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeBranches;
