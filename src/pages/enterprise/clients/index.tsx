import React, { useMemo, useState } from 'react'
import Head from 'next/head'
import {
  ButtonIconContainer,
  Container,
  GrayDivider,
  ICodsEnterpriseLogoLarge,
  LeftSectionContainer,
  MenuOptionContainer,
  MenuOptionIconAndTextContainer,
  MenuOptionText,
  NotificationsIconMenuOptionContainer,
  NotificationsIconMenuOptionNumber,
  RightSectionContainer,
  TableButton,
  TableButtonsContainer,
  TableButtonText,
  TableContainer,
} from './styles'
import 'react-dropdown/style.css'
import { useTable } from 'react-table'
import GlobalStyle from '../../../../styles/globalStyle'
import { HeaderClient } from '../../../components/Enterprise/ClientsSection/Header'
import { User, Setting } from 'react-iconly'
import { Functionalities } from '../../../components/Functionalities'
import CreateLotModal from '../../../components/Enterprise/CreateLotModal'

function useData() {
  const data = useMemo(
    () => [
      {
        objectId: 'EYyCFVO9lC',
        client: 'Marcelo Alves Gomes',
        email: 'icods@gmail.com',
        phone: '(83) XXX-XXXXXX',
        lastChange: '18/12/2021',
        functionalities: <Functionalities />,
        createdAt: '2020-01-27T21:04:53.095Z',
        updatedAt: '2020-01-27T21:04:53.095Z',
      },
      {
        objectId: 'EYyCFVO9ld',
        client: 'Thomáz Ivonaldo',
        email: 'icods@gmail.com',
        phone: '(83) XXX-XXXXXX',
        lastChange: '11/10/2021',
        functionalities: <Functionalities />,
        createdAt: '2020-01-27T21:04:53.095Z',
        updatedAt: '2020-01-27T21:04:53.095Z',
      },
      {
        objectId: 'EYyCFVO9ld',
        client: 'Pai de Lucas',
        email: 'icods@gmail.com',
        phone: '(83) XXX-XXXXXX',
        lastChange: '10/10/2021',
        functionalities: <Functionalities />,
        createdAt: '2020-01-27T21:04:53.095Z',
        updatedAt: '2020-01-27T21:04:53.095Z',
      },
    ],
    []
  )

  return data
}

function useColumns() {
  const columns = useMemo(
    () => [
      {
        Header: 'Cliente',
        accessor: 'client',
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
        accessor: 'lastChange',
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
  const menuOptionIconStyle = { width: '1rem', height: '1.25rem' }
  const [createLotModalOpen, setCreateLotModalOpen] = useState(false)
  const data = useData()
  const columns = useColumns()
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })

  async function loadClients() {
    const response = await fetch('http://fa5c-168-0-72-113.ngrok.io/client-business', {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhjYzg2ZWUyLWVmNmYtNDNlYS04N2I4LTE3ZjVkYzEyOTQxMSIsImlhdCI6MTY0NzMwODU2MiwiZXhwIjoxNjQ3MzUxNzYyLCJzdWIiOiI4Y2M4NmVlMi1lZjZmLTQzZWEtODdiOC0xN2Y1ZGMxMjk0MTEifQ.HEuu0ApqgXyhpp-oH34Ur5YxLpzOSP3zi3j79rforVg',
      },
    })

    const data = await response.json()
    console.log({ response: data })

    return data
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Empresarial | ICods</title>
      </Head>
      <Container>
        <LeftSectionContainer>
          <ICodsEnterpriseLogoLarge
            src="/images/enterprise/icods-logo.svg"
            alt="iCods Enterprise Logo"
          />
          <MenuOptionContainer isSelected>
            <MenuOptionIconAndTextContainer>
              <User set="bold" primaryColor="#fff" style={menuOptionIconStyle} />
              <MenuOptionText>Clientes</MenuOptionText>
            </MenuOptionIconAndTextContainer>
            <NotificationsIconMenuOptionContainer>
              <NotificationsIconMenuOptionNumber>{0}</NotificationsIconMenuOptionNumber>
            </NotificationsIconMenuOptionContainer>
          </MenuOptionContainer>
          <MenuOptionContainer isSelected={false}>
            <MenuOptionIconAndTextContainer>
              <Setting set="bold" primaryColor="#fff" style={menuOptionIconStyle} />
              <MenuOptionText>Configurações</MenuOptionText>
            </MenuOptionIconAndTextContainer>
          </MenuOptionContainer>
        </LeftSectionContainer>
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
            <TableButton>
              <ButtonIconContainer src="/images/enterprise/add-client.svg" alt="Add Client" />
              <TableButtonText>Cadastrar cliente</TableButtonText>
            </TableButton>
          </TableButtonsContainer>
          <TableContainer {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row)

                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                  </tr>
                )
              })}
            </tbody>
          </TableContainer>
        </RightSectionContainer>
      </Container>
    </>
  )
}

export default EnterpriseClients
