import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  height: 20vh;
  background-color: var(--main);

  align-items: center;
  justify-content: center;
  padding: 0 3rem;
`;

export const LogoImg = styled.img`
  width: 5.25rem;
  height: 5.25rem;

  position: absolute;
  top: 2rem;
  left: 3rem;
`

export const NavBar = styled.nav`
  display: flex;
  max-width: 32.625rem;
`;

export const NavBarLink = styled.a`
    & + a {
      margin-left: 2rem;
    }
`;