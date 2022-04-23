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

  const { getToken } = useContext(AuthContext)
  const router = useRouter()
  const [lotsState, setLotsState] = useState([])
  const [createdQRCodes, setCreatedQRCodes] = useState(false)
  const [createLotModalOpen, setCreateLotModalOpen] = useState(false)
  
  const api = new ApiHandler(true, getToken())
  const columns = lotsColumns()
  const { id, name } = router.query

  const getLots = async () => {
    try {
      const { data } = await api.get(`${BUSINESS_PATH}/clients/${id}/lots`)
      const filteredResponse = data.map((lotResponse) => {
        return {
          ...lotResponse,
          created_at: formatDateToTable(lotResponse.created_at),
          updated_at: formatDateToTable(lotResponse.updated_at),
        }
      })
  
      setLotsState(filteredResponse)
      setCreatedQRCodes(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getLots();
  },[createdQRCodes])

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
          closeModal={(created) => {
            setCreateLotModalOpen(false)
            setCreatedQRCodes(created)
          }}
        />
        <RightSectionContainer>
          <HeaderClient pageType="lots" name="iCods Tech" client={String(name)} />
          <GrayDivider />
          <TableButtonsContainer>
            <TableButton onClick={() => setCreateLotModalOpen(true)}>
              <ButtonIconContainer src="/images/enterprise/qrcodes.svg" alt="Create QR Codes" />
              <TableButtonText>Criar QR Code</TableButtonText>
            </TableButton>
          </TableButtonsContainer>
          <ListTable setData={setLotsState} columns={columns} data={lotsState} type={'lots'} />
        </RightSectionContainer>
      </Container>
    </>
  )
}

export default EnterpriseLots
