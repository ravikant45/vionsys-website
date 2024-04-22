import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

function ThreeDCard() {
  return (
    <div className="md:flex md:justify-center" >
      <div>
        <CardContainer className="inter-var">
          <CardBody className="bg-white border-none shadow-xl relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border m-4">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Vision
            </CardItem>

            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/vision.jpg"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Setting the standard as a global IT solution provider,
                prioritizing customer relationships above all.
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>

      <div>
        <CardContainer className="inter-var">
          <CardBody className="bg-white border-none shadow-xl relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border m-4">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Mission
            </CardItem>

            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/mission.jpg"
                height="1000"
                width="1000"
                className="h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                To provide cutting-edge IT services that empower our clients to
                maintain a competitive edge and stay ahead of the curve.
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>

      <div>
        <CardContainer className="inter-var flex justify-evenly">
          <CardBody className="bg-white border-none shadow-xl relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border m-4">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Strength And Motto
            </CardItem>

            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/strength.jpg"
                height="1000"
                width="1000"
                className="h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                To harness the power of technology for the advancement and
                benefit of mankind.
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}

export default ThreeDCard;
