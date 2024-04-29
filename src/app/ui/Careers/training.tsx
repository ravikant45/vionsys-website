import React from "react";
import TrainingWorkshopImage from "/public/assets/career/trainingWorkshop.jpg";
import Image from "next/image";
const Training = () => {
  return (
    <div className="w-[100vw] pb-20">
      <div className="grid md:grid-cols-2 grid-cols-1 ">
        <div className="bg-black">
          <Image
            data-aos="zoom-out"
            className="flex justify-center items-center opacity-55"
            src={TrainingWorkshopImage}
            alt=""
          />
        </div>
        <div className="bg-blue4 text-white flex flex-col justify-center gap-4 px-12">
          <h1 data-aos="fade-left" className="text-2xl font-bold">
            Workshop and Training Programs
          </h1>
          <p data-aos="fade-right" className="text-md text-start ">
            As technology advances, the workplaces need strategies to evolve, so
            the teams! We like to keep our team ready to take on new challenges
            and have a thorough understanding of the changing landscape of the
            industry. Through the various technical as well as soft-skills
            training, continuous and ongoing seminars/ workshops and performance
            matrix we are successfully transforming the raw resources into the
            assets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Training;
