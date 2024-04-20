import React from "react";
import Image from "next/image";

const About3 = () => {
  return (
    <>
      <div className="w-screen h-[500px] box-border flex justify-evenly items-center py-4">
        <div className="w-[20%] h-[380px] flex flex-col items-center gap-4 shadow-2xl shadow-blue-300">
          <Image src="/vision1.svg" alt="Vision 1" height={200} width={200} />
          <h1 className="text-3xl font-bold">Vision</h1>
          <p className="text-center px-2 py-2">
            Setting the standard as a global IT solution provider, prioritizing
            customer relationships above all.
          </p>
        </div>

        <div className="w-[20%] py-10 h-[380px] flex flex-col items-center gap-4 shadow-2xl shadow-blue-300">
          <Image src="/mission1.svg" alt="Vision 1" height={200} width={200} />
          <h1 className="text-3xl font-bold">Mission</h1>
          <p className="text-center px-2 py-2">
            To provide cutting-edge IT services that empower our clients to
            maintain a competitive edge and stay ahead of the curve.
          </p>
        </div>

        <div className="w-[20%] py-7 h-[380px] flex flex-col items-center gap-4 shadow-2xl shadow-blue-300">
          <Image src="/ab3.svg" alt="Vision 1" height={200} width={200} />
          <h1 className="text-3xl font-bold mt-4">Strength & Motto</h1>
          <p className="text-center px-2 py-2">
            To harness the power of technology for the advancement and benefit of mankind.
          </p>
        </div>
      </div>
    </>
  );
};

export default About3;
