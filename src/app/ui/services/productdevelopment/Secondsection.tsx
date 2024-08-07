import React from "react";
import { MdOutlineManageAccounts } from "react-icons/md";

const Secondsection = () => {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-16  dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="space-y-3 text-center">
            <h2
              data-aos="zoom-in"
              data-aos-duration="500"
              className="text-3xl text-gray-700 font-bold tracking-tighter md:text-4xl"
            >
              Our Key <span className="text-blue-700">Services</span>
            </h2>
            <p
              data-aos="zoom-out"
              data-aos-duration="500"
              className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
            >
              We offer a wide range of services to help your business succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:gap-6 gap-2 pt-2 md:pt-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <div className="rounded-lg bg-white md:p-6 p-2 shadow-lg transition-transform hover:-translate-y-2 dark:bg-gray-950">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white dark:bg-gray-50 dark:text-gray-900">
                <MdOutlineManageAccounts className="h-6 w-6" />
              </div>
              <h3
                data-aos="zoom-in"
                data-aos-duration="500"
                className="mt-4 text-xl font-semibold"
              >
                Resource Management
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                We develop unique product options tailored to your business
                needs. Our approach ensures alignment with your goals and market
                requirements, setting your product up for success.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:-translate-y-2 dark:bg-gray-950">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white dark:bg-gray-50 dark:text-gray-900">
                <CogIcon className="h-6 w-6" />
              </div>
              <h3
                data-aos="zoom-in"
                data-aos-duration="500"
                className="mt-4 text-xl font-semibold"
              >
                Production Planning
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Our product line turns your vision into a reality. We create
                beautiful designs that optimize performance and enhance the user
                experience, ensuring your products stand out in the marketplace.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:-translate-y-2 dark:bg-gray-950">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white dark:bg-gray-50 dark:text-gray-900">
                <LightbulbIcon className="h-6 w-6" />
              </div>
              <h3
                data-aos="zoom-in"
                data-aos-duration="500"
                className="mt-4 text-xl font-semibold"
              >
                The Best of Things
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                We ensure the highest quality and reliability of your products
                through our stringent quality controls. Our testing methods
                ensure that your product performs flawlessly in the real world.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:-translate-y-2 dark:bg-gray-950">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white dark:bg-gray-50 dark:text-gray-900">
                <RocketIcon className="h-6 w-6" />
              </div>
              <h3
                data-aos="zoom-in"
                data-aos-duration="500"
                className="mt-4 text-xl font-semibold"
              >
                Product placement
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Bring your product to market successfully with our simple
                product launch solution. We offer tailored integration
                strategies for your digital ecosystem, ensuring a smooth
                transition and improved market growth.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:-translate-y-2 dark:bg-gray-950">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white dark:bg-gray-50 dark:text-gray-900">
                <WrenchIcon className="h-6 w-6" />
              </div>
              <h3
                data-aos="zoom-in"
                data-aos-duration="500"
                className="mt-4 text-xl font-semibold"
              >
                Continuous improvement
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                We help you create a culture of continuous improvement in your
                product development. By empowering your teams to iterate, learn,
                and innovate, we ensure your product delivers ongoing value to
                your customers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Secondsection;
function BriefcaseIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function CogIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  );
}

function LightbulbIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function PencilIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}

function RocketIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function WrenchIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function SettingsIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ShieldIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}
