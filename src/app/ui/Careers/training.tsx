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
        <div className="bg-blue4 text-white flex flex-col justify-center gap-4 md:px-12 px-2 py-2">
          <h1 data-aos="fade-left" className="text-3xl font-bold text-black">
            Workshop and Training Programs
          </h1>
          <p data-aos="fade-right" className="text-base text-start ">
            With the rapid advancement of technology, workplaces must adapt, and so must their teams. We are committed to ensuring our team is well-prepared to tackle new challenges and stay abreast of industry changes. By offering a range of technical and soft-skills training, ongoing seminars, workshops, and performance evaluations, we are effectively turning our raw talent into valuable assets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Training;
