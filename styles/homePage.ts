import styled, {keyframes} from 'styled-components';

export const HomePage = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

export const InitSection = styled.section`
  background: #2B90D9;

  width: 100vw;
  /* height: 100vh; */
  height:  100%;

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
`;

const animClouds = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(200%);
  }
`

export const Clouds = styled.img`
  position: absolute;
  z-index: 1;

  width: 950px;

  left: -950px; 
  animation: 20s ${animClouds} linear infinite;

`;

export const ContainerText = styled.div`
  position: relative;

  width: 100%;
  height: 600px;
  padding: 13% 5%;

  color: #fff;
  font-style: normal;
`;

export const ContainerTextTitle = styled.h1`
  position: relative;
  font-size: 30px;
  margin: 0;
  margin-right: auto;
  
  z-index: 2;

  min-width: 260px;
  width: 60%;
`;

export const ContainerTextParagraph = styled.p`
  margin-top: 48px;
  font-size: 12px;

  z-index: 2;

  width: 60%;
  min-width: 261px;
`;

export const Sapiens01 = styled.img`
  /* position: absolute; */
  left: 0;
  bottom: 0;
  width: 100%;
`
