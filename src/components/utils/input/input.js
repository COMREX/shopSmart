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
  widthMd,
  heightMd,
  widthSm,
  heightSm,
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
      width={width}
      height={height}
      mediaQueries={{
        widthMd: { widthMd },
        widthSm: { widthSm },
        heightMd: { heightMd },
        heightSm: { heightSm },
      }}
    >
      {children}
    </InputWrapper>
  );
};

export default Input;
