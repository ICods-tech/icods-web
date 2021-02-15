import styled, {keyframes} from 'styled-components';

const animClouds = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(110%);
  }
`

interface CloudImageProps {
  width: number;
  heigth: number;
}

interface CloudContainerProps {
  time: string;
  top: string;
}

export const CloudContainer = styled.div<CloudContainerProps>`
  position: absolute;
  z-index: 1;

  width: 100%;
  left: 0;
  top: ${props => props.top};

  animation: ${props => props.time} ${animClouds} linear infinite;

`;

export const CloudImage = styled.img<CloudImageProps>`
  width: ${props => props.width};
  height: ${props => props.height};

`;
