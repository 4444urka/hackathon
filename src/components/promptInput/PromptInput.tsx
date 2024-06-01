import React, { useState } from "react";
import "./PromptInput.css";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { addBotResponseToHistory, addUserResponseToHistory } from "../../store/slices/responseHistorySlice";

const PromptInput: React.FC = () => {
  const [text, setText] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text.trim() !== "") {
      dispatch(addUserResponseToHistory(text));
      dispatch(addBotResponseToHistory(text));
      setText("");
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