import React from "react";

import Image from "next/image";

import DDDM4 from "../../../../public/assets/services/crm/DDDM4.png";
import ECR1 from "../../../../public/assets/services/crm/ECR1.png";
import ECS2 from "../../../../public/assets/services/crm/ECS2.png";
import ISP3 from "../../../../public/assets/services/crm/ISP3.png";
import SAG5 from "../../../../public/assets/services/crm/SAG5.png";

function Importance() {
  return (
    <div className="grid overflow-x-hidden md:px-6 px-2 py-10 bg-slate-100 justify-items-center items-center">
      <h1 className="text-2xl font-bold text-orange text-center">
        Why CRM is important for your business
      </h1>
      <ul className="grid md:grid-cols-2 grid-cols-1 justify-center md:gap-y-10 md:gap-x-10 items-center md:p-4">
        <li
          data-aos="fade-left"
          className="relative flex md:flex-row flex-col items-start p-2"
        >
          <div className="order-1 md:w-3/5 sm:ml-6 xl:ml-0 md:px-3 px-1 py-1">
            <h3 className="mb-1 text-xl font-semibold">
              Enhanced Customer Relationship
            </h3>
            <div className="prose prose-slate prose-sm text-sm py-2 text-paragraph">
              <p>CRM enables businesses to maintain comprehensive records of interactions with customers, leading to better understanding and personalized engagement, ultimately fostering stronger relationships.
              </p>
            </div>
          </div>
          <div className="md:w-2/5 full">
          <Image
            src={ECR1}
            alt=""
            className="shadow-md rounded-lg bg-slate-50"
          />
          </div>
        </li>

        <li
          data-aos="fade-left"
          className="relative flex md:flex-row flex-col items-start p-2"
        >
          <div className="order-1 md:w-3/5 sm:ml-6 xl:ml-0 md:px-3 px-1 py-1">
            <h3 className="mb-1 text-xl font-semibold">
              Enhanced Customer Service
            </h3>
            <div className="prose prose-slate prose-sm text-sm py-2 text-paragraph">
              <p>
              CRM centralizes customer data, enabling businesses to provide personalized support. This quick access empowers service teams to resolve issues promptly, boosting satisfaction and loyalty.
              </p>
            </div>
          </div>
          <div className="md:w-2/5 full">
          <Image
            src={ECS2}
            alt=""
            className="shadow-md rounded-lg bg-slate-50"
          />
          </div>
        </li>

        <li
          data-aos="fade-right"
          className="relative flex md:flex-row flex-col items-start p-2"
        >
          <div className="order-1 md:w-3/5 sm:ml-6 xl:ml-0 md:px-3 px-1 py-1">
            <h3 className="mb-1 text-xl font-semibold">
              Improved Sales Performance
            </h3>
            <div className="prose prose-slate prose-sm text-sm py-2 text-paragraph">
              <p>
                With CRM, sales teams can efficiently manage leads, track
                opportunities and streamline sales processes, resulting in
                increased productivity, higher conversion rates and ultimately
                improved sales performance.
              </p>
            </div>
          </div>
          <div className="md:w-2/5 full">
          <Image
            src={ISP3}
            alt=""
            className="shadow-md rounded-lg bg-slate-50"
          />
          </div>
        </li>

        <li
          data-aos="fade-right"
          className="relative flex md:flex-row flex-col items-start p-2"
        >
          <div className="order-1 md:w-3/5 sm:ml-6 xl:ml-0 md:px-3 px-1 py-1">
            <h3 className="mb-1 text-xl font-semibold">
              Data-Driven Decision Making
            </h3>
            <div className="prose prose-slate prose-sm text-sm py-2 text-paragraph">
              <p>
              CRM provides insights into customer behavior, trends, and preferences through analytics tools. Businesses leverage this data to make informed decisions and drive growth effectively.
              </p>
            </div>
          </div>
          <div className="md:w-2/5 full">
          <Image
            src={DDDM4}
            alt=""
            className="shadow-md rounded-lg bg-slate-50"
          />
          </div>
        </li>

        <li
          data-aos="fade-left"
          className="relative flex md:flex-row flex-col items-start p-2"
        >
          <div className="order-1 md:w-3/5 sm:ml-6 xl:ml-0 md:px-3 px-1 py-1">
            <h3 className="mb-1 text-xl font-semibold">
              Scalability and Growth
            </h3>
            <div className="prose prose-slate prose-sm text-sm py-2 text-paragraph">
              <p>
              As businesses expand, CRM systems can scale accordingly, accommodating growing customer bases. This scalable foundation supports sustainable growth and enables businesses to thrive in competitive markets.
              </p>
            </div>
          </div>
          <div className="md:w-2/5 full">
          <Image
            src={SAG5}
            alt=""
            className="shadow-md rounded-lg bg-slate-50"
          />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Importance;
