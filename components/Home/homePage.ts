import styled, {keyframes} from 'styled-components';

export const HomePage = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #2B90D9;
  position: absolute;

  @media (max-width: 769px) {
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
`;

export const InitSection = styled.section`
  width: 100vw;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  z-index: 999;
  position: relative;
  @media (min-width: 768px) {
    height: 80vh;
    overflow: hidden;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  height: 100px;  

  @media (max-width: 769px) {
    padding-right: 4rem;
  }
`;

interface LogoImageProps {
  marginBottom: string;
  marginLeft: string;
}

export const LogoImage = styled.img<LogoImageProps>`
  margin-top: 1rem;
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};

  @media (max-width: 769px) {
    margin-left: 1.5rem;
  }
`;

export const BlueCloud = styled.img`
  width: 235px;
  height: 209px;

  position: absolute;
  right: 0;

  @media (max-width: 1300px) {
    display: hidden;
    display: none;
  }
`;

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const SecondCloudContainer = styled.div`
  @media (max-width: 1405px) {
    display: none;
  }
`;

export const ThirdCloudContainer = styled.div`
  @media (max-width: 1400px) {
    margin-top: -60px;
  }

  @media (max-width: 1080px) {
    margin-top: -30px;
  }

  @media (max-width: 769px) {
    margin-top: 50px;
  }

  @media (max-width: 716px) {
    margin-top: 0px;
  }
`;

export const ContainerText = styled.div`
    position: relative;
    overflow: hidden;

    text-align: left; 

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgb(255, 255, 255);
    font-style: normal;

    @media (max-width: 769px) {
      margin-top: -6rem;
      /* padding: 0 1.5rem; */
      margin-bottom: 2rem;
      padding: 0 1.5rem;
    }
`;

export const ContainerTextTitle = styled.h1`
  position: relative;

  margin: 160px 16px 16px 0px;
  
  z-index: 2;
  width: 80%;
  min-width: 260px;

  font-style: normal;
  font-weight: 800;
  font-size: 3.5rem;
  line-height: 120%;
  text-align: center;
  
  letter-spacing: 0.02em;

  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 1080px) {
    font-size: 3.1rem;
  }
  @media(max-width: 590px) {
    /* width: 100%; */
    font-size: 2.2rem;

  }
`;

export const ContainerTextParagraph = styled.p`
  margin-top: 3rem;

  z-index: 2;

  max-width: 760px;
  min-width: 261px;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  /* or 200% */
  /* letter-spacing: 0.04em; */

  @media (max-width: 769px) {
      text-align: left;    
      line-height: 200%;
      letter-spacing: 4%;
      
      font-size: 1.6rem;
      padding: 0 1.5rem;
  }
  @media (max-width: 420px) {
    font-size: 1.1rem;
  }
`;

export const PlaystoreImg = styled.img`
  margin-right: 1.313rem;
`;

interface DownloadLinksProps {
  padding: string;
  marginTop: string;
  color: string;
  backgroundColor: string;
  border: string;
}

export const IosImg = styled.img`
  margin-right: 2.125rem;
`;

export const DownloadLinks = styled.a<DownloadLinksProps>`
  font-family: 'Manrope', sans-serif; 
  font-size: 1.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: 35px;

  letter-spacing: 0.02em;
  border-radius: 5rem;
  box-sizing: border-box;
  
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
  padding: ${(props) => props.padding};
  margin-top: ${(props) => props.marginTop};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s;

  &:hover{
    filter: brightness(0.9)
  }

  @media (max-width: 769px) {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1rem;
    padding: 12px 2rem;
    width: 68%;

    margin: 0 auto;
    margin-top: ${(props) => props.marginTop};
  }

  @media (max-width: 429px) {
    font-size: 0.75rem;
    width: 100%;
    padding: 1rem 2rem;
  }
`;

export const WallpaperContainer = styled.div`  
  position: absolute;
  bottom: 0;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WallpapersInitialSectionImg = styled.img`
    width: 35.9rem;
    height: 32.6rem;

    @media (max-width: 1600px) {
      width: 30%;
    }

    @media (max-width: 1300px) {
      display: hidden;
      display: none;
    }
`;

export const ExplanationSection = styled.section`
  overflow: hidden;
  width: 100vw;

  position: relative;
  background: #fff;

`;

export const ExplanationContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 43.75rem 35rem;
  
  margin: 6.25rem auto;

  @media (max-width: 1230px) {
    margin-top: 6.25rem;
    margin-bottom: 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding: 0 1.5rem; */
  }
`
export const ExplanationText = styled.article`
  text-align: left;
  padding: 0 1.5rem;
`

export const WallpaperThree = styled.img`
  margin: 0 auto;
  width: 70%;

  @media (max-width: 1230px) {
    width: 50%;
  }

  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const ExplanationTitle = styled.h1`
  margin: 1.25rem 3rem;
  font-size: 3rem;
  line-height: 200%;
  /* or 36px */
  color: #282C37;

  @media (max-width: 1230px) {
    margin: 0;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    font-weight: 800;

    line-height: 130%;
    font-size: 2.9rem;
  }
  @media (max-width: 420px) {
    font-size: 1.75rem;
  }
`;

export const ExplanationParagraph = styled.p`
  margin: 0 3rem 3rem;
  color: #282C37;

  text-align: left;
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 200%;
  /* or 1.688rem */

  letter-spacing: 0.02rem;

  @media (max-width: 1230px) {
    margin: 0;
    letter-spacing: 0.04rem;
  }
  @media (max-width: 420px) {
    font-size: 1rem;
  }
`;

export const  WavesContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding-bottom: 0;
  
  @media (max-width: 1230px) {
    margin-top: 0;
  }
`;

export const WavesExplanationSectionImg = styled.img`
  width: 100%;
  height: 200%;
  position: relative;
  
  top: 5px;
  margin-bottom: 0;
  padding-bottom: 0;

  @media (max-width: 1230px) {
    display: hidden;
    display: none;
  }
`;

export const FindSection = styled.section`
  background: #f2f2f2;
  width: 100%;
  overflow: hidden;
`;

export const FindContainer = styled.div`
  display: grid;
  justify-content: space-evenly;
  align-items: center;
  grid-template-columns: 34rem 35.2rem;
  gap: 15.188rem;
  
  margin: 6.25rem auto;

  @media (max-width: 1385px) {
    gap: 0;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding: 0 1.5rem;
  }
`

export const FindImage = styled.img`
  width: 100%;
  /* margin: 0 auto;  */
  margin-bottom: 10rem;

  @media (max-width: 1385px) {
    width: 50%;
    margin: 0 auto;
    box-sizing: border-box;
    
  }

  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const FindText = styled.article`
  text-align: left;
  `;

export const FindTitle = styled.h1`
  color: #282C37;
  margin: 1.25rem 3rem;
  font-size: 3rem;
  font-style: normal;
  line-height: 150%;
  /* or 36px/120% */

  letter-spacing: 0.02em;
  color: #23272A;

  @media (max-width: 1385px) {
    margin: 0;
    line-height: 125%;
    font-weight: 800;
    font-size: 2.9rem;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 429px) {
    font-size: 1.815rem;
  }
`;

export const FindParagraph = styled.p`
  margin: 0 3rem 3.125rem;
  width: 100%;
  box-sizing: border-box;
  color: #282C37;
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 200%;
  /* or 2rem% */

  letter-spacing: 0.02em;

  @media (max-width: 1385px) {
    letter-spacing: 0.04rem;
    font-size: 1.5rem;
    
    margin: 0 auto;
  }
  @media (max-width: 429px) {
    font-size: 1rem;
  }
`;

export const LocalizationImg = styled.img`
  margin-right: 1.488rem;
`;

export const BagImg = styled.img`
  margin-right: 1.25rem;
`


export const TutorialSection = styled.section`
  background-color: #fff;
  width: 100vw;
  margin: 0 auto;
  display: grid;
  align-items: center;

  /* overflow-block: unset; */
  /* overflow-wrap: unset; */
  /* overflow-anchor: unset; */
`;


export const TutorialContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  --webkit-overflow-scrolling: touch;
  overflow: hidden;

  @media (max-width: 769px) {
    overflow-x: scroll;
  }
`;

export const TutorialStepContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: none;
  
  object-fit: cover;
  scroll-snap-align: start;

  pointer-events: none;

 h1 {
   font-size: 3rem;
   line-height: 4.125rem;
   text-align: center;
   color: #282C37;
   
   margin: 5.563rem auto;

   @media (max-width: 769px) {
     font-size: 1.875rem;
     line-height: 120%;
   }
 }

 img {
   @media (max-width: 500px) {
     width: 80%;;
   }
 }

 p {
   font-size: 1.25rem;
   font-weight: normal;
   line-height: 1.688rem;
   text-align: center;
   
   color: #282C37;
   max-width: 25%;   
   margin-top: 3.56rem;
   margin-bottom: 7.125rem;

   @media (max-width: 769px) {
     min-width: 75%;
   }
 }
`;

export const TutorialNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background: none;
    border: none;
    cursor: pointer;
    
    transition: filter 0.2s;

    &:hover{
     filter: brightness(0.9)
    }

    img {
      width: 44px;
      height: 44px;
    }
  }

  legend {
    color: #282C37;
    letter-spacing: 0.02rem;
    font-size: 1.5rem;
    font-weight: bold;
    
    margin: 0 3.5rem;
  }

`;

export const IcodsAppImg = styled.img`
  width: 100%;
  @media (max-width:1300px) {
    width: 50%;
  }
  @media (max-width: 420px) {
    width: 100%;
  }
  `;

export const CompaniesContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-evenly;
  grid-template-columns: 47.313rem 27rem;

  gap: 5.438rem;
  
  padding: 0 1.5rem;
  margin: 6.25rem auto;

  @media(max-width: 1300px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem;
  }
`;

export const CompaniesText = styled.article`
  width: 100%;
`;

export const CompaniesSection = styled.div`
  background-color: #fff;
  width: 100%;
`;

export const CompaniesTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  line-height: 170%;
  color: #282C37;

  @media (max-width: 769px) {
    line-height: 125%;
    margin-bottom: 1.5rem;
    
  }

  @media (max-width: 429px) {
    font-size: 1.815rem;
  }
`; 

export const EnterpriseImg = styled.img`
  font-weight: 400;
  color: #282C37;
  font-size: 1.25rem;
  margin-right: 1.75rem;
  letter-spacing: 0.02em;
`;

export const CompaniesParagraph = styled.p`
  color: #282C37;
  margin-right: 1.75rem;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.02em;


  @media (max-width: 1300px) {
      font-size: 1.5rem;
      letter-spacing: 0.04em;
    }
  @media (max-width: 420px) {
      font-size: 1rem;
  }
`;

export const FooterSection = styled.footer`
    background-color: #282C37;
    width: 100%;
`;

export const FooterContainer = styled.div`
  margin-left: 10.625rem;
  display: flex; 
  border-bottom: 2px solid #2B90D9;
  margin-bottom: 3.75rem;

  @media (max-width: 1300px){
    border: none;

    display: flex;
    flex-direction: column;
    padding: 0 1.5rem;

    margin: 2rem auto 6.8rem;
  }
`;

export const TitleFooterSection = styled.div`
    margin-top: 5rem;
    margin-right: 8rem;

    @media (max-width: 1300px) {
      margin: 0 auto;
    }
`;
export const TitleFooter = styled.h1`
  color: #2B90D9;
  width: 15rem;
  
  @media (max-width: 1300px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const SelectLenguagesSection = styled.label`
  display: inline-block;
  margin-top: 1.813rem;
  
  @media (max-width: 769px) {
    margin-top: 1.5rem;
  }
`

export const SelectLenguages = styled.select`
  background-color: #282C37;
  border: none;
  color: #fff;
  font-size: 1rem;
  line-height: 1.375rem;
  letter-spacing: 0.02rem;
  font-weight: 400;
`;
export const SocialContactSection = styled.div`
  display: none;
  
@media (max-width: 1300px) {
  display: flex;
  margin-top: 1.5rem;
  margin-bottom: 2.25rem;
}
`;

export const SocialContactLink = styled.a`
  &{
    margin-right: 7px;
  }
`;


export const SocialContactLinksImg = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const SubSectionFooterGridLinks = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* gap: 3rem; */
    margin-bottom: 3.125rem;
    width: 100%;
  @media (max-width: 769px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* gap: 1rem; */
  }
`;

interface SubSectionFooterProps {
  marginTop: string;
}

export const SubSectionFooter = styled.div<SubSectionFooterProps>`
  margin-top: 6.625rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  
  @media (max-width: 1300px) {
    margin: 0 auto;
  }

  @media (max-width: 769px) {
    margin-top: ${props => props.marginTop}
  }
`;

export const SubSectionFooterTitle = styled.p`
    color: #2B90D9;
    font-size: 1rem;
    font-weight: 500;
    font-style: Medium;
    margin-bottom: 1.75rem;
    
    line-height: 1.375rem;

    @media (max-width: 1300px) {
      margin-bottom: 1.2rem;
    }

`;

export const SubSectionFooterLinks = styled.a`
  color: #fff;
  font-weight: 400;
  font-style: normal;
  font-size: 1rem;
  line-height: 1.366rem;
  margin-bottom: 1.75rem;
  width: fit-content;

  letter-spacing: 0.02em;

  @media (max-width: 1080px) {
    margin-bottom: 0.5rem;
    /* line-height: 1rem; */
  }
`;

export const FooterLogoImage = styled.div`
  @media (max-width: 1300px) {
    display: none;
  }
`;

export const ChatButton = styled.button`
  display: none;

  @media (max-width: 769px) {
    cursor: pointer;

    border-radius: 50%;

    width: 3.5rem;
    height: 3.5rem;
    background: linear-gradient(to bottom, #2B90D9, #53C4E8);
    
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border: 3px solid #fff;
    
    position: fixed;
    right: 24px;
    bottom: 35px;

  }
`;

export const ChatIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;