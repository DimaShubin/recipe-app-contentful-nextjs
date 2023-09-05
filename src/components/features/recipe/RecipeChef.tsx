import { Chef } from '@src/lib/__generated/sdk';

interface RecipeChefProps {
  chef: Chef;
}

export const RecipeChef = ({ chef }: RecipeChefProps) => {
  return (
    <div className="flex items-center gap-4">
      <h5>Chef: </h5>
      <span className="leading-none text-gray600">{chef?.name}</span>
    </div>
  );
};
