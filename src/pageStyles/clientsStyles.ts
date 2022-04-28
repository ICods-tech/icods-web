import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`

export const RightSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const GrayDivider = styled.div`
  height: 1rem;
  width: 100%;
  background-color: var(--main);
`

export const TableButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 1rem;
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
  margin-left: 1rem;
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

export const ButtonIconContainer = styled.img``

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
`

export const TableBodyContainer = styled.tbody``

export const TableBodyInnerContainer = styled.tr`
  border: 0;
`

export const TableBodyInnerContainerText = styled.td`
  font-family: Manrope;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: var(--text-title);
`
export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 95%;
  align-self: center;
`