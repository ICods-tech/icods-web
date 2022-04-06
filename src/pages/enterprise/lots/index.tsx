import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext, useEffect, useMemo, useState } from 'react'
import 'react-dropdown/style.css'
import { useTable } from 'react-table'
import ApiHandler from '../../../../services/apiHandler'
import GlobalStyle from '../../../../styles/globalStyle'
import { HeaderClient } from '../../../components/Enterprise/ClientsSection/Header'
import CreateLotModal from '../../../components/Enterprise/CreateLotModal'
import LeftSection from '../../../components/Enterprise/LeftSection'
import { Functionalities } from '../../../components/Functionalities'
import ListTable from '../../../components/Enterprise/ListTable'
import { AuthContext } from '../../../context/auth'
import {
  ButtonIconContainer,
  Container,
  GrayDivider,
  RightSectionContainer,
  TableButton,
  TableButtonsContainer,
  TableButtonText,
} from './styles'

const functionalities = <Functionalities />

function clientsColumns() {
  const columns = useMemo(
    () => [
      {
        Header: 'Codigo do Lote',
        accessor: 'id',
      },
      {
        Header: 'Qauntidade QR Codes',
        accessor: 'numberOfQRCodes',
      },
      {
        Header: 'Data de criacão',
        accessor: 'create_at',
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
          <HeaderClient name="Ivonaldo Ivonaldo" position="Design Gráfico" />
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

