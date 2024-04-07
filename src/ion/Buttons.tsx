// Generated with Ion on 3/30/2024, 6:29:33 AM
// Figma Link: https://www.figma.com/file/CpDjDtNLwqaeLBFWOShcF7?node-id=60:2989
import clsx from "clsx";
type ButtonsProps = {
  icon: React.ReactNode | null;
  prop?: "1" | "2" | "3" | "4" | "prop-5";
  className?: string;
};

function Buttons({ icon, prop = "1", className = "" }: ButtonsProps) {
  return (
    <div
      className={clsx(
        {
          "bg-white h-[90px] flex justify-center items-center rounded-[50px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]":
            true,
          "w-[90px]":
            prop === "1" || prop === "2" || prop === "3" || prop === "4",
          "w-[338px] text-4xl leading-5 font-medium text-center text-black":
            prop === "prop-5",
        },
        className,
      )}
    />
  );
}
export default Buttons;
