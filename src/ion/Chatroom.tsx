import React, { useState } from "react";
import { Chatbox } from "./Chatbox";
import { SendMessage } from "./Sendmessage";
import { Message as MessageType } from "./types";

interface ChatroomProps {
  children?: React.ReactNode;
}

export const Chatroom = ({ children }: ChatroomProps) => {
  const [messages, setMessages] = useState<MessageType[]>([]);

  const handleNewMessage = (newMessageText: string) => {
    setMessages((currentMessages) => {
      const updatedMessages = [
        ...currentMessages,
        { text: newMessageText, senderId: "me" },
      ];
      return updatedMessages;
    });
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-none overflow-y-auto flex">
        <div
          className="containerWrap flex-1 scrollbar-hide overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 5px)" }}
        ></div>
      </div>
      <div className="flex-1 flex flex-col"></div>
    </div>
  );
};

//<Chatbox messages={messages} />
