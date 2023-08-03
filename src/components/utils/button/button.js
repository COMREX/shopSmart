import { ButtonWrapper } from "./button.styles";

const Button = ({
  children,
  color,
  bg,
  onClick,
  fontSize,
  disabled,
  padding,
  height,
  width,
  fontWeight,
  borderRadius,
}) => {
  return (
    <ButtonWrapper
      color={color}
      bg={bg}
      onClick={onClick}
      disabled={disabled}
      padding={padding}
      borderRadius={borderRadius}
      fontWeight={fontWeight}
      fontSize={fontSize}
      width={width}
      height={height}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
