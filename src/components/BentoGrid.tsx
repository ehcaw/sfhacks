import { cn } from "../utils/cn";
import React from "react";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

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
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
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
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "lists",
    description: "the fundamental data structure",
    header: <Skeleton />,
  },
  {
    title: "hashmaps",
    description: "programmer's dictionary",
    header: <Skeleton />,
  },
  {
    title: "linked list",
    description: "use-case dependent list",
    header: <Skeleton />,
  },
];

export function Homebento() {
  return (
    <BentoGrid className="w-full h-full">
      {items.map((item, i) => {
        const colSpan =
          i % 2 === 0
            ? "lg:col-span-2"
            : i % 5 === 0
            ? "lg:col-span-2"
            : "lg:col-span-1"; // variable box sizing
        const rowSpan = i % 3 === 0 ? "sm:row-span-2" : "sm:row-span-1"; // variable box sizing
        return (
          <BentoGridItem
            key={i}
            title={item.title} // remove later
            description={item.description} // remove later
            header={item.header}
            className={`${
              i === 0 ? "lg:col-span-3 " : `opacity-50 ${colSpan} ${rowSpan}`
            }`} // enlarges only the first box, makes all other boxes grayed out
          />
        );
      })}
    </BentoGrid>
  );
}
