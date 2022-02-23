import React from 'react';
import {
  Container,
  LogoImg,
  NavBar,
  NavBarLink,
} from './styles';

export function Header(){
  return (
    <Container>
          <LogoImg 
            src="/iCODS icon.svg"
            alt="logo"
          />
          <NavBar>
            <NavBarLink>Baixar</NavBarLink>
            <NavBarLink>Porque usar iCODS?</NavBarLink>
            <NavBarLink>Empresarial</NavBarLink>
            <NavBarLink>Suporte</NavBarLink>
          </NavBar>
    </Container>
  );
}