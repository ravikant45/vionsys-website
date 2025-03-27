"use client";

import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import ContactUsForm from "../../componets/software-development/ContactUsForm";

const heading = "Please fill out the form below !";
const message = "Our team will be in touch with you shortly.";

const Page: React.FC = () => {
  const searchParams = useSearchParams();
  const selectedSkills = JSON.parse(
    decodeURIComponent(searchParams.get("skills") || "[]")
  );

  return (
    <div className="relative mt-8 w-full h-[600px] flex flex-col lg:flex-row items-center justify-center mx-auto gap-8 px-4 py-8">
      {/* Right Image */}
      <div className="w-full lg:w-1/2 hidden lg:block">
        <Image
          width={500}
          height={500}
          className="w-full h-64 lg:h-full object-cover rounded-lg"
          src="/assets/VEmployee/contactImage.jpg"
          alt="Winding mountain road"
        />
      </div>
      <ContactUsForm
        heading={heading}
        message={message}
        title={"Remote IT Developer Landing Page"}
        selectedSkills={selectedSkills}
      />
    </div>
  );
};

export default Page;
