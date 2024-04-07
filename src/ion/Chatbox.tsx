// ChatBox.tsx
import React from "react";
import { Message as MessageType } from "@/ion/types"; // Adjust the path as needed
import { Message } from "@/ion/Message";
import { useEffect, useRef } from "react";

type ChatboxProps = {
  messages: MessageType[];
};

export const Chatbox = ({ messages }: ChatboxProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(scrollToBottom, [messages]);

  console.log("ChatBox messages: ", messages); // Check received props
  return (
    <div className="pb-44 pt-20 containerWrap">
      {messages.map((message, index) => (
        <Message
          key={index} // It's better to use a unique ID instead of the index
          message={message}
        />
      ))}
      <div ref={messagesEndRef}></div>
    </div>
  );
};
