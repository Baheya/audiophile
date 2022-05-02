import styled from 'styled-components';
import Link from 'next/link';

export function NavigationLink({ path, children, className, ...delegated }) {
  return (
    <Link href={path} passHref {...delegated}>
      <StyledLink className={`nav-link ${className ?? ''}`} href={path}>
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

  &:focus {
    outline: 1px solid var(--orange-200);
    transition: outline-offset 0.25s ease;
  }
  &:focus:not(:active) {
    outline: 1px solid var(--orange-200);
    outline-offset: 5px;
  }
`;
