import { getStoryblokApi, useStoryblokState } from '@storyblok/react';
import styled from 'styled-components';
import Head from 'next/head';

import { FeaturedProducts } from '@components/FeaturedProducts';
import { HeroSection } from '@components/HeroSection';
import { MissionStatement } from '@components/MissionStatement';
import { NavigationList } from '@components/NavigationList';

export default function Home({ story }) {
  story = useStoryblokState(story);
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="An online shop for all of your audio dreams."
        />
      </Head>

      <Wrapper>
        <HeroSection blok={story.content.body[0]} />
        <Section className="page-navigation">
          <NavigationList showNav={true} />
        </Section>
        <FeaturedProducts blok={story.content.body[1]} />
        <MissionStatement blok={story.content.body[2]} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: clamp(1.5rem, 8%, 18rem) 1fr clamp(1.5rem, 8%, 18rem);
  gap: 25px 0;
`;

const Section = styled.section`
  position: relative;
  grid-column: 2 / 3;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = 'home';

  // load the draft version
  let sbParams = {
    version: 'draft', // or 'published'
    resolve_relations:
      'hero_section.hero_product,product.category,gallery.featured_products,gallery_tile.product',
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}
