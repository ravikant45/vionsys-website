import Image from "next/image";
import React from "react";
import GovindRathod from "../../../../public/assets/About/Govind Rathod.jpeg";

const CeoDesk = () => {
  return (
    <section className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      <article className="max-w-6xl px-6 py-14 mx-auto space-y-12 dark:bg-gray-100 dark:text-gray-900">
        {/* <div className="pt-12 border-t dark:border-gray-300"> */}
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row border-2 border-gray-400 rounded-xl p-8 shadow-xl bg-white">
          <Image
            src={GovindRathod}
            alt=""
            className="self-center justify-start flex-shrink-0 w-48 h-48 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300"
          />
          <div className="flex flex-col">
            <h4 className="font-extrabold py-5 text-MainHeading">
              From
              <span className="text-orange"> CEO's</span> Desk
            </h4>
            <p className="dark:text-gray-600 font-medium">
              As we navigate the ever-changing tech landscape, our commitment to
              leveraging IT's potential has driven us to create solutions that
              meet diverse global needs.
            </p>
            <p className="py-3 font-medium">
              With an entrepreneurial mindset, my goal is to foster growth and
              contribute positively to society through innovative digital
              solutions. Embracing optimism and building trust remain central to
              our mission.
            </p>
            <p className=" font-medium">
              In essence, my vision as CEO can be captured in three words:
              Innovation, Technology, and Connection.
            </p>
            <p className=" font-medium">
              Thank you for your continued dedication.
            </p>
            <p className="pt-8 font-bold text-lg">Govind Rathod</p>
            <p className="text-sm font-medium">Founder & CEO</p>
          </div>
        </div>
        {/* </div> */}
      </article>
    </section>
  );
};

export default CeoDesk;
