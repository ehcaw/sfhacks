import { useEffect, useState } from "react";
import { Message as MessageType } from "@/ion/types";
import { SendMessage } from "@/ion/Sendmessage";
import { Chatbox } from "@/ion/Chatbox";

interface ChatCardProps {
  onClose: () => void;
}

export const ChatCard: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  // This function is called when the overlay is clicked
  const handleOverlayClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    onClose();
  };

  // This function stops the click from propagating to the overlay
  const handleCardClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={handleOverlayClick}
    >
      <div
        className="relative w-3/4 h-3/4 bg-white dark:bg-black rounded-lg shadow-lg p-4 flex flex-col"
        onClick={handleCardClick}
      >
        {/* Close button now to the left inside the card */}
        <div className="absolute top-0 left-0 -ml-8 mt-2">
          <button
            onClick={onClose}
            className="text-2xl text-white bg-transparent hover:bg-gray-200 hover:text-black rounded-full p-1"
          >
            &times;
          </button>
        </div>
        <Chatroom />
      </div>
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

  // Adjusted styles for better centering and sizing
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="relative w-3/4 h-3/4 bg-white dark:bg-black rounded-lg shadow-lg p-4 flex flex-col">
        <button className="absolute top-0 left-0 m-2 text-2xl text-white">
          &times;
        </button>
        <div className="flex-1 overflow-y-auto">
          <Chatbox messages={messages} />
        </div>
        <div className="mt-4">
          <SendMessage onSendMessage={handleNewMessage} />
        </div>
      </div>
    </div>
  );
};
