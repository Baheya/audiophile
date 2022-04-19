import { ProductButton } from '@components/ProductButton';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;

const ImageWrapper = styled.picture`
  width: 100%;
`;

const StyledImage = styled.img`
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h2`
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  letter-spacing: 1.71429px;
  text-transform: uppercase;

  color: #000000;
`;

export function RelatedProduct({ image, name, slug }) {
  return (
    <Wrapper>
      <ImageWrapper>
        <source
          media="(min-width: 1024px)"
          srcSet={`${image[2].filename}/m/350x318/`}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${image[1].filename}/m/223x318/`}
        />
        <StyledImage alt="" src={`${image[0].filename}/m/327x120/`} />
      </ImageWrapper>
      <Title>{name}</Title>
      <ProductButton tag="a" variant="primary" href={slug}>
        See Product
      </ProductButton>
    </Wrapper>
  );
}
