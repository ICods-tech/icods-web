import styled from 'styled-components'
import { ChevronLeft } from 'react-iconly'

export const Container = styled.header`
  display: flex;
  height: 16vh;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
`

export const WelcomeToManagement = styled.h1`
  font-family: Manrope;
  font-size: 2.5rem;
  font-weight: 500;
  color: var(--text-title);
`

export const RightSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ManagementText = styled.span`
  font-weight: 500;
  color: var(--background);
`

export const NameAndPositionOuterContainer = styled.div`
  width: 18rem;
  height: 5rem;
  background: var(--main);
  color: var(--shape);
  display: flex;
  flex-direction: row;
  border-radius: 3.125rem;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
`

export const NameAndPositionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  justify-content: center;
`

export const NameAndPositionText = styled.h3`
  font-family: Manrope;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.375rem;
  color: var(--shape);
`

export const PositionAndIConContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SignOutText = styled.a`
  text-decoration: underline;
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.375rem;
  color: var(--background);
  margin-left: 2rem;
  cursor: pointer;
`

export const HeaderChevronContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ChevronLeftIcon = styled(ChevronLeft).attrs({
  set: 'light',
  size: 36,
  primaryColor: 'rgb(0,0,0)',
  borderColor: 'rgb(0,0,0)',
})``

export const ChevronLeftIconContainer = styled.img`
  cursor: pointer;
  margin-left: 0;
  margin-right: 1.5rem;
`
