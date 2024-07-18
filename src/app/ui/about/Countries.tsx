import React from "react";
import Image, { StaticImageData } from "next/image";
import inflag from "/public/assets/Countries/in-flag.gif";
import qa from "/public/assets/Countries/qa-flag.gif";
// import sn from "/public/assets/Countries/sn-flag.gif";
import us from "/public/assets/Countries/us-flag.gif";

interface CountryData {
  id: string;
  flag: StaticImageData;
  name: string;
  description: string;
  alt: string;
  extra?: string;
  extra1?: string;
  extra2?: string
}

const countriesData: CountryData[] = [
  {
    id: "in",
    flag: inflag,
    name: "India",
    description: "Stellar Spaces Office no.504 6th floor, Opposite Zensar IT Park Kharadi , Pune.",
    alt: "Ind-Flag",
    extra: "(HeadQuarters)",
    extra1: "Contact no: (020) 4724-2493",
    extra2: "Mobile no: +91 8766613742"
  },
  {
    id: "us",
    flag: us,
    name: "U.S.A",
    description: "Lyndon B, Dallas, TX United States",
    alt: "US-Flag"
  },
  {
    id: "qa",
    flag: qa,
    name: "Qatar",
    description: "Icono View building, Near Holiday Villa C Ring Road, Qatar ",
    alt: "Qtr-Flag",
    extra1: "Contact no: +974 70769424"
  }
  // },
  // {
  //   id: "sn",
  //   flag: sn,
  //   name: "Singapore",
  //   description: "Office Address",
  //   alt: "Singpr Flag"
  // }
];

const Countries: React.FC = () => {
  return (
    <div className="md:h-full h-auto py-6">
      <div className="mx-auto px-6 md:px-12 xl:px-6">
        <div className="md:w-2/3 lg:w-full flex flex-col justify-center items-center text-gray-100">
          <h2 className="py-2 text-2xl md:w-2/3 font-bold text-center text-blue1 md:text-3xl">
            Our Diverse Worldwide Locations and Regional Offices.
          </h2>
        </div>
        <div className="grid divide-y overflow-hidden rounded-xl justify-center shadow-lg bg-slate-100 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-3">
          {countriesData.map((country) => (
            <div key={country.id} className="group relative ">
              <div className="relative items-center space-y-4 py-10 p-8">
                <Image
                  src={country.flag}
                  loading="lazy"
                  width="500"
                  height="500"
                  className="w-40 h-24 border border-gray-300 rounded-lg"
                  alt={country.alt}
                />
                <div className="space-y-2">
                  <h5 className="text-2xl font-semibold text-black">
                    {country.name} {country.extra && <span className="font-normal text-sm">{country.extra}</span>}
                  </h5>
                  <p className="text-gray-600 text-paragraph">{country.description}
                    {country.extra1 && <span className="font-bold flex text-sm">{country.extra1}</span>}
                    {country.extra2 && <span className="font-bold flex text-sm">{country.extra2}</span>}
                  </p>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
