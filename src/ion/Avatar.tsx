"use client";
// ion/Avatar: Generated with Ion on 2/26/2024, 3:24:49 PM
import clsx from "clsx";
import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { Check, Plus, X, User } from "@phosphor-icons/react";
import { cva } from "class-variance-authority";

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={clsx(
      "aspect-square h-full w-full rounded-full object-cover",
      className
    )}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> & {
    initials?: string;
    size?: AvatarSize;
  }
>(({ className, initials, size, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={clsx(
      "flex items-center justify-center rounded-full",
      initials ? "text-foreground" : "text-sub-foreground",
      {
        "text-lg": size === "lg",
        "text-base": size === "md",
        "text-sm": size === "sm",
        "h-7 w-7": size === "md",
        "h-4 w-4": size === "sm",
        "h-12 w-12": size === "lg",
      },
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

const avatarStatusClassNames = cva(
  [
    "absolute box-content flex flex-row items-center justify-center rounded-full border-background",
  ],
  {
    variants: {
      location: {
        top: "right-0 top-0",
        bottom: "bottom-0 right-0",
      },
      size: {
        lg: "h-3 w-3 border-2",
        md: "h-3 w-3 border-2",
        sm: "h-2 w-2 border",
      },
      type: {
        online: "bg-state-success",
        offline: "bg-state-error",
        delete: "bg-state-error",
        inactive: "bg-state-neutral",
        plus: "bg-state-neutral",
        away: "bg-state-warning",
        check: "bg-state-verified",
      },
    },
  }
);

type AvatarStatusType =
  | "online"
  | "offline"
  | "inactive"
  | "away"
  | "check"
  | "plus"
  | "delete";

const AvatarStatus = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    type: AvatarStatusType;
    location: "top" | "bottom";
    size: AvatarSize;
  }
>(({ className, type, location, size, ...props }, ref) => {
  const iconClassNames = clsx({
    "text-background stroke-2": true,
    "h-2 w-2": size === "lg" || size === "md",
    "h-1.5 w-1.5": size === "sm",
  });

  return (
    <div
      ref={ref}
      className={clsx(
        avatarStatusClassNames({
          location,
          size,
          type,
        }),
        className
      )}
      {...props}
    >
      {type === "check" && <Check className={iconClassNames} weight="bold" />}
      {type === "plus" && <Plus className={iconClassNames} weight="bold" />}
      {type === "delete" && <X className={iconClassNames} weight="bold" />}
    </div>
  );
});
AvatarStatus.displayName = "AvatarStatus";

const AvatarLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    title?: string;
    subtitle?: string;
    size: AvatarSize;
  }
>(({ className, title, subtitle, size, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx(
        {
          "flex flex-col justify-center": true,
          "gap-y-1": size === "lg",
          "gap-y-0.5": size === "md",
          "gap-y-0": size === "sm",
        },
        className
      )}
      {...props}
    >
      {title && (
        <h3
          className={clsx("font-semibold text-foreground", {
            "text-lg": size === "lg",
            "text-base": size === "md",
            "text-sm": size === "sm",
          })}
        >
          {title}
        </h3>
      )}
      {subtitle && (
        <p
          className={clsx({
            "text-sub-foreground": true,
            "text-base": size === "lg",
            "text-sm": size === "md",
            "text-xs": size === "sm",
          })}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
});
AvatarLabel.displayName = "AvatarLabel";

type AvatarSize = "sm" | "md" | "lg";

interface AvatarProps {
  topStatus?: AvatarStatusType;
  bottomStatus?: AvatarStatusType;
  size?: AvatarSize;
  src?: string;
  title?: string;
  subtitle?: string;
  initials?: string;
  fallback?: React.ReactNode;
  className?: string;
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & AvatarProps
>(
  (
    {
      className,
      initials,
      topStatus,
      bottomStatus,
      size = "md",
      src,
      title,
      subtitle,
      fallback = <User size={24} />,
      ...props
    },
    ref
  ) => (
    <div
      className={clsx({
        "flex flex-row items-center": true,
        "gap-x-3": size === "lg" || size === "md",
        "gap-x-2": size === "sm",
      })}
    >
      <AvatarPrimitive.Root
        ref={ref}
        className={clsx(
          {
            "relative flex shrink-0 flex-col items-center justify-center rounded-full border border-sub-stroke bg-soft": true,
            "h-[60px] w-[60px]": size === "lg",
            "h-12 w-12": size === "md",
            "h-7 w-7": size === "sm",
          },
          className
        )}
        {...props}
      >
        {topStatus && (
          <AvatarStatus location="top" type={topStatus} size={size} />
        )}
        {bottomStatus && (
          <AvatarStatus location="bottom" type={bottomStatus} size={size} />
        )}

        <AvatarImage src={src} />
        <AvatarFallback initials={initials} size={size}>
          {initials ? initials : fallback}
        </AvatarFallback>
      </AvatarPrimitive.Root>
      {(title || subtitle) && (
        <AvatarLabel title={title} subtitle={subtitle} size={size} />
      )}
    </div>
  )
);
Avatar.displayName = "Avatar";

export default Avatar;
