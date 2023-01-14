import { IIngredient } from '../services/types';

type ingredient = {
  count: number;
  readonly ingredient: IIngredient;
};

export function getIngredientsStorage(
  ingredientsId: string[] = [],
  ingredientsStore: IIngredient[] = []
): ingredient[] {
  return ingredientsId.reduce((arr: any, id: string) => {
    if (id) {
      const getIngredient = ingredientsStore.find(({ _id }) => _id === id);
      const checkingIngredient = arr.some(
        (i: ingredient) => i.ingredient._id === getIngredient?._id
      );

      if (arr.length && checkingIngredient) {
        arr = arr.map((i: ingredient) => {
          if (i.ingredient._id === getIngredient?._id) {
            i.count += 1;
          }
          return i;
        });
      } else {
        arr = [...arr, { ingredient: getIngredient, count: 1 }];
      }
    }

    return arr;
  }, []);
}
