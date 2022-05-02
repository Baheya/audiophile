import { forwardRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

// eslint-disable-next-line react/display-name
const Button = forwardRef(
  ({ className, tag, href, variant, children, ...delegated }, ref) =>
    tag === 'a' ? (
      <Link href={href} passHref>
        <ButtonStyles
          href={href}
          ref={ref}
          as="a"
          className={className}
          variant={variant}
          {...delegated}
        >
          {children}
        </ButtonStyles>
      </Link>
    ) : (
      <ButtonStyles
        ref={ref}
        as={tag}
        className={className}
        variant={variant}
        {...delegated}
      >
        {children}
      </ButtonStyles>
    )
);

export { Button };

export const BaseButton = styled.button`
  width: 160px;
  height: 48px;
  text-transform: uppercase;
  font-size: 0.813rem;
  font-weight: 700;
  letter-spacing: 0.063rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const ButtonStyles = styled(BaseButton)`
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
        : 'var(--grey-600)'};
    border: ${(props) =>
      props.variant === 'secondary'
        ? '1px solid var(--black-200)'
        : '1px solid transparent'};
    color: var(--grey-100);
  }

  .cart & {
    width: 100%;
  }
`;
