import styled from 'styled-components';

import { Button } from '@components/Button';
import { Kicker } from '@components/Kicker';
import { Text } from '@components/Text';
import { Title } from '@components/Title';
import { DynamicImage } from '@components/DynamicImage';

export function HeroSection({ blok }) {
  return (
    <FullscreenSection className="hero_section">
      <DynamicImage
        image={[
          `${blok.background_image[0].filename}/m/`,
          `${blok.background_image[1].filename}/m/`,
          `${blok.background_image[2].filename}/m/`,
        ]}
      />
      <FullscreenContent>
        <Kicker light>New Product</Kicker>
        <Title variant="lg" tag="h3" light>
          {blok.hero_product.content.name}{' '}
          {blok.hero_product.content.category.name}
        </Title>
        <Text blok={blok.description[0]} light />
        <Button variant="primary" tag="a" href={blok.hero_product.full_slug}>
          See Product
        </Button>
      </FullscreenContent>
    </FullscreenSection>
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

const FullscreenSection = styled(Section)`
  && {
    /* background: url('/images/home/mobile/image-header.jpg') no-repeat; */
    background-position: center;
    background-size: cover;
    aspect-ratio: 0.625;
    grid-column: 1 / -1;
    border-radius: 0;

    @media (min-width: 768px) {
      /* background: url('/images/home/tablet/image-header.jpg') no-repeat; */

      background-position: center;
      background-size: contain;
      aspect-ratio: 1.053;
      top: -3px;
    }

    @media (min-width: 1024px) {
      /* background: url('/images/home/desktop/image-hero.jpg') no-repeat; */

      background-position: center;
      aspect-ratio: 1.975;
      background-size: contain;
    }
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
  text-align: center;

  @media (min-width: 768px) {
    max-width: 400px;
  }

  @media (min-width: 1024px) {
    margin: auto auto auto clamp(1.5rem, 10%, 18rem);
    align-items: flex-start;
  }
`;
