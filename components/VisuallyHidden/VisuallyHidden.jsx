import styled from 'styled-components';

export function VisuallyHidden({ tag, children }) {
  return <VisuallyHiddenElement as={tag}>{children}</VisuallyHiddenElement>;
}

const VisuallyHiddenElement = styled.span`
  position: absolute;
  clip: rect(0, 0, 0, 0);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
  margin: -1px;
`;
