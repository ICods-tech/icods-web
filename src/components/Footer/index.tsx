import {
  ChatButton,
  ChatIcon, FooterContainer,
  FooterLogoImage,
  FooterSection, LogoImage, SelectLenguages,
  SelectLenguagesSection, SocialContactLink,
  SocialContactLinksImg, SocialContactSection, SubSectionFooter,
  SubSectionFooterGridLinks,
  SubSectionFooterLinks,
  SubSectionFooterTitle,
  TitleFooter,
  TitleFooterSection
} from './footer';
export const Footer = () => {
  return (
    <>
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
            <SubSectionFooterLinks href="https://icodsmobile.page.link/icods">Baixar</SubSectionFooterLinks>
            <SubSectionFooterLinks href="#">Usar iCODS? Por que?</SubSectionFooterLinks>
            <SubSectionFooterLinks href="/enterprise/login">Para Empresas</SubSectionFooterLinks>
          </SubSectionFooter>
        
        <SubSectionFooter marginTop="0">
            <SubSectionFooterTitle>
              Empresa
            </SubSectionFooterTitle>
            <SubSectionFooterLinks href="#">Sobre</SubSectionFooterLinks>
            <SubSectionFooterLinks href="#">Empregos</SubSectionFooterLinks>
          </SubSectionFooter>
          
          <SubSectionFooter marginTop="40px">
            <SubSectionFooterTitle>
              Suporte
            </SubSectionFooterTitle>

            <SubSectionFooterLinks href="#">Estou com problemas</SubSectionFooterLinks>
            <SubSectionFooterLinks href="#">Status do aplicativo</SubSectionFooterLinks>
            <SubSectionFooterLinks href="#">Atualizações</SubSectionFooterLinks>
            <SubSectionFooterLinks href="#">Contate-nos</SubSectionFooterLinks>
          </SubSectionFooter>
          
          <SubSectionFooter marginTop="40px">
            <SubSectionFooterTitle> Política </SubSectionFooterTitle>
            <SubSectionFooterLinks href="terms">Termos de uso</SubSectionFooterLinks>
            <SubSectionFooterLinks href="politcs">Politicas de privacidade</SubSectionFooterLinks>
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
    </>
  );
}