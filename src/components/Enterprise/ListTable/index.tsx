import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTable } from 'react-table'
import { PATH_LIST_LOTS } from '../../../constants/urls'
import { Functionalities } from '../../Functionalities'
import Status from '../Status'
import {
  TableBodyContainer, TableBodyContainerText, TableBodyInnerContainer,
  TableBodyInnerContainerText,
  TableBodyInnerContainerTextCodeLote, TableContainer,
  TableHeaderContainer,
  TableHeaderOuterContainer,
  TableHeaderText
} from './styles'



const ListTable = ({data, columns, type}) => {
  console.log({data, columns, type});
  
  const [row, setRow ] = useState(null)
  
  const router = useRouter()
  
  const handleClickDetail = () => {
    router.push(PATH_LIST_LOTS+`?id=${row.id}`)
  }
  const handleClickDeleteClient = () => {
    console.log('delete client', new Date())
  }
  const handleClickDeleteLots = () => {
    console.log('delete lots',new Date())
  }
  const handleClickDeleteQrcodes = () => {
    console.log('delete qrcodes',new Date())
  }
  const functionsClients = {
    detail: handleClickDetail, 
    delete: handleClickDeleteClient,
  }
  const functionsLots = {
    detail: handleClickDetail, 
    delete: handleClickDeleteLots,
  }
  const functionsQRCodes = {
    detail: handleClickDetail, 
    delete: handleClickDeleteQrcodes,
  }
 
  const functionsTypes = {
    clients: functionsClients,
    lots: functionsLots,
    qrcodes: functionsQRCodes
  }
  
 
  const functionalities = <Functionalities type={type} functions={functionsTypes[type]}/>
 
  
  data = data.map((client) => ({ ...client, functionalities }))
  
  const handleClickRow = (email) => {
    setRow(data.find(client => client.email === email));
  }
  console.log(columns,data);
  
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({
    columns,
    data
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
            <TableBodyInnerContainer {...row.getRowProps()} onClick={()=>handleClickRow(row.cells[1].value)}>
              {row.cells.map((cell) => {
                if(cell.column.Header === "Código do Lote" || cell.column.Header === "Código QR Code") {
                  return (
                    <TableBodyContainerText>
                      <TableBodyInnerContainerTextCodeLote {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </TableBodyInnerContainerTextCodeLote>
                    </TableBodyContainerText>
                  )
                }
                if(cell.column.Header === "Estado") {
                  return (
                    <TableBodyInnerContainerText {...cell.getCellProps()}>
                      <Status type={cell.value} />
                    </TableBodyInnerContainerText>
                  )
                }
                return (
                  // <TableBodyContainerText>
                    <TableBodyInnerContainerText {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </TableBodyInnerContainerText>
                  // </TableBodyContainerText>
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

