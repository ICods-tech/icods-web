import styled, { css } from 'styled-components'
import Dropdown from 'react-dropdown'

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`

export const TopModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1.5rem;
`

export const TopModalTitleText = styled.h1`
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: var(--text-title);
  width: 90%;
`

export const CloseIcon = styled.img`
  cursor: pointer;
`

export const MidModalContainer = styled.div`
  margin-top: 4rem;
  margin-left: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ClientLabel = styled.h3`
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: var(--text-title);
`

export const ClientDropdown = styled(Dropdown)`
  width: 22rem;
  height: 1.2rem;
  margin-top: -1.2rem;
  margin-left: 0.2rem;
  margin-right: 0.8rem;
  background-color: #FFF
  .Dropdown-control {
    ${ ({disabled} )=> disabled && css`
      background-color: #C7C9CE
    `}
  }
`

export const RegisterClientContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50px;
  padding: 10px;
  background-color: var(--background);
  cursor: pointer;
`

export const RegisterClientText = styled.h3`
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: var(--background);
  margin-left: 0.5rem;
`

export const QRCodeQuantityInput = styled.input.attrs({
  type: 'number',
  max: '1000',
  min: '1',
})`
  margin-left: 0.2rem;

  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 1.875rem;
  text-align: center;
`

export const FooterContainer = styled.div`
  height: 5.625rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  border-top: 0.5px solid rgba(0, 0, 0, 0.17);
  margin-top: auto;
  margin-bottom: 0;
  padding-right: 1.5rem;
  width: 100%;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const GrayLine = styled.div`
  width: 32.6875rem;
  height: 0.0313rem;
  background: rgba(0, 0, 0, 0.17);
`

export const CancelButton = styled.button`
  width: 9rem;
  height: 2.5rem;
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: var(--shape);
  background: #5f6368;
  border-radius: 2px;
  border: 0;
`

export const CreateQRCodesButton = styled(CancelButton)`
  background: var(--background);
  margin-left: 1.125rem;
`

export const ClientInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  text-align: center;
`

export const QuantityInputContainer = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 1.8rem
`