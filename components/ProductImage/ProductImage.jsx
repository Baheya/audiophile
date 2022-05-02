import Image from 'next/image';
import styled from 'styled-components';

export function ProductImage({ image, imageMedium, imageLarge }) {
  return (
    <>
      <ImageWrapper small>
        <StyledImage layout="fill" alt="" src={image} />
      </ImageWrapper>
      <ImageWrapper medium>
        <StyledImage layout="fill" alt="" src={imageMedium ?? image} />
      </ImageWrapper>
      <ImageWrapper large>
        <StyledImage
          layout="fill"
          alt=""
          src={imageLarge ?? imageMedium ?? image}
        />
      </ImageWrapper>
    </>
  );
}

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: ${(props) => (props.small ? 'block !important' : 'none !important')};
  aspect-ratio: 0.929;

  .product-detail-card & {
    aspect-ratio: 1;
  }

  @media (min-width: 768px) {
    display: ${(props) =>
      props.medium ? 'block !important' : 'none !important'};
    aspect-ratio: 1.957;

    .product-detail-card & {
      aspect-ratio: 0.585;
    }
  }

  @media (min-width: 1024px) {
    aspect-ratio: 0.964;
    display: ${(props) =>
      props.large ? 'block !important' : 'none !important'};

    .product-detail-card & {
      aspect-ratio: 1;
    }
  }
`;

const StyledImage = styled(Image)`
  border-radius: 8px;
`;
