import styled from 'styled-components'
import Dropdown, { Option } from 'react-dropdown'

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  margin-top: 1rem;
  width: 17.5rem;
`

export const RegisterClientContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
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
  margin-top: 0.5rem;
  display: flex;
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
  width: 9.5rem;
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
