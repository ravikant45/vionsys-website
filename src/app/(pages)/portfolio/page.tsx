"use client";
import React, { useEffect, useState } from "react";
import PortfolioSection from "../../ui/home/Portfolio";

interface Bubble {
  id: number;
  size: number;
  left: number;
  delay: number;
  color: string;
  isRing: boolean;
}

const Page: React.FC = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const colors = ["#3D98E3", "#F4A261", "#E76F51", "#2A9D8F", "#E9C46A"];
    const newBubbles: Bubble[] = Array.from({ length: 6 }).map(() => ({
      id: Math.random(),
      size: Math.random() * 50 + 20,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      isRing: Math.random() > 0.7,
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <section className="pt-18 overflow-hidden relative">
      <div className="h-[35vh] flex justify-center items-end bg-[#f3f4f5] relative">
        <h2
          className="text-orange font-serif relative bottom-0 text-5xl font-semibold uppercase border-b-2 border-orange"
          id="portfolio-text"
        >
          Portfolio
        </h2>
      </div>

      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260">
          <path
            fill="#f3f3f5"
            fillOpacity="1"
            d="M0,160L48,138.7C96,117,192,75,288,96C384,117,480,203,576,234.7C672,267,768,245,864,202.7C960,160,1056,96,1152,90.7C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="relative w-full h-full">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className={`bubble ${bubble.isRing ? "ring-bubble" : ""}`}
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              animationDuration: `${Math.random() * 3 + 4}s, ${
                Math.random() * 3 + 3
              }s`,
              animationDelay: `${bubble.delay}s`,
              backgroundColor: bubble.isRing ? "transparent" : bubble.color,
              borderColor: bubble.isRing ? bubble.color : "transparent",
            }}
          ></div>
        ))}
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className={`bubble2 ${bubble.isRing ? "ring-bubble2" : ""}`}
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              animationDuration: `${Math.random() * 3 + 4}s, ${
                Math.random() * 3 + 3
              }s`,
              animationDelay: `${bubble.delay}s`,
              backgroundColor: bubble.isRing ? "transparent" : bubble.color,
              borderColor: bubble.isRing ? bubble.color : "transparent",
            }}
          ></div>
        ))}
      </div>

      <PortfolioSection />
    </section>
  );
};

export default Page;
