import React, { useState, MouseEvent, useRef, useEffect } from 'react';
import {
  DownloadLinks,
  HomePage,
  InitSection,
  Navbar,
  LogoImage,
  BagImg,
  BlueCloud,
  ChatButton,
  ChatIcon,
  Container,
  ContainerText,
  ContainerTextTitle,
  ContainerTextParagraph,
  CompaniesContainer,
  CompaniesText,
  CompaniesTitle,
  CompaniesSection,
  CompaniesParagraph,
  IosImg,
  IcodsAppImg,
  EnterpriseImg,
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
  FooterContainer,
  FooterLogoImage,
  FooterSection,
  LocalizationImg,
  PlaystoreImg,
  SecondCloudContainer,
  SelectLenguages,
  SelectLenguagesSection,
  SocialContactSection,
  SocialContactLink,
  SocialContactLinksImg,
  SubSectionFooter,
  SubSectionFooterGridLinks,
  SubSectionFooterLinks,
  SubSectionFooterTitle,
  TitleFooter,
  TitleFooterSection,
  ThirdCloudContainer,
  TutorialSection,
  TutorialContainer,
  TutorialCarrouselContainer,
  WallpaperContainer,
  WallpapersInitialSectionImg,
  WallpaperThree,
  WavesContainer,
  WavesExplanationSectionImg
} from './homePage';
import Burger from '../Burger';
import Menu from '../Menu';
import Cloud from '../Cloud';
import { TutorialStepContainer } from '../TutorialStepContainer';


const Home = () => {
  const [open, setOpen] = useState(true);
  const tutorialCarrouselContainer = useRef(null);
  const tutorialContainer = useRef(null);
  let selectedItem = 0;

  useEffect(() => {
    let intervalId = autoPlay();
    const navigationButtons = document.createElement("div")
    navigationButtons.id = "navigationButtons";

    const qtPages = tutorialContainer.current.children.length;
    tutorialCarrouselContainer.current.appendChild(navigationButtons)
    
    function nextBanner(btn, item) {
      let buttons = navigationButtons.children;
      
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("selectedItem")
      }
      btn.classList.add("selectedItem");
      selectedItem = item;
      tutorialContainer.current.scrollTo(tutorialContainer.current.offsetWidth * selectedItem, 0)
    }

    function autoPlay() {
      return setInterval(() => {
        if (selectedItem < qtPages - 1) selectedItem++;
        else selectedItem = 0;
        nextBanner(navigationButtons.children[selectedItem], selectedItem)
      }, 3000)
    }

    function buttonClicked(btn, item) {
      clearInterval(intervalId)
      nextBanner(btn, item)
      intervalId = autoPlay()
    }

    function insertButtons(upperDiv) {
      for (let i = 0; i < qtPages; i++) {
        let a = document.createElement("a")
        a.addEventListener("click", (event) => buttonClicked(event.target, i))
        a.innerText = String(i + 1);
        
        upperDiv.appendChild(a);
      }
      
      navigationButtons.children[0].classList.add("selectedItem");
    }
    insertButtons(navigationButtons);
    
  }, [])

  return (
    <HomePage>
      < BlueCloud src="./images/blueCloud.svg"/>
      <InitSection>
        <Navbar>
          <LogoImage src="./images/newlogo.svg" alt="logo" marginLeft="84px" marginBottom="0" />
          <div style={{display: 'flex',  height: '100%', alignItems: 'flex-end' }}>
            <Burger open={open} setOpen={setOpen}/>
          </div>
          <Menu open={open} />
        </Navbar>

        <Container>
        <SecondCloudContainer>

          <Cloud
            time="20s"
            width={122}
            heigth={80}         
            path="./images/cloud01.svg"
            alt="nuvem 2"
            top="80px"
          />
        </SecondCloudContainer>

            <Cloud
              time="25s"
              width={84}
              heigth={55}         
              path="./images/cloud03.svg"
              alt="nuvem 1"
              top="15px"
            />

          <ThirdCloudContainer>

            <Cloud
              time="30s"
              width={75}
              heigth={49}         
              path="./images/cloud03.svg"
              alt="nuvem 3"
              top="220px"
              />
          </ThirdCloudContainer>
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
            <WavesExplanationSectionImg src="./images/wave.svg" />
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

      <TutorialSection >
        <WavesContainer style={{ marginTop: 0 }}>
          <WavesExplanationSectionImg src="./images/wave2.svg" />
        </WavesContainer>

        <TutorialCarrouselContainer  ref={tutorialCarrouselContainer}> 
          <TutorialContainer  ref={tutorialContainer}>
            
            <TutorialStepContainer 
              image="./images/tutorial_step0_app.svg" 
              description="Baixe o aplicativo do iCODS no seu smartphone, seja android ou IOS"
            />
            <TutorialStepContainer 
              image="./images/tutorial_step1_bag.svg" 
              description="Adquira um iCods em uma de nossas lojas parceiras"
            />
            <TutorialStepContainer 
              image="./images/tutorial_step2_cell.svg" 
              description="Use a camera do seu celular e leia o QR Code"
            />
            <TutorialStepContainer 
              image="./images/tutorial_step3_edit.svg" 
              description="Edite a mensagem do seu jeito, fique a vontade para usar texto, vídeo e áudio."
            />
            <TutorialStepContainer 
              image="./images/tutorial_step4_map.svg" 
              description="Pronto! Agora basta conferir sua edição e clicar em enviar o iCods."
            />
            <TutorialStepContainer 
              image="./images/tutorial_step5_girl.svg" 
              description="Agora basta o destinatário ler o QR CODE e visualizar a mensagem."
            />
          </TutorialContainer>
        </TutorialCarrouselContainer>

      </TutorialSection>

      <CompaniesSection>
        <CompaniesContainer>
          <IcodsAppImg src="./images/icodsImageApp.svg" />
          
          <CompaniesText>
            <CompaniesTitle>Se você é uma empresa, então entre aqui!</CompaniesTitle>
            <CompaniesParagraph>Nessa área você pode gerenciar seus iCODS, 
              personalizando-os, realizar impressões em larga escala e contar 
              com um suporte especializado caso necessário, além de muitas outras funções, 
              venha conferir!
            </CompaniesParagraph>

            <DownloadLinks 
              href="#" 
              padding="20px 60px"
              marginTop="79px"
              color="#FFFFFF"
              backgroundColor="#282C37"
              border="none"
            > <EnterpriseImg src="./images/enterprise.svg"/> Sessão Empresas</DownloadLinks>
          </CompaniesText>
          
        </CompaniesContainer>
      </CompaniesSection>

      <FooterSection>
        
        <FooterContainer>
          
          <TitleFooterSection>
            <TitleFooter>Compartilhe emoções de um novo jeito</TitleFooter>
            
            <SelectLenguagesSection>
              <SelectLenguages>
                <option>Português (Brasil)</option>
                <option>Inglês (EUA)</option>
              </SelectLenguages>
            </SelectLenguagesSection>

            <SocialContactSection>
              
              <SocialContactLink href="https://www.instagram.com/icods_tech/" target="_blank">
                <SocialContactLinksImg src="./images/insta_icon.svg" ></SocialContactLinksImg>
              </SocialContactLink>
              
              <SocialContactLink href="https://www.linkedin.com/company/icods-tech/" target="_blank">
                <SocialContactLinksImg src="./images/linkedin_icon.svg"></SocialContactLinksImg>
              </SocialContactLink>
              
              <SocialContactLink href="#" target="_blank">
                <SocialContactLinksImg src="./images/twitter_icon.svg"></SocialContactLinksImg>
              </SocialContactLink>
            
            </SocialContactSection>
          </TitleFooterSection>

            <SubSectionFooterGridLinks>

            <SubSectionFooter marginTop="0">
              <SubSectionFooterTitle>Produto</SubSectionFooterTitle>
              <SubSectionFooterLinks href="#">Baixar</SubSectionFooterLinks>
              <SubSectionFooterLinks href="#">Usar iCODS? Por que?</SubSectionFooterLinks>
              <SubSectionFooterLinks href="#">Atualizações</SubSectionFooterLinks>
              <SubSectionFooterLinks href="#">Para Empresas</SubSectionFooterLinks>
            </SubSectionFooter>
          
          <SubSectionFooter marginTop="0">
              <SubSectionFooterTitle>
                Empresa
              </SubSectionFooterTitle>
              <SubSectionFooterLinks href="#">Sobre</SubSectionFooterLinks>
              <SubSectionFooterLinks href="#">Empregos</SubSectionFooterLinks>
              <SubSectionFooterLinks href="#">Marca</SubSectionFooterLinks>
            </SubSectionFooter>
            
            <SubSectionFooter marginTop="40px">
              <SubSectionFooterTitle>
                Suporte
              </SubSectionFooterTitle>

              <SubSectionFooterLinks href="#">Estou com problemas</SubSectionFooterLinks>
              <SubSectionFooterLinks href="#">Status do aplicativo</SubSectionFooterLinks>
              <SubSectionFooterLinks href="#">Contate-nos</SubSectionFooterLinks>
            </SubSectionFooter>
            
            <SubSectionFooter marginTop="40px">
              <SubSectionFooterTitle>
                Política
              </SubSectionFooterTitle>

              <SubSectionFooterLinks href="#">Licenças</SubSectionFooterLinks>
              <SubSectionFooterLinks href="#">Termos de uso</SubSectionFooterLinks>
              <SubSectionFooterLinks href="#">Reconhecimentos</SubSectionFooterLinks>
            </SubSectionFooter>
            </SubSectionFooterGridLinks>
        </FooterContainer>
        <FooterLogoImage>
            <LogoImage src="./images/logo_footer.svg" alt="logo" marginLeft="170px" marginBottom="62px"/>
        </FooterLogoImage>
      
      <ChatButton>
        <ChatIcon src="./images/chat_icon.svg" />
      </ChatButton>
      </FooterSection>

    </HomePage>
  )
};

export default Home;
