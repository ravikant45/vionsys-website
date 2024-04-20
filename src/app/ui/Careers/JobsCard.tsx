// JobsCard.tsx
import React from "react";
import { Jobs } from "./JobsData";

interface Job {
  position: string;
  jobDescription: string;
  Requirement: string[];
  education: string;
}

const JobsCard: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-6 p-6 bg-white">
      {/* Card page title */}
      <h1 className="col-span-3 text-5xl font-headingFont font-extrabold text-zinc-950 text-center pb-4">
        Current Openings
      </h1>
      {Jobs.map((job: Job, index: number) => (
        <div
          key={index}
          className="p-4 bg-opacity-20 bg-slate-50 border rounded-xl hover:cursor-pointer transition-all duration-300 shadow-lg ease-linear"
        >
          {/* Position section */}
          <h2 className="text-2xl font-semibold font-headingFont text-zinc-950 text-center pb-3">
            {job.position}
          </h2>

          {/* Description */}
          <p className="text-slate-600 font-navlistFont text-sm pb-3">
            {job.jobDescription}
          </p>

          {/* Requirement Types */}
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-navlistFont font-semibold text-zinc-950">
              Requirement:
            </h1>
            <ul className="list-disc p-3">
              {job.Requirement.map((requirement: string, reqIndex: number) => (
                <li
                  key={reqIndex}
                  className="text-slate-600 font-navlistFont text-sm"
                >
                  {requirement}
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <h1 className="text-xl text-zinc-950 font-semibold pb-2">
              Education
            </h1>
            {/* Education Description */}
            <p className="text-slate-600 text-sm font-navlistFont pb-0">
              {job.education}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobsCard;
