import { IIngredient, TOrder, IUser } from '../services/types';

export const mockIngredient: IIngredient = {
  calories: 0,
  carbohydrates: 0,
  fat: 0,
  image: 'string',
  image_large: 'string',
  image_mobile: 'string',
  name: 'string',
  price: 0,
  proteins: 0,
  type: 'string',
  __v: 0,
  _id: 'string',
};

export const mockOrder: TOrder = {
  ingredients: ['1', '2', '3'],
  _id: 'string',
  status: 'string',
  number: 1,
  name: 'string',
  createdAt: 'string',
  updatedAt: 'string',
};

export const mockUser = {
  email: 'email',
  name: 'name',
};
