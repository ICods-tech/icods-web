import { useRouter } from 'next/router'
import { useTable } from 'react-table'
import { PATH_LIST_LOTS, PATH_LIST_QRCODES } from '../../../constants/urls'
import { Functionalities } from '../../Functionalities'
import Status from '../Status'
import {
  FunctionalitiesContainer, TableBodyContainer,
  TableBodyContainerText,
  TableBodyInnerContainer,
  TableBodyInnerContainerText,
  TableBodyInnerContainerTextCodeLote,
  TableContainer,
  TableHeaderContainer,
  TableHeaderOuterContainer,
  TableHeaderText
} from './styles'

const ListTable = ({ data, columns, type }) => {
  const router = useRouter()

  const handleClickDetail = (id: string, path: string) => {
    router.push(`${path}?id=${id}`)
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
    clientsDetails: (id: string) => handleClickDetail(id, PATH_LIST_LOTS),
    clientsChat: (id: string) => { },
    clientsDelete: (id: string) => handleClickDeleteClient(id),
  }

  const functionsLots = {
    lotsDetails: (id: string) => handleClickDetail(id, PATH_LIST_QRCODES),
    lotsChat: (id: string) => { },
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
  console.log('data', data);
  console.log('columns', columns);
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

  const styleRow = (styleType, cell) => {
    switch (styleType) {
      case 'Código do Lote':
      case 'Código QR Code':
        return (
          <TableBodyContainerText>
            <TableBodyInnerContainerTextCodeLote {...cell.getCellProps()}>
              {cell.render('Cell')}
            </TableBodyInnerContainerTextCodeLote>
          </TableBodyContainerText>
        )
      case 'Estado': 
        return (
          <TableBodyInnerContainerText {...cell.getCellProps()}>
            <Status type={cell.value} />
          </TableBodyInnerContainerText>
        )
      default: 
        return(
          <TableBodyInnerContainerText {...cell.getCellProps()}>
              {cell.render('Cell')}
          </TableBodyInnerContainerText>
        )
      }
  }

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
                  return styleRow(cell.column.Header, cell)
                })}
              </TableBodyInnerContainer>
            )
          })}
        </TableBodyContainer>
      </TableContainer>
    )
  }

  export default ListTable
