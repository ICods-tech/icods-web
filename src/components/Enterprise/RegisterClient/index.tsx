import { useRouter } from 'next/router'
import { Dispatch, useCallback, useState, SetStateAction } from 'react'
import { Option } from 'react-dropdown'
import api from '../../../../services/api'
import { PATH_LIST_CLIENTS } from '../../../constants/urls'
import { useForm, Controller } from 'react-hook-form'
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
  const options = ['+83', '+84', '+66']
  const defaultOption = options[0]
  const { register, handleSubmit, control } = useForm()
  const [selectedOption, setSelectedOption] = useState<Option | string>(defaultOption)
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const router = useRouter()

  const handleInput = (setState: Dispatch<SetStateAction<string>>, value: string) => {
    setState(value)
  }

  const config = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  }

  const handleCreateClient = useCallback(async () => {
    console.log('create client')
    try {
      await api.post(
        '/client-business',
        {
          name,
          email,
          phone,
        },
        config
      )

      router.push(PATH_LIST_CLIENTS)
    } catch (error) {
      console.log(error)
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
          <InputLabelText>Telefone para Contato:</InputLabelText>
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
