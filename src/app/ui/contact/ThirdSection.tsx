import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { RxLinkedinLogo } from "react-icons/rx";

const ThirdSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const number = formData.get("number") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Handle form submission
    console.log({ name, email, message, number });
    e.currentTarget.reset();
  };
  return (
    <div>
      <div className=" w-full justify-center pt-3">
        <h1 className="flex justify-center lg:text-pretty text-3xl font-semibold text-decoration underline-offset-0 underline-solid">
          Drop us a Line
        </h1>
      </div>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label form="name" className="block mb-2 font-bold text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label form="email" className="block mb-2 font-bold text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            form="number"
            className="block mb-2 font-bold text-gray-600 placeholder:text-slate-400"
          >
            Contact Number
          </label>
          <input
            type="text"
            id="number"
            name="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label form="message" className="block mb-2 font-bold text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-1/2 py-2 px-4 bg-indigo-400 hover:bg-indigo-500 text-black font-bold rounded-md focus:outline-none focus:bg-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="Location Area mt-6">
        <div className="flex  lg:flex-col h-full w-full md:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6818.152391642604!2d73.93858737762325!3d18.546651353587574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf282419d50d%3A0x2cc71f615579ab3a!2sVionsys%20IT%20Solutions%20India%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1713765708125!5m2!1sen!2sin"
            width="screen"
            height="500"
            loading="eager"
          ></iframe>
        </div>
      </div>
      <div className="flex justify-center bg-gray-200 w-full h-[50vh]">
        <div className="pt-20 text-black lg:text-4xl md:text-3xl sm:text-2xl font-extrabold">
          <h1 className="inline">
            Stay Updated With Our{" "}
            <span className="flex">Social Media Channels</span>
          </h1>
          <div className="w-full h-5 text-black">
            <ul>
              <li>
                <div className="flex justify-center md:justify-start mt-7 pl-24">
                  <BsFacebook size={40} className="mr-3" color="blue" />
                  <BsInstagram size={40} className="mr-3" color="#e1306c" />
                  <RxLinkedinLogo size={40} color="#0077B5" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThirdSection;
