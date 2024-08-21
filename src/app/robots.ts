import { MetadataRoute } from "next";

const BaseUrl = process.env.DOMAIN || "https://www.vionsys.com";

// Array containing paths to disallow
const disallowedPaths = [
  "/admin/*",
  "https://www.vionsys.com/services/webDevelopment",
  "https://www.vionsys.com/services/machineLearningAI",
  "https://www.vionsys.com/services/softwareDevelopment",
  "https://www.vionsys.com/services/biAnalytics",
  "https://www.vionsys.com/services/cloudComputing",
  "https://www.vionsys.com/services/digitalMarketing",
  "https://www.vionsys.com/industries",
  "https://www.vionsys.com/services/bigDataAnalytics",
  "https://vionsys.com/expertise/cyber-security",
  "https://www.vionsys.com/technology/scripting",
  "https://www.vionsys.com/service/application-development-maintenance",
  "https://www.vionsys.com/service/product-development",
  "https://www.vionsys.com/favicon.ico",
  "https://www.vionsys.com/expertise/qa-software-testing",
  "https://vionsys.com/apply?job=Web Developer",
  "https://www.vionsys.com/apply?job=Web Developer",
  "https://www.vionsys.com/service/business-intelligence-and-analytics",
  "https://www.vionsys.com/technology/dotnet",
  "https://www.vionsys.com/technology/saleforce",
  "https://www.vionsys.com/technology/oracle",
  "https://www.vionsys.com/contact-us",
  "https://www.vionsys.com/about-us",
  "https://vionsys.com/industry/banking",
  "https://vionsys.com/apply?job=Full Stack Developer",
  "https://vionsys.com/apply?job=AWS/DevOps Engineer",
  "https://vionsys.com/apply?job=Graphics Designer",
  "https://vionsys.com/apply?job=Digital Marketing",
  "https://vionsys.com/apply?job=.NET Developer",
  "https://vionsys.com/apply?job=RPA Developer",
  "https://vionsys.com/service/webdev",
  "https://www.vionsys.com/industry/health-care",
  "https://www.vionsys.com/service/AI",
  "https://vionsys.com/contact-us",
  "https://www.vionsys.com/blogs/669a1090040da099adca223a",
  "https://www.vionsys.com/blogs/669a3bad8b0c259afc34f8d8",
  "https://www.vionsys.com/blogs/669a2b8291bd7cd0d0d55850",
  "https://www.vionsys.com/blogs/669a3fcb9ff15263f603ea79",
  "https://www.vionsys.com/blogs/669a1a1bc2d61030c564f4f3",
  "https://www.vionsys.com/blogs/Agile-Product-Development-Strategies",
  "https://www.vionsys.com/blogs/Cloud Integration",
  "https://www.vionsys.com/?fp=KHdBm1RhTFSSrSarkJ6DVghLipYAFGKLMhIrwAczuIauDDZZ8BTVYJO0WeDerCY9YLau6MCGhf4yH+hEGqbzTw%3D=&prvtof=x8qtG8O9j9CU5Ia0sP6cbWd7wfjW34TC5dmSABNqRLY=&poru=opP8a2ZR441GlJITyNsErDU+0qcudBofQ1ejEMkSpmhB+rY3CMxQczFYPkTqNGM4zDpX1cuBjbti6wY4LLk11A==&",
  "http://vionsys.com/",
  "https://vionsys.com/",
  "http://www.vionsys.com/",
  "http://vionsys.com/?fp=KHdBm1RhTFSSrSarkJ6DVghLipYAFGKLMhIrwAczuIauDDZZ8BTVYJO0WeDerCY9YLau6MCGhf4yH+hEGqbzTw%3D=&prvtof=x8qtG8O9j9CU5Ia0sP6cbWd7wfjW34TC5dmSABNqRLY=&poru=opP8a2ZR441GlJITyNsErDU+0qcudBofQ1ejEMkSpmhB+rY3CMxQczFYPkTqNGM4zDpX1cuBjbti6wY4LLk11A==&",
  "https://vionsys.com/?fp=KHdBm1RhTFSSrSarkJ6DVghLipYAFGKLMhIrwAczuIauDDZZ8BTVYJO0WeDerCY9YLau6MCGhf4yH+hEGqbzTw%3D=&prvtof=x8qtG8O9j9CU5Ia0sP6cbWd7wfjW34TC5dmSABNqRLY=&poru=opP8a2ZR441GlJITyNsErDU+0qcudBofQ1ejEMkSpmhB+rY3CMxQczFYPkTqNGM4zDpX1cuBjbti6wY4LLk11A==&",
  "https://vionsys.com/career",
  "https://www.vionsys.com/icon.ico?0c4d82640ee8b713",
  "https://www.vionsys.com/blogs/668940dc7282567664b5925a",
  "https://www.vionsys.com/_next/static/media/e11418ac562b8ac1-s.p.woff2",
  "https://www.vionsys.com/industry/professional-services",
  "https://vionsys.com/blogs/669a36715dba9dc9e8ef5569",
  "https://vionsys.com/industries",
  "https://vionsys.com/contact",
  "https://vionsys.com/about"
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: disallowedPaths,
      },
    ],
    sitemap: `${BaseUrl}/sitemap.xml`,
  };
}
