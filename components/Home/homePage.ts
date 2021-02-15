import styled, {keyframes} from 'styled-components';

export const HomePage = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #2B90D9;

`;

export const InitSection = styled.section`
  width: 100vw;
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
  align-items: flex-end;
  justify-content: space-between;

  width: 100vw;
  height: 100px;
  
`;

export const LogoImage = styled.img`
  margin-left: 17px;
`;

export const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

export const ContainerText = styled.div`
    position: relative;
    overflow: hidden;

    width: 90%;
    margin: 0px auto;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    color: rgb(255, 255, 255);
    font-style: normal;
`;

export const ContainerTextTitle = styled.h1`
  position: relative;

  margin: 48px 16px 16px 0px;
  
  z-index: 2;

  min-width: 260px;
  width: 80%;

  font-style: normal;
  font-weight: 800;
  font-size: 2.875rem;
  line-height: 120%;

  letter-spacing: 0.02em;
`;

export const ContainerTextParagraph = styled.p`
  margin-top: 48px;
  font-size: 12px;

  z-index: 2;

  width: 80%;
  min-width: 261px;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 32px;
  /* or 200% */

  letter-spacing: 0.04em;
`;

export const WallpaperOne = styled.img`
  
`;

export const ExplanationSection = styled.section`
  overflow: hidden;
  width: 100vw;

  display: flex;
  flex-direction: column;

  position: relative;
  background: #fff;
`;

export const WallpaperTwo = styled.img`
  width: 70%;
  margin: 50px auto;
`;

export const ExplanationTitle = styled.h1`
  margin: 20px 48px;
  font-size: 30px;
  line-height: 120%;
  /* or 36px */

  letter-spacing: 0.02em;

  color: #23272A;
`;

export const ExplanationParagraph = styled.p`
  margin: 0 48px 50px;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 32px;
  /* or 200% */

  letter-spacing: 0.04em;
`;


export const FindSection = styled.section`
  background: #f2f2f2;
  width: 100vw;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  position: relative;
`;

export const FindImage = styled.img`
  width: 70%;
  margin: 50px auto;
`;

export const FindTitle = styled.h1`
  margin: 20px 48px;
  font-size: 30px;
  line-height: 120%;
  /* or 36px */

  letter-spacing: 0.02em;

  color: #23272A;
`;

export const FindParagraph = styled.p`
  margin: 0 48px 50px;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 32px;
  /* or 200% */

  letter-spacing: 0.04em;
`;
