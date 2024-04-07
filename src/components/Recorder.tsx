import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import activeAssistantIcon from "@/img/active.gif";
import notActiveAssistantIcon from "@/img/notactive.png";
import { useFormStatus } from "react-dom";
import React from "react";

const mimeType = "audio/webm";

function Recorder({
  uploadAudio,
  setAudioStream,
  isRecording,
}: {
  uploadAudio: (blob: Blob) => void;
  setAudioStream: (stream: MediaStream | null) => void;
  isRecording: boolean;
}) {
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const [pending, setPending] = useState<boolean>(false);
  const [permission, setPermission] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [audio, setAudio] = useState<string | null>(null);

  useEffect(() => {
    getMicrophonePermission();
    if (!isRecording) {
      setStream(null);
      setAudioStream(null);
    }
  }, [isRecording, setAudioStream]);

  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err: any) {
        alert(err.message);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
  };

  const startRecording = async () => {
    if (mediaRecorder === null || stream === null) return;

    if (pending) return;

    setPending(true);
    setRecordingStatus("recording");
    //create new Media recorder instance using the stream
    const media = new MediaRecorder(stream, { mimeType: mimeType });
    //set the MediaRecorder instance to the mediaRecorder ref
    mediaRecorder.current = media;
    //invokes the start method to start the recording process
    mediaRecorder.current.start();
    let localAudioChunks: Blob[] = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return;
      if (event.data.size === 0) return;
      localAudioChunks.push(event.data);
    };
    setAudioChunks(localAudioChunks);
  };

  const stopRecording = () => {
    if (mediaRecorder.current === null) return;

    if (pending) return;

    setRecordingStatus("inactive");
    //stops the recording instance
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      //creates a blob file from the audiochunks data
      const audioBlob = new Blob(audioChunks, { type: mimeType });
      //creates a playable URL from the blob file.
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudio(audioUrl);
      uploadAudio(audioBlob);
      setAudioChunks([]);
    };
  };

  return (
    <div className="flex items-center justify-center">
      {!permission ? (
        <button onClick={getMicrophonePermission} type="button">
          Get Microphone
        </button>
      ) : null}

      {pending && (
        <Image
          src={activeAssistantIcon}
          alt="Recording"
          width={350}
          height={350}
          onClick={stopRecording}
          priority={true}
          className="assistant grayscale"
        />
      )}
    </div>
  );
}

export default Recorder;

interface AudioVisualizerProps {
  audioStream: MediaStream | null;
  isRecording: boolean;
}

export const AudioVisualizer: React.FC<AudioVisualizerProps> = ({
  audioStream,
  isRecording,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const [isVisualizing, setIsVisualizing] = useState(false);
  const minBarHeight = 2;

  useEffect(() => {
    setIsVisualizing(isRecording);
  }, [isRecording]);

  useEffect(() => {
    if (!audioStream || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (!audioCtxRef.current) {
      try {
        audioCtxRef.current = new (window.AudioContext ||
          window.AudioContext)();
      } catch (e) {
        console.error("Web Audio API is not supported in this browser", e);
        return;
      }
    }
    const audioCtx = audioCtxRef.current;
    const analyser = audioCtx.createAnalyser();

    const source = audioCtx.createMediaStreamSource(audioStream);
    source.connect(analyser);
    analyser.fftSize = 256;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    let animationFrameId: number;

    const drawBars = () => {
      animationFrameId = requestAnimationFrame(drawBars);

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 1.5;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        let barHeight = minBarHeight;
        if (isVisualizing) {
          barHeight = Math.max(
            minBarHeight,
            (dataArray[i] / 128.0) * (canvas.height / 2)
          );
        }

        ctx.fillStyle = `rgba(35, 43, 43)`;

        ctx.fillRect(
          x,
          canvas.height / 2 - barHeight / 2,
          barWidth - 1,
          barHeight
        );

        x += barWidth * 2.5;
      }
    };

    drawBars();

    return () => {
      if (audioCtxRef.current) {
        source.disconnect();
        analyser.disconnect();
        audioCtxRef.current.close();
        audioCtxRef.current = null;
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [audioStream, isVisualizing]);
  return (
    <div className="flex justify-center items-center w-full mt-4 mb-4">
      <div className="inline-block bg-white p-4 rounded-lg shadow-md">
        <button></button>
        <canvas ref={canvasRef} className="w-full h-auto" />
      </div>
    </div>
  );
};

export const AudioRecordingFeature = () => {
  const [audioStream, setAudioStream] = useState<MediaStream | null>(null);
  const [isRecording, setIsRecording] = useState(false);

  const uploadAudio = (blob: Blob) => {
    // Implement the logic to upload the audio blob
    console.log("Uploading audio...", blob);
  };

  const handleAudioStream = (stream: MediaStream | null) => {
    setAudioStream(stream);
    // Set recording status based on whether the stream is available
    setIsRecording(stream !== null);
  };

  return (
    <div>
      <Recorder
        uploadAudio={uploadAudio}
        setAudioStream={handleAudioStream}
        isRecording={isRecording}
      />
      <AudioVisualizer audioStream={audioStream} isRecording={isRecording} />
    </div>
  );
};
