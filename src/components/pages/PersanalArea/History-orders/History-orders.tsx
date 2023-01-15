import { useEffect } from 'react';
import { useDispatch, useSelector } from '../../../../services/types/hooks';
import { wsHistoryOrdersStart } from '../../../../services/actions/wsHistoryOrdersAction';

import SimpleBar from 'simplebar-react';
import { Order } from '../../../Order/Order';

import styles from './History-orders.module.css';
import { Preloader } from '../../../Preloader/Preloader';

export function HistoryOrders() {
  const dispatch = useDispatch();
  const { message, wsConnected } = useSelector(
    (store) => store.WSHistoryOrdersReducer
  );

  useEffect(() => {
    dispatch(wsHistoryOrdersStart());
  }, []);

  return (
    <>
      {!wsConnected ? (
        <Preloader extraClass={styles.preloader} width="40px" height="40px" />
      ) : (
        <SimpleBar className={styles.simplebar}>
          <div className={styles.history}>
            {message?.orders.map((order) => (
              <Order key={order._id} order={order} historyOrder={true} />
            ))}
          </div>
        </SimpleBar>
      )}
    </>
  );
}
