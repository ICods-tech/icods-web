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
import { AuthContext } from '../../../context/auth'
import {
  ButtonIconContainer,
  Container,
  GrayDivider,
  RightSectionContainer,
  TableButton,
  TableButtonsContainer,
  TableButtonText
} from './syles'

function lotsColumns() {
  const columns = useMemo(
    () => [
      {
        Header: 'Código do Lote',
        accessor: 'id',
      },
      {
        Header: 'Quantidade QR Codes',
        accessor: 'numberOfQRCodes',
      },
      {
        Header: 'Data de criação',
        accessor: 'created_at',
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

const EnterpriseLots = () => {

  const [lotsState, setLotsState] = useState([])

  const { getToken } = useContext(AuthContext)
  const api = new ApiHandler(true, getToken())
  const router = useRouter()
  const [createLotModalOpen, setCreateLotModalOpen] = useState(false)
  const columns = lotsColumns()

  useEffect(() => {
    const { id } = router.query
    api
      .get(`/client-business-lots/${id}`)
      .then((response) => {
        const filteredResponse = response.data.map((lotResponse) => {
          return {
            ...lotResponse,
            id: lotResponse.id.slice(0, 8),
            created_at: formatDateToTable(lotResponse.created_at),
            updated_at: formatDateToTable(lotResponse.updated_at),
          }
        })

        setLotsState(filteredResponse)
      })
      .catch((error) => {
        console.log('error', error)
      })
  })

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
          <HeaderClient pageType="lots" name="Ivonaldo Ivonaldo" position="Design Gráfico" />
          <GrayDivider />
          <TableButtonsContainer>
            <TableButton onClick={() => setCreateLotModalOpen(true)}>
              <ButtonIconContainer src="/images/enterprise/qrcodes.svg" alt="Create QR Codes" />
              <TableButtonText>Criar QR Code</TableButtonText>
            </TableButton>
          </TableButtonsContainer>
          <ListTable columns={columns} data={lotsState} type={'lots'} />
        </RightSectionContainer>
      </Container>
    </>
  )
}

export default EnterpriseLots
