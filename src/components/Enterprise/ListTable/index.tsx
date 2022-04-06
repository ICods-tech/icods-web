import {
  TableContainer,
  TableHeaderContainer,
  TableHeaderOuterContainer,
  TableHeaderText,
  TableBodyContainer,
  TableBodyInnerContainer,
  TableBodyInnerContainerText,
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

