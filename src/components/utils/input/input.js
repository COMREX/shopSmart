import { InputWrapper } from "./input.styles";

const Input = ({
  InputBg,
  type,
  placeholder,
  value,
  onChange,
  name,
  children,
  width,
  height,
  border,
  boxShadow,
}) => {
  return (
    <InputWrapper
      InputBg={InputBg}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required
      border={border}
      boxShadow={boxShadow}
      width={width}
      height={height}
    >
      {children}
    </InputWrapper>
  );
};

export default Input;
