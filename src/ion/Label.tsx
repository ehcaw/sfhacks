"use client";
// ion/Label: Generated with Ion on 2/26/2024, 3:24:46 PM
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import clsx from "clsx";

const labelVariants = cva(
  "text-sm gap-1 font-semibold whitespace-nowrap peer-disabled:cursor-not-allowed peer-disabled:text-weak-foreground"
);

type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants> & {
    required?: boolean;
    disabled?: boolean;
    description?: string;
    helper?: string;
  };
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(
  (
    { className, disabled, description, helper, required, children, ...props },
    ref
  ) => {
    return (
      <div
        className={clsx(
          labelVariants(),
          {
            "text-weak-foreground": disabled,
          },
          className
        )}
      >
        <LabelPrimitive.Root
          ref={ref}
          {...props}
          aria-required={required}
          className={clsx("flex flex-row items-center gap-x-0.5", {
            "text-weak-foreground pointer-events-none": disabled,
          })}
        >
          {children}
          {required && (
            <span
              className={disabled ? "text-weak-foreground" : "text-primary"}
            >
              *
            </span>
          )}
          {helper && (
            <span
              className={clsx("text-sm font-normal text-sub-foreground", {
                "text-weak-foreground": disabled,
              })}
            >
              ({helper})
            </span>
          )}
        </LabelPrimitive.Root>
        <p
          className={clsx(
            "text-sm font-normal",
            disabled ? "text-weak-foreground" : "text-sub-foreground"
          )}
        >
          {description}
        </p>
      </div>
    );
  }
);
Label.displayName = LabelPrimitive.Root.displayName;

export default Label;
