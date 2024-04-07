// ion/Input: Generated with Ion on 2/26/2024, 3:24:47 PM
import * as React from "react";
import Label from "./Label";
import Hint from "./Hint";
import clsx from "clsx";

export const inputContainerClasses = (error?: boolean) =>
  clsx(
    [
      "flex gap-2",
      "items-center",
      "w-full",
      "rounded-radius",
      "border",
      "px-3",
      "text-sm",
      "transition-shadow",
      "text-foreground",
    ],
    "focus-within:primary-focus focus-within:border-foreground",
    "file:border-0 file:bg-transparent file:text-sm file:font-medium",
    "aria-disabled:border-weak-stroke aria-disabled:bg-weak",
    {
      "focus-within:danger-focus border-danger": error,
      "border-sub-stroke": !error,
    }
  );

export const inputClassNames = clsx(
  "h-9 w-full flex-shrink rounded-radius bg-transparent focus:outline-none",
  "placeholder:text-soft-foreground disabled:text-soft-foreground",
  "disabled:placeholder:text-weak-foreground"
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  error?: boolean;
  iconLeading?: React.ReactNode;
  iconTrailing?: React.ReactNode;
  label?: string;
  helper?: string;
  hint?: string;
  showHintIcon?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      error,
      required = false,
      helper,
      label,
      hint,
      showHintIcon,
      iconLeading,
      iconTrailing,
      ...props
    },
    ref
  ) => {
    const id = React.useId();
    return (
      <div className={className}>
        {label && (
          <Label
            htmlFor={id}
            required={required}
            helper={helper}
            disabled={props.disabled}
            className="mb-1"
          >
            {label}
          </Label>
        )}
        <span
          className={inputContainerClasses(error)}
          aria-disabled={props.disabled}
        >
          {iconLeading && (
            <span
              className={clsx("text-soft-foreground", {
                "text-weak-foreground": props.disabled,
              })}
            >
              {iconLeading}
            </span>
          )}

          <input
            aria-required={required}
            id={id}
            className={inputClassNames}
            ref={ref}
            type={type}
            {...props}
          />
          {iconTrailing && (
            <span
              className={clsx("text-soft-foreground", {
                "text-weak-foreground": props.disabled,
              })}
            >
              {iconTrailing}
            </span>
          )}
        </span>
        {hint && (
          <Hint
            error={error}
            className="mt-1"
            showIcon={showHintIcon}
            disabled={props.disabled}
          >
            {hint}
          </Hint>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
