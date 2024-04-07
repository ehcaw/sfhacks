import { useEffect, useState, useRef } from "react";
import { Chatbox } from "@/ion/Chatbox";
import Recorder from "./Recorder"; // Make sure the path is correct and adjust according to your project structure
import getOpenAiResponse from "@/pages/api/openai";
import textToSpeech from "@/pages/api/textToSpeech";

export const ChatCard: React.FC<{ onClose: () => void; topic: string }> = ({
  onClose,
  topic,
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleRecording = () => setIsRecording(!isRecording);

  const uploadAudio = async (blob: Blob) => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
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
        {!isLoading && (
          <p className="flex justify-center items-center pt-36 text-xl text-medium">
            Explain to me what {topic} is
          </p>
        )}
        {isLoading && (
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
            {" "}
            {/* Adjusted */}
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
        {/* Content here will not be obstructed by the loading indicator */}
        <Chatbox messages={[]} />
        <Recorder
          uploadAudio={uploadAudio}
          isRecording={isRecording}
          toggleRecording={toggleRecording}
        />
        <audio ref={audioRef} controls style={{ visibility: "hidden" }}></audio>
      </div>
    </div>
  );
};
