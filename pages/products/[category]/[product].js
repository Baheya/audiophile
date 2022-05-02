import styled from 'styled-components';
import { getStoryblokApi, useStoryblokState } from '@storyblok/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { MissionStatement } from '@components/MissionStatement';
import { NavigationList } from '@components/NavigationList';
import { TitleBar } from '@components/TitleBar';
import { ProductDetailCard } from '@components/ProductDetailCard';
import { RelatedProduct } from '@components/RelatedProduct';

export default function Product({ data: initialStories }) {
  const stories = useStoryblokState(initialStories);
  const router = useRouter();
  const { category } = router.query;

  return (
    <>
      <Head>
        <title>{stories.products[0].name}</title>
      </Head>
      <Wrapper>
        <TitleBar title={category} />
        {stories.products.map((story) => (
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
            thumbnail={story.content.product_thumbnail_image[0].filename}
          />
        ))}
        <RelatedProducts>
          {stories.products.map((story) =>
            story.content.related_products.map((product) => (
              <RelatedProduct
                key={product.id}
                name={product.content.name}
                image={product.content.related_product_images}
                slug={product.full_slug}
              />
            ))
          )}
        </RelatedProducts>
        <Section>
          <NavigationList showNav={true} />
        </Section>

        <MissionStatement blok={stories.components.content.body[0]} />
      </Wrapper>
    </>
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

const RelatedProducts = styled.aside`
  display: flex;
  flex-direction: column;
  grid-column: 2 / 3;
  gap: 3rem;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1rem;
  }
`;

export async function getStaticProps({ params }) {
  let sbParams = {
    version: 'draft', // or 'published'
    starts_with: `products/${params.category}/${params.product}`,
    excluding_fields: 'product_images',
    resolve_relations: 'product.related_products',
  };

  let sbStoryParams = {
    version: 'draft',
  };

  const storyblokApi = getStoryblokApi();
  let { data: products } = await storyblokApi.get(`cdn/stories`, sbParams);
  let { data: components } = await storyblokApi.get(
    `cdn/stories/product`,
    sbStoryParams
  );

  return {
    props: {
      data: products
        ? { products: products.stories, components: components.story }
        : false,
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
    fallback: false,
  };
}
