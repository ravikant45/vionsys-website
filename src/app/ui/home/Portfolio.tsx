import React from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";

const projects = [
  {
    images: [
      "/assets/Home/project1.png",
      "/assets/Home/project1_2.png",
      "/assets/Home/project1_3.png",
    ],
  },
  {
    images: [
      "/assets/Home/project2.png",
      "/assets/Home/project2_2.png",
      "/assets/Home/project2_3.png",
    ],
  },
  {
    images: [
      "/assets/Home/project3.png",
      "/assets/Home/project3_2.png",
      "/assets/Home/project3_3.png",
    ],
  },
  {
    images: [
      "/assets/Home/project4.png",
      "/assets/Home/project4_2.png",
      "/assets/Home/project4_3.png",
    ],
  },
  {
    images: [
      "/assets/Home/project5.png",
      "/assets/Home/project5_2.png",
      "/assets/Home/project5_3.png",
    ],
  },
  {
    images: [
      "/assets/Home/project6.png",
      "/assets/Home/project6_2.png",
      "/assets/Home/project6_3.png",
    ],
  },
  {
    images: ["/assets/Home/project7.png", "/assets/Home/project7_2.png"],
  },
  {
    images: [
      "/assets/Home/project8.png",
      "/assets/Home/project8_2.png",
      "/assets/Home/project8_3.png",
    ],
  },
  {
    images: [
      "/assets/Home/project10_1.png",
      "/assets/Home/project10_2.png",
      "/assets/Home/project10_3.png",
      "/assets/Home/project10_4.png",
      "/assets/Home/project10_5.png",
    ],
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen py-10">
      <h1 className="text-MainHeading pb-8 font-bold text-center">
        Our Recent Projects
      </h1>
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="transform  transition-all duration-300 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <ProjectCard images={project.images} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
