import styled from 'styled-components';

export function Kicker({ children, light }) {
  return <KickerStyles light={light}>{children}</KickerStyles>;
}

const KickerStyles = styled.span`
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: ${(props) => (props.light ? '#fff' : 'var(--orange-200, #d87d4a)')};
  mix-blend-mode: normal;
  opacity: 0.5;
`;
