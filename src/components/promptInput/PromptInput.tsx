import React, { useState } from "react";
import "./PromptInput.css";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import {
  addBotResponseToHistory,
  addUserResponseToHistory,
} from "../../store/slices/responseHistorySlice";
import { Question } from "../../types/questionResponse";
import { question } from "../../api/responses";
import Spinner from "../Spinner/Spinner";

const PromptInput: React.FC = () => {
  const [text, setText] = useState<Question>({ query: "" });
  const [isBotResponding, setIsBotResponding] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text.query.trim() !== "" && !isBotResponding) {
      setIsBotResponding(true);
      await dispatch(addUserResponseToHistory(text.query));
      try {
        const response = await question(text);
        console.log(text);
      } catch (error) {
        alert(error);
      } finally {
        setIsBotResponding(false);
      }
      // await dispatch(addBotResponseToHistory(text));
      setText({ query: "" });
      setIsBotResponding(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(event as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <textarea
        placeholder="Введите сообщение"
        value={text.query}
        className="PromptInput"
        onChange={(e) => setText({ query: e.target.value })}
        onKeyDown={handleKeyPress}
        rows={1}
        disabled={isBotResponding}
      />
      {!isBotResponding ? (
        <SubmitButton disabled={!text.query.trim() || isBotResponding} />
      ) : (
        <Spinner />
      )}
    </form>
  );
};

export default PromptInput;
