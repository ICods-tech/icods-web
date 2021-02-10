import React, { useState } from 'react';
import {
  HomePage,
  InitSection,
  Navbar,
  LogoImage,
  Container,
  Clouds,
  ContainerText,
  ContainerTextTitle,
  ContainerTextParagraph,
  Sapiens01
} from '../../styles/homePage';
import Burger from '../Burger';
import Menu from '../Menu';

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
          <Clouds src="./images/clouds.svg" alt="clouds" />
          <ContainerText>
            <ContainerTextTitle>Um novo jeito de compartilhar emoções</ContainerTextTitle>  
            <ContainerTextParagraph>
              Você quer presentear alguém de uma forma especial? iCods surgiu para te ajudar nesse problema, 
              com ele você envia mensagens em forma de QR CODE, seja um vídeo editado exclusivamente por você, uma mensagem de texto feito com carinho, 
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
