"use client"
import React from 'react';

import Image from 'next/image';

import {
  CardBody,
  CardContainer,
  CardItem,
} from '@/components/ui/3d-card';

function ThreeDCard() {
  return (
    <div className="w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex lg:flex flex-wrap lg:items-center lg:justify-center" >
      <div className="absolute pointer-events-none inset-0  flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div data-aos="zoom-in">
        <CardContainer className="inter-var px-10">
          <CardBody className="bg-white lg:h-96 h-auto shadow-blue2 shadow-md relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-auto sm:w-[20rem]  rounded-xl px-6 border mx-4 py-2 flex flex-col justify-center items-center">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Vision
            </CardItem>

            <CardItem translateZ="100" className="w-full">
              <Image
                src="/vision.jpg"
                height="500"
                width="1000"
                className="h-32 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center">
              <CardItem
                as="p"
                translateZ="60"
                className="text-cardPara font-normal max-w-sm mt-2 dark:text-neutral-300"
              >
                Our vision is to be a leading provider of innovative IT solutions, driving digital transformation and empowering businesses to thrive in the ever-evolving technological landscape.
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>

      <div data-aos="zoom-in">
        <CardContainer className="inter-var px-10">
          <CardBody className="bg-white lg:h-96 h-auto  shadow-blue2 shadow-md relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-auto sm:w-[20rem] rounded-xl px-6 border mx-4 py-2 flex flex-col gap-2 justify-center items-center">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Mission
            </CardItem>

            <CardItem translateZ="100" className="w-full">
              <Image
                src="/mission.jpg"
                height="500"
                width="1000"
                className="h-32 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center">
              <CardItem
                as="p"
                translateZ="60"
                className="text-cardPara font-normal max-w-sm dark:text-neutral-300"
              >
                Our mission is to deliver exceptional IT solutions tailored to the unique needs of our clients, leveraging cutting- edge technologies, fostering innovation, and providing unparalleled customer satisfaction.
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>

      <div data-aos="zoom-in">
        <CardContainer className="inter-var flex justify-evenly px-10">
          <CardBody className="bg-white lg:h-96 h-auto shadow-blue2 shadow-md relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-auto sm:w-[20rem] rounded-xl px-6 border mx-4 py-2 flex flex-col gap-2 justify-center items-center">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Company Value
            </CardItem>

            <CardItem translateZ="100" className="w-full">
              <Image
                src="/strength.jpg"
                height="500"
                width="1000"
                className="h-32 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center ">
              <CardItem
                as="p"
                translateZ="60"
                className="text-cardPara font-normal max-w-sm  dark:text-neutral-300"
              >
                Embodying a culture of innovation, integrity, and collaboration, we strive for excellence in every endeavor. Our commitment to customer-centricity ensures unwavering dedication to client success, fostering enduring relationships built on trust, transparency, and exceptional service.
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}

export default ThreeDCard;
