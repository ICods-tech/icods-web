import styled from 'styled-components';

interface StyledMenuProps {
  open: boolean;
}

export const StyledMenu = styled.nav<StyledMenuProps>`
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background:#fff;
  height: 100vh;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
  transition: transform 0.3s ease-in-out;
  
  @media (max-width: 576px) {
    width: 100%;
  };

  @media (min-width: 769px) {
    transform: translateX(0);
    flex-direction: row;
    position: relative;
    width: 75%;

    max-width: 500px;
    height: 100px;

    margin: 0 auto;

    background: transparent;
    

    display: flex;
    align-items: flex-end;
    padding: 0;
    
  }

  a {
    margin: 16px auto ;
    font-size: 16px;
    text-transform: uppercase;  

    font-style: normal;
    font-weight: normal;
    line-height: 19px;

    letter-spacing: 0.02em;
    color: #000;
    
    transition: color 0.3s linear;
    
    @media (max-width: 576px) {
      font-size: 16px;
      text-align: center;
    }

    @media (min-width: 769px) {
      margin: 0 10px;
      color: #fff;
    }

    &:hover {
      /* padding: 0.2rem 0; */
      border-bottom: 1px solid #fff;
    };
    }
  };

`
