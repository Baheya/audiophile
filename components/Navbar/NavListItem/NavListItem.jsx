import styled from 'styled-components';
import Link from 'next/link';

import { ShopLink } from '../../ShopLink';

const ListItem = styled.li`
  grid-column: 2 / -2;
  width: 100%;
  position: relative;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  z-index: 2;
  font-size: 0.938rem;
  text-transform: uppercase;
  color: var(--black-200);
  font-weight: 700;
  letter-spacing: 1px;

  @media (min-width: 768px) {
    grid-column: auto;
  }

  @media (min-width: 1024px) {
    grid-column: none;
    height: auto;
  }
`;

const ProductOverlay = styled.div`
  position: absolute;
  width: 150px;
  height: 100%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 0;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const ProductBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--grey-300);
  height: 150px;
  width: 100%;
  z-index: -1;
  border-radius: 10px;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const StyledLink = styled.a`
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
  font-size: 12px;

  &:hover {
    color: var(--orange-200);
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

export function NavListItem({
  pageImage,
  pageName,
  isBiggerThanTablet,
  pagePath = '/',
}) {
  return (
    <>
      {!isBiggerThanTablet && pageImage ? (
        <ListItem>
          <>
            {pageName}
            <ShopLink
              tabIndex="0"
              className="nav-link"
              aria-describedby="headphones"
              tag="a"
            />
            <ProductOverlay img={pageImage} />
            <ProductBackground />
          </>
        </ListItem>
      ) : (
        isBiggerThanTablet && (
          <ListItem>
            <Link href={pagePath} passHref>
              <StyledLink className="nav-link" href={pagePath}>
                {pageName}
              </StyledLink>
            </Link>
          </ListItem>
        )
      )}
    </>
  );
}
