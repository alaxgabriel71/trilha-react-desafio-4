import React from 'react';
import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = (props) => {
  return <ButtonContainer {...props}>{props.title}</ButtonContainer>;
};


export default Button;