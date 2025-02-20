"use client";

import React, { useState } from "react";
import { Select } from "antd";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "@/components/ui/button";

const allSkills = [
  "Python", "Java", "JavaScript", "TypeScript", "C#", "Ruby on Rails", "PHP", 
  "Node.js", "React.js", "Angular", "Vue.js", "Swift", "Kotlin", "C++", "Go", 
  "Rust", "Perl", "Scala", "SQL", "NoSQL", "GraphQL", "Docker", "Kubernetes", 
  "AWS", "Azure", "Google Cloud", "Terraform", "Jenkins", "CI/CD", "Linux", "Git", 
  "MongoDB", "PostgreSQL", "MySQL", "Redis", "Elasticsearch", "Android Development", 
  "iOS Development", "Vuex", "Redux", "Tailwind CSS", "Bootstrap", "Sass", "Webpack", 
  "GraphQL", "Jest", "Mocha", "Express.js", "Laravel", "Spring Boot", "Flutter", 
  "Xamarin", "React Native",
];

const defaultSkills = ["React.js", "TypeScript", "Node.js"];

const Page: React.FC = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>(defaultSkills); // Initialize with default skills
  const router = useRouter(); // Initialize router for navigation

  const handleSkillClick = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((item) => item !== skill)
        : [...prev, skill]
    );
  };

  const handleAddSkill = (value: string) => {
    if (!selectedSkills.includes(value)) {
      setSelectedSkills((prev) => [...prev, value]);
    }
  };

  const handleProceed = () => {
    // Navigate to the contact form page
    router.push("/ourservices/remoteitdeveloper/contactForm");
  };

  return (
    <div className="relative mt-8 w-full h-screen flex flex-col lg:flex-row items-center justify-center mx-auto gap-8 px-4 py-8">
      {/* Right Image (Hidden on Small Screens) */}
      <div className="w-full lg:w-1/2 hidden lg:block">
        <img
          className="w-full h-64 lg:h-full object-cover rounded-lg"
          src="https://images.unsplash.com/photo-1629904869392-ae2a682d4d01?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Winding mountain road"
        />
      </div>

      {/* Left Content */}
      <div className="w-full lg:w-1/2 bg-white rounded-lg p-6 lg:p-9">
        <h2 className="text-2xl lg:text-4xl font-bold text-orange mb-4 text-center lg:text-left">
          Find your perfect match
        </h2>
        <h3 className="text-lg text-orange-500 font-medium mb-4 text-center lg:text-left">
          Choose the skills you’re after
        </h3>
        <p className="text-gray-700 mb-6 text-center lg:text-left">
          You can either search for a skill or select from the popular skills below.
        </p>

        {/* Skill Selector */}
        <div className="mb-6">
          <Select
            placeholder="Search a skill"
            className="w-full"
            onSelect={handleAddSkill}
            options={allSkills.map((skill) => ({ label: skill, value: skill }))}
            showSearch
            filterOption={(input, option) =>
              option?.label.toLowerCase().includes(input.toLowerCase()) ?? false
            }
          />
        </div>

        {/* Skill Buttons */}
        <div className="flex flex-wrap gap-4 mb-6 justify-center lg:justify-start">
          {selectedSkills.map((skill) => {
            const isSelected = selectedSkills.includes(skill);
            return (
              <button
                key={skill}
                onClick={() => handleSkillClick(skill)}
                className={`flex items-center gap-2 py-2 px-4 rounded-full shadow-md text-sm font-medium transition-all 
                  ${isSelected ? "bg-blue2 text-white" : "text-black hover:bg-[#ffedd5]"}`}
              >
                {!isSelected && <BsPlusLg className="text-lg" />}
                {skill}
                {isSelected && <AiOutlineClose className="text-lg" />}
              </button>
            );
          })}
        </div>

        {/* Proceed Button */}
        <Button onClick={handleProceed}>Proceed</Button>
      </div>
      {/* After click on processed show different left section which have this fields like How long will the engagement last?
 give 4 options with radio button and then redirect to  contact page */}
    </div>
  );
};

export default Page;
