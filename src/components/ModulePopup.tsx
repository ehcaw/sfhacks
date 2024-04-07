import { useEffect, useState } from "react";
import { Message as MessageType } from "@/ion/types";
import {Chatbox} from "@/ion/Chatbox";
import Recorder from "./Recorder"; // Make sure the path is correct and adjust according to your project structure

export const ChatCard: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [isRecording, setIsRecording] = useState(false);

  const toggleRecording = () => setIsRecording(!isRecording);

  const uploadAudio = async (blob: Blob) => {
    const formData = new FormData();
    formData.append('audio', blob, 'audio.webm'); // Assuming 'audio' is the expected field name on your server
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/whisper`, {
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

  // Prevents propagation to the overlay
  const handleCardClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={onClose} // Closes when overlay is clicked
    >
      <div
        className="relative w-3/4 h-3/4 bg-white dark:bg-black rounded-lg shadow-lg p-4 flex flex-col"
        onClick={handleCardClick}
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-4xl"
        >
          &times;
        </button>
        {/* Chatbox component might display messages */}
        <Chatbox messages={[]} /> {/* Assuming Chatbox expects a messages prop */}

        {/* Recorder component with the ability to start/stop recording and upload audio */}
        <Recorder
          uploadAudio={uploadAudio}
          isRecording={isRecording}
        />

        {/* Button to toggle recording */}
        <button
          className="mt-4 self-center btn"
          onClick={toggleRecording}
        >
          {isRecording ? "Stop Recording" : "Start Recording"}
        </button>
      </div>
    </div>
  );
};
