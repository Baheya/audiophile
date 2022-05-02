import { DynamicImage } from '@components/DynamicImage';
import { Title } from '@components/Title';
import styled from 'styled-components';
import { storyblokEditable } from '@storyblok/react';

import { Text } from '../Text';

export function MissionStatement({ blok }) {
  return (
    <MissionStatementSection {...storyblokEditable(blok)}>
      <DynamicImage
        image={[
          `${blok.image[0].image[0].filename}/m/327x300`,
          `${blok.image[0].image[1].filename}/m/698x300`,
          `${blok.image[0].image[2].filename}/m/540x588`,
        ]}
      />
      <Content>
        <Title blok={blok.title[0]} />
        <Text blok={blok.content[0]} />
      </Content>
    </MissionStatementSection>
  );
}

const Section = styled.section`
  position: relative;
  grid-column: 2 / 3;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  overflow: hidden;
`;

const Content = styled.div`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 7px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem clamp(1rem, 7%, 6rem);
  gap: 1.5rem;
  text-align: center;

  @media (min-width: 1024px) {
    align-items: flex-start;
    text-align: start;
  }
`;

const MissionStatementSection = styled(Section)`
  margin: 3rem 0;
  @media (min-width: 1024px) {
    flex-direction: row-reverse;
  }
`;
