import styled from 'styled-components';
import { ButtonStyles } from '../ButtonStyles';

import { ChevronRight } from '../ChevronRight';

const ShopButtonStyles = styled(ButtonStyles)`
  background-color: var(--grey-100);
  color: var(--black-200);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  span {
    margin-top: 6px;
    margin-left: 5px;
  }

  &:hover {
    color: var(--orange-200);
  }
`;

export function ShopButton() {
  return (
    <ShopButtonStyles>
      Shop
      <span>
        <ChevronRight />
      </span>
    </ShopButtonStyles>
  );
}
