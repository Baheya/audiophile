import styled from 'styled-components';

const Title = styled.h1`
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 30px;
  /* padding-top: calc(90px + 30px); */

  color: #ffffff;
  background-color: #000;
  grid-column: 1 / -1;
`;

export function TitleBar({ title }) {
  return <Title>{title}</Title>;
}
