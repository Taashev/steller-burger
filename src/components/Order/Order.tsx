import { Link, useLocation } from 'react-router-dom';

import { TOrder } from '../../services/types';
import { useSelector } from '../../services/types/hooks';
import { ILocationState } from '../../services/types/locationState';

import SimpleBar from 'simplebar-react';
import {
  CurrencyIcon,
  FormattedDate,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { getIngredientsStorage } from '../../utils/getIngredientsStorage';
import styles from './Order.module.css';

interface OrderProps {
  order: TOrder;
}

export function Order({ order }: OrderProps): JSX.Element {
  const { number, name, ingredients, createdAt } = order;
  const location = useLocation<ILocationState>();

  const ingredientsStore = useSelector(
    (store) => store.burgerIngredientsReducer.ingredients
  );

  const currentIngredients = getIngredientsStorage(
    ingredients,
    ingredientsStore
  );

  const price = currentIngredients.reduce((price, i) => {
    price += i.ingredient.price * i.count;
    return price;
  }, 0);

  const date = () => {
    const dateFromServer = createdAt;
    return <FormattedDate date={new Date(dateFromServer)} />;
  };

  return (
    <Link
      className={styles.link}
      to={{
        pathname: `/feed/${number}`,
        state: { background: location },
      }}
    >
      <div className={styles.order}>
        <div className={styles.order__header}>
          <span className={`text_type_digits-default ${styles.order__number}`}>
            #{number}
          </span>
          <span className={styles.order__date}>{date()}</span>
        </div>
        <p className={`text_type_main-medium ${styles.order__title}`}>{name}</p>
        <div className={styles.order__footer}>
          <SimpleBar className={styles.simplebar} id="order_scroll">
            <ul className={styles.order__ingredients}>
              {currentIngredients.map((i: any) => (
                <li key={i.ingredient._id} className={styles.order__ingredient}>
                  <img
                    className={styles.order__img}
                    src={i.ingredient.image}
                    alt={i.ingredient.name}
                  />
                  {i.count > 1 && (
                    <p className={styles.order__count}>+{i.count}</p>
                  )}
                </li>
              ))}
            </ul>
          </SimpleBar>
          <div className={`text_type_digits-default ${styles.order__price}`}>
            <span>{price}</span>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </Link>
  );
}
