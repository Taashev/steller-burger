import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from '../../services/types/hooks';
import { getIngredientsStorage } from '../../utils/getIngredientsStorage';

import {
  CurrencyIcon,
  FormattedDate,
} from '@ya.praktikum/react-developer-burger-ui-components';
import SimpleBar from 'simplebar-react';
import { Preloader } from '../Preloader/Preloader';

import styles from './Order-details.module.css';
import { getOrder, getOrderClear } from '../../services/actions/getOrder';

interface OrderDetailsProps {
  page?: any;
}

export function OrderDetails({ page }: OrderDetailsProps): JSX.Element {
  const dispatch = useDispatch();
  const { feedNumber } = useParams<any>();

  const { order, getOrderSuccess } = useSelector(
    (store) => store.getOrderReducer
  );

  const ingredientsStore = useSelector(
    (store) => store.burgerIngredientsReducer.ingredients
  );

  const currentIngredients = getIngredientsStorage(
    order!?.ingredients,
    ingredientsStore
  );

  const status = useCallback((status: string | undefined): string => {
    switch (status) {
      case 'created':
        return 'Готовим';
      case 'pending':
        return 'В ожидании';
      case 'done':
        return 'Выполнен';
      default:
        return `${status}`;
    }
  }, []);

  const price = currentIngredients.reduce((price, i) => {
    price += i.ingredient.price * i.count;
    return price;
  }, 0);

  const date = () => {
    const dateFromServer: any = order?.createdAt;
    return <FormattedDate date={new Date(dateFromServer)} />;
  };

  useEffect(() => {
    dispatch(getOrder(feedNumber));
  }, [feedNumber]);

  useEffect((): any => {
    return () => dispatch(getOrderClear());
    // TODO: dependencies array.length === 0
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!getOrderSuccess ? (
        <Preloader width="50px" height="50px" />
      ) : (
        <div className={`${styles.order} ${page ? styles.order_page : ''}`}>
          <p className={`text_type_digits-default ${styles.order__number}`}>
            #{order!?.number}
          </p>
          <h2 className={`text_type_main-medium ${styles.order__title}`}>
            {order!?.name}
          </h2>
          <p className={styles.order__status}>{status(order!?.status)}</p>
          <div className={styles.order__composition}>
            <p className={`text_type_main-medium ${styles.order__subtitle}`}>
              Состав:
            </p>
            <SimpleBar className={styles.simplebar}>
              <ul className={styles.order__ingredients}>
                {currentIngredients.map(({ count, ingredient }) => (
                  <li key={ingredient._id} className={styles.order__ingredient}>
                    <img src={ingredient.image} alt={ingredient.name} />
                    <p className={styles['order__ingredinet-name']}>
                      {ingredient.name}
                    </p>
                    <p
                      className={`text_type_digits-default ${styles.order__amount}`}
                    >
                      {count} x {ingredient.price}{' '}
                      <CurrencyIcon type="primary" />
                    </p>
                  </li>
                ))}
              </ul>
            </SimpleBar>
          </div>
          <div className={styles.order__footer}>
            <span className={styles.order__date}>{date()}</span>
            <div className={`text_type_digits-default ${styles.order__price}`}>
              <span>{price}</span>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
