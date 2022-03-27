import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { MenuButtonIcon } from '../MenuButtonIcon';
import { NavListItem } from './NavListItem';
import { ShopLink } from '../ShopLink';
import { CartButtonIcon } from '../CartButton';
import { Logo } from '../Logo';
import { keyboardHandler } from '../../utils/keyboardHandler';

const pages = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Headphones',
    image: '/images/shared/desktop/image-headphones.png',
    path: '/headphones',
  },
  {
    name: 'Speakers',
    image: '/images/shared/desktop/image-speakers.png',
    path: '/speakers',
  },
  ,
  {
    name: 'Earphones',
    image: '/images/shared/desktop/image-earphones.png',
    path: '/earphones',
  },
];

const Nav = styled.nav`
  background-color: var(--black-200);
  width: 100%;
  height: 70px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem clamp(0.8rem, 5%, 10rem);
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
  border-radius: 50%;
  padding: 0.35em;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.1;
  transition: 220ms all ease-in-out;

  /* @media screen and (-ms-high-contrast: active) {
    border: 2px solid currentcolor;
  }

  @media (min-width: 1024px) {
    display: none;
  } */
`;

const NavList = styled.ul.attrs({
  id: 'products-dropdown',
})`
  list-style: none;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: minmax(10px, 30px) minmax(200px, 1fr) minmax(
      10px,
      30px
    );
  background-color: var(--grey-100);
  padding: 0;
  position: absolute;
  top: calc(100% - 0.25rem);
  left: 0;
  right: 0;
  transform: ${(props) =>
    props.showNav ? 'translateX(0)' : 'translateX(-100%)'};
  transform-origin: top center;
  opacity: ${(props) => (props.showNav ? 1 : 0)};
  transition: 280ms all ease-out;
  visibility: ${(props) => (props.showNav ? 'visible' : 'hidden')};

  /* @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    padding: 0 max(10px, 30px);
    grid-gap: 20px;
    transform: ${(props) => (props.showNav ? 'rotateX(0)' : 'rotateX(-90deg)')};
  }

  @media (min-width: 1024px) {
    visibility: visible;
    display: flex;
    position: static;
    grid-template-columns: none;
    grid-gap: 0;
    padding: 0;
    width: 100%;
    background: none;
    opacity: 1;
    transform: initial;
    max-width: 400px;
  } */
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

export function MobileNavigation() {
  const [showNav, setShowNav] = useState(false);
  const [isBiggerThanTablet, setIsBiggerThanTablet] = useState(false);

  useEffect(() => {
    function syncWindowSize() {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        setIsBiggerThanTablet(true);
      } else {
        setIsBiggerThanTablet(false);
      }
    }

    syncWindowSize();
    addEventListener('resize', syncWindowSize, false);
    // addEventListener('keyup', keyboardHandler);

    return () => removeEventListener('resize', syncWindowSize, false);
  }, []);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <Nav>
      <MenuButton aria-expanded={showNav} onClick={toggleNav}>
        <MenuButtonIcon />
      </MenuButton>
      <Link passHref href="/">
        <StyledLink>
          <Logo />
        </StyledLink>
      </Link>
      <NavList showNav={showNav}>
        {pages.map((page, i) => (
          <NavListItem
            key={i}
            pageName={page.name}
            pageImage={page.image}
            pagePath={page.path}
            isBiggerThanTablet={isBiggerThanTablet}
          />
        ))}
      </NavList>
      <Link passHref href="/cart">
        <StyledLink>
          <CartButtonIcon />
        </StyledLink>
      </Link>
    </Nav>
  );
}
