import React from 'react';
import { ContainerText } from '../Home/homePage';
import { Container } from './styles';

interface TutorialContainerProps {
  image: string;
  description: string;
}
export function TutorialStepContainer({ image, description }: TutorialContainerProps) {
  return(
    <Container>
      <h1>Passo a Passo</h1>
      <img src={image} alt="" />
      <p>{description}</p>
    </Container>
  )  
}