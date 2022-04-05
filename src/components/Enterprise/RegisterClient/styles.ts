import styled from 'styled-components'
import Dropdown from 'react-dropdown'
import InputMask from 'react-input-mask'

export const Container = styled.div`
  display: flex;
  width: 65%;
  height: 70%;
  flex-direction: column;
  align-self: center;
  align-items: center;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 0.625rem 1.25rem rgba(0, 0, 0, 0.06), 0rem 0.125rem 0.375rem rgba(0, 0, 0, 0.06),
    0px 0px 0.0625rem rgba(0, 0, 0, 0.06);
  border-radius: 1.8125rem;
`

export const RegisterClientTitleText = styled.h2`
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2.0625rem;
  color: var(--text-title);
  margin-top: 2rem;
  align-self: center;
  text-align: center;
`

export const InputsContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  width: 85%;
  align-items: flex-start;
`

export const InputLabelText = styled.h3`
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.375rem;
  color: var(--text-title);
`

export const InputAndLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.5rem;
`

export const LargeTextInput = styled.input`
  margin-top: 0.5rem;
  width: 100%;
  height: 2.5rem;
  padding: 0 1rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(0, 0, 0, 0.25);
  color: var(--text-title);
  // Deixar a borda do input azul quando clicar nele
  &:focus {
    border: 2px solid rgba(43, 144, 217, 0.5);
    outline: none;
    box-shadow: 0 0 1em rgba(43, 144, 217, 0.5);
  }
`

export const PhoneContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const PhoneDropdown = styled(Dropdown).attrs({})`
  margin-top: 0.5rem;
  width: 10%;
`

export const ButtonContainer = styled.div`
  margin-top: auto;
  align-self: center;
  margin-bottom: 1.5rem;
`

export const ButtonContainerRegister = styled.button`
  width: 11.9375rem;
  height: 2.5rem;
  background-color: var(--background);
  border: 0;
  transition: border-radius 0.8s linear;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  margin-top: auto;
  align-self: center;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  &:hover {
    outline: none;
    box-shadow: 0 0 1em rgba(43, 144, 217, 0.5);
  }
`

export const ButtonRegister = styled.h3`
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  color: #fff;
  line-height: 1.5rem;
  color: var(--shape);
  margin-left: 0.25rem;
`

export const PhoneInput = styled(InputMask)`
  margin-top: 0.5rem;
  width: 40%;
  height: 2.5rem;
  padding: 0 1rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(0, 0, 0, 0.25);
  color: var(--text-title);
  // Deixar a borda do input azul quando clicar nele
  &:focus {
    border: 2px solid rgba(43, 144, 217, 0.5);
    outline: none;
    box-shadow: 0 0 1em rgba(43, 144, 217, 0.5);
  }
`
