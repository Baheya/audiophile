import styled from 'styled-components';

import { FeaturedProduct } from './FeaturedProduct';

export function FeaturedProducts({ blok }) {
  return (
    <FeaturedProductsSection>
      {blok.gallery_tiles.map((item, i) => (
        <FeaturedProduct
          highlight={i === 0}
          background={item.background_image}
          product={item.product}
          description={item.description[0]}
          key={item._uid}
        />
      ))}
    </FeaturedProductsSection>
  );
}

const FeaturedProductsSection = styled.section`
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px 0;

  & > :nth-child(1) {
    aspect-ratio: 0.545;
    background-size: cover;
    & > picture:first-child {
      background-size: contain;
      aspect-ratio: 0.83;
      width: auto;
      height: auto;
      max-width: 170px;

      @media (min-width: 768px) {
        max-width: 200px;
      }

      @media (min-width: 1024px) {
        max-width: 410px;
        margin: auto auto -2% 10%;
      }
    }

    @media (min-width: 768px) {
      aspect-ratio: 0.956;
    }

    @media (min-width: 1024px) {
      aspect-ratio: 1.982;
      flex-direction: row;
      background-size: cover;
    }
  }

  & > :nth-child(2) {
    aspect-ratio: 1.02;

    @media (min-width: 768px) {
      aspect-ratio: 2.153;
      background-size: cover;
    }

    @media (min-width: 1024px) {
      aspect-ratio: 3.468;
    }

    & > div:first-of-type {
      align-items: flex-start;
    }
  }

  & > :nth-child(3) {
    flex-direction: column;
    gap: 1rem;

    & > picture:first-child {
      background-size: cover;
      aspect-ratio: 1.635;

      @media (min-width: 768px) {
        aspect-ratio: 1.059;
      }

      @media (min-width: 1024px) {
        aspect-ratio: 1.687;
        background-size: contain;
      }
    }

    & > div:last-child {
      height: 100%;
      background-color: var(--grey-300, #f1f1f1);
    }

    & > div:first-of-type {
      align-items: flex-start;
    }

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
`;
