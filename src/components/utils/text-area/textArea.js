import React from "react";
import { TextAreaWrapper } from "./textArea.styles";

const TextArea = ({ placeholder, value, name, onChange }) => {
  return (
    <TextAreaWrapper
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    ></TextAreaWrapper>
  );
};

export default TextArea;
