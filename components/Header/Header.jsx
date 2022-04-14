import styled from 'styled-components';
import { useEffect, useState } from 'react';

import { NavigationMenu } from './NavigationMenu';

export const HeaderStyles = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  width: 100%;
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

  return (
    <HeaderStyles className="header">
      <NavigationMenu isBiggerThanTablet={isBiggerThanTablet} />
    </HeaderStyles>
  );
}
