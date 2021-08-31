import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  justify-content: center;
  margin-top: 96px;
`

export const EnterpriseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 256px;
`

export const GenerateQRCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  height: 180px;
`

export const GenerateQRCodeTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 24px;
`

export const EnterpriseInput = styled.input`
  height: 40px;
  border-radius: 12px;
  border: 2px solid black;
  padding-left: 10px;
  padding-right: 10px;
  outline-width: 0;
`

export const EnterpriseTitle = styled.h1`
  color: white;
`

export const EnterpriseButton = styled.button`
  height: 40px;
  width: 180px;
  border-radius: 12px;
  align-self: center;
  background: #2761a9;
  border: 2px solid black;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`