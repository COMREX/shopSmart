import React from "react";
import { TextAreaWrapper } from "./textArea.styles";

const TextArea = ({
  placeholder,
  value,
  name,
  onChange,
  TextBg,
  width,
  height,
  boxShadow,
}) => {
  return (
    <TextAreaWrapper
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      TextBg={TextBg}
      width={width}
      height={height}
      boxShadow={boxShadow}
    ></TextAreaWrapper>
  );
};

export default TextArea;
