// ion/Banner: Generated with Ion on 2/26/2024, 3:24:45 PM
import React from "react";

import clsx from "clsx";
export type BannerProps = {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  color?: "primary" | "secondary" | "danger";
  className?: string;
  action?: React.ReactNode;
};

const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  (
    { icon, title, description, color = "primary", className = "", action },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          {
            "relative flex h-fit w-full items-start gap-3 rounded-xl border p-6": true,
            "border-primary-light bg-primary-lightest": color === "primary",
            "border-secondary-light bg-secondary-lightest":
              color === "secondary",
            "border-danger-light bg-danger-lightest": color === "danger",
          },
          className
        )}
      >
        <span
          className={clsx({
            "text-primary-darkest": color === "primary",
            "text-secondary-darkest": color === "secondary",
            "text-danger-darkest": color === "danger",
          })}
        >
          {icon}
        </span>
        <div className="flex flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-1">
            <div className="text-base font-semibold text-foreground">
              {title}
            </div>
            <div className="text-sm text-sub-foreground">{description}</div>
          </div>
          {action}
        </div>
      </div>
    );
  }
);
Banner.displayName = "Banner";

export default Banner;
