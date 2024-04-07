// Message.tsx
import React from "react";
import { Message as MessageType } from "@/ion/types"; // Adjust the path as needed

interface MessageProps {
  message: MessageType;
}

export const Message = ({ message }: MessageProps) => {
  console.log(message);
  if (message.senderId == "me") {
    return (
      <div>
        <div className="chat chat-end containerWrap">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src="/coloredpolyglot.png" alt="Colored Polyglot" />
            </div>
          </div>
          <div className="chat-header">{message.senderId}</div>
          <div className="chat-bubble">{message.text}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="chat chat-start containerWrap">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src="/coloredpolyglot.png" alt="Colored Polyglot" />
            </div>
          </div>
          <div className="chat-header">{message.senderId}</div>
          <div className="chat-bubble">{message.text}</div>
        </div>
      </div>
    );
  }
};
