import { useState } from "react";

type SendMessageProps = {
  onSendMessage: (message: string) => void;
};

export const SendMessage = ({ onSendMessage }: SendMessageProps) => {
  const [value, setValue] = useState("");

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim()) {
      onSendMessage(value);
      setValue("");
    }
  };

  return (
    <div className=" fixed py-10 shadow-lg">
      <form onSubmit={handleSendMessage} className="containerWrap px-2 flex">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input w-full focus:outline-none bg-gray-100 rounded-r-none"
          type="text"
        />
        <button
          type="submit"
          className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm"
        >
          Send
        </button>
      </form>
    </div>
  );
};
