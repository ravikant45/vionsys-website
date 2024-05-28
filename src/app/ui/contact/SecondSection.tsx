import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Second = () => {
  return (
    <section>
      <div className="w-[100vw] py-6 dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col gap-4 items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="flex flex-col gap-2">
          <h2
            data-aos="fade-left"
            className="text-3xl font-bold text-orange relative z-20 text-center"
          >
            Thanks for your{" "}
            <span className="text-blue2">Interest in vionsys services</span>{" "}
          </h2>
          <h3
            data-aos="fade-right"
            className="text-center text-2xl font-bold text-blue1"
          >
            Visit us at our office
          </h3>
        </div>

        <div data-aos="zoom-in" className="px-3 z-20">
          <Card className="shadow-md shadow-blue4">
            <CardContent className="flex flex-col py-2 gap-2">
              <h3 className="text-center font-semibold text-xl text-orange">
                Office Address
              </h3>
              <div className="w-full h-[1px] bg-black"></div>
              <p className="text-md font-semibold pb-4">
                Stellar Spaces Office no.504 6th floor, Opposite Zensar IT Park
                Kharadi, Pune.
              </p>
              <h3 className="font-semibold text-center text-xl text-orange">
                Contact
              </h3>
              <div className="w-full h-[1px] bg-black"></div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-md font-semibold">info@vionsys.com</p>
                <p className="text-md font-semibold">+91 02047242493</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end items-center">
              <p className="text-sm text-gray1 text-center">
                ~ Come visit us and experience our space firsthand!{" "}
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Second;
