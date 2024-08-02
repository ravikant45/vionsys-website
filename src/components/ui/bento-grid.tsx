import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[16rem] grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-8xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 px-2 lg:py-4 md:py-6 dark:bg-black dark:border-white bg-white border justify-start h-full w-full flex flex-col space-y-4 shadow-md shadow-blue5",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-black text-lg dark:text-neutral-200 mb-2 mt-2 capitalize">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-base dark:text-neutral-300 text-center">
          {description}
        </div>
      </div>
    </div>
  );
};
