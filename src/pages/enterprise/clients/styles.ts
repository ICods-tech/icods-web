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

export const TableContainer = styled.table`
  margin-top: 4rem;
  border: 1px solid rgba(0, 0, 0, 0.17);
  align-self: center;
  width: 90%;
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
  margin-right: 1rem;
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
