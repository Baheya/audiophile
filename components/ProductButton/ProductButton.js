import styled from 'styled-components';
import { ButtonStyles } from '../ButtonStyles';

const ProductButtonStyles = styled(ButtonStyles)`
  text-decoration: none;
  border: ${(props) =>
    props.variant === 'primary'
      ? '1px solid transparent'
      : '1px solid var(--black-200)'};
  background-color: ${(props) =>
    props.variant === 'primary'
      ? 'var(--orange-200)'
      : props.variant === 'secondary'
      ? 'transparent'
      : 'var(--black-200)'};
  color: ${(props) =>
    props.variant === 'primary'
      ? 'var(--grey-100)'
      : props.variant === 'secondary'
      ? 'var(--black-200)'
      : 'var(--grey-100)'};

  &:hover {
    background-color: ${(props) =>
      props.variant === 'primary'
        ? 'var(--orange-100)'
        : props.variant === 'secondary'
        ? 'var(--black-200)'
        : 'var(--grey-100)'};
    color: var(--grey-100);
  }
`;

export function ProductButton({ className, tag, href, variant, ...delegated }) {
  return (
    <ProductButtonStyles
      as={tag}
      href={href}
      className={className}
      variant={variant}
      {...delegated}
    >
      See Product
    </ProductButtonStyles>
  );
}
