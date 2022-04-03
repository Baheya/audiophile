import styled from 'styled-components';
import Image from 'next/image';

import { ProductButton } from '../ProductButton';
import { Text } from '../Text';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: 2 / 3;
  gap: 2rem;

  @media (min-width: 768px) {
    gap: 3rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  box-sizing: content-box;
  display: ${(props) => (props.small ? 'block !important' : 'none !important')};

  @media (min-width: 768px) {
    display: ${(props) =>
      props.medium ? 'block !important' : 'none !important'};
  }

  @media (min-width: 1024px) {
    display: ${(props) =>
      props.large ? 'block !important' : 'none !important'};
  }

  & > div {
    border-radius: 8px;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 8px;
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
  buttonVariant,
}) {
  return (
    <Wrapper>
      <ImageWrapper small>
        <StyledImage width="654" height="704" alt="" src={image} />
      </ImageWrapper>
      <ImageWrapper medium>
        <StyledImage width="1378" height="704" alt="" src={imageMedium} />
      </ImageWrapper>
      <ImageWrapper large>
        <StyledImage width="1080" height="1120" alt="" src={imageLarge} />
      </ImageWrapper>
      <ContentWrapper>
        {kicker ? <Kicker>{kicker}</Kicker> : null}
        <Title>{title}</Title>
        <Text>{description}</Text>
        <ProductButton variant={buttonVariant} />
      </ContentWrapper>
    </Wrapper>
  );
}
