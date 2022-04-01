import styled from 'styled-components';

import { Logo } from '../Logo';
import { NavigationLink } from '../NavigationLink';
import { SocialMediaIcon } from '../SocialMediaIcon';

import { constants } from '../../constants';

export function Footer() {
  return (
    <FooterStyles>
      <Logo />
      <FooterNavigation>
        <FooterMenuList>
          {constants.navigation.map((page, i) => (
            <FooterMenuItem key={i}>
              <FooterMenuLink href={page.path}>{page.name}</FooterMenuLink>
            </FooterMenuItem>
          ))}
        </FooterMenuList>
      </FooterNavigation>
      <FooterMenuText>
        {`Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.`}
      </FooterMenuText>
      <FooterMenuCopyright>
        Copyright 2021. All Rights Reserved
      </FooterMenuCopyright>
      <FooterMenuListRow>
        <FooterMenuItem>
          <NavigationLink href="#">
            <SocialMediaIcon icon="facebook" />
          </NavigationLink>
        </FooterMenuItem>
        <FooterMenuItem>
          <NavigationLink href="#">
            <SocialMediaIcon icon="instagram" />
          </NavigationLink>
        </FooterMenuItem>
        <FooterMenuItem>
          <NavigationLink href="#">
            <SocialMediaIcon icon="twitter" />
          </NavigationLink>
        </FooterMenuItem>
      </FooterMenuListRow>
    </FooterStyles>
  );
}

const FooterStyles = styled.footer`
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  padding: 2.5rem clamp(1.5rem, 8%, 6rem);
  position: relative;

  &::before {
    content: '';
    height: 4px;
    width: 100px;
    position: absolute;
    top: 0;
    background-color: var(--orange-200);
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    &::before {
      left: clamp(1.5rem, 8%, 6rem);
    }
  }
`;

const FooterNavigation = styled.nav`
  @media (min-width: 768px) {
    grid-column: 1 / -1;
  }

  @media (min-width: 1024px) {
    margin-inline-start: auto;
    grid-column: 2 / -1;
  }
`;

const FooterMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0;
  list-style: none;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    place-self: end;
    align-items: baseline;
  }
`;

const FooterMenuItem = styled.li``;

const FooterMenuLink = styled(NavigationLink)`
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 2px;
`;

const FooterMenuText = styled.p`
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;

  @media (min-width: 768px) {
    text-align: start;
    grid-column: 1 / -1;
  }

  @media (min-width: 1024px) {
    grid-column: 1 / 2;
  }
`;

const FooterMenuCopyright = styled.small`
  font-size: 15px;
  line-height: 25px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;

  @media (min-width: 1024px) {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
`;

const FooterMenuListRow = styled(FooterMenuList)`
  flex-direction: row;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
  }

  @media (min-width: 1024px) {
    place-self: end;
  }
`;
