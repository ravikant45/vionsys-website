"use client";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./button";
import Job_modal from "@/app/ui/Careers/Job_modal";
import { Modal } from "antd";
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    position: string;
    jobDescription: string;
    Requirement: string[];
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState<number | null>(null);

  return (
    <>
      <Job_modal isModalOpen={isModalOpen} setisModalOpen={setisModalOpen} />
      <Modal
        width={"700px"}
        footer={null}
        open={isVisible}
        onCancel={() => setIsVisible(false)}
      >
        {currentItemIndex !== null && (
          <div className="p-3">
            <CardTitle>{items[currentItemIndex].position}</CardTitle>
            <section
              className="mt-4"
              dangerouslySetInnerHTML={{
                __html: items[currentItemIndex]?.jobDescription,
              }}
            />
          </div>
        )}
      </Modal>
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.2,
          scale: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }}
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 w-full",
          className
        )}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>

            <Card>
              <CardTitle>{item?.position}</CardTitle>
              <section className="line-clamp-4">
                <div
                  dangerouslySetInnerHTML={{ __html: item?.jobDescription }}
                />
              </section>

              <span
                className="text-blue-700 capitalize cursor-pointer"
                onClick={() => {
                  setIsVisible(true);
                  setCurrentItemIndex(idx);
                }}
              >
                ...Read more
              </span>
              <ul className="py-3">
                {item?.Requirement.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
              <Button
                onClick={() => {
                  setisModalOpen(true);
                }}
              >
                Apply
              </Button>
            </Card>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white border dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-zinc-800 text-2xl font-bold tracking-wide mt-4",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-500 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
