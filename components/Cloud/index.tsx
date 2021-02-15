import React from 'react';

import { CloudContainer, CloudImage } from './styles';

interface CloudProps {
  width: number;
  heigth: number;
  path: string;
  alt: string;
  time: string;
  top: string;

}

const Cloud = (props: CloudProps) => {
  return (
    <CloudContainer
      time={props.time}
      top={props.top}
    >
      <CloudImage
        src={props.path}
        alt={props.alt}
        width={props.width}
        heigth={props.heigth} />
    </CloudContainer>
 );
};

export default Cloud;
