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
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div data-aos="zoom-in">
        <CardContainer className="inter-var flex justify-evenly px-6">
          <CardBody className="bg-white lg:h-[420px] md:h-[420px] h-auto shadow-blue2 shadow-md relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-auto sm:w-[20rem] rounded-xl px-6 border mx-4 py-5 flex flex-col gap-2 items-center">
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
                className="text-cardPara font-normal max-w-sm dark:text-neutral-300"
              >
                Vionsys, a pioneering IT solutions provider, specializes in software development, cloud services, and cybersecurity. We provide innovative, scalable solutions to accelerate corporate growth and efficiency while providing sturdy, secure, and cutting-edge technology for a competitive advantage.
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>

      <div data-aos="zoom-in">
        <CardContainer className="inter-var flex justify-evenly px-6">
          <CardBody className="bg-white lg:h-[420px] md:h-[420px] h-auto  shadow-blue2 shadow-md relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-auto sm:w-[20rem] rounded-xl px-6 border mx-4 py-5 flex flex-col gap-2 items-center">
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
                We aim to provide innovative IT solutions that improve efficiency and drive growth. We are committed to driving innovation, ensuring the highest level of service, and building lasting relationships with our customers by understanding and meeting their unique needs. Through our expertise and commitment, we aim to create a transformational impact on businesses and communities worldwide.
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>

      <div data-aos="zoom-in">
        <CardContainer className="inter-var flex justify-evenly px-6">
          <CardBody className="bg-white lg:h-[420px] md:h-[420px] h-auto shadow-blue2 shadow-md relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-auto sm:w-[20rem] rounded-xl px-6 border mx-4 py-5 flex flex-col gap-2 items-center">
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
                We value innovation, customer focus, integrity, excellence, collaboration, empowerment, and sustainability. Our goal is to deliver cutting-edge IT solutions with transparency and ethical standards, encourage teamwork, and drive positive change for our customers and communities.
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}

export default ThreeDCard;
