import { useRouter } from 'next/router'
import { useContext } from 'react'
import Avatar from 'react-avatar'
import { User } from 'react-iconly'
import { AuthContext } from '../../../../context/auth'
import {
  ChevronLeftIcon, ChevronLeftIconContainer, Container, HeaderChevronContainer, ManagementText,
  NameAndPositionOuterContainer,
  NameAndPositionText,
  NameAndPositionTextContainer,
  PositionAndIConContainer,
  RightSectionContainer,
  SignOutText, WelcomeToManagement
} from './styles'

interface HeaderClientProps {
  isClientRegistry?: boolean
  name: string
  position: string
}

export const HeaderClient = ({ isClientRegistry, name, position }: HeaderClientProps) => {
  const router = useRouter()
  const { businessSignOut } = useContext(AuthContext)
  const iconStyle = { width: '1rem', height: '1rem', marginRight: '0.4rem' }
  return (
    <Container>
      {isClientRegistry ? (
        <HeaderChevronContainer>
          <ChevronLeftIconContainer
            onClick={() => router.back()}
            src="/images/enterprise/back-button.svg"
            alt="Back icon"
          />
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
        <SignOutText onClick={businessSignOut}>Sair</SignOutText>
      </RightSectionContainer>
    </Container>
  )
}
