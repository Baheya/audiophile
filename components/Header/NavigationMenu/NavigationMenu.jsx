import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { MenuButtonIcon } from '../../MenuButtonIcon';
import { CartButtonIcon } from '../../CartButton';
import { Logo } from '../../Logo';
import { keyboardHandler } from '../../../utils/keyboardHandler';
import { NavigationList } from '../../NavigationList';

export const Nav = styled.nav`
  background-color: transparent;
  width: 100%;
  height: 70px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem clamp(1.5rem, 8%, 18rem);

  &:after {
    content: '';
    height: 0.5px;
    width: 90%;
    background-color: #979797;
    margin: 0 auto;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: inline;
    mix-blend-mode: lighten;
  }
`;

const MenuButton = styled.button.attrs((props) => ({
  type: 'button',
  'aria-label': 'Icon-only Menu Button',
  'aria-expanded': props.toggled,
  'aria-controls': 'products-dropdown',
  className: 'menu-button',
}))`
  border: none;
  background-color: transparent;
  font-family: inherit;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.35em;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.1;
  transition: 220ms all ease-in-out;

  &:focus {
    outline: 1px solid var(--orange-200);
    transition: outline-offset 0.25s ease;
  }
  &:focus:not(:active) {
    outline: 1px solid var(--orange-200);
    outline-offset: 5px;
  }

  @media screen and (-ms-high-contrast: active) {
    border: 2px solid currentcolor;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

const StyledLink = styled.a`
  &:focus {
    outline: 1px solid var(--orange-200);
    transition: outline-offset 0.25s ease;
  }
  &:focus:not(:active) {
    outline: 1px solid var(--orange-200);
    outline-offset: 5px;
  }
`;

export function NavigationMenu({ isBiggerThanTablet }) {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (!isBiggerThanTablet) {
      addEventListener('keydown', keyboardHandler);
    } else {
      removeEventListener('keydown', keyboardHandler);
    }
  }, [isBiggerThanTablet]);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <Nav>
      {isBiggerThanTablet ? (
        <>
          <Link passHref href="/">
            <StyledLink>
              <Logo />
            </StyledLink>
          </Link>
          <NavigationList
            showNav={showNav}
            isBiggerThanTablet={isBiggerThanTablet}
          />
          <Link passHref href="/cart">
            <StyledLink>
              <CartButtonIcon />
            </StyledLink>
          </Link>
        </>
      ) : (
        <>
          <MenuButton toggled={showNav} onClick={toggleNav}>
            <MenuButtonIcon />
          </MenuButton>
          <NavigationList
            showNav={showNav}
            isBiggerThanTablet={isBiggerThanTablet}
          />

          <Link passHref href="/">
            <StyledLink>
              <Logo />
            </StyledLink>
          </Link>
          <Link passHref href="/cart">
            <StyledLink>
              <CartButtonIcon />
            </StyledLink>
          </Link>
        </>
      )}
    </Nav>
  );
}
