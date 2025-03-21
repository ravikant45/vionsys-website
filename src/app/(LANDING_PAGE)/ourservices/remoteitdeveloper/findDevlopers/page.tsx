"use client";

import React, { useState } from "react";
import { Select } from "antd";
import { useRouter } from "next/navigation";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const allSkills = [
  // Programming Languages
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "C#",
  "C++",
  "C",
  "Go",
  "Rust",
  "Kotlin",
  "Swift",
  "PHP",
  "Ruby",
  "Scala",
  "Perl",
  "R",
  "Dart",
  "Haskell",
  "Lua",
  "MATLAB",
  "Julia",

  // Web Development Frameworks/Libraries
  "Web developer",
  "React",
  "Next.js",
  "Angular",
  "Vue.js",
  "Svelte",
  "Node.js",
  "Express.js",
  "Django",
  "Flask",
  "Spring Boot",
  "Ruby on Rails",
  "Laravel",
  "ASP.NET",

  // Frontend Tools and Styling
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "Sass",
  "Redux",
  "Webpack",
  "Vite",
  "Parcel",

  // Mobile Development
  "React Native",
  "Flutter",
  "Xamarin",
  "Android Development",
  "iOS Development",
  "Ionic",
  "SwiftUI",
  "Jetpack Compose",

  // Databases
  "SQL",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "SQLite",
  "Redis",
  "Cassandra",
  "DynamoDB",
  "MariaDB",
  "Oracle Database",
  "NoSQL",
  "GraphQL",

  // Cloud Platforms and Services
  "AWS",
  "Microsoft Azure",
  "Google Cloud Platform (GCP)",
  "Heroku",
  "Firebase",
  "Vercel",
  "DigitalOcean",
  "Cloudflare",

  // DevOps and Tools
  "Docker",
  "Kubernetes",
  "Jenkins",
  "Git",
  "GitHub Actions",
  "CircleCI",
  "Travis CI",
  "Terraform",
  "Ansible",
  "CI/CD",
  "Linux",
  "Bash",
  "Prometheus",
  "Grafana",

  // AI/ML and Data Science
  "Machine Learning",
  "Deep Learning",
  "TensorFlow",
  "PyTorch",
  "Pandas",
  "NumPy",
  "Data Science",
  "Artificial Intelligence (AI)",
  "Natural Language Processing (NLP)",

  // Testing Frameworks
  "Jest",
  "Mocha",
  "Chai",
  "Cypress",
  "Selenium",
  "Puppeteer",
  "JUnit",
  "TestNG",

  // Blockchain and Web3
  "Blockchain",
  "Web3",
  "Solidity",
  "Ethereum",
  "Smart Contracts",
  "Truffle",
  "Hardhat",

  // Cybersecurity
  "Cybersecurity",
  "Penetration Testing",
  "Ethical Hacking",
  "Cryptography",
  "Network Security",

  // Game Development
  "Unity",
  "Unreal Engine",
  "Godot",
  "Cocos2d",
  "OpenGL",
  "DirectX",

  // Other Emerging Technologies
  "Quantum Computing",
  "Augmented Reality (AR)",
  "Virtual Reality (VR)",
  "Internet of Things (IoT)",
  "RPA",
  "Embedded Systems",
  "Edge Computing",

  // Enterprise Software and Platforms (Added Here)
  "Salesforce",
  "CRM",
  "Microsoft Dynamics 365",
  "Teamcenter",
  "SAP",
  "Oracle ERP",
  "ServiceNow",
  "Tableau",
  "Power BI",
  "SharePoint",

  // Soft Skills and Methodologies
  "Agile",
  "Scrum",
  "Kanban",
  "DevOps",
  "Project Management",
  "Technical Writing",
];

const defaultSkills = ["Java", "React", "TypeScript"];

const Page: React.FC = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>(defaultSkills);
  const router = useRouter();

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
    // Pass selected skills as query parameters
    const skillsParam = encodeURIComponent(JSON.stringify(selectedSkills));
    router.push(
      `/ourservices/remoteitdeveloper/contactForm?skills=${skillsParam}`
    );
  };

  return (
    <div className="relative mt-8 w-full h-screen flex flex-col lg:flex-row items-center justify-center mx-auto gap-8 px-4 py-8">
      {/* Right Image */}
      <div className="w-full lg:w-1/2 hidden lg:block">
        <Image
          width={500}
          height={500}
          className="w-full h-64 lg:h-full object-cover rounded-lg"
          src="/assets/VEmployee/contactImage.jpg"
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
          You can either search for a skill or select from the popular skills
          below.
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
                  ${
                    isSelected
                      ? "bg-blue2 text-white"
                      : "text-black hover:bg-[#ffedd5]"
                  }`}
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
    </div>
  );
};

export default Page;