import styled from 'styled-components';
import { storyblokEditable } from '@storyblok/react';
import { render } from 'storyblok-rich-text-react-renderer';

export function Title({ blok, variant, tag, children }) {
  return blok ? (
    <>
      {variant === 'lg' ? (
        <BigTitle as={blok.tag} {...storyblokEditable(blok)}>
          {render(blok.content)}
        </BigTitle>
      ) : (
        <TitleStyles as={blok.tag} {...storyblokEditable(blok)}>
          {render(blok.content)}
        </TitleStyles>
      )}
    </>
  ) : (
    <>
      {variant === 'lg' ? (
        <BigTitle as={tag}>{children}</BigTitle>
      ) : (
        <TitleStyles as={tag}>{children}</TitleStyles>
      )}
    </>
  );
}

const TitleStyles = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #000000;

  & .orange_highlight {
    color: var(--orange-200, #d87d4a);
  }
`;

const BigTitle = styled(TitleStyles)`
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
