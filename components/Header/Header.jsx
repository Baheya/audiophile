import styled from 'styled-components';

import { NavigationMenu } from './NavigationMenu';

export const HeaderStyles = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  width: 100%;
`;

export function Header({ isBiggerThanTablet }) {
  return (
    <HeaderStyles>
      <NavigationMenu isBiggerThanTablet={isBiggerThanTablet} />
    </HeaderStyles>
  );
}
