import { getProviders } from "next-auth/react"
import Head from 'next/head'
import { useRouter } from "next/router"
import { useCallback, useContext, useState } from 'react'
import 'react-dropdown/style.css'
import GlobalStyle from '../../../../styles/globalStyle'
import { getDropdownOptions } from '../../../../utils/getDropdownOptions'
import { Button } from '../../../components/Enterprise/Button'
import { Header } from '../../../components/Enterprise/Header'
import { PATH_LIST_CLIENTS } from "../../../constants/urls"
import { AuthContext } from '../../../context/auth'
import {
  BoldHeaderLoginText, CheckboxRememberMe, ContactUsContainer, ContactUsHighlightedText, ContactUsText, ContentContainer, EnterButtonContainer, HeaderLoginContainer, HeaderLoginText, ICodsDescriptionText, ICodsEnterpriseLogoLarge, InputLoginText, LabelLoginText, LeftWave, LeftWaveContainer, LoginInformationContainer, LoginSectionContainer, LogoAndDescriptionContainer
} from './styles'

const options = getDropdownOptions()
const defaultOption = options[0]

const EnterpriseLogin = () => {
  const { businessSignIn, authState } = useContext(AuthContext)
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const handleEnterpriseLogin = useCallback(async () => {
    try {
      await businessSignIn({ email, password })
      router.push(PATH_LIST_CLIENTS)
    } catch (error) {
      console.log(error)
    }
  }, [email, password, authState])



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

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}


export default EnterpriseLogin

