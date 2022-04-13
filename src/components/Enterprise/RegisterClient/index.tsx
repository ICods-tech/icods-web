import { useRouter } from 'next/router'
import { Dispatch, useCallback, useState, SetStateAction, useContext } from 'react'
import { headerConfig } from '../../../../config/headerConfig'
import api from '../../../../services/api'
import { displayToast } from '../../../../utils/displayToast'
import { PATH_LIST_CLIENTS } from '../../../constants/urls'
import { AuthContext } from '../../../context/auth'
import {
  ButtonContainerRegister,
  ButtonRegister,
  Container,
  InputAndLabelContainer,
  InputLabelText,
  InputsContainer,
  LargeTextInput,
  PhoneContainer,
  PhoneDropdown,
  PhoneInput,
  RegisterClientTitleText,
} from './styles'

const RegisterClient = () => {
  const { getToken } = useContext(AuthContext)
  const options = ['+83', '+84', '+66']
  const defaultOption = options[0]
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const router = useRouter()

  const handleInput = (setState: any, value: string) => {
    setState(value)
  }

  const handleCreateClient = useCallback(async () => {
    
    try {
      await api.post(
        '/client-business',
        {
          name,
          email,
          phone,
        },
        headerConfig(getToken())
      )

      displayToast('Cliente criado com sucesso!', 'success')
      router.push(PATH_LIST_CLIENTS)
    } catch (error) {
      const { errors } = error.response.data
      errors.map(({ msg }: any) => {
        displayToast(msg, 'error')
      })
    }
  }, [])

  return (
    <Container>
      <RegisterClientTitleText>
        Para cadastrar um cliente, complete os campos a seguir
      </RegisterClientTitleText>
      <InputsContainer>
        <InputAndLabelContainer>
          <InputLabelText>Nome do Cliente:</InputLabelText>
          <LargeTextInput onChange={(e) => handleInput(setName, e.target.value)} />
        </InputAndLabelContainer>
        <InputAndLabelContainer>
          <InputLabelText>E-mail do Cliente:</InputLabelText>
          <LargeTextInput onChange={(e) => handleInput(setEmail, e.target.value)} />
        </InputAndLabelContainer>
        <InputAndLabelContainer>
          <InputLabelText>Telefone:</InputLabelText>
          <PhoneContainer>
            <PhoneInput
              mask="(99) 99999-9999"
              alwaysShowMask={false}
              onChange={(e) => handleInput(setPhone, e.target.value)}
            />
          </PhoneContainer>
        </InputAndLabelContainer>
      </InputsContainer>
      <ButtonContainerRegister onClick={async () => handleCreateClient()}>
        <ButtonRegister>Cadastrar</ButtonRegister>
      </ButtonContainerRegister>
    </Container>
  )
}

export default RegisterClient
