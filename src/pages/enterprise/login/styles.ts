import styled from 'styled-components'
import { Checkbox } from 'pretty-checkbox-react'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`

export const EnterpriseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 256px;
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
  font-size: 1.1rem;
  line-height: 2.125rem;
  color: var(--shape);
`

export const LeftWave = styled.img`
  position: absolute;
  height: 80vh;
  overflow-x: hidden;
  z-index: -1;
`

export const LogoAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 6rem;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const LoginSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 2rem;
  width: 50vw;
  margin-left: auto;
`

export const HeaderLoginText = styled.h1`
  display: flex;
  flex-direction: row;
  font-weight: normal;
  font-family: Manrope;
  font-size: 2.625rem;
  line-height: 3.563rem;
  color: var(--text-title);
`

export const BoldHeaderLoginText = styled.span`
  font-weight: 700;
  margin-left: 0.5rem;
`

export const HeaderLoginContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const LabelLoginText = styled.h3`
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: var(--text-title);
  align-self: flex-start;
  margin-top: 3rem;
  margin-bottom: 2rem;
`

export const InputLoginText = styled.input`
  width: 34.375rem;
  height: 2.5rem;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  font-size: 1.25rem;
  color: var(--text-title);
  border-bottom: 2px solid var(--text-title);
  padding-bottom: 0.2rem;
  outline: none;

  ::placeholder,
  ::-webkit-input-placeholder {
    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: 1.25rem;
    line-height: 33px;
    color: rgba(0, 0, 0, 0.3);
  }
  :-ms-input-placeholder {
    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: 1.25rem;
    line-height: 33px;
    color: rgba(0, 0, 0, 0.3);
  }
`

export const PasswordInputContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const CheckboxRememberMe = styled(Checkbox).attrs({
  animation: 'pulse',
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 7rem;
  font-family: 'Manrope';
  font-size: 16;
  margin-top: 2rem;
  margin-bottom: 1rem;
  align-self: flex-start;
`

export const LoginInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 34.375rem;
`

export const EnterButtonContainer = styled.div`
  display: flex;
  align-self: center;
`

export const ContactUsContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  align-self: center;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ContactUsText = styled.h3`
  font-family: Manrope;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  color: var(--text-title);
`

export const ContactUsHighlightedText = styled(ContactUsText)`
  color: var(--background);
  text-decoration: underline;
  margin-left: 0.25rem;
`

