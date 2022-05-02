import { getStoryblokApi, useStoryblokState } from '@storyblok/react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { MissionStatement } from '@components/MissionStatement';
import { NavigationList } from '@components/NavigationList';
import { ProductCard } from '@components/ProductCard/ProductCard';
import { TitleBar } from '@components/TitleBar';

export default function Category({ data: initialStories }) {
  const stories = useStoryblokState(initialStories);
  const router = useRouter();
  const { category } = router.query;

  return (
    <Wrapper>
      <TitleBar title={category} />
      {stories.products.map((story) => (
        <ProductCard
          key={story.id}
          slug={`/${story.full_slug}`}
          image={`${story.content.product_images[0].filename}/m/`}
          imageMedium={`${story.content.product_images[1].filename}/m/`}
          imageLarge={`${story.content.product_images[2].filename}/m/`}
          kicker={story.content.new}
          title={`${story.name} ${category}`}
          description={story.content.description}
        />
      ))}
      <Section>
        <NavigationList showNav={true} />
      </Section>
      <MissionStatement blok={stories.components.content.body[0]} />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: clamp(1.5rem, 8%, 18rem) 1fr clamp(1.5rem, 8%, 18rem);
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
    version: 'draft',
    starts_with: `products/${params.category}`,
  };

  let sbStoryParams = {
    version: 'draft',
  };

  const storyblokApi = getStoryblokApi();
  let { data: products } = await storyblokApi.get(`cdn/stories`, sbParams);
  let { data: components } = await storyblokApi.get(
    `cdn/stories/category`,
    sbStoryParams
  );

  return {
    props: {
      data: products
        ? { products: products.stories, components: components.story }
        : false,
      // key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let sbParams = {
    version: 'draft',
    starts_with: 'products',
    excluding_fields:
      'product_detail_images,related_product_images,features,price,image_gallery',
  };

  let { data } = await storyblokApi.get('cdn/links', sbParams);

  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].parent_id === 0 || !data.links[linkKey].is_folder) {
      return;
    }

    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split('/');

    paths.push({ params: { category: splittedSlug[1] } });
  });

  return {
    paths,
    fallback: false,
  };
}
