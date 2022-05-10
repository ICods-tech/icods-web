import React, { Fragment } from 'react';
import {
  Container,
  LogoImg,
  NavBar,
  NavBarLink,
} from './styles';

export function Header({ darkMode } : { darkMode: boolean }) {
  const stylesType = darkMode ? 'dark' : 'light';
  const styles = {
    dark: {
      backgroundColor: '#000000DE',
      color: '#fff',
    },
    light: {
      backgroundColor: '#fff',
      color: '#000000DE',
    }
  }
  return (

    <Container style={styles[stylesType]}>
      <a href="/">
        <LogoImg 
          src={ darkMode ? "/images/icods_icon_dark.svg" : "/images/icods_icon.svg"  }
          alt="logo"
          />
      </a>
      <NavBar >
        <NavBarLink>Baixar</NavBarLink>
        <NavBarLink>Porque usar iCODS?</NavBarLink>
        <NavBarLink>Empresarial</NavBarLink>
        <NavBarLink>Suporte</NavBarLink>
      </NavBar>
    </Container>
  );
}