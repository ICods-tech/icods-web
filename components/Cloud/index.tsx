import React from 'react';
import { CloudStyle } from '../../styles/cloud';

interface CloudProps {
  animationTime: string;
  position_y: string;
  cloudImage: string
}

const Cloud = (props: CloudProps) => {
  return (
    <CloudStyle animationTime={props.animationTime} src={props.cloudImage} alt='Nuvem' position_y={props.position_y}/>
  );
};

export default Cloud;
