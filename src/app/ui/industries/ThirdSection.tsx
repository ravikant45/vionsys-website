import React from "react";

const ThirdSection = () => {
  return (
    <>
  {/* Parent div */}
  <div className="flex flex-col md:flex-row justify-center w-full "data-aos="fade-up">
    <div
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041862.jpg?w=900&t=st=1714365428~exp=1714366028~hmac=0e6b9927879e7f8083c3992ff1bf8b022c092926951c79170c481d84424406ad')",
      }}
      className="bg-contain bg-no-repeat w-full md:w-1/2 pt-0 m-2"
    ></div>
    <div className="bg-grey m-2 h-[75vh] w-full md:w-1/2">
      <h1 className="text-5xl font-extrabold text-blue-700">Insurance</h1>
      <h2 className="text-4xl font-bold text-amber-600 md:w-[50vw] pt-7">
        Empowering insurers to adapt, innovate, and thrive.
      </h2>
      <p className="font-medium pt-3">
        Catalyzing insurance evolution through tailored IT solutions, we're here
        to streamline operations, fortify security, and drive unparalleled
        growth. With our expertise, your insurance business will navigate the
        digital landscape seamlessly, delivering enhanced customer experiences
        and sustainable success. Trust us to be your partner in harnessing the
        power of technology to redefine the future of insurance
      </p>
    </div>
  </div>
  {/* Second div */}
  <div className="flex flex-col md:flex-row h-[75vh] justify-evenly w-full">
    <div className="bg-grey m-3 h-[70vh] w-full md:w-1/2 indent-3">
      <h1 className="text-5xl font-extrabold text-blue-700 pt-2">
        Healthcare
      </h1>
      <h2 className="text-3xl font-bold text-amber-600 md:w-[40vw] mt-2">
        Delivering precision, enhancing care.
      </h2>
      <p className="font-medium pt-3 text-left">
        Empowering healthcare organizations with innovative IT solutions, we're
        dedicated to revolutionizing patient care, optimizing operations, and
        ensuring data security in an ever-evolving landscape. From seamless
        integration to cutting-edge digital tools, we're committed to enhancing
        efficiency and enabling better outcomes. Partner with us to navigate
        the complexities of healthcare technology and unlock new possibilities
        for improving lives.
      </p>
    </div>
    <div
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/doctor-is-seen-writing-notes-clipboard-welllit-hospital-corridor-with-plenty-space-additional-information_157027-3064.jpg?t=st=1714202057~exp=1714205657~hmac=aa7ece56e117d8d61b37ce9d993646bf14af85e5c82883a3bd576187f2923fc9&w=1060')",
      }}
      className="bg-contain bg-no-repeat w-full md:w-1/2 m-2"
    ></div>
  </div>
  {/* Third Div */}
  <div className="flex flex-col md:flex-row justify-center w-full">
    <div
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/medium-shot-kid-with-laptop-indoors_23-2150909590.jpg?t=st=1714299376~exp=1714302976~hmac=8be57bb6693d81f2f296ba51a3193e466e7de3b0b0281265397e732a09e856f8&w=1060')",
      }}
      className="bg-contain bg-no-repeat w-full md:w-1/2 h-[75vh] pt-0 m-2"
    ></div>
    <div className="bg-grey m-2 h-[75vh] w-full md:w-1/2">
      <h1 className="text-5xl font-extrabold text-blue-700">Education</h1>
      <h2 className="text-4xl font-bold text-amber-600 md:w-[50vw] pt-7">
        Elevating education through seamless integration of technology.
      </h2>
      <p className="font-medium pt-3">
        Empowering educators and institutions with innovative IT solutions,
        we pave the way for transformative learning experiences. From seamless
        management systems to interactive platforms, our solutions revolutionize
        education delivery, ensuring efficiency, engagement, and excellence.
        With us as your partner, embrace the digital revolution and unlock the
        full potential of education in the 21st century
      </p>
    </div>
  </div>
  {/* Fourth div started */}
  <div className="flex flex-col md:flex-row h-[75vh] justify-evenly w-full">
    <div className="bg-grey m-3 h-[70vh] w-full md:w-1/2 indent-3">
      <h1 className="text-5xl font-extrabold text-blue-700 pt-2">
        Professional Services
      </h1>
      <h2 className="text-3xl font-bold text-amber-600 md:w-[40vw] mt-2">
        Empowering professionals to thrive in a digital-first world.
      </h2>
      <p className="font-medium pt-3">
        Empowering healthcare organizations with innovative IT solutions, we're
        dedicated to revolutionizing patient care, optimizing operations, and
        ensuring data security in an ever-evolving landscape. From seamless
        integration to cutting-edge digital tools, we're committed to enhancing
        efficiency and enabling better outcomes. Partner with us to navigate
        the complexities of healthcare technology and unlock new possibilities
        for improving lives.
      </p>
    </div>
    <div
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/creative-people-working-office_23-2147656715.jpg?t=st=1714300116~exp=1714303716~hmac=3c38e298ba8515fe7da46bc9dedb1876bd04c61f430c1177150313deb87ec879&w=900')",
      }}
      className="bg-contain bg-no-repeat w-full md:w-1/2 m-2"
    ></div>
  </div>
</>

  );
};

export default ThirdSection;
