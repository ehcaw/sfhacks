import { useEffect, useState } from "react";
import { Message as MessageType } from "@/ion/types";
import { SendMessage } from "@/ion/Sendmessage";
import { Chatbox } from "@/ion/Chatbox";

interface ChatCardProps {
  onClose: () => void;
}

export const ChatCard: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  // Prevents propagation to the overlay
  const handleCardClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };
  
  const uploadAudio = async (blob: Blob) => {
    const formData = new FormData();
    formData.append('audio', blob, 'audio.webm'); // Assuming 'audio' is the expected field name on your server
  
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/uploadAudio`, { // Endpoint to handle audio upload
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) throw new Error('Network response was not ok');
  
      const result = await response.json();
      console.log('Server response:', result);
      // Process server response here. E.g., display the transcription or send it for further processing.
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={() => onClose()} // Closes when overlay is clicked
    >
      <div
        className="relative w-3/4 h-3/4 bg-white dark:bg-black rounded-lg shadow-lg p-4 flex flex-col"
        onClick={handleCardClick}
      >
        {/* Correctly aligned close button with "×" */}
        <div className="absolute top-0 left-0 ml-4 mt-4 text-black">
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent the click from propagating to the overlay
              onClose();
            }}
            className="text-4xl text-black bg-black hover:bg-gray-700 hover:text-black rounded-full p-2"
            style={{ outline: "none" }} // Removes focus outline
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
