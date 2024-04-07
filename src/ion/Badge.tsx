// ion/Badge: Generated with Ion on 2/26/2024, 3:24:45 PM
import { cva } from "class-variance-authority";
import clsx from "clsx";
import React from "react";

const classNames = cva(
  ["font-semibold", "rounded-full", "shrink-0", "whitespace-nowrap", "border"],
  {
    variants: {
      type: {
        text: "py-0.5 px-2 flex h-fit w-fit justify-center items-center gap-1",
        number: "text-center flex shrink-none justify-center items-center",
      },
      emphasis: {
        high: "text-white border-transparent",
        medium: "border-transparent",
        low: "",
      },
      color: {
        blue: "",
        green: "",
        pink: "",
        cyan: "",
        purple: "",
        red: "",
        grey: "",
        yellow: "",
      },
      size: {
        sm: "text-[10px]",
        md: "text-xs",
        lg: "text-sm",
      },
    },
    compoundVariants: [
      {
        size: ["sm"],
        type: ["number"],
        className: ["w-[19px] h-[19px]"],
      },
      {
        size: ["md"],
        type: ["number"],
        className: ["w-5 h-5"],
      },
      {
        size: ["lg"],
        type: ["number"],
        className: ["h-6 w-6"],
      },
      {
        emphasis: ["high"],
        color: ["blue"],
        className: ["bg-blue-600"],
      },
      {
        emphasis: ["high"],
        color: ["green"],
        className: ["bg-emerald-600"],
      },
      {
        emphasis: ["high"],
        color: ["pink"],
        className: ["bg-[#ff00ea]"],
      },
      {
        emphasis: ["high"],
        color: ["cyan"],
        className: ["bg-cyan-600"],
      },
      {
        emphasis: ["high"],
        color: ["purple"],
        className: ["bg-purple-600"],
      },
      {
        emphasis: ["high"],
        color: ["red"],
        className: ["bg-red-500"],
      },
      {
        emphasis: ["high"],
        color: ["grey"],
        className: ["bg-gray-600", "disabled:border"],
      },
      {
        emphasis: ["high"],
        color: ["yellow"],
        className: ["bg-yellow-600"],
      },
      {
        emphasis: ["medium"],
        color: ["blue"],
        className: ["bg-blue-100", "text-blue-800"],
      },
      {
        emphasis: ["medium"],
        color: ["green"],
        className: ["bg-emerald-100", "text-emerald-800"],
      },
      {
        emphasis: ["medium"],
        color: ["pink"],
        className: ["bg-[#ffe3fc]", "text-[#a90096]"],
      },
      {
        emphasis: ["medium"],
        color: ["cyan"],
        className: ["bg-cyan-100", "text-cyan-800"],
      },
      {
        emphasis: ["medium"],
        color: ["purple"],
        className: ["bg-purple-100", "text-purple-800"],
      },
      {
        emphasis: ["medium"],
        color: ["red"],
        className: ["bg-red-300", "text-red-700"],
      },
      {
        emphasis: ["medium"],
        color: ["grey"],
        className: ["bg-gray-100", "text-gray-800"],
      },
      {
        emphasis: ["medium"],
        color: ["yellow"],
        className: ["bg-yellow-100", "text-yellow-800"],
      },
      {
        emphasis: ["low"],
        color: ["blue"],
        className: ["border-blue-600", "text-blue-600"],
      },
      {
        emphasis: ["low"],
        color: ["green"],
        className: ["border-emerald-600", "text-emerald-600"],
      },
      {
        emphasis: ["low"],
        color: ["pink"],
        className: ["border-[#ff00ea]", "text-[#ff00ea]"],
      },
      {
        emphasis: ["low"],
        color: ["cyan"],
        className: ["border-cyan-600", "text-cyan-600"],
      },
      {
        emphasis: ["low"],
        color: ["purple"],
        className: ["border-purple-600", "text-purple-600"],
      },
      {
        emphasis: ["low"],
        color: ["red"],
        className: ["border-red-500", "text-red-500"],
      },
      {
        emphasis: ["low"],
        color: ["grey"],
        className: ["border-gray-600", "text-gray-600"],
      },
      {
        emphasis: ["low"],
        color: ["yellow"],
        className: ["border-yellow-600", "text-yellow-600"],
      },
    ],
    defaultVariants: {
      type: "text",
      emphasis: "high",
      color: "blue",
      size: "md",
    },
  }
);

type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  iconLeading?: React.ReactNode;
  iconTrailing?: React.ReactNode;
  type?: "text" | "number";
  emphasis?: "high" | "medium" | "low";
  color?:
    | "blue"
    | "green"
    | "pink"
    | "purple"
    | "red"
    | "grey"
    | "yellow"
    | "cyan";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      className,
      type,
      emphasis,
      color,
      size,
      children,
      iconLeading,
      iconTrailing,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          classNames({
            type,
            emphasis,
            color,
            size,
          }),
          className
        )}
        {...props}
      >
        {iconLeading}
        {children}
        {iconTrailing}
      </div>
    );
  }
);
Badge.displayName = "Badge";

export default Badge;
