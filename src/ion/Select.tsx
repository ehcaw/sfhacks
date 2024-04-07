"use client";
// ion/Select: Generated with Ion on 2/26/2024, 3:24:50 PM
import * as React from "react";

import * as SelectPrimitive from "@radix-ui/react-select";
import { Check } from "@phosphor-icons/react";
import clsx from "clsx";
import Label from "./Label";
import Hint from "./Hint";
import { CaretDown } from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";

const SelectBase = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
    iconLeading?: React.ReactNode;
    error?: boolean;
  }
>(({ className, children, iconLeading, error, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={twMerge(
      clsx(
        "focus:border-stroke focus:primary-focus disabled:border-stroke-weak group flex h-9 w-full items-center justify-between rounded-radius border border-sub-stroke px-3 py-2 text-sm disabled:pointer-events-none disabled:bg-weak disabled:text-weak-foreground data-[placeholder]:text-soft-foreground disabled:data-[placeholder]:text-weak-foreground",
        {
          "border-danger": error,
        },
        className
      )
    )}
    {...props}
  >
    <span className="flex items-center gap-3">
      {iconLeading && <span className="text-foreground">{iconLeading}</span>}{" "}
      {children}
    </span>

    <SelectPrimitive.Icon asChild>
      <CaretDown className="h-4 w-4 transition-transform duration-200 ease-in group-data-[state=open]:rotate-180" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={clsx(
        "shadow-low relative z-50 min-w-[8rem] overflow-hidden rounded-radius border bg-background text-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={clsx(
          "p-2",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={clsx("px-3 py-2 text-sm", className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & {
    description?: string;
    iconLeading?: React.ReactNode;
    suffix?: React.ReactNode;
  }
>(
  (
    { className, children, iconLeading, description, suffix, ...props },
    ref
  ) => (
    <SelectPrimitive.Item
      ref={ref}
      className={clsx(
        "group relative flex w-full cursor-default select-none items-center gap-2 rounded-radius p-2 text-sm font-semibold text-foreground outline-none focus:bg-weak data-[disabled]:pointer-events-none data-[state=checked]:pr-8 data-[state=open]:pr-8 data-[disabled]:text-weak-foreground",
        className
      )}
      {...props}
    >
      <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="h-4 w-4 text-sub-foreground data-[disabled]:text-weak-foreground" />
        </SelectPrimitive.ItemIndicator>
      </span>
      {iconLeading}
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      {description && (
        <p className="font-normal text-soft-foreground group-data-[disabled]:text-weak-foreground">
          {description}
        </p>
      )}
      <span className="ml-auto font-normal text-soft-foreground">{suffix}</span>
    </SelectPrimitive.Item>
  )
);
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={clsx("bg-muted -mx-1 my-1 h-px", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

type Option = {
  label: string;
  value: string;
  iconLeading?: React.ReactNode;
  suffix?: React.ReactNode;
  description?: string;
  disabled?: boolean;
};

interface Props extends SelectPrimitive.SelectProps {
  options: Option[];
  placeholder?: string;
  iconLeading?: React.ReactNode;
  label?: string;
  helper?: string;
  hint?: string;
  showHintIcon?: boolean;
  required?: boolean;
  error?: boolean;
  className?: string;
  triggerClassName?: string;
}

const Select = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> & Props
>(
  (
    {
      className,
      triggerClassName,
      options,
      required,
      error,
      showHintIcon,
      placeholder,
      iconLeading,
      helper,
      ...props
    },
    ref
  ) => (
    <div className={twMerge(clsx("w-full", className))}>
      <SelectBase {...props}>
        {props.label && (
          <Label
            required={required}
            disabled={props.disabled}
            helper={helper}
            className="mb-1"
          >
            {props.label}
          </Label>
        )}
        <SelectTrigger
          iconLeading={iconLeading}
          error={error}
          aria-required={required}
          ref={ref}
          className={triggerClassName}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        {props.hint && (
          <Hint
            showIcon={showHintIcon}
            disabled={props.disabled}
            error={error}
            className="mt-1"
          >
            {props.hint}
          </Hint>
        )}
        <SelectContent className="max-h-96" align="end">
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              disabled={option.disabled}
              iconLeading={option.iconLeading}
              description={option.description}
              suffix={option.suffix}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectBase>
    </div>
  )
);
Select.displayName = SelectPrimitive.Root.displayName;
export default Select;
export {
  Select,
  SelectBase,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
