import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import devops from "/public/assets/services/devops.jpg";
import { SVGProps } from "react";
export const metadata: Metadata = {
  title: "DevOpes Services",
};
const page = () => {
  return (
    <div id="gradient" className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/*Hero Section */}
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className=" md:px-6 space-y-10 xl:space-y-28">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div className="pt-5">
                <h1
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="lg:leading-tighter text-MainHeading font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]"
                >
                  Optimize Your DevOps with Acme
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-SubHeading md:text-xl font-bold dark:text-gray-400">
                  Accelerate your software delivery with our cutting-edge DevOps
                  platform. Automate deployments, scale effortlessly, and gain
                  real-time insights.
                </p>
                <div className="space-x-4">
                  <Button className="shadow">
                    <Link className="" href={"/contact"}>
                      Connect With Us
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <Image
              alt="Hero"
              className="mx-auto aspect-[3/1] md:h-[60vh] h-[30vh] overflow-hidden rounded-t-xl object-cover"
              height="300"
              src={devops}
              width="1270"
            />
          </div>
        </section>
        {/*Key Features section*/}
        <section className="w-full py-12 md:py-24 lg:py-24">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg  px-3 py-1 text-SubHeading font-bold dark:bg-gray-800">
                  Key Features
                </div>
                <h2
                  data-aos="fade-right"
                  data-aos-duration="600"
                  className="text-MainHeading font-bold tracking-tighter sm:text-5xl"
                >
                  Accelerate Your DevOps Workflow
                </h2>
                <p
                  data-aos="fade-left"
                  data-aos-duration="600"
                  className="max-w-[900px] text-SubHeading md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-bold"
                >
                  Streamline your software delivery with our powerful DevOps
                  platform. Automate deployments, scale effortlessly, and gain
                  real-time insights.
                </p>
              </div>
            </div>
            {/*Cards Division */}
            <div className="mx-auto grid items-start gap-10 sm:max-w-4xl sm:grid-cols-2 md:gap-20 lg:max-w-5xl lg:grid-cols-3">
              <div
                data-aos="zoom-in"
                data-aos-duration="800"
                className="grid gap-3"
              >
                <h3 className="text-ThirdHeading font-bold">
                  Automated Deployments
                </h3>
                <p className="text-lg text-cardPara">
                  Streamline your deployment process with our CI/CD
                  capabilities. Deploy with a single click and focus on building
                  great software.
                </p>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="800"
                className="grid gap-3"
              >
                <h3 className="text-ThirdHeading font-bold">
                  Scalable Infrastructure
                </h3>
                <p className="text-lg text-cardPara">
                  Scale your applications seamlessly with our cloud-based
                  infrastructure. Never worry about managing servers or
                  upgrading hardware.
                </p>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="800"
                className="grid gap-3"
              >
                <h3 className="text-ThirdHeading font-bold">
                  Real-time Monitoring
                </h3>
                <p className="text-lg text-cardPara">
                  Get detailed insights into your application's performance with
                  our advanced monitoring tools. Identify and fix issues
                  quickly.
                </p>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="800"
                className="grid gap-3"
              >
                <h3 className="text-ThirdHeading font-bold">
                  Secure and Compliant
                </h3>
                <p className="text-lg text-cardPara">
                  Ensure your application's security and compliance with our
                  robust security features and industry-leading certifications.
                </p>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="800"
                className="grid gap-3"
              >
                <h3 className="text-ThirdHeading font-bold">
                  Collaboration-Focused
                </h3>
                <p className="text-lg text-cardPara">
                  Foster seamless collaboration within your team with built-in
                  code review tools and integrated communication channels.
                </p>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="800"
                className="grid gap-3"
              >
                <h3 className="text-ThirdHeading font-bold">
                  Customizable Workflows
                </h3>
                <p className="text-lg text-cardPara">
                  Tailor our DevOps platform to your unique needs. Automate
                  custom workflows and integrate with your existing tools.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/**Workflow section */}
        <section className="w-full py-12 lg:pb-10 md:py-24 lg:py-4 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2
                data-aos="fade-right"
                data-aos-duration="600"
                className="text-MainHeading font-bold tracking-tighter sm:text-4xl md:text-5xl"
              >
                DevOps Workflow
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration="600"
                className="mx-auto max-w-[700px] text-SubHeading font-bold md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
              >
                Streamline your development and deployment process with our
                DevOps solutions.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
              <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950">
                <PlaneIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                <h3 className="text-ThirdHeading font-semibold">Plan</h3>
                <p className="text-center text-cardPara">
                  Collaborate on project requirements and define the roadmap.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950">
                <CodeIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                <h3 className="text-ThirdHeading font-semibold">Code</h3>
                <p className="text-center text-cardPara">
                  Write clean, modular code and manage version control.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950">
                <BuildingIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                <h3 className="text-ThirdHeading font-semibold">Build</h3>
                <p className="text-center text-cardPara">
                  Automate the build process and run comprehensive tests.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950">
                <CommandIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                <h3 className="text-ThirdHeading font-semibold">Deploy</h3>
                <p className="text-center text-cardPara">
                  Continuously deliver updates and monitor application health.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ Section*/}
        <section className="w-full py-12 md:py-24 lg:py-12 border-t">
          <h2 className="text-3xl font-bold text-center py-10">
            Frequently Asked <span className="text-MainHeading">Question</span>
          </h2>
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              <div className="space-y-4">
                <div className="space-y-6">
                  <div className="grid gap-2">
                    <h3 className=" font-bold">What is DevOps?</h3>
                    <div className=" text-paragraph">
                      <p data-aos="fade-left" data-aos-duration="600">
                        DevOps is a set of practices that combines software
                        development (Dev) and IT operations (Ops). It aims to
                        shorten the systems development life cycle and provide
                        continuous delivery with high software quality. DevOps
                        involves automation, collaboration, and a culture shift
                        within an organization to enable faster delivery of
                        applications and services.
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <h3 className="font-bold">
                      What are some common DevOps tools?
                    </h3>
                    <div className=" text-paragraph">
                      <p data-aos="fade-left" data-aos-duration="600">
                        Some of the most popular DevOps tools include:Version
                        control systems (e.g. Git, SVN),Continuous
                        Integration/Continuous Deployment (CI/CD) tools (e.g.
                        Jenkins, CircleCI, Travis CI),Configuration management
                        tools (e.g. Ansible, Puppet, Chef),Containerization
                        platforms (e.g. Docker, Kubernetes), Monitoring and
                        logging tools (e.g. Prometheus, Grafana, ELK
                        Stack),Cloud platforms (e.g. AWS, Azure, Google Cloud)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <h3 className="font-bold">
                    What is a typical DevOps workflow?
                  </h3>
                  <div className=" text-paragraph">
                    <p data-aos="fade-right" data-aos-duration="600">
                      A typical DevOps workflow includes the following stages:
                      Code: Developers write and commit code to a version
                      control system. Build: Automated build processes compile
                      the code and create a deployable artifact. Test: Automated
                      tests are run to ensure the quality of the code and the
                      artifact. Deploy: The artifact is deployed to a staging or
                      production environment. Monitor: The deployed application
                      is monitored for performance, errors, and other metrics.
                    </p>
                  </div>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-bold">
                    What are the benefits of adopting DevOps?
                  </h3>
                  <div className=" text-paragraph">
                    <p data-aos="fade-right" data-aos-duration="600">
                        Some of the key benefits of adopting DevOps include:
                        Faster software delivery: DevOps enables organizations to
                        release new features and updates more frequently. Improved
                        reliability: Automated testing and monitoring help
                        identify and fix issues more quickly. Increased
                        collaboration: DevOps promotes better communication and
                        collaboration between development and operations teams.
                        Cost savings: Automation and efficient workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
interface MountainIconProps extends React.SVGProps<SVGSVGElement> {}
function BuildingIcon(props: SVGProps<SVGSVGElement>) {
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
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function CodeIcon(props: SVGProps<SVGSVGElement>) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function CommandIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M15 6h6a3 3 0 1 1-3 3v12a3 3 0 1 1-3-3H6a3 3 0 1 1 3-3V6a3 3 0 1 1 3 3z" />
    </svg>
  );
}

function PlaneIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}

const MountainIcon: React.FC<MountainIconProps> = (props) => {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
};

export default page;
