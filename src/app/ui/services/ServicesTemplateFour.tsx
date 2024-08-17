"use client";
import Image from "next/image";
import React from "react";
import DigitalMarketingImage from "/public/assets/services/DigitalMarketing/DigitalMarketing.jpg";
import ScheduleMeetAndContactCTA from "@/utils/ScheduleMeetAndContactCTA";
import SearchEngineOptimization from "/public/assets/services/DigitalMarketing/seo1.jpg";
import ContentMarketing from "/public/assets/services/DigitalMarketing/content.jpg";
import SocialMediaMarketing from "/public/assets/services/DigitalMarketing/social.jpg";
import EmailMarketing from "/public/assets/services/DigitalMarketing/Email.jpg";
import { motion } from "framer-motion";
import ClientsServices from "@/utils/ClientsServices";
const ServicesTemplateFour: React.FC = () => {
  return (
    <main>
      {/* First section */}
      <section className="w-[100vw] md:h-screen sm:[60vh] h-[50vh]">
        <div className="w-full h-full relative bg-black">
          <Image
            src={DigitalMarketingImage}
            alt=""
            className="w-full h-full opacity-30  z-0"
          />
          <div className="bg-transparent z-10 text-white absolute top-0  h-full flex flex-col justify-center items-center w-full md:px-4 px-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.3,
                scale: { type: "spring", stiffness: 30 },
                duration: 0.6,
                ease: "easeInOut",
              }}
              className="md:w-[60%] w-full flex flex-col md:gap-6 "
            >
              <motion.h3
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.4 },
                  ease: "easeInOut",
                }}
                className="font-extrabold md:text-5xl text-xl"
              >
                Integrated Digital Marketing Services
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 20 },
                  opacity: { duration: 0.4 },
                  ease: "easeInOut",
                }}
                className="md:text-lg text-base font-semibold"
              >
                Whether you are a small business or a large corporation, we are
                equipped to boost your digital marketing success. What sets us
                apart in India's digital marketing landscape is our commitment
                to staying ahead of trends. Alongside traditional services like
                SEO and PPC, we excel in social media, email and content
                marketing. With our innovative strategies, we're ready to
                enhance your online presence and drive results.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* digital marketing strategies */}
      <div className="w-full flex justify-center items-center flex-col gap-6 h-auto py-10">
        <div className="w-full px-4 flex justify-center items-center">
          <h1 className="text-orange font-bold md:text-4xl text-2xl">
            Digital Marketing Strategies
          </h1>
        </div>

        <div className="flex flex-col md:gap-16 gap-4">
          {/* SEO */}
          <div className="flex md:flex-row  flex-col w-full px-4 gap-3">
            <motion.div
              initial={{ opacity: 0.0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.1,
                y: { type: "spring", stiffness: 30 },
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="md:w-[50%] w-full pt-2 flex flex-col gap-4"
            >
              <div className="flex flex-col gap-3">
                <h1 className="md:text-2xl text-xl font-semibold">
                  Search Engine Optimization(SEO)
                </h1>
                <p className="md:text-lg text-base">
                  Our SEO services in digital marketing increase online
                  visibility and drive consistent growth. Using advanced
                  techniques and extensive optimization, we increase your
                  website’s search engine ranking. Through keyword research,
                  on-page optimization and link building, we clearly position
                  your brand in search results. Our team of experts deliver
                  measurable results, drive targeted traffic and maximize ROI.
                  With a tailored, consistently refined approach, we make your
                  online presence competitive and scalable. Trust us to navigate
                  the complexities of SEO and unlock your digital marketing
                  potential.
                </p>
              </div>
              <div className="flex flex-col md:w-[50%] w-full justify-start items-start gap-4 flex-1">
                <h2 className=" md:items-start items-center md:text-xl text-orange text-lg font-semibold ">
                  Key Strategies of SEO
                </h2>
                <ul className="flex flex-col gap-3.5 w-full md:max-w-md ">
                  <li className="w-full bg-gray-100 p-3 rounded-md">
                    Keyword Research
                  </li>
                  <li className="w-full bg-gray-100 p-3 rounded-md">
                    On-Page Optimization
                  </li>
                  <li className="w-full bg-gray-100 p-3 rounded-md">
                    Competitor Analysis
                  </li>
                </ul>
              </div>
            </motion.div>
            <div className="md:w-[50%] w-full md:px-8">
              <Image
                src={SearchEngineOptimization}
                alt=""
                className="w-full h-full border rounded-2xl"
              />
            </div>
          </div>

          {/* content marketing */}
          <div className="flex md:flex-row  flex-col w-full px-4 gap-3">
            <div className="md:w-[50%]  w-full md:px-8 md:order-1 order-2">
              <Image
                src={ContentMarketing}
                alt=""
                className="w-full h-full border rounded-2xl"
              />
            </div>
            <motion.div
              initial={{ opacity: 0.0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.1,
                y: { type: "spring", stiffness: 30 },
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="md:w-[50%] w-full pt-2 flex flex-col gap-4 md:order-2 order-1 "
            >
              <div className="flex flex-col gap-3">
                <h1 className="md:text-2xl text-xl font-semibold">
                  Content Marketing
                </h1>
                <p className="md:text-lg text-base">
                  In the realm of digital marketing, our content marketing
                  service is a cornerstone for building brand authority and
                  driving engagement. Through strategic storytelling and
                  engaging content creation, we connect with your audience and
                  establish your brand as a thought leader in your industry.
                  Focused on providing valuable and relevant content, we aim to
                  educate, inspire and engage your audience, inspire organic
                  growth and nurture long-term customer relationships. Trust us
                  to develop customized content strategies that resonate with
                  your audience and elevate your brand’s presence in the digital
                  landscape.
                </p>
              </div>
              <div className="flex flex-col md:w-[50%] w-full justify-start items-start gap-4 flex-1">
                <h2 className=" md:items-start items-center md:text-xl text-orange text-lg font-semibold ">
                  Key Strategies of Content Marketing
                </h2>
                <ul className="flex flex-col gap-3.5 w-full md:max-w-md ">
                  <li className="w-full bg-gray-100 p-3 rounded-md">
                    Create High-Quality Content
                  </li>
                  <li className="w-full bg-gray-100 p-3 rounded-md">
                    Measure and Analyze Performance
                  </li>
                  <li className="w-full bg-gray-100 p-3 rounded-md">
                    Engage with Your Audience
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Social media marketing */}
          <div className="flex md:flex-row  flex-col w-full px-4 gap-3">
            <motion.div
              initial={{ opacity: 0.0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.1,
                y: { type: "spring", stiffness: 30 },
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="md:w-[50%] w-full pt-2 flex flex-col gap-4"
            >
              <div className="flex flex-col gap-3">
                <h1 className="md:text-2xl text-xl font-semibold">
                  Social Media Marketing
                </h1>
                <p className="md:text-lg text-base">
                  In the dynamic realm of digital marketing, our Social Media
                  Marketing (SMM) service boosts your online presence and
                  connects with your target audience. Through innovative
                  strategies and compelling content, we amplify your brand's
                  message and drive engagement. Our expert team handles
                  everything from posts to ad campaigns, ensuring your social
                  media presence stays relevant and impactful. Trust us to
                  elevate your brand's visibility in the ever-evolving social
                  media landscape.
                </p>
              </div>
              <div className="flex flex-col md:w-[50%] w-full justify-start items-start gap-4 flex-1">
                <h2 className=" md:items-start items-center md:text-xl text-orange text-lg font-semibold ">
                  Key Strategies of SEO
                </h2>
                <ul className="flex flex-col gap-3.5 w-full md:max-w-md ">
                  <li className="w-full bg-gray-100 p-3 rounded-md">
                    Influencer Marketing
                  </li>
                  <li className="w-full bg-gray-100 p-3 rounded-md">
                    Engagement and Interaction
                  </li>
                  <li className="w-full bg-gray-100 p-3 rounded-md">
                    SEO and Hashtags
                  </li>
                </ul>
              </div>
            </motion.div>
            <div className="md:w-[50%] w-full md:px-8">
              <Image
                src={SocialMediaMarketing}
                alt=""
                className="w-full h-full border rounded-2xl"
              />
            </div>
          </div>

          {/* email marketing */}
          <div className="flex md:flex-row  flex-col w-full px-4 gap-3">
            <div className="md:w-[50%]  w-full md:px-8 md:order-1 order-2">
              <Image
                src={EmailMarketing}
                alt=""
                className="w-full h-full border rounded-2xl opacity-90"
              />
            </div>
            <motion.div
              initial={{ opacity: 0.0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.1,
                y: { type: "spring", stiffness: 30 },
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="md:w-[50%] w-full pt-2 flex flex-col gap-4 md:order-2 order-1 "
            >
              <div className="flex flex-col gap-3">
                <h1 className="md:text-2xl text-xl font-semibold">
                  Email Marketing
                </h1>
                <p className="md:text-lg text-base">
                  In digital marketing, our email marketing services stand as
                  prophets in developing direct and personal connections with
                  your audience. Through strategic campaigns and engaging
                  content, we harness the power of email to nurture customer
                  relationships and drive conversion. We use customized
                  strategies and careful attention to detail to ensure your
                  email campaigns align with your audience, deliver measurable
                  results and boost performance. Trust us to improve your email
                  marketing efforts and unlock the full potential of your
                  brand’s communication strategy.
                </p>
              </div>
              <div className="flex flex-col md:w-[50%] w-full justify-start items-start gap-4 flex-1">
                <h2 className=" md:items-start items-center md:text-xl text-orange text-lg font-semibold ">
                  Key Strategies of Email Marketing
                </h2>
                <ul className="flex flex-col gap-3.5 w-full md:max-w-md ">
                  <li className="w-full bg-gray-100 p-3 rounded-md">
                    Responsive Design
                  </li>
                  <li className="w-full bg-gray-100 p-3 rounded-md">
                    Analytics and Metrics
                  </li>
                  <li className="w-full bg-gray-100 p-3 rounded-md">
                    Personalization
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Choose us */}
      <div className="container mx-auto">
        <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
          <motion.h2
            initial={{ opacity: 0.0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              y: { type: "spring", stiffness: 30 },
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="text-2xl font-bold text-blue1 leading-none sm:text-4xl"
          >
            Why Choose Us?
          </motion.h2>
        </div>

        <div className="grid gap-6 py-4 text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              scale: { type: "spring", stiffness: 30 },
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start"
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              scale: { type: "spring", stiffness: 30 },
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start"
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              scale: { type: "spring", stiffness: 30 },
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start"
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              scale: { type: "spring", stiffness: 30 },
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start"
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              scale: { type: "spring", stiffness: 30 },
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start"
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              scale: { type: "spring", stiffness: 30 },
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start"
          >
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
            <h5 className="text-xl font-semibold">
              Comprehensive Service Offering
            </h5>
            <p>
              Providing a wide range of digital marketing services, including
              SEO, PPC, content marketing, and social media management, ensuring
              all your software company's marketing needs are met under one
              roof.
            </p>
          </motion.div>
        </div>
      </div>
      
      <ClientsServices/>
      {/* FAQ section for digital marketing */}
      <section
        id="faq"
        className="relative mx-auto py-12 md:px-20 px-4 w-full dark:bg-black bg-white  flex flex-col items-center justify-center"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <motion.h3
          initial={{ opacity: 0, scale: 1.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          className="text-orange text-center text-3xl font-extrabold decoration-orange lg:text-left xl:text-4xl z-10"
        >
          Frequently Asked Questions
        </motion.h3>

        <motion.div
          initial={{ opacity: 0.0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            y: { type: "spring", stiffness: 30 },
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="my-6 z-10"
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0.0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 30 },
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="my-6 z-10"
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0.0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.1,
            y: { type: "spring", stiffness: 30 },
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="my-6 z-10"
        >
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
        </motion.div>
      </section>

      {/* Schedule a meet or contact us section */}
      <ScheduleMeetAndContactCTA />
    </main>
  );
};

export default ServicesTemplateFour;
