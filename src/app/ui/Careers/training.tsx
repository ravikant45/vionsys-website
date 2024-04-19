import React from "react";

const Training = () => {
  return (
    <div className="w-[100vw] pb-20">
      <div className="grid md:grid-cols-2 grid-cols-1 ">
        <div>
          <img
            className="flex justify-center items-center opacity-75"
            src="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="bg-blue-600 text-white flex flex-col justify-center items-center text-center px-12">
          <h1 className="text-5xl text-bold text-start py-8">
            Workshop and Training Programs
          </h1>
          <p className="text-xl text-start ">
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
