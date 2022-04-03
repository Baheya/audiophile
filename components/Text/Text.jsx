import styled from 'styled-components';

const TextStyles = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
color: ${(props) => (props.light ? '#fff' : '#000')};

  mix-blend-mode: normal;
  opacity: 0.5;
`;

export function Text({ light, tag, children }) {
  return (
    <TextStyles as={tag} light={light}>
      {children}
    </TextStyles>
  );
}
