import { InputWrapper } from "./input.styles";

const Input = ({
  InputBg,
  type,
  placeholder,
  value,
  onChange,
  name,
  children,
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
    >
      {children}
    </InputWrapper>
  );
};

export default Input;
