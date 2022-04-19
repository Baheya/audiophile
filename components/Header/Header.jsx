import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';

import { NavigationMenu } from './NavigationMenu';

import { useOverlayTriggerState } from '@react-stately/overlays';
import { OverlayContainer } from '@react-aria/overlays';
import { useButton } from '@react-aria/button';
import { CartButtonIcon } from '@components/CartButton';
import { Cart } from '@components/Cart';
import { ClientOnly } from '@components/ClientOnly';

export const HeaderStyles = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  display: flex;

  background-color: transparent;
  width: 100%;
  height: 70px;
  /* position: relative; */
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

export function Header() {
  const [isBiggerThanTablet, setIsBiggerThanTablet] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    function syncWindowSize(e) {
      if (e.matches) {
        setIsBiggerThanTablet(true);
      } else {
        setIsBiggerThanTablet(false);
      }
    }

    syncWindowSize(mediaQuery);
    mediaQuery.addEventListener('change', syncWindowSize);
  }, []);

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
    <>
      <HeaderStyles className="header">
        <NavigationMenu isBiggerThanTablet={isBiggerThanTablet} />
        <StyledLink as="button" {...openButtonProps} ref={openButtonRef}>
          <CartButtonIcon />
        </StyledLink>
      </HeaderStyles>
      {state.isOpen && (
        <ClientOnly>
          <OverlayContainer>
            <Cart isOpen onClose={state.close} />
          </OverlayContainer>
        </ClientOnly>
      )}
    </>
  );
}

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
