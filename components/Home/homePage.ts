import styled, {keyframes} from 'styled-components';

export const HomePage = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #2B90D9;

`;

export const InitSection = styled.section`
  width: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  position: relative;
  
  @media (min-width: 768px) {
    height: 100vh;
    overflow: hidden;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  height: 100px;  
`;

export const LogoImage = styled.img`
  margin-top: 1rem;
  margin-left: 5.25rem;
`;

export const BlueCloud = styled.img`
  width: 235px;
  height: 209px;

  position: absolute;
  right: 0;
`;

export const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

export const ContainerText = styled.div`
    position: relative;
    overflow: hidden;

    justify-content: center;
    align-items: center;
    text-align: center; 

    width: 90%;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    color: rgb(255, 255, 255);
    font-style: normal;
    text-align: center;
`;

export const ContainerTextTitle = styled.h1`
  position: relative;

  margin: 160px 16px 16px 0px;
  
  z-index: 2;

  min-width: 260px;
  width: 80%;

  font-style: normal;
  font-weight: 800;
  font-size: 3.5rem;
  line-height: 120%;

  letter-spacing: 0.02em;
`;

export const ContainerTextParagraph = styled.p`
  margin-top: 48px;

  z-index: 2;

  max-width: 760px;
  min-width: 261px;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  /* or 200% */
  letter-spacing: 0.04em;
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
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px;

  letter-spacing: 0.02em;
  border-radius: 5rem;
  
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
`;

export const WallpaperContainer = styled.div`  
  position: absolute;
  bottom: 0;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

// interface WallpaperInitialSectionProps {

// }

export const WallpapersInitialSectionImg = styled.img`
    width: 575px;
    height: 522px;

    @media (max-width: 1600px) {
      width: 375px;
      height: 322px;
    }

    @media (max-width: 1050px) {
      display: hidden;
      display: none;
    }

    /* @media (max-width: 769px) {
      display: hidden;
      display: none;
    } */
`;

export const ExplanationSection = styled.section`
  overflow: hidden;
  width: 100vw;

  display: flex;
  flex-direction: column;

  position: relative;
  background: #fff;

  margin-bottom: 0;
  padding-bottom: 0;

`;

export const ExplanationContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 43.75rem 35rem;
  
  margin: 6.25rem auto;
`
export const ExplanationText = styled.article`
  text-align: left;
`

export const WallpaperThree = styled.img`
  width: 70%;
`;

export const ExplanationTitle = styled.h1`
  margin: 20px 48px;
  font-size: 3rem;
  line-height: 200%;
  /* or 36px */
  color: #282C37;
`;

export const ExplanationParagraph = styled.p`
  margin: 0 48px 50px;
  color: #282C37;

  text-align: left;
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 200%;
  /* or 1.688rem */

  letter-spacing: 0.02rem;
`;

export const  WavesContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  margin-bottom: 0;
  padding-bottom: 0;
`;

export const WavesExplanationSectionImg = styled.img`
  width: 100%;
  height: 200%;
  position: relative;
  
  top: 5px;
  margin-bottom: 0;
  padding-bottom: 0;
`;

export const FindSection = styled.section`
  background: #f2f2f2;
  width: 100vw;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  margin-top: 0;
  padding-top: 0;
  
  position: relative;
`;

export const FindContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 35rem 50rem;
  gap: 108px;
  
  margin: 6.25rem auto;
`

export const FindImage = styled.img`
  width: 70%;
  margin: 0 auto; 
  margin-bottom: 10rem;
`;

export const FindText = styled.article`
  text-align: left;
`

export const FindTitle = styled.h1`
  color: #282C37;
  margin: 1.25rem 3rem;
  font-size: 3rem;
  line-height: 150%;
  /* or 36px/120% */

  letter-spacing: 0.02em;
  color: #23272A;
`;

export const FindParagraph = styled.p`
  margin: 0 48px 50px;
  
  color: #282C37;
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 200%;
  /* or 2rem% */

  letter-spacing: 0.02em;
`;

export const LocalizationImg = styled.img`
  margin-right: 1.488rem;
`;

export const BagImg = styled.img`
  margin-right: 1.25rem;
`


