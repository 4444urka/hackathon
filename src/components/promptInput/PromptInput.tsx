import React, { useState } from "react";
import "./PromptInput.css";
import SubmitButton from "../submitButton/SubmitButton";

const PromptInput: React.FC = () => {
  const [text, setText] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text.trim() !== "") {
      alert(text);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Введите сообщение"
        value={text}
        className="PromptInput"
        onChange={(e) => setText(e.target.value)}
      />
      <SubmitButton disabled={!text.trim()} />
    </form>
  );
};

export default PromptInput;