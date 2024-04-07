"use client";
// ion/Tabs: Generated with Ion on 2/26/2024, 3:24:48 PM
"use client";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import clsx from "clsx";
import { cva } from "class-variance-authority";

const Tabs = TabsPrimitive.Root;

type TabType = "filled" | "simple";

const TabTypeContext = React.createContext<TabType>("simple");

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
    type?: TabType;
  }
>(({ className, type = "filled", children, ...props }, ref) => (
  <TabTypeContext.Provider value={type}>
    <TabsPrimitive.List
      ref={ref}
      className={clsx(
        "relative flex w-fit items-start",
        {
          "gap-1 rounded-radius-md bg-soft p-1": type === "filled",
        },
        className
      )}
      {...props}
    >
      {children}
      {type === "simple" && (
        <div className={"absolute bottom-0 z-0 h-px w-full bg-soft-stroke"} />
      )}
    </TabsPrimitive.List>
  </TabTypeContext.Provider>
));
TabsList.displayName = TabsPrimitive.List.displayName;

const tabClassnames = cva(
  "focus-visible:secondary-focus gap-2 inline-flex items-center justify-center whitespace-nowrap text-sm data-[state=active]:font-semibold font-medium text-soft-foreground transition-all disabled:pointer-events-none ",
  {
    variants: {
      type: {
        filled: [
          "rounded-radius",
          "hover:bg-weak",
          "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-low",
          "disabled:text-weak-foreground ",
        ],
        simple: [
          "border-b-2 border-transparent",
          "transition-all data-[state=active]:z-[1]",
          "hover:text-foreground",
          "disabled:text-weak-foreground",
          "data-[state=active]:border-primary data-[state=active]:text-primary",
        ],
      },
      icon: {
        true: "p-2.5",
        false: "",
      },
    },
    compoundVariants: [
      {
        type: ["filled"],
        icon: [false],
        className: ["px-5 py-1"],
      },
      {
        type: ["simple"],
        icon: [false],
        className: ["pb-2 px-3"],
      },
    ],
  }
);
const Tab = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    iconLeading?: React.ReactNode;
    iconTrailing?: React.ReactNode;
  }
>(({ className, children, iconLeading, iconTrailing, ...props }, ref) => {
  const type = React.useContext(TabTypeContext);

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={clsx(tabClassnames({ type, icon: !children }), className)}
      {...props}
    >
      {iconLeading}
      {children}
      {iconTrailing}
    </TabsPrimitive.Trigger>
  );
});
Tab.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={clsx("focus-visible:secondary-focus mt-2", className)}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, Tab, TabsContent };
