import { cn } from "../utils/cn";
import React from "react";

import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
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
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-2 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-3",
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
    title: "Array",
    description: "Contiguous memory storage for elements of the same type.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Linked List",
    description: "Series of connected nodes, each containing data.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Stack",
    description: "Last in, first out (LIFO) data structure.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Queue",
    description: "First in, first out (FIFO) data structure.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Tree",
    description: "Hierarchical data structure with a root and branches.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Graph",
    description: "Collection of nodes connected by edges.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Hash Table",
    description: "Data structure that maps keys to values.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Heap",
    description: "Binary tree with a specific ordering property.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Sorting Algorithms",
    description: "Techniques to rearrange elements in order.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Searching Algorithms",
    description: "Techniques to find specific elements efficiently.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
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
            title={item.title} // Provide the title for the item
            description={item.description} // Provide the description for the item
            header={item.header} // Provide the header component for the item
            icon={item.icon} // Provide the icon component for the item
            className={`${
              i === 0 ? "lg:col-span-3 " : `opacity-50 ${colSpan} ${rowSpan}`
            }`} // Set the className for styling purposes
          />
        );
      })}
    </BentoGrid>
  );
}
