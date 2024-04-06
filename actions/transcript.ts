import { useState } from "react";
import Recorder from "./Recorder";
import OpenAI from "openai";

interface TranscriptResponse {
  sender: string;
  response: string;
}

const Transcription = () => {
  const [transcription, setTranscription] = useState<string>("");

  const uploadAudio = async (blob: Blob) => {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    try {
      // Convert blob to base64
      const audioBase64 = await blobToBase64(blob);

      // Call Whisper API to transcribe audio
      const response = await openai.speechToText({
        audio: audioBase64,
        model: "whisper",
        max_tokens: 60,
      });

      console.log("Transcription:", response.data.text);

      // Update state with the transcription
      setTranscription(response.data.text);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const blobToBase64 = async (blob: Blob): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        resolve(base64String.split(",")[1]);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  return (
    <div>
      <Recorder uploadAudio={uploadAudio} />
      {transcription && <p>Transcription: {transcription}</p>}
    </div>
  );
};

export default Transcription;
