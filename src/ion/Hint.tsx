// ion/Hint: Generated with Ion on 2/26/2024, 3:24:47 PM
import clsx from "clsx";
import { Info } from "@phosphor-icons/react";

interface HintProps extends React.HTMLAttributes<HTMLDivElement> {
  showIcon?: boolean;
  error?: boolean;
  disabled?: boolean;
}

function Hint({
  className,
  children,
  error,
  showIcon,
  disabled,
  ...props
}: HintProps) {
  return (
    <p
      className={clsx(
        "flex items-center gap-2.5 text-xs",
        {
          "text-danger": error,
          "text-sub-foreground": !error,
          "text-weak-foreground": disabled,
        },
        className
      )}
      {...props}
    >
      {showIcon && <Info className="h-4 w-4" />}
      {children}
    </p>
  );
}

export default Hint;
