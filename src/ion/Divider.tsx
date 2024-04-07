// ion/Divider: Generated with Ion on 2/26/2024, 3:24:47 PM
import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import clsx from "clsx";

const Divider = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & {
    children?: React.ReactNode;
  }
>(
  (
    {
      className,
      orientation = "horizontal",
      children,
      decorative = true,
      ...props
    },
    ref
  ) => (
    <div className={clsx("relative w-full", className)}>
      <div className="absolute inset-0 flex items-center">
        <SeparatorPrimitive.Root
          ref={ref}
          decorative={decorative}
          orientation={orientation}
          className={clsx(
            "bg-weak-foreground",
            orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]"
          )}
          {...props}
        />
      </div>

      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-background px-3 text-soft-foreground">
          {children}
        </span>
      </div>
    </div>
  )
);
Divider.displayName = SeparatorPrimitive.Root.displayName;

export default Divider;
