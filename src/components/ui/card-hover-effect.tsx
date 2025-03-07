"use client";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./button";
import Job_modal from "@/app/ui/Careers/Job_modal";
import { Badge, Modal } from "antd";
import { BiChevronRight, BiMapPin } from "react-icons/bi";
import { CgLock } from "react-icons/cg";
import { BsBriefcase } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    position: string;
    experience: string;
    location: string;
    jobDescription: string[];
    qualification: string[];
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [jobTitle, setjobTitle] = useState("");
  const [currentItemIndex, setCurrentItemIndex] = useState<number | null>(null);

  return (
    <>
      <Job_modal
        jobTitle={jobTitle}
        isModalOpen={isModalOpen}
        setisModalOpen={setisModalOpen}
      />
      <Modal
        width={"700px"}
        footer={null}
        open={isVisible}
        onCancel={() => setIsVisible(false)}
      >
        {currentItemIndex !== null && (
          <div className="p-1">
            <div className="font-bold text-2xl ">
              {items[currentItemIndex].position}
            </div>
            <div className="mt-3 flex flex-wrap gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1 text-base font-semibold text-black py-1 px-2 border-2 rounded-xl">
                <BsBriefcase className="h-5.5 w-5.5" />
                {items[currentItemIndex]?.experience}
              </div>
              <div className="flex items-center gap-1 text-base font-semibold text-black py-1 px-2 border-2 rounded-xl">
                <FiMapPin className="h-5.5 w-5.5" />
                {items[currentItemIndex]?.location}
              </div>
            </div>
            <section className="">
              <div className="mt-4">
                <h4 className="font-bold text-lg">Role & Responsibilities</h4>
                {/* <ul className="py-1 text-gray-600 list-disc mt-1 ml-3">
                  {items[currentItemIndex]?.jobDescription.map(
                    (jobDescription, index) => (
                      <li key={index}>{jobDescription}</li>
                    )
                  )}
                </ul> */}
                <ul className="py-1 text-gray-600 list-disc mt-1 ml-4">
                  {items[currentItemIndex]?.jobDescription.map(
                    (jobDescription, index) => (
                      <li key={index}>
                        <span
                          dangerouslySetInnerHTML={{ __html: jobDescription }}
                        />
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-bold text-lg">
                  Required skills & qualification
                </h4>
                <ul className="py-1 text-gray-600 list-disc mt-1 ml-3">
                  {items[currentItemIndex]?.qualification.map(
                    (qualification, index) => (
                      <li key={index}>{qualification}</li>
                    )
                  )}
                </ul>
              </div>
            </section>
          </div>
        )}
      </Modal>

      <div className="grid grid-cols-3 gap-x-4 gap-y-6 relative overflow-hidden rounded-xl bg-background px-3 py-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="relative border-2 rounded-xl p-4 overflow-hidden transition-all hover:shadow-lg hover:border-y hover:border-r hover:border-orange hover:border-l-0"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Accent color bar inside the border */}
            <div className="absolute left-0 top-0 h-full w-1 bg-blue2 rounded-l-xl" />
            <div className="ml-2">
              <h3 className="text-xl font-bold tracking-tight">
                {item?.position}
              </h3>

              <div className="mt-3 flex flex-wrap gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1 text-base font-semibold text-blue2 py-1 px-2 border rounded-xl">
                  <BsBriefcase className="h-5.5 w-5.5 text-blue2" />
                  {item?.experience}
                </div>
                <div className="flex items-center gap-1 text-base font-semibold text-blue2 py-1 px-2 border rounded-xl">
                  <FiMapPin className="h-5.5 w-5.5 text-blue2" />
                  {item?.location}
                </div>
              </div>

              <section className="line-clamp-4">
                <div className="mt-4">
                  <h4 className="font-semibold">Role & Responsibilities</h4>
                  <ul className="py-1 text-gray-600 list-disc mt-1 ml-4">
                    {item?.jobDescription.map((jobDescription, index) => (
                      <li key={index}>
                        <span
                          dangerouslySetInnerHTML={{ __html: jobDescription }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold">
                    Required skills & qualification
                  </h4>
                  <ul className="py-1 text-gray-600 list-disc mt-1 ml-4">
                    {item?.qualification.map((qualification, index) => (
                      <li key={index}>{qualification}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <span
                className="text-blue2 capitalize cursor-pointer"
                onClick={() => {
                  setIsVisible(true);
                  setCurrentItemIndex(idx);
                }}
              >
                ...Read more
              </span>

              <div className="mt-5 flex items-center justify-end">
                {/* <Button variant="link" className="p-0 h-auto font-medium">
                  Read more
                </Button> */}

                <Button
                  onClick={() => {
                    setisModalOpen(true);
                    setjobTitle(item?.position);
                  }}
                  className="group-hover:translate-x-0.5 transition-transform"
                >
                  Apply
                  {/* <BiChevronRight className="ml-1 h-4 w-4" /> */}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
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
