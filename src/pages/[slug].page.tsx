import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { getServerSideTranslations } from './utils/get-serverside-translations';

import { RecipeContent, RecipeImage } from '@src/components/features/recipe';
import { SeoFields } from '@src/components/features/seo';
import { Container } from '@src/components/shared/container';
import { client } from '@src/lib/client';
import { revalidateDuration } from '@src/pages/utils/constants';

const Page = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const recipe = props.recipe;

  if (!recipe) return null;

  return (
    <>
      {<SeoFields {...(recipe.seoFields || { seoFields: { title: 'Recipe details page' } })} />}
      <div className="grid gap-4 md:grid-cols-2">
        <Container>
          <RecipeImage recipe={recipe} />
        </Container>
        <Container className="max-w-4xl sm:mt-3">
          <RecipeContent recipe={recipe} />
        </Container>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  if (!params?.slug || !locale) {
    return {
      notFound: true,
      revalidate: revalidateDuration,
    };
  }

  const gqlClient = client;

  try {
    const recipePageData = await gqlClient.getRecipeById({ id: params.slug.toString() });

    const recipe = recipePageData.recipe;

    if (!recipePageData || !recipe) {
      return {
        notFound: true,
        revalidate: revalidateDuration,
      };
    }

    return {
      revalidate: revalidateDuration,
      props: {
        ...(await getServerSideTranslations(locale)),
        recipe,
      },
    };
  } catch {
    return {
      notFound: true,
      revalidate: revalidateDuration,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const dataPerLocale = locales
    ? await Promise.all(locales.map(() => client.recipeCollection()))
    : [];

  const paths = dataPerLocale
    .flatMap((data, index) =>
      data.recipeCollection?.items.map(recipe =>
        recipe?.sys.id
          ? {
              params: {
                slug: recipe.sys.id,
              },
              locale: locales?.[index],
            }
          : undefined,
      ),
    )
    .filter(Boolean);

  return {
    paths,
    fallback: 'blocking',
  };
};

export default Page;
