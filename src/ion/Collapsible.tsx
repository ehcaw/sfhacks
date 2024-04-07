"use client";
// ion/Collapsible: Generated with Ion on 2/26/2024, 3:24:46 PM
import { useState } from "react";
import clsx from "clsx";
import { CollapsibleProps as RadixCollapsibleProps } from "@radix-ui/react-collapsible";
import { CaretDown } from "@phosphor-icons/react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const RadixCollapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export type CollapsibleProps = {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
} & RadixCollapsibleProps;

function Collapsible({
  children,
  title,
  icon,
  subtitle,
  className = "",
  ...props
}: CollapsibleProps) {
  const [open, setOpen] = useState(props.defaultOpen);

  return (
    <RadixCollapsible
      {...props}
      onOpenChange={(open) => {
        setOpen(open);
        props.onOpenChange?.(open);
      }}
      className={className}
    >
      <CollapsibleTrigger asChild>
        <div
          className={clsx(
            "flex items-start rounded-t-radius border border-sub-stroke transition-colors hover:bg-secondary-lightest",
            {
              "rounded-b-none": open,
              "rounded-b-radius": !open,
            }
          )}
        >
          <div className="flex w-full items-center gap-5 p-6">
            {icon}
            <div className="flex flex-1 flex-col gap-1">
              <div className="text-sm font-semibold">{title}</div>
              {subtitle && (
                <div className="text-sm text-sub-foreground">{subtitle}</div>
              )}
            </div>
            <CaretDown
              size={16}
              className={clsx("transform transition-transform", {
                "rotate-180": open,
              })}
            />
          </div>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="border-t-none rounded-b-radius rounded-t-none border-x border-b border-sub-stroke p-5">
        {children}
      </CollapsibleContent>
    </RadixCollapsible>
  );
}

export { RadixCollapsible, CollapsibleTrigger, CollapsibleContent };

export default Collapsible;
