"use client";
// ion/Switch: Generated with Ion on 2/26/2024, 3:24:50 PM
import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import clsx from "clsx";
import Label from "./Label";

type SwitchProps = React.ComponentPropsWithoutRef<
  typeof SwitchPrimitives.Root
> & {
  size?: "sm" | "md" | "lg";
  label?: React.ReactNode;
  description?: string;
  helper?: string;
};

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(
  (
    { className, size = "md", required, label, description, helper, ...props },
    ref
  ) => {
    const id = React.useId();
    return (
      <span className="flex items-center gap-2 text-sm">
        <SwitchPrimitives.Root
          className={clsx(
            "group",
            "focus-visible:primary-focus peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors",
            "disabled:pointer-events-none disabled:bg-soft",
            {
              "data-[state=checked]:bg-primary data-[state=unchecked]:bg-sub-stroke data-[state=unchecked]:hover:bg-soft-foreground":
                !props.disabled,
            },
            {
              "h-4 w-8": size === "sm",
              "h-6 w-12": size === "md",
              "h-[34px] w-[56px] pl-1": size === "lg",
            },
            className
          )}
          {...props}
          ref={ref}
          id={id}
        >
          <SwitchPrimitives.Thumb
            className={clsx(
              "pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform group-disabled:bg-weak-foreground group-disabled:shadow-none data-[state=unchecked]:translate-x-0",
              {
                "h-3 w-3 data-[state=checked]:translate-x-4": size === "sm",
                "h-5 w-5 data-[state=checked]:translate-x-6": size === "md",
                "h-6 w-6 data-[state=checked]:translate-x-5": size === "lg",
              }
            )}
          />
        </SwitchPrimitives.Root>
        {label && (
          <Label
            htmlFor={id}
            required={required}
            description={description}
            helper={helper}
          >
            {label}
          </Label>
        )}
      </span>
    );
  }
);
Switch.displayName = SwitchPrimitives.Root.displayName;

export default Switch;
