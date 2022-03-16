import React, { useState } from 'react'
import Modal from 'react-modal'
import { Option } from 'react-dropdown'
import 'react-dropdown/style.css'
import { AddUser } from 'react-iconly'
import {
  Container,
  ClientDropdown,
  ClientLabel,
  CloseIcon,
  MidModalContainer,
  QRCodeQuantityInput,
  RegisterClientContainer,
  RegisterClientText,
  TopModalContainer,
  TopModalTitleText,
  GrayLine,
  ButtonsContainer,
  FooterContainer,
  CancelButton,
  CreateQRCodesButton,
} from './styles'

const CreateLotModal = ({ createLotModalOpen, closeModal }) => {
  const customStyles = {
    content: {
      width: '32.6875rem',
      height: '33.75rem',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderWidth: 1,
      padding: 0,
    },
  }
  const MIN_VALUE = 1,
    MAX_VALUE = 1000
  const options = ['one', 'two', 'three']
  const defaultOption = options[0]
  const [selectedOption, setSelectedOption] = useState<Option | string>(defaultOption)

  return (
    <Modal
      isOpen={createLotModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Container>
        <TopModalContainer>
          <TopModalTitleText>Criação de QR Codes</TopModalTitleText>
          <CloseIcon
            onClick={closeModal}
            src="/images/enterprise/close-icon.svg"
            alt="Close icon"
          />
        </TopModalContainer>
        <MidModalContainer>
          <ClientLabel>Cliente:</ClientLabel>
          <ClientDropdown
            options={options}
            onChange={(option: Option) => setSelectedOption(option)}
            value={defaultOption}
            placeholder="Select an option"
          />
          <RegisterClientContainer>
            <AddUser set="light" size={14} primaryColor="var(--background)" />
            <RegisterClientText>Cadastre um cliente aqui</RegisterClientText>
          </RegisterClientContainer>
          <ClientLabel>Quantidade de QR Codes:</ClientLabel>
          <QRCodeQuantityInput
            onChange={
              (e) => {}
              // Ajustar boundaries
            }
          />
        </MidModalContainer>
        <FooterContainer>
          <ButtonsContainer>
            <CancelButton onClick={closeModal}>Cancelar</CancelButton>
            <CreateQRCodesButton>Criar QR Codes</CreateQRCodesButton>
          </ButtonsContainer>
        </FooterContainer>
      </Container>
    </Modal>
  )
}

export default CreateLotModal
