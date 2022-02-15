import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  height: 20vh;
  background-color: var(--main);

  align-items: center;
  justify-content: center;
  padding: 0 3.063rem;
`;

export const LogoImg = styled.img`
  width: 5.25rem;
  height: 5.749rem;

  position: absolute;
  left: 3.063rem;
`

export const NavBar = styled.nav`
  display: flex;
  max-width: 32.625rem;
  background-color: var(--main);
`;

export const NavBarLink = styled.a`
  color: var(--shape);
    
    & + a {
      margin-left: 2rem;
    }
`;