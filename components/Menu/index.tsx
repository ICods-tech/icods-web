import React from 'react';
import { StyledMenu } from '../../styles/menu';

interface MenuProps {
  open: boolean;
}

const Menu = (props: MenuProps) => {
  return (
    <StyledMenu open={props.open}>
      <a href="/">
        Baixar
      </a>
      <a href="/">
        Porque usar iCODS?
      </a>
      <a href="/">
        Empresarial
      </a>
      <a href="/">
        Suporte
      </a>
    </StyledMenu>
  )
}
export default Menu;