import React, { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    description: string;
    href: string;
    ariaLabel: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const speedMap = {
        fast: "20s",
        normal: "40s",
        slow: "80s",
      };
      containerRef.current.style.setProperty(
        "--animation-duration",
        speedMap[speed] || "40s"
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-10 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <Link
            href={item.href || "#"} // Default to "#" if href is undefined
            key={idx}
            aria-label={item.ariaLabel}
            className="w-[350px] max-w-full relative hover:scale-105 transition-all ease-linear 2s hover:cursor-pointer rounded-2xl border border-b-0 flex-shrink-0 border-grey-400 px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--indigo-200), var(--indigo-200))",
            }}
          >
            <blockquote>
              <span className="relative z-20 text-paragraph leading-[1.6] text-black font-bold">
                {item.name}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-4">
                  <span className="text-cardPara leading-[1.6] text-black border-slate-700 font-normal">
                    {item.description}
                  </span>
                </span>
              </div>
            </blockquote>
          </Link>
        ))}
      </ul>
    </div>
  );
};
