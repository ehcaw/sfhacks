import { useEffect, useState } from "react";
import { Message as MessageType } from "@/ion/types";
import { SendMessage } from "@/ion/Sendmessage";
import { Chatbox } from "@/ion/Chatbox";

export const ChatCard = () => {
  useEffect(() => {
    // Disable scrolling on the body when the component mounts
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <Chatroom />
    </div>
  );
};

export const Chatroom = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);

  const handleNewMessage = (newMessageText: string) => {
    setMessages((currentMessages) => [
      ...currentMessages,
      { text: newMessageText, senderId: "me" },
    ]);
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white dark:bg-black rounded-lg shadow-lg p-4 flex flex-col">
      <div
        className="flex-1 overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 200px)" }}
      >
        <Chatbox messages={messages} />
      </div>
      <SendMessage onSendMessage={handleNewMessage} />
    </div>
  );
};
