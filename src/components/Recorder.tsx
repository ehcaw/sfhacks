import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import activeAssistantIcon from "@/img/active.gif";
import notActiveAssistantIcon from "@/img/notactive.png";
import React from "react";
const mimeType = "audio/webm";

interface RecorderProps {
  uploadAudio: (blob: Blob) => Promise<void>; // Adjusted to return Promise<void> to match your async functio
  isRecording: boolean;
  toggleRecording: () => void;
}

const Recorder = ({
  uploadAudio,
  isRecording,
  toggleRecording,
}: RecorderProps) => {
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const [pending, setPending] = useState<boolean>(false);
  const [permission, setPermission] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [recordingStatus, setRecordingStatus] = useState({
    statisString: "inactive",
  });
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [audio, setAudio] = useState<string | null>(null);

  useEffect(() => {
    getMicrophonePermission();
  }, []);

  const combinedFunctions = (mode: string) => {
    if (mode == "recording") {
      stopRecording();
    } else {
      startRecording();
    }
    toggleRecording();
  };

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

    setRecordingStatus((prevState) => ({
      ...prevState,
      statisString: "recording",
    }));
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

    setRecordingStatus((prevState) => ({
      ...prevState,
      statisString: "inactive",
    }));
    //stops the recording instance
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      //creates a blob file from the audiochunks data
      const audioBlob = new Blob(audioChunks, { type: mimeType });
      //creates a playable URL from the blob   file.
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudio(audioUrl);
      uploadAudio(audioBlob);
      setAudioChunks([]);
    };
  };

  return (
    <div className="flex items-center justify-center">
      <AudioVisualizer audioStream={stream} isRecording={isRecording} />
      <div className="flex items-center justify-center">
        {!permission ? (
          <button onClick={getMicrophonePermission} type="button">
            Get Microphone
          </button>
        ) : null}
        {permission &&
        recordingStatus.statisString === "inactive" &&
        !pending ? (
          <Image
            src={notActiveAssistantIcon}
            alt="Not Recording"
            width={350}
            height={350}
            onClick={() => {
              combinedFunctions(recordingStatus.statisString);
            }}
            priority={true}
            className="assistant cursor-pointer hover:scale-110 duration-150 transition-all ease-in-out"
          />
        ) : null}
        {recordingStatus.statisString === "recording" ? (
          <Image
            src={activeAssistantIcon}
            alt="Recording"
            width={350}
            height={350}
            onClick={() => {
              combinedFunctions(recordingStatus.statisString);
            }}
            priority={true}
            className="assistant cursor-pointer hover:scale-110 duration-150 transition-all ease-in-out"
          />
        ) : null}
      </div>
    </div>
  );
};

export default Recorder;

function setAudioStream(arg0: null) {
  throw new Error("Function not implemented.");
}

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
  return <canvas ref={canvasRef} className="w-800 h-100" />;
};
function base64ToBlob(audioContent: any, arg1: string) {
  throw new Error("Function not implemented.");
}
