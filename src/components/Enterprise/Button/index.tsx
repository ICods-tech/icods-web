import React from 'react';
import { ButtonContainer, ButtonText } from './styles';

interface ButtonProps {
  title: string;
  pressed: () => void;
}

export const Button = ({ title, pressed }: ButtonProps) => {
  return (
    <ButtonContainer
      onClick={pressed}
    >
      <ButtonText>{ title }</ButtonText>
    </ButtonContainer>
  );
}