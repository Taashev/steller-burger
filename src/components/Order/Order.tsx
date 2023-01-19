import { Link, useLocation, useRouteMatch } from 'react-router-dom';

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
import { StatusOrder } from '../Status-order/Status-order';

interface OrderProps {
  order: TOrder;
  historyOrder?: boolean;
}

export function Order({
  order,
  historyOrder = false,
}: OrderProps): JSX.Element {
  const { number, name, ingredients, createdAt, status } = order;
  const location = useLocation<ILocationState>();
  const { path } = useRouteMatch();

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
        pathname: `${path}/${number}`,
        state: { background: location },
      }}
    >
      <div
        className={`${styles.order} ${
          historyOrder ? styles.order_mod_history : ''
        }`}
      >
        <div className={styles.order__header}>
          <span className={`text_type_digits-default ${styles.order__number}`}>
            #{number}
          </span>
          <span className={styles.order__date}>{date()}</span>
        </div>
        <p className={`text_type_main-medium ${styles.order__title}`}>{name}</p>
        {historyOrder && (
          <StatusOrder status={status} extraClass={styles.order__status} />
        )}
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
