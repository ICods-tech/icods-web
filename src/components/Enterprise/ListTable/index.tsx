import { useRouter } from 'next/router'
import { useContext } from 'react'
import { useTable } from 'react-table'
import ApiHandler from '../../../../services/apiHandler'
import { displayToast } from '../../../../utils/displayToast'
import { BUSINESS_PATH, PATH_LIST_LOTS, PATH_LIST_QRCODES } from '../../../constants/urls'
import { AuthContext } from '../../../context/auth'
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

const IS_QRCODE = true;
const LOT = 'lots';
const QRCODE = 'qrcodes';

const ListTable = ({ data, setData, columns, type }) => {
  const router = useRouter()
  const { getToken } = useContext(AuthContext)
  
  const api = new ApiHandler(true, getToken())
  const handleClickDetail = (id: string, name:string, path: string) => {
    router.push(`${path}?id=${id}&name=${name}`)
  }
  
  const handleClickDeleteClient = async (id: string) => {
    try {
      await api.delete(`${BUSINESS_PATH}/clients/${id}`)
      const newData = data.filter(client => client.id !== id)
      setData(newData)
      displayToast(`Cliente deletado com sucesso!`, 'info')
    } catch (error) {
      displayToast(`Falha ao deletar o cliente!`, 'error')
      console.log(error)
    }
  }
  const handleClickDelete = async (id: string, isQRcode: boolean) => {
    try {
      await api.delete(`${BUSINESS_PATH}/${isQRcode ? QRCODE : LOT}/${id}`)
      const newData = data.filter(qrcode => qrcode.id !== id)
      setData(newData)
      displayToast(`${isQRcode? "QRCode" : "Lote"} deletado com sucesso!`, 'info')
    } catch (error) {
      displayToast(`Falha ao deletar o ${isQRcode? "QRCode" : "Lote"}!`, 'error')
      console.log(error)
    }
  }

  const handleClickPrinter = async (id: string, isQRcode: boolean) => {
    const {data} = await api.get(`${BUSINESS_PATH}/qrcode-file/` + id + "?qrcode=" + isQRcode)
    window.open("data:application/pdf;charset=utf-16le;base64,"+data);
  }

  const functionsClients = {
    clientsDetails: (id: string, name:string) => handleClickDetail(id, name, PATH_LIST_LOTS),
    clientsChat: (id: string) => { },
    clientsDelete: (id: string) => handleClickDeleteClient(id),
  }

  const functionsLots = {
    lotsDetails: (id: string,name: string) => handleClickDetail(id, name ,PATH_LIST_QRCODES),
    lotsPrinter: (id: string) => handleClickPrinter(id,!IS_QRCODE),
    deleteLot: (id: string) => handleClickDelete(id, !IS_QRCODE),
  }

  const functionsQRCodes = {
    qrcodePrinter: (id: string) => handleClickPrinter(id,IS_QRCODE),
    deleteQRCode: (id: string) => handleClickDelete(id, IS_QRCODE),
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
            const { id, name , } = client
            functionsTypes[type][functionalityType](id,name)
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
        const reducedHashValue = cell.render('Cell').props.value.slice(0, 8)
        return (
            <TableBodyContainerText>
              <TableBodyInnerContainerTextCodeLote {...cell.getCellProps()}>
                {reducedHashValue}
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
