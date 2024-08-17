import React from "react";
import Image, { StaticImageData } from "next/image";
import CLUTCHLogo from "../../../public/assets/About/CLUTCHLogo.png";
import DMCALogo from "../../../public/assets/About/DMCALogo.png";
import SecureLogo from "../../../public/assets/About/SecureLogo.png";
import ISO15 from "../../../public/assets/About/ISO15.png";
import ISO22 from "../../../public/assets/About/ISO22.png";

// Define the type for logo objects
type Logo = {
  src: StaticImageData;
  alt: string;
};

const logos: Logo[] = [
  { src: CLUTCHLogo, alt: "CLUTCH Logo" },
  { src: DMCALogo, alt: "DMCA Logo" },
  { src: SecureLogo, alt: "Secure Logo" },
  { src: ISO22, alt: "ISO 2200 Logo" },
  { src: ISO15, alt: "ISO 1500 Logo" },
];

const ISOLogo: React.FC = () => {
  return (
    <section className="p-5">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-extrabold tracking-tighter text-blue1 md:text-MainHeading">
          Certified Excellence in Software Development
        </h2>
        <p className="text-2xl text-orange md:text-SubHeading">
          We are proud to be a certified software company, reflecting our
          commitment to quality, innovation, and customer satisfaction. This
          certification ensures our adherence to the highest industry standards
          as we continually enhance our processes and services to stay at the
          forefront of technology.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6 lg:px-20 ">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex justify-center shadow-lg overflow-hidden group rounded-md"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              className="object-contain h-40 w-full transition-transform duration-300 ease-in-out transform group-hover:scale-110"
              placeholder="blur"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ISOLogo;
