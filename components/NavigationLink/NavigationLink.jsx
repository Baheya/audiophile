import styled from 'styled-components';
import Link from 'next/link';
import { VisuallyHidden } from '@components/VisuallyHidden';

export function NavigationLink({
  path,
  children,
  className,
  label,
  ...delegated
}) {
  return (
    <Link href={path} passHref prefetch={false} {...delegated}>
      <StyledLink className={`nav-link ${className ?? ''}`}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </StyledLink>
    </Link>
  );
}

const StyledLink = styled.a`
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
  display: block;

  &:hover {
    color: var(--orange-200);
    transition: 0.4s;
  }
`;
