import styled from 'styled-components';

import { MissionStatement } from '../components/MissionStatement';
import { NavigationList } from '../components/NavigationList';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { TitleBar } from '../components/TitleBar/TitleBar';

import productOne from '../public/images/category-headphones/mobile/image-xx99-mark-two.jpg';
import productTwo from '../public/images/category-headphones/mobile/image-xx99-mark-one.jpg';
import productThree from '../public/images/category-headphones/mobile/image-xx59.jpg';

import productOneMedium from '../public/images/category-headphones/tablet/image-xx99-mark-two.jpg';
import productTwoMedium from '../public/images/category-headphones/tablet/image-xx99-mark-one.jpg';
import productThreeMedium from '../public/images/category-headphones/tablet/image-xx59.jpg';

import productOneLarge from '../public/images/category-headphones/desktop/image-xx99-mark-two.jpg';
import productTwoLarge from '../public/images/category-headphones/desktop/image-xx99-mark-one.jpg';
import productThreeLarge from '../public/images/category-headphones/desktop/image-xx59.jpg';

export default function Headphones() {
  return (
    <Wrapper>
      <TitleBar title="Headphones" />
      <ProductCard
        image={productOne}
        imageMedium={productOneMedium}
        imageLarge={productOneLarge}
        kicker="New Product"
        title="XX99 Mark II Headphones"
        description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound."
        buttonVariant="primary"
      />
      <ProductCard
        image={productTwo}
        imageMedium={productTwoMedium}
        imageLarge={productTwoLarge}
        title="XX99 Mark I Headphones"
        description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
        buttonVariant="primary"
      />
      <ProductCard
        image={productThree}
        imageMedium={productThreeMedium}
        imageLarge={productThreeLarge}
        title="XX59 Headphones"
        description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
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
