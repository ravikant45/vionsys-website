import React from "react";

const About2 = () => {
  return (
    <>
      <div className="w-screen lg:h-[40] flex justify-center items-center py-2 ">
        <div className="h-[300px] w-[1300px]  py-2 flex flex-wrap justify-around ">
          <h1 className="lg:h-[100px] h-10 lg:w-[550px] w-auto lg:text-4xl text-2xl font-bold">
            Crafting Solutions For{" "}
            <span className="text-blue-700 ">Global Innovators.</span>
          </h1>
          <p className="lg:h-[200px] h-32 lg:w-[600px] w-auto lg:mt-12 -top-10 px-4 text-lg font-light text-blue-900">
            Vionsys IT solutions INDIA Pvt. Ltd. is a leading IT company
            providing comprehensive solutions. From software development and
            cloud services to cybersecurity and IT consulting, we offer a wide
            range of expertise. Our experienced team delivers tailored
            solutions, ensuring efficiency, reliability, and scalability, to
            help businesses thrive in the digital era.
          </p>
        </div>
      </div>

      <div className="w-screen h-[40] flex justify-center items-center py-4">
        <div className="h-[300px] w-[1300px] flex justify-around px-2">
          <h1 className="lg:px-4 h-[200px] w-[700px] lg:text-2xl text-sm font-semibold">
            At our core, we've been driven by a clear objective: supporting
            entrepreneurs in bringing meaningful software solutions to life. Our
            dedication lies in creating and launching products that serve and
            benefit people, driving positive change for a better world, and that
            includes our own.
          </h1>
          <img
            src="https://img.freepik.com/free-vector/illustration-social-media-concept_53876-18383.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default About2;
