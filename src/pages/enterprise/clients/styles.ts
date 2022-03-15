import styled from 'styled-components'

interface MenuOptionContainerProps {
  isSelected: boolean
}

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`

export const LeftSectionContainer = styled.div`
  width: 17.188rem;
  display: flex;
  flex-direction: column;
  background-color: #171717;
  align-items: center;
  padding-top: 1.5rem;
`

export const ICodsEnterpriseLogoLarge = styled.img`
  height: 7rem;
  width: 7rem;
  margin-bottom: 2.875rem;
`

export const MenuOptionContainer = styled.div<MenuOptionContainerProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 3.125rem;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  background-color: ${(props: MenuOptionContainerProps) =>
    props.isSelected ? 'var(--background)' : 'var(--main)'};
`

export const MenuOptionIconAndTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  margin-left: 2rem;
  margin-right: auto;
`

export const MenuOptionText = styled.h3`
  font-family: Manrope;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.375rem;
  color: var(--shape);
  margin-left: 0.5rem;
`

export const NotificationsIconMenuOptionContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: var(--shape);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  margin-left: auto;
`

export const NotificationsIconMenuOptionNumber = styled.h3`
  color: var(--background);
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.188rem;
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
