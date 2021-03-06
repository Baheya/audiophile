import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Button } from '@components/Button';
import { NumberField } from '@components/NumberField';

const Form = styled.form`
  display: flex;
  gap: 1rem;
`;

export function ProductForm({ product, compact, cart, setCart }) {
  const [productQuantity, setProductQuantity] = useState({
    quantity: 1,
    ...product,
  });

  useEffect(() => {
    if (compact) {
      addToCart();
    }
  }, [productQuantity]);

  function increaseQuantity() {
    setProductQuantity((prevState) => {
      const pricePerItem = prevState.price / prevState.quantity;
      return {
        ...productQuantity,
        price: Number(prevState.price) + pricePerItem,
        quantity: prevState.quantity + 1,
      };
    });
  }

  function decreaseQuantity() {
    setProductQuantity((prevState) => {
      const pricePerItem = prevState.price / prevState.quantity;
      return {
        ...productQuantity,
        price: Number(prevState.price) - pricePerItem,
        quantity: prevState.quantity - 1,
      };
    });
  }

  function addToCart() {
    const filteredCart = cart.filter((item) => product.name !== item.name);
    setCart([productQuantity, ...filteredCart]);
  }

  return (
    <Form onSubmit={addToCart}>
      <NumberField
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        label="Quantity"
        defaultValue={1}
        formatOptions={{
          style: 'decimal',
        }}
        compact={compact}
        product={productQuantity}
        minValue={1}
      />
      {!compact && <Button variant="primary">Add To Cart</Button>}
    </Form>
  );
}
