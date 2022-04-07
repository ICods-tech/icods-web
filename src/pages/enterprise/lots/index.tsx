import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext, useMemo, useState } from 'react'
import 'react-dropdown/style.css'
import { useTable } from 'react-table'
import ApiHandler from '../../../../services/apiHandler'
import GlobalStyle from '../../../../styles/globalStyle'
import { HeaderClient } from '../../../components/Enterprise/ClientsSection/Header'
import CreateLotModal from '../../../components/Enterprise/CreateLotModal'
import LeftSection from '../../../components/Enterprise/LeftSection'
import ListTable from '../../../components/Enterprise/ListTable'
import { Functionalities } from '../../../components/Functionalities'
import { AuthContext } from '../../../context/auth'
import { ButtonIconContainer, Container, GrayDivider, RightSectionContainer, TableButton, TableButtonsContainer, TableButtonText } from './syles'

const functionalities = <Functionalities type='functionalitiesLots' />

function clientsColumns() {
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

const EnterpriseLots = ({ lots }) => {
  lots =[
      {
        "id": "bed44368-61c4-4ea1-98dc-6b4ca7648a62",
        "numberOfQRCodes": 9,
        "created_at": "2022-04-05T19:31:25.349Z",
        "updated_at": "2022-04-05T19:31:26.330Z"
      },
      {
        "id": "d20fb8fe-0695-4844-bd4a-8c53ecaf09a1",
        "numberOfQRCodes": 10,
        "created_at": "2022-04-05T20:13:15.388Z",
        "updated_at": "2022-04-05T20:13:15.683Z"
      },
      {
        "id": "2c487259-d496-4c41-a337-294132ee0e03",
        "numberOfQRCodes": 10,
        "created_at": "2022-04-07T03:33:32.701Z",
        "updated_at": "2022-04-07T03:33:33.018Z"
      }
    ]

  // MELHORAR ISSO DEPOIS
  lots = lots.map((lots) => ({ ...lots, functionalities }))
  lots = lots.map((lots) => ({ ...lots, created_at: new Date(lots.created_at).toLocaleDateString() }))
  lots = lots.map((lots) => ({ ...lots, updated_at: new Date(lots.updated_at).toLocaleDateString() }))
  lots = lots.map((lots) => ({ ...lots, id: lots.id.slice(0, 8) }))

  const { getToken } = useContext(AuthContext)
  const api = new ApiHandler(true, getToken())
  const router = useRouter()
  const [createLotModalOpen, setCreateLotModalOpen] = useState(false)
  const columns = clientsColumns()
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: lots,
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
          <HeaderClient pageType='lots' name="Ivonaldo Ivonaldo" position="Design Gráfico" />
          <GrayDivider />
          <TableButtonsContainer>
            <TableButton onClick={() => setCreateLotModalOpen(true)}>
              <ButtonIconContainer src="/images/enterprise/qrcodes.svg" alt="Create QR Codes" />
              <TableButtonText>Criar QR Code</TableButtonText>
            </TableButton>
          </TableButtonsContainer>
          <ListTable
            getTableProps={getTableProps}
            headerGroups={headerGroups}
            getTableBodyProps={getTableBodyProps}
            rows={rows}
            prepareRow={prepareRow}
          />
        </RightSectionContainer>
      </Container>
    </>
  )
}

export default EnterpriseLots

