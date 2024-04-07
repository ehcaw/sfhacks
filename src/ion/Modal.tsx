"use client";
// ion/Modal: Generated with Ion on 2/26/2024, 3:24:47 PM
import * as React from "react";
// Note: We are renaming the RadixUI Dialog -> Modal
import * as ModalPrimitive from "@radix-ui/react-dialog";
import clsx from "clsx";
import { X } from "@phosphor-icons/react";
import Button from "./Button";

const ModalTrigger = ModalPrimitive.Trigger;

const ModalPortal = ModalPrimitive.Portal;

const ModalClose = ModalPrimitive.Close;

const ModalOverlay = React.forwardRef<
  React.ElementRef<typeof ModalPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof ModalPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <ModalPrimitive.Overlay
    ref={ref}
    className={clsx(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
ModalOverlay.displayName = ModalPrimitive.Overlay.displayName;

const ModalContent = React.forwardRef<
  React.ElementRef<typeof ModalPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ModalPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <ModalPortal>
    <ModalOverlay />
    <ModalPrimitive.Content
      ref={ref}
      className={clsx(
        "fixed left-[50%] top-[50%] z-50 grid w-fit translate-x-[-50%] translate-y-[-50%] rounded-radius-lg border border-none bg-background shadow-high duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
        className
      )}
      {...props}
    >
      {children}
    </ModalPrimitive.Content>
  </ModalPortal>
));
ModalContent.displayName = ModalPrimitive.Content.displayName;

type ModalHeaderProps = {
  align?: "left" | "center";
  iconLocation?: "left" | "top";
  icon?: React.ReactNode;
  title?: string;
  subtitle?: string;
  bordered?: boolean;
};
const ModalHeader = ({
  align = "left",
  iconLocation = "left",
  icon,
  title,
  subtitle,
  bordered = true,
}: ModalHeaderProps) => (
  <div
    className={clsx("flex gap-2 p-5", {
      "flex-row items-center justify-start":
        iconLocation === "left" && align === "left",
      "flex-row items-center justify-center":
        iconLocation === "left" && align === "center",
      "flex-col items-start justify-center":
        iconLocation === "top" && align === "left",
      "flex-col items-center justify-center":
        iconLocation === "top" && align === "center",
      "border-b border-soft-stroke": bordered,
    })}
  >
    {icon && <span>{icon}</span>}
    <div
      className={clsx("flex flex-col items-start justify-center", {
        "items-center": iconLocation === "top" && align === "center",
      })}
    >
      {title && <ModalTitle>{title}</ModalTitle>}
      {subtitle && <ModalDescription>{subtitle}</ModalDescription>}
    </div>
  </div>
);
ModalHeader.displayName = "ModalHeader";

const ModalTitle = React.forwardRef<
  React.ElementRef<typeof ModalPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ModalPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ModalPrimitive.Title
    ref={ref}
    className={clsx("text-base-foreground font-semibold", className)}
    {...props}
  />
));
ModalTitle.displayName = ModalPrimitive.Title.displayName;

const ModalDescription = React.forwardRef<
  React.ElementRef<typeof ModalPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ModalPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ModalPrimitive.Description
    ref={ref}
    className={clsx("text-sm text-sub-foreground", className)}
    {...props}
  />
));
ModalDescription.displayName = ModalPrimitive.Description.displayName;

export type ModalProps = {
  showClose?: boolean;
  trigger?: React.ReactNode;
  className?: string;
  // Header props
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  iconLocation?: "left" | "top";
  align?: "left" | "center";
  bordered?: boolean;
  // Footer props
  footer?: React.ReactNode;
};
const Modal = React.forwardRef<
  React.ElementRef<typeof ModalPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ModalPrimitive.Root> & ModalProps
>(
  (
    {
      showClose,
      trigger,
      className,
      title,
      subtitle,
      icon,
      iconLocation,
      align,
      bordered,
      footer,
      ...props
    },
    ref
  ) => (
    <ModalPrimitive.Root {...props}>
      <ModalTrigger asChild>{trigger}</ModalTrigger>
      <ModalContent
        ref={ref}
        className={clsx("sm:min-w-96 max-w-lg overflow-hidden", className)}
      >
        {showClose && (
          <ModalPrimitive.Close
            asChild
            className={clsx(
              "text-base-foreground absolute right-4 top-4",
              "disabled:pointer-events-none"
            )}
          >
            <Button
              iconLeading={<X size={16} />}
              emphasis="low"
              color="secondary"
            />
          </ModalPrimitive.Close>
        )}
        {(title || subtitle || icon) && (
          <ModalHeader
            iconLocation={iconLocation}
            align={align}
            title={title}
            subtitle={subtitle}
            icon={icon}
            bordered={bordered}
          />
        )}
        {props.children}
        {footer}
      </ModalContent>
    </ModalPrimitive.Root>
  )
);
Modal.displayName = "Modal";

export default Modal;

export {
  ModalPortal,
  ModalOverlay,
  ModalClose,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
};
