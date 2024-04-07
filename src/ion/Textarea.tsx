"use client";
// ion/Textarea: Generated with Ion on 2/26/2024, 3:24:49 PM
import * as React from "react";
import clsx from "clsx";
import Label from "./Label";
import Hint from "./Hint";
import { useState } from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  required?: boolean;
  label?: string;
  helper?: string;
  hint?: string;
  showHintIcon?: boolean;
  error?: boolean;
  showCount?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      style,
      required,
      label,
      helper,
      hint,
      showHintIcon,
      error,
      showCount,
      // Need to explicitly call out since the {...props} spread at the end of the textarea would overwrite the onChange handler
      onChange,
      ...props
    },
    ref
  ) => {
    const id = React.useId();
    const [charCount, setCharCount] = useState(0);

    return (
      <div className={className}>
        {label && (
          <Label
            htmlFor={id}
            disabled={props.disabled}
            required={required}
            helper={helper}
            className="mb-1"
          >
            {label}
          </Label>
        )}
        <div className="relative">
          <textarea
            maxLength={props.maxLength}
            id={id}
            ref={ref}
            onChange={(e) => {
              if (onChange) {
                onChange(e);
              }
              setCharCount(e.target.value.length);
            }}
            className={clsx(
              "focus-visible:primary-focus flex w-full rounded-radius border bg-transparent p-3 text-sm text-foreground transition-shadow placeholder:text-soft-foreground focus-visible:border-foreground",
              "disabled:pointer-events-none disabled:border-weak-stroke disabled:bg-weak disabled:text-soft-foreground disabled:placeholder:text-weak-foreground",
              {
                "focus-visible:danger-focus border-danger": error,
                "border-sub-stroke": !error,
              }
            )}
            {...props}
          />
          {showCount && (
            <span
              className={clsx(
                "absolute bottom-3 right-4 text-xs font-normal text-sub-foreground",
                {
                  "text-weak-foreground": props.disabled,
                  "!text-danger": error,
                }
              )}
            >
              {charCount} / {props.maxLength}
            </span>
          )}
        </div>
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
Textarea.displayName = "Textarea";

export default Textarea;
