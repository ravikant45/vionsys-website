"use client";
import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface ProjectCardProps {
  images: string[];
}

export function ProjectCard({ images }: ProjectCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="group relative shadow-xl shadow-slate-400 overflow-hidden rounded-xl bg-gray-900 transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative h-[250px] w-full">
        {" "}
        {/* Adjusted card height */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute h-full w-full transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Project screenshot ${index + 1}`}
              className="h-full w-full object-contain" // Changed to `object-contain`
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-40" />
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white/20 p-2 opacity-0 transition-opacity duration-300 hover:bg-white/30 group-hover:opacity-100"
        >
          <AiOutlineLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white/20 p-2 opacity-0 transition-opacity duration-300 hover:bg-white/30 group-hover:opacity-100"
        >
          <AiOutlineRight className="h-6 w-6 text-white" />
        </button>
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-4 bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
