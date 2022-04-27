import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { Option } from 'react-dropdown'
import 'react-dropdown/style.css'
import { AddUser } from 'react-iconly'
import Modal from 'react-modal'
import ApiHandler from '../../../../services/apiHandler'
import { displayToast } from '../../../../utils/displayToast'
import { BUSINESS_PATH } from '../../../constants/urls'
import { AuthContext } from '../../../context/auth'
import {
  ButtonsContainer,
  CancelButton,
  ClientDropdown, ClientInputContainer, ClientLabel,
  CloseIcon,
  Container,
  CreateQRCodesButton,
  FooterContainer,
  MidModalContainer,
  QRCodeQuantityInput, QuantityInputContainer, RegisterClientContainer, TopModalContainer,
  TopModalTitleText
} from './styles'

const CreateLotModal = ({ createLotModalOpen, closeModal }) => {
  const { getToken } = useContext(AuthContext)
  const customStyles = {
    content: {
      width: '32.6875rem',
      height: '30rem',
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
  const router = useRouter()
  const [clients, setClients] = useState<Option[]>([])
  const api = new ApiHandler(true, getToken())
  
  const fetchClients = async () => {
    const { data } = await api.get(`${BUSINESS_PATH}/clients`)
    
    if(data.length === 1) {
      const { id:value, name:label} = data[0]
      setDefaultOption({
        value,
        label
      })
      setSelectedOption({ label, value})
      return;
    }

    const listNameClients = data.map((client) => {
      return {
        value: client.id,
        label: client.name,
      }
    }
    )
    
    setClients(listNameClients)
  }
  
  useEffect(() => {
    const { id,name } = router.query;
    if (id) {
      setDefaultOption({
        value: String(id),
        label: String(name),
      })
      setSelectedOption({ label: String(name), value: String(id) })
    } else {
      fetchClients()
    }
  }, [])

  const [defaultOption, setDefaultOption] = useState<Option>()
  const [selectedOption, setSelectedOption] = useState<Option>(defaultOption)
  const [numberOfQrCodes, setNumberOfQrCodes] = useState(1)

  const createQRCodes = async () => {
    try {
      await api.post(
        `${BUSINESS_PATH}/generate_deactivated_qrcode`,
        {
          clientId: selectedOption.value,
          numberOfQrCodes: numberOfQrCodes,
        }
      )
      displayToast('QR Codes criados com sucesso!', 'success')
      closeModal(true)
    } catch (error) {
      displayToast('Erro ao criar QR Codes', 'error')
      console.log(error)
    }
      
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
          <ClientInputContainer>
            <ClientLabel>Cliente:</ClientLabel>
            <ClientDropdown
              options={clients}
              onChange={(option: Option) => setSelectedOption(option)}
              value={defaultOption}
              placeholder={
                clients.length === 0 ? 'Nenhum cliente cadastrado' : 'Selecione um cliente'
              }
              disabled={clients.length === 0}
              />
            <RegisterClientContainer onClick={() => router.push('clients/create')}>
              <AddUser set="light" size={14} primaryColor="#FFF" />
              {/* <RegisterClientText>Cadastre um cliente aqui</RegisterClientText> */}
            </RegisterClientContainer>
          </ClientInputContainer>
          <QuantityInputContainer>
            <ClientLabel>Quantidade de QR Codes:</ClientLabel>
            <QRCodeQuantityInput
              value={numberOfQrCodes}
              onChange={(e) => {
                setNumberOfQrCodes(Number(e.target.value))
              }}
              />
            </QuantityInputContainer>
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
