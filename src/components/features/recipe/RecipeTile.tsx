import Link from 'next/link';
import { HTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';

import { CtfImage } from '@src/components/features/contentful';
import { Recipe } from '@src/lib/__generated/sdk';

interface RecipeTileProps extends HTMLProps<HTMLDivElement> {
  recipe: Recipe;
}

export const RecipeTile = ({ recipe, className }: RecipeTileProps) => {
  const { title } = recipe;

  return (
    <Link className="flex flex-col" href={`/${recipe.sys.id}`}>
      <div
        className={twMerge(
          'flex flex-1 transform flex-col overflow-hidden rounded-2xl border border-gray300 shadow-lg transition duration-500 hover:scale-105',
          className,
        )}
      >
        {recipe.photo && (
          <div>
            <CtfImage
              nextImageProps={{ className: 'object-cover aspect-[16/10] w-full' }}
              {...recipe.photo}
            />
          </div>
        )}
        <div className="flex flex-1 flex-col py-3 px-4 md:px-5 md:py-4 lg:px-7 lg:py-5">
          {title && <p className="h3 mb-2 text-gray800 md:mb-3">{title}</p>}
        </div>
      </div>
    </Link>
  );
};
