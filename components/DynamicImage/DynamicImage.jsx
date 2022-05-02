import styled from 'styled-components';

export function DynamicImage({ image }) {
  return (
    <ImageWrapper>
      <source media="(min-width: 1024px)" srcSet={image[2]} />
      <source media="(min-width: 768px)" srcSet={image[1]} />
      <StyledImage alt="" src={image[0]} />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.picture`
  width: 100%;
  height: auto;
`;

const StyledImage = styled.img`
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
