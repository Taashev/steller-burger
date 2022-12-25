export interface IIngredient {
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  __v?: number;
  _id: string;
}

export type TSignUp = {
  email: string;
  password: string;
  name: string;
};
export type TSignIn = Omit<TSignUp, 'name'>;
export type TForgotPassword = Omit<TSignUp, 'name' | 'password'>;
export type TResetPassword = Omit<TSignUp, 'name' | 'email'> & {
  token: string;
};
