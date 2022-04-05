import { useRouter } from 'next/router'
import { useState } from 'react'
import { Option } from 'react-dropdown'
import api from '../../../../services/api'
import { PATH_LIST_CLIENTS } from '../../../constants/urls'
import {
  ButtonContainerRegister, ButtonRegister, Container,
  InputAndLabelContainer,
  InputLabelText,
  InputsContainer,
  LargeTextInput,
  PhoneContainer,
  PhoneDropdown,
  PhoneInput, RegisterClientTitleText
} from './styles'

const RegisterClient = () => {
  const options = ['+83', '+84', '+66']
  const defaultOption = options[0]
  const [selectedOption, setSelectedOption] =useState<Option | string>(defaultOption)
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const router = useRouter()


  const handleInput = (setState: any, value: string) => {
    console.log("value")
    console.log(value)
    setState(value)
  }

  const config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
  }}

  const createClient = () => {
    console.log('create client')
    api.post('/client-business', {
      name,
      email,
      phone
    },config).
    then(res => {
      router.push(PATH_LIST_CLIENTS)
    }).catch(err => {
      console.log(err)
    }
    )
  }

  return (
    <Container>
      <RegisterClientTitleText>
        Para cadastrar um cliente, complete os campos a seguir
      </RegisterClientTitleText>
      <InputsContainer>
        <InputAndLabelContainer>
          <InputLabelText >Nome do Cliente:</InputLabelText>
          <LargeTextInput  onChange={e => handleInput(setName, e.target.value)} />
        </InputAndLabelContainer>
        <InputAndLabelContainer >
          <InputLabelText>E-mail do Cliente:</InputLabelText>
          <LargeTextInput onChange={(e) => handleInput(setEmail, e.target.value )}/>
        </InputAndLabelContainer>
        <InputAndLabelContainer>
          <InputLabelText>Telefone para Contato:</InputLabelText>
          <PhoneContainer>
            <PhoneInput  onChange={(e) => handleInput(setPhone, e.target.value)}/>
          </PhoneContainer>
        </InputAndLabelContainer>
      </InputsContainer>
      <ButtonContainerRegister>
        <ButtonRegister onClick={createClient} title="Cadastrar" >Cadastrar</ButtonRegister>
      </ButtonContainerRegister>
    </Container>
  )
}

export default RegisterClient
