import styled from 'styled-components';
import { ButtonStyles } from '../ButtonStyles';

const ProductButtonStyles = styled(ButtonStyles)`
  border: ${(props) => (props.primary ? 'none' : '1px solid var(--black-200)')};
  background-color: ${(props) =>
    props.primary ? 'var(--orange-200)' : 'var(--grey-100)'};
  color: ${(props) => (props.primary ? 'var(--grey-100)' : 'var(--black-200)')};

  &:hover {
    background-color: ${(props) =>
      props.primary ? 'var(--orange-100)' : 'var(--black-200)'};
    color: var(--grey-100);
  }
`;

export function ProductButton({ className, primary }) {
  return (
    <ProductButtonStyles className={className} primary={primary}>
      See Product
    </ProductButtonStyles>
  );
}
