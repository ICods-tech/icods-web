import styled from 'styled-components';

interface StyledBurgerProps {
  open: boolean;
}

export const StyledBurger = styled.button<StyledBurgerProps>`
  // margin-bottom: 6px;
  margin-right: 32px;
  
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#fff': '#000' };
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(0)' : 'rotate(45deg)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '1' : '0'};
      transform: ${({ open }) => open ? 'translateX(0px)' : 'translateX(20px)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(0)' : 'rotate(-45deg)'};
    }
  }

  @media (min-width: 925px) {
    display: none;
  }

   @media (max-width: 825px) {
       margin-right: 2.8rem;
  }
`;