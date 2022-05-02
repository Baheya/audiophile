import styled from 'styled-components';
import Image from 'next/image';

import { Price } from '@components/Price';
import { ProductForm } from '@components/ProductForm';

export function CartItem({
  image,
  name,
  price,
  quantity,
  cart,
  setCart,
  readOnly,
}) {
  return (
    <Wrapper className="cart-item">
      <Wrapper as="div">
        <Image width={64} height={64} src={image} alt="" />
        <Stack>
          <Name>{name}</Name>
          <Price amount={price} />
        </Stack>
      </Wrapper>
      {readOnly ? (
        <Quantity>{`x${quantity}`}</Quantity>
      ) : (
        <ProductForm
          cart={cart}
          setCart={setCart}
          product={{ name, price, quantity, thumbnail: image }}
          compact
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const Name = styled.h3`
  font-size: 15px;
  line-height: 25px;
  color: #000000;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
`;

const Quantity = styled.p`
  font-size: 15px;
  line-height: 25px;
  text-align: right;

  color: #000000;

  mix-blend-mode: normal;
  opacity: 0.5;
`;
