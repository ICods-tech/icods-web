import styled, {keyframes} from 'styled-components';

export const HomePage = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const InitSection = styled.section`
  background: #2B90D9;

  width: 100vw;
  /* height: 100vh; */
  height:  1800px;

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

  width: 90%;
  height: 100px;
  
  margin: 0 auto;
`;

export const LogoImage = styled.img`
  margin-left: 8px;
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
  /* background: #000; */

  width: 90%;
  margin: 0 auto;
  height: 1000px;

  display: flex;
  flex-direction: column;
  /* align-items: center; */

  color: #fff;
  font-style: normal;
`;

export const ContainerTextTitle = styled.h1`

  position: relative;
  font-size: 38px;
  margin: 48px 16px 0;

  z-index: 2;

  min-width: 220px;
  width: 60%;
`;

export const ContainerTextParagraph = styled.p`
  /* text-align: justify; */
  margin: 48px 16px;
  font-size: 20px;

  z-index: 2;

  width: 60%;
  min-width: 261px;
`;

export const Sapiens01 = styled.img`
  /* position: absolute; */
  /* width:  */
  left: 0;
  bottom: -100;
  width: 100%;
`
