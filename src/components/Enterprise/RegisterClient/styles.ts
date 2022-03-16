import styled from 'styled-components'
import Dropdown from 'react-dropdown'

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
`

export const PhoneInput = styled(LargeTextInput)`
  width: 30%;
  margin-left: 1.25rem;
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
