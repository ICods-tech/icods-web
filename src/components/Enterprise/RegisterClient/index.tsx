import React, { useState } from 'react'
import { Option } from 'react-dropdown'
import { Button } from '../Button'
import {
  Container,
  InputAndLabelContainer,
  InputLabelText,
  InputsContainer,
  LargeTextInput,
  PhoneContainer,
  PhoneDropdown,
  PhoneInput,
  ButtonContainer,
  RegisterClientTitleText,
} from './styles'

const RegisterClient = () => {
  const options = ['+83', '+84', '+66']
  const defaultOption = options[0]
  const [selectedOption, setSelectedOption] = useState<Option | string>(defaultOption)

  return (
    <Container>
      <RegisterClientTitleText>
        Para cadastrar um cliente, complete os campos a seguir
      </RegisterClientTitleText>
      <InputsContainer>
        <InputAndLabelContainer>
          <InputLabelText>Nome do Cliente:</InputLabelText>
          <LargeTextInput />
        </InputAndLabelContainer>
        <InputAndLabelContainer>
          <InputLabelText>E-mail do Cliente:</InputLabelText>
          <LargeTextInput />
        </InputAndLabelContainer>
        <InputAndLabelContainer>
          <InputLabelText>Telefone para Contato:</InputLabelText>
          <PhoneContainer>
            <PhoneDropdown
              options={options}
              onChange={(option: Option) => setSelectedOption(option)}
              value={defaultOption}
              placeholder="Select an option"
            />
            <PhoneInput />
          </PhoneContainer>
        </InputAndLabelContainer>
      </InputsContainer>
      <ButtonContainer>
        <Button pressed={() => {}} title="Cadastrar" />
      </ButtonContainer>
    </Container>
  )
}

export default RegisterClient
