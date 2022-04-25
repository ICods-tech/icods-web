import React from 'react'
import {
  ICodsEnterpriseLogoLarge,
  LeftSectionContainer,
  MenuOptionContainer,
  MenuOptionIconAndTextContainer,
  MenuOptionText,
  NotificationsIconMenuOptionContainer,
  NotificationsIconMenuOptionNumber,
} from './styles'
import { User, Setting } from 'react-iconly'

const LeftSection = () => {
  const menuOptionIconStyle = { width: '1rem', height: '1.25rem' }
  return (
    <LeftSectionContainer>
      <ICodsEnterpriseLogoLarge
        src="/images/enterprise/icods-logo.svg"
        alt="iCods Enterprise Logo"
      />
      <MenuOptionContainer isSelected>
        <MenuOptionIconAndTextContainer>
          <User set="bold" primaryColor="#fff" style={menuOptionIconStyle} />
          <MenuOptionText>Clientes</MenuOptionText>
        </MenuOptionIconAndTextContainer>
        <NotificationsIconMenuOptionContainer>
          <NotificationsIconMenuOptionNumber>{0}</NotificationsIconMenuOptionNumber>
        </NotificationsIconMenuOptionContainer>
      </MenuOptionContainer>
      <MenuOptionContainer isSelected={false}>
        <MenuOptionIconAndTextContainer>
          <Setting set="bold" primaryColor="#fff" style={menuOptionIconStyle} />
          <MenuOptionText>Configurações</MenuOptionText>
        </MenuOptionIconAndTextContainer>
      </MenuOptionContainer>
    </LeftSectionContainer>
  )
}

export default LeftSection
