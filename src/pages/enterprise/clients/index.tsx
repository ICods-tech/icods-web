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
import { AuthContext } from '../../../context/auth'
import {
  ButtonIconContainer,
  Container,
  GrayDivider,
  RightSectionContainer,
  TableBodyContainer,
  TableBodyInnerContainer,
  TableBodyInnerContainerText,
  TableButton,
  TableButtonsContainer,
  TableButtonText,
  TableContainer,
  TableHeaderContainer,
  TableHeaderOuterContainer,
  TableHeaderText
} from './styles'

const functionalities = <Functionalities />

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
  const {redirect, getToken} = useContext(AuthContext)
  const api = new ApiHandler(true, getToken())
  const router = useRouter()
  const [createLotModalOpen, setCreateLotModalOpen] = useState(false)
  const [clients, setClients] = useState([])
  const columns = clientsColumns()
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: clients,
  })

  const getClients = async () => {
    const { data } = await api.get('client-business')
    return data.map(client => ({ ...client, functionalities }));
  }        

  useEffect(() => {
    redirect(router);
    getClients()
      .then(response => setClients(response))
      .catch(err => console.error(err))
    
  }, [redirect])


  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Empresarial | ICods</title>
      </Head>
      <Container>
        <LeftSection />
        <CreateLotModal
          createLotModalOpen={createLotModalOpen}
          closeModal={() => setCreateLotModalOpen(false)}
        />
        <RightSectionContainer>
          <HeaderClient name="  Mucas Loreira" position="Gerente" />
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
          <TableContainer {...getTableProps()}>
            <TableHeaderOuterContainer>
              {headerGroups.map((headerGroup) => (
                <TableHeaderContainer {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <TableHeaderText {...column.getHeaderProps()}>
                      {column.render('Header')}
                    </TableHeaderText>
                  ))}
                </TableHeaderContainer>
              ))}
            </TableHeaderOuterContainer>
            <TableBodyContainer {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row)

                return (
                  <TableBodyInnerContainer {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <TableBodyInnerContainerText {...cell.getCellProps()}>
                          {cell.render('Cell')}
                        </TableBodyInnerContainerText>
                      )
                    })}
                  </TableBodyInnerContainer>
                )
              })}
            </TableBodyContainer>
          </TableContainer>
        </RightSectionContainer>
      </Container>
    </>
  )
}

export default EnterpriseClients;

