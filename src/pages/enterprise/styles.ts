import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: var(--shape);
`

export const EnterpriseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 256px;
`

export const GenerateQRCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  height: 180px;
`

export const GenerateQRCodeTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 24px;
`

export const EnterpriseInput = styled.input`
  height: 40px;
  border-radius: 12px;
  border: 2px solid black;
  padding-left: 10px;
  padding-right: 10px;
  outline-width: 0;
`

export const EnterpriseTitle = styled.h1`
  color: white;
`

export const EnterpriseButton = styled.button`
  height: 40px;
  width: 180px;
  border-radius: 12px;
  align-self: center;
  background: #2761a9;
  border: 2px solid black;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`

export const LeftWaveContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 4rem;
`

export const ICodsEnterpriseLogoLarge = styled.img`
  height: 15rem;
  width: 15rem;
`

export const ICodsDescriptionText = styled.h3`
  margin-top: 1rem;
  font-family: Manrope;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 2.125rem;
  color: var(--shape);
`

export const LeftWave = styled.img`
  position: absolute;
  height: 80vh;
  overflow-x: hidden;
  z-index: -1;
`;

export const LogoAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 6rem;
`