import {
  TableContainer,
  TableHeaderContainer,
  TableHeaderOuterContainer,
  TableHeaderText,
  TableBodyContainer,
  TableBodyInnerContainer,
  TableBodyInnerContainerText,
  TableBodyInnerContainerTextCodeLote,
  TableBodyContainerText,
} from './styles'

const ListTable = ({ getTableProps, headerGroups, getTableBodyProps, rows, prepareRow }) => {
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
                console.log("cell");
                console.log(cell);
                if(cell.column.Header === "Código do Lote"){
                  return (
                    <TableBodyContainerText>
                      <TableBodyInnerContainerTextCodeLote {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </TableBodyInnerContainerTextCodeLote>
                    </TableBodyContainerText>
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

