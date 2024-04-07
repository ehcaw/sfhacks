import React, { useState } from "react";
import { Chatbox } from "@/ion/Chatbox";
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
    <div>
      <div className="flex-none overflow-y-auto flex">
        <div
          className="containerWrap flex-1 scrollbar-hide overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 5px)" }}
        >
          <Chatbox messages={messages} />
        </div>
      </div>
      <div className="flex-1">
        <div className="pl-20">
          <SendMessage onSendMessage={handleNewMessage} />
        </div>
      </div>
    </div>
  );
};

export const ChatCard = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="card-actions justify-end">
          <button className="btn btn-square btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <Chatroom />
      </div>
    </div>
  );
};
