import styled from 'styled-components';
import { getStoryblokApi, useStoryblokState } from '@storyblok/react';

import { Button } from '../components/Button';
import { MissionStatement } from '../components/MissionStatement';
import { NavigationList } from '../components/NavigationList';
import { Text } from '../components/Text';
import Link from 'next/link';

export default function Home() {
  return (
    <Wrapper>
      <FullscreenSection>
        <FullscreenContent>
          <Kicker>New Product</Kicker>
          <BigTitle light>XX99 Mark II Headphones</BigTitle>
          <Text light>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Text>
          <Link href="/products/headphones/xx99-mark-ii" passHref>
            <Button variant="primary" as="a">
              See Product
            </Button>
          </Link>
        </FullscreenContent>
      </FullscreenSection>
      <Section className="page-navigation">
        <NavigationList showNav={true} />
      </Section>
      <PatternedSection>
        <ProductImage
          aspectRatio={0.83}
          size="contain"
          image="/images/home/mobile/image-speaker-zx9.png"
          imageMd="/images/home/tablet/image-speaker-zx9.png"
          imageLg="/images/home/desktop/image-speaker-zx9.png"
          width="60%"
          widthMd="30%"
          widthLg="70%"
          margin="auto auto -2% 10%"
        />
        <Content>
          <BigTitle light>ZX9 SPEAKER</BigTitle>
          <Text light>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </Text>
          <Link href="/products/speakers/zx9" passHref>
            <Button as="a">See Product</Button>
          </Link>
        </Content>
      </PatternedSection>
      <SpeakerSection>
        <ContentLeftOverlay>
          <Title dark>ZX7 SPEAKER</Title>
          <Link href="/products/speakers/zx7" passHref>
            <Button variant="secondary" as="a">
              See Product
            </Button>
          </Link>
        </ContentLeftOverlay>
      </SpeakerSection>
      <EarphonesSection>
        <ProductImage
          image="/images/home/mobile/image-earphones-yx1.jpg"
          aspectRatio={1.635}
          size="contain"
          imageMd="/images/home/tablet/image-earphones-yx1.jpg"
          aspectRatioMd={1.059}
          sizeMd="cover"
          imageLg="/images/home/desktop/image-earphones-yx1.jpg"
          aspectRatioLg={1.687}
          sizeLg="contain"
        />
        <ContentLeft backgroundColor="#f1f1f1">
          <Title dark>YX1 EARPHONES</Title>
          <Link href="/products/earphones/yx1" passHref>
            <Button variant="secondary" as="a">
              See Product
            </Button>
          </Link>
        </ContentLeft>
      </EarphonesSection>
      <MissionStatement />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: clamp(1.5rem, 8%, 18rem) 1fr clamp(1.5rem, 8%, 18rem);
  gap: 25px 0;
`;

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

const FullscreenSection = styled(Section)`
  && {
    background: url('/images/home/mobile/image-header.jpg') no-repeat;
    background-position: center;
    background-size: cover;
    aspect-ratio: 0.625;
    grid-column: 1 / -1;
    border-radius: 0;

    @media (min-width: 768px) {
      background: url('/images/home/tablet/image-header.jpg') no-repeat;
      background-position: center;
      background-size: contain;
      aspect-ratio: 1.053;
      top: -3px;
    }

    @media (min-width: 1024px) {
      background: url('/images/home/desktop/image-hero.jpg') no-repeat;
      background-position: center;
      aspect-ratio: 1.975;
      background-size: contain;
    }
  }
`;

const PatternedSection = styled(Section)`
  background: url('/images/home/desktop/pattern-circles.svg') no-repeat;
  background-position: center;
  background-size: cover;
  aspect-ratio: 0.545;

  @media (min-width: 768px) {
    aspect-ratio: 0.956;
  }

  @media (min-width: 1024px) {
    aspect-ratio: 1.982;
    flex-direction: row;
  }
`;

const SpeakerSection = styled(Section)`
  background: url('/images/home/mobile/image-speaker-zx7.jpg') no-repeat;
  background-position: center;
  background-size: contain;
  aspect-ratio: 1.02;

  @media (min-width: 768px) {
    background: url('/images/home/tablet/image-speaker-zx7.jpg') no-repeat;
    aspect-ratio: 2.153;
    background-size: cover;
  }

  @media (min-width: 1024px) {
    background: url('/images/home/desktop/image-speaker-zx7.jpg') no-repeat;
    aspect-ratio: 3.468;
    background-size: cover;
  }
`;

const EarphonesSection = styled(Section)`
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ContentOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
`;

const FullscreenContent = styled(ContentOverlay)`
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  max-width: 330px;
  margin: auto;

  @media (min-width: 768px) {
    max-width: 400px;
  }

  @media (min-width: 1024px) {
    margin: auto auto auto clamp(1.5rem, 10%, 18rem);
    align-items: flex-start;
  }
`;

const ContentLeftOverlay = styled(ContentOverlay)`
  align-items: flex-start;
  padding: 1.5rem clamp(1rem, 7%, 6rem);
  gap: 2.5rem;
  justify-content: center;
`;

const Kicker = styled.span`
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
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

const BigTitle = styled(Title)`
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 1.28571px;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 56px;
    line-height: 58px;
    letter-spacing: 2px;
  }

  @media (min-width: 1024px) {
    text-align: start;
  }
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

const ContentLeft = styled(Content)`
  align-items: flex-start;
  padding: 3rem clamp(1rem, 7%, 6rem) 3rem;
  gap: 2.5rem;

  @media (min-width: 768px) {
    height: 100%;
  }
`;
