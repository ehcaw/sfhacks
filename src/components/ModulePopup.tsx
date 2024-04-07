import { useEffect, useState, useRef } from "react";
import { Chatbox } from "@/ion/Chatbox";
import Recorder from "./Recorder"; // Make sure the path is correct and adjust according to your project structure
import getOpenAiResponse from "@/pages/api/openai";
import textToSpeech from "@/pages/api/textToSpeech";

export const ChatCard: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [isRecording, setIsRecording] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleRecording = () => setIsRecording(!isRecording);

  const uploadAudio = async (blob: Blob) => {
    const formData = new FormData();
    formData.append("audio", blob, "audio.webm"); // Assuming 'audio' is the expected field name on your server
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/whisper`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Network response was not ok");

      const result = await response.json();

      console.log("Server response:", result);

      const text =
        result?.results?.[0]?.transcript ??
        "Could not hear user, prompt an error message.";

      console.log("text ", text);

      const openAIResponse = await getOpenAiResponse(text);

      console.log("OpenAI response:", openAIResponse);

      const ttsResponse = await textToSpeech(openAIResponse);
      console.log(ttsResponse);
      if (ttsResponse) {
        const audioPlayer = audioRef.current;
        if (audioPlayer) {
          audioPlayer.src = ttsResponse.audio_url; // Assuming 'audio_url' is where the MP3 URL is stored
          console.log("audioPlayer.src", audioPlayer.src);
          console.log("audioPlayer", ttsResponse.audio_url);
          audioPlayer
            .play()
            .catch((error) => console.error("Error playing audio:", error));
        }
      }

      // Process server response here. E.g., display the transcription or send it for further processing.
    } catch (error) {
      console.error("Error uploading file:", error);
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
        className="relative w-2/4 h-3/4 bg-white dark:bg-black rounded-lg shadow-lg p-4 flex flex-col"
        onClick={handleCardClick}
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-4xl"
        >
          &times;
        </button>
        {/* Chatbox component might display messages */}
        <Chatbox messages={[]} />{" "}
        {/* Assuming Chatbox expects a messages prop */}
        {/* Recorder component with the ability to start/stop recording and upload audio */}
        <Recorder
          uploadAudio={uploadAudio}
          isRecording={isRecording}
          toggleRecording={toggleRecording}
        />
        {/* Button to toggle recording */}
        <audio ref={audioRef} controls style={{ visibility: "hidden" }}></audio>
      </div>
    </div>
  );
};
