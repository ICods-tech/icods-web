import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Option } from 'react-dropdown'
import 'react-dropdown/style.css'
import { AddUser } from 'react-iconly'
import Modal from 'react-modal'
import api from '../../../../services/api'
import {
  ButtonsContainer, CancelButton, ClientDropdown,
  ClientLabel,
  CloseIcon, Container, CreateQRCodesButton, FooterContainer, MidModalContainer,
  QRCodeQuantityInput,
  RegisterClientContainer,
  RegisterClientText,
  TopModalContainer,
  TopModalTitleText
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
    const router = useRouter();
    const [clients, setClients] = useState<Option[]>([])
    const config = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }}
    useEffect(() => {
      const fetchClients = async () => {
        const { data } = await api.get('/client-business', config)
        const listNameClients = data.map((client) => {
          return {
            value: client.id,
            label:client.name
          }
        })
        setClients(listNameClients)
      }
      fetchClients()
    }, [])

    const [defaultOption, setDefaultOption] = useState<Option>();
    const [selectedOption, setSelectedOption] = useState<Option>(defaultOption)
    const [numberOfQrCodes, setNumberOfQrCodes ] = useState(1)

    const createQRCodes = async () => {
      console.log(selectedOption);
      
      const { data } = await api.post('/business/generate_deactivated_qrcode', {
        clientId: selectedOption.value,
        numberOfQrCodes: numberOfQrCodes,
      }, config)
      closeModal()
    }


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
            options={clients}
            onChange={(option: Option) => setSelectedOption(option)}
            value={defaultOption}
            placeholder={clients.length === 0 ? "Nenhum cliente cadastrado" : "Selecione um cliente"}
            disabled={clients.length === 0}
          />
          <RegisterClientContainer onClick={ ()=> router.push('clients/create')}>
            <AddUser set="light" size={14} primaryColor="var(--background)" />
            <RegisterClientText>Cadastre um cliente aqui</RegisterClientText>
          </RegisterClientContainer>
          <ClientLabel>Quantidade de QR Codes:</ClientLabel>
          <QRCodeQuantityInput
            value={numberOfQrCodes}
            onChange={
              (e) => {setNumberOfQrCodes(Number(e.target.value))}
            }
          />
        </MidModalContainer>
        <FooterContainer>
          <ButtonsContainer>
            <CancelButton onClick={closeModal}>Cancelar</CancelButton>
            <CreateQRCodesButton onClick={createQRCodes}>Criar</CreateQRCodesButton>
          </ButtonsContainer>
        </FooterContainer>
      </Container>
    </Modal>
  )
}

export default CreateLotModal
