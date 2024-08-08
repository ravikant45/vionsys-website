"use client";
import React from "react";
import { motion } from "framer-motion";
const Faq = () => {
  return (
    <div>
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
                    <motion.p
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.2,
                        x: { type: "spring", stiffness: 30 },
                        opacity: { duration: 0.4 },
                        ease: "easeInOut",
                      }}
                    >
                      DevOps is a set of practices that combines software
                      development (Dev) and IT operations (Ops). It aims to
                      shorten the systems development life cycle and provide
                      continuous delivery with high software quality. DevOps
                      involves automation, collaboration and a culture shift
                      within an organization to enable faster delivery of
                      applications and services.
                    </motion.p>
                  </div>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-bold">
                    What are some common DevOps tools?
                  </h3>
                  <div className=" text-paragraph">
                    <motion.p
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.2,
                        x: { type: "spring", stiffness: 30 },
                        opacity: { duration: 0.4 },
                        ease: "easeInOut",
                      }}
                    >
                      Some of the most popular DevOps tools include: Version
                      control systems (e.g. Git, SVN), Continuous
                      Integration/Continuous Deployment (CI/CD) tools (e.g.
                      Jenkins, CircleCI, Travis CI), Configuration management
                      tools (e.g. Ansible, Puppet, Chef), Containerization
                      platforms (e.g. Docker, Kubernetes), Monitoring and
                      logging tools (e.g. Prometheus, Grafana, ELK Stack), Cloud
                      platforms (e.g. AWS, Azure, Google Cloud)
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid gap-2">
                <h3 className="font-bold">
                  What is a typical DevOps workflow?
                </h3>
                <div className=" text-paragraph">
                  <motion.p
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.2,
                      x: { type: "spring", stiffness: 20 },
                      opacity: { duration: 0.4 },
                      ease: "easeInOut",
                    }}
                  >
                    A typical DevOps workflow includes the following stages:
                    Code: Developers write and commit code to a version control
                    system. Build: Automated build processes compile the code
                    and create a deployable artifact. Test: Automated tests are
                    run to ensure the quality of the code and the artifact.
                    Deploy: The artifact is deployed to a staging or production
                    environment. Monitor: The deployed application is monitored
                    for performance, errors and other metrics.
                  </motion.p>
                </div>
              </div>
              <div className="grid gap-2">
                <h3 className="font-bold">
                  What are the benefits of adopting DevOps?
                </h3>
                <div className=" text-paragraph">
                  <motion.p
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.2,
                      x: { type: "spring", stiffness: 20 },
                      opacity: { duration: 0.4 },
                      ease: "easeInOut",
                    }}
                  >
                    Some of the key benefits of adopting DevOps include: Faster
                    software delivery: DevOps enables organizations to release
                    new features and updates more frequently. Improved
                    reliability: Automated testing and monitoring help identify
                    and fix issues more quickly. Increased collaboration: DevOps
                    promotes better communication and collaboration between
                    development and operations teams. Cost savings: Automation
                    and efficient workflows.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
