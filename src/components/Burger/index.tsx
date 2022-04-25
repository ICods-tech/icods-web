import React from 'react';
import { StyledBurger } from './burger';

interface BurgerProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const Burger = (props: BurgerProps) => {
  return (
    <StyledBurger open={props.open} onClick={() => props.setOpen(!props.open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
