import { cn } from "../../utils/cn";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface InfiniteMovingServicesProps {
  items: { id: string; img: string }[];
  direction?: "left" | "right";
  speed?: "slow" | "medium" | "fast";
  pauseOnHover?: boolean;
  className?: string;
}

const InfiniteMovingServices: React.FC<InfiniteMovingServicesProps> = ({
  items,
  direction = "right",
  speed = "slow",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  };

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "right") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "medium") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "60s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-8xl overflow-hidden",
        "mask-image:linear-gradient(to right, transparent, white_20%, white_80%, transparent)",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 md:gap-4 gap-6 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:animation-play-state:paused"
        )}
      >
        {items.map((item) => (
          <li key={item.id} className="md:w-[13vw] w-[70vw] ">
            <div className="min-w-40 md:min-w-60 h-24 items-center flex justify-center">
              <img
                src={item?.img}
                alt={item?.img?.toString()}
                className="md:h-[15vh] object-cover w-fit px-2 h-[20vh]"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingServices;
