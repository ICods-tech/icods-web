import styled from 'styled-components'

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
  width: 24px;
  height: 24px;
`

export const ChatIcon = styled(DetailIcon)``

export const PrinterIcon = styled(DetailIcon)``

export const DeleteIcon = styled(DetailIcon)``

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-right: 1rem;
  background: #FFFFFF;
  border: 0.5px solid #F2F2F2;
  border-radius: 50%;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04);
`