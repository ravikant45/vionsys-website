import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { Jobs } from "./JobsData";

export default function JobsCard() {
  return (
    <>
      <div className="flex flex-col justify-center items-center pb-4">
        <h1 className="text-blue-600 font-bold text-4xl pb-3">
          Your Future Begins Here
        </h1>
        <h2 className="text-black font-bold text-2xl">Current Openings</h2>
      </div>
      <BentoGrid className="mx-auto">
        {Jobs.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.position}
            description={item.jobDescription}
            requirements={item.Requirement}
          />
        ))}
      </BentoGrid>
    </>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem]  rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
