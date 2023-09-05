import ReactMarkdown from 'react-markdown';

import { RecipeChef, RecipeTags } from './';

import { Recipe, RecipeTagsCollection } from '@src/lib/__generated/sdk';

interface RecipeContentProps {
  recipe: Recipe;
}
export const RecipeContent = ({ recipe }: RecipeContentProps) => {
  return (
    <div className="flex h-full flex-col gap-4">
      <h1>{recipe?.title}</h1>
      <ReactMarkdown linkTarget="_blank">{recipe.description as string}</ReactMarkdown>
      <div className="mb-2 mt-auto flex flex-col flex-wrap gap-4">
        {recipe.chef && <RecipeChef chef={recipe.chef} />}
        {recipe.tagsCollection && (
          <RecipeTags tags={recipe.tagsCollection as RecipeTagsCollection} />
        )}
      </div>
    </div>
  );
};
