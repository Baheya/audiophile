import styled from 'styled-components';

export function Price({ amount }) {
  return (
    <PriceStyles>
      {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
      }).format(amount)}
    </PriceStyles>
  );
}

const PriceStyles = styled.p`
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  letter-spacing: 1.28571px;
  text-transform: uppercase;
  font-weight: 700;

  color: var(--black-200, #000);

  .cart-item & {
    font-size: 14px;
    line-height: 25px;
    /* identical to box height, or 179% */

    color: #000000;

    mix-blend-mode: normal;
    opacity: 0.5;
  }

  .card-footer & {
    color: #fff;
  }
`;
