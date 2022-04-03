import styled from 'styled-components';

import { NavigationItem } from './NavigationItem';

import { constants } from '../../constants';

const NavigationMenuListStyles = styled.ul.attrs({
  id: 'products-dropdown',
})`
  list-style: none;
  display: grid;
  grid-gap: 10px;
  width: 100%;
  background-color: var(--grey-100);
  padding: 20px 0;
  transform: ${(props) =>
    props.showNav ? 'translateX(0)' : 'translateX(-100%)'};
  transform-origin: top center;
  opacity: ${(props) => (props.showNav ? 1 : 0)};
  transition: 280ms all ease-out;
  visibility: ${(props) => (props.showNav ? 'visible' : 'hidden')};
  z-index: 2;
  grid-template-columns: 1fr;
  position: relative;
  top: initial;
  margin: 3rem 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    padding: 0;
    grid-gap: 20px;
  }

  .header & {
    grid-template-columns: minmax(10px, 30px) minmax(200px, 1fr) minmax(
        10px,
        30px
      );
    position: absolute;
    top: calc(100% - 0.25rem);
    left: 0;
    right: 0;
    @media (min-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      padding: 20px max(10px, 30px);
      grid-gap: 20px;
      transform: ${(props) =>
        props.showNav ? 'rotateX(0)' : 'rotateX(-90deg)'};
    }
    @media (min-width: 1024px) {
      visibility: visible;
      display: flex;
      position: static;
      grid-template-columns: none;
      grid-gap: 0;
      padding: 0;
      width: 100%;
      background: none;
      opacity: 1;
      transform: initial;
      max-width: 400px;
    }
  }
`;

export function NavigationList({ showNav, isBiggerThanTablet, className }) {
  return (
    <NavigationMenuListStyles className={className} showNav={showNav}>
      {constants.navigation.map((page, i) => (
        <NavigationItem
          key={i}
          pageName={page.name}
          pageImage={page.image}
          pagePath={page.path}
          isBiggerThanTablet={isBiggerThanTablet}
        />
      ))}
    </NavigationMenuListStyles>
  );
}
