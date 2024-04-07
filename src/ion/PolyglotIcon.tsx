// Generated with Ion on 3/30/2024, 6:29:33 AM
// Figma Link: https://www.figma.com/file/CpDjDtNLwqaeLBFWOShcF7?node-id=71:634
import { Plus } from "lucide-react";
import clsx from "clsx";
type PolyglotIconProps = {
  property1?: "avatar" | "logo" | "variant-3";
  className?: string;
};

function PolyglotIcon({
  property1 = "logo",
  className = "",
}: PolyglotIconProps) {
  return (
    <div
      className={clsx(
        {
          "flex items-start rounded-full border border-gray-100 h-fit": true,
          relative: property1 === "avatar",
          "relative text-white": property1 === "logo",
          "w-[49px] text-4xl leading-5 font-bold text-center text-black":
            property1 === "variant-3",
        },
        className,
      )}
    >
      <img
        src="/images/prototype-conversation-log/Group-4.svg"
        alt="Group 4"
        className="w-full h-full"
      />
      {(property1 === "avatar" || property1 === "variant-3") && (
        <div
          className={clsx({
            "": true,
            "bg-[#10b985] right-0 bottom-0 absolute w-1/3 h-1/3 flex justify-center items-center rounded-full border-2 border-white":
              property1 === "avatar",
            "h-[49px] w-[140px]": property1 === "variant-3",
          })}
        />
      )}
    </div>
  );
}
export default PolyglotIcon;
