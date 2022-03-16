import React from 'react'
import {
  Container,
  ManagementText,
  NameAndPositionOuterContainer,
  NameAndPositionText,
  NameAndPositionTextContainer,
  PositionAndIConContainer,
  RightSectionContainer,
  SignOutText,
  ChevronLeftIcon,
  WelcomeToManagement,
  HeaderChevronContainer,
  ChevronLeftIconContainer,
} from './styles'
import { useRouter } from 'next/router'
import Avatar from 'react-avatar'
import { User, ChevronLeft } from 'react-iconly'

interface HeaderClientProps {
  isClientRegistry?: boolean
  name: string
  position: string
}

export const HeaderClient = ({ isClientRegistry, name, position }: HeaderClientProps) => {
  const router = useRouter()
  const iconStyle = { width: '1rem', height: '1rem', marginRight: '0.4rem' }
  return (
    <Container>
      {isClientRegistry ? (
        <HeaderChevronContainer>
          <ChevronLeftIconContainer onClick={() => router.back()}>
            <ChevronLeftIcon />
          </ChevronLeftIconContainer>
          <WelcomeToManagement>
            <ManagementText>Cadastrar</ManagementText> Cliente
          </WelcomeToManagement>
        </HeaderChevronContainer>
      ) : (
        <WelcomeToManagement>
          Bem vindo ao módulo <ManagementText>Gerência</ManagementText>
        </WelcomeToManagement>
      )}
      <RightSectionContainer>
        <NameAndPositionOuterContainer>
          <Avatar fgColor="rgba(0, 0, 0, 0.87)" color="#fff" name={name} round size={'5rem'} />
          <NameAndPositionTextContainer>
            <NameAndPositionText>{name}</NameAndPositionText>
            <PositionAndIConContainer>
              <User set="curved" primaryColor="#fff" style={iconStyle} />
              <NameAndPositionText>{position}</NameAndPositionText>
            </PositionAndIConContainer>
          </NameAndPositionTextContainer>
        </NameAndPositionOuterContainer>
        <SignOutText>Sair</SignOutText>
      </RightSectionContainer>
    </Container>
  )
}
