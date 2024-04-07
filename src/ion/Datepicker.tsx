"use client";
// ion/DatePicker: Generated with Ion on 2/26/2024, 3:24:46 PM
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "./Popover";
import { Calendar } from "./Calendar";
import {
  UseInputOptions,
  useInput,
} from "react-day-picker";
import React, { useEffect, useRef } from "react";
import {
  inputClassNames,
  inputContainerClasses,
} from "./Input";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import Label from "./Label";
import Hint from "./Hint";

type DatePickerProps = {
  className?: string;
  value?: Date | undefined;
  onSelect?: (date: Date | undefined) => void;
  iconLeading?: React.ReactNode;
  iconTrailing?: React.ReactNode;
  label?: string;
  helper?: string;
  hint?: string;
  showHintIcon?: boolean;
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
};

function Datepicker({
  error,
  value,
  onSelect,
  format = "PP",
  iconLeading,
  iconTrailing,
  label,
  helper,
  required,
  hint,
  showHintIcon,
  className,
  placeholder,
  ...props
}: UseInputOptions & DatePickerProps) {
  const id = React.useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputFocused, setInputFocused] =
    React.useState(false);
  const [datePickerOpen, setDatePickerOpen] =
    React.useState(false);
  const { inputProps, dayPickerProps, setSelected } =
    useInput({
      ...props,
      format,
      defaultSelected: value ?? undefined,
    });

  // This is required to make the datepicker work with controlled components
  useEffect(() => {
    if (!value) {
      setSelected(undefined);
    } else if (value && value !== dayPickerProps.selected) {
      setSelected(value);
    }
  }, [value]);

  useEffect(() => {
    if (dayPickerProps.selected !== value) {
      onSelect?.(dayPickerProps.selected);
    }
  }, [dayPickerProps.selected]);

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
      <Popover
        open={datePickerOpen}
        onOpenChange={(open: any) => {
          setDatePickerOpen(open);
          if (!open) {
            inputRef.current?.focus();
          }
        }}
      >
        <PopoverTrigger asChild>
          <span
            aria-disabled={props.disabled}
            className={twMerge(
              clsx(
                inputContainerClasses(error),
                "group-focus-within:primary-focus group-focus:primary-focus",
                inputFocused && "primary-focus"
              )
            )}
          >
            {iconLeading}
            <input
              {...inputProps}
              ref={inputRef}
              onChange={(e) => {
                inputProps.onChange?.(e);
              }}
              onFocus={() => setInputFocused(true)}
              onBlurCapture={() => setInputFocused(false)}
              className={inputClassNames}
              onKeyDown={(e) => {
                if (e.key === "Tab") {
                  setDatePickerOpen(false);
                }
                if (e.key === "Enter") {
                  e.preventDefault();
                  setDatePickerOpen(true);
                }
              }}
              placeholder={
                placeholder ?? inputProps.placeholder
              }
              disabled={props.disabled}
              id={id}
            />
            {iconTrailing}
          </span>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto px-5 py-8"
          align="end"
          sideOffset={12}
        >
          <Calendar
            mode="single"
            onDayFocus={() => setInputFocused(true)}
            onDayBlur={() => {
              setInputFocused(false);
            }}
            onSelect={(date) => {
              onSelect?.(date);
            }}
            className="group"
            initialFocus
            {...dayPickerProps}
          />
        </PopoverContent>
      </Popover>
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

export default Datepicker;
