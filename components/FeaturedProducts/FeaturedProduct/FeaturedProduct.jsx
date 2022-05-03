import styled from 'styled-components';

import { Button } from '@components/Button';
import { DynamicImage } from '@components/DynamicImage';
import { Text } from '@components/Text';
import { Title } from '@components/Title';

export function FeaturedProduct({
  product,
  description,
  background,
  highlight,
}) {
  return (
    <FeaturedProductContainer background={background}>
      {product.content.product_showcase_image.length ? (
        <DynamicImage
          image={[
            `${product.content.product_showcase_image[0].filename}/m/`,
            `${product.content.product_showcase_image[1].filename}/m/`,
            `${product.content.product_showcase_image[2].filename}/m/`,
          ]}
        />
      ) : null}
      <Content>
        <Title tag="h3" variant={highlight && 'lg'}>
          {product.content.name} {product.content.category.name}
        </Title>
        <Text blok={description} />
        <Button
          variant={highlight ? 'tertiary' : 'secondary'}
          tag="a"
          href={product.full_slug}
        >
          See Product
        </Button>
      </Content>
    </FeaturedProductContainer>
  );
}

const FeaturedProductContainer = styled.section`
  position: relative;
  grid-column: 1 / 2;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.background?.[0]
      ? `url(${props.background[0].filename}/m/) no-repeat`
      : 'none'};
  background-position: center;
  background-size: contain;

  overflow: hidden;

  @media (min-width: 768px) {
    background-image: ${(props) =>
      props.background?.[0]
        ? `url(${
            props.background?.[1]?.filename ?? props.background?.[0]?.filename
          })/m/`
        : 'none'};
  }

  @media (min-width: 1024px) {
    background-image: ${(props) =>
      props.background?.[0]
        ? `url(${
            props.background?.[2]?.filename ??
            props.background?.[1]?.filename ??
            props.background?.[0]?.filename
          })/m/`
        : 'none'};
  }
`;

const Content = styled.div`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 7px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem clamp(1rem, 7%, 6rem);
  gap: 1.5rem;
  text-align: center;

  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`;
