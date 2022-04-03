import styled from 'styled-components';

import { Text } from '../Text';

export function MissionStatement() {
  return (
    <MissionStatementSection>
      <ProductImage
        image="/images/shared/mobile/image-best-gear.jpg"
        aspectRatio={1.09}
        size="contain"
        imageMd="/images/shared/tablet/image-best-gear.jpg"
        aspectRatioMd={2.296}
        imageLg="/images/shared/desktop/image-best-gear.jpg"
        aspectRatioLg={0.918}
      />
      <Content>
        <MissionStatementTitle dark>
          Bringing you the <OrangeHighlight>best</OrangeHighlight> audio gear
        </MissionStatementTitle>
        <Text>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Text>
      </Content>
    </MissionStatementSection>
  );
}

const Section = styled.section`
  position: relative;
  grid-column: 2 / 3;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  color: #000000;
`;

const MissionStatementTitle = styled(Title)`
  @media (min-width: 1024px) {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.42857px;
    text-align: start;
  }
`;

const OrangeHighlight = styled.span`
  color: var(--orange-200);
`;

const ProductImage = styled.div`
  background: ${(props) => `url(${props.image}) no-repeat`};
  background-size: ${(props) => props.size};
  aspect-ratio: ${(props) => props.aspectRatio};
  width: ${(props) => (props.width ? props.width : '100%')};
  border-radius: 7px;

  @media (min-width: 768px) {
    background: ${(props) =>
      props.imageMd
        ? `url(${props.imageMd}) no-repeat`
        : `url(${props.image}) no-repeat`};
    background-size: ${(props) => props.sizeMd ?? props.size};
    aspect-ratio: ${(props) => props.aspectRatioMd ?? props.aspectRatio};
    width: ${(props) => (props.widthMd ? props.widthMd : props.width)};
  }

  @media (min-width: 1024px) {
    background: ${(props) =>
      props.imageLg ? `url(${props.imageLg}) no-repeat` : 'none'};
    background-position: center;
    background-size: ${(props) => props.sizeLg ?? props.size};
    aspect-ratio: ${(props) => props.aspectRatioLg ?? props.aspectRatio};
    width: ${(props) => props.widthLg ?? props.width};
    margin: ${(props) => props.margin};
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

  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`;

const MissionStatementSection = styled(Section)`
  margin: 3rem 0;
  @media (min-width: 1024px) {
    flex-direction: row-reverse;
  }
`;
