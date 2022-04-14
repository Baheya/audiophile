import styled from 'styled-components';
import Image from 'next/image';

import { ProductButton } from '../ProductButton';
import { Text } from '../Text';
import { ProductImage } from '../ProductImage/ProductImage';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: 2 / 3;
  gap: 2rem;
  position: relative;

  @media (min-width: 768px) {
    gap: 3rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  gap: 1.5rem;

  @media (min-width: 768px) {
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    align-items: flex-start;
    text-align: start;
  }
`;

const Kicker = styled.span`
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 10px;
  text-transform: uppercase;

  color: #d87d4a;
`;

const Title = styled.h2`
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: #000000;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.42857px;
  }
`;

export function ProductCard({
  image,
  imageMedium,
  imageLarge,
  kicker,
  title,
  description,
  slug,
}) {
  return (
    <Wrapper className="product-card">
      <ProductImage
        image={image}
        imageMedium={imageMedium}
        imageLarge={imageLarge}
      />
      <ContentWrapper>
        {kicker ? <Kicker>New Product</Kicker> : null}
        <Title>{title}</Title>
        <Text>{description}</Text>
        <ProductButton as="a" href={slug} variant="primary" />
      </ContentWrapper>
    </Wrapper>
  );
}
