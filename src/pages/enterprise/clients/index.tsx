import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext, useEffect, useMemo, useState } from 'react'
import 'react-dropdown/style.css'
import ApiHandler from '../../../../services/apiHandler'
import GlobalStyle from '../../../../styles/globalStyle'
import formatDateToTable from '../../../../utils/formatDate'
import { HeaderClient } from '../../../components/Enterprise/ClientsSection/Header'
import CreateLotModal from '../../../components/Enterprise/CreateLotModal'
import LeftSection from '../../../components/Enterprise/LeftSection'
import ListTable from '../../../components/Enterprise/ListTable'
import { BUSINESS_PATH } from '../../../constants/urls'
import { AuthContext } from '../../../context/auth'
import {
  ButtonIconContainer,
  Container,
  GrayDivider,
  RightSectionContainer,
  TableButton,
  TableButtonsContainer,
  TableButtonText
} from './styles'

function clientsColumns() {

  const columns = useMemo(
    () => [
      {
        Header: 'Cliente',
        accessor: 'name',
      },
      {
        Header: 'E-mail',
        accessor: 'email',
      },
      {
        Header: 'Telefone',
        accessor: 'phone',
      },
      {
        Header: 'Última modificação',
        accessor: 'updated_at',
      },
      {
        Header: 'Funcionalidades',
        accessor: 'functionalities',
      },
    ],
    []
  )

  return columns
}

const EnterpriseClients = () => {
  const { validatorToken, getToken } = useContext(AuthContext)
  const router = useRouter()
  const api = new ApiHandler(true, getToken())
  const [createLotModalOpen, setCreateLotModalOpen] = useState(false)
  const [clients, setClients] = useState([])
  const columns = clientsColumns()
 
  const getClients = async () => {
    const { data } = await api.get(`${BUSINESS_PATH}/clients`)
    return data.map((client) => ({ ...client, updated_at: formatDateToTable(client.updated_at) }))
  }

  useEffect(() => {
    validatorToken(router)
    getClients()
      .then((response) => setClients(response))
      .catch((err) => console.error(err))
  }, [validatorToken])

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Empresarial | iCods</title>
      </Head>
      <Container>
        <LeftSection />
        <CreateLotModal
          createLotModalOpen={createLotModalOpen}
          closeModal={() => setCreateLotModalOpen(false)}
        />
        <RightSectionContainer>
          <HeaderClient pageType="home" name="iCods Tech" />
          <GrayDivider />
          <TableButtonsContainer>
            <TableButton onClick={() => setCreateLotModalOpen(true)}>
              <ButtonIconContainer src="/images/enterprise/qrcodes.svg" alt="Create QR Codes" />
              <TableButtonText>Criar QR Codes</TableButtonText>
            </TableButton>
            <TableButton onClick={() => router.push('clients/create')}>
              <ButtonIconContainer src="/images/enterprise/add-client.svg" alt="Add Client" />
              <TableButtonText>Cadastrar cliente</TableButtonText>
            </TableButton>
          </TableButtonsContainer>
          <ListTable
            columns={columns}
            data={clients}
            type={'clients'}
          />
        </RightSectionContainer>
      </Container>
    </>
  )
}

export default EnterpriseClients
