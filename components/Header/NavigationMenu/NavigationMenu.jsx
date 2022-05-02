import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { MenuButtonIcon } from '../../MenuButtonIcon';
import { Logo } from '../../Logo';
import { keyboardHandler } from '../../../utils/keyboardHandler';
import { NavigationList } from '../../NavigationList';

import { useOverlayTriggerState } from '@react-stately/overlays';
import { useButton } from '@react-aria/button';
import { VisuallyHidden } from '@components/VisuallyHidden';

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
  background: none;
  border: none;
  cursor: pointer;

  &:focus {
    outline: 1px solid var(--orange-200);
    transition: outline-offset 0.25s ease;
  }
  &:focus:not(:active) {
    outline: 1px solid var(--orange-200);
    outline-offset: 5px;
  }
`;

const StyledLogo = styled(Logo)`
  position: absolute;
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

  let state = useOverlayTriggerState({});
  let openButtonRef = useRef();
  let closeButtonRef = useRef();

  // useButton ensures that focus management is handled correctly,
  // across all browsers. Focus is restored to the button once the
  // dialog closes.
  let { buttonProps: openButtonProps } = useButton(
    {
      onPress: () => state.open(),
    },
    openButtonRef
  );

  return (
    <Nav>
      {isBiggerThanTablet ? (
        <>
          <Link passHref href="/">
            <StyledLink>
              <VisuallyHidden>Go to Audiophile Homepage</VisuallyHidden>
              <Logo />
            </StyledLink>
          </Link>
          <NavigationList
            showNav={showNav}
            isBiggerThanTablet={isBiggerThanTablet}
          />
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
        </>
      )}
    </Nav>
  );
}
