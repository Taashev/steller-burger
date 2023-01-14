import { useCallback } from 'react';
import { useSelector } from '../../../services/types/hooks';
import SimpleBar from 'simplebar-react';
import styles from './Orders-board.module.css';
import { Preloader } from '../../Preloader/Preloader';

export function OrdersBoard(): JSX.Element {
  const { message, wsConnected } = useSelector((store) => store.WSReducer);

  const renderContent = useCallback(
    (node: any) =>
      !wsConnected ? <Preloader width="30px" height="30px" /> : node,
    [wsConnected]
  );

  const orderNumbersDone = message?.orders.filter(
    (order) => order.status === 'done'
  );
  const orderNumbersCreate = message?.orders.filter(
    (order) => order.status !== 'done'
  );

  return (
    <div className={styles.orders}>
      <div className={styles.header}>
        <div className={`${styles.header__container}`}>
          <p className={`text_type_main-medium ${styles.header__title}`}>
            Готовы:
          </p>
          {renderContent(
            <SimpleBar>
              <ul className={`${styles.list} ${styles.list_theme_done}`}>
                {orderNumbersDone?.map((order) => (
                  <li
                    key={order._id}
                    className={`text_type_digits-default ${styles.item}`}
                  >
                    {order.number}
                  </li>
                ))}
              </ul>
            </SimpleBar>
          )}
        </div>
        <div className={styles.header__container}>
          <p className={`text_type_main-medium ${styles.header__title}`}>
            В работе:
          </p>
          {renderContent(
            <SimpleBar>
              <ul className={styles.list}>
                {orderNumbersCreate?.map((order) => (
                  <li
                    key={order._id}
                    className={`text_type_digits-default ${styles.item}`}
                  >
                    {order.number}
                  </li>
                ))}
              </ul>
            </SimpleBar>
          )}
        </div>
      </div>
      <div className={styles.container}>
        <p className={`text_type_main-large ${styles.title}`}>
          Выполнено за все время:
        </p>
        <div className={`text_type_digits-large ${styles.number}`}>
          {renderContent(message?.total)}
        </div>
      </div>
      <div className={styles.container}>
        <p className={`text_type_main-large ${styles.title}`}>
          Выполнено за сегодня:
        </p>
        <div className={`text_type_digits-large ${styles.number}`}>
          {renderContent(message?.totalToday)}
        </div>
      </div>
    </div>
  );
}
