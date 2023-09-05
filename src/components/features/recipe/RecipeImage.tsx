import { CtfImage } from '@src/components/features/contentful';
import { Recipe } from '@src/lib/__generated/sdk';

interface RecipeImageProps {
  recipe: Recipe;
}
export const RecipeImage = ({ recipe }: RecipeImageProps) => {
  return recipe.photo ? (
    <figure>
      <div className="flex justify-center">
        <CtfImage
          nextImageProps={{
            className: 'mt-0 mb-0 ',
          }}
          {...recipe.photo}
        />
      </div>
    </figure>
  ) : null;
};
