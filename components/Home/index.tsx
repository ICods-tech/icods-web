import React, { useState } from 'react';
import {
  DownloadLinks,
  HomePage,
  InitSection,
  Navbar,
  LogoImage,
  BagImg,
  BlueCloud,
  Container,
  ContainerText,
  ContainerTextTitle,
  ContainerTextParagraph,
  IosImg,
  ExplanationSection,
  ExplanationContainer,
  ExplanationText,
  ExplanationParagraph,
  ExplanationTitle,
  FindSection,
  FindImage,
  FindTitle,
  FindContainer,
  FindText,
  FindParagraph,
  LocalizationImg,
  PlaystoreImg,
  WallpaperContainer,
  WallpapersInitialSectionImg,
  WallpaperThree,
  WavesContainer,
  WavesExplanationSectionImg
} from './homePage';
import Burger from '../Burger';
import Menu from '../Menu';
import Cloud from '../Cloud';

const Home = () => {
  const [open, setOpen] = useState(true);
  return (
    <HomePage>
      < BlueCloud src="./images/blueCloud.svg"/>
      <InitSection>
        <Navbar>
          <LogoImage src="./images/newlogo.svg" alt="logo" />
          <Burger open={open} setOpen={setOpen}/>
          <Menu open={open} />
        </Navbar>
        <Container>
          <Cloud
            time="20s"
            width={122}
            heigth={80}         
            path="./images/cloud01.svg"
            alt="nuvem 1"
            top="80px"
          />

          <Cloud
            time="25s"
            width={84}
            heigth={55}         
            path="./images/cloud03.svg"
            alt="nuvem 2"
            top="15px"
          />

          <Cloud
            time="30s"
            width={75}
            heigth={49}         
            path="./images/cloud03.svg"
            alt="nuvem 3"
            top="221px"
          />
          <ContainerText>
            <ContainerTextTitle>Compartilhe emoções de um novo jeito</ContainerTextTitle>  
            <ContainerTextParagraph>
              Você quer presentear alguém de uma forma especial? iCods surgiu para te ajudar
              nesse problema, com ele você envia mensagens em forma de QR CODE, seja
              um vídeo editado exclusivamente por você, uma mensagem de texto feito com 
              carinho, um áudio ou imagem única, e tudo isso de uma forma acessível e fácil!
            </ContainerTextParagraph>

            <DownloadLinks
            href="#"
            padding="21px 54px 25px 54px"
            color="#fff"
            backgroundColor="#282C37"
            marginTop="34px"
            border="none"
            > 
              <PlaystoreImg src="./images/playstore.svg" />
              Baixar para Android
            </DownloadLinks>
            
            <DownloadLinks
            href="#"
            padding="24px 82px 21px 69px"
            marginTop="23px"
            color="#2B90D9"
            backgroundColor="#fff"
            border="none"
            > 
              <IosImg src="./images/ios.svg" />
              Baixar para IOS
            </DownloadLinks>
          </ContainerText>

        </Container>
          <WallpaperContainer>
              < WallpapersInitialSectionImg src='./images/wallpapericods1.svg'/>
              < WallpapersInitialSectionImg src='./images/wallpapericods2.svg'/>
          </WallpaperContainer>
      </InitSection>
      
      <ExplanationSection>
        <ExplanationContainer>
          <WallpaperThree src="./images/wallpapericods3.svg" alt="wallpaper two" />
          
          <ExplanationText> 
            <ExplanationTitle>Simples, Rápido e Prático</ExplanationTitle>
            <ExplanationParagraph>
              Após adquirir um iCODS, você receberá um QR CODE personalizável. Escanei-o pela primeira vez e faça a edição do 
              seu jeito para aquela pessoa que você deseja presentear. Clique em enviar e espere a outra pessoa escanear seu QR CODE.   
            </ExplanationParagraph>
          </ExplanationText>

        </ExplanationContainer>
          <WavesContainer>
            <WavesExplanationSectionImg src="./images/waves02.svg" />
            <WavesExplanationSectionImg src="./images/waves01.svg"/>
          </WavesContainer>
      </ExplanationSection>

      <FindSection>
        <FindContainer> 
          <FindText>
            <FindTitle>Onde Encontrar iCODS?</FindTitle>
            <FindParagraph>
              Existem 2 formas de se obter um iCODS. A primeira é comprando nas lojas parceiras próximas a você. 
              Ja a outa maneira é tornando-se um de nossos revendedores oficiais.
            </FindParagraph>

            <DownloadLinks
            href="#"
            padding="24px 143px 21px 142px"
            color="#fff"
            backgroundColor="#282C37"
            marginTop="46px"
            border="none"
            > 
              <LocalizationImg src="./images/localization.svg" />
              Encontrar lojas
            </DownloadLinks>
            
            <DownloadLinks
            href="#"
            padding="24px 32px 21px 31px"
            marginTop="23px"
            color="#2B90D9"
            backgroundColor="#fff"
            border="1px solid #2B90D9"
            > 
              <BagImg src="./images/bag.svg" />
              Seja um de nossos revendedores
            </DownloadLinks>
          </FindText>

          <FindImage src="./images/wallpapericods5.svg" alt="wallpaper three" />
        </FindContainer>
      </FindSection>

    </HomePage>
  )
};

export default Home;
