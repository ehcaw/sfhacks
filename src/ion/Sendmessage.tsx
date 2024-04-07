import React, { useState } from "react";
import active from "@/img/active.gif";
import notActive from "@/img/notactive.png";

export const SendMessage: React.FC<{
  onSendMessage: (message: string) => void;
}> = ({ onSendMessage }) => {
  const [message, setMessage] = useState<string>("");

  const handleSend = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  // Inline styles for the image size adjustment
  const imageStyle = {
    width: "auto", // Adjust width automatically based on the height
    height: "100px", // Example size, adjust as needed
    backgroundColor: "transparent", // Attempt to set background to transparent
  };

  return (
    <div className="flex justify-center items-center mt-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="input flex-1 rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
        placeholder="Your message..."
      />
      <button
        onClick={handleSend}
        disabled={message.trim() === ""}
        className={`${
          message.trim() === "" ? "opacity-50 cursor-not-allowed" : ""
        }`}
        style={{ border: "none", background: "none" }} // Removes any default styling from the button
      >
        <img
          src={message.trim() ? active.src : notActive.src}
          alt="Send"
          style={imageStyle}
        />
      </button>
    </div>
  );
};
