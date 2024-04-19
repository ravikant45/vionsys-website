import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="w-screen min-h-screen">
        <div
          className=" h-screen w-screen bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-photo/business-meeting_53876-91042.jpg')",
          }}
        >
          <div className="h-[50] w-[60] flex flex-col justify-start absolute mt-">
            <img
              src="https://png.pngtree.com/png-vector/20221122/ourmid/pngtree-thinking-man-illustration-with-question-mark-and-light-bulb-for-business-png-image_6475461.png"
              className="h-32 w-32  mt-20 ml-5 "
              alt=""
            />

            <div className="h-[150] w-[50]">
              <h1 className="text-zinc-600 text-6xl mt-5 px-8">
                Ready To <span className="block">Transform Your Ideas </span>Into
                Reality?
              </h1>
            </div>

            <div className="p-1 rounded-3xl bg-blue-500  mt-[420px] ml-[30px] h-[5] w-[6] text-center absolute shadow-gray-500 shadow-xl overflow-hidden">
              <p className="tracking-tighter text-white">
                At Vionsys It Solutions, we're dedicated <br /> to providing specialized
                expertise and dependable <br />support for projects of all types. Select
                the <br /> engagement model that fits your project best and <br /> set out on a
                journey toward digital excellence <br /> alongside our trusted team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
