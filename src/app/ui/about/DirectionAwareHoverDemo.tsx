"use client";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export function DirectionAwareHoverDemo() {
  const imageUrl1 = "/GovindSir.jpg";
  const imageUrl2 = "/";
  return (
    <div>

      <div className="text-center">
        <h1 className="text-3xl mt-5 font-bold">Our Leadership</h1>
        <p className="underline font-semibold text-xl text-orange">
          Vionsys It Solutions
        </p>
      </div>

      <div className="flex justify-center items-center gap-16">
        <div className="h-[35rem] relative  flex items-center justify-center">
          <DirectionAwareHover imageUrl={imageUrl1}>
            <p className="font-bold text-xl">Govind Rathod</p>
            <p className="font-normal text-sm">Founder, CEO</p>
          </DirectionAwareHover>
        </div>

        <div className="h-[35rem] relative  flex items-center justify-center">
          <DirectionAwareHover imageUrl={imageUrl2}>
            <p className="font-bold text-xl">Nilam Rathod</p>
            <p className="font-normal text-sm">Co-Founder, CTO</p>
          </DirectionAwareHover>
        </div>
      </div>
    </div>
  );
}
