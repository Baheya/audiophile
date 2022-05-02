import styled from 'styled-components';

export function Gallery({ images }) {
  return (
    <Wrapper>
      <ImageWrapper small>
        <source
          media="(min-width: 1024px)"
          srcSet={`${images[0].filename}/m/445x280/`}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${images[0].filename}/m/277x174/`}
        />
        <StyledImage alt="" src={`${images[0].filename}/m/327x174/`} />
      </ImageWrapper>
      <ImageWrapper small>
        <source
          media="(min-width: 1024px)"
          srcSet={`${images[1].filename}/m/445x280/`}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${images[1].filename}/m/277x174/`}
        />
        <StyledImage alt="" src={`${images[1].filename}/m/327x174/`} />
      </ImageWrapper>
      <ImageWrapper>
        <source
          media="(min-width: 1024px)"
          srcSet={`${images[2].filename}/m/635x592/`}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${images[2].filename}/m/395x368/`}
        />
        <StyledImage src={`${images[2].filename}/m/327x368/`} alt="" />
      </ImageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1.31fr 2fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1.37fr 58%;
    aspect-ratio: 1.875;
    gap: 1.875rem;
  }
`;

const ImageWrapper = styled.picture`
  @media (min-width: 768px) {
    height: 100%;
    grid-column: ${(props) => (props.small ? '1 / 2' : '2 / 3')};
    grid-row: ${(props) => (props.small ? 'auto' : '1 / 3')};
  }
`;

const StyledImage = styled.img`
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
