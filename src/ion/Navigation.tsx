"use client";
// ion/SideNavigationItem: Generated with Ion on 2/26/2024, 3:24:51 PM
import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { cva } from "class-variance-authority";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={twMerge(
      clsx(
        "relative z-10 flex w-full flex-1 [&>*:first-child]:w-full",
        className
      )
    )}
    {...props}
  >
    {children}
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={clsx("group flex flex-1 list-none", className)}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const navigationMenuLinkClassnames = cva(
  "flex w-full cursor-default justify-between items-center gap-2 rounded-radius border-transparent px-3 py-2 text-base no-underline outline-none transition-colors",
  {
    variants: {
      type: {
        filled:
          "text-primary-foreground hover:bg-primary active:bg-primary dark:hover:bg-primary active:bg-primary",
        default:
          "text-sub-foreground hover:bg-primary-lightest active:border-primary active:bg-primary-lightest",
      },
      selected: {
        true: "font-semibold",
        false: "",
      },
    },
    compoundVariants: [
      {
        type: "filled",
        selected: true,
        className: "bg-primary font-semibold dark:bg-primary-light",
      },
      {
        type: "default",
        selected: true,
        className: "bg-primary-lightest font-semibold",
      },
      {
        type: "filled",
        selected: false,
        className: "bg-primary-darker dark:bg-primary-lighter",
      },
      {
        type: "default",
        selected: false,
        className: "bg-background",
      },
    ],
  }
);

const NavigationMenuLink = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Link>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link> & {
    selected?: boolean;
    extra?: React.ReactNode;
    iconLeading?: React.ReactNode;
    iconTrailing?: React.ReactNode;
    type?: "default" | "filled";
  }
>(
  (
    {
      className,
      selected = false,
      children,
      iconLeading,
      iconTrailing,
      extra,
      type = "default",
      ...props
    },
    ref
  ) => (
    <NavigationMenuPrimitive.Link
      ref={ref}
      className={twMerge(
        clsx(
          navigationMenuLinkClassnames({
            type,
            selected,
          })
        ),
        className
      )}
      {...props}
    >
      <span className="flex items-center gap-2">
        {iconLeading} {children} {extra}
      </span>
      {children && iconTrailing}
    </NavigationMenuPrimitive.Link>
  )
);
NavigationMenuLink.displayName = "NavigationMenuLink";

const NavigationMenuItem = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Item
    ref={ref}
    className={clsx("w-full", className)}
    {...props}
  />
));
NavigationMenuItem.displayName = "NavigationMenuItem";

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
};
