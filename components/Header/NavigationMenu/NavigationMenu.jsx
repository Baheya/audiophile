import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { MenuButtonIcon } from '@components/MenuButtonIcon';
import { Logo } from '@components/Logo';
import { NavigationList } from '@components/NavigationList';
import { VisuallyHidden } from '@components/VisuallyHidden';

import { keyboardHandler } from '../../../utils/keyboardHandler';

export function NavigationMenu({ isBiggerThanTablet, isHeaderNav }) {
  const [showNav, setShowNav] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    if (!isBiggerThanTablet) {
      addEventListener('keydown', keyboardHandler);
    } else {
      removeEventListener('keydown', keyboardHandler);
    }
  }, [isBiggerThanTablet]);

  useEffect(() => {
    if (showNav) {
      setShowNav(false);
    }
  }, [pathname]);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <Nav>
      {isBiggerThanTablet ? (
        <>
          <Link passHref href="/" prefetch={false}>
            <StyledLink>
              <VisuallyHidden>Go to Audiophile Homepage</VisuallyHidden>
              <Logo />
            </StyledLink>
          </Link>
          <NavigationList
            isHeaderNav={isHeaderNav}
            showNav={showNav}
            isBiggerThanTablet={isBiggerThanTablet}
          />
        </>
      ) : (
        <>
          <MenuButton
            visible={!isBiggerThanTablet}
            toggled={showNav}
            onClick={toggleNav}
          >
            <MenuButtonIcon />
          </MenuButton>
          <NavigationList
            isHeaderNav={isHeaderNav}
            showNav={showNav}
            isBiggerThanTablet={isBiggerThanTablet}
          />

          <Link passHref href="/" prefetch={false}>
            <StyledLink>
              <VisuallyHidden>Go to Audiophile Homepage</VisuallyHidden>
              <Logo />
            </StyledLink>
          </Link>
        </>
      )}
    </Nav>
  );
}

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

  @media screen and (-ms-high-contrast: active) {
    border: 2px solid currentcolor;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

const StyledLink = styled.a`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 1024px) {
    position: static;
    left: initial;
    top: initial;
    transform: none;
  }
`;
