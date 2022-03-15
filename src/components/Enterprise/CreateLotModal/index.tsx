import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import { TopModalContainer, TopModalTitleText } from './styles'

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
    },
  }

  return (
    <Modal
      isOpen={createLotModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <TopModalContainer>
        <TopModalTitleText>Criação de QR Codes</TopModalTitleText>
      </TopModalContainer>
    </Modal>
  )
}

export default CreateLotModal
