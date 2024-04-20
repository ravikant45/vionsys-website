import React from "react";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

function About4() {
  const testimonials = [
    {
      name: "Web Development",
      description:
        "Web development involves designing, coding, and building websites or web applications, utilizing technologies like HTML, CSS, JavaScript, and backend frameworks.",
      button: "Read More",
    },
    {
      name: "Web Development",
      description:
        "Web development involves designing, coding, and building websites or web applications, utilizing technologies like HTML, CSS, JavaScript, and backend frameworks.",
      button: "Read More",
    },
    {
      name: "Cloud Computing",
      description:
        "Cloud computing refers to the delivery of on-demand computing resources, such as storage, servers, and software, over the internet for increased scalability and flexibility.",
      button: "Read More",
    },
  ];

  return (
    <>
      <div className="pl-24">
        <h1 className="text-3xl mt-5 font-bold">Our Client's</h1>
      </div>

      <div className="py-10 rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
        />
      </div>
    </>
  );
}

export default About4;
