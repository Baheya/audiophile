import styled from 'styled-components';

const MenuButtonIconStyles = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 100 100',
  x: '0px',
  y: '0px',
  fill: '#fff',
  'aria-hidden': 'true',
})`
  width: 100%;
  height: 100%;
`;

export const MenuButtonIcon = () => {
  return (
    <MenuButtonIconStyles>
      <path d="M80,28H20a3,3,0,0,1,0-6H80a3,3,0,0,1,0,6Z" />
      <path d="M80,53H20a3,3,0,0,1,0-6H80a3,3,0,0,1,0,6Z" />
      <path d="M80,78H20a3,3,0,0,1,0-6H80a3,3,0,0,1,0,6Z" />
    </MenuButtonIconStyles>
  );
};
