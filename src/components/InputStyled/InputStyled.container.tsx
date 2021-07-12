import React from "react";
import { InputStyledProps } from "./InputStyled";
import InputStyledComponent from "./InputStyled.component";

const InputStyledContainer: React.FC<InputStyledProps> = ({
  onClick,
  onChange,
  onKeyPress,
  value,
}) => {
  return (
    <InputStyledComponent
      onClick={onClick}
      onChange={onChange}
      value={value}
      onKeyPress={onKeyPress}
    />
  );
};

export default InputStyledContainer;
