import { Modal } from '@components/Modal';
import { Price } from '@components/Price';
import { ProductButton } from '@components/ProductButton';
import { useStickyState } from 'hooks';
import Link from 'next/link';
import styled from 'styled-components';
import { CartItem } from './CartItem/CartItem';

export function Cart({ isOpen, onClose }) {
  const [cart, setCart] = useStickyState([], 'cart');
  const total = cart.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
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
      <Link href="/cart" passHref>
        <ProductButton as="a" variant="primary">
          Checkout
        </ProductButton>
      </Link>
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
  /* identical to box height, or 167% */

  color: #000000;

  mix-blend-mode: normal;
  opacity: 0.5;
`;

const TotalValue = styled.p`
  font-size: 15px;
  line-height: 25px;
  /* identical to box height, or 167% */

  color: #000000;

  mix-blend-mode: normal;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0;
`;
