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
  WallpaperOne,
  WallpaperTwo,
  ExplanationSection,
  ExplanationParagraph,
  ExplanationTitle,
  FindSection,
  FindImage,
  FindTitle,
  FindParagraph
} from './homePage';
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
          <Cloud
            time="20s"
            width={50}
            heigth={50}         
            path="./images/cloud01.svg"
            alt="nuvem 1"
            top="100px"
          />

          <Cloud
            time="25s"
            width={50}
            heigth={50}         
            path="./images/cloud02.svg"
            alt="nuvem 2"
            top="15px"
          />

          <Cloud
            time="30s"
            width={50}
            heigth={50}         
            path="./images/cloud03.svg"
            alt="nuvem 3"
            top="150px"
          />
          <ContainerText>
            <ContainerTextTitle>Compartilhe emoções de um novo jeito</ContainerTextTitle>  
            <ContainerTextParagraph>
              Você quer presentear alguém de uma forma especial? iCods surgiu para te ajudar nesse problema, 
              com ele você envia mensagens em forma de QR CODE, seja um vídeo editado exclusivamente por você, uma mensagem de texto feito com carinho, 
              um áudio ou imagem única, e tudo isso de uma forma acessível e fácil!
            </ContainerTextParagraph>
            <WallpaperOne src='./images/wallpapericods1.svg' alt='wallpaper one'/>
          </ContainerText>
        </Container>
      </InitSection>
      
      <ExplanationSection>
        <WallpaperTwo src="./images/wallpapericods2.svg" alt="wallpaper two" />
        <ExplanationTitle>Simples, Rápido e Prático</ExplanationTitle>
        <ExplanationParagraph>Após adquirir um iCODS, você receberá um QR CODE personalizável. Escanei-o pela primeira vez e faça a edição do seu jeito para aquela pessoa que você deseja presentear. Clique em enviar e espere a outra pessoa escanear seu QR CODE.</ExplanationParagraph>
      </ExplanationSection>

      <FindSection>
        <FindImage src="./images/wallpapericods3.svg" alt="wallpaper three" />
        <FindTitle>Onde Encontrar iCODS?</FindTitle>
        <FindParagraph>Existem 2 formas de se obter um iCODS. A primeira é comprando nas lojas parceiras próximas a você. Ja a outa maneira é tornando-se um de nossos revendedores oficiais.</FindParagraph>
      </FindSection>

    </HomePage>
  )
};

export default Home;
