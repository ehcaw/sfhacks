
/** 
 * 
 * 

import transcript from "../../../actions/transcript";
import { useEffect, useRef, useState } from "react";
import Recorder from "./Recorder";
import { SettingsIcon } from "lucide-react";
import Image from "next/image";

const initialState = {
  sender: "",
  response: "",
  id: "",
};

export type Message = {
  sender: string;
  response: string;
  id: string;
};

export default function Home() {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const submitButtonRef = useRef<HTMLButtonElement | null>(null);
  const [displaySettings, setDisplaySettings] = useState(false);

  const uploadAudio = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;

    // Create a File object from the Blob
    const file = new File([blob], "audio.webm", { type: blob.type });

    // Set the file as the value of the file input element
    if (fileRef.current) {
      // Create a DataTransfer object to simulate a file input event
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      fileRef.current.files = dataTransfer.files;

      // Submit the form
      if (submitButtonRef.current) {
        submitButtonRef.current.click();
      }
    }
  };
  return (
      <main className="bg-black h-screen overflow-y-scroll">
        <header className="flex fixed top-0 justify-between text-white w-full p-5">
          <Image
            src="https://i.imgur.com/MCHWJZS.png"
            alt="Logo"
            width={50}
            height={50}
          />

          <SettingsIcon
            className="p-2 m-2 rounded-full cursor-pointer bg-purple-600 text-black transition-all ease-in-out duration-150 hover:bg-purple-700 hover:text-white"
            onClick={() => setDisplaySettings(!displaySettings)}
            size={40}
          />
        </header>
        <input type="file" name="audio" ref={fileRef} hidden />
        <button type="submit" hidden ref={submitButtonRef} />

        <div className="fixed bottom-0 w-full overflow-hidden bg-black rounded-t-3xl">
          <Recorder uploadAudio={uploadAudio} />
        </div>
      </main>
    );
  }
/**
<form action={formAction} className="flex flex-col bg-black">
        <div className="flex-1 bg-gradient-to-b from-purple-500 to-black">
          <Messages messages={messages} />
        </div>

        <input type="file" name="audio" ref={fileRef} hidden />
        <button type="submit" hidden ref={submitButtonRef} />

        <div className="fixed bottom-0 w-full overflow-hidden bg-black rounded-t-3xl">
          <Recorder uploadAudio={uploadAudio} />
          <div className="">  
          I REMOVED THIS 

           <VoiceSynthesizer state={state} displaySettings={displaySettings} />
          </div>

        </div>
*/
