import React, { useState, useCallback } from 'react';
import { getDropdownOptions } from '../../utils/getDropdownOptions'
import { 
  Container, 
  EnterpriseInput,
  EnterpriseTitle, 
  EnterpriseButton,
  GenerateQRCodeTitle,
  EnterpriseContainer,
  GenerateQRCodeContainer,
} from './styles'
import api from '../../services/api'
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown';
import GlobalStyle from '../../styles/globalStyle'
import axios from 'axios';

const options = getDropdownOptions()
const defaultOption = options[0]

const EnterprisePage = () => {
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [numberOfQrCodes, setNumberOfQrCodes] = useState<number>(1)
  const [authenticated, setAuthenticated] = useState<boolean>(false)


  const handleEnterpriseLogin = useCallback(() => {
    console.log("batatas")
    if (login === process.env.ENTERPRISE_LOGIN
      && password === process.env.ENTERPRISE_PASSWORD) {
      console.log('Authenticated')
      setAuthenticated(true)
    }
  }, [login, password])
  
  const handleGenerateQRCodes = useCallback(async () => {
    try {
      api.post('generate_deactivated_qrcode', {
        numberOfQrCodes
      }, { responseType: 'blob' }).then(response => {
        console.log(`response: `, {...response})
        const pdfFile = new Blob([response.data], { type: 'application/pdf' })
        const fileURL = URL.createObjectURL(pdfFile)
        console.log({ fileURL })
        window.open(fileURL)
      })
    } catch (error) {
      console.log(error)
    }
   }, [])

  return (
    <>
      <GlobalStyle />
      <Container>
      {
        authenticated
          ? (
              <GenerateQRCodeContainer>
                <GenerateQRCodeTitle>Quantos QR Codes desativados você quer gerar? ⚡️</GenerateQRCodeTitle>
                <Dropdown
                  className="dropdown"
                  options={options}
                  onChange={(e) => setNumberOfQrCodes(Number(e.value))}
                  value={defaultOption}
                  placeholder={"Selecione a quantidade de QR Codes"}
                />
                <EnterpriseButton onClick={() => handleGenerateQRCodes()}>Gerar</EnterpriseButton>
             </GenerateQRCodeContainer>
            )
          : (
            <EnterpriseContainer>
              <EnterpriseTitle>ICods Empresas 🖥</EnterpriseTitle>
              <EnterpriseInput placeholder="Login" value={login} onChange={(e) => setLogin(e.target.value)}/>
              <EnterpriseInput placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              <EnterpriseButton onClick={() => handleEnterpriseLogin()}>
                Entrar
              </EnterpriseButton>
            </EnterpriseContainer>
          )
      }
        
      </Container>
    </>
  );
};

export default EnterprisePage;
