import React from "react";
import "./SubmitButton.scss";

interface SubmitButtonProps {
  disabled: boolean;
  children: React.ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ disabled, children }) => {
  return (
    <button type="submit" className="submitButton" disabled={disabled}>
      {children}
    </button>
  );
};

export default SubmitButton;