import styled, { keyframes } from 'styled-components';

interface CloudProps {
    animationTime: string;
    position_y: string;
}

const animClouds = keyframes`
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(200%);
    }
`;

export const CloudStyle = styled.img<CloudProps>`
  position: absolute;
  z-index: 1;

  width: 50px;

  left: 10px;
  top: position_y;

  animation: animationTime ${ animClouds } linear infinite;
`
