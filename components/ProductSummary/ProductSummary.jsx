import { CartItem } from '@components/Cart/CartItem/CartItem';
import { Price } from '@components/Price';
import { ProductButton } from '@components/ProductButton';
import { useStickyState } from 'hooks';
import styled from 'styled-components';
import { useOverlayTriggerState } from '@react-stately/overlays';
import { OverlayContainer } from '@react-aria/overlays';
import { useButton } from '@react-aria/button';
import { CheckoutConfirmation } from '@components/CheckoutConfirmation';
import { useRef } from 'react';

export function ProductSummary() {
  const [cart, setCart] = useStickyState([], 'cart');
  const total = cart.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );
  const shipping = 50;
  const vat = 1079;

  let state = useOverlayTriggerState({});
  let openButtonRef = useRef();

  let { buttonProps: openButtonProps } = useButton(
    {
      onPress: () => state.open(),
    },
    openButtonRef
  );

  return (
    <Card>
      <SummaryTitle>Summary</SummaryTitle>
      {cart.map((item) => (
        <CartItem
          key={item.name}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          image={item.thumbnail}
          cart={cart}
          setCart={setCart}
          readOnly
        />
      ))}
      <Row>
        <SummaryLabel>Total</SummaryLabel>
        <Price amount={total} />
      </Row>
      <Row>
        <SummaryLabel>Shipping</SummaryLabel>
        <Price amount={shipping} />
      </Row>
      <Row>
        <SummaryLabel>VAT (Included)</SummaryLabel>
        <Price amount={vat} />
      </Row>
      <Row>
        <SummaryLabel>Grand Total</SummaryLabel>
        <Price amount={total + vat + shipping} />
      </Row>
      <ConfirmationButton
        variant="primary"
        {...openButtonProps}
        ref={openButtonRef}
      >
        Continue & Pay
      </ConfirmationButton>
      {state.isOpen && (
        <OverlayContainer>
          <CheckoutConfirmation
            onClose={state.close}
            cartPreview={cart[0]}
            cartLength={cart.length}
            total={total}
          />
        </OverlayContainer>
      )}
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 7px;
  background-color: #fff;
  padding: 1.5rem;
`;

const SummaryTitle = styled.h2`
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  letter-spacing: 1.28571px;
  text-transform: uppercase;

  color: #000000;
`;

const SummaryLabel = styled.p`
  font-size: 15px;
  line-height: 25px;
  text-transform: uppercase;
  /* identical to box height, or 167% */

  color: #000000;

  mix-blend-mode: normal;
  opacity: 0.5;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ConfirmationButton = styled(ProductButton)`
  width: 100%;
`;
