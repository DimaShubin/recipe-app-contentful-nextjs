import { useTranslation } from 'next-i18next';

import { RecipeTagsCollection } from '@src/lib/__generated/sdk';

interface RecipeTagsProps {
  tags: RecipeTagsCollection;
}

export const RecipeTags = ({ tags }: RecipeTagsProps) => {
  const { t } = useTranslation();
  if (!tags?.items.length) return null;

  return (
    <>
      <div className="flex items-center gap-3">
        <h5>{t('recipeDetails.tagLabel')}: </h5>
        <ul className="flex items-center gap-3">
          {tags?.items.map(tag => {
            return (
              <li
                className="rounded bg-purple200 px-2 py-1 text-2xs font-semibold uppercase text-purple600"
                key={tag?.sys.id}
              >
                {tag?.name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
