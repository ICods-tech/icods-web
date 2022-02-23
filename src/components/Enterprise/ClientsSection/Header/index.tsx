import React from 'react';
import {
  Container, ManagementText, NameAndPositionOuterContainer, NameAndPositionText, NameAndPositionTextContainer, PositionAndIConContainer, RightSectionContainer, SignOutText, WelcomeToManagement,
} from './styles';
import Avatar from 'react-avatar';
import { User } from 'react-iconly'

interface HeaderClientProps {
  name: string;
  position: string;
}

export const HeaderClient = ({ name, position }: HeaderClientProps) => {
  const iconStyle = { width: '1rem' , height: '1rem', marginRight: '0.4rem' }
  return (
    <Container>
      <WelcomeToManagement>
        Bem vindo ao módulo <ManagementText>Gerência</ManagementText>
      </WelcomeToManagement>
      <RightSectionContainer>
        <NameAndPositionOuterContainer>
          <Avatar
            fgColor='rgba(0, 0, 0, 0.87)'
            color='#fff'
            name={name}
            round
            size={'5rem'}
          />
          <NameAndPositionTextContainer>
            <NameAndPositionText>{name}</NameAndPositionText>
            <PositionAndIConContainer>
              <User set='curved' primaryColor='#fff' style={iconStyle}/>
              <NameAndPositionText>{position}</NameAndPositionText>
            </PositionAndIConContainer>
          </NameAndPositionTextContainer>
        </NameAndPositionOuterContainer>
        <SignOutText>Sair</SignOutText>
      </RightSectionContainer>
    </Container>
  );
}