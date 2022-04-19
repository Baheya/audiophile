/* eslint-disable react/display-name */
import styled from 'styled-components';

import { Button } from '../Button';
import { ProductImage } from '../ProductImage';
import { Text } from '../Text';
import { NumberField } from '../NumberField';

import { render, NODE_UL, NODE_LI } from 'storyblok-rich-text-react-renderer';
import { Gallery } from '@components/Gallery';
import { ProductForm } from '@components/ProductForm';
import { ClientOnly } from '@components/ClientOnly';
import { Price } from '@components/Price';
import { ControlledProductForm } from '@components/ControlledProductForm';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: 2 / 3;
  gap: 2rem;
  width: 100%;

  @media (min-width: 768px) {
    gap: 3rem;
  }

  @media (min-width: 1024px) {
    gap: 8rem;
  }
`;

const VerticalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  text-align: start;
  width: 100%;

  gap: 1.5rem;
  max-width: 450px;

  @media (min-width: 768px) {
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    align-items: flex-start;
    text-align: start;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 4rem;
  }
  @media (min-width: 1024px) {
    gap: 6rem;
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

  color: var(--black-200, #000);

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.42857px;
  }
`;

const Form = styled.form`
  display: flex;
  gap: 1rem;
`;

const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;

  letter-spacing: 1.28571px;
  text-transform: uppercase;

  color: var(--black-200, #000);
  white-space: nowrap;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 36px;
  }
`;

const IncludedWithProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    gap: 30%;
  }

  @media (min-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Item = styled.li`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: #000000;

  mix-blend-mode: normal;
  opacity: 0.5;

  .span {
    font-size: 15px;
    line-height: 25px;
    color: var(--orange-200, #d87d4a);
    opacity: 1;
  }
`;

const Quantity = styled.span`
  font-size: 15px;
  line-height: 25px;
  color: var(--orange-200, #d87d4a);
  opacity: 1;
`;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
    & > * {
      margin-inline-end: 8rem;
    }
  }
`;

export function ProductDetailCard({
  image,
  imageMedium,
  imageLarge,
  imageOne,
  imageTwo,
  imageThree,
  kicker,
  title,
  description,
  price,
  features,
  includedInBox,
  productImages,
  galleryImages,
  thumbnail,
  ...props
}) {
  return (
    <Wrapper className="product-detail-card">
      <ContentWrapper>
        <ProductImage
          image={productImages[0].filename}
          imageMedium={productImages[1].filename}
          imageLarge={productImages[2].filename}
        />
        <VerticalContentWrapper>
          {kicker ? <Kicker>New Product</Kicker> : null}
          <Title>{title}</Title>
          <Text>{description}</Text>
          <Price amount={price} />
          <ClientOnly>
            <ControlledProductForm
              product={{ name: title, price, thumbnail: thumbnail }}
            />
          </ClientOnly>
        </VerticalContentWrapper>
      </ContentWrapper>
      <LayoutWrapper>
        <Features>
          <FeatureTitle>Features</FeatureTitle>
          <Text>{features}</Text>
        </Features>
        <IncludedWithProduct>
          <FeatureTitle>In the Box</FeatureTitle>
          {render(includedInBox, {
            nodeResolvers: {
              [NODE_UL]: (children) => <List>{children}</List>,
              [NODE_LI]: (children) => <Item>{children}</Item>,
            },
          })}
        </IncludedWithProduct>
      </LayoutWrapper>
      <Gallery images={galleryImages} />
    </Wrapper>
  );
}
