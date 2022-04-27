import styled from 'styled-components'

export const TableContainer = styled.table`
  margin-top: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.17);
  border-right: 1px solid rgba(0, 0, 0, 0.17);
  border-left: 1px solid rgba(0, 0, 0, 0.17);
  width: 100%;
  align-self: end;
`

export const TableButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  margin: 0.5rem;
`

export const TableButton = styled.button`
  width: 11.9375rem;
  height: 2.5rem;
  background-color: var(--background);
  border: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
`

export const TableButtonText = styled.h3`
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  color: var(--shape);
  margin-left: 0.25rem;
`

export const TableHeaderOuterContainer = styled.thead`
  padding: 0;
  height: 6.25rem;
  border: 0;
`

export const TableHeaderContainer = styled.tr`
  background: var(--text-title);
  margin: 0;
  border: 0;
`

export const TableHeaderText = styled.th`
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: var(--shape);
  border: none;
`

export const TableBodyContainer = styled.tbody``

export const TableBodyInnerContainer = styled.tr`
  text-align: center;
  height: 6rem;
`

export const TableBodyInnerContainerText = styled.td`
  font-family: Manrope;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: var(--text-title);
  text-align: center;
`

export const TableBodyInnerContainerTextCodeLote = styled.td`
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #fff;
  background: #000000;
  border-radius: 6px;
  padding: 0.2rem 1.4rem;
`

export const TableBodyContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 4rem;
  margin-top:1rem
`

// functionalities
export const FunctionalitiesContainers = styled.button`
  display: flex;
  height: 3rem;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  align-self: center;
`

export const DetailIcon = styled.img`
  width: 3rem;
  height: 2rem;
`

export const ChatIcon = styled.img`
  width: 3rem;
  height: 2rem;
`

export const DeleteIcon = styled.img`
  width: 3rem;
  height: 2rem;
`

export const FunctionalitiesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
