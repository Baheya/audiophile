import styled from 'styled-components';

import { MissionStatement } from '../components/MissionStatement';
import { NavigationList } from '../components/NavigationList';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { TitleBar } from '../components/TitleBar';

import productOne from '../public/images/category-speakers/mobile/image-zx9.jpg';
import productTwo from '../public/images/category-speakers/mobile/image-zx7.jpg';

import productOneMedium from '../public/images/category-speakers/tablet/image-zx9.jpg';
import productTwoMedium from '../public/images/category-speakers/tablet/image-zx7.jpg';

import productOneLarge from '../public/images/category-speakers/desktop/image-zx9.jpg';
import productTwoLarge from '../public/images/category-speakers/desktop/image-zx7.jpg';

export default function Speakers() {
  return (
    <Wrapper>
      <TitleBar title="Speakers" />
      <ProductCard
        image={productOne}
        imageMedium={productOneMedium}
        imageLarge={productOneLarge}
        kicker="New Product"
        title="ZX9 speaker"
        description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        buttonVariant="primary"
      />
      <ProductCard
        image={productTwo}
        imageMedium={productTwoMedium}
        imageLarge={productTwoLarge}
        title="ZX7 SPEAKER"
        description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
        buttonVariant="primary"
      />
      <Section>
        <NavigationList showNav={true} />
      </Section>
      <MissionStatement />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: clamp(1.5rem, 8%, 18rem) 1fr clamp(1.5rem, 8%, 18rem);
  gap: 25px 0;
`;

export const Section = styled.section`
  position: relative;
  grid-column: 2 / 3;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;
