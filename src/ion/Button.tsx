"use client";
// ion/Button: Generated with Ion on 2/26/2024, 3:24:45 PM
import { cva } from "class-variance-authority";
import clsx from "clsx";
import * as React from "react";
import { twMerge } from "tailwind-merge";

export const buttonVariants = cva(
  [
    "flex",
    "items-center",
    "justify-center",
    "rounded-radius",
    "disabled:pointer-events-none",
    "whitespace-nowrap",
    "border",
    "h-fit",
  ],
  {
    variants: {
      emphasis: {
        gradient:
          "disabled:bg-soft disabled:text-soft-foreground border-none",
        link: "disabled:text-soft-foreground border-none",
        high: "disabled:bg-soft disabled:text-soft-foreground border-transparent",
        medium:
          "disabled:border-weak-stroke disabled:text-weak-foreground focus:bg-white focus:bg-opacity-0",
        low: "focus:bg-white focus:bg-opacity-0 disabled:text-weak-foreground border-transparent",
      },
      color: {
        primary: "focus:primary-focus",
        secondary: "focus:secondary-focus",
        danger: "focus:danger-focus",
      },
      size: {
        sm: "gap-x-1 px-2 py-1 text-sm",
        md: "gap-x-1 px-3 py-2 text-sm",
        lg: "gap-x-2 px-4 py-3 text-base",
        "icon-sm": "h-7 w-7",
        "icon-md": "h-8 w-8",
        "icon-lg": "h-10 w-10",
      },
    },
    compoundVariants: [
      ...(
        ["primary", "secondary", "danger"] as const
      ).flatMap((color) =>
        [
          {
            emphasis: ["link" as const],
            color: [color],
            className: [
              `hover:text-${color}-dark`,
              `active:text-${color}-darker`,
              `text-${color}`,
              "p-0 pr-1",
            ],
          },

          {
            emphasis: ["low" as const],
            color: [color],
            className: [
              `hover:bg-${color}-lightest`,
              `active:bg-${color}-lighter`,
              `text-${color}`,
            ],
          },
          {
            emphasis: ["medium" as const],
            color: [color],
            className: [
              `border-${color}`,
              `hover:bg-${color}-lightest`,
              `hover:border-${color}-dark`,
              `active:bg-${color}-lighter`,
              `active:border-${color}-dark`,
              `text-${color}`,
              `hover:text-${color}-dark`,
              `active:text-${color}-darker`,
            ],
          },
          {
            emphasis: ["high" as const],
            color: [color],
            className: [
              `hover:bg-${color}-dark`,
              `hover:border-${color}-dark`,
              `active:bg-${color}-darker`,
              `active:border-${color}-dark`,
              `text-${color}-foreground`,
              `bg-${color}`,
            ],
          },
          {
            emphasis: ["gradient" as const],
            color: [color],
            className: [
              `bg-blend-overlay bg-gradient-to-r from-white/40 to-white/0 bg-${color}`,
              `hover:bg-${color}-dark`,
              `active:bg-${color}-darker`,
              `dark:hover:bg-${color}-light`,
              `dark:active:bg-${color}-lighter`,
              `text-${color}-foreground`,
            ],
          },
        ].flat()
      ),
    ],
  }
);

export type ButtonSizes =
  | "sm"
  | "md"
  | "lg"
  | "icon-sm"
  | "icon-md"
  | "icon-lg";

export type ButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode | React.ReactNode[];
    iconLeading?: React.ReactNode;
    iconTrailing?: React.ReactNode;
    color?: "primary" | "secondary" | "danger";
    emphasis?:
      | "high"
      | "medium"
      | "low"
      | "gradient"
      | "link";
    size?: "sm" | "md" | "lg";
  };

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      className,
      children,
      iconTrailing,
      iconLeading,
      color = "primary",
      emphasis = "high",
      size = "md",
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={twMerge(
          clsx(
            buttonVariants({
              color,
              emphasis,
              size:
                (iconLeading || iconTrailing) && !children
                  ? `icon-${size}`
                  : size,
            }),
            "transition-shadows transition-colors",
            className
          )
        )}
        ref={ref}
        {...props}
      >
        {iconLeading}
        {children}
        {iconTrailing}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
