import React, { useState } from "react";
import { ChatBox } from "@/ion/Chatbox";
import { SendMessage } from "@/ion/Sendmessage";
import { Message as MessageType } from "@/ion/types";
import { VerticalBar } from "@/ion/verticalsidebar";

export const Chatroom = () => {
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
        <VerticalBar />
        <div
          className="containerWrap flex-1 scrollbar-hide overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 5px)" }}
        >
          <ChatBox messages={messages} />
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="pl-20">
          <SendMessage onSendMessage={handleNewMessage} />
        </div>
      </div>
    </div>
  );
};
