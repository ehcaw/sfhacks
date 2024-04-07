import { cn } from "@/utils/cn";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { NavbarDemo } from "../Navbar";
import { ChatCard } from "../ModulePopup";

export function Homepage() {
  const [popup, setPopup] = useState<boolean>(false);
  const [topic, setTopic] = useState<string>("");
  const [numElements, setNumElements] = useState<number>(1);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (title: string, index: number) => {
    setPopup(!popup);
    setTopic(title);
    setNumElements(numElements);
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="pt-2 pb-10">
        <NavbarDemo></NavbarDemo>
      </div>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <div
            onClick={() => handleClick(items[i].title, i)}
            key={i}
            className={cn("[&>p:text-lg]", item.className)}
          >
            <BentoGridItem
              key={i}
              title={item.title}
              header={item.header}
              description={item.description}
              className={cn("[&>p:text-lg]", item.className)}
            />
            {activeIndex === i && popup && <ChatCard />}
          </div>
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <Image
        src="/linkedlist.gif"
        alt="graphs"
        height="800"
        width="800"
        className=" h-100 w-100"
        unoptimized
      ></Image>
      <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
        singly linked, doubly linked
      </p>
    </motion.div>
  );
};

type SkeletonThreeProps = {
  imgSrc: string;
};
const SkeletonThree: React.FC<SkeletonThreeProps> = ({ imgSrc }) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div>
      <motion.div
        initial="initial"
        whileHover="animate"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
      >
        <Image
          src={imgSrc}
          alt="trees"
          height="600"
          width="600"
          className="h-30 w-30"
          unoptimized
        ></Image>
      </motion.div>
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/n2.webp"
          alt="n2 graph"
          height="800"
          width="800"
          className="h-30 w-30"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          bubble sort, insertion sort, selection sort
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          n^2 algorithms
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="/nlogn.png"
          alt="nlogn graph"
          height="800"
          width="800"
          className=" h-30 w-30"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          merge sort, quick sort, heap sort
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          nlogn algorithms
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/linear.webp"
          alt="linear graph"
          height="400"
          width="400"
          className="h-20 w-20"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          bucket sort, counting sort
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          &quot;linear&quot; algorithms
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const animate = {
    x: -10,
    rotate: -5,
    transition: {
      duration: 0.2,
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <Image
        src="/graph.gif"
        alt="graphs"
        height={300}
        width={300}
        unoptimized
      ></Image>
      <motion.div
        initial="initial"
        whileHover="animate"
        className="flex flex-1 w-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
      ></motion.div>
    </motion.div>
  );
};
const SkeletonSix = () => {
  const variants = {
    initial: {
      x: 0,
      rotate: 0,
    },
    hover: {
      x: 20,
      rotate: -5,
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
      rotate: 0,
    },
    hover: {
      x: 20,
      rotate: 5,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={variants}
        className="h-full relative z-20 w-1/2 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/linearsearch.gif"
          alt="linear search"
          height="1200"
          width="800"
          unoptimized
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          linear search
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          linear time
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="h-full relative z-20 w-1/2 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/binarysearch.png"
          alt="binary search"
          height="1200"
          width="800"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          binary search
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          logn time
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonSeven = () => {
  const variants = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const variantsSecond = {
    initial: {
      x: 20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={variants}
        className="h-full relative z-20 w-1/2 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/queue.gif"
          alt="queue"
          height="1200"
          width="800"
          unoptimized
        />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="h-full relative z-20 w-1/2 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/stack.gif"
          alt="stack"
          height="1200"
          width="800"
          unoptimized
        />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "array",
    description: (
      <span className="text-sm">
        contiguous memory storage for elements, usually of the same type
      </span>
    ),
    header: <SkeletonThree imgSrc={"/array.gif"} />,
    className: "md:col-span-1",
    numElements: 1,
  },
  {
    title: "searching algorithms",
    description: (
      <span className="text-sm">finding elements in a list efficiently</span>
    ),
    header: <SkeletonSix />,
    className: "md:col-span-2",
    numElements: 2,
  },
  {
    title: "sorting algorithms",
    description: (
      <span className="text-sm">
        techniques to get a collection of elements in order
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    numElements: 3,
  },
  {
    title: "linked list",
    description: (
      <span className="text-sm">
        series of connected nodes, each containing data
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    numElements: 1,
  },
  {
    title: "graph",
    description: (
      <span className="text-sm">collection of nodes connected by edges</span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    numElements: 1,
  },
  {
    title: "fifo / lifo data structures",
    description: <span className="text-sm">queue(fifo) and stack(lifo)</span>,
    header: <SkeletonSeven></SkeletonSeven>,
    className: "md: col-span-2",
    numElements: 2,
  },
  {
    title: "tree",
    description: (
      <span className="text-sm">
        hierarchical data structure with a root and branches
      </span>
    ),
    header: <SkeletonThree imgSrc={"/trees.gif"} />,
    className: "md:col-span-1",
    numElements: 1,
  },
  {
    title: "hash table",
    description: (
      <span className="text-sm">data structure that maps keys to values</span>
    ),
    header: <SkeletonThree imgSrc={"/hashtable.gif"} />,
    className: "md:col-span-1",
    numElements: 1,
  },
  {
    title: "heap",
    description: (
      <span className="text-sm">
        binary tree with a specific ordering property
      </span>
    ),
    header: <SkeletonThree imgSrc={"/heap.gif"} />,
    className: "md:col-span-1",
    numElements: 1,
  },
];

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
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.7rem)] left-1/2 transform -translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full boder border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6 "
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};

/* all boiler plate code given
<motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          There are a lot of cool framerworks out there like React, Angular,
          Vue, Svelte that can make your life ....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Use PHP.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>


      moving bar graphs 
      <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>

    pink block:
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
*/
