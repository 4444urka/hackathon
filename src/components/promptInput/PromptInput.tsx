import React, { useState } from "react";
import "./PromptInput.css";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { addBotResponseToHistory, addUserResponseToHistory } from "../../store/slices/responseHistorySlice";

const PromptInput: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [isBotResponding, setIsBotResponding] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text.trim() !== "" && !isBotResponding) {
      setIsBotResponding(true);
      await dispatch(addUserResponseToHistory(text));
      await dispatch(addBotResponseToHistory(text));
      setText("");
      setIsBotResponding(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(event as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <textarea
        placeholder="Введите сообщение"
        value={text}
        className="PromptInput"
        onChange={(e) => setText(e.target.value)}
        onKeyPress = {handleKeyPress}
        rows={1}
        disabled={isBotResponding}
      />
      <SubmitButton disabled={!text.trim() || isBotResponding} />
    </form>
  );
};

export default PromptInput;