import { HTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';

import { RecipeTile } from '@src/components/features/recipe/RecipeTile';
import { Recipe } from '@src/lib/__generated/sdk';

interface RecipeTileGridProps extends HTMLProps<HTMLDivElement> {
  recipes?: Array<Recipe | null>;
}

export const RecipeTileGrid = ({ recipes, className, ...props }: RecipeTileGridProps) => {
  return recipes && recipes.length > 0 ? (
    <div
      className={twMerge(
        'grid grid-cols-1 gap-y-4 gap-x-5 md:grid-cols-3 lg:gap-x-12 lg:gap-y-12',
        className,
      )}
      {...props}
    >
      {recipes.map(recipe => {
        return recipe ? <RecipeTile key={recipe.sys.id} recipe={recipe} /> : null;
      })}
    </div>
  ) : null;
};
