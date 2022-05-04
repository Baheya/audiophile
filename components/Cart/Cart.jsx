import styled from 'styled-components';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import { useButton } from '@react-aria/button';

import { Button } from '@components/Button';
import { Modal } from '@components/Modal';
import { Price } from '@components/Price';
import { CartItem } from './CartItem/CartItem';

import { useStickyState } from 'hooks';

export function Cart({ isOpen, onClose }) {
  const [cart, setCart] = useStickyState([], 'cart');
  const total = cart.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );
  const router = useRouter();
  const closeButtonRef = useRef();
  const { buttonProps: closeButtonProps } = useButton(
    {
      onPress: () => {
        router.push('/checkout');
        onClose();
      },
    },
    closeButtonRef
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="cart"
      title={`CART (${cart.length})`}
      action={
        <RemoveAllButton onClick={() => setCart([])}>
          Remove all
        </RemoveAllButton>
      }
      isDismissable
    >
      <CartItems>
        {cart.map((item) => (
          <CartItem
            key={item.name}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            image={item.thumbnail}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </CartItems>
      <Wrapper>
        <TotalLabel>Total</TotalLabel>
        <Price amount={total} />
      </Wrapper>
      <Button {...closeButtonProps} ref={closeButtonRef} variant="primary">
        Checkout
      </Button>
    </Modal>
  );
}

const RemoveAllButton = styled.button`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-decoration-line: underline;

  color: #000000;

  mix-blend-mode: normal;
  opacity: 0.5;
  border: none;
  background: none;
`;

const CartItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0;
  list-style: none;
  margin-top: 1rem;
`;

const TotalLabel = styled.p`
  font-size: 15px;
  line-height: 25px;
color: #000000;

  mix-blend-mode: normal;
  opacity: 0.5;
`;


const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0;
`;
