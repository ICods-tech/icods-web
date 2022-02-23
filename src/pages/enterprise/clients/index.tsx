import React from 'react';
import Head from 'next/head';
import { 
  Container, GrayDivider, ICodsEnterpriseLogoLarge, LeftSectionContainer, MenuOptionContainer, MenuOptionIconAndTextContainer, MenuOptionText, NotificationsIconMenuOptionContainer, NotificationsIconMenuOptionNumber, RightSectionContainer
} from './styles'
import 'react-dropdown/style.css';
import GlobalStyle from '../../../../styles/globalStyle';
import { HeaderClient } from '../../../components/Enterprise/ClientsSection/Header';
import { User, Setting } from 'react-iconly'

const EnterpriseClients = () => {
  const menuOptionIconStyle = { width: '1rem', height: '1.25rem' }
  
  return (
    <>
      <GlobalStyle />
        <Head>
          <title>Empresarial | ICods</title>
        </Head>
        <Container>
          <LeftSectionContainer>
            <ICodsEnterpriseLogoLarge
              src="/images/enterprise/icods-logo.svg"
              alt="iCods Enterprise Logo"
            />
          <MenuOptionContainer
              isSelected
            >
              <MenuOptionIconAndTextContainer>
                <User set='bold' primaryColor='#fff' style={menuOptionIconStyle}/>
                <MenuOptionText>Clientes</MenuOptionText>
              </MenuOptionIconAndTextContainer>
              <NotificationsIconMenuOptionContainer>
                <NotificationsIconMenuOptionNumber>{0}</NotificationsIconMenuOptionNumber>
              </NotificationsIconMenuOptionContainer>
            </MenuOptionContainer>
            <MenuOptionContainer
              isSelected={false}
            >
              <MenuOptionIconAndTextContainer>
                <Setting set='bold' primaryColor='#fff' style={menuOptionIconStyle}/>
                <MenuOptionText>Configurações</MenuOptionText>
              </MenuOptionIconAndTextContainer>
            </MenuOptionContainer>
        </LeftSectionContainer>
        <RightSectionContainer>
          <HeaderClient
            name="Mucas Loreira"
            position="Gerente"
          />
          <GrayDivider />
        </RightSectionContainer>
       </Container>
    </>
  );
};

export default EnterpriseClients;
