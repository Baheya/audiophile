import styled from 'styled-components';
import { getStoryblokApi, useStoryblokState } from '@storyblok/react';
import { useRouter } from 'next/router';

import { MissionStatement } from '@components/MissionStatement';
import { NavigationList } from '@components/NavigationList';
import { TitleBar } from '@components/TitleBar';
import { ProductDetailCard } from '@components/ProductDetailCard';

export default function Earphones({ stories: initialStories }) {
  const stories = useStoryblokState(initialStories);
  const router = useRouter();
  const { category } = router.query;

  return (
    <Wrapper>
      <TitleBar title={category} />
      {stories.map((story) => (
        <ProductDetailCard
          key={story.id}
          slug={`/${story.full_slug}`}
          image={story.content.product_detail_images[0].filename}
          imageMedium={story.content.product_detail_images[1].filename}
          imageLarge={story.content.product_detail_images[2].filename}
          productImages={story.content.product_detail_images}
          galleryImages={story.content.image_gallery}
          kicker={story.content.new}
          price={story.content.price}
          title={`${story.name} ${category}`}
          description={story.content.description}
          features={story.content.features}
          includedInBox={story.content.included_with_product}
        />
      ))}
      <Section>
        <NavigationList showNav={true} />
      </Section>
      <MissionStatement />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: clamp(1.5rem, 12%, 18rem) 1fr clamp(1.5rem, 12%, 18rem);
  gap: 25px 0;
`;

export const Section = styled.section`
  position: relative;
  grid-column: 2 / 3;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

export async function getStaticProps({ params }) {
  let sbParams = {
    version: 'draft', // or 'published'
    starts_with: `products/${params.category}/${params.product}`,
  };
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories`, sbParams);

  return {
    props: {
      stories: data ? data.stories : false,
      //   key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let sbParams = {
    version: 'draft', // or 'published'
    starts_with: 'products',
  };

  let { data } = await storyblokApi.get('cdn/links', sbParams);
  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].parent_id === 0 || data.links[linkKey].is_folder) {
      return;
    }

    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split('/');

    paths.push({
      params: { category: splittedSlug[1], product: splittedSlug[2] },
    });
  });

  return {
    paths: paths,
    fallback: true,
  };
}
