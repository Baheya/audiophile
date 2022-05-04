import styled from 'styled-components';

import { Button } from '../Button';
import { Kicker } from '@components/Kicker';
import { ProductImage } from '../ProductImage/ProductImage';
import { Text } from '../Text';

export function ProductCard({
  image,
  imageMedium,
  imageLarge,
  kicker,
  title,
  description,
  slug,
  index,
}) {
  return (
    <Wrapper className="product-card">
      <ProductImage
        priority={index === 0 ? true : false}
        image={image}
        imageMedium={imageMedium}
        imageLarge={imageLarge}
      />
      <ContentWrapper>
        {kicker ? <Kicker>New Product</Kicker> : null}
        <Title>{title}</Title>
        <Text>{description}</Text>
        <Button tag="a" href={slug} variant="primary">
          See Product
        </Button>
      </ContentWrapper>
    </Wrapper>
  );
}

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
