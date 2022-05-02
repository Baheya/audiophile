import styled from 'styled-components';
import { storyblokEditable } from '@storyblok/react';

export function Text({ blok, light, tag, children }) {
  return blok ? (
    <TextStyles
      {...storyblokEditable(blok)}
      as={blok.tag}
      light={blok.light}
      alignment={blok.alignment}
    >
      {blok.content}
    </TextStyles>
  ) : (
    <TextStyles as={tag} light={light}>
      {children}
    </TextStyles>
  );
}

const TextStyles = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: ${(props) => (props.light ? '#fff' : '#000')};

  mix-blend-mode: normal;
  opacity: 0.5;

  @media (min-width: 1024px) {
    text-align: start;
  }
`;
