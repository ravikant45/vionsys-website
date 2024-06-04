import Image from "next/image";
import React from "react";
import DigitalMarketingImage from "/public/assets/services/DigitalMarketing/DigitalMarketing.jpg";
import ScheduleMeetAndContactCTA from "@/utils/ScheduleMeetAndContactCTA";

const ServicesTemplateFour: React.FC = () => {
  return (
    <main>
      {/* First section */}
      <section className="w-[100vw] md:h-screen mmd:h-[70vh] ssm:[60vh] h-[50vh]">
        <div className="w-full h-full relative bg-black">
          <Image
            src={DigitalMarketingImage}
            alt=""
            className="w-full h-full md:opacity-30 z-0"
          />
          <div className="bg-transparent z-10 text-white absolute top-0  h-full flex flex-col justify-center items-center w-full px-4">
            <div className="md:w-[60%] w-full flex flex-col gap-6">
              <h3
                data-aos="fade-left"
                className="font-extrabold md:text-5xl text-lg"
              >
                Integrated Digital Marketing Services
              </h3>
              <p
                data-aos="fade-right"
                className="md:text-lg text-sm font-semibold"
              >
                Whether you are a small business or a large corporation, we are
                equipped to boost your digital marketing success. What sets us
                apart in India's digital marketing landscape is our commitment
                to staying ahead of trends. Alongside traditional services like
                SEO and PPC, we excel in social media, email and content
                marketing. With our innovative strategies, we're ready to
                enhance your online presence and drive results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section2 */}
      <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue1 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">Digital Marketing</span>
            </span>{" "}
            Strategies
          </h2>
        </div>

        <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-gray-200 flex flex-col justify-between p-5 border rounded shadow-sm hover:bg-gray-300 transition duration-300">
            <div>
              <h6 className="mb-2 font-semibold text-lg leading-5">
                Search Engine Optimization (SEO)
              </h6>
              <p className="mb-3 text-base text-gray-900">
                SEO optimizes your website's content, structure, and technical
                aspects to improve search engine rankings and increase organic
                traffic, including on-page SEO, off-page SEO, and technical SEO.
              </p>
            </div>
          </div>
          <div className="bg-gray-200 flex flex-col justify-between p-5 border rounded shadow-sm hover:bg-gray-300 transition duration-300">
            <div>
              <h6 className="mb-2 font-semibold text-lg leading-5">
                Content Marketing
              </h6>
              <p className="mb-3 text-base text-gray-900">
                Content marketing involves creating and sharing valuable,
                relevant content to attract and retain a target audience. This
                includes blog posts, videos, infographics, ebooks, and
                whitepapers to educate or entertain and drive profitable
                customer actions.
              </p>
            </div>
          </div>
          <div className="bg-gray-200 flex flex-col justify-between p-5 border rounded shadow-sm hover:bg-gray-300 transition duration-300">
            <div>
              <h6 className="mb-2 font-semibold text-lg leading-5">
                Email Marketing
              </h6>
              <p className="mb-3 text-base text-gray-900">
                Email marketing sends targeted messages to subscribers to
                nurture leads and build relationships, including newsletters,
                promotions, and automated sequences delivering personalized
                content based on user behavior.
              </p>
            </div>
          </div>
          <div className="bg-gray-200 flex flex-col justify-between p-5 border rounded shadow-sm hover:bg-gray-300 transition duration-300">
            <div>
              <h6 className="mb-2 font-semibold text-lg leading-5">
                Social Media Marketing
              </h6>
              <p className="mb-3 text-base text-gray-900">
                Social media marketing utilizes platforms such as Facebook,
                Instagram, Twitter, LinkedIn, and TikTok to promote products,
                engage customers, and increase brand awareness through organic
                posts and targeted paid advertising campaigns.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section3 */}
      <div className="container mx-auto">
        <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
          <h2
            data-aos="fade-right "
            data-aos-duration="1000"
            data-aos-delay="200"
            className="text-2xl font-bold text-blue1 leading-none sm:text-4xl"
          >
            Why Choose Us?
          </h2>
        </div>
        <div className="grid grid-cols-5 p-4 md:p-8">
          <div className="flex justify-center px-4 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start">
            <button className="p-2 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-700 dark:text-gray-600">
              Industry Expertise
            </button>
            <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-violet-600 dark:text-gray-900">
              Innovative Technology
            </button>
            <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-700 dark:text-gray-600">
              Tailored Solutions
            </button>
            <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-700 dark:text-gray-600">
              Exceptional Support
            </button>
            <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-700 dark:text-gray-600">
              Proven Track Record
            </button>
          </div>
          <div className="grid gap-12 py-4 text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left">
            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 dark:text-violet-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                ></path>
              </svg>
              <h5 className="text-xl font-semibold">Industry Expertise</h5>
              <p>
                With years of experience in the software industry, we possess an
                in-depth understanding of your business needs, ensuring that our
                solutions are finely tuned to drive your success.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 dark:text-violet-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                ></path>
              </svg>
              <h5 className="text-xl font-semibold">Innovative Technology</h5>
              <p>
                Stay ahead with our cutting-edge, future-proof solutions
                leveraging the latest technology.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 dark:text-violet-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                ></path>
              </svg>
              <h5 className="text-xl font-semibold">Tailored Solutions</h5>
              <p>
                We understand your uniqueness. Our personalized approach crafts
                tailored solutions aligned perfectly with your needs.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 dark:text-violet-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                ></path>
              </svg>
              <h5 className="text-xl font-semibold">Exceptional Support</h5>
              <p>
                Our 24/7 support ensures seamless operations. Count on us for
                prompt solutions whenever you need them.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 dark:text-violet-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                ></path>
              </svg>
              <h5 className="text-xl font-semibold">Proven Track Record</h5>
              <p>
                Backed by a proven track record of successful projects and
                satisfied clients, we're the trusted partner you need to achieve
                your business objectives. Choose us for results you can rely on.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ section for digital marketing */}
      <section
        id="faq"
        className="relative mx-auto py-12 md:px-20 px-4 w-full dark:bg-black bg-white  flex flex-col items-center justify-center"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <h3
          data-aos="zoom-out"
          className="text-orange text-center text-3xl font-extrabold decoration-orange lg:text-left xl:text-4xl z-10"
        >
          Frequently Asked Questions
        </h3>

        <div data-aos="fade-left" className="my-6 z-10">
          <div className="rounded-t-2xl bg-teal-600/80 w-full  select-none border-2 border-teal-600/30 px-4 py-4 text-gray-100 transition duration-300 hover:border-teal-600/80 hover:text-white">
            <h4 className="text-lg font-medium">
              What are the key digital marketing channels and strategies?
            </h4>
          </div>
          <div className="inline-flex w-full rounded-b-2xl border-x-2 border-b-2 border-dashed   px-4 py-4 ">
            <h5>
              Key channels include social media, email marketing, SEO, PPC
              advertising and content marketing. Strategies involve creating
              engaging content, targeting specific demographics and leveraging
              data analytics for optimization.
            </h5>
          </div>
        </div>

        <div data-aos="fade-right" className="my-6 z-10">
          <div className="rounded-t-2xl bg-teal-600/80 w-full  select-none border-2 border-teal-600/30 px-4 py-4 text-gray-100 transition duration-300 hover:border-teal-600/80 hover:text-white">
            <h4 className="text-lg font-medium">
              How can businesses measure the success of digital marketing
              efforts?
            </h4>
          </div>
          <div className="inline-flex w-full rounded-b-2xl border-x-2 border-b-2 border-dashed   px-4 py-4 ">
            <h5>
              Success can be measured through metrics like website traffic,
              conversion rates, click-through rates and return on investment
              (ROI). Tools such as Google Analytics provide valuable insights
              into user behavior and campaign performance.
            </h5>
          </div>
        </div>

        <div data-aos="fade-left" className="my-6 z-10">
          <div className="rounded-t-2xl bg-teal-600/80 w-full select-none border-2 border-teal-600/30 px-4 py-4 text-gray-100 transition duration-300 hover:border-teal-600/80 hover:text-white">
            <h4 className="text-lg font-medium">
              What are common challenges in digital marketing and how to
              overcome them?
            </h4>
          </div>
          <div className="inline-flex w-full rounded-b-2xl border-x-2 border-b-2 border-dashed  px-4 py-4 ">
            <h5>
              Challenges include fierce competition, changing algorithms and
              audience saturation. Overcome by staying updated on industry
              trends, creating unique and valuable content, engaging with your
              audience authentically and adapting strategies based on
              data-driven insights.
            </h5>
          </div>
        </div>
      </section>

      {/* Schedule a meet or contact us section */}
      <ScheduleMeetAndContactCTA />
    </main>
  );
};

export default ServicesTemplateFour;
