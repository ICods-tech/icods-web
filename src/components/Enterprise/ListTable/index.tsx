import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTable } from 'react-table'
import { PATH_LIST_LOTS } from '../../../constants/urls'
import { Functionalities } from '../../Functionalities'
import Status from '../Status'
import {
  TableBodyContainer,
  TableBodyContainerText,
  TableBodyInnerContainer,
  TableBodyInnerContainerText,
  TableBodyInnerContainerTextCodeLote,
  TableContainer,
  TableHeaderContainer,
  TableHeaderOuterContainer,
  TableHeaderText,
  FunctionalitiesContainer,
} from './styles'

const ListTable = ({ data, columns, type }) => {
  const router = useRouter()

  const handleClickDetail = (id: string) => {
    router.push(PATH_LIST_LOTS + `?id=${id}`)
  }
  const handleClickDeleteClient = (id: string) => {
    console.log('delete client', new Date())
  }
  const handleClickDeleteLots = (id: string) => {
    console.log('delete lots', new Date())
  }

  const handleClickDeleteQrcodes = (id: string) => {
    console.log('delete qrcodes', new Date())
  }

  const functionsClients = {
    clientsDetails: (id: string) => handleClickDetail(id),
    clientsChat: (id: string) => {},
    clientsDelete: (id: string) => handleClickDeleteClient(id),
  }

  const functionsLots = {
    lotsDetails: (id: string) => handleClickDetail(id),
    lotsChat: (id: string) => {},
    lotsDelete: (id: string) => handleClickDeleteLots(id),
  }

  const functionsQRCodes = {
    detail: handleClickDetail,
    delete: handleClickDeleteQrcodes,
  }

  const functionsTypes = {
    clients: functionsClients,
    lots: functionsLots,
    qrcodes: functionsQRCodes,
  }

  data = data.map((client) => ({
    ...client,
    functionalities: (
      <FunctionalitiesContainer>
        <Functionalities
          clicked={(functionalityType) => {
            const { id } = client
            console.log('those are the type and functionalityType', { type, functionalityType })
            functionsTypes[type][functionalityType](id)
          }}
          type={type}
        />
      </FunctionalitiesContainer>
    ),
  }))

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })

  return (
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
                if (
                  cell.column.Header === 'Código do Lote' ||
                  cell.column.Header === 'Código QR Code'
                ) {
                  return (
                    <TableBodyContainerText>
                      <TableBodyInnerContainerTextCodeLote {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </TableBodyInnerContainerTextCodeLote>
                    </TableBodyContainerText>
                  )
                }
                if (cell.column.Header === 'Estado') {
                  return (
                    <TableBodyInnerContainerText {...cell.getCellProps()}>
                      <Status type={cell.value} />
                    </TableBodyInnerContainerText>
                  )
                }
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
  )
}

export default ListTable
