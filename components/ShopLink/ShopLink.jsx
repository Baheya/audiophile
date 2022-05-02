import styled from 'styled-components';
import { BaseButton } from '@components/Button/Button';

import { ChevronRight } from '../ChevronRight';

export function ShopLink({ tag, ...delegated }) {
  return (
    <ShopLinkStyles as={tag} {...delegated}>
      Shop
      <span>
        <ChevronRight />
      </span>
    </ShopLinkStyles>
  );
}

const ShopLinkStyles = styled(BaseButton)`
  background-color: transparent;
  color: var(--grey-500);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-weight: 600;
  z-index: 1;

  span {
    margin-top: 6px;
    margin-left: 5px;
    color: var(--orange-200);
  }

  &:hover {
    color: var(--orange-200);
  }

  &::after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: '';
  }

  &:focus {
    outline: 1px solid var(--orange-200);
    transition: outline-offset 0.25s ease;
  }
  &:focus:not(:active) {
    outline: 1px solid var(--orange-200);
    outline-offset: -5px;
  }
`;
