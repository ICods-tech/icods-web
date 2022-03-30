import React, { useState, useCallback } from 'react'
import Head from 'next/head'
import { getDropdownOptions } from '../../../../utils/getDropdownOptions'
import {
  LeftWaveContainer,
  ICodsEnterpriseLogoLarge,
  LeftWave,
  ICodsDescriptionText,
  LogoAndDescriptionContainer,
  ContentContainer,
  LoginSectionContainer,
  HeaderLoginText,
  BoldHeaderLoginText,
  HeaderLoginContainer,
  LabelLoginText,
  InputLoginText,
  CheckboxRememberMe,
  EnterButtonContainer,
  ContactUsText,
  LoginInformationContainer,
  ContactUsHighlightedText,
  ContactUsContainer,
} from './styles'
import 'react-dropdown/style.css'
import api from '../../../../services/api'
import GlobalStyle from '../../../../styles/globalStyle'
import { Header } from '../../../components/Enterprise/Header'
import { Button } from '../../../components/Enterprise/Button'

const options = getDropdownOptions()
const defaultOption = options[0]

const EnterpriseLogin = () => {
  const [email, setEmail] = useState<string>('contato@google.com')
  const [password, setPassword] = useState<string>('123456')
  const [numberOfQrCodes, setNumberOfQrCodes] = useState<number>(1)
  const [authenticated, setAuthenticated] = useState<boolean>(false)

  const handleEnterpriseLogin = useCallback(async () => {
    try {
      const response = await api.post('signin-business', {
        email,
        password,
      })

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }, [email, password])

  const handleGenerateQRCodes = useCallback(async () => {
    try {
      api
        .post(
          'generate_deactivated_qrcode',
          {
            numberOfQrCodes,
          },
          { responseType: 'blob' }
        )
        .then((response) => {
          console.log(`response: `, { ...response })
          const pdfFile = new Blob([response.data], { type: 'application/pdf' })
          const fileURL = URL.createObjectURL(pdfFile)
          window.open(fileURL)
        })
    } catch (error) {
      console.log(error)
    }
  }, [numberOfQrCodes])

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Empresarial | ICods</title>
      </Head>
      <Header />
      <LeftWave src="/images/enterprise/wave-left.svg" alt="Wave left" />
      <ContentContainer>
        <LeftWaveContainer>
          <LogoAndDescriptionContainer>
            <ICodsEnterpriseLogoLarge
              src="/images/enterprise/icods-logo.svg"
              alt="iCods Enterprise Logo"
            />
            <ICodsDescriptionText>Um novo jeito de compartilhar emoções</ICodsDescriptionText>
          </LogoAndDescriptionContainer>
        </LeftWaveContainer>
        <LoginSectionContainer>
          <LoginInformationContainer>
            <HeaderLoginContainer>
              <HeaderLoginText>
                Login para <BoldHeaderLoginText>Empresas</BoldHeaderLoginText>
              </HeaderLoginText>
            </HeaderLoginContainer>
            <LabelLoginText>E-mail</LabelLoginText>
            <InputLoginText
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail empresarial da iCods"
            />
            <LabelLoginText>Senha</LabelLoginText>
            <InputLoginText
              type={'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
            />
            <CheckboxRememberMe>Lembrar-me</CheckboxRememberMe>
            <EnterButtonContainer>
              <Button pressed={async () => await handleEnterpriseLogin()} title="Entrar" />
            </EnterButtonContainer>
            <ContactUsContainer>
              <ContactUsText>Algum problema?</ContactUsText>
              <ContactUsHighlightedText>Contate-nos</ContactUsHighlightedText>
            </ContactUsContainer>
          </LoginInformationContainer>
        </LoginSectionContainer>
      </ContentContainer>
    </>
  )
}

export default EnterpriseLogin

