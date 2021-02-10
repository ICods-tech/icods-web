import React, { useState } from 'react';
import {
  HomePage,
  InitSection,
  Navbar,
  LogoImage,
  Container,
  ContainerText,
  ContainerTextTitle,
  ContainerTextParagraph,
  Sapiens01
} from '../../styles/homePage';
import Burger from '../Burger';
import Menu from '../Menu';
import Cloud from '../Cloud';

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <HomePage> 
      <InitSection>
        <Navbar>
          <LogoImage src="./images/logo.svg" alt="logo" />
          <Burger open={open} setOpen={setOpen}/>
          <Menu open={open} />
        </Navbar>
        <Container>
          <Cloud animationTime='10s' cloudImage='./images/cloud_1.svg' position_y='10' />
          <Cloud animationTime='7s' cloudImage='./images/cloud_2.svg'  position_y='25' />
          <Cloud animationTime='12s' cloudImage='./images/cloud_1.svg' position_y='0' />          
          <Cloud animationTime='25s' cloudImage='./images/cloud_2.svg' position_y='13' />          
          <ContainerText>
            <ContainerTextTitle>Compartilhe emoções de um novo jeito</ContainerTextTitle>  
            <ContainerTextParagraph>
              Você quer presentear alguém de uma forma especial? iCods surgiu para te ajudar nesse problema, 
              com ele você envia mensagens em forma de QR CODE, seja um vídeo editado por você, uma mensagem de texto feito com carinho, 
              um áudio ou imagem única, e tudo isso de uma forma acessível e fácil!
            </ContainerTextParagraph>
            <Sapiens01 src='./images/sapiens01.svg' alt='sapiens one'/>
          </ContainerText>
        </Container>

      </InitSection>
    </HomePage>
  )
};

export default Home;
