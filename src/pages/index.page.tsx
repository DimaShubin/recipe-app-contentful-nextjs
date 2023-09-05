import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';

import { getServerSideTranslations } from './utils/get-serverside-translations';

import { RecipeTileGrid } from '@src/components/features/recipe';
import { SeoFields } from '@src/components/features/seo';
import { Container } from '@src/components/shared/container';
import { client } from '@src/lib/client';
import { revalidateDuration } from '@src/pages/utils/constants';

const Page = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();

  const recipes = props.recipes;
  const page = props?.page || {
    seoFields: { pageTitle: 'Page title', pageDescription: 'Page description' },
  };

  if (!props.recipes) return;

  return (
    <>
      {page.seoFields && <SeoFields {...page.seoFields} />}
      <Container className="my-8  md:mb-10 lg:mb-16">
        <h2 className="mb-4 md:mb-6">{t('collection.title')}</h2>
        <RecipeTileGrid className="md:grid-cols-2 lg:grid-cols-3" recipes={recipes} />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  try {
    const gqlClient = client;

    const recipesData = await gqlClient.recipeCollection();
    const recipes = recipesData.recipeCollection?.items;

    return {
      revalidate: revalidateDuration,
      props: {
        ...(await getServerSideTranslations(locale)),
        recipes,
      },
    };
  } catch {
    return {
      revalidate: revalidateDuration,
      notFound: true,
    };
  }
};

export default Page;
